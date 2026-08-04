const WHATSAPP_NUMBER = "5522999315667";
const MAX_QTY = 99;
const UNIT_PRICE = 3;
const BOX_SIZE = 4;
const BOX_PRICE = 12;
const PRICE_CENTO = {
  tradicional: 160,
  gourmet: 250,
};

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const desktopQuery = window.matchMedia("(min-width: 821px)");

const setMenuOpen = (open) => {
  if (!toggle || !nav || !header) return;
  nav.classList.toggle("is-open", open);
  header.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  document.body.style.overflow = open ? "hidden" : "";
};

const onScroll = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (toggle && nav && header) {
  toggle.addEventListener("click", () => {
    setMenuOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  const syncDesktop = () => {
    if (desktopQuery.matches) setMenuOpen(false);
  };

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", syncDesktop);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(syncDesktop);
  }

  window.addEventListener("resize", syncDesktop, { passive: true });
}

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  revealItems.forEach((el) => observer.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}

const orderForm = document.querySelector("#pedido-form");
const orderCount = document.querySelector("#pedido-count");
const orderPack = document.querySelector("#pedido-pack");
const orderTotal = document.querySelector("#pedido-total");
const orderHint = document.querySelector("#pedido-hint");
const orderBar = document.querySelector("#pedido-bar");
const orderClear = document.querySelector("#pedido-limpar");
const orderSubmit = document.querySelector("#pedido-enviar");
const flavorInputs = document.querySelectorAll(".flavor__input");

const clampQty = (value) => {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number) || number < 0) return 0;
  return Math.min(MAX_QTY, number);
};

const formatMoney = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const setQty = (input, value) => {
  const qty = clampQty(value);
  input.value = String(qty);

  const flavor = input.closest(".flavor");
  const minus = flavor?.querySelector('[data-action="minus"]');
  const plus = flavor?.querySelector('[data-action="plus"]');

  flavor?.classList.toggle("is-selected", qty > 0);
  if (minus) minus.disabled = qty <= 0;
  if (plus) plus.disabled = qty >= MAX_QTY;

  return qty;
};

const getSelectedFlavors = () => {
  const tradicionais = [];
  const gourmet = [];
  let units = 0;
  let kinds = 0;

  flavorInputs.forEach((input) => {
    const qty = clampQty(input.value);
    if (!qty) return;

    const item = {
      name: input.dataset.name || input.value,
      qty,
      total: qty * UNIT_PRICE,
    };

    units += qty;
    kinds += 1;

    if (input.dataset.linha === "tradicional") {
      tradicionais.push(item);
    } else {
      gourmet.push(item);
    }
  });

  const boxes = Math.floor(units / BOX_SIZE);
  const loose = units % BOX_SIZE;
  const amount = units * UNIT_PRICE;

  return {
    tradicionais,
    gourmet,
    units,
    kinds,
    boxes,
    loose,
    total: units,
    amount,
  };
};

const formatItem = ({ name, qty }) => `${qty}x ${name}`;

const formatPackSummary = ({ units, boxes, loose }) => {
  if (!units) {
    return `Caixinha com ${BOX_SIZE} unidades: ${formatMoney(BOX_PRICE)}`;
  }

  const parts = [];
  if (boxes) {
    parts.push(
      boxes === 1
        ? `1 caixinha (${BOX_SIZE} un.)`
        : `${boxes} caixinhas (${boxes * BOX_SIZE} un.)`
    );
  }
  if (loose) {
    parts.push(loose === 1 ? "1 unidade avulsa" : `${loose} unidades avulsas`);
  }

  return parts.join(" + ");
};

const buildWhatsAppMessage = (selection) => {
  const { tradicionais, gourmet, total, amount, boxes, loose } = selection;

  if (!total) {
    return "Olá! Gostaria de fazer um pedido na Brigadeirice.";
  }

  const lines = [
    "Olá! Gostaria de fazer um pedido na Brigadeirice:",
    "",
    `*Tabela:* unidade ${formatMoney(UNIT_PRICE)} · caixinha com ${BOX_SIZE} = ${formatMoney(BOX_PRICE)}`,
    `*Cento:* tradicionais R$ ${PRICE_CENTO.tradicional} · gourmet R$ ${PRICE_CENTO.gourmet}`,
    "",
  ];

  if (tradicionais.length) {
    lines.push(`*Sabores tradicionais* (cento R$ ${PRICE_CENTO.tradicional}):`);
    tradicionais.forEach((item) => lines.push(`- ${formatItem(item)}`));
    lines.push("");
  }

  if (gourmet.length) {
    lines.push(`*Sabores gourmet* (cento R$ ${PRICE_CENTO.gourmet}):`);
    gourmet.forEach((item) => lines.push(`- ${formatItem(item)}`));
    lines.push("");
  }

  lines.push(`*Total de doces:* ${total}`);
  lines.push(`*Montagem:* ${formatPackSummary({ units: total, boxes, loose })}`);
  lines.push(`*Valor total:* ${formatMoney(amount)}`);
  lines.push("");
  lines.push("Aguardo o retorno para finalizar o pedido. 🙂");
  return lines.join("\n");
};

const buildWhatsAppUrl = (selection) => {
  const text = encodeURIComponent(buildWhatsAppMessage(selection));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

const updateOrderUI = () => {
  const selection = getSelectedFlavors();
  const { units, kinds, amount, boxes, loose } = selection;
  const ready = units > 0;

  flavorInputs.forEach((input) => setQty(input, input.value));

  if (orderCount) {
    if (!units) {
      orderCount.textContent = "Nenhum doce selecionado";
    } else if (units === 1) {
      orderCount.textContent = "1 doce selecionado";
    } else if (kinds === 1) {
      orderCount.textContent = `${units} doces do mesmo sabor`;
    } else {
      orderCount.textContent = `${units} doces · ${kinds} sabores`;
    }
  }

  if (orderPack) {
    orderPack.textContent = formatPackSummary({ units, boxes, loose });
  }

  if (orderTotal) {
    orderTotal.textContent = ready
      ? `Total: ${formatMoney(amount)}`
      : `Total: ${formatMoney(0)}`;
  }

  if (orderHint) {
    orderHint.textContent = ready
      ? `Unidade ${formatMoney(UNIT_PRICE)} · caixinha ${formatMoney(BOX_PRICE)} · cento trad. R$ ${PRICE_CENTO.tradicional} · gourmet R$ ${PRICE_CENTO.gourmet}`
      : "Escolha a quantidade de ao menos um sabor.";
  }

  if (orderBar) orderBar.classList.toggle("is-ready", ready);
  if (orderClear) orderClear.disabled = !ready;
  if (orderSubmit) orderSubmit.disabled = !ready;

  return selection;
};

const openWhatsAppOrder = (event) => {
  const selection = updateOrderUI();
  if (!selection.total) {
    event.preventDefault();
    orderForm?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  event.preventDefault();
  window.open(buildWhatsAppUrl(selection), "_blank", "noopener,noreferrer");
};

if (orderForm) {
  orderForm.addEventListener("click", (event) => {
    const button = event.target.closest(".flavor__btn");
    if (!button) return;

    const flavor = button.closest(".flavor");
    const input = flavor?.querySelector(".flavor__input");
    if (!input) return;

    const current = clampQty(input.value);
    const next =
      button.dataset.action === "plus" ? current + 1 : current - 1;

    setQty(input, next);
    updateOrderUI();
  });

  flavorInputs.forEach((input) => {
    input.addEventListener("input", () => {
      setQty(input, input.value);
      updateOrderUI();
    });

    input.addEventListener("blur", () => {
      setQty(input, input.value || 0);
      updateOrderUI();
    });
  });

  orderClear?.addEventListener("click", () => {
    flavorInputs.forEach((input) => setQty(input, 0));
    updateOrderUI();
  });

  orderForm.addEventListener("submit", openWhatsAppOrder);
}

updateOrderUI();
