class RandomNumberGenerator {
    constructor() {
        this.randomNumber;
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
        return `A: ${audience[0]}%, B: ${audience[1]}%, C: ${audience[2]}%, D: ${audience[3]}%.`;
    }
    AudienceWhenDontHaveFiftyFifty() {
        return `Wszyscy podali tę samą liczbę odpowiedzi – super jednomyślność!`
    }
    MessageWhenHaveFiftyFifty() {
        this.randomNumber = Math.floor(Math.random() * 5);
        switch (this.randomNumber) {
            case 0:
                return `Przyjaciel: Wydaje mi się, że poprawną odpowiedzią może być A lub C`;
            case 1:
                return `Przyjaciel: Stawiałbym na B, ale nie jestem pewny`;
            case 2:
                return `Przyjaciel: Zrezygnowałbym na tym etapie, ale jeśli miałbym grać to zaznaczyłbym D`;
            case 3:
                return `Przyjaciel: Obstawiałbym C lub D`;
            case 4:
                return `Przyjaciel: Odrzuciłbym B. Jednak może to czas, by sie wycofać?`;
        }
    }
    MessageWhenDontHaveFiftyFifty() {
        switch (index.correctIndex) {
            case 0:
                return `Przyjaciel: Zdecydowanie odpowiedź A`;
            case 1:
                return `Przyjaciel: Stawiałbym na odpowiedź B`;
            case 2:
                return `Przyjaciel: Wydaje mi się, że poprawna odpowiedź to C.`
            case 3:
                return `Przyjaciel: Wydaje mi się, że odpowiedź D jest prawidłowa.`
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