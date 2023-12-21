
class Game {

    constructor() {

        this.balance = 0;
        this.questionNumber = 1;
        this.correctIndex;

        this.data;
        this.randomNumber;

        this.lifelines = new Lifelines(this);

        lifelines.AddLifelines();

        this.Init();
    }

    Init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            this.GetContent();
        })
    }

    GetContent = async () => {
        try {
            const path = "/Question/GetQuestions"
            const response = await fetch(path);

            this.btnA = document.querySelector("#btnA");
            this.btnB = document.querySelector("#btnB");
            this.btnC = document.querySelector("#btnC");
            this.btnD = document.querySelector("#btnD");
            this.btnResign = document.querySelector("#btnResign");
            this.questionWindow = document.querySelector("#questionWindow");
            this.prizeTable = document.querySelector("#prizeTable");

            this.data = await response.json();

            this.SetQuestionOnArrays(this.data);

        } catch (error) {
            this.questionWindow.innerHTML = "Wystąpił błąd podczas pobierania danych.";
        }
    }
    SetQuestionOnArrays = (data) => {
        this.questions1 = [this.data[0], this.data[1]];
        this.questions2 = [this.data[2], this.data[3]];
        this.questions3 = [this.data[4], this.data[5]];
        this.questions4 = [this.data[6], this.data[7]];
        this.questions5 = [this.data[8], this.data[9]];
        this.questions6 = [this.data[10], this.data[11]];
        this.questions7 = [this.data[12], this.data[13]];
        this.questions8 = [this.data[14], this.data[15]];
        this.questions9 = [this.data[16], this.data[17]];
        this.questions10 = [this.data[18], this.data[19]];

        switch (this.questionNumber) {
            case 1:
                this.SetQuestion(this.questions1);
                break;

            case 2:
                this.SetQuestion(this.questions2);
                this.prizeTable.childNodes[9].classList.add("correctColor");
                break;

            case 3:
                this.SetQuestion(this.questions3);
                this.prizeTable.childNodes[8].classList.add("guaranteedPrizeColor");
                break;

            case 4:
                this.SetQuestion(this.questions4);
                this.prizeTable.childNodes[7].classList.add("correctColor");
                break;

            case 5:
                this.SetQuestion(this.questions5);
                this.prizeTable.childNodes[6].classList.add("correctColor");
                break;

            case 6:
                this.SetQuestion(this.questions6);
                this.prizeTable.childNodes[5].classList.add("guaranteedPrizeColor");
                break;

            case 7:
                this.SetQuestion(this.questions7);
                this.prizeTable.childNodes[4].classList.add("correctColor");
                break;

            case 8:
                this.SetQuestion(this.questions8);
                this.prizeTable.childNodes[3].classList.add("correctColor");
                break;

            case 9:
                this.SetQuestion(this.questions9);
                this.prizeTable.childNodes[2].classList.add("correctColor");
                break;

            case 10:
                this.SetQuestion(this.questions10);
                this.prizeTable.childNodes[1].classList.add("correctColor");
                break;

            case 11:
                this.prizeTable.childNodes[0].classList.add("correctColor");
                this.AllCorrectAnswers();
                break;
        }
    }
    SetListneres(correctIndex) {
        switch (correctIndex) {
            case 0:
                listener.SetListenersWhenTheCorrectAnswerIsA();
                break;

            case 1:
                listener.SetListenersWhenTheCorrectAnswerIsB();
                break;

            case 2:
                listener.SetListenersWhenTheCorrectAnswerIsC();
                break;

            case 3:
                listener.SetListenersWhenTheCorrectAnswerIsD();
                break;
        }
    }
    SetQuestion = (questionData) => {

        buttons.SetButtonsAsVisible();

        switch (this.questionNumber) {
            case 1:
                this.balance = balance.SetStartBalance();
                this.SetQuestionContent(questionData);
                this.SetButtonResign();
                break;

            case 2:
                listener.RemoveListenersWhenTheCorrectAnswerWasB();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                break;

            case 3:
                listener.RemoveListenersWhenTheCorrectAnswerWasC();
                this.balance = balance.SetCurrentBalance(2000);
                this.SetQuestionContent(questionData);
                break;
            case 4:
                listener.RemoveListenersWhenTheCorrectAnswerWasA();
                this.balance = balance.SetCurrentBalance(5000);
                this.SetQuestionContent(questionData);
                break;
            case 5:
                listener.RemoveListenersWhenTheCorrectAnswerWasD();
                this.balance = balance.SetCurrentBalance(10000);
                this.SetQuestionContent(questionData);
                break;
            case 6:
                this.balance = balance.SetCurrentBalance(40000);
                this.SetQuestionContent(questionData);
                break;
            case 7:
                listener.RemoveListenersWhenTheCorrectAnswerWasA();
                this.balance = balance.SetCurrentBalance(75000);
                this.SetQuestionContent(questionData);
                break;
            case 8:
                listener.RemoveListenersWhenTheCorrectAnswerWasC();
                this.balance = balance.SetCurrentBalance(150000);
                this.SetQuestionContent(questionData);
                break;
            case 9:
                listener.RemoveListenersWhenTheCorrectAnswerWasB();
                this.balance = balance.SetCurrentBalance(250000);
                this.SetQuestionContent(questionData);
                break;
            case 10:
                listener.RemoveListenersWhenTheCorrectAnswerWasD();
                this.balance = balance.SetCurrentBalance(500000);
                this.SetQuestionContent(questionData);
                break;
        }
    }

    SetQuestionContent(questionData) {

        this.randomNumber = randomNumberGenerator.SetRandomNumberForQuestion();

        this.questionWindow.innerHTML = questionData[this.randomNumber].question;
        this.btnA.innerHTML = questionData[this.randomNumber].answers[0];
        this.btnB.innerHTML = questionData[this.randomNumber].answers[1];
        this.btnC.innerHTML = questionData[this.randomNumber].answers[2];
        this.btnD.innerHTML = questionData[this.randomNumber].answers[3];

        this.correctIndex = questionData[this.randomNumber].correctAnswerIndex;

        this.SetListneres(this.correctIndex);

        this.questionNumber++;
    }

    SetButtonResign() {
        this.btnResign.addEventListener("click", () => {
            if (this.balance === 0) {
                this.questionWindow.innerHTML = `Jeszcze nie zaczeliśmy gry, a juz sie wycofałes? Mimo wszystko dziekuję za udział w grze !`;
            }
            else if ((this.balance !== 0) && (this.balance !== 2000) && (this.balance !== 40000)) {
                this.questionWindow.innerHTML = `To dobra decyzja, żeby sie wycofać. Gratulacje wygrywasz ${this.balance} zł !!!`;
            }
            else if ((this.balance === 2000) || (this.balance === 40000)) {
                this.questionWindow.innerHTML = `Zrezygnowałeś na progu gwarantowanym. Wygrywasz ${this.balance} zł !`;
            }
            buttons.SetDefaultTextForButtons();
            buttons.LockButtons();
        })
    }

    AllCorrectAnswers() {

        buttons.LockButtons();
        buttons.SetDefaultTextForButtons();

        this.balance = balance.SetCurrentBalance(1000000);

        this.questionWindow.innerHTML = `Odpowiedziałeś poprawnie na wszystkie pytania! Wygrywasz ${this.balance} zł !!!`;

    }
    EndGameWhenAnswerIsIncorrect = () => {

        buttons.LockButtons();
        buttons.SetDefaultTextForButtons();

        this.SetColorRowsWhenAnswerIsIncorrect();
    }
    SetColorRowsWhenAnswerIsIncorrect() {
        switch (this.questionNumber) {
            case 3:
                this.balance = balance.SetStartBalance();
                this.prizeTable.childNodes[9].classList.remove("correctColor");
                break;
            //case 4 - pierwszy prog gwarantowany
            case 5:
            case 6:
                this.balance = balance.SetBalanceToFirstCheckpoint();
                for (let i = 6; i < 8; i++) {
                    this.prizeTable.childNodes[i].classList.remove("correctColor");
                }
                break;
            //case 7 - drugi prog gwarantowany
            case 8:
            case 9:
            case 10:
            case 11:
                this.balance = balance.SetBalanceToSecondCheckpoint();
                for (let i = 1; i < 5; i++) {
                    this.prizeTable.childNodes[i].classList.remove("correctColor");
                }
                break;
        }

        this.questionWindow.innerHTML = `Dziękujemy za grę! Twój wynik to ${this.balance} zł !`;
    }
}

const game = new Game();