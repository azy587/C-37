class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
display(){
this.setPosition()
this.style()
this.press()
}
setPosition(){
this.input.position(width/2-120,height/2-100)
this.playButton.position(width/2-100,height/2-40)
this.titleImg.position(width/2-600,height/2-300)
this.greeting.position(width/2-2,height/2-2)
}
style(){
  this.input.class("customInput")
  this.titleImg.class("gameTitle")
  this.playButton.class("customButton")
  this.greeting.class("greeting")

}
press(){
  this.playButton.mousePressed(()=>{
  this.input.hide()
  this.playButton.hide()
  var message = "hello"
  this.greeting.html(message)
  playerCount += 1
  player.name = this.input.value()
  player.index = playerCount
  player.addplayer()
  player.updateCount(playerCount)  
  })
  }
}

