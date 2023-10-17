#!/usr/bin/python
import time
import cgitb
import cgi
from Classes.led import led

cgitb.enable()
a = led(12)
form = cgi.FieldStorage()
a.run(form["time"].value)
print("Content-type:text/html\n")
print("")