import React, { useState } from 'react';
import Nav from './components/Nav';
import Portfolio from './pages/Portfolio/Portfolio';
import Weather from './pages/Weather/Weather';

function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Weather':
        return <Weather />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <>
      Hello
      <header>
        <h1>
          <span>
            Kevin Kelbach
          </span>
        </h1>
        <nav>
          {/* Pass the state value and the setter as props to Nav */}
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Call the renderPage function passing in the currentPage */}
        </nav>
        
      </header>
        <div>{renderPage(currentPage)}</div>
    </>
  );
}  

export default App;