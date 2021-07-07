var canvas= new fabric.Canvas("Canvas");
block_height=30;
block_width=30;
player_x=500;
player_y=550;
player_object="player.png";
block_object="";
function PUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
         top:player_y,left:player_x
        });
        canvas.add(player_object);
    }
)};
function new_Image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_object=Img;
        block_width.scaleToWidth(block_width);
        block_height.scaleToHeight(block_height);
        block_object.set({
         top:player_y,left:player_x
        });
        canvas.add(block_object);
    }    
    );
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    KeyPressed= e.Keycode;
    if(e.shiftkey==true&&KeyPressed==80){
        block_height=block_height-10;
        block_width=block_width-10;
    }
    if(e.shiftkey==true&&KeyPressed==77){
        block_height=block_height+10;
        block_width=block_width+10;
    }
    if(KeyPressed=='70'){
        new Image("spiderman_face.png");
        console.log("f");
    }
    if(KeyPressed=='66'){
        new Image("ironman_body.png");
        console.log("b");
    }
    if(KeyPressed=='76'){
        new Image("hulk_legs.png");
        console.log("l");
    }
    if(KeyPressed=='82'){
        new Image("thor_right_hand.png");
        console.log("r");
    }
    if(KeyPressed=='72'){
        new Image("captain_america_left_hand");
        console.log("r");
    }
    if(KeyPressed=='38'){
        up();
        console.log("up");
    }
    if(KeyPressed=='40'){
        down();
        console.log("down");
    }
    if(KeyPressed=='37'){
        left();
        console.log("left");
    }
    if(KeyPressed=='39'){
        right();
        console.log("right");
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("Block image height="+block_height);
        console.log("When up arrow is pressed, x="+player_x+"y="+player_y);
        PUpdate();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("Block image height="+block_height);
        console.log("When down arrow is pressed, x="+player_x+"y="+player_y);
        PUpdate();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("Block image height="+block_height);
        console.log("When left arrow is pressed, x="+player_x+"y="+player_y);
        PUpdate();
    }
}
function right(){
    if(player_x<=700){
        player_x=player_x+block_width;
        console.log("Block image height="+block_height);
        console.log("When right arrow pressed, x="+player_x+"y="+player_y);
        PUpdate();
    }
}