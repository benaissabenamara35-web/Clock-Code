// =====================
// CLOCK SYSTEM (TEXT + ANALOG)
// =====================

const digitalClock = document.getElementById("clock1");

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function updateClock(){

    const now = new Date();

    // =====================
    // DIGITAL CLOCK
    // =====================
    let hours = String(now.getHours()).padStart(2,'0');
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let seconds = String(now.getSeconds()).padStart(2,'0');

    if(digitalClock){
        digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // =====================
    // ANALOG CLOCK
    // =====================
    if(hour && minute && second){

        const h = now.getHours() % 12;
        const m = now.getMinutes();
        const s = now.getSeconds();

        const hourDeg = h * 30 + m * 0.5;
        const minuteDeg = m * 6 + s * 0.1;
        const secondDeg = s * 6;

        hour.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
        minute.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
        second.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    }
}

// تشغيل الساعة
updateClock();
setInterval(updateClock, 1000);



// =====================
// COPY BUTTON
// =====================
const copyButtons = document.querySelectorAll(".copyBtn");

copyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const code = button.parentElement.querySelector("code");

        navigator.clipboard.writeText(code.innerText);

        button.textContent = "Copied!";

        setTimeout(() => {
            button.textContent = "Copy Code";
        }, 1500);

    });

});


















// =====================
// TURN OFF DIGIT
// =====================

function offDigit(n){

    const segs = ["a","b","c","d","e","f","g"];

    segs.forEach(seg=>{

        const el = document.querySelector("." + seg + n);

        el.style.backgroundColor = "#222";
        el.style.boxShadow = "none";

    });

}

// =====================
// LIGHT SEGMENTS
// =====================

function light(n, segs){

    segs.forEach(seg=>{

        const el = document.querySelector("." + seg + n);

        if(el){

            el.style.backgroundColor = "#00BFFF";

            el.style.boxShadow = `
                0 0 80px #00BFFF,
                0 0 150px #00BFFF,
                0 0 300px #00BFFF,
                0 0 600px #00BFFF
            `;

            el.style.filter = "brightness(2)";
            el.style.transition = "0.2s";

        }

    });

}
// =====================
// SHOW NUMBER
// =====================

function showDigit(n,value){

    offDigit(n);

    switch(value){

        case "0":
            light(n,["a","b","c","d","e","f"]);
        break;

        case "1":
            light(n,["b","c"]);
        break;

        case "2":
            light(n,["a","b","d","e","g"]);
        break;

        case "3":
            light(n,["a","b","c","d","g"]);
        break;

        case "4":
            light(n,["b","c","f","g"]);
        break;

        case "5":
            light(n,["a","c","d","f","g"]);
        break;

        case "6":
            light(n,["a","c","d","e","f","g"]);
        break;

        case "7":
            light(n,["a","b","c"]);
        break;

        case "8":
            light(n,["a","b","c","d","e","f","g"]);
        break;

        case "9":
            light(n,["a","b","c","d","f","g"]);
        break;

    }

}

// =====================
// UPDATE CLOCK
// =====================

function updateSegmentClock(){

    const now = new Date();

    let h = String(now.getHours()).padStart(2,"0");
    let m = String(now.getMinutes()).padStart(2,"0");

    showDigit(1,h[0]);
    showDigit(2,h[1]);
    showDigit(3,m[0]);
    showDigit(4,m[1]);

}

// START
updateSegmentClock();
setInterval(updateSegmentClock,1000);
