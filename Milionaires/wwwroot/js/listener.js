class Listener {
    constructor(game) {
        this.game = game;
        this.btnA = document.querySelector("#btnA");
        this.btnB = document.querySelector("#btnB");
        this.btnC = document.querySelector("#btnC");
        this.btnD = document.querySelector("#btnD");

        this.HandleCorrectAnswer = () => game.SetQuestionOnArrays(game.data);
        this.HandleClickA = () => this.HandleIncorrectAnswer(this.btnA);
        this.HandleClickB = () => this.HandleIncorrectAnswer(this.btnB);
        this.HandleClickC = () => this.HandleIncorrectAnswer(this.btnC);
        this.HandleClickD = () => this.HandleIncorrectAnswer(this.btnD);

    }
    HandleIncorrectAnswer = (button) => {
        index.EndGameWhenAnswerIsIncorrect(button);
    }
    SetListenersWhenTheCorrectAnswerIsA() {
        this.btnA.addEventListener("click", this.HandleCorrectAnswer);
        this.btnB.addEventListener("click", this.HandleClickB);
        this.btnC.addEventListener("click", this.HandleClickC);
        this.btnD.addEventListener("click", this.HandleClickD);
    }
    SetListenersWhenTheCorrectAnswerIsB() {
        this.btnA.addEventListener("click", this.HandleClickA);
        this.btnB.addEventListener("click", this.HandleCorrectAnswer);
        this.btnC.addEventListener("click", this.HandleClickC);
        this.btnD.addEventListener("click", this.HandleClickD);
    }
    SetListenersWhenTheCorrectAnswerIsC() {
        this.btnA.addEventListener("click", this.HandleClickA);
        this.btnB.addEventListener("click", this.HandleClickB);
        this.btnC.addEventListener("click", this.HandleCorrectAnswer);
        this.btnD.addEventListener("click", this.HandleClickD);
    }
    SetListenersWhenTheCorrectAnswerIsD() {
        this.btnA.addEventListener("click", this.HandleClickA);
        this.btnB.addEventListener("click", this.HandleClickB);
        this.btnC.addEventListener("click", this.HandleClickC);
        this.btnD.addEventListener("click", this.HandleCorrectAnswer);
    }

    RemoveListenersWhenTheCorrectAnswerWasA() {
        this.btnA.removeEventListener("click", this.HandleCorrectAnswer);
        this.btnB.removeEventListener("click", this.HandleClickB);
        this.btnC.removeEventListener("click", this.HandleClickC);
        this.btnD.removeEventListener("click", this.HandleClickD);
    }
    RemoveListenersWhenTheCorrectAnswerWasB() {
        this.btnA.removeEventListener("click", this.HandleClickA);
        this.btnB.removeEventListener("click", this.HandleCorrectAnswer);
        this.btnC.removeEventListener("click", this.HandleClickC);
        this.btnD.removeEventListener("click", this.HandleClickD);
    }
    RemoveListenersWhenTheCorrectAnswerWasC() {
        this.btnA.removeEventListener("click", this.HandleClickA);
        this.btnB.removeEventListener("click", this.HandleClickB);
        this.btnC.removeEventListener("click", this.HandleCorrectAnswer);
        this.btnD.removeEventListener("click", this.HandleClickD);
    }
    RemoveListenersWhenTheCorrectAnswerWasD() {
        this.btnA.removeEventListener("click", this.HandleClickA);
        this.btnB.removeEventListener("click", this.HandleClickB);
        this.btnC.removeEventListener("click", this.HandleClickC);
        this.btnD.removeEventListener("click", this.HandleCorrectAnswer);
    }
}
var listener = new Listener(index);