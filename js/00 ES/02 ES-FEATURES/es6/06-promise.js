/*
    // ES6
    Promise.resolve
    Promise.reject
    Promise.all
    Promise.race
*/

// promise define
var p1 = new Promise((res, rej) => {
    var items = ['user1.jpg', 'user2.png', 'user3.jpeg'];

    var done = true;
    if (done)   res(items);
    else        rej(new Error("p1: The process can't complete"));
});

var p2 = new Promise((res, rej) => {
    var items = ['rahim', 'korim', 'kuddush'];

    var done = true;
    setTimeout(() => {
        if (done)   res(items);
        else        rej(new Error("p2: The process can't complete"));
    }, 5000);
});

var p3 = new Promise((res, rej) => {
    var items = ['task1', 'task2', 'task3'];

    var done = false;
    setTimeout(() => {
        if(done)    res(items);
        else        rej(new Error("p3: The process can't complete"));
    }, 2000);
});


// promise call
p2
.then(res => console.log(res))
.catch(error => console.log(error.message));

p3
.then(res => console.log(res))
.catch(error => {});

Promise.all([p1, p2])
.then(res => console.log(res))
.catch(error => console.log(error.message));

Promise.all([p1, p2, p3])
.then(res => console.log(res))
.catch(error => console.log(`p1,p2,p3: ${error.message}`));

// returns a promise that fulfills or rejects first
Promise.race([p2, p3])
.then(res => console.log('race-res', res))
.catch(error => console.log(`race-err: ${error.message}`));
