@namespace
class SpriteKind:
    objeto = SpriteKind.create()
    npc = SpriteKind.create()
    escalera = SpriteKind.create()
def Piso1():
    pass
def DialogoPrincesa():
    game.show_long_text("klk manin, necesito tu ayuda urgentemente!! Necesito que encuentres mi corona, me la ha robado un mamahuevo y sin ella nadie se cree que soy la princesa. Si consigues devolvermela te dare un chupachups de limon, ahora puedes pasar por la puerta y avanzar al siguiente piso.",
        DialogLayout.BOTTOM)
    pause(1000)

def on_on_overlap():
    Piso1()
sprites.on_overlap(SpriteKind.player, SpriteKind.npc, on_on_overlap)

def PantallaPrincipal():
    global puerta
    scene.set_background_image(assets.image("""
        castillo
        """))
    puerta = sprites.create(assets.image("""
        puerta
        """), SpriteKind.objeto)
    puerta.set_position(46, 65)

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

def on_on_overlap2():
    DialogoPrincesa()
sprites.on_overlap(SpriteKind.player, SpriteKind.npc, on_on_overlap2)

def Pantalla2():
    global princesa, puerta2
    tiles.set_current_tilemap(tilemap("""
        nivel6
        """))
    sprites.destroy(puerta)
    princesa = sprites.create(assets.image("""
        princesa
        """), SpriteKind.npc)
    princesa.set_position(139, 60)
    puerta2 = sprites.create(assets.image("""
        escaleras
        """), SpriteKind.escalera)
    puerta2.set_position(154, 8)

def on_on_overlap3():
    Pantalla2()
sprites.on_overlap(SpriteKind.player, SpriteKind.objeto, on_on_overlap3)

princesa: Sprite = None
puerta: Sprite = None
puerta2: Sprite = None
nena: Sprite = None
PantallaPrincipal()
nena = sprites.create(assets.image("""
    nena-front
    """), SpriteKind.player)
controller.move_sprite(nena)