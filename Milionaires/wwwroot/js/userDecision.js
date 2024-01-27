class UserDecision {
    constructor() {
        this.host = "https://localhost:5050";
    }

    ResignOption() {
        buttons.btnResign.addEventListener("click", () => {

            index.SetBackground();
            index.HideQuestion();
            buttons.LockIndexButtons();

            let resignMainDiv = document.createElement("div");
            resignMainDiv.classList.add("dynamicMainDiv");

            let label = document.createElement("label");
            label.classList.add("dynamicLabel");
            label.innerText = "Definitywnie chcesz się wycofać?";

            let buttonResignContainer = document.createElement("div");
            buttonResignContainer.classList.add("buttonResignContainer");

            let buttonYes = document.createElement("button");
            buttonYes.classList.add("btnYesNo");
            buttonYes.id = "btnResignYes";
            buttonYes.innerText = "TAK";

            let buttonNo = document.createElement("button");
            buttonNo.classList.add("btnYesNo");
            buttonYes.id = "btnResignNo";
            buttonNo.innerText = "NIE";


            buttonResignContainer.append(buttonYes, buttonNo);

            resignMainDiv.append(label, buttonResignContainer);

            index.questionWindow.appendChild(resignMainDiv);

            buttonYes.addEventListener("click", () => {

                index.ShowQuestion();
                index.questionWindow.removeChild(resignMainDiv);

                if (index.balance === 0) {
                    index.stateGameInformation = ``;
                }
                else if ((index.balance !== 0) && (index.balance !== 2000) && (index.balance !== 40000)) {
                    index.stateGameInformation = `\nTo dobra decyzja, żeby sie wycofać. Gratulacje wygrywasz ${index.balance} zł!`;
                }
                else if ((index.balance === 2000) || (index.balance === 40000)) {
                    index.stateGameInformation = `\nZrezygnowałeś na progu gwarantowanym. Wygrywasz ${index.balance} zł!`;
                }
                index.questionText.innerHTML = index.explainCorrectAnswer + index.stateGameInformation;
                this.SaveScoreOption();
                buttons.SetDefaultTextForButtons();
            });

            buttonNo.addEventListener("click", () => {
                index.questionWindow.style.backgroundImage = "url('../images/background.jpg')";
                index.ShowQuestion();
                index.questionWindow.removeChild(resignMainDiv);
                buttons.UnlockIndexButtons();
            })
        })
    }
    //TODO
    SaveScoreOption() {

        index.SetBackground();
        if (index.balance === 0) {
            index.questionText = index.explainCorrectAnswer;
            this.RestartGameOption();
            return;
        }

        let div = document.createElement("div");
        div.classList.add("dynamicMainDiv");


        let label = document.createElement("label");
        label.classList.add("dynamicLabel");
        label.id = "saveScoreLabel";
        label.innerText = "Podaj swój nick";

        let input = document.createElement("input");
        input.classList.add("dynamicInput");

        let button = document.createElement("button");
        button.classList.add("btnYesNo");
        button.innerText = "OK";


        div.append(label, input, button);

        index.questionWindow.appendChild(div);

        button.addEventListener("click", () => {
            buttons.SetDefaultTextForButtons();

            const answerButtons = document.querySelectorAll(".btnAnswer");

            answerButtons.forEach(btn => btn.style.backgroundColor = "#d9d9d9");

            let name = input.value;
            let object = {
                Name: name,
                Result: index.balance
            };

            const path = `${this.host}/api/game`;
            fetch(path, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            }).then(response => {
                if (response.ok) {
                    index.questionWindow.innerHTML = "";
                    this.RestartGameOption();
                }
            });
        });
    }
    RestartGameOption() {

        let div = document.createElement("div");
        div.classList.add("dynamicMainDiv");

        let label1 = document.createElement("label");
        label1.classList.add("dynamicLabel");

        if (index.balance === 0) {
            label1.innerText = "";
        }
        else {
            label1.innerText = "Gratulacje wspaniałego wyniku!";
        }

        let label2 = document.createElement("label");
        label2.classList.add("dynamicLabel");
        label2.innerText = "Czy chcesz zagrać jeszcze raz?";

        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttonResignContainer");

        let buttonYes = document.createElement("button");
        buttonYes.classList.add("btnYesNo");
        buttonYes.innerText = "TAK";

        let buttonNo = document.createElement("button");
        buttonNo.classList.add("btnYesNo");
        buttonNo.innerText = "NIE";

        buttonContainer.append(buttonYes, buttonNo);

        div.append(label1, label2, buttonContainer);

        index.questionWindow.appendChild(div);

        buttonYes.addEventListener("click", () => {
            window.location.href = "/Home/Index";
        })
        buttonNo.addEventListener("click", () => {
            index.questionWindow.innerHTML = "";
            let div = document.createElement("div");
            div.classList.add("dynamicMainDiv");

            let label = document.createElement("label");
            label.classList.add("dynamicLabel");
            label.innerText = "Dziękujemy za udział w grze!";

            div.appendChild(label);
            index.questionWindow.appendChild(div);

            index.EndGame();
            buttons.SetDefaultTextForButtons();
        })
    }
}
let userDecision = new UserDecision();