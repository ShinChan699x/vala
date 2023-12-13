

import HttpError from '@wasp/core/HttpError.js'

export const createObservation = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const observation = await context.entities.Observation.create({
    data: {
      type: args.type,
      notes: args.notes,
      userId: context.user.id
    }
  });

  return observation;
}

export const createForecast = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  // Implement machine learning and deep learning models to generate forecast.

  const newForecast = await context.entities.Forecast.create({
    data: {
      zone: args.zone,
      riskEvaluation: args.riskEvaluation,
      riskFactors: args.riskFactors,
      timestamp: new Date(),
      user: { connect: { id: context.user.id } }
    }
  });

  return newForecast;
}
