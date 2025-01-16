let stop = 0
let rechts = 0
let links = 0
let achter = 0
let voor = 0
let ir_waarde = 0
IR.IR_init()
basic.forever(function () {
    ir_waarde = IR.IR_read()
    voor = 10
    achter = 39
    links = 109
    rechts = 221
    stop = 47
})
basic.forever(function () {
    if (ir_waarde == voor) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
