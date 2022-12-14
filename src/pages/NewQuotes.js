import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import useHttp from "../hooks/use-http";
import QuoteForm from "../components/quotes/QuoteForm";
import { addQuote } from "../lib/api";

const NewQutes = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);

    // console.log(quoteData);

    // history.push("/quotes");
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQutes;
