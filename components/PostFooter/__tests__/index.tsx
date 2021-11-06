import {render} from "@testing-library/react";
import {axe} from "jest-axe";
import PostFooter from "../index";

describe("PostFooter component", () => {
  it("renders the correct content", () => {
    const {getByRole} = render(<PostFooter slug="react-key-prop" title="" />);

    const shareButton = getByRole("button");
    expect(shareButton).toHaveTextContent(/post:shareTw/i);

    const editLink = getByRole("link");
    expect(editLink).toHaveTextContent(/post:edit/i);
    expect(editLink).toHaveAttribute(
      "href",
      "https://github.com/ivansevillaa/oscarrier/edit/main/content/blog/react-key-prop/index.en.mdx"
    );
  });

  // TODO: make a util for that
  it("is accessible", async () => {
    const {container} = render(<PostFooter slug="react-key-prop" title="" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
