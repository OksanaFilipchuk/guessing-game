class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.result = Math.round((this.max-this.min)/2)+this.min;
    }

    lower() {
        this.max = this.result;        
    }

    greater() {
        this.min = this.result;
    }
}

module.exports = GuessingGame;
