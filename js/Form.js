class Form {
constructor (){
    this. input=createInput("name")
    this. button=createButton('play')
    this. greeting=createElement('h1')
    this. title=createElement('h3')
}
hide(){
    this.greeting.hide()
    this.input.hide()
    this.button.hide()
    this.title.hide()
}
display(){
    
   this. title.html("ilegalRACING")
   this. title.position(displayWidth/2-50,0)
    
    this. input.position(displayWidth/2-40,displayHeight/2-80)
    this. button.position(displayWidth/2+30,displayHeight/2)
    this. button.mousePressed(()=>{
        this.   input.hide()
        this.   button.hide()
        player. name=this.input.value()
        playerCount+=1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
        this. greeting.html("no place for lossers "+player. name)
        this. greeting.position(displayWidth/2-70,displayHeight/4)
    })
}
}