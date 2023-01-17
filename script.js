//Guardando as imagens para embaralhalas no jogo.
let cartasjogo = [
  '<img class="foto-gif w1" src="Fotos-projeto/0.gif" />',
  '<img class="foto-gif w2" src="Fotos-projeto/1.gif" />',
  '<img class="foto-gif w3" src="Fotos-projeto/2.gif" />',
  '<img class="foto-gif w4" src="Fotos-projeto/3.gif" />',
  '<img class="foto-gif w5" src="Fotos-projeto/4.gif" />',
  '<img class="foto-gif w6" src="Fotos-projeto/5.gif" />',
  '<img class="foto-gif w7" src="Fotos-projeto/6.gif" />'
];
let baralho1 = [];
let baralho2 = [];

//Chamando a funcao para escolher o numero de cartas do jogo.
let numeroDEcartas = 0;
numcartas();

function numcartas(){
numeroDEcartas = Number(prompt("Escolha quantidade par de cartas entre 4 a 14 para jogar."));
if (numeroDEcartas < 4 || numeroDEcartas > 14 || numeroDEcartas %2 !== 0){
    alert("Número de cartas inválido! Porfavor escolha novamente.");
   numeroDEcartas = 0;
    numcartas();   
}
else{
if(numeroDEcartas === 4){
  formato = document.querySelector(".localcartas");
  formato.classList.add("jogo1");
}
else if(numeroDEcartas === 6){
  formato = document.querySelector(".localcartas");
  formato.classList.add("jogo2");
}
else if(numeroDEcartas === 8){
  formato = document.querySelector(".localcartas");
  formato.classList.add("jogo3");
}
else if(numeroDEcartas === 10){
  formato = document.querySelector(".localcartas");
  formato.classList.add("jogo4");
}
else if(numeroDEcartas === 12){
  formato = document.querySelector(".localcartas");
  formato.classList.add("jogo5");
}
else if(numeroDEcartas === 14){
  formato = document.querySelector(".localcartas");
  formato.classList.add("jogo6");
}

chamarjogo();
}}




//Funcao para criar o baralho, embaralhar as cartas.
function chamarjogo(){
  
for (let i = 0; i < numeroDEcartas/2; i++){
  baralho1.push(cartasjogo[i])
  baralho2.push(cartasjogo[i])
}
baralho1.sort(comparador);
baralho2.sort(comparador);
darcartas();
}


function comparador() { 
	return Math.random() - 0.5; 
}

//Distribuir as cartas.
function darcartas(){
for (let k = 0; k < numeroDEcartas/2; k++) {
  document.querySelector(".localcartas").innerHTML += `
  <div onclick="selecionarcarta(this)" class="carta posicao-inicial">
  <div classe="img-gaio">
  <img class="foto-back" src="Fotos-projeto/back.png" />
  </div>
  <div classe="img-gif">
  ${baralho1[k]}
  </div>
            </div>
            <div onclick="selecionarcarta(this)" class="carta posicao-inicial">
            <div classe="img-gaio">
  <img class="foto-back" src="Fotos-projeto/back.png" />
  </div>
            <div classe="img-gif">
            ${baralho2[k]}
            </div>
                      </div>      
`
}}

//Cirando variaveis para auxiliar na logica
let a = 0;
let k = 0;
let x;
let y;
let z;
let gol;
let sil;
let sco;
let clicadas = 0;
let visto = 0;
const blockcard = document.querySelector(".localcartas");


//Funcao para virar as cartas e contar os clicks
function selecionarcarta(caixacarta){
  const viracarta = document.querySelector('.carta');
  const viragif = caixacarta.querySelector('.foto-gif');
  clicadas = clicadas + 1;
 if (caixacarta.classList.contains('vira')){
  a = 0;
 }
 else{
    caixacarta.classList.remove("posicao-inicial");
  caixacarta.classList.add("vira");
  viragif.classList.add("vira2");
  x = caixacarta;
  gol = viragif;
  k = k +1;

  comparacao();
}}


//Funcao para comparar as cartas, bloquear clicks, e desvirar as cartas
function comparacao(){
  if (k === 1){
    y = x;
    sil = gol;
  }
  else{
    blockcard.classList.add('block');
    z = x;
    sco = gol;
    console.log(sil);
    console.log(sco);
    if( sil.classList.contains('w7') && sco.classList.contains('w7') || sil.classList.contains('w6') && sco.classList.contains('w6') || sil.classList.contains('w5') && sco.classList.contains('w5')){
      x = undefined;
      y = undefined;
      z = undefined;
      k = 0;
      visto = visto + 2;
      blockcard.classList.remove('block');
      fimdejogo();
    }
    else if(sil.classList.contains('w4') && sco.classList.contains('w4') || sil.classList.contains('w3') && sco.classList.contains('w3') || sil.classList.contains('w2') && sco.classList.contains('w2') || sil.classList.contains('w1') && sco.classList.contains('w1')){
      x = undefined;
      y = undefined;
      z = undefined;
      k = 0;
      visto = visto + 2;
      blockcard.classList.remove('block');
      fimdejogo();
    }
    else{
      setTimeout( function voltarcartas(){
      y.classList.add("posicao-inicial");
  y.classList.remove("vira");
  let viragif2 = y.querySelector('.foto-gif');
  viragif2.classList.remove("vira2");

  z.classList.add("posicao-inicial");
  z.classList.remove("vira");
  let viragif3 = z.querySelector('.foto-gif');
  viragif3.classList.remove("vira2");
  blockcard.classList.remove('block');

  x = undefined;
  y = undefined;
  z = undefined;
  k = 0;
      }, 1000);
    }
  }
}
 

function fimdejogo(){
  if( visto === numeroDEcartas){
    alert(`Parabéns você venceu o jogo com "${clicadas}" jogadas.`);  
  }}
