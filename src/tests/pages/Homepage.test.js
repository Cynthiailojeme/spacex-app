import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HomePage from "../../pages/HomePage/HomePage";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "../../utils/api";

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

describe("Homepage", () => {
  it("renders homepage correctly", () => {
    act(() => {
      const elem = (
        <ApolloProvider client={client}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </ApolloProvider>
      );
      render(elem, container);
    });
  });
});
