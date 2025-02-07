import { LocationResponse } from "./types";

export const MOCK_LOCATION_RESPONSE: LocationResponse[] = [
  {
    name: "The Strand",
    address: "123 Main St",
    city: "New York, NY",
    milesFromCityCenter: 1.2,
  },
  {
    name: "Greenlight Bookstore",
    address: "456 Broadway",
    city: "New York, NY",
    milesFromCityCenter: 2.5,
  },
  {
    name: "McNally Jackson",
    address: "789 5th Ave",
    city: "New York, NY",
    milesFromCityCenter: 0.8,
  },
  {
    name: "City Lights",
    address: "321 Market St",
    city: "San Francisco, CA",
    milesFromCityCenter: 1.5,
  },
  {
    name: "Green Apple Books",
    address: "654 Mission St",
    city: "San Francisco, CA",
    milesFromCityCenter: 2.3,
  },
  {
    name: "Book Passage",
    address: "987 Castro St",
    city: "San Francisco, CA",
    milesFromCityCenter: 3.0,
  },
  {
    name: "Seminary Co-op",
    address: "741 Elm St",
    city: "Chicago, IL",
    milesFromCityCenter: 1.0,
  },
  {
    name: "Volumes Bookcafe",
    address: "852 Lake Shore Dr",
    city: "Chicago, IL",
    milesFromCityCenter: 2.7,
  },
  {
    name: "Sandmeyer’s Bookstore",
    address: "963 Michigan Ave",
    city: "Chicago, IL",
    milesFromCityCenter: 0.9,
  },
  {
    name: "The Last Bookstore",
    address: "135 Sunset Blvd",
    city: "Los Angeles, CA",
    milesFromCityCenter: 2.1,
  },
  {
    name: "Skylight Books",
    address: "246 Melrose Ave",
    city: "Los Angeles, CA",
    milesFromCityCenter: 3.4,
  },
  {
    name: "Book Soup",
    address: "357 Hollywood Blvd",
    city: "Los Angeles, CA",
    milesFromCityCenter: 1.8,
  },
  {
    name: "A Cappella Books",
    address: "159 Peachtree St",
    city: "Atlanta, GA",
    milesFromCityCenter: 2.0,
  },
  {
    name: "Charis Books & More",
    address: "753 Ponce de Leon Ave",
    city: "Atlanta, GA",
    milesFromCityCenter: 1.3,
  },
  {
    name: "Tall Tales Book Shop",
    address: "951 Marietta St",
    city: "Atlanta, GA",
    milesFromCityCenter: 2.6,
  },
  {
    name: "Elliott Bay Book Company",
    address: "268 Queen St",
    city: "Seattle, WA",
    milesFromCityCenter: 1.1,
  },
  {
    name: "Third Place Books",
    address: "376 Pike St",
    city: "Seattle, WA",
    milesFromCityCenter: 0.7,
  },
  {
    name: "Open Books",
    address: "489 Capitol Hill Ave",
    city: "Seattle, WA",
    milesFromCityCenter: 2.2,
  },
  {
    name: "Tattered Cover",
    address: "753 Pearl St",
    city: "Denver, CO",
    milesFromCityCenter: 1.9,
  },
  {
    name: "BookBar",
    address: "951 Larimer St",
    city: "Denver, CO",
    milesFromCityCenter: 0.6,
  },
  {
    name: "Second Star to the Right",
    address: "864 Colfax Ave",
    city: "Denver, CO",
    milesFromCityCenter: 2.8,
  },
  {
    name: "Powell’s City of Books",
    address: "236 Burnside St",
    city: "Portland, OR",
    milesFromCityCenter: 1.3,
  },
  {
    name: "Broadway Books",
    address: "412 Hawthorne Blvd",
    city: "Portland, OR",
    milesFromCityCenter: 2.5,
  },
  {
    name: "Annie Bloom’s Books",
    address: "597 Alberta St",
    city: "Portland, OR",
    milesFromCityCenter: 3.1,
  },
];

export const NO_MATCH_PROMPTS = [
  "Hmm, I couldn't find any bookstores near that location. Want to try another area?",
  "Looks like there aren’t any bookstores nearby. Maybe expand the search radius?",
  "Oops! No results came up. Would you like to search in a different location?",
  "I couldn't find any bookstores there. Want to try searching somewhere else?",
  "No bookstores nearby, but I can help you find one in a different city. Where else should I look?",
  "That location seems a bit quiet for bookstores. Want to widen the search?",
  "I checked, but no bookstores popped up. Try a different area or a larger radius?",
  "Uh-oh, nothing in that area. How about looking in a nearby city?",
  "I didn't find any results. Maybe we should check a different neighborhood?",
  "No bookstores found there! Should I look in a bigger area or a different place?",
];

export const RESULT_PROMPTS = [
  "I've found {numResults} bookstores near {location}! Here are the top {actualResultToReturn} {miles} miles within:",
  "Great news! There are {numResults} bookstores near {location}. Here are the closest ones {miles} miles within:",
  "I found {numResults} bookstores in {location}. Here are {actualResultToReturn} of them {miles} miles within:",
  "You're in luck! There are {numResults} bookstores nearby. The top ones are {miles} miles within:",
  "Here are {actualResultToReturn} bookstores near {location} {miles} miles within: Want more options?",
  "Found {numResults} bookstores! Check out these first {miles} miles within:",
  "Good news! {numResults} bookstores are in your area. Here are {actualResultToReturn} {miles} miles within:",
  "I’ve located {numResults} bookstores for you. Here are the best ones {miles} miles within:",
  "I found bookstores nearby! The closest ones are {miles} miles within:",
  "Looks like there are {numResults} bookstores near {location}. The top picks {miles} miles within:",
];
