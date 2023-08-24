import Snowman from "./Snowman";
import React from "react";
import { render, fireEvent } from "@testing-library/react";


it("matches snapshot", function () {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});


it("Ends game after 6 wrong guesses", function () {
  const { debug, container } = render(<Snowman words="apple" />);

  //TODO: Check You Lose and num wrong 6 not there.

  const b = container.querySelector('button[value="b"]');
  const n = container.querySelector('button[value="n"]');
  const m = container.querySelector('button[value="m"]');
  const o = container.querySelector('button[value="o"]');
  const q = container.querySelector('button[value="q"]');
  const r = container.querySelector('button[value="r"]');

  debug(container);

  fireEvent.click(b);
  fireEvent.click(n);
  fireEvent.click(m);
  fireEvent.click(o);
  fireEvent.click(q);
  fireEvent.click(r);

  expect(container.querySelector('p')).toContainHTML("Number wrong: 6");  //TODO: Use variable.
  expect(container.querySelector('h3')).toContainHTML("You Lose");
});