import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getObservations from '@wasp/queries/getObservations';
import createObservation from '@wasp/actions/createObservation';

export function ObservationPage() {
  const { data: observations, isLoading, error } = useQuery(getObservations);
  const createObservationFn = useAction(createObservation);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateObservation = () => {
    createObservationFn({
      type: 'slide',
      notes: 'Observation notes',
    });
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Observations</h1>
      <button
        onClick={handleCreateObservation}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Create Observation
      </button>
      <div className='mt-4'>
        {observations.map((observation) => (
          <div
            key={observation.id}
            className='bg-gray-100 p-4 mb-4 rounded-lg'
          >
            <div>Type: {observation.type}</div>
            <div>Notes: {observation.notes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
