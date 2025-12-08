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
  { 
    id: 'japan', name: 'Japan', continent: 'asia', capital: 'Tokyo', bestTime: 'March to May, September to November', costRange: '$100-200/day', 
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', 
    description: 'Land of the rising sun with ancient temples, modern cities, and cherry blossoms.', 
    attractions: [
      { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400', usp: 'World\'s largest metropolitan area with neon lights & anime culture' },
      { name: 'Kyoto', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400', usp: 'Ancient capital with 2000+ temples & traditional geisha districts' },
      { name: 'Mount Fuji', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400', usp: 'Japan\'s iconic sacred mountain & UNESCO World Heritage Site' },
      { name: 'Osaka', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400', usp: 'Japan\'s kitchen with street food paradise & vibrant nightlife' },
      { name: 'Hiroshima', image: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?w=400', usp: 'Peace Memorial & resilient city reborn from history' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800',
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
      'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800'
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
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'
    ]
  },
  { 
    id: 'singapore', name: 'Singapore', continent: 'asia', capital: 'Singapore', bestTime: 'February to April', costRange: '$100-200/day', 
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800', 
    description: 'Garden city with futuristic architecture and diverse culture.', 
    attractions: [
      { name: 'Marina Bay', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400', usp: 'Iconic skyline with Marina Bay Sands & light shows' },
      { name: 'Sentosa', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400', usp: 'Resort island with Universal Studios & beaches' },
      { name: 'Gardens by the Bay', image: 'https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=400', usp: 'Futuristic Supertrees & world\'s largest glass greenhouse' },
      { name: 'Orchard Road', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400', usp: 'Premier shopping boulevard with luxury brands' },
      { name: 'Chinatown', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400', usp: 'Heritage district with temples & hawker food' }
    ] 
  },
  { 
    id: 'vietnam', name: 'Vietnam', continent: 'asia', capital: 'Hanoi', bestTime: 'February to April', costRange: '$25-60/day', 
    image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800', 
    description: 'Beautiful landscapes from Ha Long Bay to Mekong Delta.', 
    attractions: [
      { name: 'Ha Long Bay', image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400', usp: 'UNESCO site with 1600+ limestone islands & caves' },
      { name: 'Ho Chi Minh City', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400', usp: 'Dynamic metropolis with French colonial architecture' },
      { name: 'Hanoi', image: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=400', usp: 'Ancient capital with Old Quarter & street food culture' },
      { name: 'Hoi An', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400', usp: 'Lantern-lit ancient town & tailor-made fashion' },
      { name: 'Da Nang', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400', usp: 'Coastal city with marble mountains & dragon bridge' }
    ] 
  },
  { 
    id: 'indonesia', name: 'Indonesia', continent: 'asia', capital: 'Jakarta', bestTime: 'April to October', costRange: '$30-80/day', 
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', 
    description: 'Archipelago paradise with Bali, temples, and diverse cultures.', 
    attractions: [
      { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400', usp: 'Island of Gods with temples, rice terraces & beaches' },
      { name: 'Jakarta', image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=400', usp: 'Bustling capital with museums & vibrant nightlife' },
      { name: 'Yogyakarta', image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=400', usp: 'Cultural heart with Borobudur & Prambanan temples' },
      { name: 'Komodo Island', image: 'https://images.unsplash.com/photo-1570789210967-2cac24ba7f2b?w=400', usp: 'Home of Komodo dragons & pink beaches' },
      { name: 'Raja Ampat', image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=400', usp: 'World\'s best diving with 75% of coral species' }
    ] 
  },
  { 
    id: 'malaysia', name: 'Malaysia', continent: 'asia', capital: 'Kuala Lumpur', bestTime: 'March to October', costRange: '$40-90/day', 
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800', 
    description: 'Diverse nation with modern cities, rainforests, and beaches.', 
    attractions: [
      { name: 'Kuala Lumpur', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400', usp: 'Iconic Petronas Towers & multicultural food scene' },
      { name: 'Langkawi', image: 'https://images.unsplash.com/photo-1609946860441-a51ffcf22208?w=400', usp: 'Duty-free island with sky bridge & mangroves' },
      { name: 'Penang', image: 'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?w=400', usp: 'UNESCO heritage with best street food in Asia' },
      { name: 'Borneo', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400', usp: 'Ancient rainforests with orangutans & Mount Kinabalu' },
      { name: 'Cameron Highlands', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400', usp: 'Cool hill station with tea plantations & strawberry farms' }
    ] 
  },
  { 
    id: 'uae', name: 'UAE', continent: 'asia', capital: 'Abu Dhabi', bestTime: 'November to March', costRange: '$100-250/day', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', 
    description: 'Luxury destination with Dubai\'s skyline and desert adventures.', 
    attractions: [
      { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400', usp: 'Futuristic city with world\'s tallest buildings & luxury malls' },
      { name: 'Abu Dhabi', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400', usp: 'Capital with Sheikh Zayed Mosque & Louvre museum' },
      { name: 'Burj Khalifa', image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400', usp: 'World\'s tallest building at 828m with stunning views' },
      { name: 'Palm Jumeirah', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400', usp: 'Man-made island with luxury resorts & Atlantis' },
      { name: 'Desert Safari', image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400', usp: 'Dune bashing, camel rides & Bedouin camp experience' }
    ] 
  },
  
  // Europe
  { 
    id: 'france', name: 'France', continent: 'europe', capital: 'Paris', bestTime: 'April to June, September to November', costRange: '$100-200/day', 
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', 
    description: 'Romance, art, cuisine, and the iconic Eiffel Tower.', 
    attractions: [
      { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400', usp: 'City of Love with Eiffel Tower, Louvre & cafés' },
      { name: 'Nice', image: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=400', usp: 'French Riviera gem with azure waters & promenades' },
      { name: 'Lyon', image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400', usp: 'Gastronomic capital with Renaissance architecture' },
      { name: 'Provence', image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400', usp: 'Lavender fields, vineyards & charming villages' },
      { name: 'French Riviera', image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=400', usp: 'Glamorous coastline with Cannes & Monaco' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
      'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800',
      'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800',
      'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800',
      'https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=800'
    ]
  },
  { 
    id: 'italy', name: 'Italy', continent: 'europe', capital: 'Rome', bestTime: 'April to June, September to October', costRange: '$80-180/day', 
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800', 
    description: 'Art, history, fashion, and world-famous cuisine.', 
    attractions: [
      { name: 'Rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400', usp: 'Eternal City with Colosseum, Vatican & ancient ruins' },
      { name: 'Venice', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=400', usp: 'Floating city with gondolas & romantic canals' },
      { name: 'Florence', image: 'https://images.unsplash.com/photo-1543429258-c5ca3cb3f3ca?w=400', usp: 'Renaissance art capital with Duomo & Uffizi' },
      { name: 'Milan', image: 'https://images.unsplash.com/photo-1520440229-6469a149ac59?w=400', usp: 'Fashion capital with Gothic cathedral & La Scala' },
      { name: 'Amalfi Coast', image: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=400', usp: 'Dramatic cliffside villages & Mediterranean beauty' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800',
      'https://images.unsplash.com/photo-1543429258-c5ca3cb3f3ca?w=800',
      'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800',
      'https://images.unsplash.com/photo-1520440229-6469a149ac59?w=800',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800'
    ]
  },
  { 
    id: 'spain', name: 'Spain', continent: 'europe', capital: 'Madrid', bestTime: 'March to May, September to November', costRange: '$70-150/day', 
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800', 
    description: 'Flamenco, tapas, beaches, and stunning architecture.', 
    attractions: [
      { name: 'Barcelona', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400', usp: 'Gaudí\'s masterpieces, beaches & vibrant nightlife' },
      { name: 'Madrid', image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400', usp: 'Royal Palace, Prado Museum & tapas culture' },
      { name: 'Seville', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400', usp: 'Flamenco birthplace with Alcázar & Gothic cathedral' },
      { name: 'Granada', image: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=400', usp: 'Alhambra palace & Moorish heritage' },
      { name: 'Ibiza', image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400', usp: 'World-famous party island & beautiful beaches' }
    ] 
  },
  { 
    id: 'switzerland', name: 'Switzerland', continent: 'europe', capital: 'Bern', bestTime: 'June to September', costRange: '$150-300/day', 
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800', 
    description: 'Alpine paradise with scenic trains and chocolate.', 
    attractions: [
      { name: 'Zurich', image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400', usp: 'Financial hub with Old Town & lake views' },
      { name: 'Geneva', image: 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=400', usp: 'International city with Jet d\'Eau & UN headquarters' },
      { name: 'Interlaken', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400', usp: 'Adventure capital between two stunning lakes' },
      { name: 'Lucerne', image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=400', usp: 'Medieval charm with Chapel Bridge & Mount Pilatus' },
      { name: 'Zermatt', image: 'https://images.unsplash.com/photo-1529923986776-f5e8c8e5b8e5?w=400', usp: 'Car-free village with iconic Matterhorn views' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800',
      'https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=800',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800'
    ]
  },
  { 
    id: 'greece', name: 'Greece', continent: 'europe', capital: 'Athens', bestTime: 'April to June, September to October', costRange: '$60-120/day', 
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800', 
    description: 'Ancient ruins, beautiful islands, and Mediterranean charm.', 
    attractions: [
      { name: 'Athens', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400', usp: 'Acropolis, Parthenon & birthplace of democracy' },
      { name: 'Santorini', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400', usp: 'Iconic blue domes, sunsets & volcanic beaches' },
      { name: 'Mykonos', image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=400', usp: 'Cosmopolitan island with windmills & beach clubs' },
      { name: 'Crete', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400', usp: 'Largest island with Minoan ruins & gorges' },
      { name: 'Rhodes', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400', usp: 'Medieval Old Town & ancient Colossus site' }
    ] 
  },
  { 
    id: 'uk', name: 'United Kingdom', continent: 'europe', capital: 'London', bestTime: 'May to September', costRange: '$100-200/day', 
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', 
    description: 'Royal heritage, historic castles, and vibrant cities.', 
    attractions: [
      { name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400', usp: 'Big Ben, Buckingham Palace & world-class museums' },
      { name: 'Edinburgh', image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=400', usp: 'Historic castle, Royal Mile & festival city' },
      { name: 'Oxford', image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=400', usp: 'Prestigious university & Harry Potter filming sites' },
      { name: 'Bath', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400', usp: 'Roman baths & Georgian architecture' },
      { name: 'Stonehenge', image: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?w=400', usp: 'Mysterious prehistoric monument & UNESCO site' }
    ] 
  },

  
  // North America
  { 
    id: 'usa', name: 'United States', continent: 'north-america', capital: 'Washington D.C.', bestTime: 'Varies by region', costRange: '$100-250/day', 
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800', 
    description: 'Diverse landscapes from NYC to Grand Canyon.', 
    attractions: [
      { name: 'New York', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400', usp: 'The Big Apple with Times Square, Central Park & Broadway' },
      { name: 'Los Angeles', image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400', usp: 'Hollywood, beaches & entertainment capital' },
      { name: 'Las Vegas', image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=400', usp: 'Entertainment capital with casinos & shows' },
      { name: 'San Francisco', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400', usp: 'Golden Gate Bridge, cable cars & tech hub' },
      { name: 'Miami', image: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=400', usp: 'Art Deco, beaches & Latin American vibes' }
    ] 
  },
  { 
    id: 'canada', name: 'Canada', continent: 'north-america', capital: 'Ottawa', bestTime: 'June to September', costRange: '$80-180/day', 
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800', 
    description: 'Natural beauty with Niagara Falls and Rocky Mountains.', 
    attractions: [
      { name: 'Toronto', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400', usp: 'CN Tower, multicultural food & vibrant arts scene' },
      { name: 'Vancouver', image: 'https://images.unsplash.com/photo-1559511260-66a68e7e7a8a?w=400', usp: 'Mountains meet ocean with Stanley Park' },
      { name: 'Montreal', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', usp: 'French-Canadian culture & historic Old Montreal' },
      { name: 'Banff', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400', usp: 'Rocky Mountain paradise with turquoise lakes' },
      { name: 'Niagara Falls', image: 'https://images.unsplash.com/photo-1489447068241-b3490214e879?w=400', usp: 'Iconic waterfalls on US-Canada border' }
    ] 
  },
  { 
    id: 'mexico', name: 'Mexico', continent: 'north-america', capital: 'Mexico City', bestTime: 'December to April', costRange: '$40-100/day', 
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800', 
    description: 'Ancient ruins, beaches, and vibrant culture.', 
    attractions: [
      { name: 'Cancun', image: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=400', usp: 'Caribbean beaches & Mayan Riviera gateway' },
      { name: 'Mexico City', image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400', usp: 'Historic center, museums & incredible food' },
      { name: 'Playa del Carmen', image: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=400', usp: 'Trendy beach town with 5th Avenue shopping' },
      { name: 'Tulum', image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400', usp: 'Clifftop Mayan ruins & bohemian beach vibes' },
      { name: 'Oaxaca', image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400', usp: 'Indigenous culture, mezcal & artisan crafts' }
    ] 
  },
  
  // South America
  { 
    id: 'brazil', name: 'Brazil', continent: 'south-america', capital: 'Brasília', bestTime: 'September to March', costRange: '$50-120/day', 
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800', 
    description: 'Carnival, Amazon rainforest, and stunning beaches.', 
    attractions: [
      { name: 'Rio de Janeiro', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400', usp: 'Christ the Redeemer, Copacabana & Carnival' },
      { name: 'São Paulo', image: 'https://images.unsplash.com/photo-1554168848-228452c09d60?w=400', usp: 'Largest city in South America with art & food' },
      { name: 'Amazon', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400', usp: 'World\'s largest rainforest & biodiversity hotspot' },
      { name: 'Iguazu Falls', image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400', usp: '275 waterfalls spanning Brazil-Argentina border' },
      { name: 'Salvador', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400', usp: 'Afro-Brazilian culture & colorful Pelourinho' }
    ] 
  },
  { 
    id: 'peru', name: 'Peru', continent: 'south-america', capital: 'Lima', bestTime: 'May to September', costRange: '$40-100/day', 
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800', 
    description: 'Home of Machu Picchu and ancient Incan heritage.', 
    attractions: [
      { name: 'Machu Picchu', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400', usp: 'Lost city of the Incas & New Wonder of the World' },
      { name: 'Lima', image: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=400', usp: 'Gastronomic capital with ceviche & colonial charm' },
      { name: 'Cusco', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400', usp: 'Ancient Incan capital & gateway to Machu Picchu' },
      { name: 'Sacred Valley', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400', usp: 'Incan ruins, markets & stunning Andean scenery' },
      { name: 'Lake Titicaca', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400', usp: 'World\'s highest navigable lake with floating islands' }
    ] 
  },
  { 
    id: 'argentina', name: 'Argentina', continent: 'south-america', capital: 'Buenos Aires', bestTime: 'October to April', costRange: '$40-100/day', 
    image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800', 
    description: 'Tango, wine regions, and Patagonian glaciers.', 
    attractions: [
      { name: 'Buenos Aires', image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=400', usp: 'Paris of South America with tango & steakhouses' },
      { name: 'Patagonia', image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400', usp: 'Glaciers, mountains & end-of-the-world landscapes' },
      { name: 'Mendoza', image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=400', usp: 'World-class Malbec wine region & Andes views' },
      { name: 'Iguazu Falls', image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400', usp: 'Devil\'s Throat & 275 spectacular waterfalls' },
      { name: 'Bariloche', image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=400', usp: 'Swiss-style lake district & chocolate capital' }
    ] 
  },
  
  // Africa
  { 
    id: 'south-africa', name: 'South Africa', continent: 'africa', capital: 'Pretoria', bestTime: 'May to September', costRange: '$50-150/day', 
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800', 
    description: 'Safari adventures, Cape Town, and diverse landscapes.', 
    attractions: [
      { name: 'Cape Town', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400', usp: 'Table Mountain, beaches & vibrant waterfront' },
      { name: 'Kruger National Park', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400', usp: 'Big Five safari & world-class wildlife viewing' },
      { name: 'Johannesburg', image: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=400', usp: 'Economic hub with Apartheid Museum & Soweto' },
      { name: 'Garden Route', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400', usp: 'Scenic coastal drive with forests & beaches' },
      { name: 'Durban', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400', usp: 'Golden beaches & Indian-influenced cuisine' }
    ] 
  },
  { 
    id: 'egypt', name: 'Egypt', continent: 'africa', capital: 'Cairo', bestTime: 'October to April', costRange: '$30-80/day', 
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800', 
    description: 'Ancient pyramids, Nile cruises, and pharaonic history.', 
    attractions: [
      { name: 'Cairo', image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400', usp: 'Egyptian Museum & gateway to ancient wonders' },
      { name: 'Luxor', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=400', usp: 'Valley of the Kings & Karnak Temple complex' },
      { name: 'Giza Pyramids', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400', usp: 'Last surviving Ancient Wonder & Great Sphinx' },
      { name: 'Aswan', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=400', usp: 'Nubian culture, felucca rides & Abu Simbel' },
      { name: 'Red Sea', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400', usp: 'World-class diving & coral reef paradise' }
    ] 
  },
  { 
    id: 'morocco', name: 'Morocco', continent: 'africa', capital: 'Rabat', bestTime: 'March to May, September to November', costRange: '$40-100/day', 
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800', 
    description: 'Exotic markets, Sahara desert, and colorful medinas.', 
    attractions: [
      { name: 'Marrakech', image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400', usp: 'Jemaa el-Fnaa square, souks & riads' },
      { name: 'Fes', image: 'https://images.unsplash.com/photo-1548017871-c5092f3a1e1a?w=400', usp: 'World\'s largest car-free medina & tanneries' },
      { name: 'Chefchaouen', image: 'https://images.unsplash.com/photo-1553522991-71439aa62779?w=400', usp: 'Instagram-famous blue-painted mountain town' },
      { name: 'Sahara Desert', image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400', usp: 'Camel treks, dunes & starlit desert camps' },
      { name: 'Casablanca', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=400', usp: 'Hassan II Mosque & Art Deco architecture' }
    ] 
  },
  
  // Oceania
  { 
    id: 'australia', name: 'Australia', continent: 'oceania', capital: 'Canberra', bestTime: 'September to November, March to May', costRange: '$100-200/day', 
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800', 
    description: 'Great Barrier Reef, Sydney Opera House, and outback.', 
    attractions: [
      { name: 'Sydney', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400', usp: 'Opera House, Harbour Bridge & Bondi Beach' },
      { name: 'Melbourne', image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400', usp: 'Coffee culture, street art & sports capital' },
      { name: 'Great Barrier Reef', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400', usp: 'World\'s largest coral reef system & marine life' },
      { name: 'Uluru', image: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=400', usp: 'Sacred red rock & Aboriginal cultural site' },
      { name: 'Gold Coast', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400', usp: 'Surf beaches, theme parks & nightlife' }
    ] 
  },
  { 
    id: 'new-zealand', name: 'New Zealand', continent: 'oceania', capital: 'Wellington', bestTime: 'December to February', costRange: '$80-180/day', 
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800', 
    description: 'Middle Earth landscapes with adventure sports.', 
    attractions: [
      { name: 'Queenstown', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400', usp: 'Adventure capital with bungee, skiing & scenery' },
      { name: 'Auckland', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400', usp: 'City of Sails with Sky Tower & harbors' },
      { name: 'Rotorua', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400', usp: 'Geothermal wonders & Maori culture' },
      { name: 'Milford Sound', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400', usp: 'Dramatic fjord with waterfalls & wildlife' },
      { name: 'Hobbiton', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400', usp: 'Lord of the Rings movie set & Shire experience' }
    ] 
  },
  { 
    id: 'fiji', name: 'Fiji', continent: 'oceania', capital: 'Suva', bestTime: 'May to October', costRange: '$80-200/day', 
    image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800', 
    description: 'Tropical paradise with pristine beaches and coral reefs.', 
    attractions: [
      { name: 'Nadi', image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=400', usp: 'Gateway to islands with Hindu temples & markets' },
      { name: 'Mamanuca Islands', image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=400', usp: 'Postcard-perfect islands & Cast Away filming location' },
      { name: 'Yasawa Islands', image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=400', usp: 'Remote paradise with blue lagoons & caves' },
      { name: 'Coral Coast', image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=400', usp: 'Snorkeling, diving & traditional Fijian villages' },
      { name: 'Suva', image: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=400', usp: 'Colonial capital with museums & local markets' }
    ] 
  },
]

export const getCountryById = (id) => countries.find(country => country.id === id)
export const getCountriesByContinent = (continentId) => countries.filter(country => country.continent === continentId)
