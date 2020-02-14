import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim'

test("First Name", () => {
  const {getByText} = render(<App />);

  const fname = getByText(/First Name/i)


  expect(fname).toBeInTheDocument();
  expect(fname).toBeTruthy()
  expect(fname).not.toBeFalsy();
});



test('Last Name', () => {
  const {getByText} = render(<App />);


  const lname = getByText(/Last Name/i)

  expect(lname).toBeInTheDocument();
  expect(lname).toBeTruthy()
  expect(lname).not.toBeFalsy();
});


