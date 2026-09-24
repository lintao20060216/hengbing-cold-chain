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
document.querySelectorAll("[data-map-view]").forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.mapView;
    const viewBox = view === "world" ? enterpriseMap?.dataset.worldView : enterpriseMap?.dataset.chinaView;
    if (enterpriseMap && viewBox) enterpriseMap.setAttribute("viewBox", viewBox);
    document.querySelectorAll("[data-map-view]").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
  });
});

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
