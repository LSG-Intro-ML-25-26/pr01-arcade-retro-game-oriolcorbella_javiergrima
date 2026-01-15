namespace SpriteKind {
    export const objeto = SpriteKind.create()
    export const npc = SpriteKind.create()
    export const escalera = SpriteKind.create()
}
function Piso1 () {
	
}
function DialogoPrincesa () {
    game.showLongText("klk manin, necesito tu ayuda urgentemente!! Necesito que encuentres mi corona, me la ha robado un mamahuevo y sin ella nadie se cree que soy la princesa. Si consigues devolvermela te dare un chupachups de limon", DialogLayout.Bottom)
    pause(1000)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function () {
    Piso1()
})
function PantallaPrincipal () {
    scene.setBackgroundImage(assets.image`castillo`)
    puerta = sprites.create(assets.image`puerta`, SpriteKind.objeto)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function () {
    DialogoPrincesa()
})
function Pantalla2 () {
    tiles.setCurrentTilemap(tilemap`nivel6`)
    sprites.destroy(puerta)
    princesa = sprites.create(assets.image`princesa`, SpriteKind.npc)
    princesa.setPosition(139, 60)
    puerta2 = sprites.create(assets.image`escaleras`, SpriteKind.escalera)
    puerta2.setPosition(154, 8)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.objeto, function () {
    Pantalla2()
})
let princesa: Sprite = null
let puerta: Sprite = null
let puerta2: Sprite = null
let nena: Sprite = null
PantallaPrincipal()
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
controller.moveSprite(nena)
