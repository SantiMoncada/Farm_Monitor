# StartUp FarmMonitor

# Set up

## Apache with cgi

the frist thing to do is to host the webpage on the raspberry py, this will be done using apache to install apache use the comand.

```
sudo apt-get install apache2 -y
```

then the python cgi has to be enabled for the page to be able to call python scripts on the local hosting device.

```
sudo a2enmod cgi
```

the apache server has to be restarted for this to take effect. the default cgi folder is located on usr/lib/cgi-bin. when http://www.localhost.com/cgi-bin/test is called the file cgi-bin/test would be executed.

for a file to be executed it has to have the permission to do it this is done by using.

```
sudo chmod usr/lib/cgi-bin/test
```

permission for the use of gpio ports from the page

```
sudo usermod -a -G gpio www-data
```

the python file that would be executed has to have this things on it.

```
#!/usr/bin/env python
#tells the app to compile the file with python
import cgitb
cgitb.enable()
#enables the cgi functionality
```
