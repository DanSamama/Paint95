/**
 * Created by itc_user on 6/22/2016.
 */
var defaultSize = 50;
var couleur = "purple";
var colorAttribute = ["blue","red","yellow","green","white"];


var ChangeColor = function(clickEvent){
    clickEvent.target.className = "cubeStyle " + couleur;
};

var colorTrade = function(clickEvent){
    couleur = clickEvent.target.className;
};

var changeSizeCanvas = function(clickEvent){
    var userInput = document.getElementsByTagName("input")[0];
    defaultSize = userInput.value;
    document.getElementById("bestCanvas").remove();
    createCanvas();
};
var createCanvas = function(){
    var globalBox = document.getElementById("bestGlobalBox");
    var canvas = document.createElement('div');
    canvas.id = "bestCanvas";
    globalBox.appendChild(canvas);


    for(var i=0;i<defaultSize;i++){
        var columnCube = document.createElement('div');
        columnCube.className = "columnCube";
        canvas.appendChild(columnCube);
        for(var j=0;j<defaultSize;j++){
            var cube = document.createElement('div');
            cube.className = "cubeStyle";
            columnCube.appendChild(cube);
            cube.addEventListener('click',ChangeColor);
            cube.addEventListener('mouseover',ChangeColor);


        }
    }
};
window.onload = function(){
    var globalBox = document.createElement('div');
    globalBox.id = "bestGlobalBox";
    document.body.appendChild(globalBox);

    var colorPalet = document.createElement('div');
    colorPalet.className = "colorPalet";
    globalBox.appendChild(colorPalet);
    createCanvas();
    for(var k=0;k<colorAttribute.length;k++){
        var someColor = document.createElement('div');
        someColor.className = colorAttribute[k];
        colorPalet.appendChild(someColor);
        someColor.addEventListener('click',colorTrade);

    }


    var inputField = document.createElement('span');
    globalBox.appendChild(inputField);
    var userInput = document.createElement('input');
    userInput.type = 'number';
    inputField.appendChild(userInput);

    var buttonField = document.createElement('button');
    buttonField.textContent = "Change Size";
    inputField.appendChild(buttonField);

    buttonField.addEventListener('click',changeSizeCanvas);



// <label for="ingredient">Your Answer</label>
// <input type="text" id="ingredient" placeholder="ingredient"/>



}






