var PC1;
var size;
var heading;
var PC1Velocity;
var force;

function PC(){
    if (keyIsDown(LEFT_ARROW)) {
        heading -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 6;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        PC1Velocity.add(force.mult(0.2));
    }

    if (PC1.x > 400) {
        PC1.x = 0
    }
    if (PC1.x < 0) {
        PC1.x = 400
    }
    if (PC1.y > 400) {
        PC1.y = 0
    }
    if (PC1.y < 0) {
        PC1.y = 400
    }

    PC1Velocity.mult(0.978);
    PC1.add(PC1Velocity);

    push();
    translate(PC1.x, PC1.y);
    rotate(radians(heading));
    fill("blue");
    triangle(-size + 1, -size + 1, size + 1, 0, -size + 1, size + 1);
    pop();
}