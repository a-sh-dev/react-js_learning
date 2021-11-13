import React from "react";
import { CopyCatContainer } from "../CopyCatContainer";
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// Check whether the app is correctly rendering the user input
// below the cat image whenever the user types
test("Paragraph should display copied text", () => {
  render(<CopyCatContainer />);

  const typedInput = "Hello World!";
  const input = screen.getByRole("textbox");
  userEvent.type(input, typedInput);

  const paragraph = screen.getByText(typedInput);
  expect(paragraph).toBeInTheDocument();
});

// Check the sequence of behaviour when the cat image is clicked,
// The paragraph with the copied text disappears
// When the cat image is clicked (asynchronous with the delay)
test("Should remove copied text after removing tape", () => {
  render(<CopyCatContainer />);

  // Simulate user typing in textbox
  const typedInput = "My mouth is shut";
  const input = screen.getByRole("textbox");
  userEvent.type(input, typedInput);

  // Assert that input text appears in paragraph
  let paragraph = screen.getByText(typedInput);
  expect(paragraph).toBeInTheDocument();

  // Simulate clicking on cat image to cat with taped
  const catImage = screen.getByAltText("copycat");
  userEvent.click(catImage);

  // Assert that paragraph text will eventually disappear when cat image
  // is swithed over to quietcat (taped)
  await waitFor(() => {
    paragraph = screen.getByText(typedInput);
    expect(paragraph).toBeNull();
  });
});

// Check whether the user input reappears when the tape is removed
// from the cat image
test("Should display copied text after removing tape", async () => {
  render(<CopyCatContainer />);

  // Simulate clicking on cat image to cat with taped
  let copyCatImage = screen.getByAltText("copycat");
  userEvent.click(copyCatImage);
  // Ensure image changes to quietcat / with tape
  // Don't need to use waitFor() since we've already waited - but it can still be used
  const quietCatImage = await screen.findByAltText("quietcat");

  // Simulate user typing in textbox
  const typedInput = "Eventually this will appear";
  const input = screen.getByRole("textbox");
  userEvent.type(input, typedInput);

  // Assert that input text doesn't appear in paragraph
  const emptyPara = screen.queryByText(typedInput);
  expect(emptyPara).toBeNull();

  // Simulate user clicking on the 'quietcat' image
  userEvent.click(quietCatImage);
  // Ensure image switches over to copycat
  copyCatImage = await screen.findByAltText("copycat");
  // Assert that input text appears in paragraph
  const par = screen.getByText(typedInput);
  expect(par).toBeInTheDocument();
});
