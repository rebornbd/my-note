import os, time
from threading import Thread, current_thread
from multiprocessing import Process, current_process


SLEEP = 2
RANGE = 3

def io_intensive_task(n):
  processId = os.getgid()
  threadName = current_thread().name
  processName = current_process().name
  # io task
  time.sleep(n)


def normalCall():
  for _ in range(0, RANGE):
    io_intensive_task(SLEEP)


def multiThreadingCall():
  myThreadList = []
  for _ in range(0, RANGE):
    thread = Thread(target=io_intensive_task, args=(SLEEP, ))
    myThreadList.append(thread)

  for thread in myThreadList:
    thread.start()
  
  for thread in myThreadList:
    thread.join()


def multiProcessingCall():
  myProcessList = []
  for _ in range(0, RANGE):
    process = Process(target=io_intensive_task, args=(SLEEP, ))
    myProcessList.append(process)

  for process in myProcessList:
    process.start()
  
  for process in myProcessList:
    process.join()


def main():
  start = time.time()

  # normalCall()
  multiThreadingCall()
  # multiProcessingCall()

  end = time.time()
  res = end - start
  print(res)


# main call
main()
