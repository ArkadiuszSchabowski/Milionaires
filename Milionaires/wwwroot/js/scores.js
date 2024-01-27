class Score {
    constructor() {
        this.host = "https://localhost:5050";
        this.scoreName = document.getElementById("scoreNameRow");
        this.scoreResult = document.getElementById("scoreResultRow");
        this.scoreDate = document.getElementById("scoreDateRow");

        this.pageSize = 10;
        this.pageNumber = 1;

        this.counterResult;
        this.counterSide;

        this.pageSize5 = document.getElementById("pageSize5");
        this.pageSize10 = document.getElementById("pageSize10");
        this.pageSize25 = document.getElementById("pageSize25");
        this.pageSize50 = document.getElementById("pageSize50");
        this.pageNumberDecrement = document.getElementById("pageNumberDecrement");
        this.pageNumberIncrement = document.getElementById("pageNumberIncrement");
        this.pageCurrentNumber = document.getElementById("pageCurrentNumber");
        this.resultCounter = document.getElementById("resultCounter");
        this.pageCounter = document.getElementById("pageCounter");
        this.currentScope = document.getElementById("currentScope");
        this.scoreTitle = document.getElementById("scoreTitle");

    }
    Init() {
        this.GetMainPage();
        this.SetListeners();
    }
    async GetMainPage() {

        const path = `${this.host}/api/game/scores?pageSize=${this.pageSize}&pageNumber=${this.pageNumber}`;
        try {
            const response = await fetch(path);
            const data = await response.json();
            this.ClearScores();
            this.CreateNewTable(data);
            this.SetNavigatorText(data);
        } catch (error) {
            this.scoreTitle.innerHTML = "Wystąpił błąd podczas pobierania danych.";
        }
    }
    SetListeners() {
        this.pageSize5.addEventListener("click", () => this.SetPageSize5());
        this.pageSize10.addEventListener("click", () => this.SetPageSize10());
        this.pageSize25.addEventListener("click", () => this.SetPageSize25());
        this.pageSize50.addEventListener("click", () => this.SetPageSize50());
        this.pageNumberDecrement.addEventListener("click", () => this.PageNumberDecrement());
        this.pageNumberIncrement.addEventListener("click", () => this.PageNumberIncrement());
    }
    SetNavigatorText(data) {
        this.resultCounter.innerHTML = data.totalCount;
        this.pageCounter.innerHTML = data.totalPages;
        this.currentScope.innerHTML = `${data.itemsFrom} - ${data.itemsTo}`
    }
    PageNumberDecrement() {
        if (this.pageNumber <= 1) {
            return;
        }
        this.pageNumber--;
        this.pageCurrentNumber.innerText = this.pageNumber;
        this.GetMainPage();
    }
    PageNumberIncrement() {
        if (this.pageSize * this.pageNumber >= 100) {
            return;
        }
        this.pageNumber++;
        this.pageCurrentNumber.innerText = this.pageNumber;
        this.GetMainPage();
    }
    ClearScores() {
        this.scoreName.innerHTML = "";
        this.scoreResult.innerHTML = "";
        this.scoreDate.innerHTML = "";
    }
    SetPageSize5() {
        this.pageSize5.classList.add("currentPage");
        this.pageSize10.classList.remove("currentPage");
        this.pageSize25.classList.remove("currentPage");
        this.pageSize50.classList.remove("currentPage");
        this.pageNumber = 1;
        this.pageCurrentNumber.innerText = this.pageNumber;
        this.pageSize = 5;
        this.GetMainPage();
    }
    SetPageSize10() {
        this.pageSize5.classList.remove("currentPage");
        this.pageSize10.classList.add("currentPage");
        this.pageSize25.classList.remove("currentPage");
        this.pageSize50.classList.remove("currentPage");
        this.pageNumber = 1;
        this.pageCurrentNumber.innerText = this.pageNumber;
        this.pageSize = 10;
        this.GetMainPage();
    }
    SetPageSize25() {
        this.pageSize5.classList.remove("currentPage");
        this.pageSize10.classList.remove("currentPage");
        this.pageSize25.classList.add("currentPage");
        this.pageSize50.classList.remove("currentPage");
        this.pageNumber = 1;
        this.pageCurrentNumber.innerText = this.pageNumber;
        this.pageSize = 25;
        this.GetMainPage();
    }
    SetPageSize50() {
        this.pageSize5.classList.remove("currentPage");
        this.pageSize10.classList.remove("currentPage");
        this.pageSize25.classList.remove("currentPage");
        this.pageSize50.classList.add("currentPage");
        this.pageNumber = 1;
        this.pageCurrentNumber.innerText = this.pageNumber;
        this.pageSize = 50;
        this.GetMainPage();
    }

    CreateNewTable(data) {
        let scores = data.listScores;
        let scoreNumber = data.itemsFrom;
        for (let i = 0; i < scores.length; i++) {
            let name = document.createElement("div");
            let result = document.createElement("div");
            let date = document.createElement("div");

            name.innerHTML = `${scoreNumber + i}. ${scores[i].name}`;
            result.innerHTML = scores[i].result;

            let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
            let formattedDate = new Date(scores[i].date).toLocaleDateString(undefined, options);
            date.innerHTML = formattedDate;

            const navigatorTextElements = document.querySelectorAll(".navigatorText");
            navigatorTextElements.forEach(element => {
                element.style.display = "flex";
            });

            const navigator50 = document.querySelectorAll(".navigator50");
            navigator50.forEach(element => {
                element.style.display = "flex";
            });

            const navigatorResultElements = document.querySelectorAll(".navigatorResult");
            navigatorResultElements.forEach(element => {
                element.style.display = "flex";
            });

            this.scoreName.appendChild(name);
            this.scoreResult.appendChild(result);
            this.scoreDate.appendChild(date);
        }
    }
}
const score = new Score();
score.Init();