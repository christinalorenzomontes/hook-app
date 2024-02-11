import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

  const { nextQuote } = useCounter(1);
  const { data, isLoading, hasError, getFetch } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading
        ? <LoadingQuote />
        : <Quote author={ author } quote={ quote } />
      }

      <button onClick={ getFetch } className="btn btn-primary">Next quote</button>

    </>
  )
}
