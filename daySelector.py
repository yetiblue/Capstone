
import os
import random
import threading


dayNumber = 0
folderPath = '/QRcodes'


def changeDay():
    threading.Timer(20, changeDay).start()
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
    print(random.choice(days))
    

