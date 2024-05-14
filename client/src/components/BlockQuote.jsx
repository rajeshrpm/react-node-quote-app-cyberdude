import React from "react";
import PropTypes from "prop-types";

const BlockQuote = (props) => {
  const { quote, author } = props;
  return (
    <blockquote className="bg-white rounded p-10 shadow italic font-semibold text-gray-900">
      <p className="text-xl text-gray-900 mb-3">&quot;{quote}.&quot;</p>
      <span className="text-base text-grey-600 ml-5">- {author}</span>
    </blockquote>
  );
};

BlockQuote.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};

export default BlockQuote;
