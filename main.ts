let jiasux = 0
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
game.setLife(5)
let Player = game.createSprite(2, 4)
let enemy = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(200)
    jiasux = input.acceleration(Dimension.X)
    if (jiasux < -150) {
        Player.change(LedSpriteProperty.X, -1)
    } else if (jiasux > 150) {
        Player.change(LedSpriteProperty.X, 1)
    }
})
basic.forever(function () {
    basic.pause(500)
    if (enemy.isDeleted()) {
        enemy = game.createSprite(randint(0, 4), 0)
    } else {
        enemy.change(LedSpriteProperty.Y, 1)
        if (enemy.get(LedSpriteProperty.Y) >= 4) {
            if (enemy.isTouching(Player)) {
                basic.showIcon(IconNames.Happy)
            } else {
                game.removeLife(1)
            }
            enemy.delete()
        }
    }
})
