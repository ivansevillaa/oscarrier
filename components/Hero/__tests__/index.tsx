/* eslint-disable react/jsx-props-no-spreading */
import {render} from "@testing-library/react";
import {axe} from "jest-axe";
import Hero from "../index";

describe("Hero component", () => {
  it("renders with the correct content", () => {
    const {getByRole} = render(
      <Hero
        image="https://image.jpg"
        alt="alt for the image"
        title="awesome title"
        description="amazing description"
      />
    );

    // TODO: test that the image be the correct

    const title = getByRole("heading");
    expect(title).toHaveTextContent(/awesome title/i);

    const description = getByRole("paragraph");
    expect(description).toHaveTextContent(/amazing description/i);
  });

  // TODO: make a util for that
  it("is accessible", async () => {
    const {container} = render(
      <Hero
        image="https://image.jpg"
        alt="alt for the image"
        title="awesome title"
        description="amazing description"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
