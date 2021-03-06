export default class Score {
    canvas;
    ctx;
    score;
    scoreBoard;
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.scoreBoard = [];
        this.createScore(0);
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.scoreBoard.length !== 0) {
            this.scoreBoard.forEach((scoringItem) => {
                scoringItem.draw();
            });
            this.writeTextToCanvas(`Score is: ${this.score}`, this.canvas.width / 2, 40);
        }
    }
    writeTextToCanvas(text, xCoordinate, yCoordinate, fontSize = 20) {
        const ctx = this.canvas.getContext('2d');
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    createScore(score) {
        return {
            number: this.score
        };
    }
    getScore() {
        return this.score;
    }
    setScore(score) {
        this.score = score;
    }
}
//# sourceMappingURL=Score.js.map