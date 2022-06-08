# Code for Drone:bit Controller in Manual Mode
To use the Drone:bit in manual mode, you will need a second microbit to act as the drone controller. 
To use manual mode, load the code from [https://github.com/Microbit-Education/manual-drone](https://github.com/Microbit-Education/manual-drone) to the drone and this code to the second microbit being used as a controller.

## Drone Controls
* Button A+B &rarr; takeoff / land (displays “T” for takeoff and “L” for land on LEDs) 
* Button A &rarr; increase altitude by 45cm (displays “U” on LEDs)
* Button B &rarr; lower altitude by 45cm (displays “D” on LEDs)
* Tilt down (pitch) &rarr; move forward by 45cm (displays "&uarr;" on LEDs) 
* Tilt up (pitch) &rarr; move backward by 45cm (displays "&darr;" on LEDs) 
* Tilt left (roll) &rarr; move left by 45cm (displays "&larr;" on LEDs)
* Tilt right (roll) &rarr; move right by 45cm (displays "&rarr;" on LEDs)

*Note: If microbit is tilted in more than one direction, it will move in the direction of greatest tilt.*

## Bugs and Improvements 
* If you send a command and then put it back to neutral, it keeps sending the last command in a loop. Fix to hover once controller is in neutral position. 
* Test different distances (right now at 45 cm = 1.5 ft)
* Find way to increase speed

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/Microbit-Education/manual-controller** and import

## Edit this project ![Build status badge](https://github.com/Microbit-Education/manual-controller/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/Microbit-Education/manual-controller** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/Microbit-Education/manual-controller/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
