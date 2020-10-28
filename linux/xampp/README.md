### XAMPP

#### Install XAMPP on Ubuntu
```python
sudo apt install net-tools

sudo wget https://downloadsapachefriends.global.ssl.fastly.net/7.3.0/xampp-linux-x64-7.3.0-0-installer.run
sudo chmod +x xampp-linux-x64-7.3.0-0-installer.run
sudo ./xampp-linux-x64-7.3.0-0-installer.run
```

#### XAMPP Start, Restart, Stop & Verify
```python
sudo /opt/lampp/lampp start
sudo /opt/lampp/lampp restart
sudo /opt/lampp/lampp stop

# verify
http://localhost/
```

#### Uninstall XAMPP
```python
# go to belo directory
cd /opt/lampp

# uninstallation process running following command
./uninstall

# remove directory
sudo rm -r /opt/lampp
```

