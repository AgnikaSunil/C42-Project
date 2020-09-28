function setup() {
    createCanvas(400, 400);
    PC1 = createVector(width / 2, height / 2)
    PC1Velocity = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    heading = 0;
    NPCs = [];
    NPCVelocity = [];
    NPC_size = 25;
    for (var i = 0; i < 5; i++) {
        NPCs.push(createVector(random(0, width), random(0, height)));
        NPCVelocity.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function draw() {
    background(0);
    PC();
    NPC();
    Laser();
}