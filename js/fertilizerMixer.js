// choose chemicals
// document.getElementById('wrapper01').innerHTML = "<hr>Select your chemicals<br><br>";
// document.getElementById('wrapper02').innerHTML = "<input id='calciumNitrate' type='checkbox' value='Calcium Nitrate'> <label> Calcium Nitrate</label><br> <input id='mpk' type='checkbox' value='MPK'> <label> MPK</label><br><input id='epsom' type='checkbox' value='Epsom Salt'> <label> Epsom Salt</label><br><input id='jacks' type='checkbox' value='Jacks'> <label> Jacks</label> <br> <input id='trace' type='checkbox' value='Trace Minerals'> <label> Trace Minerals</label><hr>";
// Choose gallons
document.getElementById('wrapper01').innerHTML = "<hr>Gallons <br> <input id='gallons' type='number'><br><br>";

// choose ppm
document.getElementById('wrapper03').innerHTML = "<hr>Enter PPM targets<br><br>";
document.getElementById('wrapper04').innerHTML = "Nitrogen <br> <input id='nitrogen' type='number'> <br><br> Phosphorus <br> <input id='phosporus' type='number'> <br><br> Potassium <br> <input id='potassium' type='number'> <br><br> Calcium <br> <input id='calcium' type='number'> <br><br> Magnesium <br> <input id='magnesium' type='number'><br><br>Iron <br> <input id='iron' type=number><br><br>";
// submit & fine tune button
document.getElementById('wrapper05').innerHTML = "<button id='submit' onclick='dialog()'>Submit</button><br><br><button id='fineTune' onclick='fineTune()'>Fine Tune</button><hr>";

// Results
function results() {
  //Gallons
  var gallons = document.getElementById('gallons').value;
  var calNit, epsom, mpk, ammSul, potNit, pekacid, trace;
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
  var calNitGr = (document.getElementById('nitrogen').value/calNit.nitrogen) * gallons;
  var mpkGr = (document.getElementById('potassium').value/mpk.potassium) * gallons;
  var epsomGr = (document.getElementById('magnesium').value/epsom.magnesium) * gallons;
  var traceGr = (document.getElementById('iron').value/trace.iron) * gallons;
  return calNit.name + ": " + calNitGr +
   "\n" + mpk.name + ": " + mpkGr +
   "\n" + epsom.name + ": " + epsomGr +
   "\n" + trace.name + ": " + traceGr;

}
//dialog function
function dialog() {
  alert('Grams\n' + results());
}



// fine tuner
function fineTune() {
  //Gallons
  var gallons = document.getElementById('gallons').value;
  var calNit, epsom, mpk, ammSul, potNit, pekacid, trace;
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
  var calNitGr = (document.getElementById('nitrogen').value/calNit.nitrogen) * gallons;
  var mpkGr = (document.getElementById('potassium').value/mpk.potassium) * gallons;
  var epsomGr = (document.getElementById('magnesium').value/epsom.magnesium) * gallons;
  var traceGr = (document.getElementById('iron').value/trace.iron) * gallons;

  document.getElementById('wrapper01').style.display='none';
  document.getElementById('wrapper02').style.display='none';
  document.getElementById('wrapper03').style.display='none';
  document.getElementById('wrapper04').style.display='none';
  document.getElementById('wrapper05').style.display='none';
  document.getElementById('heading01').innerHTML = "Fine Tune";
  document.getElementById('wrapper06').innerHTML = "<hr>Adjust grams";
  document.getElementById('wrapper07').innerHTML = "<br>Calcium Nitrate<br><input id='adjustCalNit' type='number'><br><br>Potassium Nitrate<br><input id='adjustPotNit' type='number'><br><br>Ammonium Sulfate<br><input id='adjustAmmSul' type='number'><br><br>MPK<br><input id='adjustMPK' type='number'><br><br>PeKacid<br><input id='adjustPekacid' type='number'><br><br>Epsom Salt<br><input id='adjustEpsom' type='number'><br><br>Trace Elements<br><input id='adjustTrace' type='number'><br><br>";
  document.getElementById('wrapper08').innerHTML = "<button id='calculate' onclick='ppmCalc()'>Calculate</button>";
  document.getElementById('wrapper09').innerHTML = "<hr><h3>PPM</h3>";

  document.getElementById('adjustCalNit').value = calNitGr;
  document.getElementById('adjustMPK').value = mpkGr;
  document.getElementById('adjustEpsom').value = epsomGr;
  document.getElementById('adjustTrace').value = traceGr;



 }
function ppmCalc() {
  var ppmN, ppmP, ppmK, ppmCa, ppmMg, ppmS, ppmFe;
  var gallons = document.getElementById('gallons').value;

  ppmN = ((document.getElementById('adjustCalNit').value*41) + (document.getElementById('adjustPotNit').value*36) + (document.getElementById('adjustAmmSul').value*56))/gallons;
  ppmP = ((document.getElementById('adjustMPK').value*60) + (document.getElementById('adjustPekacid').value*69))/gallons;
  ppmK = ((document.getElementById('adjustMPK').value*75) + (document.getElementById('adjustPotNit').value*101) + (document.getElementById('adjustPekacid').value*44))/gallons;
  ppmCa = (document.getElementById(('adjustCalNit').value*50))/gallons;
  ppmMg = (document.getElementById('adjustEpsom').value*25)/gallons;
  ppmS = ((document.getElementById('adjustAmmSul').value*64) + (document.getElementById('adjustEpsom').value*33))/gallons
  ppmFe = (document.getElementById('adjustTrace').value*19.8)/gallons;
  document.getElementById('wrapper10').innerHTML = "Nitrogen: " + ppmN + "<br>Phosphorus: " + ppmP + "<br>Potassium: " + ppmK + "<br>Calcium: " + ppmCa + "<br>Magnesium: " + ppmMg + "<br>S: " + ppmS + "<br>Fe: " + ppmFe;
}
