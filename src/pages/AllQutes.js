import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "A1", auther: "Azad", text: "Learning React is Fun!" },
  { id: "A2", auther: "Ram", text: "Learning React is graet!" },
  { id: "A3", auther: "Azad", text: "React has Many Hook!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
