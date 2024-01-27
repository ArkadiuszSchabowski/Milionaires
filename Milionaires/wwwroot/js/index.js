class Index {

    constructor() {

        this.host = "https://localhost:5050";
        this.balance = 0;
        this.questionNumber = 0;
        this.correctIndex;

        this.data;
        this.randomNumber;

        this.stateGameInformation;
        this.explainCorrectAnswer;

        this.stars = [
            document.getElementById("point1"),
            document.getElementById("point2"),
            document.getElementById("point3"),
            document.getElementById("point4"),
            document.getElementById("point5"),
            document.getElementById("point6"),
            document.getElementById("point7"),
            document.getElementById("point8"),
            document.getElementById("point9"),
            document.getElementById("point10")
        ];
        this.rowPrizeTable = [
            document.getElementById("rowPrize1"),
            document.getElementById("rowPrize2"),
            document.getElementById("rowPrize3"),
            document.getElementById("rowPrize4"),
            document.getElementById("rowPrize5"),
            document.getElementById("rowPrize6"),
            document.getElementById("rowPrize7"),
            document.getElementById("rowPrize8"),
            document.getElementById("rowPrize9"),
            document.getElementById("rowPrize10")
        ];

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
            const path = `${this.host}/api/game/questions`;
            const response = await fetch(path);

            this.btnA = document.querySelector("#btnA");
            this.btnB = document.querySelector("#btnB");
            this.btnC = document.querySelector("#btnC");
            this.btnD = document.querySelector("#btnD");
            this.btnResign = document.querySelector("#btnResign");
            this.questionText = document.querySelector("#questionText");
            this.questionWindow = document.querySelector("#questionWindow");
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

        buttons.SetButtonsAsVisible();

        if (this.questionNumber > 0) {
            this.stars[this.questionNumber - 1].classList.add("star");
            this.rowPrizeTable[this.questionNumber - 1].classList.add("currentAnswer");
        }

        this.questionNumber++;

        switch (this.questionNumber) {
            case 1:
                this.balance = balance.SetStartBalance();
                this.SetQuestionContent(this.questions1);
                userDecision.ResignOption();
                break;

            case 2:
                listener.RemoveListenersWhenTheCorrectAnswerWasB();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(this.questions2);
                break;

            case 3:
                this.rowPrizeTable[0].classList.remove("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasC();
                this.balance = balance.SetCurrentBalance(2000);
                this.SetQuestionContent(this.questions3);
                break;

            case 4:
                this.rowPrizeTable[1].classList.remove("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasA();
                this.balance = balance.SetCurrentBalance(5000);
                this.SetQuestionContent(this.questions4);
                break;

            case 5:
                this.rowPrizeTable[2].classList.remove("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasD();
                this.balance = balance.SetCurrentBalance(10000);
                this.SetQuestionContent(this.questions5);
                break;

            case 6:
                this.rowPrizeTable[3].classList.remove("currentAnswer");
                this.balance = balance.SetCurrentBalance(40000);
                this.SetQuestionContent(this.questions6);
                break;

            case 7:
                this.rowPrizeTable[4].classList.remove("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasA();
                this.balance = balance.SetCurrentBalance(75000);
                this.SetQuestionContent(this.questions7);
                break;

            case 8:
                this.rowPrizeTable[5].classList.remove("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasC();
                this.balance = balance.SetCurrentBalance(150000);
                this.SetQuestionContent(this.questions8);
                break;

            case 9:
                this.rowPrizeTable[6].classList.remove("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasB();
                this.balance = balance.SetCurrentBalance(250000);
                this.SetQuestionContent(this.questions9);
                break;

            case 10:
                this.rowPrizeTable[7].classList.remove("currentAnswer");
                listener.RemoveListenersWhenTheCorrectAnswerWasD();
                this.balance = balance.SetCurrentBalance(500000);
                this.SetQuestionContent(this.questions10);
                break;
            case 11:
                this.rowPrizeTable[8].classList.remove("currentAnswer");
                this.AllCorrectAnswers();
                break;
        }
    }

    SetQuestionContent(questionData) {

        this.randomNumber = randomNumberGenerator.SetRandomNumberForQuestion();

        this.questionText.innerHTML = questionData[this.randomNumber].questionText;
        this.btnA.innerHTML = questionData[this.randomNumber].answers[0];
        this.btnB.innerHTML = questionData[this.randomNumber].answers[1];
        this.btnC.innerHTML = questionData[this.randomNumber].answers[2];
        this.btnD.innerHTML = questionData[this.randomNumber].answers[3];

        this.correctIndex = questionData[this.randomNumber].correctAnswerIndex;

        this.SetListneres(this.correctIndex);
        this.explainCorrectAnswer = questionData[this.randomNumber].explainAnswer;
    }
    HideQuestion() {
        this.questionText.style.display = "none";
    }
    ShowQuestion() {
        this.questionText.style.display = "block";
    }
    SetBackground() {

        if (this.balance === 1000000) {
            this.questionWindow.style.backgroundImage = "url('../images/highestPrice.gif')";
        }
        else {
            this.questionWindow.style.backgroundImage = "url('../images/backgroundResult.jpeg')";
        }
    }

    AllCorrectAnswers() {

        buttons.LockIndexButtons();
        buttons.SetDefaultTextForButtons();

        this.balance = balance.SetCurrentBalance(1000000);

        this.stateGameInformation = `Odpowiedziałeś poprawnie na wszystkie pytania! Wygrywasz ${this.balance} zł!`;
        this.questionText.innerHTML = this.stateGameInformation;
        userDecision.SaveScoreOption();

    }
    EndGameWhenAnswerIsIncorrect = (button) => {
        switch (this.questionNumber) {
            case 1:
            case 2:
                this.IncorrectAnswerCase1and2();
                break;
            case 3:
            case 4:
            case 5:
                this.IncorrectAnswerCase3to5();
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                this.IncorrectAnswerCase6to10();
                break;
        }
        buttons.LockIndexButtons();
        this.ShowCorrectAnswer();
        this.ShowIncorrectAnswer(button);
        userDecision.SaveScoreOption();
    }
    ShowIncorrectAnswer(button) {
        button.style.backgroundColor = "orange";
    }
    EndGame() {
        for (let i = 0; i < 10; i++) {
            this.stars[i].classList.remove("star");
            this.rowPrizeTable[i].classList.remove("currentAnswer")
        }
        this.btnA.style.backgroundColor = "#d9d9d9";
        this.btnB.style.backgroundColor = "#d9d9d9";
        this.btnC.style.backgroundColor = "#d9d9d9";
        this.btnD.style.backgroundColor = "#d9d9d9";
    }
    IncorrectAnswerCase1and2 = () => {

        this.questionText.style.backgroundColor = "transparent"
        this.rowPrizeTable[0].classList.remove("currentAnswer");
        this.stars[0].classList.remove("star");

        this.balance = 0;
    }

    IncorrectAnswerCase3to5 = () => {

        this.stars[0].classList.add("star");
        this.rowPrizeTable[1].classList.add("currentAnswer")

        this.rowPrizeTable[2].classList.remove("currentAnswer")
        this.rowPrizeTable[3].classList.remove("currentAnswer")

        this.stars[2].classList.remove("star");
        this.stars[3].classList.remove("star");
        this.balance = 2000;
    }

    IncorrectAnswerCase6to10 = () => {

        this.rowPrizeTable[4].classList.add("currentAnswer")

        for (let i = 5; i < 10; i++) {
            this.stars[i].classList.remove("star");
            this.rowPrizeTable[i].classList.remove("currentAnswer")
        }

        this.balance = 40000;
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
    ShowCorrectAnswer() {
        switch (this.correctIndex) {
            case 0:
                if (this.balance == 0) {
                    this.stateGameInformation = `\nPoprawna odpowiedź to A.`
                }
                else {
                    this.stateGameInformation = `\nNiestety poprawna odpowiedź to A. Wygrywasz ${this.balance} zł!`;
                }
                this.btnA.style.backgroundColor = "green";
                break;
            case 1:
                if (this.balance == 0) {
                    this.stateGameInformation = `\nPoprawna odpowiedź to B.`
                }
                else {
                    this.stateGameInformation = `\nNiestety poprawna odpowiedź to B. Wygrywasz ${this.balance} zł!`;
                }
                this.btnB.style.backgroundColor = "green";
                break;
            case 2:
                if (this.balance == 0) {
                    this.stateGameInformation = `\nPoprawna odpowiedź to C.`
                }
                else {
                    this.stateGameInformation = `\nNiestety poprawna odpowiedź to C. Wygrywasz ${this.balance} zł!`;
                }
                this.btnC.style.backgroundColor = "green";
                break;
            case 3:
                if (this.balance == 0) {
                    this.stateGameInformation = `\nPoprawna odpowiedź to D.`
                }
                else {
                    this.stateGameInformation = `\nNiestety poprawna odpowiedź to D. Wygrywasz ${this.balance} zł!`;
                }
                this.btnD.style.backgroundColor = "green";
                break;
        }
        this.questionText.innerHTML = this.explainCorrectAnswer + this.stateGameInformation;
    }
}
const index = new Index();