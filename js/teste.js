var x=100,y=100;
const alturaTela = window.screen.height - 150;
const larguraTela = window.screen.width;
document.body.style.padding = '0';
document.body.style.margin = '0';
function preload(){
    const img = loadImage("../image/cenario.png");
}
function setup() {
    createCanvas(larguraTela, alturaTela);
    image(img,60,60);
}
