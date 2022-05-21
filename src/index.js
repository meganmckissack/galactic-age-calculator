import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalacticAge } from './galacticAge';


$(document).ready(function() {
  $("form#life-expectancy").submit(function(event) {
    event.preventDefault();

    let healthIndicators = [];
    $("input:checkbox[name=life-expectancy-input]:checked").each(function() {
      const healthInput = $(this).val();
      healthIndicators.push(healthInput);
    });

    let myGalacticAge = new GalacticAge(42, 30, 45, 34, 50, healthIndicators, 20);
    let healthScoreResult = myGalacticAge.calculateHealthScore();

    $(".healthScore").html(healthScoreResult);
  });
});