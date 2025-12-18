export const itineraries = {
  // ==================== NORTH INDIA ====================
  
  'jammu-kashmir': {
    name: 'Jammu & Kashmir',
    image: '/Banner/Jammu.png',
    itineraries: [
      {
        days: 5,
        title: 'Kashmir Paradise Experience',
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800',
        highlights: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
        description: 'Experience the breathtaking beauty of Kashmir Valley with houseboats, gondola rides, and pristine meadows.',
        inclusions: ['Houseboat stay', 'Shikara rides', 'Gondola tickets', 'All transfers', 'Breakfast & Dinner'],
        schedule: [
          { day: 1, title: 'Srinagar Arrival', activities: ['Airport pickup', 'Dal Lake Shikara ride', 'Mughal Gardens tour - Nishat & Shalimar Bagh', 'Houseboat check-in', 'Evening at leisure on Dal Lake'], photo: '/soulsailer/Famous Places/J&K/Shrinagar.jpg' },
          { day: 2, title: 'Gulmarg Adventure', activities: ['Drive to Gulmarg (2.5 hrs)', 'Gondola Phase 1 to Kongdoori', 'Gondola Phase 2 to Apharwat Peak (optional)', 'Snow activities & photography', 'Return to Srinagar'], photo: '/soulsailer/Famous Places/J&K/Gulmarg.jpg' },
          { day: 3, title: 'Pahalgam Nature', activities: ['Drive to Pahalgam (3 hrs)', 'Betaab Valley visit', 'Aru Valley exploration', 'Chandanwari viewpoint', 'Lidder River walk', 'Overnight in Pahalgam'], photo: '/soulsailer/Famous Places/J&K/Pahalgam.jpg' },
          { day: 4, title: 'Sonmarg Glacier', activities: ['Drive to Sonmarg (3 hrs)', 'Thajiwas Glacier trek', 'Zero Point visit (subject to weather)', 'Scenic photography', 'Return to Srinagar'], photo: '/soulsailer/Famous Places/J&K/sonamrg.jpg' },
          { day: 5, title: 'Srinagar Heritage & Departure', activities: ['Old City heritage walk', 'Jama Masjid visit', 'Hazratbal Shrine', 'Pashmina & handicraft shopping', 'Airport drop'], photo: '/soulsailer/Famous Places/J&K/Shrinagar.jpg' }
        ]
      },
      {
        days: 7,
        title: 'Kashmir & Ladakh Gateway',
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800',
        highlights: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Kargil', 'Drass'],
        description: 'Extended journey covering Kashmir Valley and the historic Kargil region with war memorials and monasteries.',
        inclusions: ['Hotels & Houseboat', 'All meals', 'Gondola tickets', 'War memorial entry', 'Expert guide', 'All transfers'],
        schedule: [
          { day: 1, title: 'Srinagar Welcome', activities: ['Airport pickup', 'Dal Lake Shikara ride', 'Mughal Gardens', 'Shankaracharya Temple sunset', 'Houseboat dinner'], photo: '/soulsailer/Famous Places/J&K/Shrinagar.jpg' },
          { day: 2, title: 'Gulmarg Snow Paradise', activities: ['Drive to Gulmarg', 'Gondola ride to Apharwat', 'Snow activities', 'Golf course visit', 'Strawberry Valley', 'Return to Srinagar'], photo: '/soulsailer/Famous Places/J&K/Gulmarg.jpg' },
          { day: 3, title: 'Pahalgam Valley', activities: ['Scenic drive to Pahalgam', 'Betaab Valley', 'Aru Valley', 'Horse riding to Baisaran', 'Overnight in Pahalgam'], photo: '/soulsailer/Famous Places/J&K/Pahalgam.jpg' },
          { day: 4, title: 'Sonmarg Golden Meadow', activities: ['Drive to Sonmarg', 'Thajiwas Glacier trek', 'Zero Point excursion', 'Mountain photography', 'Return to Srinagar'], photo: '/soulsailer/Famous Places/J&K/sonamrg.jpg' },
          { day: 5, title: 'Srinagar to Kargil', activities: ['Early morning departure', 'Zoji La Pass crossing', 'Drass War Memorial visit', 'Kargil town exploration', 'Overnight in Kargil'], photo: '/soulsailer/Famous Places/J&K/Leh.jpg' },
          { day: 6, title: 'Kargil Heritage', activities: ['Mulbekh Monastery', 'Suru Valley viewpoint', 'Local markets', 'Kargil War history tour', 'Mountain photography'], photo: '/soulsailer/Famous Places/J&K/Leh.jpg' },
          { day: 7, title: 'Return & Departure', activities: ['Scenic drive back to Srinagar', 'Last minute shopping at Lal Chowk', 'Dry fruit shopping', 'Airport drop'], photo: '/soulsailer/Famous Places/J&K/Shrinagar.jpg' }
        ]
      }
    ]
  },

  'himachal-pradesh': {
    name: 'Himachal Pradesh',
    image: '/Banner/himachal.jpg',
    itineraries: [
      {
        days: 5,
        title: 'Himachal Hill Stations',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
        highlights: ['Shimla', 'Manali', 'Solang Valley', 'Rohtang'],
        description: 'Explore the queen of hills and adventure capital with colonial charm and snow-capped peaks.',
        inclusions: ['3-star hotels', 'Breakfast & Dinner', 'Volvo transfers', 'Rohtang permit', 'Sightseeing'],
        schedule: [
          { day: 1, title: 'Shimla Arrival', activities: ['Arrival at Chandigarh/Shimla', 'Mall Road evening walk', 'Christ Church visit', 'Ridge exploration', 'Scandal Point', 'Lakkar Bazaar shopping'], photo: '/soulsailer/Famous Places/Himachal/Shimla.jpg' },
          { day: 2, title: 'Shimla to Manali', activities: ['Scenic drive via Kullu Valley (8 hrs)', 'Kullu shawl factory visit', 'Naggar Castle stop', 'Arrival in Manali', 'Mall Road evening'], photo: '/soulsailer/Famous Places/Himachal/Manali.jpg' },
          { day: 3, title: 'Manali Exploration', activities: ['Hadimba Devi Temple', 'Manu Temple', 'Vashisht Hot Springs', 'Old Manali cafes', 'Tibetan Monastery', 'Club House'], photo: '/soulsailer/Famous Places/Himachal/Manali.jpg' },
          { day: 4, title: 'Solang Valley Adventure', activities: ['Solang Valley excursion', 'Paragliding (optional)', 'Zorbing & ATV rides', 'Snow activities', 'Rohtang Pass visit (seasonal)', 'Return to Manali'], photo: '/soulsailer/Famous Places/Himachal/Spiti.jpg' },
          { day: 5, title: 'Departure', activities: ['Morning at leisure', 'Last minute shopping', 'Drive to Chandigarh/Shimla', 'Departure'], photo: '/soulsailer/Famous Places/Himachal/Shimla.jpg' }
        ]
      },
      {
        days: 7,
        title: 'Complete Himachal Circuit',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
        highlights: ['Shimla', 'Manali', 'Kasol', 'Dharamshala', 'McLeod Ganj'],
        description: 'Comprehensive Himachal tour covering hill stations, adventure spots, and spiritual destinations.',
        inclusions: ['Premium hotels', 'All meals', 'Private vehicle', 'Adventure activities', 'Guide services'],
        schedule: [
          { day: 1, title: 'Shimla Heritage', activities: ['Arrival in Shimla', 'Mall Road walk', 'Christ Church', 'Jakhu Temple', 'Toy train ride (optional)', 'Colonial architecture tour'], photo: '/soulsailer/Famous Places/Himachal/Shimla.jpg' },
          { day: 2, title: 'Shimla to Manali', activities: ['Scenic drive through Kullu Valley', 'Kullu River rafting (optional)', 'Naggar Castle visit', 'Arrival in Manali evening'], photo: '/soulsailer/Famous Places/Himachal/Manali.jpg' },
          { day: 3, title: 'Manali & Solang', activities: ['Hadimba Temple', 'Solang Valley adventure', 'Snow activities', 'Paragliding', 'Old Manali exploration'], photo: '/soulsailer/Famous Places/Himachal/Manali.jpg' },
          { day: 4, title: 'Kasol & Parvati Valley', activities: ['Drive to Kasol', 'Manikaran Gurudwara & hot springs', 'Parvati Valley trek', 'Riverside camping', 'Bonfire night'], photo: '/soulsailer/Famous Places/Himachal/Kasol.jpg' },
          { day: 5, title: 'Kasol to Dharamshala', activities: ['Morning in Kasol', 'Drive to Dharamshala', 'Norbulingka Institute', 'Tea garden visit', 'Cricket stadium view'], photo: '/soulsailer/Famous Places/Himachal/Dharamshala.jpg' },
          { day: 6, title: 'McLeod Ganj', activities: ['Dalai Lama Temple Complex', 'Bhagsu Waterfall trek', 'Tibetan market shopping', 'Namgyal Monastery', 'Sunset at Naddi viewpoint'], photo: '/soulsailer/Famous Places/Himachal/Dharamshala.jpg' },
          { day: 7, title: 'Departure', activities: ['Morning meditation session', 'Last minute shopping', 'Drive to Dharamshala airport/Chandigarh', 'Departure'], photo: '/soulsailer/Famous Places/Himachal/Dharamshala.jpg' }
        ]
      }
    ]
  },

  'punjab': {
    name: 'Punjab',
    image: '/Banner/punjab.jpg',
    itineraries: [
      {
        days: 5,
        title: 'Punjab Heritage & Spirituality',
        image: 'https://images.unsplash.com/photo-1609947017136-9daf32a15f73?w=800',
        highlights: ['Amritsar', 'Wagah Border', 'Chandigarh', 'Anandpur Sahib'],
        description: 'Experience the spiritual heart of Sikhism, patriotic border ceremony, and modern city planning.',
        inclusions: ['4-star hotels', 'All meals including Langar', 'AC vehicle', 'Guide', 'Wagah Border seats'],
        schedule: [
          { day: 1, title: 'Amritsar Arrival', activities: ['Airport/Railway pickup', 'Golden Temple evening visit', 'Palki Sahib ceremony', 'Langar experience', 'Night walk around Sarovar'], photo: '/soulsailer/Famous Places/Punjab/amritsar.jpg' },
          { day: 2, title: 'Amritsar Heritage', activities: ['Golden Temple sunrise', 'Jallianwala Bagh memorial', 'Partition Museum', 'Lunch at Bharawan Da Dhaba', 'Wagah Border ceremony'], photo: '/soulsailer/Famous Places/Punjab/amritsar.jpg' },
          { day: 3, title: 'Amritsar to Chandigarh', activities: ['Morning Golden Temple visit', 'Drive to Chandigarh', 'Rock Garden exploration', 'Sukhna Lake evening', 'Sector 17 market'], photo: '/soulsailer/Famous Places/Punjab/Chandigarh.jpg' },
          { day: 4, title: 'Chandigarh & Anandpur Sahib', activities: ['Capitol Complex tour', 'Rose Garden visit', 'Drive to Anandpur Sahib', 'Virasat-e-Khalsa museum', 'Takht Sri Kesgarh Sahib'], photo: '/soulsailer/Famous Places/Punjab/Anandpur sahib.jpg' },
          { day: 5, title: 'Departure', activities: ['Morning prayers at Gurudwara', 'Return to Chandigarh', 'Last minute shopping', 'Airport/Railway drop'], photo: '/soulsailer/Famous Places/Punjab/Chandigarh.jpg' }
        ]
      },
      {
        days: 7,
        title: 'Punjab Cultural Immersion',
        image: 'https://images.unsplash.com/photo-1609947017136-9daf32a15f73?w=800',
        highlights: ['Amritsar', 'Wagah Border', 'Chandigarh', 'Patiala', 'Anandpur Sahib', 'Ludhiana'],
        description: 'Deep dive into Punjabi culture with royal palaces, spiritual sites, and authentic village experiences.',
        inclusions: ['Heritage hotels', 'All meals', 'Village visit', 'Cultural performances', 'Private guide'],
        schedule: [
          { day: 1, title: 'Amritsar Welcome', activities: ['Arrival & check-in', 'Golden Temple evening darshan', 'Palki Sahib ceremony', 'Langar dinner', 'Heritage walk'], photo: '/soulsailer/Famous Places/Punjab/amritsar.jpg' },
          { day: 2, title: 'Amritsar Exploration', activities: ['Golden Temple sunrise', 'Jallianwala Bagh', 'Partition Museum', 'Amritsari kulcha lunch', 'Wagah Border ceremony'], photo: '/soulsailer/Famous Places/Punjab/amritsar.jpg' },
          { day: 3, title: 'Amritsar to Chandigarh', activities: ['Durgiana Temple visit', 'Drive to Chandigarh', 'Rock Garden', 'Sukhna Lake boating', 'Sector 17 dinner'], photo: '/soulsailer/Famous Places/Punjab/Chandigarh.jpg' },
          { day: 4, title: 'Chandigarh City', activities: ['Capitol Complex', 'Le Corbusier Centre', 'Rose Garden', 'Museum & Art Gallery', 'Elante Mall evening'], photo: '/soulsailer/Famous Places/Punjab/Chandigarh.jpg' },
          { day: 5, title: 'Anandpur Sahib', activities: ['Drive to Anandpur Sahib', 'Virasat-e-Khalsa museum', 'Takht Sri Kesgarh Sahib', 'Naina Devi Temple', 'Return to Chandigarh'], photo: '/soulsailer/Famous Places/Punjab/Anandpur sahib.jpg' },
          { day: 6, title: 'Patiala Royal', activities: ['Drive to Patiala', 'Qila Mubarak palace', 'Sheesh Mahal', 'Baradari Gardens', 'Patiala peg experience', 'Return to Chandigarh'], photo: '/soulsailer/Famous Places/Punjab/patiala.jpg' },
          { day: 7, title: 'Departure', activities: ['Morning at leisure', 'Phulkari shopping', 'Airport/Railway drop'], photo: '/soulsailer/Famous Places/Punjab/Chandigarh.jpg' }
        ]
      }
    ]
  },

  'uttarakhand': {
    name: 'Uttarakhand',
    image: '/Banner/Uttrakhand.jpg',
    itineraries: [
      {
        days: 5,
        title: 'Uttarakhand Spiritual & Nature',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Rishikesh', 'Haridwar', 'Mussoorie', 'Nainital'],
        description: 'Combine spiritual experiences at Ganga ghats with scenic hill stations and adventure activities.',
        inclusions: ['Riverside hotels', 'Breakfast & Dinner', 'Rafting', 'Cable car tickets', 'All transfers'],
        schedule: [
          { day: 1, title: 'Haridwar Arrival', activities: ['Arrival at Dehradun/Haridwar', 'Har Ki Pauri visit', 'Mansa Devi Temple (cable car)', 'Chandi Devi Temple', 'Evening Ganga Aarti'], photo: '/soulsailer/Famous Places/UK/haridwar.jpg' },
          { day: 2, title: 'Rishikesh Adventure', activities: ['Drive to Rishikesh', 'Laxman Jhula & Ram Jhula', 'Beatles Ashram', 'River rafting (16 km)', 'Triveni Ghat Aarti'], photo: '/soulsailer/Famous Places/UK/Rishikesh.jpg' },
          { day: 3, title: 'Rishikesh to Mussoorie', activities: ['Morning yoga session', 'Drive to Mussoorie', 'Kempty Falls visit', 'Mall Road walk', 'Gun Hill sunset (cable car)'], photo: '/soulsailer/Famous Places/UK/Mussoorie.jpg' },
          { day: 4, title: 'Mussoorie to Nainital', activities: ['Camel Back Road walk', 'Drive to Nainital', 'Naini Lake boating', 'Naina Devi Temple', 'Mall Road shopping'], photo: '/soulsailer/Famous Places/UK/nainital.jpg' },
          { day: 5, title: 'Nainital & Departure', activities: ['Snow View Point (cable car)', 'Eco Cave Gardens', 'Tiffin Top trek (optional)', 'Drive to Kathgodam/Pantnagar', 'Departure'], photo: '/soulsailer/Famous Places/UK/nainital.jpg' }
        ]
      },
      {
        days: 7,
        title: 'Complete Uttarakhand',
        image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800',
        highlights: ['Rishikesh', 'Haridwar', 'Mussoorie', 'Nainital', 'Jim Corbett'],
        description: 'Ultimate Uttarakhand experience with spirituality, adventure, hill stations, and wildlife safari.',
        inclusions: ['Premium resorts', 'All meals', 'Jungle safari', 'Adventure activities', 'Yoga sessions'],
        schedule: [
          { day: 1, title: 'Haridwar Sacred', activities: ['Arrival in Haridwar', 'Har Ki Pauri', 'Mansa Devi Temple', 'Chandi Devi Temple', 'Ganga Aarti ceremony'], photo: '/soulsailer/Famous Places/UK/haridwar.jpg' },
          { day: 2, title: 'Rishikesh Yoga & Adventure', activities: ['Morning yoga at Parmarth', 'Beatles Ashram', 'Laxman Jhula', 'River rafting', 'Cliff jumping', 'Evening Aarti'], photo: '/soulsailer/Famous Places/UK/Rishikesh.jpg' },
          { day: 3, title: 'Rishikesh to Mussoorie', activities: ['Bungee jumping (optional)', 'Drive to Mussoorie', 'Kempty Falls', 'Mall Road', 'Gun Hill sunset'], photo: '/soulsailer/Famous Places/UK/Mussoorie.jpg' },
          { day: 4, title: 'Mussoorie to Nainital', activities: ['Lal Tibba viewpoint', 'Company Garden', 'Drive to Nainital', 'Naini Lake boating', 'Mall Road evening'], photo: '/soulsailer/Famous Places/UK/nainital.jpg' },
          { day: 5, title: 'Nainital Exploration', activities: ['Snow View Point', 'Eco Cave Gardens', 'Naina Peak trek', 'Bhimtal Lake visit', 'Sattal exploration'], photo: '/soulsailer/Famous Places/UK/nainital.jpg' },
          { day: 6, title: 'Jim Corbett Safari', activities: ['Drive to Jim Corbett', 'Afternoon jungle safari', 'Wildlife spotting - tigers, elephants', 'Nature walk', 'Bonfire dinner'], photo: '/soulsailer/Famous Places/UK/valley of flower.jpg' },
          { day: 7, title: 'Corbett & Departure', activities: ['Morning safari', 'Corbett Museum', 'Garjia Temple', 'Drive to Delhi/Kathgodam', 'Departure'], photo: '/soulsailer/Famous Places/UK/valley of flower.jpg' }
        ]
      }
    ]
  },

  'delhi': {
    name: 'Delhi',
    image: '/Banner/Delhi banner.png',
    itineraries: [
      {
        days: 5,
        title: 'Delhi Heritage & Culture',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
        highlights: ['Old Delhi', 'New Delhi', 'Mughal Heritage', 'Modern Delhi'],
        description: 'Explore 1000 years of history from Mughal monuments to British colonial architecture and modern India.',
        inclusions: ['4-star hotel', 'Breakfast', 'AC vehicle', 'Monument entries', 'Professional guide'],
        schedule: [
          { day: 1, title: 'Old Delhi Heritage', activities: ['Red Fort visit', 'Jama Masjid', 'Chandni Chowk food walk', 'Paranthe Wali Gali', 'Spice Market', 'Rickshaw ride'], photo: '/soulsailer/Famous Places/delhi/Red fort.jpg' },
          { day: 2, title: 'Mughal Delhi', activities: ['Humayun\'s Tomb', 'Nizamuddin Dargah', 'Lodhi Gardens walk', 'Safdarjung Tomb', 'Khan Market shopping'], photo: '/soulsailer/Famous Places/delhi/qutub minar.jpg' },
          { day: 3, title: 'New Delhi', activities: ['India Gate', 'Rashtrapati Bhavan drive-by', 'Parliament House', 'National Museum', 'Connaught Place'], photo: '/soulsailer/Famous Places/delhi/india gate.jpg' },
          { day: 4, title: 'South Delhi', activities: ['Qutub Minar complex', 'Mehrauli Archaeological Park', 'Hauz Khas Village', 'Lotus Temple', 'Dilli Haat shopping'], photo: '/soulsailer/Famous Places/delhi/qutub minar.jpg' },
          { day: 5, title: 'Spiritual Delhi & Departure', activities: ['Akshardham Temple', 'ISKCON Temple', 'Gurudwara Bangla Sahib', 'Last minute shopping', 'Airport drop'], photo: '/soulsailer/Famous Places/delhi/lotus temple.jpg' }
        ]
      },
      {
        days: 7,
        title: 'Delhi & Agra Golden Triangle',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
        highlights: ['Old Delhi', 'New Delhi', 'Agra', 'Taj Mahal', 'Fatehpur Sikri'],
        description: 'Classic Golden Triangle covering Delhi and Agra with the magnificent Taj Mahal.',
        inclusions: ['5-star hotels', 'All meals', 'Luxury vehicle', 'All entries', 'Expert historian guide'],
        schedule: [
          { day: 1, title: 'Delhi Arrival', activities: ['Airport pickup', 'Hotel check-in', 'India Gate evening', 'Connaught Place dinner', 'Welcome briefing'], photo: '/soulsailer/Famous Places/delhi/india gate.jpg' },
          { day: 2, title: 'Old Delhi', activities: ['Red Fort', 'Jama Masjid', 'Chandni Chowk', 'Raj Ghat', 'Gurudwara Sis Ganj'], photo: '/soulsailer/Famous Places/delhi/Red fort.jpg' },
          { day: 3, title: 'New Delhi & Mughal', activities: ['Humayun\'s Tomb', 'Qutub Minar', 'Lotus Temple', 'Akshardham Temple'], photo: '/soulsailer/Famous Places/delhi/qutub minar.jpg' },
          { day: 4, title: 'Delhi to Agra', activities: ['Drive to Agra (4 hrs)', 'Agra Fort visit', 'Mehtab Bagh sunset', 'Taj Mahal view', 'Mughlai dinner'], photo: '/soulsailer/Famous Places/UP/AGRA.jpg' },
          { day: 5, title: 'Taj Mahal & Fatehpur', activities: ['Taj Mahal sunrise', 'Itimad-ud-Daulah', 'Fatehpur Sikri excursion', 'Buland Darwaza', 'Marble shopping'], photo: '/soulsailer/Famous Places/UP/AGRA.jpg' },
          { day: 6, title: 'Agra to Delhi', activities: ['Morning at leisure', 'Drive back to Delhi', 'Lodhi Gardens', 'Khan Market', 'Farewell dinner'], photo: '/soulsailer/Famous Places/delhi/india gate.jpg' },
          { day: 7, title: 'Departure', activities: ['Morning at leisure', 'Last minute shopping', 'Airport drop'], photo: '/soulsailer/Famous Places/delhi/lotus temple.jpg' }
        ]
      }
    ]
  }
};


export const getAllItineraries = () => {
  return Object.entries(itineraries).map(([id, data]) => ({
    id,
    name: data.name,
    image: data.image,
    itineraries: data.itineraries
  }))
}

export const getItineraryByState = (stateId) => itineraries[stateId]