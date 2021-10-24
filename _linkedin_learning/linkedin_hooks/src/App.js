import React from "react";
import { StarRating } from "./components/Stars";
import { Checked } from "./components/CheckedReducer";
import { Section } from "./components/Congrats";
import { Gh } from "./components/GHApi";
import { Reducer } from "./components/Reducer";
import { FormRef } from "./components/Ref_Form";
import { ControlledForm } from "./components/ControlledForm";
import { GHAsh } from "./components/GHAsh";

import "./styles.css";

export default function App() {
  return (
    <>
      <GHAsh login='a-sh-dev' />
      <hr />
      <ControlledForm />
      <hr />
      <FormRef />
      <hr />
      <Reducer />
      <hr />
      <Gh />
      <hr />
      <Section />
      <hr />
      <StarRating totalStars={8} />
      <hr />
      <Checked />
    </>
  );
}
