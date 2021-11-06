import {render} from "@testing-library/react";
import {PostMetadata} from "@ts/post";
import {axe} from "jest-axe";
import PostLayout from "../index";

const postMetadata: PostMetadata = {
  title: "The React's key prop Importance",
  date: "2021-06-23",
  summary: "summary example",
  cover: "/images/react-key-prop.jpg",
  blurHash: "L4Cr4a:,4Us90$Fd9ukp00oxd9sE",
  slug: "react-key-prop"
};

const postContent = "This is the post content";

// TODO: how to test children?
describe("PostLayout component", () => {
  it("renders the correct content", () => {
    const {getByText} = render(
      <PostLayout frontMatter={postMetadata}>{postContent}</PostLayout>
    );

    const content = getByText(postContent);
    expect(content).toBeInTheDocument();
  });

  // TODO: make a util for that
  it("is accessible", async () => {
    const {container} = render(
      <PostLayout frontMatter={postMetadata}>{postContent}</PostLayout>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
