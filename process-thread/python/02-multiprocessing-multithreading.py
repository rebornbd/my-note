import os, time
from threading import Thread, current_thread
from multiprocessing import Process, current_process


COUNT = 1000000
SLEEP = 2
RANGE = 3

def cpu_intensive_task(count):
  processId = os.getgid()
  threadName = current_thread().name
  processName = current_process().name

  while count >= 0:
    count -= 1

def io_intensive_task(seconds):
  processId = os.getgid()
  threadName = current_thread().name
  processName = current_process().name
  # io task
  time.sleep(seconds)


def multiThreading():
  myThreadList = []
  for _ in range(0, RANGE):
    thread = Thread(target=io_intensive_task, args=(SLEEP, ))
    myThreadList.append(thread)

  for thread in myThreadList:
    thread.start()
  
  for thread in myThreadList:
    thread.join()


def multiProcessing():
  myProcessList = []
  for _ in range(0, RANGE):
    process = Process(target=cpu_intensive_task, args=(COUNT, ))
    myProcessList.append(process)

  for process in myProcessList:
    process.start()
  
  for process in myProcessList:
    process.join()


def normalCall():
  start = time.time()

  for _ in range(0, RANGE):
    cpu_intensive_task(COUNT)
    io_intensive_task(SLEEP)

  end = time.time()
  res = end - start
  print("normal run time:\n" + str(res))


def multiProcessingWithMultiThreadingCall():
  start = time.time()

  multiThreading()
  multiProcessing()

  end = time.time()
  res = end - start
  print("\nmultiprocess-multithread run time:\n" + str(res))


def main():
  normalCall()
  multiProcessingWithMultiThreadingCall()

# main call
main()
