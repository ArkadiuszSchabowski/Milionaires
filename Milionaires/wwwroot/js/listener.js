class Listener {
    constructor(game) {
        this.game = game;
        this.btnA = document.querySelector("#btnA");
        this.btnB = document.querySelector("#btnB");
        this.btnC = document.querySelector("#btnC");
        this.btnD = document.querySelector("#btnD");

        this.handleCorrectAnswer = () => game.SetQuestionOnArrays(game.data);
        this.handleIncorrectAnswer = () => game.EndGameWhenAnswerIsIncorrect();

    }
    SetListenersWhenTheCorrectAnswerIsA() {
        this.btnA.addEventListener("click", this.handleCorrectAnswer);
        this.btnB.addEventListener("click", this.handleIncorrectAnswer);
        this.btnC.addEventListener("click", this.handleIncorrectAnswer);
        this.btnD.addEventListener("click", this.handleIncorrectAnswer);
    }
    SetListenersWhenTheCorrectAnswerIsB() {
        this.btnA.addEventListener("click", this.handleIncorrectAnswer);
        this.btnB.addEventListener("click", this.handleCorrectAnswer);
        this.btnC.addEventListener("click", this.handleIncorrectAnswer);
        this.btnD.addEventListener("click", this.handleIncorrectAnswer);
    }
    SetListenersWhenTheCorrectAnswerIsC() {
        this.btnA.addEventListener("click", this.handleIncorrectAnswer);
        this.btnB.addEventListener("click", this.handleIncorrectAnswer);
        this.btnC.addEventListener("click", this.handleCorrectAnswer);
        this.btnD.addEventListener("click", this.handleIncorrectAnswer);
    }
    SetListenersWhenTheCorrectAnswerIsD() {
        this.btnA.addEventListener("click", this.handleIncorrectAnswer);
        this.btnB.addEventListener("click", this.handleIncorrectAnswer);
        this.btnC.addEventListener("click", this.handleIncorrectAnswer);
        this.btnD.addEventListener("click", this.handleCorrectAnswer);
    }

    RemoveListenersWhenTheCorrectAnswerWasA() {
        this.btnA.removeEventListener("click", this.handleCorrectAnswer);
        this.btnB.removeEventListener("click", this.handleIncorrectAnswer);
        this.btnC.removeEventListener("click", this.handleIncorrectAnswer);
        this.btnD.removeEventListener("click", this.handleIncorrectAnswer);
    }
    RemoveListenersWhenTheCorrectAnswerWasB() {
        this.btnA.removeEventListener("click", this.handleIncorrectAnswer);
        this.btnB.removeEventListener("click", this.handleCorrectAnswer);
        this.btnC.removeEventListener("click", this.handleIncorrectAnswer);
        this.btnD.removeEventListener("click", this.handleIncorrectAnswer);
    }
    RemoveListenersWhenTheCorrectAnswerWasC() {
        this.btnA.removeEventListener("click", this.handleIncorrectAnswer);
        this.btnB.removeEventListener("click", this.handleIncorrectAnswer);
        this.btnC.removeEventListener("click", this.handleCorrectAnswer);
        this.btnD.removeEventListener("click", this.handleIncorrectAnswer);
    }
    RemoveListenersWhenTheCorrectAnswerWasD() {
        this.btnA.removeEventListener("click", this.handleIncorrectAnswer);
        this.btnB.removeEventListener("click", this.handleIncorrectAnswer);
        this.btnC.removeEventListener("click", this.handleIncorrectAnswer);
        this.btnD.removeEventListener("click", this.handleCorrectAnswer);
    }
}
var listener = new Listener(game);