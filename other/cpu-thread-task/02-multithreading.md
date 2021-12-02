### multi-threading

#### intro
```
A single processor can executed task by dividing
the task of many sub-tasks & sub-tasks are perform
by threads then the system is called multi-threading.
```

#### when we used multi-threading?
```
# story
You are thinking to design a web-crawler(web-bot or [a bot that collect info to continue crawl or visiting active web pages]). And you sitted down pen, papper & a cup of tea. Your consideration points are given below:

1) check web page is active or not
2) if active then crawl the page
3) process the page
4) save desired output

  discurssion:
    point-1 & point-2 have some wait to get the response. So, here the whole system is waiting.

In the waiting state the all sub-tasks are perform by the threads. BOOM!

NB: For I/O bound task, we can use multi-threading.
** we can also use multi-processing & multi-threading together.
```

#### overview
```
                                   (sub-task-3)
                   --------------> thread-1
                  /
    [task]       /                 (sub-task-2)
(1 processor)    ----------------> thread-2
                 \
                  \                (sub-task-1)
                   --------------> thread-3
```
