// =========================
// SONS
// =========================

const clickSound = new Audio("assets/click.mp3");
const successSound = new Audio("assets/success.mp3");
const errorSound = new Audio("assets/error.mp3");

// =========================
// PERGUNTAS
// =========================

const perguntas = [

{
    pergunta:"1️⃣ Diogo gosta muito de Geiziane ❤️",
    correta:"verdadeiro"
},

{
    pergunta:"2️⃣ Geiziane é muuuuuito lindaaaa!!!! 😍",
    correta:"verdadeiro"
},

{
    pergunta:"3️⃣ Diogo pretende um dia pedir Geiziane em namoro. 💍",
    correta:"verdadeiro"
},

{
    pergunta:"4️⃣ Diogo não gosta de Geiziane de verdade!",
    correta:"falso"
},

{
    pergunta:"5️⃣ Geiziane vai aceitar Diogo em namoro? ❤️",
    especial:true
},

{
    pergunta:"6️⃣ Diogo sente muita saudade de Geiziane 😔",
    correta:"verdadeiro"
}

];

let atual = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const progress = document.getElementById("progressBar");

// =========================
// MOSTRAR PERGUNTA
// =========================

function mostrar(){

    progress.style.width=((atual)/perguntas.length)*100+"%";

    const q = perguntas[atual];

    question.innerHTML = q.pergunta;

    answers.innerHTML = "";

    if(q.especial){

        criarBotao("💖 SIM 💖");
        criarBotao("❤️ COM TODA CERTEZA ❤️");

    }else{

        criarBotao("✅ Verdadeiro");
        criarBotao("❌ Falso");

    }

}

// =========================
// CRIAR BOTÃO
// =========================

function criarBotao(texto){

    const btn = document.createElement("button");

    btn.innerHTML = texto;

    btn.onclick = ()=>clicou(texto);

    answers.appendChild(btn);

}

// =========================
// CLICOU
// =========================

function clicou(resp){

    clickSound.currentTime = 0;
    clickSound.play().catch(()=>{});

    const q = perguntas[atual];

    if(q.especial){

        successSound.currentTime = 0;
        successSound.play().catch(()=>{});

        atual++;

        mostrar();

        return;

    }

    const acertou = resp.toLowerCase().includes(q.correta);

    if(acertou){

        successSound.currentTime = 0;
        successSound.play().catch(()=>{});

        atual++;

        if(atual >= perguntas.length){

            confetti({

                particleCount:250,

                spread:180

            });

            setTimeout(()=>{

                window.location="parabens.html";

            },1800);

        }else{

            mostrar();

        }

    }else{

        errorSound.currentTime = 0;
        errorSound.play().catch(()=>{});

        setTimeout(()=>{

            window.location="erro.html";

        },600);

    }

}

mostrar();