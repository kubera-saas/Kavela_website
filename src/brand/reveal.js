import { useEffect } from "react";

/* Reveal on scroll: [data-r] fades up, [data-rs] staggers its [data-rc] children.
   Shared by kavela.co and healthcare.kavela.co. */
export function useReveal(ref) {
  useEffect(() => {
    const root = ref?.current || document;
    const els = [...root.querySelectorAll("[data-r],[data-rs]")];
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("vis");
        [...e.target.querySelectorAll("[data-rc]")].forEach((c, i) => {
          c.style.transitionDelay = `${i * 120}ms`;
        });
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
}
