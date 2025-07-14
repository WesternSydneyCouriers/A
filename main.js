// Optional: basic form validation or confirmation message
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      alert('Thank you for booking! We have received your request.');
    });
  }
});