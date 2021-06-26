// async | await


let download = async (url) => {
    let promise = new Promise((res, rej) => {
        console.log("downloading...");

        setTimeout(() => {
            res("downloading completed!");
        }, 5000);
    });

    let result = await promise;
    return result;
};


download("http://domain.com/mypic.jpg")
    .then(res => {
        console.log(res);
    }, rej => {
        console.log(rej);
    })
