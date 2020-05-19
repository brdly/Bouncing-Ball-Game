var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var height = 396; x = 10, y = 100; startpos = 100; endpos = height;
ctx.fillStyle = "black";
ctx.fillRect(700, 100, 100, 100);

function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(250,0,0,0.4)';
    ctx.fill();

    gravity();
}

function gravity() {
    if (startpos < endpos) {
        // move ball down (gravity)
        if (y < endpos) {
            y += 2;
        } else {
            // new start pos = current ball location
            // new end pos = end position - current start pos/2 + startpos (ball loses momentum as it bounces)
            endpos = ((endpos - startpos)/2) + startpos;
            startpos = y;
        }
    } else if (startpos > endpos) {
        // move ball up (bounce)
        if (y > endpos) {
            y -= 2;
        } else {
            // new start pos = current ball location
            // new end pos = height of container limiting ball movement
            endpos = height;
            startpos = y;
        }
    } else {
        // do nothing
    }
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.fillRect(0, 0, can.width, can.height);
    requestAnimationFrame(draw);
}
draw();
// gravity();