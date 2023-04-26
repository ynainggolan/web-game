class Sprite {
    constructor({position, imgSrc}) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = imgSrc
        this.loaded = false
    }
    draw() {
        if (!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}