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
    sprites.destroy(princesa)
    sprites.destroy(puerta2)
    cofre = sprites.create(assets.image`cofre`, SpriteKind.cofre)
    cofre.setPosition(23, 59)
    cofre2 = sprites.create(assets.image`cofre`, SpriteKind.cofre2)
    cofre2.setPosition(136, 59)
    mago = sprites.create(assets.image`mago`, SpriteKind.mago)
    mago.setPosition(81, 42)
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
    sprites.destroy(cofre2)
    agujero = sprites.create(assets.image`agujero`, SpriteKind.agujero)
    agujero.setPosition(136, 59)
    pause(200)
    sprites.destroy(CofreAbierto)
    sprites.destroy(mago)
    sprites.destroy(cofre)
    sprites.destroy(agujero)
    sprites.destroy(nena)
    tiles.setCurrentTilemap(tilemap`PantallaCarga`)
    pause(2000)
    Pantalla2()
    game.showLongText("Parece que has escogido el cofre equivocado y te has caido por el agujero al piso anterior, sube e intentalo de nuevo!", DialogLayout.Bottom)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.cofre2, function () {
    CofreTrampa()
})
function DialogoMago () {
    game.showLongText("Buenas viajero, he oido que tienes que conseguirle la corona a la princesa y derrotar al mal, pero antes vas a necesitar algo para poder derrotarlos. Aqui delante tienes 2 cofres, pero solo 1 contiene el poder, sabrás elegir bien...", DialogLayout.Bottom)
    pause(2000)
}
function CofreBueno () {
    sprites.destroy(cofre)
    CofreAbierto = sprites.create(assets.image`CofreAbierto`, SpriteKind.CofreAbierto)
    CofreAbierto.setPosition(23, 59)
    game.showLongText("¡Has conseguido el poder del fuego!", DialogLayout.Bottom)
    pause(500)
    portal = sprites.create(assets.image`miImagen6`, SpriteKind.portal)
    portal.setPosition(81, 79)
    game.showLongText("Ya estas preparado, cruza el portal y derrota el mal!", DialogLayout.Bottom)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-up`,
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.puertaCastillo, function () {
    sprites.destroy(puerta)
    sprites.destroy(caballero)
    sprites.destroy(nena)
    tiles.setCurrentTilemap(tilemap`PantallaCarga`)
    pause(2000)
    Pantalla2()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cofre, function () {
    CofreBueno()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mago, function () {
    DialogoMago()
})
function Pantalla2 () {
    tiles.setCurrentTilemap(tilemap`nivel6`)
    nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
    nena.setPosition(14, 60)
    controller.moveSprite(nena)
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
    sprites.destroy(princesa)
    sprites.destroy(puerta2)
    sprites.destroy(nena)
    tiles.setCurrentTilemap(tilemap`PantallaCarga`)
    pause(2000)
    Piso1()
})
let portal: Sprite = null
let caballero: Sprite = null
let puerta: Sprite = null
let CofreAbierto: Sprite = null
let agujero: Sprite = null
let mago: Sprite = null
let cofre2: Sprite = null
let cofre: Sprite = null
let puerta2: Sprite = null
let princesa: Sprite = null
let nena: Sprite = null
PantallaPrincipal()
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
nena.setPosition(145, 88)
controller.moveSprite(nena)
info.setLife(3)
