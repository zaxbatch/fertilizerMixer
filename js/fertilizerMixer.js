// choose chemicals
// document.getElementById('wrapper01').innerHTML = "<hr>Select your chemicals<br><br>";
// document.getElementById('wrapper02').innerHTML = "<input id='calciumNitrate' type='checkbox' value='Calcium Nitrate'> <label> Calcium Nitrate</label><br> <input id='mpk' type='checkbox' value='MPK'> <label> MPK</label><br><input id='epsom' type='checkbox' value='Epsom Salt'> <label> Epsom Salt</label><br><input id='jacks' type='checkbox' value='Jacks'> <label> Jacks</label> <br> <input id='trace' type='checkbox' value='Trace Minerals'> <label> Trace Minerals</label><hr>";
// Choose gallons
document.getElementById('wrapper01').innerHTML = "<hr>Gallons <br> <input id='gallons' type='number'><br><br>";

// choose ppm
document.getElementById('wrapper03').innerHTML = "<hr>Enter PPM <br><br>";
document.getElementById('wrapper04').innerHTML = "Nitrogen <br> <input id='nitrogen' type='number'> <br><br> Phosphorus <br> <input id='phosporus' type='number'> <br><br> Potassium <br> <input id='potassium' type='number'> <br><br> Calcium <br> <input id='calcium' type='number'> <br><br> Magnesium <br> <input id='magnesium' type='number'><br><br>Iron <br> <input id='iron' type=number><br><br>";
// Results
function results() {
  //Gallons
  var gallons = document.getElementById('gallons').value;
  var calNit, epsom, mpk, trace;
  calNit = { name: "Calcium Nitrate",
             nitrogen: 41,
             calcium: 50};
  epsom = { name: "Epsom Salt",
             magnesium: 25,
             sulfate: 33};
  mpk = { name: "MPK",
            phosphorus: 60,
            potassium: 75};
  pekacid = { name: "PeKacid",
              phosphorus: 69,
              potassium: 44};
  potNit = { name: "Potassium Nitrate",
              nitrogen: 36,
              potassium: 101};
  ammSul = { name: "Ammonium Sulfate",
              nitrogen: 56,
              Sulfate: 64};
  trace = { name: "Trace Elements",
              iron: 19.8};

  return calNit + ": " + (document.getElementById('nitrogen')/calNit.nitrogen) * gallons +
   "\n" + mpk + ": " + (document.getElementById('potassium')/mpk.potassium) * gallons +
   "\n" + epsom + ": " + (document.getElementById('nmagnesium')/epsom.magnesium) * gallons +
   "\n" + trace + ": " + (document.getElementById('iron')/trace.iron) * gallons;


//dialog function
function dialog() {
  alert('Grams\n' + results());
}
// submit button
document.getElementById('wrapper05').innerHTML = "<button onclick='dialog()'>Submit</button><hr>";
