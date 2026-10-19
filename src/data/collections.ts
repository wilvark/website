export const collectionNames = [
  'Landscapes & Places',
  'Memory of Seasons',
] as const;

export const collectionDefinitions = [
  {
    name: 'Landscapes & Places',
    slug: 'landscapes-and-places',
    description:
      'Landscapes, coastlines, and familiar outdoor places shaped by light, weather, and memory.',
    coverPainting: 'portland-head-light',
  },
  {
    name: 'Memory of Seasons',
    slug: 'memory-of-seasons',
    description:
      'Bird paintings exploring memory, season, and quiet observation through sparse, contemplative scenes.',
    coverPainting: 'acceptance-of-spring',
  },
] as const;

export type CollectionName = (typeof collectionNames)[number];

export function getCollectionDefinition(name: CollectionName) {
  return collectionDefinitions.find((collection) => collection.name === name);
}
