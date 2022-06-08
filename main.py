# button A --> incr altitude
def on_button_pressed_a():
    global Signal2
    if Signal2 == 1:
        basic.show_leds("""
            # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
                        . # # # .
        """)
        radio.send_string("1")
        Signal2 = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

# button A+B --> take off / land
def on_button_pressed_ab():
    global flying, Signal2
    if Signal2 == 1:
        if flying == 0:
            # take off
            basic.show_leds("""
                # # # # #
                                . . # . .
                                . . # . .
                                . . # . .
                                . . # . .
            """)
            radio.send_string("t")
            flying = 1
            Signal2 = 0
        else:
            # flying = 1, land
            basic.show_leds("""
                # . . . .
                                # . . . .
                                # . . . .
                                # . . . .
                                # # # # #
            """)
            radio.send_string("l")
            Signal2 = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    global Signal2
    if receivedString == "S":
        Signal2 = 1
        basic.show_icon(IconNames.YES)
    if receivedString == "F":
        basic.show_icon(IconNames.NO)
radio.on_received_string(on_received_string)

# button B --> decr altitude
def on_button_pressed_b():
    global Signal2
    if Signal2 == 1:
        basic.show_leds("""
            # # # . .
                        # . . # .
                        # . . # .
                        # . . # .
                        # # # . .
        """)
        radio.send_string("2")
        Signal2 = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

flying = 0
Signal2 = 0
radio.set_group(33)
joystickbit.init_joystick_bit()
basic.show_icon(IconNames.COW)

def on_forever():
    global Signal2
    if Signal2 == 1:
        if flying == 1:
            pitch = input.rotation(Rotation.PITCH)
            roll = input.rotation(Rotation.ROLL)
            # if microbit is tilted any direction >= 20 deg
            if abs(pitch) >= 20 or abs(roll) >= 20:
                # choose greatest tilt
                if abs(pitch) >= abs(roll):
                    if pitch <= -20:
                        # forward, tilt down
                        basic.show_leds("""
                            . . # . .
                                                        . # # # .
                                                        # . # . #
                                                        . . # . .
                                                        . . # . .
                        """)
                        radio.send_string("3")
                        Signal2 = 0
                    elif pitch >= 20:
                        # backward, tilt up
                        basic.show_leds("""
                            . . # . .
                                                        . . # . .
                                                        # . # . #
                                                        . # # # .
                                                        . . # . .
                        """)
                        radio.send_string("4")
                        Signal2 = 0
                elif roll <= -20:
                    # left, tilt left
                    basic.show_leds("""
                        . . # . .
                                                . # . . .
                                                # # # # #
                                                . # . . .
                                                . . # . .
                    """)
                    radio.send_string("5")
                    Signal2 = 0
                elif roll >= 20:
                    # right, tilt right
                    basic.show_leds("""
                        . . # . .
                                                . . . # .
                                                # # # # #
                                                . . . # .
                                                . . # . .
                    """)
                    radio.send_string("6")
                    Signal2 = 0
basic.forever(on_forever)
