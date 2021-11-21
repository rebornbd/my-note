// synchronous callback

let processing = (url) => {
    console.log("start processing: " + url);

    // processing code here

    console.log("end processing");
};

let download = (url, processingRef) => {
    processingRef(url);
};

download("http://www.tempdomain.com/temp/mypic.jpg", processing);
