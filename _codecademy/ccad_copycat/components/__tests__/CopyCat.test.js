import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CopyCat } from "../CopyCat";

test("Should display Cat's Name", () => {
  render(
    <CopyCat
      name={"Bobo"}
      value={""}
      handleChange={() => {}}
      toggleTape={() => {}}
      isCopying={true}
    />
  );

  const textContent = "Copy Cat Bobo";
  const header = screen.getByText(textContent);
  expect(header).toBeInTheDocument();
});

test("Should display input text in paragraph when isCopying is set to true", () => {
  render(
    <CopyCat
      value={"Meooow"}
      handleChange={() => {}}
      toggleTape={() => {}}
      isCopying={true}
    />
  );

  const input = screen.getByRole("textbox");
  expect(input).toHaveDisplayValue("Meooow");

  // The paragraph where copied input should display
  const paragraph = screen.getByText("Meooow");
  expect(paragraph).toBeInTheDocument();
});

test("Should not display input text in paragraph when isCopying is set to false", () => {
  render(
    <CopyCat
      value={"Meooow"}
      handleChange={() => {}}
      toggleTape={() => {}}
      isCopying={false}
    />
  );

  const input = screen.getByRole("textbox");
  expect(input).toHaveDisplayValue("Meooow");

  const paragraph = screen.queryByText("Meooow");
  expect(paragraph).toBeNull();
});
