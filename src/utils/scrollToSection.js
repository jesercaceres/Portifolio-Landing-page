/**
 * Scroll suave para âncoras (#section). Usar em onClick de links da navbar/hero.
 * @param {React.MouseEvent} e - evento de clique
 * @param {number} offset - pixels de offset (ex.: altura da navbar fixa)
 */
export function scrollToSection(e, offset = 80) {
  const link = e.currentTarget;
  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  e.preventDefault();
  const id = href.slice(1);
  if (id === "page-top" || id === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
    if (window.history.replaceState) {
      window.history.replaceState(null, "", href);
    }
  }
}
