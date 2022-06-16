import { render, screen } from '@testing-library/react';
import Header  from "../../components/Header";


test('<Header /> renders testing', () => {
  const testText = "React Jest Test";

  render(<Header />);
  const textElement = screen.getByText(testText);
  expect(textElement).toBeInTheDocument();
});
