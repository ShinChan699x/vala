import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getForecast from '@wasp/queries/getForecast';
import createForecast from '@wasp/actions/createForecast';

export function ForecastPage() {
  const { data: forecast, isLoading, error } = useQuery(getForecast);
  const createForecastFn = useAction(createForecast);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold mb-4'>Avalanche Forecast</h1>
      <p>Risk Evaluation: {forecast?.riskEvaluation}</p>
      <p>Risk Factors: {forecast?.riskFactors}</p>
      <Link to='/observations' className='text-blue-500 underline'>Go to Observations</Link>
      <Link to='/dashboard' className='text-blue-500 underline ml-4'>Go to Dashboard</Link>
    </div>
  );
}
