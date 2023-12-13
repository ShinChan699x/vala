import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getForecasts from '@wasp/queries/getForecasts';

export function AvalancheForecast() {
  const { data: forecasts, isLoading, error } = useQuery(getForecasts);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {forecasts.map((forecast) => (
        <div key={forecast.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
          <h2 className='text-xl font-bold mb-2'>{forecast.mountainZone}</h2>
          <p className='mb-2'>Risk Evaluation: {forecast.riskEvaluation}</p>
          <div className='mb-2'>
            <h3 className='font-bold'>Parameters:</h3>
            <pre>{JSON.stringify(forecast.parameters, null, 2)}</pre>
          </div>
          <p>Recorded At: {forecast.recordedAt}</p>
        </div>
      ))}
      <Link to='/'>Go to HomePage</Link>
    </div>
  );
}