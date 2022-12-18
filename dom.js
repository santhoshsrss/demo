
function clicked(){
var a = Math.floor(Math.random() *255)+1;
var b = Math.floor(Math.random() *255)+1;
var c = Math.floor(Math.random() *255)+1;
var newColor = "rgb(" + a + "," + b + "," + c + ")";
    console.log("submitted")
    document.querySelector('body').style.backgroundColor = newColor
    // document.querySelector('body').style.backgroundColor = null;

}
