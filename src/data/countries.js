const BASE_URL = import.meta.env.BASE_URL;

export const continents = [
  
]

export const countries = [
  // Asia
  { 
    id: 'uae', name: 'Dubai', continent: 'asia', capital: 'Dubai', bestTime: 'November to March', costRange: '$100-250/day', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', 
    bannerImage: `${BASE_URL}Banner/international/dubai.jpg`,
    description: 'Luxury destination with futuristic skyline, desert adventures, and world-class shopping.', 
    attractions: [
      { name: 'Dubai Mall', image: '/soulsailer/international/dubai/dubaimall.jpg', usp: 'Futuristic city with world\'s tallest buildings & luxury malls' },
      { name: 'Abu Dhabi', image: '/soulsailer/international/dubai/abu dhabi.jpg', usp: 'Capital with Sheikh Zayed Mosque & Louvre museum' },
      { name: 'Burj Khalifa', image: '/soulsailer/international/dubai/burj-2.jpg', usp: 'World\'s tallest building at 828m with stunning views' },
      { name: 'Palm Jumeirah', image: '/soulsailer/international/dubai/palm jumeirah.jpg', usp: 'Man-made island with luxury resorts & Atlantis' },
      { name: 'Desert Safari', image: '/soulsailer/international/dubai/dessert safari.jpg', usp: 'Dune bashing, camel rides & Bedouin camp experience' }
    ],
    gallery: [
      '/soulsailer/international/dubai/dubaimall.jpg',
      '/soulsailer/international/dubai/abu dhabi.jpg',
      '/soulsailer/international/dubai/burj-2.jpg',
      '/soulsailer/international/dubai/palm jumeirah.jpg',
      '/soulsailer/international/dubai/dessert safari.jpg'
    ]
  },
  { 
    id: 'vietnam', name: 'Vietnam', continent: 'asia', capital: 'Hanoi', bestTime: 'February to April', costRange: '$25-60/day', 
    image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800', 
    bannerImage: `${BASE_URL}Banner/international/vietnam.jpg`,
    description: 'Beautiful landscapes from Ha Long Bay to Mekong Delta with rich culture and cuisine.', 
    attractions: [
      { name: 'Ha Long Bay', image: '/soulsailer/international/vietnam/ha long.jpg', usp: 'UNESCO site with 1600+ limestone islands & caves' },
      { name: 'Ho Chi Minh City', image: '/soulsailer/international/vietnam/ho chin minh.jpg', usp: 'Dynamic metropolis with French colonial architecture' },
      { name: 'Hanoi', image: '/soulsailer/international/vietnam/hanoi.jpg', usp: 'Ancient capital with Old Quarter & street food culture' },
      { name: 'Hoi An', image: '/soulsailer/international/vietnam/hoi an.jpg', usp: 'Lantern-lit ancient town & tailor-made fashion' },
      { name: 'Da Nang', image: '/soulsailer/international/vietnam/da nang.jpg', usp: 'Coastal city with marble mountains & dragon bridge' }
    ],
    gallery: [
      '/soulsailer/international/vietnam/ha long.jpg',
      '/soulsailer/international/vietnam/ho chin minh.jpg',
      '/soulsailer/international/vietnam/hanoi.jpg',
      '/soulsailer/international/vietnam/hoi an.jpg',
      '/soulsailer/international/vietnam/da nang.jpg'
    ]
  },
  { 
    id: 'thailand', name: 'Thailand', continent: 'asia', capital: 'Bangkok', bestTime: 'November to February', costRange: '$30-80/day', 
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800', 
    bannerImage: `${BASE_URL}Banner/international/thailand.jpg`,
    description: 'Land of smiles with stunning beaches, temples, and vibrant street food.', 
    attractions: [
      { name: 'Bangkok', image: '/soulsailer/international/thailand/bangkok.jpg', usp: 'Vibrant capital with ornate temples & legendary street food' },
      { name: 'Phuket', image: '/soulsailer/international/thailand/phuket.jpg', usp: 'Thailand\'s largest island with stunning beaches & nightlife' },
      { name: 'Chiang Mai', image: '/soulsailer/international/thailand/chiang mai.jpg', usp: 'Mountain city with 300+ temples & elephant sanctuaries' },
      { name: 'Krabi', image: '/soulsailer/international/thailand/krabi.jpg', usp: 'Limestone cliffs, emerald waters & island hopping paradise' },
      { name: 'Pattaya', image: '/soulsailer/international/thailand/pattaya.jpg', usp: 'Beach resort city with water sports & entertainment' }
    ],
    gallery: [
      '/soulsailer/international/thailand/bangkok.jpg',
      '/soulsailer/international/thailand/phuket.jpg',
      '/soulsailer/international/thailand/chiang mai.jpg',
      '/soulsailer/international/thailand/krabi.jpg',
      '/soulsailer/international/thailand/pattaya.jpg'
    ]
  },
  { 
    id: 'singapore', name: 'Singapore', continent: 'asia', capital: 'Singapore', bestTime: 'February to April', costRange: '$100-200/day', 
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800', 
    bannerImage: `${BASE_URL}Banner/international/singapore.jpg`,
    description: 'Garden city with futuristic architecture, diverse culture, and world-class attractions.', 
    attractions: [
      { name: 'Marina Bay', image: '/soulsailer/international/singapore/marina bay.jpg', usp: 'Iconic skyline with Marina Bay Sands & light shows' },
      { name: 'Sentosa', image: '/soulsailer/international/singapore/sentosa.jpg', usp: 'Resort island with Universal Studios & beaches' },
      { name: 'Gardens by the Bay', image: '/soulsailer/international/singapore/gardens by bay.jpg', usp: 'Futuristic Supertrees & world\'s largest glass greenhouse' },
      { name: 'Orchard Road', image: '/soulsailer/international/singapore/orchard road.jpg', usp: 'Premier shopping boulevard with luxury brands' },
      { name: 'Chinatown', image: '/soulsailer/international/singapore/china town.jpg', usp: 'Heritage district with temples & hawker food' }
    ],
    gallery: [
      '/soulsailer/international/singapore/marina bay.jpg',
      '/soulsailer/international/singapore/sentosa.jpg',
      '/soulsailer/international/singapore/gardens by bay.jpg',
      '/soulsailer/international/singapore/orchard road.jpg',
      '/soulsailer/international/singapore/china town.jpg'
    ]
  },
  { 
    id: 'malaysia', name: 'Malaysia', continent: 'asia', capital: 'Kuala Lumpur', bestTime: 'March to October', costRange: '$40-90/day', 
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800', 
    bannerImage: `${BASE_URL}Banner/international/malasiya.jpg`,
    description: 'Diverse nation with modern cities, rainforests, and beautiful beaches.', 
    attractions: [
      { name: 'Kuala Lumpur', image: '/soulsailer/international/malasiya/kuala lumpur.jpg', usp: 'Iconic Petronas Towers & multicultural food scene' },
      { name: 'Langkawi', image: '/soulsailer/international/malasiya/langkawi.jpg', usp: 'Duty-free island with sky bridge & mangroves' },
      { name: 'Penang', image: '/soulsailer/international/malasiya/penang.jpg', usp: 'UNESCO heritage with best street food in Asia' },
      { name: 'Borneo', image: '/soulsailer/international/malasiya/borneo.jpg', usp: 'Ancient rainforests with orangutans & Mount Kinabalu' },
      { name: 'Cameron Highlands', image: '/soulsailer/international/malasiya/camaron.jpg', usp: 'Cool hill station with tea plantations & strawberry farms' }
    ],
    gallery: [
      '/soulsailer/international/malasiya/kuala lumpur.jpg',
      '/soulsailer/international/malasiya/langkawi.jpg',
      '/soulsailer/international/malasiya/penang.jpg',
      '/soulsailer/international/malasiya/borneo.jpg',
      '/soulsailer/international/malasiya/camaron.jpg'
    ]
  },
  
  // Islands
  { 
    id: 'bali', name: 'Bali', continent: 'islands', capital: 'Denpasar', bestTime: 'April to October', costRange: '$30-80/day', 
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', 
    bannerImage: `${BASE_URL}Banner/international/bali.jpg`,
    description: 'Island of Gods with stunning temples, rice terraces, beaches, and spiritual retreats.', 
    attractions: [
      { name: 'Bali', image: '/soulsailer/international/bali/bali.jpg', usp: 'Island of Gods with temples, rice terraces & beaches' },
      { name: 'Ubud', image: '/soulsailer/international/bali/ubud.jpg', usp: 'Cultural heart with art galleries, yoga & rice paddies' },
      { name: 'Seminyak', image: '/soulsailer/international/bali/seminyak.jpg', usp: 'Trendy beach area with boutiques & beach clubs' },
      { name: 'Uluwatu', image: '/soulsailer/international/bali/uluwatu.jpg', usp: 'Clifftop temple with stunning sunset & Kecak dance' },
      { name: 'Nusa Penida', image: '/soulsailer/international/bali/nusa.jpg', usp: 'Dramatic cliffs, crystal waters & manta rays' }
    ],
    gallery: [
      '/soulsailer/international/bali/bali.jpg',
      '/soulsailer/international/bali/ubud.jpg',
      '/soulsailer/international/bali/seminyak.jpg',
      '/soulsailer/international/bali/uluwatu.jpg',
      '/soulsailer/international/bali/nusa.jpg'
    ]
  },
  { 
    id: 'maldives', name: 'Maldives', continent: 'islands', capital: 'Malé', bestTime: 'November to April', costRange: '$150-500/day', 
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800', 
    bannerImage: `${BASE_URL}Banner/international/maldives.jpg`,
    description: 'Tropical paradise with overwater villas, crystal clear waters, and world-class diving.', 
    attractions: [
      { name: 'Malé', image: '/soulsailer/international/maldives/male.jpeg', usp: 'Colorful capital with fish market & Grand Friday Mosque' },
      { name: 'Overwater Villas', image: '/soulsailer/international/maldives/overwatervillas.jpg', usp: 'Iconic luxury stays with glass floor & ocean views' },
      { name: 'Coral Reefs', image: '/soulsailer/international/maldives/coralreefs.jpg', usp: 'World-class snorkeling & diving with marine life' },
      { name: 'Sandbanks', image: '/soulsailer/international/maldives/sandbanks.jpg', usp: 'Private picnics on pristine white sand islands' },
      { name: 'Sunset Cruises', image: '/soulsailer/international/maldives/sunset cruise.jpeg', usp: 'Dolphin watching & romantic dhoni boat rides' }
    ],
    gallery: [
      '/soulsailer/international/maldives/male.jpeg',
      '/soulsailer/international/maldives/overwatervillas.jpg',
      '/soulsailer/international/maldives/coralreefs.jpg',
      '/soulsailer/international/maldives/sandbanks.jpg',
      '/soulsailer/international/maldives/sunset cruise.jpeg'
    ]
  },
  { 
    id: 'andaman-nicobar', name: 'Andaman & Nicobar', continent: 'islands', capital: 'Port Blair', bestTime: 'October to May', costRange: '$50-150/day', 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', 
    bannerImage: `${BASE_URL}Banner/international/Andaman.jpg`,
    description: 'Pristine Indian islands with turquoise waters, coral reefs, and colonial history.', 
    attractions: [
      { name: 'Havelock Island', image: '/soulsailer/international/andaman/havelockisland.jpg', usp: 'Radhanagar Beach - Asia\'s best beach with pristine waters' },
      { name: 'Neil Island', image: '/soulsailer/international/andaman/neilisland.jpg', usp: 'Natural rock formations & peaceful beaches' },
      { name: 'Port Blair', image: '/soulsailer/international/andaman/portblair.jpg', usp: 'Cellular Jail & Corbyn\'s Cove Beach' },
      { name: 'Ross Island', image: '/soulsailer/international/andaman/Ross-Island.jpg', usp: 'British colonial ruins & deer spotting' },
      { name: 'Baratang Island', image: '/soulsailer/international/andaman/Baratang_Island.jpg', usp: 'Limestone caves & mangrove creeks' }
    ],
    gallery: [
      '/soulsailer/international/andaman/havelockisland.jpg',
      '/soulsailer/international/andaman/neilisland.jpg',
      '/soulsailer/international/andaman/portblair.jpg',
      '/soulsailer/international/andaman/Ross-Island.jpg',
      '/soulsailer/international/andaman/Baratang_Island.jpg'
    ]
  },
  { 
    id: 'lakshadweep', name: 'Lakshadweep', continent: 'islands', capital: 'Kavaratti', bestTime: 'October to May', costRange: '$100-300/day', 
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800', 
    bannerImage: `${BASE_URL}Banner/international/lakshadweep.jpg`,
    description: 'India\'s coral paradise with untouched beaches, lagoons, and incredible marine life.', 
    attractions: [
      { name: 'Agatti Island', image: '/soulsailer/international/lakshadweep/Agatti Island.jpg', usp: 'Gateway island with stunning lagoon & water sports' },
      { name: 'Bangaram Island', image: '/soulsailer/international/lakshadweep/bangaram.jpg', usp: 'Uninhabited paradise with crystal clear waters' },
      { name: 'Kavaratti', image: '/soulsailer/international/lakshadweep/kavaratti.jpg', usp: 'Capital island with marine aquarium & mosques' },
      { name: 'Minicoy Island', image: '/soulsailer/international/lakshadweep/minicoyisland.jpg', usp: 'Southernmost island with lighthouse & tuna fishing' },
      { name: 'Kadmat Island', image: '/soulsailer/international/lakshadweep/kadmatisland.jpg', usp: 'Scuba diving paradise with coral reefs' }
    ],
    gallery: [
      '/soulsailer/international/lakshadweep/Agatti Island.jpg',
      '/soulsailer/international/lakshadweep/bangaram.jpg',
      '/soulsailer/international/lakshadweep/kavaratti.jpg',
      '/soulsailer/international/lakshadweep/minicoyisland.jpg',
      '/soulsailer/international/lakshadweep/kadmatisland.jpg'
    ]
  }
]

export const getCountriesByContinent = (continentId) => {
  if (continentId === 'all') return countries
  return countries.filter(country => country.continent === continentId)
}

export const getCountryById = (id) => countries.find(country => country.id === id)