
class HttpError extends Error {
    constructor(message) {
        super(message);

        this.message = message;
        this.name = "HttpError";
    }

    setStatus(status) {
        this.status = status;
    }
}

try {
    let http = new HttpError("HttpError created");

    if (http.status != 200) {
        let httpError = new HttpError("HttpError 500 error");
        httpError.setStatus(500);

        throw httpError;
    }
} catch(err) {
    if (err instanceof HttpError) {
        console.log(err.name);
        console.log(err.status);
    } else {
        console.log("default error");
        console.log(err.name);
    }
}
