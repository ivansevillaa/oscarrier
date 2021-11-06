import {render} from "@testing-library/react";
import {axe} from "jest-axe";
import PostHeader from "../index";

describe("PostHeader component", () => {
  it("renders correctly", () => {
    const {getByRole} = render(
      <PostHeader
        title="Incredible Article"
        date="2021-07-23"
        cover="https://image.jpg"
        blurHash="LFBx=t}?-nxYXmxsxaoJXRbaofWV"
      />
    );

    const title = getByRole("heading");
    expect(title).toHaveTextContent(/incredible article/i);

    const info = getByRole("paragraph");
    expect(info).toHaveTextContent(/post:author/i);

    // TODO: test that the image be the correct
  });

  // TODO: make a util for that
  it("is accessible", async () => {
    const {container} = render(
      <PostHeader
        title="Incredible Article"
        date="2021-07-23"
        cover="https://image.jpg"
        blurHash="LFBx=t}?-nxYXmxsxaoJXRbaofWV"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
