const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.querySelector('select[name="product"]');
    if (select) select.value = link.dataset.product;
  });
});

const enterpriseMap = document.querySelector("#enterprise-map");
const globeMap = document.querySelector("#globe-map");
const networkStage = document.querySelector(".network-stage");
document.querySelectorAll("[data-map-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    const showGlobe = button.dataset.mapMode === "globe";
    if (enterpriseMap) enterpriseMap.hidden = showGlobe;
    if (globeMap) globeMap.hidden = !showGlobe;
    networkStage?.classList.toggle("globe-mode-active", showGlobe);
    networkStage?.classList.toggle("map-mode-active", !showGlobe);
    document.querySelectorAll("[data-map-mode]").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
  });
});

document.querySelectorAll("[data-globe-zoom]").forEach((button) => {
  button.addEventListener("click", () => window.hengbingGlobe?.zoom(Number(button.dataset.globeZoom)));
});
document.querySelector("[data-globe-reset]")?.addEventListener("click", () => window.hengbingGlobe?.focusChina());

document.querySelector("#quote-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Quotation request — ${data.get("product") || "Ice pack"}`;
  const body = [
    "Hello Hengbing Sales,",
    "",
    "I would like to request a quotation.",
    "",
    `Name: ${data.get("name") || ""}`,
    `Company: ${data.get("company") || ""}`,
    `Business email: ${data.get("email") || ""}`,
    `Destination country: ${data.get("country") || ""}`,
    `Product: ${data.get("product") || ""}`,
    `Estimated quantity: ${data.get("quantity") || ""}`,
    `Customization: ${data.get("customization") || ""}`,
    "",
    "Message:",
    data.get("message") || "",
  ].join("\n");
  window.location.href = `mailto:lintao20060216@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector("#year").textContent = new Date().getFullYear();
