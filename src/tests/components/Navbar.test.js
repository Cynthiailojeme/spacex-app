import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Navbar from "../../components/Navbar/Navbar";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Navbar", () => {
  it("renders navbar component correctly", () => {
    act(() => {
      render(<Navbar />, container);
    });
  });
});
