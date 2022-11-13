import RPi.GPIO as GPIO
import daySelector

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(19, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
buttonCount = 0 
if(buttonCount == 0):
    daySelector.changeDay()
    print("first press")

while True:
    if GPIO.input(19) == GPIO.HIGH:
        print("Button pressed")
        daySelector.getRandomQRCode()
        buttonCount += 1
        
