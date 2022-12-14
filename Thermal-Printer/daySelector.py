
import os
import random
import threading
from datetime import datetime
from Adafruit_Thermal import *
from PIL import Image

printer = Adafruit_Thermal("/dev/serial0", 19200, timeout=5)
dayNumber = 0
folderPath = '/home/pi/Capstone/Thermal-Printer/QRcodes'



def changeDay():
    #every 24 hours dayNumber should increment which will correspond to what day's QR codes folder
    #is used 
    threading.Timer(20, changeDay).start() #change to 86400 for actual thing
    global dayNumber
    startDate = datetime(2023, 3, 1)
    currentDate = datetime.now()
    if(currentDate < startDate): # before the start date, use folder 0 for presentations
        dayNumber = 0
        print(dayNumber, "less than start date")
    else:
        dayNumber += 1
        print(dayNumber)

    dayNumberToString = str(dayNumber)
    dayString = 'Day' + dayNumberToString
    global folderPath 
    global folderPathWithDay
    folderPathWithDay = folderPath + '/' + dayString
    # print(folderPathWithDay)
    
def getRandomQRCode(): 
    #called in buttonPress everytime the button is pressed. Randomly chooses a QR code
    #in the selected day's folder
    os.chdir(folderPathWithDay)
    days = os.listdir()
    selectedQRCode = random.choice(days)
    # print(random.choice(days))
    newSize = (400,400)
    sendToPrinterImage = Image.open(folderPathWithDay + '/' + selectedQRCode) #selectedQRCode should be a path, which Image will open
    printer.printImage(sendToPrinterImage.resize(newSize), False)
    printer.feed(3)
    #printer.printBitmap(adaqrcode.width, adaqrcode.height, adaqrcode.data)
