var NPCs;
var NPCVelocity;
var NPC_size;

function NPC() {
    for (var i = 0; i < NPCs.length; i++) {
        push();
        NPCs[i].add(NPCVelocity[i]);
        if (NPCs[i].x > width + NPC_size / 2) {
            NPCs[i].x = 0
        }
        if (NPCs[i].x < -NPC_size / 2) {
            NPCs[i].x = 400
        }
        if (NPCs[i].y > height + NPC_size / 2) {
            NPCs[i].y = 0
        }
        if (NPCs[i].y < -NPC_size / 2) {
            NPCs[i].y = 400
        }

        fill(255)
        stroke(255);
        ellipse(NPCs[i].x, NPCs[i].y, NPC_size);
        pop();
    }
}