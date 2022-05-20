window.onload = function () {
  var ausgabe = JSON.parse(sessionStorage.getItem("bmi"));
  console.log(ausgabe);
  document.getElementById('weight').innerText = "Gewicht: " + ausgabe.weight;
  document.getElementById('height').innerText = "Grösse: " + ausgabe.height;
  document.getElementById('bmi-value').innerText = "BMI: " + ausgabe.bmi;
  document.getElementById('description').innerText = "Beschreibung: " + ausgabe.description;
};
