export const continents = [
  { id: 'asia', name: 'Asia', icon: '🌏' },
  { id: 'europe', name: 'Europe', icon: '🏰' },
  { id: 'north-america', name: 'North America', icon: '🗽' },
  { id: 'south-america', name: 'South America', icon: '🌎' },
  { id: 'africa', name: 'Africa', icon: '🦁' },
  { id: 'oceania', name: 'Oceania', icon: '🏝️' },
]

export const countries = [
  // Asia
  { id: 'japan', name: 'Japan', continent: 'asia', capital: 'Tokyo', bestTime: 'March to May, September to November', costRange: '$100-200/day', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', description: 'Land of the rising sun with ancient temples, modern cities, and cherry blossoms.', attractions: ['Tokyo', 'Kyoto', 'Mount Fuji', 'Osaka', 'Hiroshima'] },
  { id: 'thailand', name: 'Thailand', continent: 'asia', capital: 'Bangkok', bestTime: 'November to February', costRange: '$30-80/day', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800', description: 'Land of smiles with stunning beaches, temples, and vibrant street food.', attractions: ['Bangkok', 'Phuket', 'Chiang Mai', 'Krabi', 'Pattaya'] },
  { id: 'singapore', name: 'Singapore', continent: 'asia', capital: 'Singapore', bestTime: 'February to April', costRange: '$100-200/day', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800', description: 'Garden city with futuristic architecture and diverse culture.', attractions: ['Marina Bay', 'Sentosa', 'Gardens by the Bay', 'Orchard Road', 'Chinatown'] },
  { id: 'vietnam', name: 'Vietnam', continent: 'asia', capital: 'Hanoi', bestTime: 'February to April', costRange: '$25-60/day', image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800', description: 'Beautiful landscapes from Ha Long Bay to Mekong Delta.', attractions: ['Ha Long Bay', 'Ho Chi Minh City', 'Hanoi', 'Hoi An', 'Da Nang'] },
  { id: 'indonesia', name: 'Indonesia', continent: 'asia', capital: 'Jakarta', bestTime: 'April to October', costRange: '$30-80/day', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', description: 'Archipelago paradise with Bali, temples, and diverse cultures.', attractions: ['Bali', 'Jakarta', 'Yogyakarta', 'Komodo Island', 'Raja Ampat'] },
  { id: 'malaysia', name: 'Malaysia', continent: 'asia', capital: 'Kuala Lumpur', bestTime: 'March to October', costRange: '$40-90/day', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800', description: 'Diverse nation with modern cities, rainforests, and beaches.', attractions: ['Kuala Lumpur', 'Langkawi', 'Penang', 'Borneo', 'Cameron Highlands'] },
  { id: 'uae', name: 'UAE', continent: 'asia', capital: 'Abu Dhabi', bestTime: 'November to March', costRange: '$100-250/day', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', description: 'Luxury destination with Dubai\'s skyline and desert adventures.', attractions: ['Dubai', 'Abu Dhabi', 'Burj Khalifa', 'Palm Jumeirah', 'Desert Safari'] },
  
  // Europe
  { id: 'france', name: 'France', continent: 'europe', capital: 'Paris', bestTime: 'April to June, September to November', costRange: '$100-200/day', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', description: 'Romance, art, cuisine, and the iconic Eiffel Tower.', attractions: ['Paris', 'Nice', 'Lyon', 'Provence', 'French Riviera'] },
  { id: 'italy', name: 'Italy', continent: 'europe', capital: 'Rome', bestTime: 'April to June, September to October', costRange: '$80-180/day', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800', description: 'Art, history, fashion, and world-famous cuisine.', attractions: ['Rome', 'Venice', 'Florence', 'Milan', 'Amalfi Coast'] },
  { id: 'spain', name: 'Spain', continent: 'europe', capital: 'Madrid', bestTime: 'March to May, September to November', costRange: '$70-150/day', image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800', description: 'Flamenco, tapas, beaches, and stunning architecture.', attractions: ['Barcelona', 'Madrid', 'Seville', 'Granada', 'Ibiza'] },
  { id: 'switzerland', name: 'Switzerland', continent: 'europe', capital: 'Bern', bestTime: 'June to September', costRange: '$150-300/day', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800', description: 'Alpine paradise with scenic trains and chocolate.', attractions: ['Zurich', 'Geneva', 'Interlaken', 'Lucerne', 'Zermatt'] },
  { id: 'greece', name: 'Greece', continent: 'europe', capital: 'Athens', bestTime: 'April to June, September to October', costRange: '$60-120/day', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800', description: 'Ancient ruins, beautiful islands, and Mediterranean charm.', attractions: ['Athens', 'Santorini', 'Mykonos', 'Crete', 'Rhodes'] },
  { id: 'uk', name: 'United Kingdom', continent: 'europe', capital: 'London', bestTime: 'May to September', costRange: '$100-200/day', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', description: 'Royal heritage, historic castles, and vibrant cities.', attractions: ['London', 'Edinburgh', 'Oxford', 'Bath', 'Stonehenge'] },

  
  // North America
  { id: 'usa', name: 'United States', continent: 'north-america', capital: 'Washington D.C.', bestTime: 'Varies by region', costRange: '$100-250/day', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800', description: 'Diverse landscapes from NYC to Grand Canyon.', attractions: ['New York', 'Los Angeles', 'Las Vegas', 'San Francisco', 'Miami'] },
  { id: 'canada', name: 'Canada', continent: 'north-america', capital: 'Ottawa', bestTime: 'June to September', costRange: '$80-180/day', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800', description: 'Natural beauty with Niagara Falls and Rocky Mountains.', attractions: ['Toronto', 'Vancouver', 'Montreal', 'Banff', 'Niagara Falls'] },
  { id: 'mexico', name: 'Mexico', continent: 'north-america', capital: 'Mexico City', bestTime: 'December to April', costRange: '$40-100/day', image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800', description: 'Ancient ruins, beaches, and vibrant culture.', attractions: ['Cancun', 'Mexico City', 'Playa del Carmen', 'Tulum', 'Oaxaca'] },
  
  // South America
  { id: 'brazil', name: 'Brazil', continent: 'south-america', capital: 'Brasília', bestTime: 'September to March', costRange: '$50-120/day', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800', description: 'Carnival, Amazon rainforest, and stunning beaches.', attractions: ['Rio de Janeiro', 'São Paulo', 'Amazon', 'Iguazu Falls', 'Salvador'] },
  { id: 'peru', name: 'Peru', continent: 'south-america', capital: 'Lima', bestTime: 'May to September', costRange: '$40-100/day', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800', description: 'Home of Machu Picchu and ancient Incan heritage.', attractions: ['Machu Picchu', 'Lima', 'Cusco', 'Sacred Valley', 'Lake Titicaca'] },
  { id: 'argentina', name: 'Argentina', continent: 'south-america', capital: 'Buenos Aires', bestTime: 'October to April', costRange: '$40-100/day', image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800', description: 'Tango, wine regions, and Patagonian glaciers.', attractions: ['Buenos Aires', 'Patagonia', 'Mendoza', 'Iguazu Falls', 'Bariloche'] },
  
  // Africa
  { id: 'south-africa', name: 'South Africa', continent: 'africa', capital: 'Pretoria', bestTime: 'May to September', costRange: '$50-150/day', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800', description: 'Safari adventures, Cape Town, and diverse landscapes.', attractions: ['Cape Town', 'Kruger National Park', 'Johannesburg', 'Garden Route', 'Durban'] },
  { id: 'egypt', name: 'Egypt', continent: 'africa', capital: 'Cairo', bestTime: 'October to April', costRange: '$30-80/day', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800', description: 'Ancient pyramids, Nile cruises, and pharaonic history.', attractions: ['Cairo', 'Luxor', 'Giza Pyramids', 'Aswan', 'Red Sea'] },
  { id: 'morocco', name: 'Morocco', continent: 'africa', capital: 'Rabat', bestTime: 'March to May, September to November', costRange: '$40-100/day', image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800', description: 'Exotic markets, Sahara desert, and colorful medinas.', attractions: ['Marrakech', 'Fes', 'Chefchaouen', 'Sahara Desert', 'Casablanca'] },
  
  // Oceania
  { id: 'australia', name: 'Australia', continent: 'oceania', capital: 'Canberra', bestTime: 'September to November, March to May', costRange: '$100-200/day', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800', description: 'Great Barrier Reef, Sydney Opera House, and outback.', attractions: ['Sydney', 'Melbourne', 'Great Barrier Reef', 'Uluru', 'Gold Coast'] },
  { id: 'new-zealand', name: 'New Zealand', continent: 'oceania', capital: 'Wellington', bestTime: 'December to February', costRange: '$80-180/day', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800', description: 'Middle Earth landscapes with adventure sports.', attractions: ['Queenstown', 'Auckland', 'Rotorua', 'Milford Sound', 'Hobbiton'] },
  { id: 'fiji', name: 'Fiji', continent: 'oceania', capital: 'Suva', bestTime: 'May to October', costRange: '$80-200/day', image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800', description: 'Tropical paradise with pristine beaches and coral reefs.', attractions: ['Nadi', 'Mamanuca Islands', 'Yasawa Islands', 'Coral Coast', 'Suva'] },
]

export const getCountryById = (id) => countries.find(country => country.id === id)
export const getCountriesByContinent = (continentId) => countries.filter(country => country.continent === continentId)
