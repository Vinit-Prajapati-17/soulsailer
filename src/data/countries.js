export const continents = [
  
]

export const countries = [
  // Asia
  { 
    id: 'uae', name: 'Dubai', continent: 'asia', capital: 'Dubai', bestTime: 'November to March', costRange: '$100-250/day', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', 
    description: 'Luxury destination with futuristic skyline, desert adventures, and world-class shopping.', 
    attractions: [
      { name: 'Dubai Mall', image: '/public/international/dubai/dubaimall.jpg', usp: 'Futuristic city with world\'s tallest buildings & luxury malls' },
      { name: 'Abu Dhabi', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400', usp: 'Capital with Sheikh Zayed Mosque & Louvre museum' },
      { name: 'Burj Khalifa', image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400', usp: 'World\'s tallest building at 828m with stunning views' },
      { name: 'Palm Jumeirah', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400', usp: 'Man-made island with luxury resorts & Atlantis' },
      { name: 'Desert Safari', image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400', usp: 'Dune bashing, camel rides & Bedouin camp experience' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1512453979798you-5ea266f8880c?w=800',
      'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800',
      'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800'
    ]
  },
  { 
    id: 'vietnam', name: 'Vietnam', continent: 'asia', capital: 'Hanoi', bestTime: 'February to April', costRange: '$25-60/day', 
    image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800', 
    description: 'Beautiful landscapes from Ha Long Bay to Mekong Delta with rich culture and cuisine.', 
    attractions: [
      { name: 'Ha Long Bay', image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400', usp: 'UNESCO site with 1600+ limestone islands & caves' },
      { name: 'Ho Chi Minh City', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400', usp: 'Dynamic metropolis with French colonial architecture' },
      { name: 'Hanoi', image: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=400', usp: 'Ancient capital with Old Quarter & street food culture' },
      { name: 'Hoi An', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400', usp: 'Lantern-lit ancient town & tailor-made fashion' },
      { name: 'Da Nang', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400', usp: 'Coastal city with marble mountains & dragon bridge' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800'
    ]
  },
  { 
    id: 'thailand', name: 'Thailand', continent: 'asia', capital: 'Bangkok', bestTime: 'November to February', costRange: '$30-80/day', 
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800', 
    description: 'Land of smiles with stunning beaches, temples, and vibrant street food.', 
    attractions: [
      { name: 'Bangkok', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400', usp: 'Vibrant capital with ornate temples & legendary street food' },
      { name: 'Phuket', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400', usp: 'Thailand\'s largest island with stunning beaches & nightlife' },
      { name: 'Chiang Mai', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400', usp: 'Mountain city with 300+ temples & elephant sanctuaries' },
      { name: 'Krabi', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400', usp: 'Limestone cliffs, emerald waters & island hopping paradise' },
      { name: 'Pattaya', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400', usp: 'Beach resort city with water sports & entertainment' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800',
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800',
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800'
    ]
  },
  { 
    id: 'singapore', name: 'Singapore', continent: 'asia', capital: 'Singapore', bestTime: 'February to April', costRange: '$100-200/day', 
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800', 
    description: 'Garden city with futuristic architecture, diverse culture, and world-class attractions.', 
    attractions: [
      { name: 'Marina Bay', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400', usp: 'Iconic skyline with Marina Bay Sands & light shows' },
      { name: 'Sentosa', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400', usp: 'Resort island with Universal Studios & beaches' },
      { name: 'Gardens by the Bay', image: 'https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=400', usp: 'Futuristic Supertrees & world\'s largest glass greenhouse' },
      { name: 'Orchard Road', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400', usp: 'Premier shopping boulevard with luxury brands' },
      { name: 'Chinatown', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400', usp: 'Heritage district with temples & hawker food' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      'https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=800'
    ]
  },
  { 
    id: 'malaysia', name: 'Malaysia', continent: 'asia', capital: 'Kuala Lumpur', bestTime: 'March to October', costRange: '$40-90/day', 
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800', 
    description: 'Diverse nation with modern cities, rainforests, and beautiful beaches.', 
    attractions: [
      { name: 'Kuala Lumpur', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400', usp: 'Iconic Petronas Towers & multicultural food scene' },
      { name: 'Langkawi', image: 'https://images.unsplash.com/photo-1609946860441-a51ffcf22208?w=400', usp: 'Duty-free island with sky bridge & mangroves' },
      { name: 'Penang', image: 'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?w=400', usp: 'UNESCO heritage with best street food in Asia' },
      { name: 'Borneo', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400', usp: 'Ancient rainforests with orangutans & Mount Kinabalu' },
      { name: 'Cameron Highlands', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400', usp: 'Cool hill station with tea plantations & strawberry farms' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
      'https://images.unsplash.com/photo-1609946860441-a51ffcf22208?w=800',
      'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?w=800'
    ]
  },
  
  // Islands
  { 
    id: 'bali', name: 'Bali', continent: 'islands', capital: 'Denpasar', bestTime: 'April to October', costRange: '$30-80/day', 
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', 
    description: 'Island of Gods with stunning temples, rice terraces, beaches, and spiritual retreats.', 
    attractions: [
      { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400', usp: 'Island of Gods with temples, rice terraces & beaches' },
      { name: 'Ubud', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400', usp: 'Cultural heart with art galleries, yoga & rice paddies' },
      { name: 'Seminyak', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400', usp: 'Trendy beach area with boutiques & beach clubs' },
      { name: 'Uluwatu', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400', usp: 'Clifftop temple with stunning sunset & Kecak dance' },
      { name: 'Nusa Penida', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400', usp: 'Dramatic cliffs, crystal waters & manta rays' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800'
    ]
  },
  { 
    id: 'maldives', name: 'Maldives', continent: 'islands', capital: 'Malé', bestTime: 'November to April', costRange: '$150-500/day', 
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800', 
    description: 'Tropical paradise with overwater villas, crystal clear waters, and world-class diving.', 
    attractions: [
      { name: 'Malé', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400', usp: 'Colorful capital with fish market & Grand Friday Mosque' },
      { name: 'Overwater Villas', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400', usp: 'Iconic luxury stays with glass floor & ocean views' },
      { name: 'Coral Reefs', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400', usp: 'World-class snorkeling & diving with marine life' },
      { name: 'Sandbanks', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400', usp: 'Private picnics on pristine white sand islands' },
      { name: 'Sunset Cruises', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400', usp: 'Dolphin watching & romantic dhoni boat rides' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
    ]
  },
  { 
    id: 'andaman-nicobar', name: 'Andaman & Nicobar', continent: 'islands', capital: 'Port Blair', bestTime: 'October to May', costRange: '$50-150/day', 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', 
    description: 'Pristine Indian islands with turquoise waters, coral reefs, and colonial history.', 
    attractions: [
      { name: 'Havelock Island', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400', usp: 'Radhanagar Beach - Asia\'s best beach with pristine waters' },
      { name: 'Neil Island', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400', usp: 'Natural rock formations & peaceful beaches' },
      { name: 'Port Blair', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400', usp: 'Cellular Jail & Corbyn\'s Cove Beach' },
      { name: 'Ross Island', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400', usp: 'British colonial ruins & deer spotting' },
      { name: 'Baratang Island', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400', usp: 'Limestone caves & mangrove creeks' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'
    ]
  },
  { 
    id: 'lakshadweep', name: 'Lakshadweep', continent: 'islands', capital: 'Kavaratti', bestTime: 'October to May', costRange: '$100-300/day', 
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800', 
    description: 'India\'s coral paradise with untouched beaches, lagoons, and incredible marine life.', 
    attractions: [
      { name: 'Agatti Island', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400', usp: 'Gateway island with stunning lagoon & water sports' },
      { name: 'Bangaram Island', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400', usp: 'Uninhabited paradise with crystal clear waters' },
      { name: 'Kavaratti', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400', usp: 'Capital island with marine aquarium & mosques' },
      { name: 'Minicoy Island', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400', usp: 'Southernmost island with lighthouse & tuna fishing' },
      { name: 'Kadmat Island', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400', usp: 'Scuba diving paradise with coral reefs' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800'
    ]
  }
]

export const getCountriesByContinent = (continentId) => {
  if (continentId === 'all') return countries
  return countries.filter(country => country.continent === continentId)
}

export const getCountryById = (id) => countries.find(country => country.id === id)