import React from "react";
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { App } from "../App";
import { Thought } from "../Thought";
import { AddThoughtForm } from "../AddThoughtForm";

test("Should have header text Passing Thoughts", () => {
  // call the render()
  render(<App />);
  // extract the header node of the App component
  const text = "Passing Thoughts";
  const header = screen.getByText(text);
  // assert to confirm that the header node does indeed contain the text
  expect(header).toHaveTextContent(text);
});

test("Should have button enabled", () => {
  render(<Thought thought={{ text: "Hello" }} removeThought={() => {}} />);

  const button = screen.getByRole("button");
  expect(button).toBeEnabled();
});

// ! Testing to mimic user interactions
test("'Oreos are delicious' should not appear", () => {
  render(<App />);
  const emptyThought = screen.queryByText("Oreos are delicious");
  expect(emptyThought).toBeNull();
});

test("Should show new thought to be present", async () => {
  render(<App />);
  // Mimicking a user posting a thought
  const addThoughtInput = screen.getByRole("input");
  const addButton = screen.getByRole("submit");
  userEvent.type(addThoughtInput, "Oreos are delicious");
  userEvent.click(addButton);
});

test("Clicking the x button should remove a thought", async () => {
  render(<App />);
  // Since there are multiple of 'x' buttons, the getAllByText() method is used as it returns an array. Then exctract the first button from the array which belongs to the Thought with text 'This is a place for your passing thoughts.'
  const button = screen.getAllByText("x")[0];

  // Mimic clicking on the button
  userEvent.click(button);

  // Grab the thought again, and it should be null after the 'x' button is clicked
  const removedThought = screen.queryByText(
    "This is a place for your passing thoughts."
  );
  expect(removedThought).toBeNull();
});

test("Should add a new thought", () => {
  render(<App />);
  // Grab the textboc and the submit button
  const textbox = screen.getByRole("textbox");
  const submit = screen.getByText("Add");

  // Simulate user interaction
  const inputText = "Did I forget my keys?";
  userEvent.type(input, inputText);
  userEvent.click(button);

  // Assert that the thought appears
  const thought = screen.getByText(inputText);
  expect(thought).toBeInTheDocument();
});

//! Asychronous testing with waitFor() function to test an element has been removed
// waitFor() returns a Promise - so we need to add await keyword and takes a callback as an argument to perform queries and/or run assertions
test("Should show Thought to be removed", async () => {
  render(<App />);
  const input = screen.getByRole("input");
  const submit = screen.getByRole("submit");
  const inputText = "I have to call my mom.";

  userEvent.type(input, inputText);
  userEvent.click(submit);

  await waitFor(() => {
    const thought = screen.queryByText(inputText);
    expect(thought).toBeNull();
  });
});
