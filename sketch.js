


function setup() {
    createCanvas(1200,800)
    var txt = "do u think that the internet is very slow? click this to contribute --> https://docs.google.com/forms/d/e/1FAIpQLSfhWbrVjYl0AAlk4DFqkVr9yEfB5zKdZWPOBPIj6s_LidbL0w/viewform?usp=sf_link "
}
function preload(){
    this.img = loadImage("366358_preview.png")
}
function draw() {
txt.x = 600
txt.y = 400
txt.legnth = 100
txt.width = 40
World.add(world,this.txt)
}


