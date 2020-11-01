var movingRect;
var fixedRect;
var val; 
function setup(){
    createCanvas(650,400);
    movingRect=createSprite(40,40,30,60);
    fixedRect=createSprite(200,200,20,40);
     
    obj1 = createSprite(300,200,20,40);
    obj2 = createSprite(400,200,20,40);
    obj3 = createSprite(500,200,20,40);
    left=createSprite(40,200,30,60);
    right=createSprite(300,200,20,40);
    left.velocityX=+2;
    right.velocityX=-2;
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
    movingRect.debug=true;
    fixedRect.debug=true;
}
function draw(){
    background("black");
    movingRect.y=mouseY;
    movingRect.x=mouseX;

    val = isTouching(movingRect,obj2);
    console.log(val);
    if(val === true)
    {
        movingRect.shapeColor="red";
        obj2.shapeColor="red";
    }
    else{

        fixedRect.shapeColor="blue";
        obj2.shapeColor="blue";
    }
    bounceOff(left,right);
    drawSprites();
}
