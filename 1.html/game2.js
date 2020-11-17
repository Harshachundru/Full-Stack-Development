var player1 = prompt("Player One: Enter Your Name, you will be Blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: Enter Your Name, you will be Red");
var player2Color ='rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum, colNum) {
  console.log("You won starting at this row, col");
  console.log(rowNum);
  console.log(colNum);
}

function changeColor(rowIndex, colIndex, color){
  return table.eq(rowIndex).find('td').eq(colIndex).css('background-color',color)
}

function returnColor(rowIndex, colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).css('background-color')
}
