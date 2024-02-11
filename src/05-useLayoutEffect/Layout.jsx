import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

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
