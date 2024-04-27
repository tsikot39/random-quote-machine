import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" style={{ textAlign: "center" }}>
      <p id="text">"{quote}"</p>
      <p id="author">- {author}</p>
      <div className="button-container">
        <a
          id="tweet-quote"
          className="button-style"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            quote + " — " + author
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
        <button id="new-quote" className="button-style" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
