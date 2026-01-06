const BASE_URL = import.meta.env.BASE_URL;

export const itineraries = {
  // ==================== INDIAN STATES ====================
  
  // NORTH INDIA
  'jammu-kashmir': {
    name: 'Jammu & Kashmir',
    image: `${BASE_URL}Banner/Jammu.png`,
    pdfUrl: `${BASE_URL}indiaDetails/Jammu.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Kashmir Paradise Experience',
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800',
        highlights: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
        description: 'Experience the breathtaking beauty of Kashmir Valley with houseboats, gondola rides, and pristine meadows.',
        schedule: [
          { day: 1, title: 'Srinagar Arrival', activities: ['Airport pickup', 'Dal Lake Shikara ride', 'Mughal Gardens tour', 'Houseboat check-in'] },
          { day: 2, title: 'Gulmarg Adventure', activities: ['Drive to Gulmarg', 'Gondola ride to Apharwat Peak', 'Snow activities', 'Return to Srinagar'] },
          { day: 3, title: 'Pahalgam Nature', activities: ['Drive to Pahalgam', 'Betaab Valley visit', 'Aru Valley exploration', 'Lidder River walk'] },
          { day: 4, title: 'Sonmarg Glacier', activities: ['Drive to Sonmarg', 'Thajiwas Glacier trek', 'Zero Point visit', 'Return to Srinagar'] },
          { day: 5, title: 'Departure', activities: ['Old City heritage walk', 'Handicraft shopping', 'Airport drop'] }
        ]
      }
    ]
  },

  'himachal-pradesh': {
    name: 'Himachal Pradesh',
    image: `${BASE_URL}Banner/himachal.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Himachal.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Himachal Hill Stations',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
        highlights: ['Shimla', 'Manali', 'Solang Valley', 'Rohtang'],
        description: 'Explore the queen of hills and adventure capital with colonial charm and snow-capped peaks.',
        schedule: [
          { day: 1, title: 'Shimla Arrival', activities: ['Arrival at Shimla', 'Mall Road walk', 'Christ Church visit', 'Ridge exploration'] },
          { day: 2, title: 'Shimla to Manali', activities: ['Scenic drive via Kullu Valley', 'Kullu shawl factory visit', 'Arrival in Manali'] },
          { day: 3, title: 'Manali Exploration', activities: ['Hadimba Devi Temple', 'Vashisht Hot Springs', 'Old Manali cafes', 'Tibetan Monastery'] },
          { day: 4, title: 'Solang Valley Adventure', activities: ['Solang Valley excursion', 'Paragliding', 'Snow activities', 'Rohtang Pass visit'] },
          { day: 5, title: 'Departure', activities: ['Morning at leisure', 'Shopping', 'Drive to Chandigarh'] }
        ]
      }
    ]
  },

  'punjab': {
    name: 'Punjab',
    image: `${BASE_URL}Banner/punjab.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Punjab Travel Plan.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Punjab Heritage & Spirituality',
        image: 'https://images.unsplash.com/photo-1609947017136-9daf32a15f73?w=800',
        highlights: ['Amritsar', 'Wagah Border', 'Chandigarh', 'Anandpur Sahib'],
        description: 'Experience the spiritual heart of Sikhism, patriotic border ceremony, and modern city planning.',
        schedule: [
          { day: 1, title: 'Amritsar Arrival', activities: ['Airport pickup', 'Golden Temple evening visit', 'Palki Sahib ceremony', 'Langar experience'] },
          { day: 2, title: 'Amritsar Heritage', activities: ['Golden Temple sunrise', 'Jallianwala Bagh memorial', 'Partition Museum', 'Wagah Border ceremony'] },
          { day: 3, title: 'Amritsar to Chandigarh', activities: ['Morning Golden Temple visit', 'Drive to Chandigarh', 'Rock Garden', 'Sukhna Lake'] },
          { day: 4, title: 'Chandigarh & Anandpur Sahib', activities: ['Capitol Complex tour', 'Rose Garden', 'Virasat-e-Khalsa museum', 'Takht Sri Kesgarh Sahib'] },
          { day: 5, title: 'Departure', activities: ['Morning prayers', 'Shopping', 'Airport drop'] }
        ]
      }
    ]
  },

  'uttarakhand': {
    name: 'Uttarakhand',
    image: `${BASE_URL}Banner/Uttrakhand.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Uttrakhand .pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Uttarakhand Spiritual & Nature',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Rishikesh', 'Haridwar', 'Mussoorie', 'Nainital'],
        description: 'Combine spiritual experiences at Ganga ghats with scenic hill stations and adventure activities.',
        schedule: [
          { day: 1, title: 'Haridwar Arrival', activities: ['Arrival at Haridwar', 'Har Ki Pauri visit', 'Mansa Devi Temple', 'Evening Ganga Aarti'] },
          { day: 2, title: 'Rishikesh Adventure', activities: ['Drive to Rishikesh', 'Laxman Jhula & Ram Jhula', 'Beatles Ashram', 'River rafting'] },
          { day: 3, title: 'Rishikesh to Mussoorie', activities: ['Morning yoga session', 'Drive to Mussoorie', 'Kempty Falls', 'Mall Road walk'] },
          { day: 4, title: 'Mussoorie to Nainital', activities: ['Camel Back Road walk', 'Drive to Nainital', 'Naini Lake boating', 'Mall Road shopping'] },
          { day: 5, title: 'Departure', activities: ['Snow View Point', 'Eco Cave Gardens', 'Drive to Kathgodam'] }
        ]
      }
    ]
  },

  'haryana': {
    name: 'Haryana',
    image: `${BASE_URL}Banner/Haryana.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Haryana.pdf`,
    itineraries: [
      {
        days: 3,
        title: 'Haryana Heritage Trail',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
        highlights: ['Kurukshetra', 'Panchkula', 'Sultanpur Bird Sanctuary'],
        description: 'Explore the historical land of Mahabharata with rich cultural heritage and natural beauty.',
        schedule: [
          { day: 1, title: 'Kurukshetra', activities: ['Brahma Sarovar visit', 'Krishna Museum', 'Jyotisar - birthplace of Gita', 'Sannihit Sarovar'] },
          { day: 2, title: 'Panchkula & Morni Hills', activities: ['Drive to Panchkula', 'Cactus Garden', 'Morni Hills excursion', 'Tikkar Taal Lake'] },
          { day: 3, title: 'Sultanpur & Departure', activities: ['Sultanpur Bird Sanctuary', 'Bird watching', 'Return journey'] }
        ]
      }
    ]
  },

  'delhi': {
    name: 'Delhi',
    image: `${BASE_URL}Banner/Delhi.png`,
    pdfUrl: `${BASE_URL}indiaDetails/Delhi.pdf`,
    itineraries: [
      {
        days: 3,
        title: 'Delhi Heritage & Culture',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
        highlights: ['Old Delhi', 'New Delhi', 'Mughal Heritage', 'Modern Delhi'],
        description: 'Explore 1000 years of history from Mughal monuments to British colonial architecture.',
        schedule: [
          { day: 1, title: 'Old Delhi Heritage', activities: ['Red Fort visit', 'Jama Masjid', 'Chandni Chowk food walk', 'Rickshaw ride'] },
          { day: 2, title: 'New Delhi', activities: ['India Gate', 'Rashtrapati Bhavan', 'Qutub Minar', 'Lotus Temple'] },
          { day: 3, title: 'Spiritual Delhi', activities: ['Akshardham Temple', 'ISKCON Temple', 'Gurudwara Bangla Sahib', 'Shopping'] }
        ]
      }
    ]
  },

  // SOUTH INDIA
  'kerala': {
    name: 'Kerala',
    image: `${BASE_URL}Banner/Kerala.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/kerala.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Kerala Backwaters & Hills',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
        highlights: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey'],
        description: 'Experience God\'s Own Country with backwaters, tea plantations, and wildlife.',
        schedule: [
          { day: 1, title: 'Kochi Arrival', activities: ['Airport pickup', 'Fort Kochi walk', 'Chinese Fishing Nets', 'Kathakali show'] },
          { day: 2, title: 'Kochi to Munnar', activities: ['Drive to Munnar', 'Tea plantations visit', 'Tea Museum', 'Mattupetty Dam'] },
          { day: 3, title: 'Munnar to Thekkady', activities: ['Eravikulam National Park', 'Drive to Thekkady', 'Spice plantation tour', 'Periyar Lake'] },
          { day: 4, title: 'Thekkady to Alleppey', activities: ['Morning boat ride', 'Drive to Alleppey', 'Houseboat check-in', 'Backwater cruise'] },
          { day: 5, title: 'Departure', activities: ['Morning in backwaters', 'Kochi airport drop'] }
        ]
      }
    ]
  },

  'tamil-nadu': {
    name: 'Tamil Nadu',
    image: `${BASE_URL}Banner/Tamil.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Tamil nadu.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Tamil Nadu Temple Trail',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
        highlights: ['Chennai', 'Mahabalipuram', 'Madurai', 'Rameswaram'],
        description: 'Explore ancient Dravidian temples and rich cultural heritage of Tamil Nadu.',
        schedule: [
          { day: 1, title: 'Chennai Arrival', activities: ['Airport pickup', 'Marina Beach', 'Kapaleeshwarar Temple', 'San Thome Cathedral'] },
          { day: 2, title: 'Mahabalipuram', activities: ['Shore Temple', 'Five Rathas', 'Arjuna\'s Penance', 'Beach time'] },
          { day: 3, title: 'Chennai to Madurai', activities: ['Flight to Madurai', 'Meenakshi Temple evening visit', 'Temple light show'] },
          { day: 4, title: 'Madurai to Rameswaram', activities: ['Drive to Rameswaram', 'Ramanathaswamy Temple', 'Pamban Bridge', 'Dhanushkodi'] },
          { day: 5, title: 'Departure', activities: ['Morning temple visit', 'Return to Madurai', 'Airport drop'] }
        ]
      }
    ]
  },

  'karnataka': {
    name: 'Karnataka',
    image: `${BASE_URL}Banner/Karnataka.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/karnataka.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Karnataka Heritage & Nature',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Bengaluru', 'Mysore', 'Coorg', 'Hampi'],
        description: 'From royal palaces to ancient ruins and coffee plantations.',
        schedule: [
          { day: 1, title: 'Bengaluru Arrival', activities: ['Airport pickup', 'Lalbagh Gardens', 'Cubbon Park', 'MG Road'] },
          { day: 2, title: 'Bengaluru to Mysore', activities: ['Drive to Mysore', 'Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens'] },
          { day: 3, title: 'Mysore to Coorg', activities: ['Drive to Coorg', 'Abbey Falls', 'Coffee plantation tour', 'Raja\'s Seat sunset'] },
          { day: 4, title: 'Coorg to Hampi', activities: ['Drive to Hampi', 'Virupaksha Temple', 'Vittala Temple', 'Sunset at Hemakuta Hill'] },
          { day: 5, title: 'Departure', activities: ['Hampi exploration', 'Return to Bengaluru', 'Airport drop'] }
        ]
      }
    ]
  },

  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    image: `${BASE_URL}Banner/Andhra.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Andhra pradesh.pdf`,
    itineraries: [
      {
        days: 3,
        title: 'Andhra Spiritual Journey',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
        highlights: ['Tirupati', 'Visakhapatnam', 'Araku Valley'],
        description: 'Visit the richest temple in the world and beautiful coastal regions.',
        schedule: [
          { day: 1, title: 'Tirupati', activities: ['Arrival at Tirupati', 'Tirumala Temple darshan', 'Padmavathi Temple', 'Srikalahasti Temple'] },
          { day: 2, title: 'Visakhapatnam', activities: ['Flight to Vizag', 'RK Beach', 'Submarine Museum', 'Kailasagiri'] },
          { day: 3, title: 'Araku Valley', activities: ['Drive to Araku', 'Borra Caves', 'Coffee plantations', 'Return to Vizag'] }
        ]
      }
    ]
  },

  'telangana': {
    name: 'Telangana',
    image: `${BASE_URL}Banner/Telangana.png`,
    pdfUrl: `${BASE_URL}indiaDetails/talangana.pdf`,
    itineraries: [
      {
        days: 3,
        title: 'Hyderabad Heritage',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Charminar', 'Golconda Fort', 'Ramoji Film City'],
        description: 'Explore the City of Pearls with Nizami heritage and modern attractions.',
        schedule: [
          { day: 1, title: 'Old Hyderabad', activities: ['Charminar visit', 'Laad Bazaar shopping', 'Mecca Masjid', 'Biryani lunch'] },
          { day: 2, title: 'Golconda & Museums', activities: ['Golconda Fort', 'Sound & Light show', 'Salar Jung Museum', 'Tank Bund'] },
          { day: 3, title: 'Ramoji Film City', activities: ['Full day at Ramoji Film City', 'Studio tours', 'Shows & attractions', 'Departure'] }
        ]
      }
    ]
  },

  // WEST INDIA
  'rajasthan': {
    name: 'Rajasthan',
    image: `${BASE_URL}Banner/Raj.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Rajasthan.pdf`,
    itineraries: [
      {
        days: 7,
        title: 'Royal Rajasthan Circuit',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800',
        highlights: ['Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer'],
        description: 'Experience the land of kings with majestic forts, palaces, and desert landscapes.',
        schedule: [
          { day: 1, title: 'Jaipur Arrival', activities: ['Airport pickup', 'Hawa Mahal', 'City Palace', 'Jantar Mantar'] },
          { day: 2, title: 'Jaipur Forts', activities: ['Amber Fort', 'Elephant ride', 'Nahargarh Fort', 'Jal Mahal'] },
          { day: 3, title: 'Jaipur to Jodhpur', activities: ['Drive to Jodhpur', 'Mehrangarh Fort', 'Jaswant Thada', 'Blue City walk'] },
          { day: 4, title: 'Jodhpur to Jaisalmer', activities: ['Drive to Jaisalmer', 'Jaisalmer Fort', 'Patwon Ki Haveli', 'Desert sunset'] },
          { day: 5, title: 'Jaisalmer Desert', activities: ['Sam Sand Dunes', 'Camel safari', 'Desert camp', 'Cultural performance'] },
          { day: 6, title: 'Jaisalmer to Udaipur', activities: ['Drive to Udaipur', 'City Palace', 'Lake Pichola boat ride', 'Jagdish Temple'] },
          { day: 7, title: 'Departure', activities: ['Saheliyon Ki Bari', 'Fateh Sagar Lake', 'Airport drop'] }
        ]
      }
    ]
  },

  'gujarat': {
    name: 'Gujarat',
    image: `${BASE_URL}Banner/Gujrat.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Gujarat/`,
    itineraries: [
      {
        days: 5,
        title: 'Gujarat Heritage & Wildlife',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Ahmedabad', 'Gir National Park', 'Somnath', 'Dwarka'],
        description: 'From Asiatic lions to ancient temples and vibrant culture.',
        schedule: [
          { day: 1, title: 'Ahmedabad', activities: ['Sabarmati Ashram', 'Adalaj Stepwell', 'Sidi Saiyyed Mosque', 'Law Garden market'] },
          { day: 2, title: 'Ahmedabad to Gir', activities: ['Drive to Gir', 'Afternoon safari', 'Lion spotting', 'Nature walk'] },
          { day: 3, title: 'Gir to Somnath', activities: ['Morning safari', 'Drive to Somnath', 'Somnath Temple', 'Beach sunset'] },
          { day: 4, title: 'Somnath to Dwarka', activities: ['Drive to Dwarka', 'Dwarkadhish Temple', 'Nageshwar Jyotirlinga', 'Bet Dwarka'] },
          { day: 5, title: 'Departure', activities: ['Morning aarti', 'Return to Ahmedabad', 'Airport drop'] }
        ]
      }
    ]
  },

  'maharashtra': {
    name: 'Maharashtra',
    image: `${BASE_URL}Banner/Maharashtra.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Maharashtra.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Maharashtra Highlights',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800',
        highlights: ['Mumbai', 'Pune', 'Ajanta Caves', 'Lonavala'],
        description: 'From the city of dreams to ancient caves and hill stations.',
        schedule: [
          { day: 1, title: 'Mumbai Arrival', activities: ['Gateway of India', 'Elephanta Caves', 'Marine Drive', 'Colaba Causeway'] },
          { day: 2, title: 'Mumbai Heritage', activities: ['CST Station', 'Crawford Market', 'Dhobi Ghat', 'Bandra-Worli Sea Link'] },
          { day: 3, title: 'Mumbai to Aurangabad', activities: ['Flight to Aurangabad', 'Ajanta Caves', 'Ancient Buddhist paintings', 'Return to city'] },
          { day: 4, title: 'Ellora & Pune', activities: ['Ellora Caves', 'Kailasa Temple', 'Drive to Pune', 'Shaniwar Wada'] },
          { day: 5, title: 'Lonavala & Departure', activities: ['Drive to Lonavala', 'Tiger Point', 'Bhushi Dam', 'Return to Mumbai'] }
        ]
      }
    ]
  },

  'goa': {
    name: 'Goa',
    image: `${BASE_URL}Banner/goa.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Goa.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Goa Beach & Heritage',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
        highlights: ['North Goa Beaches', 'South Goa', 'Old Goa', 'Dudhsagar Falls'],
        description: 'Beach paradise with Portuguese heritage and vibrant nightlife.',
        schedule: [
          { day: 1, title: 'North Goa Arrival', activities: ['Airport pickup', 'Calangute Beach', 'Baga Beach', 'Tito\'s Lane nightlife'] },
          { day: 2, title: 'North Goa Beaches', activities: ['Anjuna Beach', 'Vagator Beach', 'Chapora Fort', 'Flea market'] },
          { day: 3, title: 'Old Goa Heritage', activities: ['Basilica of Bom Jesus', 'Se Cathedral', 'Church of St. Francis', 'Fontainhas walk'] },
          { day: 4, title: 'South Goa', activities: ['Palolem Beach', 'Colva Beach', 'Cabo de Rama Fort', 'Sunset cruise'] },
          { day: 5, title: 'Dudhsagar & Departure', activities: ['Dudhsagar Falls trip', 'Spice plantation', 'Airport drop'] }
        ]
      }
    ]
  },

  // EAST INDIA
  'west-bengal': {
    name: 'West Bengal',
    image: `${BASE_URL}Banner/West.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/west bengal.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Bengal Culture & Hills',
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800',
        highlights: ['Kolkata', 'Darjeeling', 'Sundarbans'],
        description: 'Cultural capital with Durga Puja heritage, Darjeeling tea, and Sundarbans tigers.',
        schedule: [
          { day: 1, title: 'Kolkata Arrival', activities: ['Howrah Bridge', 'Victoria Memorial', 'Indian Museum', 'Park Street'] },
          { day: 2, title: 'Kolkata Heritage', activities: ['Dakshineswar Temple', 'Belur Math', 'Kumartuli', 'College Street'] },
          { day: 3, title: 'Kolkata to Darjeeling', activities: ['Flight to Bagdogra', 'Drive to Darjeeling', 'Mall Road walk', 'Sunset view'] },
          { day: 4, title: 'Darjeeling', activities: ['Tiger Hill sunrise', 'Batasia Loop', 'Tea garden visit', 'Toy train ride'] },
          { day: 5, title: 'Departure', activities: ['Peace Pagoda', 'Himalayan Mountaineering Institute', 'Return to Kolkata'] }
        ]
      }
    ]
  },

  'odisha': {
    name: 'Odisha',
    image: `${BASE_URL}Banner/Or.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/odisha.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Odisha Temple Trail',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Bhubaneswar', 'Puri', 'Konark', 'Chilika Lake'],
        description: 'Land of temples with Konark Sun Temple and pristine beaches.',
        schedule: [
          { day: 1, title: 'Bhubaneswar', activities: ['Lingaraj Temple', 'Mukteshwar Temple', 'Udayagiri Caves', 'Tribal Museum'] },
          { day: 2, title: 'Bhubaneswar to Puri', activities: ['Drive to Puri', 'Jagannath Temple', 'Puri Beach', 'Evening aarti'] },
          { day: 3, title: 'Konark', activities: ['Konark Sun Temple', 'Chandrabhaga Beach', 'ASI Museum', 'Return to Puri'] },
          { day: 4, title: 'Chilika Lake', activities: ['Boat ride to Chilika', 'Dolphin spotting', 'Bird watching', 'Kalijai Temple'] },
          { day: 5, title: 'Departure', activities: ['Morning beach walk', 'Shopping', 'Bhubaneswar airport drop'] }
        ]
      }
    ]
  },

  'assam': {
    name: 'Assam',
    image: `${BASE_URL}Banner/Assam.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/assam.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Assam Wildlife & Tea',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Guwahati', 'Kaziranga', 'Majuli', 'Jorhat'],
        description: 'Land of tea gardens, one-horned rhinos, and Brahmaputra.',
        schedule: [
          { day: 1, title: 'Guwahati Arrival', activities: ['Kamakhya Temple', 'Umananda Island', 'Brahmaputra cruise', 'Fancy Bazaar'] },
          { day: 2, title: 'Guwahati to Kaziranga', activities: ['Drive to Kaziranga', 'Afternoon jeep safari', 'Rhino spotting', 'Cultural show'] },
          { day: 3, title: 'Kaziranga Safari', activities: ['Elephant safari', 'Central range jeep safari', 'Bird watching', 'Tea garden visit'] },
          { day: 4, title: 'Kaziranga to Majuli', activities: ['Drive to Jorhat', 'Ferry to Majuli', 'Satras visit', 'Mask making'] },
          { day: 5, title: 'Departure', activities: ['Morning in Majuli', 'Return to Jorhat', 'Airport drop'] }
        ]
      }
    ]
  },

  // NORTHEAST INDIA
  'meghalaya': {
    name: 'Meghalaya',
    image: `${BASE_URL}Banner/Meghalaya.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/meghayalaya.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Meghalaya Cloud Walk',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Shillong', 'Cherrapunji', 'Dawki', 'Living Root Bridges'],
        description: 'Abode of clouds with living root bridges and waterfalls.',
        schedule: [
          { day: 1, title: 'Shillong Arrival', activities: ['Guwahati to Shillong drive', 'Ward\'s Lake', 'Don Bosco Museum', 'Police Bazaar'] },
          { day: 2, title: 'Cherrapunji', activities: ['Seven Sisters Falls', 'Nohkalikai Falls', 'Mawsmai Cave', 'Eco Park'] },
          { day: 3, title: 'Living Root Bridges', activities: ['Trek to Double Decker Bridge', 'Nongriat village', 'Natural pools', 'Return trek'] },
          { day: 4, title: 'Dawki & Mawlynnong', activities: ['Dawki River boating', 'India-Bangladesh border', 'Mawlynnong cleanest village', 'Living root bridge'] },
          { day: 5, title: 'Departure', activities: ['Elephant Falls', 'Shillong Peak', 'Return to Guwahati'] }
        ]
      }
    ]
  },

  'arunachal-pradesh': {
    name: 'Arunachal Pradesh',
    image: `${BASE_URL}Banner/Arunachal-2.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Arunachal Pradesh.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Arunachal Monastery Trail',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Tawang', 'Bomdila', 'Dirang', 'Sela Pass'],
        description: 'Land of rising sun with monasteries and pristine nature.',
        schedule: [
          { day: 1, title: 'Guwahati to Bomdila', activities: ['Early morning drive', 'Bhalukpong check post', 'Bomdila Monastery', 'Craft centre'] },
          { day: 2, title: 'Bomdila to Tawang', activities: ['Sela Pass crossing', 'Jaswant Garh War Memorial', 'Tawang arrival', 'Local market'] },
          { day: 3, title: 'Tawang Exploration', activities: ['Tawang Monastery', 'Urgelling Monastery', 'Tawang War Memorial', 'Local cuisine'] },
          { day: 4, title: 'Tawang to Dirang', activities: ['Madhuri Lake', 'Bumla Pass (permit)', 'Drive to Dirang', 'Hot springs'] },
          { day: 5, title: 'Departure', activities: ['Dirang Dzong', 'Apple orchards', 'Return to Guwahati'] }
        ]
      }
    ]
  },

  'sikkim': {
    name: 'Sikkim',
    image: `${BASE_URL}Banner/Sikkim.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Sikkim.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Sikkim Himalayan Paradise',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Gangtok', 'Pelling', 'Tsomgo Lake', 'Nathula Pass'],
        description: 'Himalayan paradise with monasteries and Kanchenjunga views.',
        schedule: [
          { day: 1, title: 'Gangtok Arrival', activities: ['Bagdogra to Gangtok drive', 'MG Marg walk', 'Enchey Monastery', 'Local food'] },
          { day: 2, title: 'Tsomgo & Nathula', activities: ['Tsomgo Lake', 'Nathula Pass (permit)', 'Baba Harbhajan Singh Temple', 'Return to Gangtok'] },
          { day: 3, title: 'Gangtok to Pelling', activities: ['Rumtek Monastery', 'Drive to Pelling', 'Pemayangtse Monastery', 'Rabdentse ruins'] },
          { day: 4, title: 'Pelling Exploration', activities: ['Kanchenjunga sunrise', 'Khecheopalri Lake', 'Rimbi Waterfalls', 'Skywalk'] },
          { day: 5, title: 'Departure', activities: ['Tashiding Monastery', 'Drive to Bagdogra', 'Airport drop'] }
        ]
      }
    ]
  },

  'nagaland': {
    name: 'Nagaland',
    image: `${BASE_URL}Banner/Nagaland.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Nagaland.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'Nagaland Tribal Experience',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Kohima', 'Dimapur', 'Dzukou Valley', 'Hornbill Festival'],
        description: 'Land of festivals with Hornbill Festival and tribal culture.',
        schedule: [
          { day: 1, title: 'Dimapur to Kohima', activities: ['Dimapur arrival', 'Kachari Ruins', 'Drive to Kohima', 'War Cemetery'] },
          { day: 2, title: 'Kohima Heritage', activities: ['Kohima State Museum', 'Kohima Village', 'Catholic Cathedral', 'Local market'] },
          { day: 3, title: 'Dzukou Valley Trek', activities: ['Trek to Dzukou Valley', 'Valley of flowers', 'Camping', 'Bonfire'] },
          { day: 4, title: 'Dzukou to Kohima', activities: ['Sunrise at Dzukou', 'Return trek', 'Khonoma village', 'Traditional dinner'] },
          { day: 5, title: 'Departure', activities: ['Naga Heritage Village', 'Shopping', 'Dimapur airport drop'] }
        ]
      }
    ]
  },

  'manipur': {
    name: 'Manipur',
    image: `${BASE_URL}Banner/manipur.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Manipur.pdf`,
    itineraries: [
      {
        days: 3,
        title: 'Manipur Jewel of India',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Imphal', 'Loktak Lake', 'Keibul Lamjao'],
        description: 'Jewel of India with Loktak Lake and rich dance traditions.',
        schedule: [
          { day: 1, title: 'Imphal Arrival', activities: ['Kangla Fort', 'Ima Keithel (Women\'s Market)', 'War Cemetery', 'Manipuri dance show'] },
          { day: 2, title: 'Loktak Lake', activities: ['Loktak Lake boat ride', 'Floating islands (Phumdis)', 'Keibul Lamjao National Park', 'Sangai deer spotting'] },
          { day: 3, title: 'Departure', activities: ['Shree Govindajee Temple', 'Khwairamband Bazaar', 'Airport drop'] }
        ]
      }
    ]
  },

  'mizoram': {
    name: 'Mizoram',
    image: `${BASE_URL}Banner/Mizoram.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Mizoram.pdf`,
    itineraries: [
      {
        days: 3,
        title: 'Mizoram Blue Mountains',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Aizawl', 'Reiek', 'Tam Dil Lake'],
        description: 'Land of blue mountains with scenic beauty and culture.',
        schedule: [
          { day: 1, title: 'Aizawl Arrival', activities: ['Bara Bazaar', 'Mizoram State Museum', 'Solomon\'s Temple', 'Durtlang Hills viewpoint'] },
          { day: 2, title: 'Reiek & Tam Dil', activities: ['Reiek village trek', 'Reiek Peak', 'Tam Dil Lake', 'Boating'] },
          { day: 3, title: 'Departure', activities: ['Luangmual Handicrafts Centre', 'Shopping', 'Airport drop'] }
        ]
      }
    ]
  },

  'tripura': {
    name: 'Tripura',
    image: `${BASE_URL}Banner/Tripura.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/tripura.pdf`,
    itineraries: [
      {
        days: 3,
        title: 'Tripura Royal Heritage',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Agartala', 'Ujjayanta Palace', 'Neermahal', 'Unakoti'],
        description: 'Land of palaces with Ujjayanta Palace and rock carvings.',
        schedule: [
          { day: 1, title: 'Agartala Arrival', activities: ['Ujjayanta Palace', 'State Museum', 'Jagannath Temple', 'Heritage Park'] },
          { day: 2, title: 'Neermahal & Unakoti', activities: ['Neermahal water palace', 'Boat ride', 'Drive to Unakoti', 'Rock carvings'] },
          { day: 3, title: 'Departure', activities: ['Sepahijala Wildlife Sanctuary', 'Shopping', 'Airport drop'] }
        ]
      }
    ]
  },

  // CENTRAL INDIA
  'uttar-pradesh': {
    name: 'Uttar Pradesh',
    image: `${BASE_URL}Banner/UP.jpg`,
    pdfUrl: `${BASE_URL}indiaDetails/Uttar pradesh.pdf`,
    itineraries: [
      {
        days: 5,
        title: 'UP Heritage & Spirituality',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800',
        highlights: ['Agra', 'Varanasi', 'Lucknow', 'Mathura'],
        description: 'Land of Taj Mahal, Varanasi, and spiritual heritage.',
        schedule: [
          { day: 1, title: 'Agra Arrival', activities: ['Taj Mahal sunrise', 'Agra Fort', 'Mehtab Bagh', 'Marble shopping'] },
          { day: 2, title: 'Agra to Varanasi', activities: ['Fatehpur Sikri', 'Train to Varanasi', 'Evening Ganga Aarti', 'Boat ride'] },
          { day: 3, title: 'Varanasi', activities: ['Morning boat ride', 'Ghats walk', 'Kashi Vishwanath Temple', 'Sarnath excursion'] },
          { day: 4, title: 'Varanasi to Lucknow', activities: ['Morning aarti', 'Train to Lucknow', 'Bara Imambara', 'Chota Imambara'] },
          { day: 5, title: 'Lucknow & Departure', activities: ['Rumi Darwaza', 'Hazratganj shopping', 'Tunday Kababi', 'Airport drop'] }
        ]
      }
    ]
  },

  // ==================== INTERNATIONAL DESTINATIONS ====================

  'uae': {
    name: 'Dubai',
    image: `${BASE_URL}Banner/international/dubai.jpg`,
    pdfUrl: `${BASE_URL}internationaldetails/dubai.pdf`,
    isInternational: true,
    itineraries: [
      {
        days: 5,
        title: 'Dubai Luxury Experience',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
        highlights: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari', 'Palm Jumeirah'],
        description: 'Luxury destination with futuristic skyline, desert adventures, and world-class shopping.',
        schedule: [
          { day: 1, title: 'Dubai Arrival', activities: ['Airport pickup', 'Dubai Mall', 'Burj Khalifa At The Top', 'Dubai Fountain show'] },
          { day: 2, title: 'Old Dubai', activities: ['Dubai Creek', 'Gold Souk', 'Spice Souk', 'Abra ride', 'Al Fahidi Historical District'] },
          { day: 3, title: 'Desert Safari', activities: ['Morning at leisure', 'Afternoon desert safari', 'Dune bashing', 'BBQ dinner', 'Belly dance show'] },
          { day: 4, title: 'Abu Dhabi Day Trip', activities: ['Sheikh Zayed Mosque', 'Louvre Abu Dhabi', 'Emirates Palace', 'Corniche'] },
          { day: 5, title: 'Palm & Departure', activities: ['Palm Jumeirah', 'Atlantis Aquaventure', 'Dubai Marina walk', 'Airport drop'] }
        ]
      }
    ]
  },

  'vietnam': {
    name: 'Vietnam',
    image: `${BASE_URL}Banner/international/vietnam.jpg`,
    pdfUrl: `${BASE_URL}internationaldetails/vietnam.pdf`,
    isInternational: true,
    itineraries: [
      {
        days: 7,
        title: 'Vietnam North to South',
        image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800',
        highlights: ['Hanoi', 'Ha Long Bay', 'Hoi An', 'Ho Chi Minh City'],
        description: 'Beautiful landscapes from Ha Long Bay to Mekong Delta with rich culture and cuisine.',
        schedule: [
          { day: 1, title: 'Hanoi Arrival', activities: ['Airport pickup', 'Old Quarter walk', 'Hoan Kiem Lake', 'Water puppet show'] },
          { day: 2, title: 'Hanoi Heritage', activities: ['Ho Chi Minh Mausoleum', 'Temple of Literature', 'Train Street', 'Street food tour'] },
          { day: 3, title: 'Ha Long Bay', activities: ['Drive to Ha Long', 'Cruise check-in', 'Kayaking', 'Cave exploration', 'Overnight on cruise'] },
          { day: 4, title: 'Ha Long to Da Nang', activities: ['Sunrise Tai Chi', 'Cruise activities', 'Flight to Da Nang', 'My Khe Beach'] },
          { day: 5, title: 'Hoi An', activities: ['Ancient Town walk', 'Japanese Bridge', 'Lantern making', 'Tailor shopping', 'Night market'] },
          { day: 6, title: 'Ho Chi Minh City', activities: ['Flight to HCMC', 'War Remnants Museum', 'Notre Dame Cathedral', 'Ben Thanh Market'] },
          { day: 7, title: 'Departure', activities: ['Cu Chi Tunnels', 'Mekong Delta glimpse', 'Airport drop'] }
        ]
      }
    ]
  },

  'thailand': {
    name: 'Thailand',
    image: `${BASE_URL}Banner/international/thailand.jpg`,
    pdfUrl: `${BASE_URL}internationaldetails/thailand.pdf`,
    isInternational: true,
    itineraries: [
      {
        days: 7,
        title: 'Thailand Complete',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800',
        highlights: ['Bangkok', 'Phuket', 'Phi Phi Islands', 'Chiang Mai'],
        description: 'Land of smiles with stunning beaches, temples, and vibrant street food.',
        schedule: [
          { day: 1, title: 'Bangkok Arrival', activities: ['Airport pickup', 'Khao San Road', 'Chao Phraya dinner cruise'] },
          { day: 2, title: 'Bangkok Temples', activities: ['Grand Palace', 'Wat Pho', 'Wat Arun', 'Chatuchak Market'] },
          { day: 3, title: 'Bangkok to Phuket', activities: ['Flight to Phuket', 'Patong Beach', 'Bangla Road nightlife'] },
          { day: 4, title: 'Phi Phi Islands', activities: ['Island hopping tour', 'Maya Bay', 'Snorkeling', 'Beach BBQ'] },
          { day: 5, title: 'Phuket to Chiang Mai', activities: ['Big Buddha', 'Flight to Chiang Mai', 'Night Bazaar'] },
          { day: 6, title: 'Chiang Mai', activities: ['Doi Suthep Temple', 'Elephant sanctuary', 'Old City temples', 'Cooking class'] },
          { day: 7, title: 'Departure', activities: ['Morning market', 'Last minute shopping', 'Airport drop'] }
        ]
      }
    ]
  },

  'singapore': {
    name: 'Singapore',
    image: `${BASE_URL}Banner/international/singapore.jpg`,
    pdfUrl: `${BASE_URL}internationaldetails/singapore.pdf`,
    isInternational: true,
    itineraries: [
      {
        days: 5,
        title: 'Singapore City Explorer',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
        highlights: ['Marina Bay', 'Sentosa', 'Gardens by the Bay', 'Universal Studios'],
        description: 'Garden city with futuristic architecture, diverse culture, and world-class attractions.',
        schedule: [
          { day: 1, title: 'Singapore Arrival', activities: ['Airport pickup', 'Marina Bay Sands', 'Merlion Park', 'Gardens by the Bay light show'] },
          { day: 2, title: 'Sentosa Island', activities: ['Universal Studios Singapore', 'S.E.A. Aquarium', 'Siloso Beach', 'Wings of Time show'] },
          { day: 3, title: 'Cultural Singapore', activities: ['Chinatown', 'Little India', 'Arab Street', 'Haji Lane', 'Kampong Glam'] },
          { day: 4, title: 'Nature & Shopping', activities: ['Singapore Zoo', 'Night Safari', 'Orchard Road shopping', 'ION Orchard'] },
          { day: 5, title: 'Departure', activities: ['Clarke Quay', 'Jewel Changi Airport', 'Rain Vortex', 'Departure'] }
        ]
      }
    ]
  },

  'malaysia': {
    name: 'Malaysia',
    image: `${BASE_URL}Banner/international/malasiya.jpg`,
    pdfUrl: `${BASE_URL}internationaldetails/malasiya.pdf`,
    isInternational: true,
    itineraries: [
      {
        days: 5,
        title: 'Malaysia Highlights',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
        highlights: ['Kuala Lumpur', 'Langkawi', 'Penang', 'Genting Highlands'],
        description: 'Diverse nation with modern cities, rainforests, and beautiful beaches.',
        schedule: [
          { day: 1, title: 'Kuala Lumpur Arrival', activities: ['Airport pickup', 'Petronas Towers', 'KLCC Park', 'Bukit Bintang'] },
          { day: 2, title: 'KL Heritage', activities: ['Batu Caves', 'Merdeka Square', 'Central Market', 'Jalan Alor food street'] },
          { day: 3, title: 'KL to Langkawi', activities: ['Flight to Langkawi', 'Pantai Cenang Beach', 'Underwater World', 'Sunset cruise'] },
          { day: 4, title: 'Langkawi Adventure', activities: ['Sky Bridge', 'Cable Car', 'Mangrove tour', 'Duty-free shopping'] },
          { day: 5, title: 'Departure', activities: ['Island hopping', 'Eagle Square', 'Airport drop'] }
        ]
      }
    ]
  },

  'bali': {
    name: 'Bali',
    image: `${BASE_URL}Banner/international/bali.jpg`,
    pdfUrl: `${BASE_URL}internationaldetails/bali.pdf`,
    isInternational: true,
    itineraries: [
      {
        days: 5,
        title: 'Bali Island Paradise',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
        highlights: ['Ubud', 'Seminyak', 'Uluwatu', 'Nusa Penida'],
        description: 'Island of Gods with stunning temples, rice terraces, beaches, and spiritual retreats.',
        schedule: [
          { day: 1, title: 'Bali Arrival', activities: ['Airport pickup', 'Seminyak Beach', 'Potato Head Beach Club', 'Sunset dinner'] },
          { day: 2, title: 'Ubud Culture', activities: ['Tegallalang Rice Terraces', 'Tirta Empul Temple', 'Ubud Monkey Forest', 'Art galleries'] },
          { day: 3, title: 'Uluwatu & Beaches', activities: ['Uluwatu Temple', 'Kecak Fire Dance', 'Padang Padang Beach', 'Seafood dinner'] },
          { day: 4, title: 'Nusa Penida', activities: ['Boat to Nusa Penida', 'Kelingking Beach', 'Angel\'s Billabong', 'Broken Beach', 'Return to Bali'] },
          { day: 5, title: 'Departure', activities: ['Tanah Lot Temple', 'Last minute shopping', 'Airport drop'] }
        ]
      }
    ]
  },

  'maldives': {
    name: 'Maldives',
    image: `${BASE_URL}Banner/international/maldives.jpg`,
    pdfUrl: `${BASE_URL}internationaldetails/maldives.pdf`,
    isInternational: true,
    itineraries: [
      {
        days: 5,
        title: 'Maldives Luxury Escape',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
        highlights: ['Overwater Villa', 'Snorkeling', 'Sunset Cruise', 'Spa'],
        description: 'Tropical paradise with overwater villas, crystal clear waters, and world-class diving.',
        schedule: [
          { day: 1, title: 'Maldives Arrival', activities: ['Seaplane/speedboat transfer', 'Resort check-in', 'Beach exploration', 'Welcome dinner'] },
          { day: 2, title: 'Water Activities', activities: ['Snorkeling trip', 'Coral reef exploration', 'Water sports', 'Sunset dolphin cruise'] },
          { day: 3, title: 'Island Hopping', activities: ['Local island visit', 'Sandbank picnic', 'Swimming with mantas', 'Stargazing'] },
          { day: 4, title: 'Relaxation', activities: ['Spa treatment', 'Underwater restaurant', 'Night snorkeling', 'Beach dinner'] },
          { day: 5, title: 'Departure', activities: ['Sunrise yoga', 'Last swim', 'Transfer to airport'] }
        ]
      }
    ]
  },

  'andaman-nicobar': {
    name: 'Andaman & Nicobar',
    image: `${BASE_URL}Banner/international/Andaman.jpg`,
    pdfUrl: `${BASE_URL}internationaldetails/andaman.pdf`,
    isInternational: true,
    itineraries: [
      {
        days: 5,
        title: 'Andaman Island Explorer',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        highlights: ['Port Blair', 'Havelock Island', 'Neil Island', 'Cellular Jail'],
        description: 'Pristine Indian islands with turquoise waters, coral reefs, and colonial history.',
        schedule: [
          { day: 1, title: 'Port Blair Arrival', activities: ['Airport pickup', 'Cellular Jail visit', 'Light & Sound show', 'Corbyn\'s Cove Beach'] },
          { day: 2, title: 'Havelock Island', activities: ['Ferry to Havelock', 'Radhanagar Beach', 'Sunset at beach', 'Seafood dinner'] },
          { day: 3, title: 'Havelock Activities', activities: ['Elephant Beach', 'Snorkeling', 'Scuba diving', 'Kalapathar Beach sunset'] },
          { day: 4, title: 'Neil Island', activities: ['Ferry to Neil', 'Bharatpur Beach', 'Natural Bridge', 'Laxmanpur Beach sunset'] },
          { day: 5, title: 'Departure', activities: ['Return to Port Blair', 'Ross Island', 'North Bay Island', 'Airport drop'] }
        ]
      }
    ]
  },

  'lakshadweep': {
    name: 'Lakshadweep',
    image: `${BASE_URL}Banner/international/lakshadweep.jpg`,
    pdfUrl: `${BASE_URL}internationaldetails/lakshadweep.pdf`,
    isInternational: true,
    itineraries: [
      {
        days: 5,
        title: 'Lakshadweep Coral Paradise',
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
        highlights: ['Agatti Island', 'Bangaram Island', 'Kavaratti', 'Coral Reefs'],
        description: 'India\'s coral paradise with untouched beaches, lagoons, and incredible marine life.',
        schedule: [
          { day: 1, title: 'Agatti Arrival', activities: ['Flight to Agatti', 'Lagoon exploration', 'Beach walk', 'Sunset view'] },
          { day: 2, title: 'Bangaram Island', activities: ['Boat to Bangaram', 'Snorkeling', 'Glass bottom boat', 'Beach relaxation'] },
          { day: 3, title: 'Water Sports', activities: ['Scuba diving', 'Kayaking', 'Deep sea fishing', 'Dolphin watching'] },
          { day: 4, title: 'Kavaratti', activities: ['Boat to Kavaratti', 'Marine Aquarium', 'Ujra Mosque', 'Lagoon swimming'] },
          { day: 5, title: 'Departure', activities: ['Morning swim', 'Last beach time', 'Flight to Kochi'] }
        ]
      }
    ]
  }
};


// Helper functions
export const getAllItineraries = () => {
  return Object.entries(itineraries).map(([id, data]) => ({
    id,
    name: data.name,
    image: data.image,
    pdfUrl: data.pdfUrl,
    isInternational: data.isInternational || false,
    itineraries: data.itineraries
  }));
};

export const getIndianItineraries = () => {
  return Object.entries(itineraries)
    .filter(([_, data]) => !data.isInternational)
    .map(([id, data]) => ({
      id,
      name: data.name,
      image: data.image,
      pdfUrl: data.pdfUrl,
      itineraries: data.itineraries
    }));
};

export const getInternationalItineraries = () => {
  return Object.entries(itineraries)
    .filter(([_, data]) => data.isInternational)
    .map(([id, data]) => ({
      id,
      name: data.name,
      image: data.image,
      pdfUrl: data.pdfUrl,
      itineraries: data.itineraries
    }));
};

export const getItineraryByState = (stateId) => itineraries[stateId];

export const getItineraryById = (id) => itineraries[id];
