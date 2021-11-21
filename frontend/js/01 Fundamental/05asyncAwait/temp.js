let loadJson = async (url) => {
    let promise = new Promise((res, rej) => {
        let response = await fetch(url);

        if (response.status === 200) {
            let data = await response.json();
            res(data);
        } else rej(new Error(response.status));
    });

    return promise;
};

loadJson('no-such-user.json')
    .catch(alert);
