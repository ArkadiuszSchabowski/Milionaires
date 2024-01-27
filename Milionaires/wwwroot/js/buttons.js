class Buttons {
    constructor() {
        this.btnA = document.querySelector("#btnA");
        this.btnB = document.querySelector("#btnB");
        this.btnC = document.querySelector("#btnC");
        this.btnD = document.querySelector("#btnD");
        this.btnAudience = document.querySelector("#btnAudience");
        this.btnPhone = document.querySelector("#btnPhone");
        this.btnFiftyFifty = document.querySelector("#btnFiftyFifty");
        this.btnResign = document.querySelector("#btnResign");
    }
    SetButtonsAsVisible() {
        this.btnA.style.visibility = "visible";
        this.btnB.style.visibility = "visible";
        this.btnC.style.visibility = "visible";
        this.btnD.style.visibility = "visible";
    }
    SetDefaultTextForButtons() {
        this.btnA.innerHTML = "A";
        this.btnB.innerHTML = "B";
        this.btnC.innerHTML = "C";
        this.btnD.innerHTML = "D";
    }
    LockIndexButtons() {
        this.btnA.disabled = true;
        this.btnB.disabled = true;
        this.btnC.disabled = true;
        this.btnD.disabled = true;
        this.btnResign.disabled = true;
        this.btnAudience.style.pointerEvents = "none";
        this.btnPhone.style.pointerEvents = "none";
        this.btnFiftyFifty.style.pointerEvents = "none";
    }
    UnlockIndexButtons() {
        this.btnA.disabled = false;
        this.btnB.disabled = false;
        this.btnC.disabled = false;
        this.btnD.disabled = false;
        this.btnResign.disabled = false;
        this.btnAudience.style.pointerEvents = "auto";
        this.btnPhone.style.pointerEvents = "auto";
        this.btnFiftyFifty.style.pointerEvents = "auto";
    }
};
let buttons = new Buttons();