
import os
import random
import threading
from Adafruit_Thermal import *

printer = Adafruit_Thermal("/dev/serial0", 19200, timeout=5)
dayNumber = 0
folderPath = '/QRcodes'


def changeDay():
    threading.Timer(20, changeDay).start() #change to 86400 for actual thing
    global dayNumber
    dayNumber += 1
    dayNumberToString = str(dayNumber)
    dayString = 'Day' + dayNumberToString
    global folderPath 
    global folderPathWithDay
    folderPathWithDay = folderPath + '/' + dayString
    print(folderPathWithDay)
    getRandomQRCode()
    

def getRandomQRCode():
    print("called")
    os.chdir(folderPathWithDay)
    days = os.listdir()
    selectedQRCode = random.choice(days)
    print(random.choice(days))
    printer.printImage(selectedQRCode, True)
    #printer.printBitmap(adaqrcode.width, adaqrcode.height, adaqrcode.data)

changeDay()
