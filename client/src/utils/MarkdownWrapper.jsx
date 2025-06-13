import ReactMarkdown from "react-markdown";

export const MarkdownWrapper = ({ review }) => {
  //   console.log({ review });

  return <ReactMarkdown>{review}</ReactMarkdown>;
};

export default MarkdownWrapper;
