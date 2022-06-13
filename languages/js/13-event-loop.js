/*
  The event loop is a constantly running process that monitors 
  both the callback queue and the call stack.

  STEPS:
    step-01: (Evaluate Script)
            Synchronously execute the script as though it were a 
            function body. Run until the Call Stack is empty.
    
    step-02: (Run a Callback Task)
            Select the oldest Task from the Task Queue. Run it 
            until the Call Stack is empty.

    step-03: (Run all Microtasks)
            Select the oldest Microtask from the Microtask Queue. 
            Run it until the Call Stack is empty. Repeat until the 
            Microtask Queue is empty.

    step-04: (Rerender)
            Rerender the UI. Then, go to step-02.
            (This step only applies to browsers, not NodeJS).

    VISUALIZATION LINK: https://www.jsv9000.app/?code=ZnVuY3Rpb24gZm9vKCkgewoJY29uc29sZS5sb2coInN0YXJ0IGZvbyIpOwogIAogIAlzZXRUaW1lb3V0KGZ1bmN0aW9uIGNiMSgpIHsKICAgIAljb25zb2xlLmxvZygiY2FsbGJhY2siKTsKICAgIH0sIDApOwogICAgCiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIGNiMigpIHsKICAgIAljb25zb2xlLmxvZygiY2FsbGJhY2siKTsKICAgIH0sIDApOwogICAgCiAgICBQcm9taXNlLnJlc29sdmUoJ2RvbmUnKQogICAgICAudGhlbihmdW5jdGlvbiBwMShyZXMpIHsgY29uc29sZS5sb2cocmVzKTsgfSkKICAgICAgCiAgICBQcm9taXNlLnJlc29sdmUoJ2RvbmUnKQogICAgICAudGhlbihmdW5jdGlvbiBwMihyZXMpIHsgY29uc29sZS5sb2cocmVzKTsgfSkKICAKICAJY29uc29sZS5sb2coImVuZCBmb28iKTsKfQoKZm9vKCk7Cg%3D%3D

*/


/*
                                          GOOGLE CHROME/NODE JS
     ----------------------------------------------------------
    |                                                          |
    |                         V8 ENGINE       WEB API/C++ API  |
    |   -------------------------------        -------------   |
    |  |     HEAP        CALL-STACK    |      |             |  |
    |  |   --------     ------------   |      |             |  |
    |  |  |        |   |            |  |      |             |  |
    |  |  |        |   |            |  |      |             |  |
    |  |  |        | ⇋ |            |  |      |             |  |
    |  |  |        |   |            |  |      |             |  |
    |  |  |        |   |            |  |      |             |  |
    |  |   --------     ------------   |      |             |  |
    |  |                               |      |             |  |
    |   -------------------------------        -------------   |
    |                       ⇅                                  |
    |            EVENT LOOP ⥁                                  |
    |                       ⇅                                  |
    |                  -------------------------------------   |
    |    RENDER QUEUE |                                     |  |
    |                  -------------------------------------   |
    |                  -------------------------------------   |
    | MICROTASK QUEUE |                                     |  |
    |                  -------------------------------------   |
    |                  -------------------------------------   |
    |  CALLBACK QUEUE |                                     |  |
    |                  -------------------------------------   |
    |                                                          |
     ----------------------------------------------------------
*/
