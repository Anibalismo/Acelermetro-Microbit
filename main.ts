let promedio = 0
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    promedio = 0
    for (let index = 0; index <= 9; index++) {
        promedio = promedio + input.acceleration(Dimension.Strength)
    }
    promedio = promedio / 10 + 30
    serial.writeLine("La aceleración x es ")
    serial.writeLine("" + (promedio))
})
