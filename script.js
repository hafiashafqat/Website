// Initialize the GIS map
var map = L.map('map-container').setView([31.5497, 74.3436], 15); // Coordinates for University of Punjab, Lahore

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker at the University of Punjab location
L.marker([31.5497, 74.3436]).addTo(map)
    .bindPopup('<b>University of the Punjab</b><br>Department of Space Science')
    .openPopup();
