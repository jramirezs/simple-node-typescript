import { getRandomGenre } from './genrenator';

export async function main(): Promise<void> {
  console.log('All your base are belong to us!');

  const genre = await getRandomGenre();
  console.log(`Now go and listen some ${genre}`);
}

main();
