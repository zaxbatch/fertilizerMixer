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
  // Calcium Nitrate
  var calNit = "Calcium Nitrate";
  // var grCalNit = 2;
  //var ppmCal = getElementById('calcium');
  var ppmNit = document.getElementById('nitrogen').value/41*gallons;

  // Epsom Salt
  var epsom = "Epsom Salt";
  // var grEpsom = 1
  var ppmEpsom = (document.getElementById("magnesium").value/25)*gallons;
  // mpk
  var mpk = "MPK";
  // var grMPK = 0
  var ppmMPK = (document.getElementById("potassium").value/75)*gallons;

  // jacks
  var jacks = "Jacks";
  var grJacks = 0
  // trace elements
  var trace = "Trace";
  // var grTrace = 0
  var ppmTrace = (document.getElementById("iron").value/19.8)*gallons;
 // dialog box contents
  return calNit + ": " + ppmNit +
   "\n" + mpk + ": " + ppmMPK +
   "\n" + epsom + ": " + ppmEpsom +
   "\n" + trace + ": " + ppmTrace;
}

//dialog function
function dialog() {
  alert('Grams\n' + results());
}
// submit button
document.getElementById('wrapper05').innerHTML = "<button onclick='dialog()'>Submit</button><hr>";
