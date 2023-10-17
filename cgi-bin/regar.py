#!/usr/bin/python
import cgitb
import cgi
from Classes.aspersor import aspersor

cgitb.enable()
a = aspersor(7)
form = cgi.FieldStorage()
a.run(form["turns"].value)
print("Content-type:text/html\n")
print("")




