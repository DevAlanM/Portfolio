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

