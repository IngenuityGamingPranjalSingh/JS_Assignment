import { Game } from "./Game.js";

onload = () => {
    const main = document.querySelector('#main');
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;

    main.append(canvas);
    const ctx = canvas.getContext('2d');
    ctx.font = "30px Arial";
    ctx.fillText("Press Enter to play!", canvas.width / 2 - 230, canvas.height / 2);

    document.addEventListener("keyup", (key) => {
        if (key.code === 'Enter') {
            window.console.log("clicked");
            tick();
        }
    });
    var game = new Game(canvas, ctx);
    game.start();

    document.onkeydown = game.onKeyDown.bind(game);
    document.onkeyup = game.onKeyUp.bind(game);
    function tick() {
        game.update();
        game.draw();
        requestAnimationFrame(tick);
    }

}