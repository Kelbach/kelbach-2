import React from 'react';
import { SearchBar } from '../../components/Weather/SearchBar/SearchBar';
// import { OneDayTable } from './components/Table/oneDayTable';
// import { ForecastTable } from './components/Table/forecastTable';
import { OneDayCard } from '../../components/Weather/OneDayCard/OneDayCard';


function Weather() {
  return (
    <>
      <header className="row">
          <div className="col-12 text-center">
              <h1 className="text-uppercase">Easy Weather Dashboard 2.0</h1>
          </div>
      </header>
      <main className="row">
          <SearchBar/>
          <OneDayCard/>
      </main>
    </>
  );
}

export default Weather;
