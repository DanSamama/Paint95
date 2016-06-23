/**
 * Created by itc_user on 6/22/2016.
 */

var ChangeColor = function(clickEvent){
    clickEvent.target.className = "cubeStyle " + couleur;
};

var colorTrade = function(clickEvent){
    couleur = clickEvent.target.className;
};

var couleur = "purple";
var globalBox = document.createElement('div');
document.body.appendChild(globalBox);

var colorAttribute = ["blue","red","yellow","green"];
var k =0;

var colorPalet = document.createElement('div');
colorPalet.className = "colorPalet";
globalBox.appendChild(colorPalet);

for(k=0;k<colorAttribute.length;k++){
    var someColor = document.createElement('div');
    someColor.className = colorAttribute[k];
    colorPalet.appendChild(someColor);
    someColor.addEventListener('click',colorTrade);

}

var canvas = document.createElement('div');
globalBox.appendChild(canvas);

for(var i=0;i<50;i++){
    var columnCube = document.createElement('div');
    columnCube.className = "columnCube";
    canvas.appendChild(columnCube);
    for(var j=0;j<50;j++){
        var cube = document.createElement('div');
        cube.className = "cubeStyle";
        columnCube.appendChild(cube);
        cube.addEventListener('click',ChangeColor);
        cube.addEventListener('mouseover',ChangeColor);


    }
}













