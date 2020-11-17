//Initiating the game by click the let's pay button
//global content
var b1 = document.querySelector('#one');
 var b2 = document.querySelector('#two');
 var b3 = document.querySelector('#three');
 var b4 = document.querySelector('#four');
 var b5 = document.querySelector('#five');
 var b6 = document.querySelector('#six');
  var b7 = document.querySelector('#seven');
  var b8 = document.querySelector('#eight');
   var b9 = document.querySelector('#nine');

var start = document.querySelector('#start').addEventListener('click', function(){



   b1.addEventListener('click', function() {
     var player = prompt("Enter the player number 1 or 2");
     if(player == 1){
       b1.innerHTML='X';
     } else if(player == 2) {
       b1.innerHTML='O';
     } else{
       player = prompt("Enter  1 or 2");
     }
     player = 0;
   })


   b2.addEventListener('click', function() {
     var player = prompt("Enter the player number 1 or 2");
     if(player == 1){
       b2.innerHTML='X';
     } else if(player == 2){
       b2.innerHTML='O';
     } else{
       player = prompt("Enter  1 or 2");
     }
     player = 0;
   })


   b3.addEventListener('click', function() {
     var player = prompt("Enter the player number 1 or 2");
     if(player == 1){
       b3.innerHTML='X';
     } else if(player == 2){
       b3.innerHTML='O';
     } else{
        player = prompt("Enter  1 or 2");
     }
     player = 0;
   })


   b4.addEventListener('click', function() {
     var player = prompt("Enter the player number 1 or 2");
     if(player == 1){
       b4.innerHTML='X';
     } else if(player == 2){
       b4.innerHTML='O';
     } else {
       player=prompt("Enter 1 or 2");
     }
     player = 0;
   })


   b5.addEventListener('click', function() {
     var player = prompt("Enter the player number 1 or 2");
     if(player == 1){
       b5.innerHTML='X';
     } else if(player == 2){
       b5.innerHTML='O';
     } else{
        player = prompt("Enter  1 or 2");
     }
     player = 0;
   })


   b6.addEventListener('click', function() {
     var player = prompt("Enter the player number 1 or 2");
     if(player == 1){
       b6.innerHTML='X';
     } else if(player == 2){
       b6.innerHTML='O';
     } else{
        player = prompt("Enter  1 or 2");
     }
     player = 0;
   })


   b7.addEventListener('click', function() {
     var player = prompt("Enter the player number 1 or 2");
     if(player == 1){
       b7.innerHTML='X';
     } else if(player == 2){
       b7.innerHTML='O';
     } else{
        player = prompt("Enter  1 or 2");
     }
     player = 0;
   })


   b8.addEventListener('click', function() {
     var player = prompt("Enter the player number 1 or 2");
     if(player == 1){
       b8.innerHTML='X';
     } else if(player == 2){
       b8.innerHTML='O';
     } else{
        player = prompt("Enter  1 or 2");
     }
     player = 0;
   })


   b9.addEventListener('click', function() {
     var player = prompt("Enter the player number 1 or 2");
     if(player == 1){
       b9.innerHTML='X';
     } else if(player == 2){
       b9.innerHTML='O';
     } else{
        player = prompt("Enter  1 or 2");
     }
     player = 0;
   })

});
/*

document.querySelector('#restart').addEventListener('click', function() {
       for(i=1; i<=9; i++) {
         b[i].innerHTML = '';
       }
});
*/
