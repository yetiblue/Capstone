import RPi.GPIO as GPIO
import daySelector

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(13, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
buttonCount = 0 
if(buttonCount == 0):
    daySelector.changeDay()

while True:
    if GPIO.input(13) == GPIO.HIGH:
        print("Button pressed")
        daySelector.getRandomQRCode()
        buttonCount += 1
