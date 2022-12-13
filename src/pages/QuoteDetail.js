import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";

import HighLightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "A1", auther: "Azad", text: "Learning React is Fun!" },
  { id: "A2", auther: "Ram", text: "Learning React is graet!" },
  { id: "A3", auther: "Azad", text: "React has Many Hook!" },
];

const QuteDetail = () => {
  const param = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);

  console.log(param.quotedId);

  if (!quote) {
    return <p> Quote not Found!</p>;
  }

  return (
    <Fragment>
      {/* <h1>Qutes Detail Page</h1>
      <p>{param.quotedId}</p> */}
      <HighLightedQuote text={quote.text} auther={quote.auther} />
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuteDetail;
