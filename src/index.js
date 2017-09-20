import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'


const API_KEY='AIzaSyB-IGvLIWitj4vT9TeVkf85xabxx3DDDbI';


//Create a new component. This component should produce some HTML
const App = function() {
  return(
    <div>
      Hi!
      <SearchBar />
    </div>
  ) 
}

//Take this component's generated HTML and put in 
//on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));