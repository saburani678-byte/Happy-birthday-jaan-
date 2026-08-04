/* ==========================================
   HAPPY BIRTHDAY RABUTARO 🤍
   SCRIPT.JS
========================================== */

const pages = document.querySelectorAll(".page");
let currentPage = 0;

function showPage(page){
    if(page < 0 || page >= pages.length) return;
    pages[currentPage].classList.remove("active");
    currentPage = page;
    pages[currentPage].classList.add("active");
    window.scrollTo({ top:0, behavior:"smooth" });
}

/* =========================
   MUSIC
========================= */
const bgMusic = document.getElementById("bgMusic");
const walletMusic = document.getElementById("walletMusic");

function playMusic(){
    if(bgMusic){
        bgMusic.volume = 0.35;
        bgMusic.play().catch(()=>{});
    }
}
document.addEventListener("click", playMusic, {once:true});

/* =========================
   PASSWORD
========================= */
const password = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const hintBtn = document.getElementById("hintBtn");
const hintText = document.getElementById("hintText");
const errorText = document.getElementById("errorText");

if(unlockBtn){
    unlockBtn.onclick = () => {
        if(password && password.value === "1313"){
            showPage(1);
        } else {
            if(errorText) errorText.innerHTML = "❌ Wrong Password";
            if(password) password.value = "";
        }
    };
}

if(hintBtn){
    hintBtn.onclick = () => {
        if(hintText) hintText.innerHTML = "💡 Hint : Tarannum";
    };
}

/* =========================
   PAGE BUTTONS
========================= */
const startAdventure = document.getElementById("startAdventure");
if(startAdventure) startAdventure.onclick = () => showPage(2);

const investigateBtn = document.getElementById("investigateBtn");
if(investigateBtn) investigateBtn.onclick = () => showPage(3);

/* =========================
   FBI SCANNER
========================= */
const scanBtn = document.getElementById("scanBtn");
const scanLine = document.getElementById("scanLine");
const scanResult = document.getElementById("scanResult");

if(scanBtn){
    scanBtn.onclick = () => {
        if(scanResult) scanResult.innerHTML = "Scanning...";
        if(scanLine) scanLine.style.animation = "scannerMove 2.5s linear";
        setTimeout(()=>{
            if(scanResult) scanResult.innerHTML = `
            ✅ Identity Confirmed<br><br>
            Name : Rabiya Khan<br>
            Alias : Rabutaro 🐰<br>
            Status : Sabutaro's Favourite Human 🤍
            `;
            setTimeout(()=> showPage(4), 1800);
        }, 2500);
    };
}

const chargesBtn = document.getElementById("chargesBtn");
if(chargesBtn) chargesBtn.onclick = () => showPage(5);

const courtBtn = document.getElementById("courtBtn");
if(courtBtn) courtBtn.onclick = () => showPage(6);

const oracleBtnNav = document.getElementById("oracleBtn");
if(oracleBtnNav) oracleBtnNav.onclick = () => showPage(7);

/* =========================
   DIVINE ORACLE
========================= */
const oracleBtn = document.getElementById("oracleAskBtn");
const oracleText = document.getElementById("oracleText");
const oracleAnswers = [
    "✨ Oracle says your friendship was written in the stars.",
    "🤍 Sabutaro & Rabutaro = 1313% Compatibility.",
    "🐰 Lifetime friendship detected.",
    "🌸 Every memory with you is priceless.",
    "🎀 Best Friends Forever confirmed."
];

if(oracleBtn){
    oracleBtn.onclick = () => {
        if(oracleText) oracleText.innerHTML = "🔮 Reading destiny...";
        setTimeout(()=>{
            const random = Math.floor(Math.random() * oracleAnswers.length);
            if(oracleText) oracleText.innerHTML = oracleAnswers[random];
            setTimeout(()=> showPage(8), 2200);
        }, 1500);
    };
}

/* =========================
   WALLET
========================= */
const wallet = document.getElementById("wallet");
let holdTimer;

if(wallet){
    wallet.addEventListener("mousedown", startHold);
    wallet.addEventListener("touchstart", startHold);
    wallet.addEventListener("mouseup", cancelHold);
    wallet.addEventListener("mouseleave", cancelHold);
    wallet.addEventListener("touchend", cancelHold);
}

function startHold(){
    holdTimer = setTimeout(()=>{
        if(bgMusic) bgMusic.pause();
        if(walletMusic) walletMusic.play();
        setTimeout(()=>{
            if(walletMusic) walletMusic.pause();
            if(bgMusic) bgMusic.play();
            showPage(9);
        }, 5000);
    }, 2000);
}

function cancelHold(){
    clearTimeout(holdTimer);
}

/* =========================
   SCRAPBOOK
========================= */
const scrapbookBtn = document.getElementById("scrapbookBtn");
if(scrapbookBtn) scrapbookBtn.onclick = () => showPage(10);

const collageBtn = document.getElementById("collageBtn");
if(collageBtn) collageBtn.onclick = () => showPage(11);

document.querySelectorAll(".polaroid img").forEach(photo => {
    photo.addEventListener("dblclick", () => {
        const heart = document.createElement("div");
        heart.className = "floatingHeart";
        heart.innerHTML = "🤍";
        heart.style.left = Math.random() * 80 + 10 + "%";
        heart.style.top = Math.random() * 70 + 10 + "%";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    });
});

const bunnyBtn = document.getElementById("bunnyBtn");
if(bunnyBtn) bunnyBtn.onclick = () => showPage(12);

/* =========================
   FIND MRS BUNNY
========================= */
const bunnyMessage = document.getElementById("bunnyMessage");
const bunnies = document.querySelectorAll(".bunny");
const correctBunny = document.querySelector(".correctBunny");

bunnies.forEach(bunny => {
    bunny.onclick = () => {
        if (bunny === correctBunny) {
            if(bunnyMessage) bunnyMessage.innerHTML = "🎉 Correct! You found Mrs. Bunny! 🐰🤍";
            setTimeout(() => showPage(13), 1500);
        } else {
            if(bunnyMessage) bunnyMessage.innerHTML = "😂 Nope! That's an innocent bunny.";
        }
    };
});

const balloonBtn = document.getElementById("balloonBtn");
if(balloonBtn) balloonBtn.onclick = () => showPage(13);

/* =========================
   BALLOONS
========================= */
let popped = 0;
const balloons = document.querySelectorAll(".balloon");
const balloonMessage = document.getElementById("balloonMessage");

balloons.forEach(balloon => {
    balloon.onclick = () => {
        if (balloon.classList.contains("popped")) return;
        balloon.classList.add("popped");
        const surprises = [
            "🤍 You're amazing!",
            "🐰 Mrs. Bunny!",
            "🌸 Core Memory!",
            "😂 Best Laugh!",
            "🎀 Forever Friends!",
            "💖 Happy Birthday!"
        ];
        balloon.innerHTML = surprises[Math.floor(Math.random() * surprises.length)];
        popped++;
        if (popped === balloons.length) {
            if(balloonMessage) balloonMessage.innerHTML = "🎉 All balloons popped!";
            setTimeout(() => showPage(14), 1800);
        }
    };
});

const memoryBtn = document.getElementById("memoryBtn");
if(memoryBtn) memoryBtn.onclick = () => showPage(14);

/* =========================
   MEMORY MATCH
========================= */
const memoryCards = document.querySelectorAll(".memoryCard");
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matches = 0;

memoryCards.forEach(card => {
    card.onclick = () => {
        if (lockBoard) return;
        if (card.classList.contains("matched")) return;
        if (card === firstCard) return;

        card.innerHTML = card.dataset.card;
        card.classList.add("flipped");

        if (!firstCard) {
            firstCard = card;
            return;
        }

        secondCard = card;
        lockBoard = true;

        if (firstCard.dataset.card === secondCard.dataset.card) {
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            matches++;
            resetMemory();

            if (matches === 4) {
                const memoryMessage = document.getElementById("memoryMessage");
                if(memoryMessage) memoryMessage.innerHTML = "🎉 Perfect Memory!";
                setTimeout(() => showPage(15), 1800);
            }
        } else {
            setTimeout(() => {
                firstCard.innerHTML = "";
                secondCard.innerHTML = "";
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                resetMemory();
            }, 900);
        }
    };
});

function resetMemory() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

const quizBtn = document.getElementById("quizBtn");
if(quizBtn) quizBtn.onclick = () => showPage(15);

/* =========================
   FRIENDSHIP QUIZ
========================= */
const quizData = [
    { question:"1. Who is Sabutaro?", options:["Saba","Rabiya","Both","Nobody"], answer:"Saba" },
    { question:"2. Who is Rabutaro?", options:["Saba","Rabiya","Both","Nobody"], answer:"Rabiya" },
    { question:"3. Who loves ramen the most?", options:["Saba","Rabiya","Both","Neither"], answer:"Both" },
    { question:"4. Who creates the funniest memories?", options:["Saba","Rabiya","Both","Nobody"], answer:"Both" },
    { question:"5. Which nickname belongs to Rabiya?", options:["Sabutaro","Rabutaro","Tarannum","Bunny"], answer:"Rabutaro" }
];

const quizContainer = document.getElementById("quizContainer");
let score = 0;

if(quizContainer){
    quizData.forEach((q, index)=>{
        const card = document.createElement("div");
        card.className = "quizCard";
        card.innerHTML = `<h3>${q.question}</h3>`;

        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.className = "quizOption";
            btn.innerHTML = option;
            btn.onclick = () => {
                if(btn.disabled) return;
                card.querySelectorAll("button").forEach(b => b.disabled = true);
                if(option === q.answer){
                    btn.classList.add("quizCorrect");
                    score++;
                } else {
                    btn.classList.add("quizWrong");
                }
                if(index === quizData.length - 1){
                    setTimeout(()=>{
                        const quizResult = document.getElementById("quizResult");
                        if(quizResult) quizResult.innerHTML = `🎉 Score : ${score}/${quizData.length}`;
                    }, 500);
                }
            };
            card.appendChild(btn);
        });
        quizContainer.appendChild(card);
    });
}

const chatBtn = document.getElementById("chatBtn");
if(chatBtn) chatBtn.onclick = () => showPage(16);

const instagramBtn = document.getElementById("instagramBtn");
if(instagramBtn) instagramBtn.onclick = () => showPage(17);

/* =========================
   INSTAGRAM
========================= */
let likes = 1313;
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

if(likeBtn){
    likeBtn.onclick = () => {
        likes++;
        if(likeCount) likeCount.innerHTML = likes;
        likeBtn.disabled = true;
        likeBtn.innerHTML = "🤍 Liked";
    };
}

const googlePageBtn = document.getElementById("googlePageBtn");
if(googlePageBtn) googlePageBtn.onclick = () => showPage(18);

/* =========================
   GOOGLE
========================= */
const googleInput = document.getElementById("googleInput");
const googleResult = document.getElementById("googleResult");
const googleBtn = document.getElementById("googleBtn");

if(googleBtn){
    googleBtn.onclick = () => {
        const text = googleInput ? googleInput.value.toLowerCase() : "";
        if(text.includes("best friend")){
            if(googleResult) googleResult.innerHTML = `
            <h2>🥇 Result #1</h2>
            Rabutaro 🐰<br>⭐⭐⭐⭐⭐<br>
            Verified by Sabutaro, FBI, Oracle, and 1313 pieces of evidence.
            `;
        } else {
            if(googleResult) googleResult.innerHTML = `
            🤍<br>No matter what you search...<br>the answer is always<br><strong>Rabutaro.</strong>
            `;
        }
    };
}

const wheelBtn = document.getElementById("wheelBtn");
if(wheelBtn) wheelBtn.onclick = () => showPage(19);

/* =========================
   WHEEL OF MEMORIES
========================= */
const wheel = document.getElementById("memoryWheel");
const wheelResult = document.getElementById("wheelResult");
const prizes = [
    "🍜 Ramen Memory",
    "😂 Funniest Laugh",
    "🤍 Best Friend",
    "📸 Selfie Time",
    "🎀 Mrs. Bunny",
    "🌸 Core Memory"
];

if(wheel){
    wheel.onclick = () => {
        const rotate = 1440 + Math.random() * 720;
        wheel.style.transform = `rotate(${rotate}deg)`;
        setTimeout(()=>{
            if(wheelResult) wheelResult.innerHTML = prizes[Math.floor(Math.random()*prizes.length)];
        }, 4000);
    };
}

const giftBtn = document.getElementById("giftBtn");
if(giftBtn) giftBtn.onclick = () => showPage(20);

/* =========================
   GIFT GAME
========================= */
const gifts = document.querySelectorAll(".gift");
const giftResult = document.getElementById("giftResult");

gifts.forEach((gift, index)=>{
    gift.onclick = () => {
        if(index === 2){
            if(giftResult) giftResult.innerHTML = "🎉 Correct! This gift belongs to Rabutaro!";
            setTimeout(() => showPage(21), 1500);
        } else {
            if(giftResult) giftResult.innerHTML = "😂 Wrong gift! Try again.";
        }
    };
});

const ribbonBtn = document.getElementById("ribbonBtn");
if(ribbonBtn) ribbonBtn.onclick = () => showPage(21);

/* =========================
   PULL THE RIBBON
========================= */
const ribbon = document.getElementById("giftRibbon");
const lid = document.getElementById("giftLid");
let ribbonOpened = false;

if(ribbon){
    ribbon.onclick = () => {
        if(ribbonOpened) return;
        ribbonOpened = true;
        ribbon.style.transform = "translateX(-50%) translateY(120px)";
        if(lid) lid.style.transform = "translateY(-90px) rotate(-8deg)";
        setTimeout(() => showPage(22), 1800);
    };
}

const memoryWallBtn = document.getElementById("memoryWallBtn");
if(memoryWallBtn) memoryWallBtn.onclick = () => showPage(23);

document.querySelectorAll(".memoryWall img").forEach(photo => {
    photo.addEventListener("dblclick", () => {
        const heart = document.createElement("div");
        heart.className = "floatingHeart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 80 + 10 + "%";
        heart.style.top = Math.random() * 70 + 10 + "%";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    });
});

const certificateBtn = document.getElementById("certificateBtn");
if(certificateBtn) certificateBtn.onclick = () => showPage(24);

const cakeBtn = document.getElementById("cakeBtn");
if(cakeBtn) cakeBtn.onclick = () => showPage(25);

/* =========================
   BIRTHDAY CAKE
========================= */
const cake = document.getElementById("cake");
const cakeMessage = document.getElementById("cakeMessage");

if(cake){
    cake.onclick = () => {
        cake.innerHTML = "🧁";
        if(cakeMessage) cakeMessage.innerHTML = "✨ Candles blown! Happy Birthday!";
        setTimeout(() => showPage(26), 1800);
    };
}

/* =========================
   11:11 WISH
========================= */
const stars = document.querySelectorAll(".stars span");
const wish = document.getElementById("wishText");
const wishes = [
    "🤍 May Allah always protect you.",
    "🌸 May every dream come true.",
    "🎀 Happiness forever.",
    "🐰 Best Friends Forever.",
    "✨ Success in everything."
];

stars.forEach(star => {
    star.onclick = () => {
        star.innerHTML = "🌟";
        if(wish) wish.innerHTML = wishes[Math.floor(Math.random() * wishes.length)];
    };
});

const duaBtn = document.getElementById("duaBtn");
if(duaBtn) duaBtn.onclick = () => showPage(27);

const finalBtn = document.getElementById("finalBtn");
if(finalBtn) finalBtn.onclick = () => showPage(28);

const grandFinaleBtn = document.getElementById("grandFinaleBtn");
if(grandFinaleBtn){
    grandFinaleBtn.onclick = () => {
        showPage(29);
        startConfetti();
    };
}

/* =========================
   CONFETTI
========================= */
function startConfetti(){
    for(let i=0; i<150; i++){
        const piece = document.createElement("div");
        piece.innerHTML = ["🎉","✨","🤍","🌸","🎀"][Math.floor(Math.random() * 5)];
        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-30px";
        piece.style.fontSize = (18 + Math.random() * 20) + "px";
        piece.style.transition = "4s linear";
        piece.style.zIndex = "9999";
        document.body.appendChild(piece);

        setTimeout(()=>{
            piece.style.top = "110vh";
            piece.style.transform = `rotate(${Math.random()*720}deg)`;
        }, 100);

        setTimeout(()=> piece.remove(), 4500);
    }
}

const replayBtn = document.getElementById("replayBtn");
if(replayBtn) replayBtn.onclick = () => location.reload();
