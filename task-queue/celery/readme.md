### celery

#### start worker
```
celery -A projectName worker -l INFO
```

#### pool | concurrency | autoscale
```
pool: decides who will actually perform the task
      child process(prefork), thread(threads), worker itself(solo) or else
--pool=prefork  | --pool=solo
--pool=eventlet | --pool=gevent
--pool=threads (not recommended)


concurrency: concurrency will decide the size of the pool.
--concurrency=4


autoscale: to dynamically resize the pool based on load.
--autoscale=4,2 | --autoscale=max,min
```

##### pool prefork | multi-processing
```
# example-01
celery -A projectName worker --pool=prefork -l INFO
# process explorer:
celery
  |
  |--- child-process 1
  |--- child-process 2
  |
  |...................
  |--- child-process n

Here, n = number of processors your system have


# example-02 | defined how many processors working
celery -A projectName worker --pool=prefork --concurrency=4 -l INFO
# process explorer:
celery
  |
  |--- child-process 1
  |--- child-process 2
  |--- child-process 3
  |--- child-process 4

NB: It actually works properly when your system have 4 or above number of processor.


# example-03 | distributed processors by loads
celery -A projectName worker --pool=prefork --concurrency=4 --autoscale=4,2 -l INFO
# process explorer:
## normal load
  celery
    |
    |--- child-process 1
    |--- child-process 2

## high load
  celery
    |
    |--- child-process 1
    |--- child-process 2
    |--- child-process 3
    |--- child-process 4
```

##### pool solo | work worker itself
```
celery -A projectName worker --pool=solo -l INFO

# process explorer:
celery
```

##### pool eventlet | single processor with single thread & manage eventlet internally multi-threading
```
celery -A projectName worker --pool=eventlet -l INFO

# process explorer:
celery

NB: eventlet, we don't need mension concurrency & autoscale.
```
