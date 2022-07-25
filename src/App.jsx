import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'

//This array is placed outside the App function in order to prevent it renderizes every time a state is changed
const colors = [
  '#A93226',
  '#CB4335',
  '#884EA0',
  '#7D3C98',
  '#2471A3',
  '#2E86C1',
  '#17A589',
  '#138D75',
  '#229954',
  '#28B463',
  '#D4AC0D',
  '#D68910',
  '#CA6F1E',
  '#BA4A00',
  '#A6ACAF',
  '#839192',
  '#707B7C'
];

function App() {
    //Returns a random number fron 0 to array's length
    const generateRandomNumber = arr => {
      return Math.floor(Math.random() * arr.length);
    }
  
    //Returns a random quote or color depending on the array passed by
    const getRandomItem = arr => {
      const index = generateRandomNumber(arr);
      return arr[index];
    }
  
    //Sets randomQuote to a random item from quotes array
    const [randomQuote, setRandomQuote] = useState(getRandomItem(quotes));
  
    //Sets randomColor to a random item from colors array
    const [randomColor, setRandomColor] = useState(getRandomItem(colors));

    //Stores a random background color that styles App class 
    const appStyle = {
      backgroundColor: randomColor,
    }

    //Generates a random quote/color on each click
    const generateQuoteButton = () => {
      setRandomQuote(getRandomItem(quotes));
      setRandomColor(getRandomItem(colors));
    }
  
  return (
    <section className="App" style={appStyle}>
      <QuoteBox 
        randomQuote = {randomQuote}
        randomColor = {randomColor}
        generateQuoteButton = {generateQuoteButton}
      />
    </section>
  )
}

export default App
