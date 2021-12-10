class Game {
  constructor() {}
   
  getState(){
    var gameStateRef=database.ref("gameState")
    gameStateRef.on("value",function(data){
      gameState=data.val()
    })
  }


  update(state){
  database.ref("/").update({
    gameState:state
  })
  }


  start() {
    player = new Player();
    playerCount=player.getCount()
    form = new Form();
    form.display();
    gun1=createSprite(width/2-50,height-100)
    gun1.addImage("gun1",gun1_img)
    gun2=createSprite(width/2+100,height-100)
    gun2.addImage("gun2",gun2_img) 
    guns=[gun1,gun2]

  }


  handleElements(){
    form.hide()
    form.titleImg.position(40,50)
    form.titleImg.class("gameTitleAfterEffect")
  }

  play(){
    this.handleElements()
    player.getPlayersInfo()
    if(allPlayers !== undefined){
     image(backgroundImage,0,-height*5,widht,height*6)
     var index = 0
     for(var plr in allPlayers){
       index=index+1
       var x=allPlayers[plr].positionX
       var y=height-allPlayers[plr].positionY
       guns[index-1].position.x=x;
       guns[index-1].position.y=y;
     }
     this.handlePlayersControls()
     drawSprites()
    }
  }
  
   handlePlayersControls(){
   if(keyIsDown(LEFT_ARROW)){
   player.positionX -= 5
   player.update();
   }
   if(keyIsDown(RIGHT_ARROW)) {
     player.positionX += 5
     player.update();
     
   } 
   }

}
  