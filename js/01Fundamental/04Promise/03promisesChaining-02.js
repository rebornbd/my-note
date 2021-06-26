let download = (url) => {
    return new Promise((res, rej) => {
        let pics = ['pic1.jpg', 'pic2.png', 'pic3.xyz', 'pic4.jpg'];
        
        console.log("downloading: " + url);
        setTimeout(() => {
            // download code here

            if (pics.length > 0) {
                console.log("download completed!");
                res(pics);
            } else {
                console.log("download failed!");
                rej(new Error("download failed"));
            }
        }, 5000);
    });
};

let process = (pic, time) => {
    setTimeout(() => {
        console.log("processing: " + pic);
    }, time*1000);
}


// main call
download("http://domain.com/temp")
.then(res => {
    for (let i=0; i<res.length; i++) {
        process(res[i], i+1);
    }
}, rej => {
    if (rej instanceof Error) {
        console.log(rej.name);
        console.log(rej.message);
        // console.log(rej.stack);
    }
    else console.log(rej);
});
