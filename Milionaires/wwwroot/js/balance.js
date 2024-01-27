class Balance {

    SetStartBalance() {
        return 0;
    }
    SetCurrentBalance(number) {
        return number;
    }
    SetBalanceToFirstCheckpoint() {
        return 2000;
    }
    SetBalanceToSecondCheckpoint() {
        return 40000;
    }
}
let balance = new Balance();