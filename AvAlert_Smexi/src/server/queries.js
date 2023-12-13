import HttpError from '@wasp/core/HttpError.js'

export const getObservations = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Observation.findMany({
    where: {
      userId: context.user.id
    }
  });
}

export const getForecast = async ({ zone }, context) => {
  if (!context.user) { throw new HttpError(401) };

  const forecast = await context.entities.Forecast.findFirst({
    where: { zone },
    orderBy: { timestamp: 'desc' }
  });

  if (!forecast) throw new HttpError(404, 'No forecast found for zone ' + zone);

  return forecast;
}
