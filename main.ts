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
    export const cofre2 = SpriteKind.create()
    export const mago = SpriteKind.create()
    export const CofreAbierto = SpriteKind.create()
    export const agujero = SpriteKind.create()
    export const portal = SpriteKind.create()
}
function Piso1 () {
    tiles.setCurrentTilemap(tilemap`piso2`)
    nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
    nena.setPosition(142, 10)
    controller.moveSprite(nena)
    sprites.destroy(princesa2)
    sprites.destroy(puerta22)
    cofre7 = sprites.create(assets.image`cofre`, SpriteKind.cofre)
    cofre7.setPosition(23, 59)
    cofre22 = sprites.create(assets.image`cofre`, SpriteKind.cofre2)
    cofre22.setPosition(136, 59)
    mago2 = sprites.create(assets.image`mago`, SpriteKind.mago)
    mago2.setPosition(81, 42)
}
function DialogoCaballero () {
    game.showLongText("Socorro!!! Auxilio!!! Gracias a dios que has llegado, la princesa esta en apuros, entra al castillo y habla con ella para tener mas detalles!", DialogLayout.Bottom)
    pause(2000)
}
function DialogoPrincesa () {
    game.showLongText("klk manin, necesito tu ayuda urgentemente!! Necesito que encuentres mi corona, me la ha robado un mamahuevo y sin ella nadie se cree que soy la princesa. Si consigues devolvermela te dare un chupachups de limon, ahora puedes pasar por la puerta y avanzar al siguiente piso.", DialogLayout.Bottom)
    pause(2000)
}
function CofreTrampa () {
    sprites.destroy(cofre22)
    agujero2 = sprites.create(assets.image`agujero`, SpriteKind.agujero)
    agujero2.setPosition(136, 59)
    pause(200)
    sprites.destroy(CofreAbierto2)
    sprites.destroy(mago2)
    sprites.destroy(cofre7)
    sprites.destroy(agujero2)
    sprites.destroy(nena)
    sprites.destroy(portal2)
    tiles.setCurrentTilemap(tilemap`PantallaCarga`)
    pause(2000)
    Pantalla2()
    game.showLongText("Parece que has escogido el cofre equivocado y te has caido por el agujero al piso anterior, sube e intentalo de nuevo!", DialogLayout.Bottom)
}
function PantallaPrincipal () {
    tiles.setCurrentTilemap(tilemap`castillo1`)
    puerta = sprites.create(assets.image`puerta`, SpriteKind.puertaCastillo)
    caballero2 = sprites.create(assets.image`caballero`, SpriteKind.caballero)
    caballero2.setPosition(112, 88)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    sprites.destroy(nena)
    sprites.destroy(cofre7)
    sprites.destroy(cofre22)
    sprites.destroy(mago2)
    sprites.destroy(portal2)
    sprites.destroy(CofreAbierto2)
    tiles.setCurrentTilemap(tilemap`PantallaCarga`)
    pause(2000)
    PisoEnemigos()
})
function DialogoMago () {
    game.showLongText("Buenas viajero, he oido que tienes que conseguirle la corona a la princesa y derrotar al mal, pero antes vas a necesitar algo para poder derrotarlos. Aqui delante tienes 2 cofres, pero solo 1 contiene el poder, sabrás elegir bien...", DialogLayout.Bottom)
    pause(2000)
}
function PisoEnemigos () {
    tiles.setCurrentTilemap(tilemap`nivel`)
    nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
    nena.setPosition(76, 98)
    controller.moveSprite(nena)
    scene.cameraFollowSprite(nena)
    tiles.placeOnTile(nena, tiles.getTileLocation(31, 62))
    cofre3 = sprites.create(assets.image`cofre`, SpriteKind.Player)
    cofre4 = sprites.create(assets.image`cofre`, SpriteKind.Player)
    cofre5 = sprites.create(assets.image`cofre0`, SpriteKind.Player)
    cofre6 = sprites.create(assets.image`cofre0`, SpriteKind.Player)
    puertaOjo = sprites.create(assets.image`miImagen7`, SpriteKind.Player)
    tiles.placeOnTile(cofre3, tiles.getTileLocation(10, 30))
    tiles.placeOnTile(cofre4, tiles.getTileLocation(54, 30))
    tiles.placeOnTile(cofre5, tiles.getTileLocation(90, 60))
    tiles.placeOnTile(cofre6, tiles.getTileLocation(10, 60))
    tiles.placeOnTile(puertaOjo, tiles.getTileLocation(32, 33))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.puerta1, function (sprite, otherSprite) {
    sprites.destroy(princesa2)
    sprites.destroy(puerta22)
    sprites.destroy(nena)
    tiles.setCurrentTilemap(tilemap`PantallaCarga`)
    pause(2000)
    Piso1()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.princesa, function (sprite, otherSprite) {
    DialogoPrincesa()
})
function CofreBueno () {
    sprites.destroy(cofre7)
    CofreAbierto2 = sprites.create(assets.image`CofreAbierto`, SpriteKind.CofreAbierto)
    CofreAbierto2.setPosition(23, 59)
    game.showLongText("¡Has conseguido el poder del fuego!", DialogLayout.Bottom)
    pause(500)
    portal2 = sprites.create(assets.image`miImagen6`, SpriteKind.portal)
    portal2.setPosition(81, 79)
    game.showLongText("Ya estas preparado, cruza el portal y derrota el mal!", DialogLayout.Bottom)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.cofre, function (sprite, otherSprite) {
    CofreBueno()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-up`,
    500,
    false
    )
})
function Pantalla2 () {
    tiles.setCurrentTilemap(tilemap`nivel6`)
    nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
    nena.setPosition(14, 60)
    controller.moveSprite(nena)
    sprites.destroy(puerta)
    sprites.destroy(caballero2)
    princesa2 = sprites.create(assets.image`princesa`, SpriteKind.princesa)
    princesa2.setPosition(139, 60)
    puerta22 = sprites.create(assets.image`escaleras`, SpriteKind.puerta1)
    puerta22.setPosition(154, 8)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.mago, function (sprite, otherSprite) {
    DialogoMago()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.puertaCastillo, function (sprite, otherSprite) {
    sprites.destroy(puerta)
    sprites.destroy(caballero2)
    sprites.destroy(nena)
    tiles.setCurrentTilemap(tilemap`PantallaCarga`)
    pause(2000)
    Pantalla2()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cofre2, function (sprite, otherSprite) {
    CofreTrampa()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.caballero, function (sprite, otherSprite) {
    DialogoCaballero()
})
let puertaOjo: Sprite = null
let cofre6: Sprite = null
let cofre5: Sprite = null
let cofre4: Sprite = null
let cofre3: Sprite = null
let caballero2: Sprite = null
let puerta: Sprite = null
let portal2: Sprite = null
let CofreAbierto2: Sprite = null
let agujero2: Sprite = null
let mago2: Sprite = null
let cofre22: Sprite = null
let cofre7: Sprite = null
let puerta22: Sprite = null
let princesa2: Sprite = null
let nena: Sprite = null
PantallaPrincipal()
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
nena.setPosition(145, 88)
controller.moveSprite(nena)
info.setLife(3)
