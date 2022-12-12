import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";

import Comments from "../components/comments/Comments";

const QuteDetail = () => {
  const param = useParams();
  console.log(param.quotedId);
  return (
    <Fragment>
      <h1>Qutes Detail Page</h1>
      <p>{param.quotedId}</p>
      <Route path={`/quotes/${param.quotedId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuteDetail;
