import {render} from "@testing-library/react";
import {PostMetadata} from "@ts/post";
import {axe} from "jest-axe";
import Card from "../index";

const postMetadata: PostMetadata = {
  title: "The React's key prop Importance",
  date: "2021-06-23",
  summary: "summary example",
  cover: "/images/react-key-prop.jpg",
  blurHash: "L4Cr4a:,4Us90$Fd9ukp00oxd9sE",
  slug: "react-key-prop"
};

describe("Card component", () => {
  it("renders with the correct content", () => {
    const {getByRole, getByText} = render(
      <Card post={postMetadata} variant="wide" />
    );

    // TODO: add toHaveStyle assertion to check the variant works well

    const date = getByText(/june 23, 2021/i);
    expect(date).toBeInTheDocument();

    const title = getByRole("heading");
    expect(title).toHaveTextContent(postMetadata.title);

    const summary = getByRole("paragraph");
    expect(summary).toHaveTextContent(postMetadata.summary);
  });

  // TODO: test the redirection to the correct post

  // TODO: make a util for that
  it("is accessible", async () => {
    const {container} = render(<Card post={postMetadata} variant="wide" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
