// =========================
// ÁUDIOS
// =========================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const texto =
`Antes de tudo...

❤️ Feliz Aniversário! ❤️

Hoje eu preparei uma pequena surpresa para você.

Mas antes quero ver se você realmente conhece o Diogo... 😌`;

const typing = document.getElementById("typing");

// =========================
// TEXTO DIGITANDO
// =========================

let i = 0;

function escrever(){

    if(i < texto.length){

        if(texto[i] == "\n"){

            typing.innerHTML += "<br>";

        }else{

            typing.innerHTML += texto[i];

        }

        i++;

        setTimeout(escrever,35);

    }

}

escrever();

// =========================
// MÚSICA
// =========================

let tocando = false;

musicBtn.onclick = ()=>{

    if(!tocando){

        music.play().catch(()=>{});
        musicBtn.innerHTML="🔊";

    }else{

        music.pause();
        musicBtn.innerHTML="🔇";

    }

    tocando=!tocando;

};

// =========================
// CORAÇÕES
// =========================

const hearts = document.getElementById("hearts");

function criarCoracao(){

    const heart = document.createElement("div");

    heart.className="heart";

    const emojis=["❤️","💖","💕","💗","💘","💝"];

    heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(4+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(criarCoracao,250);

// =========================
// BOTÃO
// =========================

document.getElementById("startButton").onclick=()=>{

    confetti({

        particleCount:250,

        spread:180,

        origin:{y:0.6}

    });

    document.getElementById("startButton").innerHTML="Preparando... ❤️";

    setTimeout(()=>{

        window.location="quiz.html";

    },1800);

};