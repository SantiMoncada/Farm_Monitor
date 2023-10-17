#!/usr/bin/python
import time
from Classes.aspersor import aspersor

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

asp = aspersor(7)
initConfig = createArray()
array = initConfig
while(True):
    localtime = time.localtime(time.time())
    if((localtime.tm_sec % 13) == 0):
        aux = createArray()
        if(aux[0] != initConfig[0]):
            initConfig[0] = aux[0]
            array[0] = initConfig[0]
        if(aux[1] != initConfig[1]):
            initConfig[1] = aux[1]
            array[1] = initConfig[1]
        
    if(array[1] != 0):  #if not Stop
        if(array[0] == localtime.tm_hour and localtime.tm_min == 0 and localtime.tm_sec == 0):
            asp.run(5)
            array[0] = (array[0] + array[1]) % 24
            
        if(array[0] == 666):
            if(localtime.tm_sec == 0):
                asp.run(3)
            if(localtime.tm_sec == 30):
                asp.run(3)
