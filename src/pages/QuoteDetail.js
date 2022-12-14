import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment, useEffect } from "react";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuteDetail = () => {
  const param = useParams();
  const match = useRouteMatch();

  const { quoteId } = param;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // console.log(match);

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);

  // console.log(param.quoteId);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No Quote Found!</p>;
  }

  return (
    <Fragment>
      {/* <h1>Qutes Detail Page</h1>
      <p>{param.quotedId}</p> */}
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuteDetail;
