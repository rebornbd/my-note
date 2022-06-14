const fetchData = require("./async");


test("should return correct todo", async () => {
  try {
    const todoId = 10;
    const todo = await fetchData(todoId);

    expect(todo.id).toBe(todoId);
  } catch(err) {
    const message = err.message;
    // console.log(`message: ${message}`);

    expect("error").toBe(message);
    expect(message).toMatch('');
  }
});
