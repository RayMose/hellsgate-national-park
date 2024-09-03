document.addEventListener('DOMContentLoaded', () => {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.booking-form');
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(form);
      fetch('/process_form.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          alert(data); // Show success or error message
          if (data.includes("Thank You")) {
              form.reset(); // Clear the form on success
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
      });
  });
});

  document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    var map = L.map('park-map').setView([-0.9, 36.3], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  
    // Add markers for key locations
    var locations = [
      { name: "Fischer's Tower", lat: -0.9089, lng: 36.3158, type: "climbing" },
      { name: "Central Tower", lat: -0.9103, lng: 36.3175, type: "hiking" },
      { name: "Ol Njorowa Gorge", lat: -0.9133, lng: 36.3139, type: "hiking" },
      { name: "Geothermal Spa", lat: -0.9067, lng: 36.3092, type: "geothermal" },
      { name: "Wildlife Viewing Point", lat: -0.9056, lng: 36.3231, type: "wildlife" }
    ];
  
    locations.forEach(function(loc) {
      var icon = L.divIcon({
        className: 'custom-icon ' + loc.type,
        html: '<span class="icon-inner"></span>',
        iconSize: [20, 20]
      });
  
      L.marker([loc.lat, loc.lng], {icon: icon})
        .addTo(map)
        .bindPopup(loc.name);
    });
  });