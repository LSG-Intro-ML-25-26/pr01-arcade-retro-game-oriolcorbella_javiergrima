@namespace
class SpriteKind:
    objeto = SpriteKind.create()
    npc = SpriteKind.create()
    escalera = SpriteKind.create()
    corazon = SpriteKind.create()
    puerta2 = SpriteKind.create()
    puertaCastillo = SpriteKind.create()
    puerta1 = SpriteKind.create()
    cofre = SpriteKind.create()
    princesa = SpriteKind.create()
    caballero = SpriteKind.create()
def Piso1():
    global cofre2
    tiles.set_current_tilemap(tilemap("""
        piso2
        """))
    nena.set_position(146, 52)
    sprites.destroy(princesa2)
    sprites.destroy(puerta22)
    cofre2 = sprites.create(assets.image("""
        cofre
        """), SpriteKind.cofre)
    cofre2.set_position(23, 59)
def DialogoCaballero():
    game.show_long_text("Socorro!!! Auxilio!!! Gracias a dios que has llegado, la princesa esta en apuros, entra al castillo y habla con ella para tener mas detalles!",
        DialogLayout.BOTTOM)
    pause(1000)
def DialogoPrincesa():
    game.show_long_text("klk manin, necesito tu ayuda urgentemente!! Necesito que encuentres mi corona, me la ha robado un mamahuevo y sin ella nadie se cree que soy la princesa. Si consigues devolvermela te dare un chupachups de limon, ahora puedes pasar por la puerta y avanzar al siguiente piso.",
        DialogLayout.BOTTOM)
    pause(1000)
    if nena.overlaps_with(puerta22):
        Piso1()
def PantallaPrincipal():
    global puerta, caballero2
    tiles.set_current_tilemap(tilemap("""
        castillo1
        """))
    puerta = sprites.create(assets.image("""
            puerta
            """),
        SpriteKind.puertaCastillo)
    caballero2 = sprites.create(assets.image("""
            caballero
            """),
        SpriteKind.caballero)
    caballero2.set_position(112, 88)
    puerta.set_position(66, 80)

def on_down_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-down
            """),
        500,
        False)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_right_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-right
            """),
        500,
        False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-left
            """),
        500,
        False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_up_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-up
            """),
        500,
        False)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def Pantalla2():
    global princesa2, puerta22
    tiles.set_current_tilemap(tilemap("""
        nivel6
        """))
    nena.set_position(14, 60)
    sprites.destroy(puerta)
    sprites.destroy(caballero2)
    princesa2 = sprites.create(assets.image("""
        princesa
        """), SpriteKind.princesa)
    princesa2.set_position(139, 60)
    puerta22 = sprites.create(assets.image("""
        escaleras
        """), SpriteKind.puerta1)
    puerta22.set_position(154, 8)
    if nena.overlaps_with(princesa2):
        DialogoPrincesa()
caballero2: Sprite = None
puerta: Sprite = None
cofre2: Sprite = None
puerta22: Sprite = None
princesa2: Sprite = None
nena: Sprite = None
PantallaPrincipal()
nena = sprites.create(assets.image("""
    nena-front
    """), SpriteKind.player)
nena.set_position(145, 88)
controller.move_sprite(nena)
info.set_life(3)