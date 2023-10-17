#!/usr/bin/python
import time
from Classes.led import led

def createArray():
    file = open("config.txt", "r")
    values = ""
    array = []
    config = []
    config = file.read()
    for i in range(len(config)):
        if(config[i]!=","):
            values = values + config[i]
        else:
            array.append(int(values))
            values = ""
    array.append(int(values))
    file.close()
    return array

led = led(12)
initConfig = createArray()
array = initConfig
while(True):
    localtime = time.localtime(time.time())
    if((localtime.tm_sec % 17) == 0):
        aux = createArray()
        if(aux[2] != initConfig[2]):
            initConfig[2] = aux[2]
            array[2] = initConfig[2]
        if(aux[3] != initConfig[3]):
            initConfig[3] = aux[3]
            array[3] = initConfig[3]
            
    if(array[3] != 0):  #if not Stop
        if(array[2] == localtime.tm_hour and localtime.tm_min == 0 and localtime.tm_sec == 0):
            led.run(10)
            array[2] = (array[2] + array[3]) % 24
            
        if(array[2] == 666):
            if(localtime.tm_sec == 0):
                led.run(15)
            if(localtime.tm_sec == 30):
                led.run(15)
