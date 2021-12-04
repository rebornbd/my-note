import os, time
from threading import Thread, current_thread
from multiprocessing import Process, current_process


COUNT = 1000000
SLEEP = 2

def cpu_intensive_task(n):
  processId = os.getgid()
  threadName = current_thread().name
  processName = current_process().name

  while n >= 0:
    n -= 1


def normalCall():
  cpu_intensive_task(COUNT)
  cpu_intensive_task(COUNT)


def multiThreadingCall():
  thread1 = Thread(target=cpu_intensive_task, args=(COUNT, ))
  thread2 = Thread(target=cpu_intensive_task, args=(COUNT, ))
  thread1.start()
  thread2.start()
  thread1.join()
  thread2.join()


def multiProcessingCall():
  process1 = Process(target=cpu_intensive_task, args=(COUNT, ))
  process2 = Process(target=cpu_intensive_task, args=(COUNT, ))
  process1.start()
  process2.start()
  process1.join()
  process2.join()


def main():
  start = time.time()

  # normalCall()
  # multiThreadingCall()
  multiProcessingCall()

  end = time.time()
  res = end - start
  print(res)


# main call
main()
