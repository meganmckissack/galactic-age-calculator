import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  $("form#life-expectancy").submit(function(event) {
    event.preventDefault();

    let healthIndicators = [];
    $("input:checkbox[name=life-expectancy-input]:checked").each(function() {
      const healthInput = $(this).val();
      healthIndicators.push(healthInput);
    });
  });
});