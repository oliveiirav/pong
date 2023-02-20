//Circle
let xCircle = 300;
let yCircle = 200;
let dCircle = 18;
let raio = dCircle / 2;

//Circle movement
let vXCircle = 6;
let vYCircle = 6;

//Rectangle
let xR1 = 5;
let yR1 = 150;
//comprimento
let cRect = 10;
//altura
let aRect = 100;

//oponente
let xR2 = 585;
let yR2 = 150;
let vYOponent;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

//Sons
let hitRaquete;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  hitRaquete = loadSound("raquetada.mp3");
}



function draw() {
  background(0);
  drawCircle();
  mCircle();
  bCircle();
  drawRaquete(xR1, yR1);
  drawRaquete(xR2, yR2);
  mRaquete();
  vCR();
  vCRO();
  movementOponent();
  incluiPlacar();
  marcaPonto();
}

function drawCircle(){
  circle(xCircle, yCircle, dCircle)
}

function mCircle(){
    xCircle += vXCircle;
    yCircle += vYCircle;
}

function bCircle(){
    if (xCircle + raio > width ||
     xCircle - raio < 0) {
    vXCircle *= -1;
  }
  
  if (yCircle + raio > height ||
     yCircle - raio < 0) {
    vYCircle *= -1;
  }
}

//Minha raquete
function drawRaquete(x, y){
  rect(x, y, cRect, aRect);
}

//movimentar raquete
function mRaquete(){
  if (keyIsDown(UP_ARROW)){
    yR1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yR1 += 10;
  }
}

//Colisão da bolinha com a raquete
function vCR(){
  if (xCircle - raio < xR1 + cRect && yCircle - raio < yR1 + aRect && yCircle + raio > yR1){
    vXCircle *= -1; 
    hitRaquete.play();
  }
}

//Raquete oponente
function movementOponent(){
    if (keyIsDown(87)){
    yR2 -= 10;
  }
  if (keyIsDown(83)){
    yR2 += 10;
  }
}

//Colisão da bolinha com a raquete do oponente
function vCRO(){
  if (xCircle + raio > xR2 && yCircle - raio < yR2 + aRect && yCircle + raio > yR2){
    vXCircle *= -1;
    hitRaquete.play();
  }
}

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Placar
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

//Pontos
function marcaPonto() {
    if (xCircle > 590) {
        meusPontos += 1;
        ponto.play();
    }
    if (xCircle < 10) {
        pontosDoOponente += 1;
        ponto.play();
    }
}

