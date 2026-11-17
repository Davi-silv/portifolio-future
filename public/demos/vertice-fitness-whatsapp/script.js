(() => {
  const WHATSAPP_NUMBER = "5522999315667";
  const MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=Vertice+Fitness+Academia+de+Luxo+Av.+Atlantica+1900+Copacabana+Rio+de+Janeiro";
  const UNIT_ADDRESS =
    "Av. Atlântica, 1900 — Copacabana, Rio de Janeiro · Torre Vértice, 3º andar";

  const chatBody = document.getElementById("chat-body");
  const composer = document.getElementById("composer");
  const input = document.getElementById("user-input");
  const statusText = document.getElementById("status-text");

  /** @type {"askName" | "menu" | "schedule" | "register" | "registerPhone" | "idle"} */
  let step = "askName";
  let userName = "";
  let draftStudent = { name: "", phone: "" };
  let optionsLocked = false;

  const plans = [
    {
      id: "black",
      title: "Black",
      price: "R$ 449/mês",
      detail: "Musculação · bike indoor · aulas coletivas · app Vértice · avaliação inicial",
    },
    {
      id: "gold",
      title: "Gold",
      price: "R$ 789/mês",
      detail: "Tudo do Black + personal 4x/mês · spa recovery · nutricionista · bike reservada",
    },
    {
      id: "platinum",
      title: "Platinum",
      price: "R$ 1.290/mês",
      detail: "Tudo do Gold + personal ilimitado · concierge · lounge VIP · prioridade no cycling",
    },
  ];

  const services = [
    { title: "Musculação (piso premium Technogym)", price: "incluso nos planos" },
    { title: "Bike indoor / cycling studio", price: "incluso nos planos · avulsa R$ 95" },
    { title: "Functional & HIIT VIP", price: "incluso nos planos · avulsa R$ 110" },
    { title: "Personal Training privado", price: "a partir de R$ 280/sessão" },
    { title: "Studio Pilates Reformer", price: "R$ 190/aula" },
    { title: "Spa & Recovery (crio + massagem)", price: "R$ 320/sessão" },
    { title: "Assessoria nutricional premium", price: "R$ 650/mês" },
    { title: "Day Pass convidado", price: "R$ 180/dia" },
  ];

  const scheduleSlots = [
    { id: "musculacao", label: "Amanhã · 07:00 — Musculação (orientação)" },
    { id: "bike", label: "Amanhã · 08:30 — Bike indoor" },
    { id: "tarde", label: "Amanhã · 18:30 — Functional VIP" },
    { id: "noite", label: "Quinta · 20:00 — Pilates Reformer" },
  ];

  const mainMenu = [
    { id: "planos", label: "Planos e valores" },
    { id: "servicos", label: "Serviços da unidade" },
    { id: "agendar", label: "Agendar treino" },
    { id: "horarios", label: "Horários de funcionamento" },
    { id: "cadastro", label: "Cadastro de aluno" },
    { id: "maps", label: "Como chegar (Google Maps)", accent: true },
    { id: "atendente", label: "Falar com atendente (WhatsApp)", accent: true },
  ];

  function nowTime() {
    return new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      chatBody.scrollTop = chatBody.scrollHeight;
    });
  }

  function setStatus(text) {
    statusText.replaceChildren();
    const dot = document.createElement("i");
    dot.className = "status-dot";
    dot.setAttribute("aria-hidden", "true");
    statusText.append(dot, document.createTextNode(` ${text}`));
  }

  function addUserMessage(text) {
    const wrap = document.createElement("div");
    wrap.className = "msg msg--user";
    wrap.innerHTML = `
      <div class="msg__bubble"></div>
      <span class="msg__time"></span>
    `;
    wrap.querySelector(".msg__bubble").textContent = text;
    wrap.querySelector(".msg__time").textContent = nowTime();
    chatBody.appendChild(wrap);
    scrollToBottom();
  }

  function showTyping() {
    const el = document.createElement("div");
    el.className = "msg msg--bot";
    el.dataset.typing = "1";
    el.innerHTML = `<div class="typing" aria-label="Digitando"><span></span><span></span><span></span></div>`;
    chatBody.appendChild(el);
    scrollToBottom();
    return el;
  }

  /**
   * @param {string} text
   * @param {{ media?: boolean, options?: Array<{id:string,label:string,accent?:boolean}>, htmlExtra?: string }} [extras]
   */
  function addBotMessage(text, extras = {}) {
    return new Promise((resolve) => {
      setStatus("digitando…");
      const typing = showTyping();
      const delay = Math.min(1600, 450 + text.length * 12);

      window.setTimeout(() => {
        typing.remove();
        const wrap = document.createElement("div");
        wrap.className = "msg msg--bot";

        const bubble = document.createElement("div");
        bubble.className = "msg__bubble";

        if (extras.media) {
          const media = document.createElement("div");
          media.className = "msg__media";
          media.innerHTML = `<img src="logo.png" alt="Vértice Fitness" />`;
          bubble.appendChild(media);
          const slogan = document.createElement("span");
          slogan.className = "msg__slogan";
          slogan.textContent = "SUPERE SEUS LIMITES";
          bubble.appendChild(slogan);
        }

        const body = document.createElement("div");
        body.textContent = text;
        bubble.appendChild(body);

        if (extras.htmlExtra) {
          const extra = document.createElement("div");
          extra.innerHTML = extras.htmlExtra;
          bubble.appendChild(extra);
        }

        wrap.appendChild(bubble);

        if (extras.options?.length) {
          const list = document.createElement("div");
          list.className = "options";
          extras.options.forEach((opt) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = `option-btn${opt.accent ? " option-btn--accent" : ""}`;
            btn.textContent = opt.label;
            btn.dataset.optionId = opt.id;
            btn.addEventListener("click", () => onOption(opt.id, opt.label, list));
            list.appendChild(btn);
          });
          wrap.appendChild(list);
        }

        const time = document.createElement("span");
        time.className = "msg__time";
        time.textContent = nowTime();
        wrap.appendChild(time);

        chatBody.appendChild(wrap);
        setStatus("online · atendimento premium");
        scrollToBottom();
        resolve(wrap);
      }, delay);
    });
  }

  function lockOptions(container) {
    optionsLocked = true;
    container.querySelectorAll("button").forEach((btn) => {
      btn.disabled = true;
    });
  }

  async function showMainMenu(intro) {
    step = "menu";
    optionsLocked = false;
    await addBotMessage(
      intro ||
        `${greetingName()}, como posso ajudar hoje?\nEscolha uma opção abaixo:`,
      { options: mainMenu }
    );
  }

  function greetingName() {
    return userName ? `Olá, ${userName}` : "Olá";
  }

  async function onOption(id, label, container, { echoUser = true } = {}) {
    if (optionsLocked && container) return;
    if (container) lockOptions(container);
    if (echoUser && label) addUserMessage(label);

    if (id === "planos") {
      const lines = plans
        .map((p) => `• ${p.title} — ${p.price}\n  ${p.detail}`)
        .join("\n\n");
      await addBotMessage(
        `Nossos planos Vértice Fitness:\n\n${lines}\n\nTaxa de adesão: R$ 190 (isentas no Platinum).`
      );
      await showMainMenu("Deseja ver outra opção?");
      return;
    }

    if (id === "servicos") {
      const lines = services
        .map((s) => `• ${s.title} — ${s.price}`)
        .join("\n");
      await addBotMessage(
        `Serviços da unidade Vértice Fitness:\n\n${lines}\n\nAmbientes climatizados, toalhas premium e vestiários com amenities.`
      );
      await showMainMenu("Posso ajudar com mais alguma coisa?");
      return;
    }

    if (id === "horarios") {
      await addBotMessage(
        "Horários Vértice Fitness Copacabana:\n\n• Seg a Sex — 05:30 às 23:00\n• Sábado — 07:00 às 20:00\n• Domingo e feriados — 08:00 às 14:00\n\nLounge VIP e spa seguem o mesmo expediente, com última entrada 45 min antes do fechamento."
      );
      await showMainMenu("Quer agendar um horário ou ver planos?");
      return;
    }

    if (id === "agendar") {
      step = "schedule";
      optionsLocked = false;
      await addBotMessage("Perfeito. Qual horário prefere para o treino?", {
        options: [
          ...scheduleSlots.map((s) => ({ id: s.id, label: s.label })),
          { id: "menu", label: "Voltar ao menu" },
        ],
      });
      return;
    }

    if (id === "cadastro") {
      step = "register";
      draftStudent = { name: userName || "", phone: "" };
      await addBotMessage(
        draftStudent.name
          ? `Vamos cadastrar você, ${draftStudent.name}.\nConfirme ou digite o nome completo para a ficha:`
          : "Vamos iniciar seu cadastro.\nDigite o nome completo do aluno:"
      );
      input.focus();
      return;
    }

    if (id === "maps") {
      await addBotMessage(
        `Como chegar na Vértice Fitness:\n\n${UNIT_ADDRESS}\n\nEstacionamento valet no térreo. Vou abrir o Google Maps para você.`
      );
      window.setTimeout(() => {
        window.open(MAPS_URL, "_blank", "noopener,noreferrer");
      }, 600);
      await showMainMenu("Mapa aberto. Precisa de mais alguma coisa?");
      return;
    }

    if (id === "atendente") {
      const msg = encodeURIComponent(
        `Olá, Vértice Fitness! Sou ${userName || "interessado(a)"} e gostaria de falar com um atendente.`
      );
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
      await addBotMessage(
        "Claro. Vou te conectar com nossa equipe no WhatsApp agora.\nHorário de atendimento humano: 08:00 às 21:00."
      );
      window.setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
      }, 600);
      await showMainMenu("Atendente acionado. Posso ajudar com mais algo por aqui?");
      return;
    }

    if (id === "menu") {
      await showMainMenu();
      return;
    }

    const slot = scheduleSlots.find((s) => s.id === id);
    if (slot) {
      await addBotMessage(
        `Treino reservado com sucesso.\n\n${slot.label}\nAluno: ${userName || "convidado"}\n\nVocê receberá a confirmação por WhatsApp. Chegue 10 min antes para o check-in biométrico.`
      );
      await showMainMenu("Agendamento concluído. O que mais deseja?");
      return;
    }
  }

  async function handleText(raw) {
    const text = raw.trim();
    if (!text) return;

    addUserMessage(text);
    input.value = "";

    if (step === "askName") {
      userName = text.split(/\s+/)[0].replace(/[^\p{L}\p{N}-]/gu, "");
      if (!userName) userName = text.slice(0, 24);
      userName = userName.charAt(0).toUpperCase() + userName.slice(1);
      await addBotMessage(
        `${greetingName()}! Bem-vindo(a) à Vértice Fitness.\nAqui você consulta planos, agenda treinos, cadastra-se e fala com nosso concierge.`
      );
      await showMainMenu();
      return;
    }

    if (step === "register") {
      draftStudent.name = text;
      step = "registerPhone";
      await addBotMessage(
        `Obrigado, ${draftStudent.name}.\nAgora digite um WhatsApp com DDD (somente números):`
      );
      return;
    }

    if (step === "registerPhone") {
      const digits = text.replace(/\D/g, "");
      if (digits.length < 10) {
        await addBotMessage(
          "Não reconheci o número. Envie com DDD, por exemplo: 21999998888"
        );
        return;
      }
      draftStudent.phone = digits;
      await addBotMessage(
        `Cadastro registrado com sucesso.\n\nAluno: ${draftStudent.name}\nWhatsApp: +${digits.startsWith("55") ? digits : `55${digits}`}\nStatus: lista de espera / visita guiada\n\nNossa equipe entrará em contato em até 1 hora útil.`
      );
      await showMainMenu("Cadastro pronto. Deseja explorar planos ou agendar?");
      return;
    }

    if (step === "menu" || step === "schedule" || step === "idle") {
      const lower = text.toLowerCase();
      if (/plano|valor|preço|preco/.test(lower)) {
        await onOption("planos", null, null, { echoUser: false });
        return;
      }
      if (/serviço|servico|personal|spa|musculação|musculacao|bike|cycling/.test(lower)) {
        await onOption("servicos", null, null, { echoUser: false });
        return;
      }
      if (/agenda|treino|marcar/.test(lower)) {
        optionsLocked = false;
        step = "schedule";
        await addBotMessage("Claro. Escolha um horário:", {
          options: [
            ...scheduleSlots.map((s) => ({ id: s.id, label: s.label })),
            { id: "menu", label: "Voltar ao menu" },
          ],
        });
        return;
      }
      if (/hora|funcionamento|abre|fecha/.test(lower)) {
        await onOption("horarios", null, null, { echoUser: false });
        return;
      }
      if (/mapa|chegar|endereço|endereco|local/.test(lower)) {
        await onOption("maps", null, null, { echoUser: false });
        return;
      }
      if (/atendente|humano|falar|whatsapp/.test(lower)) {
        await onOption("atendente", null, null, { echoUser: false });
        return;
      }
      if (/cadastro|matricula|aluno/.test(lower)) {
        optionsLocked = false;
        step = "register";
        draftStudent = { name: userName || "", phone: "" };
        await addBotMessage(
          draftStudent.name
            ? `Vamos cadastrar você, ${draftStudent.name}. Digite o nome completo:`
            : "Digite o nome completo do aluno:"
        );
        return;
      }
      await showMainMenu(
        "Não entendi completamente. Use as opções abaixo para navegar com facilidade:"
      );
    }
  }

  composer.addEventListener("submit", (event) => {
    event.preventDefault();
    handleText(input.value);
  });

  async function boot() {
    input.disabled = true;
    await addBotMessage(
      "Bem-vindo(a) à Vértice Fitness.\n\nPara começarmos, qual é o seu nome?",
      { media: true }
    );
    step = "askName";
    input.disabled = false;
    input.focus();
  }

  function splitLetters(root = document) {
    root.querySelectorAll("[data-letters]").forEach((el) => {
      if (el.dataset.split === "1") return;
      const text = el.textContent;
      el.textContent = "";
      el.setAttribute("aria-label", text);
      [...text].forEach((ch) => {
        const span = document.createElement("span");
        span.className = ch === " " ? "char char--space" : "char";
        span.textContent = ch === " " ? "\u00A0" : ch;
        span.setAttribute("aria-hidden", "true");
        el.appendChild(span);
      });
      el.dataset.split = "1";
    });
  }

  document.querySelectorAll(".brand__rail > span:not([aria-hidden])").forEach((el) => {
    el.classList.add("letter-fx");
    el.dataset.letters = "";
  });

  splitLetters();

  const stage = document.querySelector("[data-parallax]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (stage && !reduceMotion) {
    let raf = 0;
    const onMove = (event) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        stage.style.setProperty("--px", (x * 10).toFixed(2));
        stage.style.setProperty("--py", (y * 8).toFixed(2));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
  }

  boot();
})();
