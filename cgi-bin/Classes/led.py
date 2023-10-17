import time
import RPi.GPIO as GPIO
class led:
    port = 0
    def __init__(self,port):
        self.port = port

    def run(self,s):
        GPIO.setmode(GPIO.BOARD)
        GPIO.setup(self.port,GPIO.OUT)
        GPIO.output(self.port,True)
        time.sleep(int(s))
        GPIO.output(self.port,False)
        GPIO.cleanup()
