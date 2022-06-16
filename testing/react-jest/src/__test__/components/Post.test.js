import { fireEvent, render, screen } from '@testing-library/react';
import { faker } from "../../lib/faker";
import { Post } from "../../components";
import { FetchState } from '../../hooks/api-hooks';
import * as apiHooks from "../../hooks/api-hooks";

describe('<Post />', () => {
  const defaultText = "Hello there, click the button below to get the list of posts from the API.";
  const loadingText = 'Fetching posts...';
  const errorText = 'Oops! Something went wrong. Please try again.';
  const successText = "Here's the list of posts:";
  const btnText = "Get Posts";

  const renderComponent = () => render(<Post />);

  afterEach(() => {
    jest.restoreAllMocks();
  });


  it('should render default state', () => {
    renderComponent();
    const stateEl = screen.queryByText(defaultText);
    expect(stateEl).toBeInTheDocument();
  });

  it('should render loading state', () => {
    const fetchState = FetchState.LOADING;

    jest
      .spyOn(apiHooks, 'useGetPosts')
      .mockReturnValue([[], fetchState, jest.fn()]);
    
    renderComponent();
    const stateEl = screen.queryByText(loadingText);
    expect(stateEl).toBeInTheDocument();
  });

  it('should render error state', () => {
    const fetchState = FetchState.ERROR;

    jest
      .spyOn(apiHooks, 'useGetPosts')
      .mockReturnValue([[], fetchState, jest.fn()]);
    
    renderComponent();
    const stateEl = screen.queryByText(errorText);
    expect(stateEl).toBeInTheDocument();
  });

  it('should call API on button click', () => {
    const fetchState = FetchState.DEFAULT;
    const getPostsMock = jest.fn();

    jest
      .spyOn(apiHooks, 'useGetPosts')
      .mockReturnValue([[], fetchState, getPostsMock]);
    
    renderComponent();
    const btnEl = screen.queryByText(btnText);
    fireEvent.click(btnEl);

    expect(getPostsMock).toBeCalledTimes(1);
  });

  it('should render success state', () => {
    const fetchState = FetchState.SUCCESS;
    const posts = [
      {
        userId: faker.generateWords().length,
        id: faker.generateWords().length,
        title: faker.generateSentences(1),
        body: faker.generateSentences(10),
      }
    ]

    jest
      .spyOn(apiHooks, 'useGetPosts')
      .mockReturnValue([posts, fetchState, jest.fn()]);
    
    renderComponent();
    const stateEl = screen.queryByText(successText);
    const post = posts[0];
    const postTitle = `${post.id} - ${String(post.title).toLocaleUpperCase()}`;
    const postEl = screen.queryByText(postTitle);

    expect(stateEl).toBeInTheDocument();
    expect(postEl).toBeInTheDocument();
  });
});
