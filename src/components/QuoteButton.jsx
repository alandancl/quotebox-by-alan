import React from 'react'

const QuoteButton = ({ randomColor, generateQuoteButton }) => {

  //Stores a random background color that styles button 
  const buttonStyle = {
    backgroundColor: randomColor,
  }

  return (
    <button style={buttonStyle} onClick={generateQuoteButton}>
      <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  )
}

export default QuoteButton