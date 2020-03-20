import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { CargoDrop } from './tamagotchi.js';

$(document).ready(function(){


  //let bobTamagotchi = new Tamagotchi ("Bob", 0, 20, 20, 20, 20);
   let playerCargoDrop = new CargoDrop ("Player",0,20,20,20,20);


  // $("#start").click(function(event){
  //   event.preventDefault();
  //   $("#game").show();
  //   $("#start").hide();
  //   setUpTamagotchi(bobTamagotchi);
  // }); 

  $("#start").click(function(event){
    event.preventDefault();
    $("#game").show();
    $("#start").hide();
    setUpCargoDrop(playerCargoDrop);
  });

  //function setUpTamagotchi(tamagotchi) {
  function setUpCargoDrop(cargodrop) {
    
  
    // function updateFoodDisplay() {
    //   setInterval(() => {
    //     if (tamagotchi.age >= 5) {
    //       $(".screen").hide();
    //       $("#buttons").hide();
    //       $("#goodfinal").show();
    //       $("#badfinal").hide();
    //     } else if (tamagotchi.playLevel <= 0 || tamagotchi.sleepLevel <= 0  || tamagotchi.foodLevel <= 0 ){
    //       $("#unhappy").hide();
    //       $("#happy").hide();
    //       $("#dead").show();
    //       $(".screen").hide();
    //       $("#buttons").hide();
    //       $("#badfinal").show();

      function updateRunDisplay() {
      setInterval(() => {
        if (cargodrop.dropSession >= 5) {
          $(".screen").hide();
          $("#buttons").hide();
          $("#goodfinal").show();
          $("#badfinal").hide();
        } else if (cargodrop.playerEvade <= 0 || cargodrop.playerRest <= 0  || cargodrop.playerRun <= 0 ){
          $("#unhappy").hide();
          $("#happy").hide();
          $("#dead").show();
          $(".screen").hide();
          $("#buttons").hide();
          $("#badfinal").show();
    


    //     } else if (tamagotchi.playLevel <10 && tamagotchi.playLevel >0|| tamagotchi.sleepLevel <10 && tamagotchi.sleepLevel > 0|| tamagotchi.foodLevel <10 && tamagotchi.foodLevel >0){
    //       $("#unhappy").show();
    //       $("#happy").hide();
    //       $("#dead").hide();
    //     } else {
    //       $("#unhappy").hide();
    //       $("#happy").show();
    //       $("#dead").hide();
    //     }
    //   }, 1000);
    // }

  } else if (cargodrop.playerEvade <10 && cargodrop.playerEvade >0|| cargodrop.playerRest <10 && cargodrop.playerRest > 0|| cargodrop.playerRun <10 && cargodrop.playerRun >0){
    $("#unhappy").show();
    $("#happy").hide();
    $("#dead").hide();
  } else {
    $("#unhappy").hide();
    $("#happy").show();
    $("#dead").hide();
  }
}, 1000);
}


    // tamagotchi.setFood();
    // tamagotchi.setSleep();
    // tamagotchi.setPlay();
    // tamagotchi.setAge();

    cargodrop.setRun();
    cargodrop.setRest();
    cargodrop.setEvade();
    cargodrop.setSession();

    // setInterval(() => {$("#foodOutput").text(tamagotchi.foodLevel);}, 1000);
    // setInterval(() => {$("#sleepOutput").text(tamagotchi.sleepLevel);}, 1000);
    // setInterval(() => {$("#playOutput").text(tamagotchi.playLevel);}, 1000);
    // setInterval(() => {$("#ageOutput").text(tamagotchi.age);}, 1000);
    // updateFoodDisplay();

    setInterval(() => {$("#RunOutput").text(cargodrop.playerRun);}, 1000);
    setInterval(() => {$("#RestOutput").text(cargodrop.playerRest);}, 1000);
    setInterval(() => {$("#EvadeOutput").text(cargodrop.playerEvade);}, 1000);
    setInterval(() => {$("#DropOutput").text(cargodrop.dropSession + "00");}, 1000);
    updateRunDisplay();

    // $("#feedme").click(function(event){
    //   event.preventDefault();
    //   tamagotchi.feedTamagotchi();
    //   $("#foodOutput").text(tamagotchi.foodLevel);
    //   $("#texts").show();
    //   $("#textfood").fadeIn(1000);
    //   $("#textfood").fadeOut(1000);

    // });

    $("#feedme").click(function(event){
      event.preventDefault();
      cargodrop.runningCargoDrop();
      $("#RestOutput").text(cargodrop.playerRun);
      $("#texts").show();
      $("#textfood").fadeIn(1000);
      $("#textfood").fadeOut(1000);

    });

    // $("#sleepme").click(function(event){
    //   event.preventDefault();    
    //   tamagotchi.sleepTamagotchi();
    //   $("#sleepOutput").text(tamagotchi.foodLevel);
    //   $("#textsleep").show();
    //   // $("#textsleep").delay(2000);
    //   // $("#textsleep").hide();

    // });

    $("#sleepme").click(function(event){
      event.preventDefault();    
      cargodrop.restingCargoDrop();
      $("#sleepOutput").text(cargodrop.playerRun);
      $("#textsleep").show();
      // $("#textsleep").delay(2000);
      // $("#textsleep").hide();

    });

    // $("#playme").click(function(event){
    //   event.preventDefault();
    //   tamagotchi.playTamagotchi();
    //   $("#playOutput").text(tamagotchi.foodLevel);
    //   $("#textplay").show();
    //   // $("#textplay").delay(2000);
    //   // $("#textplay").hide();
    // });

    $("#playme").click(function(event){
      event.preventDefault();
      cargodrop.evadingCargoDrop();
      $("#playOutput").text(cargodrop.playerRun);
      $("#textplay").show();
      // $("#textplay").delay(2000);
      // $("#textplay").hide();
    });
  

    $("#restart").click(function(event){
      event.preventDefault();
      location.reload();
    });
  
  }


});



