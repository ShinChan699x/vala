import React from 'react';
import { Link } from 'react-router-dom';


export function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to AvAlert!</h1>
      <p className="text-lg mb-6">AvAlert is a pioneering web app utilizing state-of-the-art machine learning and deep learning models for early detection and mitigation of avalanches in vulnerable mountain terrain. With personalized zone options, users can access detailed avalanche forecasts, report real-time observations with the assistance of generative AI, and stay informed with precise weather forecasts. Key risk parameters, including precipitation, elevation, winds, snow depth, type, layers, UV rays, temperature, and pressure, are meticulously analyzed. AvAlert is your comprehensive tool for safeguarding lives and habitats from the threats of avalanches.</p>
      <div className="flex gap-4">
        <Link to="/avalanche-forecast" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Avalanche Forecast</Link>
        <Link to="/observations" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Observations</Link>
        <Link to="/weather-forecasts" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Weather Forecasts</Link>
      </div>
    </div>
  );
}
