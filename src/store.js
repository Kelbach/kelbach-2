import {configureStore} from '@reduxjs/toolkit';
import citiesReducers from './reducers/weather/citiesReducers';
import forecastReducer from './reducers/weather/forecastReducer';
import weatherReducer from './reducers/weather/weatherReducer';


export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        forecast: forecastReducer,
        cities: citiesReducers
    }
})