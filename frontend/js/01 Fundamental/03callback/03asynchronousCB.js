// asynchronous callback

function process(url) {
    console.log("processing: " + url);
}

function download(url, processRef) {
    console.log("downloading...");

    // asynchronous call
    setTimeout(() => {
        // downloading code here

        console.log("download complete");
        processRef(url);
    }, 5000);
}

download("http://www.tempdomain.com/temp/mypic.jpg", process);
