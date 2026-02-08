/* THEME TOGGLE */
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light");
  body.classList.toggle("dark");

  localStorage.setItem("theme", body.className);
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.body.className = savedTheme;
};

/* WORLD MAP */
const map = L.map('worldMap').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'OSINT Map'
}).addTo(map);

/* INTELLIGENCE MARKERS (Dummy OSINT data) */
const intelPoints = [
  { lat: 38.9, lng: -77.0, msg: "Washington DC: Govt metadata activity" },
  { lat: 28.6, lng: 77.2, msg: "New Delhi: Telecom & SIM data" },
  { lat: 51.5, lng: -0.1, msg: "London: Financial OSINT" },
  { lat: 35.6, lng: 139.7, msg: "Tokyo: IoT surveillance nodes" }
];

intelPoints.forEach(p => {
  L.circleMarker([p.lat, p.lng], {
    radius: 8,
    color: '#4fd1c5',
    fillOpacity: 0.7
  })
  .addTo(map)
  .bindPopup(`<strong>${p.msg}</strong>`);
});
