qdee.qdee_Init()
basic.forever(function () {
    if (qdee.qdee_ultrasonic(qdee.ultrasonicPort.port2) > 20) {
        qdee.qdee_setMotorSpeed(100, 100)
    } else {
        qdee.qdee_setMotorSpeed(0, 0)
    }
})
