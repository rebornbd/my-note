// Promises chaining

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

let process = (pics) => {
    let result = [];
    let validExt = ['jpg', 'png', 'jpeg'];

    return new Promise((res, rej) => {
        for (let i=0; i<pics.length; i++) {
            let extension = pics[i].split('.').pop();

            if (validExt.includes(extension)) result.push("Process complete");
            else    result.push("not valid formate!");
        }

        if (pics.length > 0) res(result);
        else rej(new Error("enter a empty array"));
    });
};


// main call
download("http://domain.com/temp")
.then(res => {
    process(res)
    .then(res => {
        console.log(res);
    }, rej => {
        if (rej instanceof Error) {
            console.log(rej.name);
            console.log(rej.message);
            // console.log(rej.stack);
        }
        else console.log(rej);
    });
}, rej => {
    if (rej instanceof Error) {
        console.log(rej.name);
        console.log(rej.message);
        // console.log(rej.stack);
    }
    else console.log(rej);
});
