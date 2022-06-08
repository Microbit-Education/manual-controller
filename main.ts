//  button A --> incr altitude
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (Signal2 == 1) {
        basic.showLeds(`
            # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
                        . # # # .
        `)
        radio.sendString("1")
        Signal2 = 0
    }
    
})
//  button A+B --> take off / land
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (Signal2 == 1) {
        if (flying == 0) {
            //  take off
            basic.showLeds(`
                # # # # #
                                . . # . .
                                . . # . .
                                . . # . .
                                . . # . .
            `)
            radio.sendString("t")
            flying = 1
            Signal2 = 0
        } else {
            //  flying = 1, land
            basic.showLeds(`
                # . . . .
                                # . . . .
                                # . . . .
                                # . . . .
                                # # # # #
            `)
            radio.sendString("l")
            Signal2 = 0
        }
        
    }
    
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    if (receivedString == "S") {
        Signal2 = 1
        basic.showIcon(IconNames.Yes)
    }
    
    if (receivedString == "F") {
        basic.showIcon(IconNames.No)
    }
    
})
//  button B --> decr altitude
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (Signal2 == 1) {
        basic.showLeds(`
            # # # . .
                        # . . # .
                        # . . # .
                        # . . # .
                        # # # . .
        `)
        radio.sendString("2")
        Signal2 = 0
    }
    
})
let flying = 0
let Signal2 = 0
radio.setGroup(33)
joystickbit.initJoystickBit()
basic.showIcon(IconNames.Cow)
basic.forever(function on_forever() {
    let pitch: number;
    let roll: number;
    
    if (Signal2 == 1) {
        if (flying == 1) {
            pitch = input.rotation(Rotation.Pitch)
            roll = input.rotation(Rotation.Roll)
            //  if microbit is tilted any direction >= 20 deg
            if (Math.abs(pitch) >= 20 || Math.abs(roll) >= 20) {
                //  choose greatest tilt
                if (Math.abs(pitch) >= Math.abs(roll)) {
                    if (pitch <= -20) {
                        //  forward, tilt down
                        basic.showLeds(`
                            . . # . .
                                                        . # # # .
                                                        # . # . #
                                                        . . # . .
                                                        . . # . .
                        `)
                        radio.sendString("3")
                        Signal2 = 0
                    } else if (pitch >= 20) {
                        //  backward, tilt up
                        basic.showLeds(`
                            . . # . .
                                                        . . # . .
                                                        # . # . #
                                                        . # # # .
                                                        . . # . .
                        `)
                        radio.sendString("4")
                        Signal2 = 0
                    }
                    
                } else if (roll <= -20) {
                    //  left, tilt left
                    basic.showLeds(`
                        . . # . .
                                                . # . . .
                                                # # # # #
                                                . # . . .
                                                . . # . .
                    `)
                    radio.sendString("5")
                    Signal2 = 0
                } else if (roll >= 20) {
                    //  right, tilt right
                    basic.showLeds(`
                        . . # . .
                                                . . . # .
                                                # # # # #
                                                . . . # .
                                                . . # . .
                    `)
                    radio.sendString("6")
                    Signal2 = 0
                }
                
            }
            
        }
        
    }
    
})
