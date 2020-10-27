### ubuntu can't create new folder in OTHER LOCATIONS
```bash
sudo mount -o remount,rw '/media/{username}/{Drives Name}'

# example
sudo mount -o remount,rw '/media/john/Edu & Soft'

# final
umount -l /dev/sda3
```

### Mounting an unclean NTFS file system
##### link: https://joerismissaert.dev/mounting-an-unclean-ntfs-file-system/
```bash
# I’m dual booting between RHEL 8 and Windows 10 and the NTFS drive I use to share data between my two operating systems was suddenly mounted Read Only on Linux.

[root@rhel8 mnt]# umount -l /dev/sda1
[root@rhel8 mnt]# mount -t ntfs-3g -o rw /dev/sda1 /mnt/data
The disk contains an unclean file system (0, 0).
Metadata kept in Windows cache, refused to mount.
Falling back to read-only mount because the NTFS partition is in an
unsafe state. Please resume and shutdown Windows fully (no hibernation
or fast restarting.)

# To fix the issue, I need the ntfsfix application:
[root@rhel8 ~]# dnf whatprovides ntfsfix
Updating Subscription Management repositories.
ntfsprogs-2:2017.3.23-11.el8.x86_64 : NTFS filesystem libraries and utilities
Repo        : epel
Matched from:
Filename    : /usr/bin/ntfsfix
[root@rhel8 ~]# dnf install -y ntfsprogs

# Then I ran ntfsfix against /dev/sda1:
[root@rhel8 ~]# ntfsfix /dev/sda1
Mounting volume... The disk contains an unclean file system (0, 0).
Metadata kept in Windows cache, refused to mount.
FAILED
Attempting to correct errors... 
Processing $MFT and $MFTMirr...
Reading $MFT... OK
Reading $MFTMirr... OK
Comparing $MFTMirr to $MFT... OK
Processing of $MFT and $MFTMirr completed successfully.
Setting required flags on partition... OK
Going to empty the journal ($LogFile)... OK
Checking the alternate boot sector... OK
NTFS volume version is 3.1.
NTFS partition /dev/sda1 was processed successfully.
```
