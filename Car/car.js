onload = () => {
    const canvas = document.querySelector('#myGame');
    const ctx = canvas.getContext('2d');
    const car = new Image();
    const car1 = new Image();
    const road = new Image();
    const carW = 48;
    const carH = 92;
    let x = 20;
    let y = 20;
    let y1 = 0;
    let x1 = 100;
    let speed = 5;
    let dir = 0;
    let mod = 0;
    car.addEventListener('load', () => {
        draw();
        window.addEventListener('keydown', keyHandler);
        window.addEventListener('keyup', keyHandler);
    });
    road.src = "https://th.bing.com/th/id/R.3a63900ec9badf280238bee1798b2a4c?rik=54WNLTwy12TnIQ&pid=ImgRaw";
    car.src = "https://th.bing.com/th/id/R.2144a2fae2c7e97c3b6e2ae01d065593?rik=Q0l6D0MdNHufcQ&pid=ImgRaw";
    car1.src = "https://th.bing.com/th/id/R.2144a2fae2c7e97c3b6e2ae01d065593?rik=Q0l6D0MdNHufcQ&pid=ImgRaw";
    function draw() {
        if (road.complete && car.complete) {
            if (y + carH < canvas.height && x + carW < canvas.width && x >= 0 && y >= 0 && x <= x1) {
                x += speed * mod;
                y += speed * dir;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < canvas.width; i = i + 180) {
                    ctx.drawImage(road, i, 0, 180, 894);
                }
                ctx.drawImage(car1, x1, y1, carW, carH);
                y1++;
                y++;
                if (y1 > canvas.height) {
                    y1 = 0
                }
                ctx.drawImage(car, x, y, carW, carH);
            }
            else {
                alert(" you lost");
                return false;
            }

        }
        requestAnimationFrame(draw);
    }

    function keyHandler(e) {
        switch (e.type) {
            case 'keydown':
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                        dir = -1;
                        break;
                    case 'KeyS':
                    case 'ArrowDown':
                        dir = 1;
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                        mod = -3;
                        break;
                    case 'KeyD':
                    case 'ArrowRight':
                        mod = 3;
                        break;
                }
                break;
            case 'keyup':
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                    case 'KeyS':
                    case 'ArrowDown':
                        dir = 0;
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                    case 'KeyD':
                    case 'ArrowRight':
                        mod = 0;
                        break;
                }
                break;
        }
    }
}