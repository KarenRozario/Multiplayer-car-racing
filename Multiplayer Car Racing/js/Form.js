class Form {
  constructor() {
    this.input = createInput('Name')
    this.button = createButton('Play')
    this.greeting = createElement('h2')
    this.title = createElement('h2')
    this.reset = createButton('Reset')
  }
  hide() {
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
    this.title.hide()
  }

  display() {
    this.title.html('Car Racing Game')
    this.title.position(displayWidth / 2 - 330, 0)

    this.input.position(displayWidth / 2 - 280, displayHeight / 2 - 400)
    this.button.position(displayWidth / 2 - 225, displayHeight / 2 - 200)
    this.reset.position(displayWidth - 300, 20)

    this.button.mousePressed(() => {
      this.input.hide()
      this.button.hide()
      player.name = this.input.value()
      playerCount += 1
      player.index = playerCount
      player.update()
      player.updateCount(playerCount)
      this.greeting.html('Hello ' + player.name)
      this.greeting.position(displayWidth / 2 - 250, displayHeight / 4)
    })
    this.reset.mousePressed(() => {
      player.updateCount(0)
      game.update(0)
    })
  }
}
