namespace SpriteKind {
    export const objeto = SpriteKind.create()
    export const npc = SpriteKind.create()
    export const escalera = SpriteKind.create()
    export const corazon = SpriteKind.create()
    export const puerta2 = SpriteKind.create()
    export const puertaCastillo = SpriteKind.create()
    export const puerta1 = SpriteKind.create()
    export const cofre = SpriteKind.create()
    export const princesa = SpriteKind.create()
    export const caballero = SpriteKind.create()
}
function Piso1 () {
    tiles.setCurrentTilemap(tilemap`piso2`)
    nena.setPosition(146, 52)
    sprites.destroy(princesa)
    sprites.destroy(puerta2)
    cofre = sprites.create(assets.image`cofre`, SpriteKind.cofre)
    cofre.setPosition(23, 59)
}
function DialogoCaballero () {
    game.showLongText("Socorro!!! Auxilio!!! Gracias a dios que has llegado, la princesa esta en apuros, entra al castillo y habla con ella para tener mas detalles!", DialogLayout.Bottom)
    pause(1000)
}
function DialogoPrincesa () {
    game.showLongText("klk manin, necesito tu ayuda urgentemente!! Necesito que encuentres mi corona, me la ha robado un mamahuevo y sin ella nadie se cree que soy la princesa. Si consigues devolvermela te dare un chupachups de limon, ahora puedes pasar por la puerta y avanzar al siguiente piso.", DialogLayout.Bottom)
    pause(1000)
    if (nena.overlapsWith(puerta2)) {
        Piso1()
    }
}
function PantallaPrincipal () {
    tiles.setCurrentTilemap(tilemap`castillo1`)
    puerta = sprites.create(assets.image`puerta`, SpriteKind.puertaCastillo)
    caballero = sprites.create(assets.image`caballero`, SpriteKind.caballero)
    caballero.setPosition(112, 88)
    puerta.setPosition(66, 80)
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
function Pantalla2 () {
    tiles.setCurrentTilemap(tilemap`nivel6`)
    nena.setPosition(14, 60)
    sprites.destroy(puerta)
    sprites.destroy(caballero)
    princesa = sprites.create(assets.image`princesa`, SpriteKind.princesa)
    princesa.setPosition(139, 60)
    puerta2 = sprites.create(assets.image`escaleras`, SpriteKind.puerta1)
    puerta2.setPosition(154, 8)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.princesa, function () {
    DialogoPrincesa()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.caballero, function () {
    DialogoCaballero()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.puerta1, function () {
    Piso1()
})
let caballero: Sprite = null
let puerta: Sprite = null
let cofre: Sprite = null
let puerta2: Sprite = null
let princesa: Sprite = null
let nena: Sprite = null
PantallaPrincipal()
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
nena.setPosition(145, 88)
controller.moveSprite(nena)
info.setLife(3)
