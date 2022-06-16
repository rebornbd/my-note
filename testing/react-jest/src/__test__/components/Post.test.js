import { fireEvent, render, screen } from '@testing-library/react';
import { Post } from "../../components";
import { FetchState } from '../../hooks/api-hooks';


describe('<Post />', () => {
  const defaultText = "Hello there, click the button below to get the list of posts from the API.";
  const loadingText = 'Fetching posts...';
  const errorText = 'Oops! Something went wrong. Please try again.';
  const successText = "Here's the list of posts:";

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
  });
});
