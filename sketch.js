var tom,jerry,bg,tomImage1,tomImage2,tomImage3,jerryImage1,jerryImage2,jerryImage3
function preload() {
//load the images here
bg=loadImage("images/garden.png")
tomImage1=loadAnimation("images/tomOne.png")
tomImage2=loadAnimation("images/tomTwo.png","images/tomThree.png")
tomImage3=loadAnimation("images/tomFour.png")
jerryImage1=loadAnimation("images/jerryOne.png")
jerryImage2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
jerryImage3=loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600)
tom.addAnimation("tomsleeping",tomImage1)
tom.scale=0.2
jerry=createSprite(200,600)
jerry.addAnimation("jerryStanding",jerryImage1)
jerry.scale=0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.velocityX=0
tom.addAnimation("tomlastImage",tomImage3)
tom.x=300
tom.scale=0.2
tom.changeAnimation("tomlastImage")
jerry.addAnimation("jerrylastImage",jerryImage3)
jerry.scale=0.15
jerry.changeAnimation("jerrylastImage")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("tomrunning",tomImage2)
tom.changeAnimation("tomrunning")
jerry.addAnimation("jerryteasing",jerryImage2)
jerry.changeAnimation("jerryteasing")
}

}
