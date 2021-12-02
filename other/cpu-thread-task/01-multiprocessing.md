### multi-processing

#### intro
```
If your system have more than one core & the tasks are distribuited & tasks are executed parallelly or simultaneously then the system is called multi-processing.
```

#### when we used multi-processing?
```
# story
You are thinking to design a web-crawler(web-bot or [a bot that collect info to continue crawl or visiting active web pages]). And you sitted down pen, papper & a cup of tea. Your consideration points are given below:

1) check web page is active or not
2) if active then crawl the page
3) process the page
4) save desired output

  discurssion:
    point-1 & point-2 have some wait to get the response. So, here the whole system is waiting.

So If we use 10 or 1000 processor to process the task, we can't have any benefit for waiting state.

## LAW-01: try to avoid I/O bound task by using multi-processing.


### multi-processing are using for cpu bound task.
when we need heavy calculation then we can use multi-processing concept.
```


#### overview
```
                                   (task-3)
                      -----------> processor-1
                     /
    [tasks]         /              (task-2)
 (multi processor)  -------------> processor-2
                    \
                     \             (task-1)
                      -----------> processor-3
```

#### multi-processing with multi-threading
```
                                   (task-3)                       (sub-task-3 on task-2)
                      -----------> processor-1    --------------> thread-1
                     /                           /
    [tasks]         /              (task-2)     /                 (sub-task-2 on task-2)
 (multi processor)  -------------> processor-2  ----------------> thread-2
                    \                           \
                     \             (task-1)      \                (sub-task-1 on task-2)
                      -----------> processor-3    --------------> thread-3
```
