var lasers = [];
var laserVel = [];

function Laser() {
    for (var i = 0; i < lasers.length; i++) {
        for (var z = 0; z < NPCs.length; z++) {
            if (dist(lasers[i].x, lasers[i].y, NPCs[z].x, NPCs[z].y) < NPC_size / 2) {
                NPCs[z] = createVector(random(0, width), random(0, height));
                NPCVelocity[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
            }
        }
        lasers[i].add(laserVel[i]);

        push();
        stroke(132, 112, 255);
        line(lasers[i].x, lasers[i].y, lasers[i].x + laserVel[i].x * 4, lasers[i].y + laserVel[i].y * 4);
        pop();
    }
}

function keyPressed() {
    if (keyCode == 32) {
        lasers.push(createVector(PC1.x, PC1.y));
        laserVel.push(p5.Vector.fromAngle(radians(heading)).mult(7));
    }
}