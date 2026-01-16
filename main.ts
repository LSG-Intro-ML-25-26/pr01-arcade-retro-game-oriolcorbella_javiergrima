namespace SpriteKind {
    export const objeto = SpriteKind.create()
    export const npc = SpriteKind.create()
    export const escalera = SpriteKind.create()
    export const corazon = SpriteKind.create()
    export const puerta2 = SpriteKind.create()
    export const puertaCastillo = SpriteKind.create()
    export const puerta1 = SpriteKind.create()
    export const cofre = SpriteKind.create()
}
function Piso1 () {
    tiles.setCurrentTilemap(tilemap`piso2`)
    sprites.destroy(princesa)
    sprites.destroy(puerta2)
    cofre = sprites.create(assets.image`cofre`, SpriteKind.cofre)
    cofre.setPosition(23, 59)
}
function DialogoPrincesa () {
    game.showLongText("klk manin, necesito tu ayuda urgentemente!! Necesito que encuentres mi corona, me la ha robado un mamahuevo y sin ella nadie se cree que soy la princesa. Si consigues devolvermela te dare un chupachups de limon, ahora puedes pasar por la puerta y avanzar al siguiente piso.", DialogLayout.Bottom)
    pause(1000)
    if (nena.overlapsWith(puerta2)) {
        Piso1()
    }
}
function PantallaPrincipal () {
    scene.setBackgroundImage(assets.image`castillo`)
    puerta = sprites.create(assets.image`puerta`, SpriteKind.puertaCastillo)
    puerta.setPosition(46, 65)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-down`,
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-right`,
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-left`,
    500,
    false
    )
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-up`,
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.puertaCastillo, function () {
    Pantalla2()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function () {
    DialogoPrincesa()
})
function Pantalla2 () {
    tiles.setCurrentTilemap(tilemap`nivel6`)
    sprites.destroy(puerta)
    princesa = sprites.create(assets.image`princesa`, SpriteKind.npc)
    princesa.setPosition(139, 60)
    puerta2 = sprites.create(assets.image`escaleras`, SpriteKind.puerta1)
    puerta2.setPosition(154, 8)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.puerta1, function () {
    Piso1()
})
let puerta: Sprite = null
let cofre: Sprite = null
let puerta2: Sprite = null
let princesa: Sprite = null
let nena: Sprite = null
PantallaPrincipal()
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
let corazon1 = sprites.create(assets.image`corazon`, SpriteKind.corazon)
let corazon2 = sprites.create(assets.image`corazon`, SpriteKind.corazon)
let corazon3 = sprites.create(assets.image`corazon`, SpriteKind.corazon)
corazon1.setPosition(7, 7)
corazon2.setPosition(17, 7)
corazon3.setPosition(27, 7)
controller.moveSprite(nena)
