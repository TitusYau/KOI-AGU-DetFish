koi.koi_classified(function (classId) {
    fishdetected += 1
    basic.showString(classId)
    pins.digitalWritePin(DigitalPin.P7, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P7, 0)
})
koi.koi_init(SerialPin.P14, SerialPin.P15)
basic.showIcon(IconNames.SmallHeart)
koi.koi_cls_load("true.bin")
let flag = true
let fishdetected = 0
basic.forever(function () {
    if (flag) {
        koi.koi_run()
        basic.pause(500)
    }
})
