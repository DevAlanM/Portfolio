const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([-3.758637, -38.516913], 11);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> | Dark Tiles by Carto',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  L.marker([-3.758637, -38.516913])
    .addTo(map)
    .bindPopup('Estou aqui 📍')
    .openPopup();
});

function toggleLanguage() {
  const currentLang = localStorage.getItem("language") || "pt";
  const newLang = currentLang === "pt" ? "en" : "pt";
  setLanguage(newLang);
  localStorage.setItem("language", newLang);
}

function setLanguage(lang) {
  const isPT = lang === "pt";

  document.getElementById("pt-title").style.display = isPT ? "inline" : "none";
  document.getElementById("en-title").style.display = isPT ? "none" : "inline";

  document.getElementById("pt-text").style.display = isPT ? "block" : "none";
  document.getElementById("en-text").style.display = isPT ? "none" : "block";
}

// Carrega a linguagem salva ao iniciar
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "pt";
  setLanguage(savedLang);
});

function toggleTheme() {
  document.body.classList.toggle('light-theme');
}
