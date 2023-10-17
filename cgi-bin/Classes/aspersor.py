import time
import RPi.GPIO as GPIO
class aspersor:
    port = 0
    def __init__(self,port):
        self.port = port

    def degreeAdap(self,n):
        if (n >= 0 and n<= 180):
            return (8.9/180. * (n) +2.1)
        else:
            return (6.5)

    def run(self,turns):
        GPIO.setmode(GPIO.BOARD)
        GPIO.setup(self.port,GPIO.OUT)
        pwm = GPIO.PWM(self.port, 50)
        pwm.start(self.degreeAdap(90))
        j = 0
        while(j < int(turns)):
            for i in range (0, 7):
                pwm.ChangeDutyCycle(self.degreeAdap(i * 30))
                time.sleep(0.5)
            pwm.ChangeDutyCycle(self.degreeAdap(0))
            j = j + 1
        time.sleep(0.5)
        pwm.stop()
        GPIO.cleanup()


