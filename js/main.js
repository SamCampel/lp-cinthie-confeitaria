const b = document.querySelector(".menu-btn"),
  n = document.getElementById("nav");
const set = (v) => {
  n.classList.toggle("aberto", v);
  b.setAttribute("aria-expanded", v);
};
b.addEventListener("click", (e) => {
  e.stopPropagation();
  set(!n.classList.contains("aberto"));
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") set(false);
});
document.addEventListener("click", (e) => {
  if (!n.contains(e.target)) set(false);
});
n.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => set(false)));
