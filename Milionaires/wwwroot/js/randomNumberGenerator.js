class RandomNumberGenerator {
    constructor() {
        this.randomNumber;
        this.space = "<br><br>"
    }
    SetRandomNumberForQuestion() {
        return Math.floor(Math.random() * 2);
    }
    AudienceWhenHaveFiftyFifty() {
        let numberA = Math.floor(Math.random() * 100);
        let numberB = Math.floor(Math.random() * (100 - numberA));
        let numberC = Math.floor(Math.random() * (100 - (numberA + numberB)));
        let numberD = 100 - (numberA + numberB + numberC);
        let audience = [numberA, numberB, numberC, numberD]
        return `${this.space}A: ${audience[0]}%, B: ${audience[1]}%, C: ${audience[2]}%, D: ${audience[3]}%.`;
    }
    AudienceWhenDontHaveFiftyFifty() {
        return `${this.space}Wszyscy podali tę samą liczbę odpowiedzi – super jednomyślność!`
    }
    MessageWhenHaveFiftyFifty() {
        this.randomNumber = Math.floor(Math.random() * 5);
        switch (this.randomNumber) {
            case 0:
                return `${this.space}Przyjaciel: Wydaje mi się, że poprawną odpowiedzią może być A lub C`;
            case 1:
                return `${this.space}Przyjaciel: Stawiałbym na B, ale nie jestem pewny`;
            case 2:
                return `${this.space}Przyjaciel: Zrezygnowałbym na tym etapie, ale jeśli miałbym grać to zaznaczyłbym D`;
            case 3:
                return `${this.space}Przyjaciel: Obstawiałbym C lub D`;
            case 4:
                return `${this.space}Przyjaciel: Odrzuciłbym B. Jednak może to czas, by sie wycofać?`;
        }
    }
    MessageWhenDontHaveFiftyFifty() {
        switch (game.correctIndex) {
            case 0:
                return `${this.space}Przyjaciel: Zdecydowanie odpowiedź A`;
            case 1:
                return `${this.space}Przyjaciel: Stawiałbym na odpowiedź B`;
            case 2:
                return `${this.space}Przyjaciel: Wydaje mi się, że poprawna odpowiedź to C.`
            case 3:
                return `${this.space}Przyjaciel: Wydaje mi się, że odpowiedź D jest prawidłowa.`
        }
    }
    SetRandomNumberForFiftyFifty(correctedIndex) {
        let arrayRandomNumbers = [];

        while (arrayRandomNumbers.length < 2) {

            this.randomNumber = Math.floor(Math.random() * 4);
            if (!arrayRandomNumbers.includes(this.randomNumber) && this.randomNumber !== correctedIndex) {
                arrayRandomNumbers.push(this.randomNumber);
            }
        }
        return arrayRandomNumbers;
    }
}
let randomNumberGenerator = new RandomNumberGenerator();