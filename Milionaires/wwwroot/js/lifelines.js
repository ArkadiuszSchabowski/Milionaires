

class Lifelines {
    constructor() {

        this.result;
        this.questionText = document.querySelector("#questionText");
        this.questionWindow = document.querySelector("#questionWindow");

        this.audience = true;
        this.phone = true;
        this.fiftyFifty = true;
    }

    AddLifelines() {
        this.PhoneFriend();
        this.Audience();
        this.FiftyFifty()
    }

    PhoneFriend() {
        buttons.btnPhone.addEventListener("click", () => {

            if (this.phone) {
                if (this.fiftyFifty) {
                    this.result = randomNumberGenerator.MessageWhenHaveFiftyFifty();
                }
                if (!this.fiftyFifty) {
                    this.result = randomNumberGenerator.MessageWhenDontHaveFiftyFifty();
                }
                let newDiv = document.createElement("div");
                this.questionText.appendChild(newDiv);
                newDiv.id = "questionNewWindow";
                newDiv.innerHTML = `${this.result}`;
                this.PhoneFriendFalseStyle();
                this.phone = false;
            }
        })
    };

    FiftyFifty() {
        buttons.btnFiftyFifty.addEventListener("click", () => {
            if (this.fiftyFifty) {
                this.result = randomNumberGenerator.SetRandomNumberForFiftyFifty(index.correctIndex);
                if (this.result.includes(0)) {
                    buttons.btnA.style.visibility = "hidden";
                }
                if (this.result.includes(1)) {
                    buttons.btnB.style.visibility = "hidden";
                }
                if (this.result.includes(2)) {
                    buttons.btnC.style.visibility = "hidden";
                }
                if (this.result.includes(3)) {
                    buttons.btnD.style.visibility = "hidden";
                }
                this.FiftyFiftyFalseStyle()
                this.fiftyFifty = false;
            }
        })
    };
    Audience() {
        buttons.btnAudience.addEventListener("click", () => {
            if (this.audience) {
                if (this.fiftyFifty) {

                    this.result = randomNumberGenerator.AudienceWhenHaveFiftyFifty();
                }
                else {
                    this.result = randomNumberGenerator.AudienceWhenDontHaveFiftyFifty();
                }

                let newDiv = document.createElement("div");
                this.questionText.appendChild(newDiv);
                newDiv.id = "questionNewWindow";
                newDiv.innerHTML = `${this.result}`;
                this.AudienceFalseStyle();
                this.audience = false;
            }
        })
    };
    FiftyFiftyFalseStyle() {
        buttons.btnFiftyFifty.style.backgroundImage = "url(../images/50False.png)";
    }
    AudienceFalseStyle() {
        buttons.btnAudience.style.backgroundImage = "url(../images/audienceFalse.png)";
    }
    PhoneFriendFalseStyle() {
        buttons.btnPhone.style.backgroundImage = "url(../images/phoneFalse.png)";
    }
}
let lifelines = new Lifelines();