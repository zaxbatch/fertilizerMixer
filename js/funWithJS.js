// choose chemicals
document.getElementById('wrapper01').innerHTML = "<hr>Select your chemicals<br><br>";
document.getElementById('wrapper02').innerHTML = "<input id='calciumNitrate' type='checkbox' value='Calcium Nitrate'> <label> Calcium Nitrate</label><br> <input id='mpk' type='checkbox' value='MPK'> <label> MPK</label><br><input id='epsom' type='checkbox' value='Epsom Salt'> <label> Epsom Salt</label><br><input id='jacks' type='checkbox' value='Jacks'> <label> Jacks</label> <br> <input id='trace' type='checkbox' value='Trace Minerals'> <label> Trace Minerals</label><hr>";
// choose ppm
document.getElementById('wrapper03').innerHTML = "Enter PPM <br><br>";
document.getElementById('wrapper04').innerHTML = "Nitrogen <br> <input id='nitrogen' type-'number'> <br><br> Phosphorus <br> <input id='phosporus'> <br><br> Potassium <br> <input id='potassium'> <br><br> Calcium <br> <input id='calcium'> <br><br> Magnesium <br> <input id='magnesium'><br><br>Iron <br> <input id='iron'><br><br>";
// Results
function results() {
  // Calcium Nitrate
  var calNit = document.getElementById("calciumNitrate").value;
  // var grCalNit = 2;
  //var ppmCal = getElementById('calcium');
  var ppmNit = document.getElementById('nitrogen').value/41;

  // Epsom Salt
  var epsom = document.getElementById("epsom").value;
  // var grEpsom = 1
  var ppmEpsom = document.getElementById("magnesium").value/25;
  // mpk
  var mpk = document.getElementById("mpk").value;
  // var grMPK = 0
  var ppmMPK = document.getElementById("potassium").value/75;

  // jacks
  var jacks = document.getElementById("jacks").value;
  var grJacks = 0
  // trace elements
  var trace = document.getElementById("trace").value;
  // var grTrace = 0
  var ppmTrace = document.getElementById("iron").value/19.8;
 // dialog box contents
  return calNit + ": " + ppmNit +
   "\n" + mpk + ": " + ppmMPK +
   "\n" + epsom + ": " + ppmEpsom +
   "\n" + jacks + ": " + grJacks +
   "\n" + trace + ": " + ppmTrace;
}

//dialog function
function dialog() {
  alert('Grams per Gallon\n' + results());
}
// submit button
document.getElementById('wrapper05').innerHTML = "<button onclick='dialog()'>Submit</button><hr>";
