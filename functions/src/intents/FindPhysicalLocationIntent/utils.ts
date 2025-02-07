import Fuse from "fuse.js";
import { MOCK_LOCATION_RESPONSE } from "./mock-data";
import { LocationResponse } from "./types";

export const searchLocation = (city: string, miles: number) => {
  return search(city, miles);
};

// TODO: replace this with actual query once we start that section
const search = (city: string, miles: number): LocationResponse[] => {
  const fuse = new Fuse(MOCK_LOCATION_RESPONSE, {
    keys: ["city" satisfies keyof LocationResponse],
    isCaseSensitive: false,
  });

  return fuse
    .search(city)
    .map(({ item }) => item)
    .filter((item) => item.milesFromCityCenter <= miles);
};

export const MAX_RESULT_RETURN = 5;
