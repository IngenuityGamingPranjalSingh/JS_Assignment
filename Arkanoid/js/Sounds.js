export class Sounds {
    constructor() { }
    paddleHit() {
        const paddleHit = new Audio();
        paddleHit.src = "Sounds/wall.mp3";
        return paddleHit;
    }
    brickHit() {
        const brickHit = new Audio();
        brickHit.src = "Sounds/wall.mp3";
        return brickHit;
    }
}