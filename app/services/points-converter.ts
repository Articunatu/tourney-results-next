  
export function convertPlacementToPoints(placement: number): number {
  if (placementToPoints[placement] !== undefined) {
    return placementToPoints[placement];
  }

  return 0; 
}

const placementToPoints: { [placement: number]: number } = {
  1: 2000,
  2: 1200,
  3: 860,
  4: 580,
  5: 430,
  7: 290,
  9: 215,
  13: 145,
  17: 90,
  25: 60,
  33: 45,
};
