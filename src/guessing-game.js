class GuessingGame {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        return (this.mid = Math.round((this.right - this.left) / 2 + this.left));
    }

    lower() {
        this.right = this.mid;
        this.guess();
    }

    greater() {
        this.left = this.mid;
        this.guess();
    }
}

module.exports = GuessingGame;
