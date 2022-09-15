koi.koi_classified(function (classId) {
    currentid = classId
    if (currentid != previd) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.pause(1000)
    }
    previd = currentid
})
let previd = ""
let currentid = ""
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
