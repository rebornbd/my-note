let json = '{ "name": "rahim" }';

try {
    let myObj = JSON.parse(json);

    if (!myObj.name)    throw Error("name not found");
    if (!myObj.age)     throw Error("age not found");

} catch(err) {
    console.log(err.name);
    console.log(err.message);
    // console.log(err.stack);
}
