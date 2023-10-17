#!/usr/bin/python
import cgitb
import cgi
import time

cgitb.enable()
form = cgi.FieldStorage()
localtime = time.localtime(time.time())
written = False
while(not written):
    if((localtime.tm_sec % 13) != 0 and (localtime.tm_sec % 17) != 0):
        file = open("config.txt", "w")
        file.write(form["water_start_time"].value + ",")
        file.write(form["water_period"].value + ",")
        file.write(form["light_start_time"].value + ",")
        file.write(form["light_period"].value)
        file.close()
        written = True

print("Content-type:text/html\n")
print("")
