
class Game {

    constructor() {

        this.balance = 0;
        this.questionNumber = 1;
        this.correctIndex;

        this.data;
        this.randomNumber;

        this.point1 = document.getElementById("point1");
        this.point2 = document.getElementById("point2");
        this.point3 = document.getElementById("point3");
        this.point4 = document.getElementById("point4");
        this.point5 = document.getElementById("point5");
        this.point6 = document.getElementById("point6");
        this.point7 = document.getElementById("point7");
        this.point8 = document.getElementById("point8");
        this.point9 = document.getElementById("point9");
        this.point10 = document.getElementById("point10");

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
            const path = "/Question/GetQuestions";
            const response = await fetch(path);

            this.btnA = document.querySelector("#btnA");
            this.btnB = document.querySelector("#btnB");
            this.btnC = document.querySelector("#btnC");
            this.btnD = document.querySelector("#btnD");
            this.btnResign = document.querySelector("#btnResign");
            this.questionWindow = document.querySelector("#questionWindow");
            this.questionText = document.querySelector("#questionText");
            this.prizeTable = document.querySelector("#prizeTable");

            this.data = await response.json();

            this.SetQuestionOnArrays(this.data);

        } catch (error) {
            this.questionText.innerHTML = "Wystąpił błąd podczas pobierania danych.";
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
                break;

            case 3:
                this.SetQuestion(this.questions3);
                break;

            case 4:
                this.SetQuestion(this.questions4);
                break;

            case 5:
                this.SetQuestion(this.questions5);
                break;

            case 6:
                this.SetQuestion(this.questions6);
                break;

            case 7:
                this.SetQuestion(this.questions7);
                break;

            case 8:
                this.SetQuestion(this.questions8);
                break;

            case 9:
                this.SetQuestion(this.questions9);
                break;

            case 10:
                this.SetQuestion(this.questions10);
                break;
            case 11:
                this.prizeTable.children[1].classList.remove("currentAnswer");
                this.prizeTable.children[0].classList.add("currentAnswer");
                this.point10.innerHTML = "*";
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
                this.point1.innerHTML = "*";
                this.prizeTable.children[9].classList.add("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasB();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                break;

            case 3:
                this.point2.innerHTML = "*";
                this.prizeTable.children[9].classList.remove("currentAnswer");
                this.prizeTable.children[8].classList.add("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasC();
                this.balance = balance.SetCurrentBalance(2000);
                this.SetQuestionContent(questionData);
                break;
            case 4:
                this.point3.innerHTML = "*";
                this.prizeTable.children[8].classList.remove("currentAnswer");
                this.prizeTable.children[7].classList.add("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasA();
                this.balance = balance.SetCurrentBalance(5000);
                this.SetQuestionContent(questionData);
                break;
            case 5:
                this.point4.innerHTML = "*";
                this.prizeTable.children[7].classList.remove("currentAnswer");
                this.prizeTable.children[6].classList.add("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasD();
                this.balance = balance.SetCurrentBalance(10000);
                this.SetQuestionContent(questionData);
                break;
            case 6:
                this.point5.innerHTML = "*";
                this.prizeTable.children[6].classList.remove("currentAnswer");
                this.prizeTable.children[5].classList.add("currentAnswer");
                this.balance = balance.SetCurrentBalance(40000);
                this.SetQuestionContent(questionData);
                break;
            case 7:
                this.point6.innerHTML = "*";
                this.prizeTable.children[5].classList.remove("currentAnswer");
                this.prizeTable.children[4].classList.add("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasA();
                this.balance = balance.SetCurrentBalance(75000);
                this.SetQuestionContent(questionData);
                break;
            case 8:
                this.point7.innerHTML = "*";
                this.prizeTable.children[4].classList.remove("currentAnswer");
                this.prizeTable.children[3].classList.add("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasC();
                this.balance = balance.SetCurrentBalance(150000);
                this.SetQuestionContent(questionData);
                break;
            case 9:
                this.point8.innerHTML = "*";
                this.prizeTable.children[3].classList.remove("currentAnswer");
                this.prizeTable.children[2].classList.add("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasB();
                this.balance = balance.SetCurrentBalance(250000);
                this.SetQuestionContent(questionData);
                break;
            case 10:
                this.point9.innerHTML = "*";
                this.prizeTable.children[2].classList.remove("currentAnswer");
                this.prizeTable.children[1].classList.add("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasD();
                this.balance = balance.SetCurrentBalance(500000);
                this.SetQuestionContent(questionData);
                break;
        }
    }

    SetQuestionContent(questionData) {

        this.randomNumber = randomNumberGenerator.SetRandomNumberForQuestion();

        this.questionText.innerHTML = questionData[this.randomNumber].question;
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
                this.questionText.innerHTML = `Jeszcze nie zaczeliśmy gry, a juz sie wycofałeś? Mimo wszystko dziekuję za udział w grze!`;
            }
            else if ((this.balance !== 0) && (this.balance !== 2000) && (this.balance !== 40000)) {
                this.questionText.innerHTML = `To dobra decyzja, żeby sie wycofać. Gratulacje wygrywasz ${this.balance} zł!`;
            }
            else if ((this.balance === 2000) || (this.balance === 40000)) {
                this.questionText.innerHTML = `Zrezygnowałeś na progu gwarantowanym. Wygrywasz ${this.balance} zł!`;
            }
            buttons.SetDefaultTextForButtons();
            buttons.LockButtons();
        })
    }

    AllCorrectAnswers() {

        buttons.LockButtons();
        buttons.SetDefaultTextForButtons();

        this.balance = balance.SetCurrentBalance(1000000);

        this.questionText.innerHTML = `Odpowiedziałeś poprawnie na wszystkie pytania! Wygrywasz ${this.balance} zł!`;

    }
    EndGameWhenAnswerIsIncorrect = () => {
        switch (this.questionNumber -1) {
            case 1:
            case 2:
                this.balance = 0;
                break;
            case 3:
            case 4:
            case 5:
                this.balance = 2000;
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                this.balance = 40000;
                break;
        }
        buttons.LockButtons();
        this.ShowCorrectAnswer();
    }
    ShowCorrectAnswer() {
        switch (this.correctIndex) {
            case 0:
                if (this.balance == 0) {
                    this.questionText.innerHTML = `Niestety poprawna odpowiedź to A. Niestety tym razem nic nie wygrałeś :(`
                }
                else {
                    this.questionText.innerHTML = `Niestety poprawna odpowiedź to A. Wygrywasz ${this.balance} zł!`;
                }
                this.btnA.style.backgroundColor = "green";
                break;
            case 1:
                if (this.balance == 0) {
                    this.questionText.innerHTML = `Niestety poprawna odpowiedź to B. Niestety tym razem nic nie wygrałeś :(`
                }
                else {
                    this.questionText.innerHTML = `Niestety poprawna odpowiedź to B. Wygrywasz ${this.balance} zł!`;
                }
                this.btnB.style.backgroundColor = "green";
                break;
            case 2:
                if (this.balance == 0) {
                    this.questionText.innerHTML = `Niestety poprawna odpowiedź to C. Niestety tym razem nic nie wygrałeś :(`
                }
                else {
                    this.questionText.innerHTML = `Niestety poprawna odpowiedź to C. Wygrywasz ${this.balance} zł!`;
                }
                this.btnC.style.backgroundColor = "green";
                break;
            case 3: 
                if (this.balance == 0) {
                    this.questionText.innerHTML = `Niestety poprawna odpowiedź to D. Niestety tym razem nic nie wygrałeś :(`
                }
                else {
                    this.questionText.innerHTML = `Niestety poprawna odpowiedź to D. Wygrywasz ${this.balance} zł!`;
                }
                this.btnD.style.backgroundColor = "green";
                break;
        }
    }
}
const game = new Game();