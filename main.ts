input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi Guhan")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
