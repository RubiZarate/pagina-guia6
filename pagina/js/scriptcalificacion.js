//calificación del servicio

const ratingInputs = document.querySelectorAll('.star-rating input[type="radio"]');

ratingInputs.forEach(input => {
  input.addEventListener('change', function() {
   window.alert('Calificación seleccionada:', this.value);
  });
});