import {render} from "@testing-library/react";
import {axe} from "jest-axe";
import Header from "../index";

describe("Header component", () => {
  it("renders with the correct content", () => {
    // TODO: I think I need to wrap the Header with the Chakra Provider, to test the dark and light mode
    const {getByRole} = render(<Header />);

    const button = getByRole("button");
    expect(button).toBeInTheDocument();

    const nav = getByRole("navigation");
    const homeOption = getByRole("listitem");
    expect(nav).toContainElement(homeOption);
    expect(homeOption).toHaveTextContent(/common:home/i);
  });

  // TODO: test the correct nav redirects

  it("toggle color mode", () => {
    // TODO: I think I need to wrap the Header with the Chakra Provider, to test the dark and light mode
    // const {debug, getByRole} = render(<Header />);
    // const button = getByRole("button");
    // debug(button);
  });

  // TODO: make a util for that
  it("is accessible", async () => {
    const {container} = render(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
