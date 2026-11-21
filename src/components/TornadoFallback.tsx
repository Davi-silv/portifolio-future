"use client";

/** CSS stand-in when WebGL is blocked — keeps motion on the page. */
export function TornadoFallback() {
  return (
    <div className="tornado-fallback absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="tornado-fallback__glow tornado-fallback__glow--signal" />
      <div className="tornado-fallback__glow tornado-fallback__glow--ember" />
      <div className="tornado-fallback__core" />
      <div className="tornado-fallback__ring tornado-fallback__ring--a" />
      <div className="tornado-fallback__ring tornado-fallback__ring--b" />
      <div className="tornado-fallback__ring tornado-fallback__ring--c" />
      <div className="tornado-fallback__sparks" />
    </div>
  );
}
