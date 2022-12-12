import QuoteForm from "../components/quotes/QuoteForm";
const NewQutes = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQutes;
