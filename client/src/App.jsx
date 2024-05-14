import { useEffect, useState } from "react";
import BlockQuote from "./components/BlockQuote";
import Header from "./components/Header";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      const fetchApi = await fetch("/api");
      const quotesData = await fetchApi.json();
      // console.log(quotesData);
      setQuotes(quotesData)
    }
    fetchQuotes()
  },[])

  return (
    <div className="bg-zinc-800 min-h-screen">
      <Header />

      <main className="m-10 space-y-4">
        {quotes.length === 0 ? <div className="bg-white p-5 rounded">No Quotes Available!</div> : ("")}
        {quotes.map((quote) => {
          return <BlockQuote key={quote.id} quote={quote.quote} author={quote.author} />;
        })}
      </main>
    </div>
  );
}

export default App;
