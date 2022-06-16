/* eslint-disable testing-library/no-unnecessary-act */
import { render, unmountComponentAtNode } from "react-dom";
import { act, waitFor } from "@testing-library/react";
import ReactDOM from 'react-dom/client';
import React from "react";
import Header from "../../components/Header";


let header: ReactDOM.Root, div: HTMLDivElement;
beforeEach(() => {
  div = document.createElement("div");
  header = ReactDOM.createRoot(div);
});

afterEach(() => {
  div.remove();
});


it("Header components testing", () => {
  const headerText = "React Jest Test";

  act(() => {
    header.render(<Header />);
  });
  expect(div.textContent).toBe(headerText);
});
