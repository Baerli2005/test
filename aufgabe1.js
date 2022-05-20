window.onload = function () {
  const btn = document.getElementById("btn-calc").addEventListener("click", function () {
    var weight = document.getElementById("input-weight").value;
    var height = document.getElementById("input-height").value;
    if(isNaN(weight) || isNaN(height))
    {
      alert("Eingaben nicht richtig");
    }
    else
    {
      var ergebniss = calcBmi(height, weight);
      document.getElementById('card-body-bmi').innerText = ergebniss;
      if(ergebniss < 20)
      {
        document.getElementById('card-body-description').innerText = "Untergewicht";
      }
      if(ergebniss >= 21 && ergebniss <= 24)
      {
        document.getElementById('card-body-description').innerText = "Normalgewicht";
      }
      if(ergebniss >= 25)
      {
        document.getElementById('card-body-description').innerText = "Übergewicht";
      }
    }
  });
};

function calcBmi(h, w) {
  // TODO
  // Formel: bmi = gewicht / (groesse * groesse)
  //                gewicht in kg
  //                groesse in m
  // Hilfe: ACHTE auf die Einheiten cm bei der Eingabe -> m bei der Berechnung
  //        Falls eine Funktion zum Quadrieren verwendet werden will: Math.pow(WERT , 2)
  // TODO
  h = h / 100;
  var bmi = w / (Math.pow(h, 2));
  return bmi;
}
