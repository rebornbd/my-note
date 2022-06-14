const axios = require('axios');
const {
  fetchData,
  forEach
} = require("./mock-function");


test("mock callback", () => {
  const mockCallback = jest.fn((x) => x + 10);
  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[1].value).toBe(11);
  console.log(mockCallback.mock);
});


it('return mock', () => {
	const mock = jest.fn();

	mock
		.mockReturnValueOnce(true)
		.mockReturnValueOnce(false);

	const results = mock();
	const results2 = mock();

	expect(results).toBe(true);
	expect(results2).toBe(false);
});


test("should return correct todo", async () => {
  const todoId = 15;
  jest.spyOn(axios, 'get').mockReturnValueOnce({
		data: {
      id: todoId,
		  title: 'Do youtube',
    }
	});

  try {
    const todo = await fetchData(todoId);
    // console.log(todo);

    expect(todo.id).toBe(todoId);
	  expect(todo.title).toBe('Do youtube');
  } catch (err) {
    const message = err.message;
    // console.log(`message: ${message}`);

    expect("error").toBe(message);
    expect(message).toMatch('');
  }
});
