export function getFeaturedCars(allCars, count = 4) {
  const shuffled = [...allCars].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}