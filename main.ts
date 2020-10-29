let promedio = 0
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    promedio = 0
    for (let index = 0; index <= 9; index++) {
        promedio = promedio + input.acceleration(Dimension.Strength)
        basic.pause(100)
    }
    serial.writeLine("La aceleración x es ")
    serial.writeLine("" + (promedio / 10 - 1024))
})
