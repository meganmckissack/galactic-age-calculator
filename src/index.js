import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalacticAge } from './galacticAge';


$(document).ready(function() {
  $("form#galactic-age").submit(function(event) {
    event.preventDefault();
    const userAge = parseInt(document.getElementById("user-age-input").value);
    let myGalacticAge = new GalacticAge(userAge);


    const userMercuryAge = myGalacticAge.calculateMercuryAge();
    const userVenusAge = myGalacticAge.calculateVenusAge();
    const userMarsAge = myGalacticAge.calculateMarsAge();
    const userJupiterAge = myGalacticAge.calculateJupiterAge();
    const userLifeExpectancy = myGalacticAge.calculateLifeExpectancy();
    console.log(myGalacticAge);
    
    $(".ageResult").show();
    $("#mercury-results").append("<p>"+ userMercuryAge + "</p>");
    $("#venus-results").html(userVenusAge);
    $("#mars-results").html(userMarsAge);
    $("#jupiter-results").html(userJupiterAge);
    $("#life-expectancy-results").html(userLifeExpectancy);

  });
});