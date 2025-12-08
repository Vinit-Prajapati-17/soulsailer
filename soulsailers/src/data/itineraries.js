export const itineraries = {
  // NORTH INDIA
  'jammu-kashmir': {
    name: 'Jammu & Kashmir',
    itineraries: [
      {
        days: 1,
        title: 'Srinagar Day Trip',
        highlights: ['Dal Lake', 'Mughal Gardens', 'Shikara Ride'],
        schedule: [
          { time: '6:00 AM', activity: 'Sunrise Shikara ride on Dal Lake', tip: 'Book in advance for best rates' },
          { time: '9:00 AM', activity: 'Visit Nishat Bagh (Garden of Delight)', tip: 'Best views of Dal Lake' },
          { time: '11:00 AM', activity: 'Explore Shalimar Bagh', tip: 'Mughal architecture at its finest' },
          { time: '1:00 PM', activity: 'Lunch at Ahdoos - Wazwan cuisine', tip: 'Try Rogan Josh and Gushtaba' },
          { time: '3:00 PM', activity: 'Hazratbal Shrine visit', tip: 'Peaceful lakeside mosque' },
          { time: '5:00 PM', activity: 'Shopping at Lal Chowk', tip: 'Buy Pashmina shawls and dry fruits' },
        ]
      },
      {
        days: 3,
        title: 'Kashmir Valley Explorer',
        highlights: ['Srinagar', 'Gulmarg', 'Pahalgam'],
        schedule: [
          { day: 1, title: 'Srinagar', activities: ['Dal Lake Shikara ride', 'Mughal Gardens tour', 'Shankaracharya Temple', 'Houseboat stay'] },
          { day: 2, title: 'Gulmarg', activities: ['Drive to Gulmarg', 'Gondola ride to Kongdoori', 'Snow activities', 'Return to Srinagar'] },
          { day: 3, title: 'Pahalgam', activities: ['Drive to Pahalgam', 'Betaab Valley', 'Aru Valley', 'Lidder River walk'] },
        ]
      },
      {
        days: 5,
        title: 'Complete Kashmir Experience',
        highlights: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
        schedule: [
          { day: 1, title: 'Srinagar Arrival', activities: ['Dal Lake Shikara ride', 'Mughal Gardens', 'Local market exploration'] },
          { day: 2, title: 'Gulmarg Adventure', activities: ['Gondola ride', 'Snow activities', 'Golf course visit', 'Strawberry Valley'] },
          { day: 3, title: 'Pahalgam Nature', activities: ['Betaab Valley', 'Aru Valley', 'Chandanwari', 'River rafting'] },
          { day: 4, title: 'Sonmarg Glacier', activities: ['Thajiwas Glacier trek', 'Zero Point visit', 'Scenic photography'] },
          { day: 5, title: 'Srinagar Heritage', activities: ['Old City walk', 'Jama Masjid', 'Handicraft shopping', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Kashmir & Ladakh Gateway',
        highlights: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Kargil'],
        schedule: [
          { day: 1, title: 'Srinagar', activities: ['Dal Lake', 'Mughal Gardens', 'Houseboat experience'] },
          { day: 2, title: 'Gulmarg', activities: ['Gondola ride', 'Snow activities', 'Scenic walks'] },
          { day: 3, title: 'Pahalgam', activities: ['Betaab Valley', 'Aru Valley', 'Horse riding'] },
          { day: 4, title: 'Sonmarg', activities: ['Thajiwas Glacier', 'Zero Point', 'Mountain views'] },
          { day: 5, title: 'Sonmarg to Kargil', activities: ['Zoji La Pass', 'Drass War Memorial', 'Kargil town'] },
          { day: 6, title: 'Kargil Exploration', activities: ['Mulbekh Monastery', 'Local markets', 'Mountain photography'] },
          { day: 7, title: 'Return to Srinagar', activities: ['Scenic drive back', 'Last minute shopping', 'Departure'] },
        ]
      }
    ]
  },

  'himachal-pradesh': {
    name: 'Himachal Pradesh',
    itineraries: [
      {
        days: 1,
        title: 'Shimla Heritage Walk',
        highlights: ['Mall Road', 'Ridge', 'Christ Church', 'Jakhu Temple'],
        schedule: [
          { time: '7:00 AM', activity: 'Sunrise at Jakhu Temple', tip: 'Watch out for monkeys' },
          { time: '9:00 AM', activity: 'Breakfast at Indian Coffee House', tip: 'Historic cafe experience' },
          { time: '10:00 AM', activity: 'Christ Church & Ridge walk', tip: 'Best colonial architecture' },
          { time: '12:00 PM', activity: 'Mall Road shopping', tip: 'Buy Himachali shawls' },
          { time: '2:00 PM', activity: 'Lunch at Cafe Simla Times', tip: 'Try local Siddu' },
          { time: '4:00 PM', activity: 'Toy Train ride to Summer Hill', tip: 'UNESCO heritage experience' },
        ]
      },
      {
        days: 3,
        title: 'Shimla-Manali Express',
        highlights: ['Shimla', 'Kullu', 'Manali'],
        schedule: [
          { day: 1, title: 'Shimla', activities: ['Mall Road', 'Ridge', 'Christ Church', 'Jakhu Temple', 'Kufri'] },
          { day: 2, title: 'Shimla to Manali', activities: ['Scenic drive via Kullu', 'Naggar Castle', 'Kullu shawl shopping'] },
          { day: 3, title: 'Manali', activities: ['Hadimba Temple', 'Old Manali', 'Solang Valley', 'Mall Road'] },
        ]
      },
      {
        days: 5,
        title: 'Himachal Hill Stations',
        highlights: ['Shimla', 'Manali', 'Dharamshala', 'McLeod Ganj'],
        schedule: [
          { day: 1, title: 'Shimla', activities: ['Mall Road', 'Christ Church', 'Jakhu Temple', 'Toy train'] },
          { day: 2, title: 'Manali', activities: ['Drive to Manali', 'Hadimba Temple', 'Old Manali cafes'] },
          { day: 3, title: 'Manali Adventure', activities: ['Solang Valley', 'Rohtang Pass', 'Adventure sports'] },
          { day: 4, title: 'Dharamshala', activities: ['Drive to Dharamshala', 'Cricket stadium', 'Tea gardens'] },
          { day: 5, title: 'McLeod Ganj', activities: ['Dalai Lama Temple', 'Bhagsu waterfall', 'Tibetan market'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Himachal Circuit',
        highlights: ['Shimla', 'Manali', 'Kasol', 'Dharamshala', 'Dalhousie'],
        schedule: [
          { day: 1, title: 'Shimla', activities: ['Mall Road', 'Ridge', 'Christ Church', 'Kufri'] },
          { day: 2, title: 'Shimla to Manali', activities: ['Scenic drive', 'Kullu Valley', 'Naggar Castle'] },
          { day: 3, title: 'Manali', activities: ['Solang Valley', 'Rohtang Pass', 'Old Manali'] },
          { day: 4, title: 'Kasol', activities: ['Parvati Valley', 'Manikaran hot springs', 'Riverside camping'] },
          { day: 5, title: 'Dharamshala', activities: ['Drive to Dharamshala', 'Norbulingka Institute', 'Tea gardens'] },
          { day: 6, title: 'McLeod Ganj', activities: ['Dalai Lama Temple', 'Triund trek', 'Tibetan culture'] },
          { day: 7, title: 'Dalhousie', activities: ['Khajjiar (Mini Switzerland)', 'Mall Road', 'Departure'] },
        ]
      }
    ]
  },

  'punjab': {
    name: 'Punjab',
    itineraries: [
      {
        days: 1,
        title: 'Amritsar Golden Day',
        highlights: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border'],
        schedule: [
          { time: '4:00 AM', activity: 'Golden Temple sunrise & Palki Sahib ceremony', tip: 'Most spiritual experience' },
          { time: '8:00 AM', activity: 'Langar (community kitchen) breakfast', tip: 'Free meal for all' },
          { time: '10:00 AM', activity: 'Jallianwala Bagh memorial', tip: 'Important historical site' },
          { time: '12:00 PM', activity: 'Lunch at Bharawan Da Dhaba', tip: 'Famous Amritsari kulcha' },
          { time: '2:00 PM', activity: 'Partition Museum visit', tip: 'Moving historical exhibits' },
          { time: '4:00 PM', activity: 'Wagah Border ceremony', tip: 'Reach early for good seats' },
        ]
      },
      {
        days: 3,
        title: 'Punjab Heritage Trail',
        highlights: ['Amritsar', 'Chandigarh', 'Patiala'],
        schedule: [
          { day: 1, title: 'Amritsar', activities: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Local food tour'] },
          { day: 2, title: 'Chandigarh', activities: ['Rock Garden', 'Sukhna Lake', 'Rose Garden', 'Sector 17 market'] },
          { day: 3, title: 'Patiala', activities: ['Qila Mubarak', 'Sheesh Mahal', 'Baradari Gardens', 'Patiala peg experience'] },
        ]
      },
      {
        days: 5,
        title: 'Complete Punjab Experience',
        highlights: ['Amritsar', 'Chandigarh', 'Patiala', 'Anandpur Sahib'],
        schedule: [
          { day: 1, title: 'Amritsar Arrival', activities: ['Golden Temple evening', 'Langar experience', 'Night walk'] },
          { day: 2, title: 'Amritsar Heritage', activities: ['Jallianwala Bagh', 'Partition Museum', 'Wagah Border'] },
          { day: 3, title: 'Chandigarh', activities: ['Rock Garden', 'Capitol Complex', 'Sukhna Lake', 'Elante Mall'] },
          { day: 4, title: 'Anandpur Sahib', activities: ['Takht Sri Kesgarh Sahib', 'Virasat-e-Khalsa museum', 'Naina Devi'] },
          { day: 5, title: 'Patiala', activities: ['Qila Mubarak', 'Sheesh Mahal', 'Local cuisine', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Punjab Cultural Immersion',
        highlights: ['Amritsar', 'Chandigarh', 'Patiala', 'Ludhiana', 'Anandpur Sahib'],
        schedule: [
          { day: 1, title: 'Amritsar', activities: ['Golden Temple', 'Langar', 'Heritage walk'] },
          { day: 2, title: 'Amritsar', activities: ['Jallianwala Bagh', 'Partition Museum', 'Wagah Border'] },
          { day: 3, title: 'Chandigarh', activities: ['Rock Garden', 'Capitol Complex', 'Rose Garden'] },
          { day: 4, title: 'Chandigarh', activities: ['Sukhna Lake', 'Museum & Art Gallery', 'Sector 17'] },
          { day: 5, title: 'Anandpur Sahib', activities: ['Virasat-e-Khalsa', 'Gurudwaras', 'Naina Devi Temple'] },
          { day: 6, title: 'Ludhiana', activities: ['Rural Punjab Museum', 'Textile markets', 'Lodhi Fort'] },
          { day: 7, title: 'Patiala', activities: ['Qila Mubarak', 'Sheesh Mahal', 'Departure'] },
        ]
      }
    ]
  },


  'uttarakhand': {
    name: 'Uttarakhand',
    itineraries: [
      {
        days: 1,
        title: 'Rishikesh Spiritual Day',
        highlights: ['Ganga Aarti', 'Laxman Jhula', 'Beatles Ashram'],
        schedule: [
          { time: '6:00 AM', activity: 'Yoga session at Parmarth Niketan', tip: 'Free morning yoga' },
          { time: '8:00 AM', activity: 'Breakfast at German Bakery', tip: 'Best pancakes in town' },
          { time: '10:00 AM', activity: 'Beatles Ashram exploration', tip: 'Great for photography' },
          { time: '12:00 PM', activity: 'Laxman Jhula & Ram Jhula walk', tip: 'Iconic suspension bridges' },
          { time: '2:00 PM', activity: 'Lunch at Chotiwala', tip: 'Famous vegetarian thali' },
          { time: '4:00 PM', activity: 'River rafting on Ganges', tip: 'Book 16km stretch' },
          { time: '6:30 PM', activity: 'Ganga Aarti at Triveni Ghat', tip: 'Arrive 30 mins early' },
        ]
      },
      {
        days: 3,
        title: 'Rishikesh-Haridwar Spiritual',
        highlights: ['Rishikesh', 'Haridwar', 'Mussoorie'],
        schedule: [
          { day: 1, title: 'Rishikesh', activities: ['Yoga session', 'Beatles Ashram', 'River rafting', 'Ganga Aarti'] },
          { day: 2, title: 'Haridwar', activities: ['Har Ki Pauri', 'Mansa Devi Temple', 'Chandi Devi', 'Evening Aarti'] },
          { day: 3, title: 'Mussoorie', activities: ['Kempty Falls', 'Mall Road', 'Gun Hill', 'Camel Back Road'] },
        ]
      },
      {
        days: 5,
        title: 'Uttarakhand Hill Escape',
        highlights: ['Rishikesh', 'Haridwar', 'Mussoorie', 'Nainital'],
        schedule: [
          { day: 1, title: 'Rishikesh', activities: ['Yoga', 'Beatles Ashram', 'Rafting', 'Ganga Aarti'] },
          { day: 2, title: 'Haridwar', activities: ['Har Ki Pauri', 'Temple visits', 'Evening Aarti'] },
          { day: 3, title: 'Mussoorie', activities: ['Kempty Falls', 'Mall Road', 'Gun Hill cable car'] },
          { day: 4, title: 'Nainital', activities: ['Naini Lake boating', 'Naina Devi Temple', 'Mall Road'] },
          { day: 5, title: 'Nainital', activities: ['Snow View Point', 'Eco Cave Gardens', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Uttarakhand',
        highlights: ['Rishikesh', 'Haridwar', 'Mussoorie', 'Nainital', 'Corbett'],
        schedule: [
          { day: 1, title: 'Rishikesh', activities: ['Yoga', 'Beatles Ashram', 'Laxman Jhula'] },
          { day: 2, title: 'Rishikesh', activities: ['River rafting', 'Bungee jumping', 'Ganga Aarti'] },
          { day: 3, title: 'Haridwar', activities: ['Har Ki Pauri', 'Mansa Devi', 'Evening Aarti'] },
          { day: 4, title: 'Mussoorie', activities: ['Kempty Falls', 'Mall Road', 'Gun Hill'] },
          { day: 5, title: 'Nainital', activities: ['Naini Lake', 'Naina Devi Temple', 'Mall Road'] },
          { day: 6, title: 'Jim Corbett', activities: ['Jungle safari', 'Wildlife spotting', 'Nature walk'] },
          { day: 7, title: 'Corbett', activities: ['Morning safari', 'Corbett Museum', 'Departure'] },
        ]
      }
    ]
  },

  'haryana': {
    name: 'Haryana',
    itineraries: [
      {
        days: 1,
        title: 'Kurukshetra Heritage',
        highlights: ['Brahma Sarovar', 'Krishna Museum', 'Jyotisar'],
        schedule: [
          { time: '6:00 AM', activity: 'Sunrise at Brahma Sarovar', tip: 'Sacred bathing tank' },
          { time: '8:00 AM', activity: 'Breakfast at local dhaba', tip: 'Try Haryanvi paratha' },
          { time: '10:00 AM', activity: 'Sri Krishna Museum', tip: 'Mahabharata exhibits' },
          { time: '12:00 PM', activity: 'Jyotisar - Gita birthplace', tip: 'Where Krishna preached Gita' },
          { time: '2:00 PM', activity: 'Lunch at Haveli restaurant', tip: 'Traditional thali' },
          { time: '4:00 PM', activity: 'Sannihit Sarovar', tip: 'Seven sacred rivers meet here' },
          { time: '6:00 PM', activity: 'Light & Sound show', tip: 'Mahabharata story' },
        ]
      },
      {
        days: 3,
        title: 'Haryana Heritage Circuit',
        highlights: ['Kurukshetra', 'Panchkula', 'Faridabad'],
        schedule: [
          { day: 1, title: 'Kurukshetra', activities: ['Brahma Sarovar', 'Jyotisar', 'Krishna Museum', 'Sannihit Sarovar'] },
          { day: 2, title: 'Panchkula', activities: ['Morni Hills', 'Tikkar Taal', 'Cactus Garden', 'Mansa Devi'] },
          { day: 3, title: 'Faridabad', activities: ['Surajkund', 'Badkhal Lake', 'Raja Nahar Singh Palace'] },
        ]
      },
      {
        days: 5,
        title: 'Haryana Complete Tour',
        highlights: ['Kurukshetra', 'Panchkula', 'Sultanpur', 'Faridabad', 'Gurgaon'],
        schedule: [
          { day: 1, title: 'Kurukshetra', activities: ['Brahma Sarovar', 'Jyotisar', 'Krishna Museum'] },
          { day: 2, title: 'Panchkula', activities: ['Morni Hills', 'Tikkar Taal', 'Cactus Garden'] },
          { day: 3, title: 'Sultanpur', activities: ['Bird Sanctuary', 'Nature walks', 'Bird watching'] },
          { day: 4, title: 'Faridabad', activities: ['Surajkund', 'Badkhal Lake', 'Heritage sites'] },
          { day: 5, title: 'Gurgaon', activities: ['Kingdom of Dreams', 'Cyber Hub', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Haryana Cultural Immersion',
        highlights: ['Kurukshetra', 'Panchkula', 'Sultanpur', 'Faridabad', 'Gurgaon', 'Rohtak'],
        schedule: [
          { day: 1, title: 'Kurukshetra', activities: ['Brahma Sarovar', 'Jyotisar', 'Krishna Museum'] },
          { day: 2, title: 'Kurukshetra', activities: ['Sannihit Sarovar', 'Sthaneshwar Mahadev', 'Local markets'] },
          { day: 3, title: 'Panchkula', activities: ['Morni Hills', 'Tikkar Taal', 'Nature trails'] },
          { day: 4, title: 'Sultanpur', activities: ['Bird Sanctuary', 'Photography', 'Nature walks'] },
          { day: 5, title: 'Rohtak', activities: ['Asthal Bohar', 'Tilyar Lake', 'Local culture'] },
          { day: 6, title: 'Faridabad', activities: ['Surajkund', 'Badkhal Lake', 'Heritage walk'] },
          { day: 7, title: 'Gurgaon', activities: ['Kingdom of Dreams', 'Shopping', 'Departure'] },
        ]
      }
    ]
  },

  'delhi': {
    name: 'Delhi',
    itineraries: [
      {
        days: 1,
        title: 'Delhi Heritage Walk',
        highlights: ['Red Fort', 'Jama Masjid', 'India Gate', 'Qutub Minar'],
        schedule: [
          { time: '7:00 AM', activity: 'Red Fort opening time visit', tip: 'Avoid crowds' },
          { time: '9:00 AM', activity: 'Jama Masjid & Chandni Chowk breakfast', tip: 'Try paranthe wali gali' },
          { time: '11:00 AM', activity: 'Raj Ghat - Gandhi memorial', tip: 'Peaceful tribute' },
          { time: '1:00 PM', activity: 'Lunch at Karim\'s', tip: 'Mughlai cuisine since 1913' },
          { time: '3:00 PM', activity: 'Humayun\'s Tomb', tip: 'Precursor to Taj Mahal' },
          { time: '5:00 PM', activity: 'India Gate & Rashtrapati Bhavan', tip: 'Best at sunset' },
          { time: '7:00 PM', activity: 'Qutub Minar light show', tip: 'Evening illumination' },
        ]
      },
      {
        days: 3,
        title: 'Delhi Complete Explorer',
        highlights: ['Old Delhi', 'New Delhi', 'South Delhi'],
        schedule: [
          { day: 1, title: 'Old Delhi', activities: ['Red Fort', 'Jama Masjid', 'Chandni Chowk', 'Spice Market'] },
          { day: 2, title: 'New Delhi', activities: ['India Gate', 'Rashtrapati Bhavan', 'Parliament', 'Connaught Place'] },
          { day: 3, title: 'South Delhi', activities: ['Qutub Minar', 'Lotus Temple', 'Akshardham', 'Hauz Khas'] },
        ]
      },
      {
        days: 5,
        title: 'Delhi In-Depth',
        highlights: ['Old Delhi', 'New Delhi', 'South Delhi', 'Museums', 'Markets'],
        schedule: [
          { day: 1, title: 'Old Delhi Heritage', activities: ['Red Fort', 'Jama Masjid', 'Chandni Chowk food walk'] },
          { day: 2, title: 'Mughal Delhi', activities: ['Humayun\'s Tomb', 'Nizamuddin Dargah', 'Lodhi Gardens'] },
          { day: 3, title: 'New Delhi', activities: ['India Gate', 'National Museum', 'Connaught Place'] },
          { day: 4, title: 'South Delhi', activities: ['Qutub Minar', 'Mehrauli Archaeological Park', 'Hauz Khas'] },
          { day: 5, title: 'Modern Delhi', activities: ['Akshardham', 'Lotus Temple', 'Shopping', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Delhi & NCR Complete',
        highlights: ['Old Delhi', 'New Delhi', 'South Delhi', 'Noida', 'Gurgaon'],
        schedule: [
          { day: 1, title: 'Old Delhi', activities: ['Red Fort', 'Jama Masjid', 'Chandni Chowk'] },
          { day: 2, title: 'Mughal Heritage', activities: ['Humayun\'s Tomb', 'Nizamuddin', 'Lodhi Gardens'] },
          { day: 3, title: 'New Delhi', activities: ['India Gate', 'Rashtrapati Bhavan', 'National Museum'] },
          { day: 4, title: 'South Delhi', activities: ['Qutub Minar', 'Mehrauli', 'Hauz Khas Village'] },
          { day: 5, title: 'Spiritual Delhi', activities: ['Akshardham', 'Lotus Temple', 'ISKCON Temple'] },
          { day: 6, title: 'Noida', activities: ['Worlds of Wonder', 'DLF Mall', 'Botanical Garden'] },
          { day: 7, title: 'Gurgaon', activities: ['Kingdom of Dreams', 'Cyber Hub', 'Departure'] },
        ]
      }
    ]
  },


  // SOUTH INDIA
  'kerala': {
    name: 'Kerala',
    itineraries: [
      {
        days: 1,
        title: 'Kochi Heritage Walk',
        highlights: ['Fort Kochi', 'Chinese Fishing Nets', 'Jewish Synagogue'],
        schedule: [
          { time: '6:00 AM', activity: 'Chinese Fishing Nets at sunrise', tip: 'Best photography time' },
          { time: '8:00 AM', activity: 'Breakfast at Kashi Art Cafe', tip: 'Art gallery + cafe' },
          { time: '10:00 AM', activity: 'St. Francis Church & Santa Cruz Basilica', tip: 'Vasco da Gama was buried here' },
          { time: '12:00 PM', activity: 'Mattancherry Palace & Jewish Synagogue', tip: 'Closed on Fridays & Saturdays' },
          { time: '2:00 PM', activity: 'Lunch - Kerala Sadhya', tip: 'Try at Kayees Rahmathulla' },
          { time: '4:00 PM', activity: 'Art galleries & cafes in Fort Kochi', tip: 'Street art exploration' },
          { time: '7:00 PM', activity: 'Kathakali performance', tip: 'Book at Kerala Kathakali Centre' },
        ]
      },
      {
        days: 3,
        title: 'Kerala Backwaters',
        highlights: ['Kochi', 'Alleppey', 'Kumarakom'],
        schedule: [
          { day: 1, title: 'Kochi', activities: ['Fort Kochi', 'Chinese Nets', 'Jewish Town', 'Kathakali show'] },
          { day: 2, title: 'Alleppey', activities: ['Houseboat check-in', 'Backwater cruise', 'Village visits', 'Kerala cuisine'] },
          { day: 3, title: 'Kumarakom', activities: ['Bird Sanctuary', 'Ayurvedic spa', 'Sunset cruise', 'Departure'] },
        ]
      },
      {
        days: 5,
        title: 'God\'s Own Country',
        highlights: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey'],
        schedule: [
          { day: 1, title: 'Kochi', activities: ['Fort Kochi', 'Chinese Nets', 'Kathakali show'] },
          { day: 2, title: 'Munnar', activities: ['Tea plantations', 'Eravikulam National Park', 'Tea museum'] },
          { day: 3, title: 'Munnar to Thekkady', activities: ['Spice plantations', 'Periyar boat ride', 'Elephant camp'] },
          { day: 4, title: 'Thekkady to Alleppey', activities: ['Houseboat check-in', 'Backwater cruise', 'Kerala cuisine'] },
          { day: 5, title: 'Alleppey', activities: ['Morning on backwaters', 'Marari Beach', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Kerala',
        highlights: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey', 'Kovalam', 'Trivandrum'],
        schedule: [
          { day: 1, title: 'Kochi', activities: ['Fort Kochi', 'Chinese Nets', 'Jewish Synagogue'] },
          { day: 2, title: 'Munnar', activities: ['Tea gardens', 'Mattupetty Dam', 'Echo Point'] },
          { day: 3, title: 'Munnar', activities: ['Eravikulam Park', 'Top Station', 'Tea museum'] },
          { day: 4, title: 'Thekkady', activities: ['Periyar boat ride', 'Spice plantation', 'Kalaripayattu show'] },
          { day: 5, title: 'Alleppey', activities: ['Houseboat cruise', 'Village walks', 'Sunset on backwaters'] },
          { day: 6, title: 'Kovalam', activities: ['Beach relaxation', 'Lighthouse Beach', 'Ayurvedic massage'] },
          { day: 7, title: 'Trivandrum', activities: ['Padmanabhaswamy Temple', 'Napier Museum', 'Departure'] },
        ]
      }
    ]
  },

  'tamil-nadu': {
    name: 'Tamil Nadu',
    itineraries: [
      {
        days: 1,
        title: 'Chennai Heritage',
        highlights: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George'],
        schedule: [
          { time: '5:30 AM', activity: 'Sunrise at Marina Beach', tip: 'Second longest beach in world' },
          { time: '7:00 AM', activity: 'Kapaleeshwarar Temple morning puja', tip: 'Dravidian architecture' },
          { time: '9:00 AM', activity: 'Breakfast at Saravana Bhavan', tip: 'Famous South Indian breakfast' },
          { time: '11:00 AM', activity: 'Fort St. George & Museum', tip: 'British colonial history' },
          { time: '1:00 PM', activity: 'Lunch at Dakshin', tip: 'Fine dining South Indian' },
          { time: '3:00 PM', activity: 'San Thome Cathedral', tip: 'Apostle Thomas burial site' },
          { time: '5:00 PM', activity: 'Mylapore heritage walk', tip: 'Traditional Tamil culture' },
        ]
      },
      {
        days: 3,
        title: 'Tamil Nadu Temples',
        highlights: ['Chennai', 'Mahabalipuram', 'Pondicherry'],
        schedule: [
          { day: 1, title: 'Chennai', activities: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George', 'Mylapore'] },
          { day: 2, title: 'Mahabalipuram', activities: ['Shore Temple', 'Five Rathas', 'Arjuna\'s Penance', 'Beach'] },
          { day: 3, title: 'Pondicherry', activities: ['French Quarter', 'Auroville', 'Promenade Beach', 'Sri Aurobindo Ashram'] },
        ]
      },
      {
        days: 5,
        title: 'Tamil Nadu Heritage',
        highlights: ['Chennai', 'Mahabalipuram', 'Pondicherry', 'Thanjavur', 'Madurai'],
        schedule: [
          { day: 1, title: 'Chennai', activities: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George'] },
          { day: 2, title: 'Mahabalipuram', activities: ['Shore Temple', 'Five Rathas', 'Cave temples'] },
          { day: 3, title: 'Pondicherry', activities: ['French Quarter', 'Auroville', 'Beach promenade'] },
          { day: 4, title: 'Thanjavur', activities: ['Brihadeeswara Temple', 'Palace', 'Art Gallery'] },
          { day: 5, title: 'Madurai', activities: ['Meenakshi Temple', 'Thirumalai Nayak Palace', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Tamil Nadu',
        highlights: ['Chennai', 'Mahabalipuram', 'Pondicherry', 'Thanjavur', 'Madurai', 'Rameswaram', 'Ooty'],
        schedule: [
          { day: 1, title: 'Chennai', activities: ['Marina Beach', 'Temples', 'Fort St. George'] },
          { day: 2, title: 'Mahabalipuram', activities: ['Shore Temple', 'Five Rathas', 'Beach'] },
          { day: 3, title: 'Pondicherry', activities: ['French Quarter', 'Auroville', 'Beaches'] },
          { day: 4, title: 'Thanjavur', activities: ['Brihadeeswara Temple', 'Palace', 'Bronze gallery'] },
          { day: 5, title: 'Madurai', activities: ['Meenakshi Temple', 'Palace', 'Night market'] },
          { day: 6, title: 'Rameswaram', activities: ['Ramanathaswamy Temple', 'Dhanushkodi', 'Pamban Bridge'] },
          { day: 7, title: 'Ooty', activities: ['Botanical Gardens', 'Ooty Lake', 'Toy train', 'Departure'] },
        ]
      }
    ]
  },

  'karnataka': {
    name: 'Karnataka',
    itineraries: [
      {
        days: 1,
        title: 'Bengaluru City Tour',
        highlights: ['Lalbagh', 'Cubbon Park', 'Bangalore Palace'],
        schedule: [
          { time: '6:00 AM', activity: 'Morning walk at Cubbon Park', tip: 'Green lung of the city' },
          { time: '8:00 AM', activity: 'Breakfast at MTR', tip: 'Iconic South Indian breakfast' },
          { time: '10:00 AM', activity: 'Bangalore Palace', tip: 'Tudor-style architecture' },
          { time: '12:00 PM', activity: 'Lalbagh Botanical Garden', tip: 'Glass house & flower shows' },
          { time: '2:00 PM', activity: 'Lunch at Vidyarthi Bhavan', tip: 'Famous crispy dosas' },
          { time: '4:00 PM', activity: 'ISKCON Temple', tip: 'Beautiful evening aarti' },
          { time: '6:00 PM', activity: 'MG Road & Brigade Road', tip: 'Shopping & nightlife' },
        ]
      },
      {
        days: 3,
        title: 'Karnataka Heritage',
        highlights: ['Bengaluru', 'Mysore', 'Coorg'],
        schedule: [
          { day: 1, title: 'Bengaluru', activities: ['Lalbagh', 'Cubbon Park', 'Bangalore Palace', 'MG Road'] },
          { day: 2, title: 'Mysore', activities: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens', 'Devaraja Market'] },
          { day: 3, title: 'Coorg', activities: ['Abbey Falls', 'Coffee plantations', 'Raja\'s Seat', 'Departure'] },
        ]
      },
      {
        days: 5,
        title: 'Karnataka Explorer',
        highlights: ['Bengaluru', 'Mysore', 'Coorg', 'Hassan', 'Hampi'],
        schedule: [
          { day: 1, title: 'Bengaluru', activities: ['Lalbagh', 'Bangalore Palace', 'ISKCON Temple'] },
          { day: 2, title: 'Mysore', activities: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens'] },
          { day: 3, title: 'Coorg', activities: ['Abbey Falls', 'Coffee estates', 'Dubare Elephant Camp'] },
          { day: 4, title: 'Hassan', activities: ['Belur Temple', 'Halebidu Temple', 'Shravanabelagola'] },
          { day: 5, title: 'Hampi', activities: ['Virupaksha Temple', 'Vittala Temple', 'Royal Enclosure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Karnataka',
        highlights: ['Bengaluru', 'Mysore', 'Coorg', 'Hassan', 'Hampi', 'Gokarna', 'Badami'],
        schedule: [
          { day: 1, title: 'Bengaluru', activities: ['Lalbagh', 'Bangalore Palace', 'MG Road'] },
          { day: 2, title: 'Mysore', activities: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens'] },
          { day: 3, title: 'Coorg', activities: ['Abbey Falls', 'Coffee plantations', 'Namdroling Monastery'] },
          { day: 4, title: 'Hassan', activities: ['Belur', 'Halebidu', 'Shravanabelagola'] },
          { day: 5, title: 'Hampi', activities: ['Virupaksha Temple', 'Vittala Temple', 'Sunset point'] },
          { day: 6, title: 'Badami', activities: ['Cave temples', 'Aihole', 'Pattadakal'] },
          { day: 7, title: 'Gokarna', activities: ['Om Beach', 'Kudle Beach', 'Mahabaleshwar Temple'] },
        ]
      }
    ]
  },

  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    itineraries: [
      {
        days: 1,
        title: 'Tirupati Darshan',
        highlights: ['Tirumala Temple', 'Padmavathi Temple', 'Kapila Theertham'],
        schedule: [
          { time: '3:00 AM', activity: 'Start for Tirumala', tip: 'Book darshan tickets online' },
          { time: '6:00 AM', activity: 'Lord Venkateswara Darshan', tip: 'VIP darshan recommended' },
          { time: '9:00 AM', activity: 'Temple prasadam breakfast', tip: 'Famous Tirupati laddu' },
          { time: '11:00 AM', activity: 'Padmavathi Temple, Tiruchanur', tip: 'Goddess Lakshmi temple' },
          { time: '1:00 PM', activity: 'Lunch at Ananda Bhavan', tip: 'Traditional Andhra meals' },
          { time: '3:00 PM', activity: 'Kapila Theertham waterfall', tip: 'Sacred waterfall temple' },
          { time: '5:00 PM', activity: 'Sri Govindaraja Temple', tip: 'In Tirupati town' },
        ]
      },
      {
        days: 3,
        title: 'Andhra Pilgrimage',
        highlights: ['Tirupati', 'Vijayawada', 'Amaravati'],
        schedule: [
          { day: 1, title: 'Tirupati', activities: ['Tirumala darshan', 'Padmavathi Temple', 'Kapila Theertham'] },
          { day: 2, title: 'Vijayawada', activities: ['Kanaka Durga Temple', 'Prakasam Barrage', 'Undavalli Caves'] },
          { day: 3, title: 'Amaravati', activities: ['Buddhist Stupa', 'Amaralingeswara Temple', 'Museum'] },
        ]
      },
      {
        days: 5,
        title: 'Andhra Heritage',
        highlights: ['Tirupati', 'Vijayawada', 'Visakhapatnam', 'Araku Valley'],
        schedule: [
          { day: 1, title: 'Tirupati', activities: ['Tirumala darshan', 'Padmavathi Temple', 'Local temples'] },
          { day: 2, title: 'Vijayawada', activities: ['Kanaka Durga Temple', 'Undavalli Caves', 'Prakasam Barrage'] },
          { day: 3, title: 'Visakhapatnam', activities: ['RK Beach', 'Submarine Museum', 'Kailasagiri'] },
          { day: 4, title: 'Araku Valley', activities: ['Coffee plantations', 'Borra Caves', 'Tribal museum'] },
          { day: 5, title: 'Visakhapatnam', activities: ['Simhachalam Temple', 'Beach activities', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Andhra Pradesh',
        highlights: ['Tirupati', 'Vijayawada', 'Visakhapatnam', 'Araku', 'Lepakshi', 'Srisailam'],
        schedule: [
          { day: 1, title: 'Tirupati', activities: ['Tirumala darshan', 'Padmavathi Temple'] },
          { day: 2, title: 'Lepakshi', activities: ['Veerabhadra Temple', 'Hanging pillar', 'Nandi statue'] },
          { day: 3, title: 'Srisailam', activities: ['Mallikarjuna Temple', 'Srisailam Dam', 'Tiger Reserve'] },
          { day: 4, title: 'Vijayawada', activities: ['Kanaka Durga Temple', 'Undavalli Caves'] },
          { day: 5, title: 'Visakhapatnam', activities: ['RK Beach', 'Submarine Museum', 'Kailasagiri'] },
          { day: 6, title: 'Araku Valley', activities: ['Borra Caves', 'Coffee plantations', 'Tribal villages'] },
          { day: 7, title: 'Visakhapatnam', activities: ['Simhachalam Temple', 'Shopping', 'Departure'] },
        ]
      }
    ]
  },

  'telangana': {
    name: 'Telangana',
    itineraries: [
      {
        days: 1,
        title: 'Hyderabad Heritage',
        highlights: ['Charminar', 'Golconda Fort', 'Hussain Sagar'],
        schedule: [
          { time: '6:00 AM', activity: 'Golconda Fort at sunrise', tip: 'Acoustic marvel - clap test' },
          { time: '9:00 AM', activity: 'Breakfast at Nimrah Cafe', tip: 'Irani chai & Osmania biscuits' },
          { time: '10:00 AM', activity: 'Charminar & Laad Bazaar', tip: 'Buy bangles & pearls' },
          { time: '1:00 PM', activity: 'Lunch at Paradise Biryani', tip: 'Iconic Hyderabadi biryani' },
          { time: '3:00 PM', activity: 'Salar Jung Museum', tip: 'One of largest museums' },
          { time: '5:00 PM', activity: 'Hussain Sagar Lake', tip: 'Buddha statue boat ride' },
          { time: '7:00 PM', activity: 'Dinner at Shah Ghouse', tip: 'Best haleem in city' },
        ]
      },
      {
        days: 3,
        title: 'Hyderabad Explorer',
        highlights: ['Old City', 'New City', 'Ramoji Film City'],
        schedule: [
          { day: 1, title: 'Old Hyderabad', activities: ['Charminar', 'Mecca Masjid', 'Laad Bazaar', 'Chowmahalla Palace'] },
          { day: 2, title: 'Heritage Sites', activities: ['Golconda Fort', 'Qutb Shahi Tombs', 'Salar Jung Museum'] },
          { day: 3, title: 'Modern Hyderabad', activities: ['Ramoji Film City', 'Hussain Sagar', 'Hitech City'] },
        ]
      },
      {
        days: 5,
        title: 'Telangana Heritage',
        highlights: ['Hyderabad', 'Warangal', 'Nagarjunasagar'],
        schedule: [
          { day: 1, title: 'Old Hyderabad', activities: ['Charminar', 'Laad Bazaar', 'Chowmahalla Palace'] },
          { day: 2, title: 'Hyderabad Heritage', activities: ['Golconda Fort', 'Qutb Shahi Tombs', 'Salar Jung Museum'] },
          { day: 3, title: 'Warangal', activities: ['Warangal Fort', 'Thousand Pillar Temple', 'Ramappa Temple'] },
          { day: 4, title: 'Nagarjunasagar', activities: ['Nagarjuna Dam', 'Buddhist sites', 'Island museum'] },
          { day: 5, title: 'Hyderabad', activities: ['Ramoji Film City', 'Shopping', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Telangana',
        highlights: ['Hyderabad', 'Warangal', 'Nagarjunasagar', 'Medak', 'Bidar'],
        schedule: [
          { day: 1, title: 'Old Hyderabad', activities: ['Charminar', 'Mecca Masjid', 'Laad Bazaar'] },
          { day: 2, title: 'Hyderabad Heritage', activities: ['Golconda Fort', 'Qutb Shahi Tombs'] },
          { day: 3, title: 'Modern Hyderabad', activities: ['Salar Jung Museum', 'Hussain Sagar', 'Hitech City'] },
          { day: 4, title: 'Warangal', activities: ['Warangal Fort', 'Thousand Pillar Temple', 'Ramappa Temple'] },
          { day: 5, title: 'Medak', activities: ['Medak Cathedral', 'Pocharam Wildlife', 'Local villages'] },
          { day: 6, title: 'Nagarjunasagar', activities: ['Dam visit', 'Buddhist sites', 'Ethipothala Falls'] },
          { day: 7, title: 'Hyderabad', activities: ['Ramoji Film City', 'Shopping', 'Departure'] },
        ]
      }
    ]
  },


  // WEST INDIA
  'rajasthan': {
    name: 'Rajasthan',
    itineraries: [
      {
        days: 1,
        title: 'Jaipur Day Trip',
        highlights: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Local Markets'],
        schedule: [
          { time: '6:00 AM', activity: 'Start early, visit Amber Fort', tip: 'Book elephant ride in advance' },
          { time: '10:00 AM', activity: 'City Palace & Jantar Mantar', tip: 'Hire a guide for history' },
          { time: '1:00 PM', activity: 'Lunch at LMB', tip: 'Try Dal Baati Churma' },
          { time: '3:00 PM', activity: 'Hawa Mahal & Johari Bazaar', tip: 'Best photos from across the street' },
          { time: '6:00 PM', activity: 'Nahargarh Fort sunset', tip: 'Carry water, steep climb' },
        ]
      },
      {
        days: 3,
        title: 'Golden Triangle Express',
        highlights: ['Delhi', 'Agra', 'Jaipur'],
        schedule: [
          { day: 1, title: 'Delhi', activities: ['Red Fort', 'Jama Masjid', 'Chandni Chowk', 'India Gate', 'Qutub Minar'] },
          { day: 2, title: 'Agra', activities: ['Taj Mahal at sunrise', 'Agra Fort', 'Mehtab Bagh sunset', 'Drive to Jaipur'] },
          { day: 3, title: 'Jaipur', activities: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Local shopping'] },
        ]
      },
      {
        days: 5,
        title: 'Royal Rajasthan',
        highlights: ['Jaipur', 'Jodhpur', 'Udaipur'],
        schedule: [
          { day: 1, title: 'Jaipur', activities: ['Amber Fort', 'City Palace', 'Hawa Mahal'] },
          { day: 2, title: 'Jaipur to Jodhpur', activities: ['Drive to Jodhpur', 'Mehrangarh Fort', 'Blue City walk'] },
          { day: 3, title: 'Jodhpur', activities: ['Jaswant Thada', 'Clock Tower Market', 'Drive to Udaipur'] },
          { day: 4, title: 'Udaipur', activities: ['City Palace', 'Lake Pichola boat ride', 'Jagdish Temple'] },
          { day: 5, title: 'Udaipur', activities: ['Monsoon Palace', 'Local markets', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Rajasthan',
        highlights: ['Jaipur', 'Pushkar', 'Jodhpur', 'Jaisalmer', 'Udaipur'],
        schedule: [
          { day: 1, title: 'Jaipur', activities: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Night bazaar'] },
          { day: 2, title: 'Jaipur to Pushkar', activities: ['Brahma Temple', 'Pushkar Lake', 'Camel fair grounds'] },
          { day: 3, title: 'Pushkar to Jodhpur', activities: ['Mehrangarh Fort', 'Blue City exploration'] },
          { day: 4, title: 'Jodhpur to Jaisalmer', activities: ['Desert drive', 'Jaisalmer Fort', 'Havelis'] },
          { day: 5, title: 'Jaisalmer', activities: ['Desert safari', 'Camel ride', 'Desert camping'] },
          { day: 6, title: 'Jaisalmer to Udaipur', activities: ['Long scenic drive', 'Evening at Lake Pichola'] },
          { day: 7, title: 'Udaipur', activities: ['City Palace', 'Boat ride', 'Shopping', 'Departure'] },
        ]
      }
    ]
  },

  'gujarat': {
    name: 'Gujarat',
    itineraries: [
      {
        days: 1,
        title: 'Ahmedabad Heritage',
        highlights: ['Sabarmati Ashram', 'Adalaj Stepwell', 'Old City'],
        schedule: [
          { time: '6:00 AM', activity: 'Sabarmati Ashram at sunrise', tip: 'Gandhi\'s peaceful retreat' },
          { time: '8:00 AM', activity: 'Breakfast at Lucky Restaurant', tip: 'Famous Gujarati breakfast' },
          { time: '10:00 AM', activity: 'Adalaj Stepwell', tip: 'Stunning Indo-Islamic architecture' },
          { time: '12:00 PM', activity: 'Sidi Saiyyed Mosque', tip: 'Famous tree of life jali' },
          { time: '2:00 PM', activity: 'Lunch at Agashiye', tip: 'Traditional Gujarati thali' },
          { time: '4:00 PM', activity: 'Old City heritage walk', tip: 'Pols (traditional houses)' },
          { time: '6:00 PM', activity: 'Kankaria Lake', tip: 'Evening entertainment' },
        ]
      },
      {
        days: 3,
        title: 'Gujarat Highlights',
        highlights: ['Ahmedabad', 'Statue of Unity', 'Vadodara'],
        schedule: [
          { day: 1, title: 'Ahmedabad', activities: ['Sabarmati Ashram', 'Adalaj Stepwell', 'Old City walk', 'Kankaria Lake'] },
          { day: 2, title: 'Statue of Unity', activities: ['World\'s tallest statue', 'Valley of Flowers', 'Sardar Sarovar Dam'] },
          { day: 3, title: 'Vadodara', activities: ['Laxmi Vilas Palace', 'Sayaji Gardens', 'Champaner-Pavagadh'] },
        ]
      },
      {
        days: 5,
        title: 'Vibrant Gujarat',
        highlights: ['Ahmedabad', 'Gir', 'Somnath', 'Dwarka', 'Kutch'],
        schedule: [
          { day: 1, title: 'Ahmedabad', activities: ['Sabarmati Ashram', 'Adalaj Stepwell', 'Old City heritage walk'] },
          { day: 2, title: 'Ahmedabad to Gir', activities: ['Drive to Gir', 'Evening safari', 'Spot Asiatic lions'] },
          { day: 3, title: 'Gir to Somnath', activities: ['Morning safari', 'Somnath Temple', 'Beach sunset'] },
          { day: 4, title: 'Somnath to Dwarka', activities: ['Dwarkadhish Temple', 'Nageshwar Jyotirlinga', 'Bet Dwarka'] },
          { day: 5, title: 'Dwarka', activities: ['Sunrise aarti', 'Rukmini Temple', 'Return journey'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Gujarat',
        highlights: ['Ahmedabad', 'Statue of Unity', 'Gir', 'Somnath', 'Dwarka', 'Kutch'],
        schedule: [
          { day: 1, title: 'Ahmedabad', activities: ['Sabarmati Ashram', 'Adalaj Stepwell', 'Old City'] },
          { day: 2, title: 'Statue of Unity', activities: ['Statue visit', 'Valley of Flowers', 'Sardar Sarovar Dam'] },
          { day: 3, title: 'Gir National Park', activities: ['Morning & evening safari', 'Lion spotting'] },
          { day: 4, title: 'Somnath', activities: ['Somnath Temple', 'Beach', 'Light & sound show'] },
          { day: 5, title: 'Dwarka', activities: ['Dwarkadhish Temple', 'Bet Dwarka', 'Nageshwar'] },
          { day: 6, title: 'Kutch', activities: ['Rann of Kutch', 'White desert', 'Sunset views'] },
          { day: 7, title: 'Kutch', activities: ['Bhuj', 'Handicraft villages', 'Departure'] },
        ]
      }
    ]
  },

  'maharashtra': {
    name: 'Maharashtra',
    itineraries: [
      {
        days: 1,
        title: 'Mumbai Highlights',
        highlights: ['Gateway of India', 'Marine Drive', 'Elephanta Caves'],
        schedule: [
          { time: '6:00 AM', activity: 'Sunrise at Marine Drive', tip: 'Queen\'s Necklace view' },
          { time: '8:00 AM', activity: 'Breakfast at Cafe Mondegar', tip: 'Iconic Colaba cafe' },
          { time: '9:00 AM', activity: 'Gateway of India & Taj Hotel', tip: 'Iconic Mumbai landmarks' },
          { time: '10:00 AM', activity: 'Ferry to Elephanta Caves', tip: 'UNESCO World Heritage' },
          { time: '2:00 PM', activity: 'Lunch at Leopold Cafe', tip: 'Historic cafe' },
          { time: '4:00 PM', activity: 'Dhobi Ghat & Mahalaxmi Temple', tip: 'World\'s largest laundry' },
          { time: '6:00 PM', activity: 'Juhu Beach sunset', tip: 'Street food paradise' },
        ]
      },
      {
        days: 3,
        title: 'Mumbai & Pune',
        highlights: ['Mumbai', 'Lonavala', 'Pune'],
        schedule: [
          { day: 1, title: 'Mumbai', activities: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Colaba'] },
          { day: 2, title: 'Lonavala', activities: ['Tiger Point', 'Bhushi Dam', 'Karla Caves', 'Chikki shopping'] },
          { day: 3, title: 'Pune', activities: ['Shaniwar Wada', 'Aga Khan Palace', 'Dagdusheth Temple', 'FC Road'] },
        ]
      },
      {
        days: 5,
        title: 'Maharashtra Heritage',
        highlights: ['Mumbai', 'Lonavala', 'Pune', 'Aurangabad', 'Ajanta-Ellora'],
        schedule: [
          { day: 1, title: 'Mumbai', activities: ['Gateway of India', 'Marine Drive', 'Elephanta Caves'] },
          { day: 2, title: 'Lonavala', activities: ['Tiger Point', 'Karla Caves', 'Bhushi Dam'] },
          { day: 3, title: 'Pune', activities: ['Shaniwar Wada', 'Aga Khan Palace', 'Dagdusheth Temple'] },
          { day: 4, title: 'Aurangabad', activities: ['Bibi Ka Maqbara', 'Daulatabad Fort', 'Panchakki'] },
          { day: 5, title: 'Ajanta-Ellora', activities: ['Ajanta Caves', 'Ellora Caves', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Maharashtra',
        highlights: ['Mumbai', 'Lonavala', 'Pune', 'Mahabaleshwar', 'Aurangabad', 'Ajanta-Ellora', 'Nashik'],
        schedule: [
          { day: 1, title: 'Mumbai', activities: ['Gateway of India', 'Marine Drive', 'Colaba'] },
          { day: 2, title: 'Mumbai', activities: ['Elephanta Caves', 'Dhobi Ghat', 'Juhu Beach'] },
          { day: 3, title: 'Lonavala', activities: ['Tiger Point', 'Karla Caves', 'Bhushi Dam'] },
          { day: 4, title: 'Mahabaleshwar', activities: ['Arthur\'s Seat', 'Venna Lake', 'Strawberry farms'] },
          { day: 5, title: 'Aurangabad', activities: ['Bibi Ka Maqbara', 'Daulatabad Fort', 'Panchakki'] },
          { day: 6, title: 'Ajanta-Ellora', activities: ['Ajanta Caves', 'Ellora Caves'] },
          { day: 7, title: 'Nashik', activities: ['Trimbakeshwar', 'Sula Vineyards', 'Departure'] },
        ]
      }
    ]
  },

  'goa': {
    name: 'Goa',
    itineraries: [
      {
        days: 1,
        title: 'North Goa Beach Day',
        highlights: ['Baga Beach', 'Calangute', 'Fort Aguada'],
        schedule: [
          { time: '6:00 AM', activity: 'Sunrise at Baga Beach', tip: 'Peaceful morning vibes' },
          { time: '8:00 AM', activity: 'Breakfast at Britto\'s', tip: 'Beach shack breakfast' },
          { time: '10:00 AM', activity: 'Fort Aguada', tip: 'Portuguese fort with lighthouse' },
          { time: '12:00 PM', activity: 'Calangute Beach water sports', tip: 'Parasailing & jet ski' },
          { time: '2:00 PM', activity: 'Lunch at Souza Lobo', tip: 'Goan seafood' },
          { time: '4:00 PM', activity: 'Anjuna Flea Market', tip: 'Wednesday market' },
          { time: '7:00 PM', activity: 'Tito\'s Lane nightlife', tip: 'Party hub of Goa' },
        ]
      },
      {
        days: 3,
        title: 'Goa Beach Hopping',
        highlights: ['North Goa', 'South Goa', 'Old Goa'],
        schedule: [
          { day: 1, title: 'North Goa', activities: ['Baga Beach', 'Calangute', 'Fort Aguada', 'Anjuna'] },
          { day: 2, title: 'Old Goa', activities: ['Basilica of Bom Jesus', 'Se Cathedral', 'Fontainhas', 'Panjim'] },
          { day: 3, title: 'South Goa', activities: ['Palolem Beach', 'Colva Beach', 'Cabo de Rama Fort'] },
        ]
      },
      {
        days: 5,
        title: 'Complete Goa',
        highlights: ['North Goa', 'South Goa', 'Old Goa', 'Dudhsagar'],
        schedule: [
          { day: 1, title: 'North Goa Beaches', activities: ['Baga', 'Calangute', 'Candolim', 'Fort Aguada'] },
          { day: 2, title: 'North Goa Culture', activities: ['Anjuna', 'Vagator', 'Chapora Fort', 'Night market'] },
          { day: 3, title: 'Old Goa Heritage', activities: ['Basilica of Bom Jesus', 'Se Cathedral', 'Fontainhas'] },
          { day: 4, title: 'Dudhsagar', activities: ['Dudhsagar Falls', 'Spice plantation', 'Elephant ride'] },
          { day: 5, title: 'South Goa', activities: ['Palolem Beach', 'Agonda Beach', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Goa Ultimate Experience',
        highlights: ['North Goa', 'South Goa', 'Old Goa', 'Dudhsagar', 'Islands'],
        schedule: [
          { day: 1, title: 'North Goa', activities: ['Baga Beach', 'Calangute', 'Fort Aguada'] },
          { day: 2, title: 'North Goa', activities: ['Anjuna', 'Vagator', 'Chapora Fort', 'Nightlife'] },
          { day: 3, title: 'Old Goa', activities: ['Churches', 'Fontainhas', 'Panjim', 'Casino'] },
          { day: 4, title: 'Dudhsagar', activities: ['Waterfall trek', 'Spice plantation', 'Elephant bath'] },
          { day: 5, title: 'Islands', activities: ['Grande Island trip', 'Snorkeling', 'Dolphin watching'] },
          { day: 6, title: 'South Goa', activities: ['Palolem', 'Agonda', 'Cabo de Rama Fort'] },
          { day: 7, title: 'South Goa', activities: ['Colva Beach', 'Benaulim', 'Departure'] },
        ]
      }
    ]
  },


  // EAST INDIA
  'west-bengal': {
    name: 'West Bengal',
    itineraries: [
      {
        days: 1,
        title: 'Kolkata Heritage Walk',
        highlights: ['Victoria Memorial', 'Howrah Bridge', 'Park Street'],
        schedule: [
          { time: '6:00 AM', activity: 'Sunrise at Howrah Bridge', tip: 'Iconic Kolkata landmark' },
          { time: '8:00 AM', activity: 'Breakfast at Flurys', tip: 'Colonial-era bakery' },
          { time: '10:00 AM', activity: 'Victoria Memorial', tip: 'Stunning white marble palace' },
          { time: '12:00 PM', activity: 'Indian Museum', tip: 'Oldest museum in India' },
          { time: '2:00 PM', activity: 'Lunch at Peter Cat', tip: 'Famous Chelo Kebab' },
          { time: '4:00 PM', activity: 'Kumartuli potter\'s colony', tip: 'Durga idol making' },
          { time: '6:00 PM', activity: 'Park Street & New Market', tip: 'Shopping & street food' },
        ]
      },
      {
        days: 3,
        title: 'Kolkata & Darjeeling',
        highlights: ['Kolkata', 'Darjeeling', 'Tea Gardens'],
        schedule: [
          { day: 1, title: 'Kolkata', activities: ['Victoria Memorial', 'Howrah Bridge', 'Park Street', 'Kumartuli'] },
          { day: 2, title: 'Darjeeling', activities: ['Toy train ride', 'Tiger Hill sunrise', 'Tea garden visit'] },
          { day: 3, title: 'Darjeeling', activities: ['Batasia Loop', 'Peace Pagoda', 'Mall Road', 'Departure'] },
        ]
      },
      {
        days: 5,
        title: 'Bengal Explorer',
        highlights: ['Kolkata', 'Darjeeling', 'Kalimpong', 'Sundarbans'],
        schedule: [
          { day: 1, title: 'Kolkata', activities: ['Victoria Memorial', 'Howrah Bridge', 'Park Street'] },
          { day: 2, title: 'Darjeeling', activities: ['Tiger Hill sunrise', 'Tea gardens', 'Toy train'] },
          { day: 3, title: 'Kalimpong', activities: ['Monasteries', 'Flower nurseries', 'Deolo Hill'] },
          { day: 4, title: 'Sundarbans', activities: ['Boat safari', 'Mangrove forests', 'Tiger spotting'] },
          { day: 5, title: 'Sundarbans', activities: ['Bird watching', 'Village visit', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete West Bengal',
        highlights: ['Kolkata', 'Darjeeling', 'Kalimpong', 'Sundarbans', 'Shantiniketan', 'Digha'],
        schedule: [
          { day: 1, title: 'Kolkata', activities: ['Victoria Memorial', 'Howrah Bridge', 'Park Street'] },
          { day: 2, title: 'Kolkata', activities: ['Kumartuli', 'Dakshineswar', 'Belur Math'] },
          { day: 3, title: 'Darjeeling', activities: ['Tiger Hill', 'Tea gardens', 'Toy train'] },
          { day: 4, title: 'Kalimpong', activities: ['Monasteries', 'Flower nurseries', 'Local markets'] },
          { day: 5, title: 'Shantiniketan', activities: ['Tagore\'s university', 'Art galleries', 'Sonajhuri forest'] },
          { day: 6, title: 'Sundarbans', activities: ['Boat safari', 'Mangrove forests', 'Wildlife'] },
          { day: 7, title: 'Digha', activities: ['Beach relaxation', 'Seafood', 'Departure'] },
        ]
      }
    ]
  },

  'odisha': {
    name: 'Odisha',
    itineraries: [
      {
        days: 1,
        title: 'Puri Pilgrimage',
        highlights: ['Jagannath Temple', 'Puri Beach', 'Raghurajpur'],
        schedule: [
          { time: '5:00 AM', activity: 'Jagannath Temple morning darshan', tip: 'Non-Hindus not allowed inside' },
          { time: '8:00 AM', activity: 'Breakfast at Wildgrass', tip: 'Odia cuisine' },
          { time: '10:00 AM', activity: 'Puri Beach walk', tip: 'Golden beach of Odisha' },
          { time: '12:00 PM', activity: 'Raghurajpur artist village', tip: 'Pattachitra paintings' },
          { time: '2:00 PM', activity: 'Lunch at Chung Wah', tip: 'Seafood specialties' },
          { time: '4:00 PM', activity: 'Chilika Lake boat ride', tip: 'Irrawaddy dolphins' },
          { time: '6:00 PM', activity: 'Beach sunset & evening aarti', tip: 'Spiritual experience' },
        ]
      },
      {
        days: 3,
        title: 'Odisha Golden Triangle',
        highlights: ['Bhubaneswar', 'Puri', 'Konark'],
        schedule: [
          { day: 1, title: 'Bhubaneswar', activities: ['Lingaraj Temple', 'Udayagiri Caves', 'Dhauli Peace Pagoda'] },
          { day: 2, title: 'Konark', activities: ['Sun Temple', 'Chandrabhaga Beach', 'ASI Museum'] },
          { day: 3, title: 'Puri', activities: ['Jagannath Temple', 'Puri Beach', 'Raghurajpur village'] },
        ]
      },
      {
        days: 5,
        title: 'Odisha Heritage',
        highlights: ['Bhubaneswar', 'Puri', 'Konark', 'Chilika', 'Cuttack'],
        schedule: [
          { day: 1, title: 'Bhubaneswar', activities: ['Lingaraj Temple', 'Udayagiri Caves', 'Tribal Museum'] },
          { day: 2, title: 'Konark', activities: ['Sun Temple', 'Chandrabhaga Beach', 'Marine Drive'] },
          { day: 3, title: 'Puri', activities: ['Jagannath Temple', 'Beach', 'Raghurajpur'] },
          { day: 4, title: 'Chilika Lake', activities: ['Boat safari', 'Dolphin watching', 'Bird sanctuary'] },
          { day: 5, title: 'Cuttack', activities: ['Barabati Fort', 'Silver filigree market', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Odisha',
        highlights: ['Bhubaneswar', 'Puri', 'Konark', 'Chilika', 'Cuttack', 'Gopalpur', 'Simlipal'],
        schedule: [
          { day: 1, title: 'Bhubaneswar', activities: ['Lingaraj Temple', 'Udayagiri Caves', 'Dhauli'] },
          { day: 2, title: 'Bhubaneswar', activities: ['Tribal Museum', 'Nandankanan Zoo', 'Khandagiri'] },
          { day: 3, title: 'Konark', activities: ['Sun Temple', 'Chandrabhaga Beach', 'Marine Drive'] },
          { day: 4, title: 'Puri', activities: ['Jagannath Temple', 'Beach', 'Raghurajpur'] },
          { day: 5, title: 'Chilika Lake', activities: ['Boat safari', 'Dolphins', 'Bird watching'] },
          { day: 6, title: 'Gopalpur', activities: ['Beach relaxation', 'Lighthouse', 'Seafood'] },
          { day: 7, title: 'Simlipal', activities: ['Tiger Reserve', 'Waterfalls', 'Departure'] },
        ]
      }
    ]
  },

  'bihar': {
    name: 'Bihar',
    itineraries: [
      {
        days: 1,
        title: 'Bodh Gaya Pilgrimage',
        highlights: ['Mahabodhi Temple', 'Bodhi Tree', 'Great Buddha Statue'],
        schedule: [
          { time: '5:00 AM', activity: 'Meditation under Bodhi Tree', tip: 'Most peaceful time' },
          { time: '7:00 AM', activity: 'Mahabodhi Temple morning prayers', tip: 'UNESCO World Heritage' },
          { time: '9:00 AM', activity: 'Breakfast at local cafe', tip: 'Try Tibetan momos' },
          { time: '11:00 AM', activity: 'Great Buddha Statue', tip: '80 feet tall statue' },
          { time: '1:00 PM', activity: 'Lunch at Fujiya Green', tip: 'Japanese Buddhist cuisine' },
          { time: '3:00 PM', activity: 'International monasteries tour', tip: 'Thai, Japanese, Tibetan temples' },
          { time: '6:00 PM', activity: 'Evening prayers at Mahabodhi', tip: 'Lamp lighting ceremony' },
        ]
      },
      {
        days: 3,
        title: 'Buddhist Circuit',
        highlights: ['Bodh Gaya', 'Nalanda', 'Rajgir'],
        schedule: [
          { day: 1, title: 'Bodh Gaya', activities: ['Mahabodhi Temple', 'Bodhi Tree', 'International monasteries'] },
          { day: 2, title: 'Nalanda', activities: ['Nalanda University ruins', 'Nalanda Museum', 'Xuanzang Memorial'] },
          { day: 3, title: 'Rajgir', activities: ['Vulture Peak', 'Hot springs', 'Vishwa Shanti Stupa'] },
        ]
      },
      {
        days: 5,
        title: 'Bihar Heritage',
        highlights: ['Bodh Gaya', 'Nalanda', 'Rajgir', 'Patna', 'Vaishali'],
        schedule: [
          { day: 1, title: 'Bodh Gaya', activities: ['Mahabodhi Temple', 'Bodhi Tree', 'Monasteries'] },
          { day: 2, title: 'Nalanda', activities: ['University ruins', 'Museum', 'Xuanzang Memorial'] },
          { day: 3, title: 'Rajgir', activities: ['Vulture Peak', 'Hot springs', 'Vishwa Shanti Stupa'] },
          { day: 4, title: 'Patna', activities: ['Golghar', 'Patna Museum', 'Kumhrar excavations'] },
          { day: 5, title: 'Vaishali', activities: ['Ashoka Pillar', 'Buddha Stupa', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Bihar',
        highlights: ['Bodh Gaya', 'Nalanda', 'Rajgir', 'Patna', 'Vaishali', 'Pawapuri', 'Sasaram'],
        schedule: [
          { day: 1, title: 'Bodh Gaya', activities: ['Mahabodhi Temple', 'Bodhi Tree', 'Meditation'] },
          { day: 2, title: 'Bodh Gaya', activities: ['International monasteries', 'Great Buddha Statue'] },
          { day: 3, title: 'Nalanda', activities: ['University ruins', 'Museum', 'Xuanzang Memorial'] },
          { day: 4, title: 'Rajgir', activities: ['Vulture Peak', 'Hot springs', 'Vishwa Shanti Stupa'] },
          { day: 5, title: 'Pawapuri', activities: ['Jal Mandir', 'Jain pilgrimage site'] },
          { day: 6, title: 'Patna', activities: ['Golghar', 'Patna Museum', 'Kumhrar', 'Takht Sri Patna Sahib'] },
          { day: 7, title: 'Vaishali', activities: ['Ashoka Pillar', 'Buddha Stupa', 'Departure'] },
        ]
      }
    ]
  },

  'jharkhand': {
    name: 'Jharkhand',
    itineraries: [
      {
        days: 1,
        title: 'Ranchi Waterfalls',
        highlights: ['Hundru Falls', 'Jonha Falls', 'Rock Garden'],
        schedule: [
          { time: '6:00 AM', activity: 'Early start for Hundru Falls', tip: 'Best in monsoon' },
          { time: '9:00 AM', activity: 'Breakfast at local dhaba', tip: 'Try litti chokha' },
          { time: '11:00 AM', activity: 'Jonha Falls & Gautam Buddha temple', tip: 'Scenic waterfall' },
          { time: '1:00 PM', activity: 'Lunch at Kaveri Restaurant', tip: 'Local cuisine' },
          { time: '3:00 PM', activity: 'Rock Garden', tip: 'Beautiful landscaped garden' },
          { time: '5:00 PM', activity: 'Tagore Hill sunset', tip: 'Panoramic city views' },
          { time: '7:00 PM', activity: 'Main Road shopping', tip: 'Local handicrafts' },
        ]
      },
      {
        days: 3,
        title: 'Jharkhand Nature',
        highlights: ['Ranchi', 'Netarhat', 'Deoghar'],
        schedule: [
          { day: 1, title: 'Ranchi', activities: ['Hundru Falls', 'Jonha Falls', 'Rock Garden', 'Tagore Hill'] },
          { day: 2, title: 'Netarhat', activities: ['Queen of Chotanagpur', 'Sunrise point', 'Magnolia Point'] },
          { day: 3, title: 'Deoghar', activities: ['Baidyanath Temple', 'Trikut Hills', 'Nandan Pahar'] },
        ]
      },
      {
        days: 5,
        title: 'Jharkhand Explorer',
        highlights: ['Ranchi', 'Netarhat', 'Deoghar', 'Jamshedpur', 'Hazaribagh'],
        schedule: [
          { day: 1, title: 'Ranchi', activities: ['Hundru Falls', 'Jonha Falls', 'Rock Garden'] },
          { day: 2, title: 'Netarhat', activities: ['Sunrise point', 'Magnolia Point', 'Pine forests'] },
          { day: 3, title: 'Deoghar', activities: ['Baidyanath Temple', 'Trikut Hills', 'Nandan Pahar'] },
          { day: 4, title: 'Jamshedpur', activities: ['Jubilee Park', 'Dimna Lake', 'Dalma Wildlife'] },
          { day: 5, title: 'Hazaribagh', activities: ['Wildlife Sanctuary', 'Canary Hill', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Jharkhand',
        highlights: ['Ranchi', 'Netarhat', 'Deoghar', 'Jamshedpur', 'Hazaribagh', 'Betla', 'Parasnath'],
        schedule: [
          { day: 1, title: 'Ranchi', activities: ['Hundru Falls', 'Jonha Falls', 'Rock Garden'] },
          { day: 2, title: 'Ranchi', activities: ['Tagore Hill', 'Pahari Mandir', 'Local markets'] },
          { day: 3, title: 'Netarhat', activities: ['Sunrise point', 'Magnolia Point', 'Nature walks'] },
          { day: 4, title: 'Betla', activities: ['Tiger Reserve', 'Jungle safari', 'Lodh Falls'] },
          { day: 5, title: 'Deoghar', activities: ['Baidyanath Temple', 'Trikut Hills', 'Nandan Pahar'] },
          { day: 6, title: 'Parasnath', activities: ['Jain pilgrimage', 'Shikharji trek', 'Temples'] },
          { day: 7, title: 'Jamshedpur', activities: ['Jubilee Park', 'Dimna Lake', 'Departure'] },
        ]
      }
    ]
  },


  // CENTRAL INDIA
  'madhya-pradesh': {
    name: 'Madhya Pradesh',
    itineraries: [
      {
        days: 1,
        title: 'Khajuraho Temples',
        highlights: ['Western Group', 'Eastern Group', 'Light & Sound Show'],
        schedule: [
          { time: '6:00 AM', activity: 'Sunrise at Western Group temples', tip: 'Best photography light' },
          { time: '8:00 AM', activity: 'Breakfast at Raja Cafe', tip: 'Rooftop temple views' },
          { time: '10:00 AM', activity: 'Western Group detailed tour', tip: 'Hire ASI guide' },
          { time: '1:00 PM', activity: 'Lunch at Mediterraneo', tip: 'Italian with temple views' },
          { time: '3:00 PM', activity: 'Eastern Group & Jain temples', tip: 'Less crowded' },
          { time: '5:00 PM', activity: 'Archaeological Museum', tip: 'Temple sculptures' },
          { time: '7:00 PM', activity: 'Light & Sound Show', tip: 'Temple history narration' },
        ]
      },
      {
        days: 3,
        title: 'MP Heritage Triangle',
        highlights: ['Khajuraho', 'Orchha', 'Gwalior'],
        schedule: [
          { day: 1, title: 'Khajuraho', activities: ['Western Group temples', 'Eastern Group', 'Light & Sound Show'] },
          { day: 2, title: 'Orchha', activities: ['Orchha Fort', 'Chaturbhuj Temple', 'Cenotaphs', 'Betwa River'] },
          { day: 3, title: 'Gwalior', activities: ['Gwalior Fort', 'Jai Vilas Palace', 'Tansen Tomb'] },
        ]
      },
      {
        days: 5,
        title: 'MP Wildlife & Heritage',
        highlights: ['Khajuraho', 'Bandhavgarh', 'Kanha', 'Bhopal'],
        schedule: [
          { day: 1, title: 'Khajuraho', activities: ['Temple tour', 'Museum', 'Light & Sound Show'] },
          { day: 2, title: 'Bandhavgarh', activities: ['Morning safari', 'Evening safari', 'Tiger spotting'] },
          { day: 3, title: 'Kanha', activities: ['Jungle safari', 'Bamni Dadar sunset', 'Nature walks'] },
          { day: 4, title: 'Bhopal', activities: ['Upper Lake', 'Bharat Bhavan', 'Taj-ul-Masjid'] },
          { day: 5, title: 'Sanchi', activities: ['Sanchi Stupa', 'Buddhist monuments', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Madhya Pradesh',
        highlights: ['Khajuraho', 'Orchha', 'Bandhavgarh', 'Kanha', 'Bhopal', 'Sanchi', 'Ujjain'],
        schedule: [
          { day: 1, title: 'Khajuraho', activities: ['Western Group', 'Eastern Group', 'Light & Sound'] },
          { day: 2, title: 'Orchha', activities: ['Fort complex', 'Chaturbhuj Temple', 'Cenotaphs'] },
          { day: 3, title: 'Bandhavgarh', activities: ['Morning & evening safari', 'Tiger spotting'] },
          { day: 4, title: 'Kanha', activities: ['Jungle safari', 'Bamni Dadar', 'Wildlife photography'] },
          { day: 5, title: 'Bhopal', activities: ['Upper Lake', 'Bharat Bhavan', 'Taj-ul-Masjid'] },
          { day: 6, title: 'Sanchi', activities: ['Sanchi Stupa', 'Buddhist monuments', 'Museum'] },
          { day: 7, title: 'Ujjain', activities: ['Mahakaleshwar Temple', 'Ram Ghat', 'Departure'] },
        ]
      }
    ]
  },

  'chhattisgarh': {
    name: 'Chhattisgarh',
    itineraries: [
      {
        days: 1,
        title: 'Raipur City Tour',
        highlights: ['Mahant Ghasidas Museum', 'Nandan Van Zoo', 'Purkhouti Muktangan'],
        schedule: [
          { time: '7:00 AM', activity: 'Morning walk at Marine Drive', tip: 'Telibandha Lake' },
          { time: '9:00 AM', activity: 'Breakfast at local restaurant', tip: 'Try Chhattisgarhi cuisine' },
          { time: '10:00 AM', activity: 'Mahant Ghasidas Museum', tip: 'Tribal artifacts' },
          { time: '12:00 PM', activity: 'Purkhouti Muktangan', tip: 'Open-air tribal museum' },
          { time: '2:00 PM', activity: 'Lunch at Babylon', tip: 'Multi-cuisine' },
          { time: '4:00 PM', activity: 'Nandan Van Zoo', tip: 'Jungle safari' },
          { time: '6:00 PM', activity: 'Swami Vivekananda Sarovar', tip: 'Evening relaxation' },
        ]
      },
      {
        days: 3,
        title: 'Chhattisgarh Waterfalls',
        highlights: ['Raipur', 'Chitrakote Falls', 'Tirathgarh Falls'],
        schedule: [
          { day: 1, title: 'Raipur', activities: ['Mahant Ghasidas Museum', 'Nandan Van Zoo', 'Marine Drive'] },
          { day: 2, title: 'Jagdalpur', activities: ['Chitrakote Falls (Niagara of India)', 'Tirathgarh Falls'] },
          { day: 3, title: 'Bastar', activities: ['Tribal villages', 'Danteshwari Temple', 'Handicrafts'] },
        ]
      },
      {
        days: 5,
        title: 'Chhattisgarh Explorer',
        highlights: ['Raipur', 'Chitrakote', 'Bastar', 'Sirpur', 'Barnawapara'],
        schedule: [
          { day: 1, title: 'Raipur', activities: ['Museum', 'Nandan Van', 'Marine Drive'] },
          { day: 2, title: 'Sirpur', activities: ['Buddhist excavations', 'Laxman Temple', 'Gandheshwar Temple'] },
          { day: 3, title: 'Jagdalpur', activities: ['Chitrakote Falls', 'Tirathgarh Falls', 'Kanger Valley'] },
          { day: 4, title: 'Bastar', activities: ['Tribal villages', 'Danteshwari Temple', 'Local crafts'] },
          { day: 5, title: 'Barnawapara', activities: ['Wildlife Sanctuary', 'Safari', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Chhattisgarh',
        highlights: ['Raipur', 'Sirpur', 'Chitrakote', 'Bastar', 'Barnawapara', 'Mainpat', 'Bilaspur'],
        schedule: [
          { day: 1, title: 'Raipur', activities: ['Museum', 'Nandan Van', 'Marine Drive'] },
          { day: 2, title: 'Sirpur', activities: ['Buddhist sites', 'Laxman Temple', 'Excavations'] },
          { day: 3, title: 'Jagdalpur', activities: ['Chitrakote Falls', 'Tirathgarh Falls'] },
          { day: 4, title: 'Bastar', activities: ['Tribal villages', 'Danteshwari Temple', 'Crafts'] },
          { day: 5, title: 'Mainpat', activities: ['Mini Tibet', 'Tibetan monastery', 'Waterfalls'] },
          { day: 6, title: 'Barnawapara', activities: ['Wildlife Sanctuary', 'Safari', 'Nature walks'] },
          { day: 7, title: 'Bilaspur', activities: ['Ratanpur temples', 'Achanakmar', 'Departure'] },
        ]
      }
    ]
  },

  'uttar-pradesh': {
    name: 'Uttar Pradesh',
    itineraries: [
      {
        days: 1,
        title: 'Agra Taj Day',
        highlights: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh'],
        schedule: [
          { time: '5:30 AM', activity: 'Taj Mahal at sunrise', tip: 'Gates open at 6 AM' },
          { time: '8:00 AM', activity: 'Breakfast at Oberoi Amarvilas', tip: 'Taj view breakfast' },
          { time: '10:00 AM', activity: 'Agra Fort', tip: 'Mughal architecture marvel' },
          { time: '1:00 PM', activity: 'Lunch at Peshawri', tip: 'North Indian cuisine' },
          { time: '3:00 PM', activity: 'Itmad-ud-Daulah (Baby Taj)', tip: 'Intricate marble work' },
          { time: '5:00 PM', activity: 'Mehtab Bagh sunset', tip: 'Best Taj sunset view' },
          { time: '7:00 PM', activity: 'Sadar Bazaar shopping', tip: 'Marble inlay work' },
        ]
      },
      {
        days: 3,
        title: 'UP Heritage Triangle',
        highlights: ['Agra', 'Varanasi', 'Lucknow'],
        schedule: [
          { day: 1, title: 'Agra', activities: ['Taj Mahal sunrise', 'Agra Fort', 'Mehtab Bagh sunset'] },
          { day: 2, title: 'Varanasi', activities: ['Ganga Aarti', 'Boat ride', 'Kashi Vishwanath', 'Sarnath'] },
          { day: 3, title: 'Lucknow', activities: ['Bara Imambara', 'Rumi Darwaza', 'Chowk food walk'] },
        ]
      },
      {
        days: 5,
        title: 'UP Spiritual Journey',
        highlights: ['Agra', 'Varanasi', 'Lucknow', 'Mathura', 'Vrindavan'],
        schedule: [
          { day: 1, title: 'Agra', activities: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh'] },
          { day: 2, title: 'Mathura-Vrindavan', activities: ['Krishna Janmabhoomi', 'Banke Bihari', 'ISKCON'] },
          { day: 3, title: 'Varanasi', activities: ['Ganga Aarti', 'Boat ride', 'Kashi Vishwanath'] },
          { day: 4, title: 'Varanasi', activities: ['Sarnath', 'Silk weaving', 'Temple tour'] },
          { day: 5, title: 'Lucknow', activities: ['Bara Imambara', 'Rumi Darwaza', 'Chowk', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Uttar Pradesh',
        highlights: ['Agra', 'Varanasi', 'Lucknow', 'Mathura', 'Vrindavan', 'Allahabad', 'Ayodhya'],
        schedule: [
          { day: 1, title: 'Agra', activities: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh'] },
          { day: 2, title: 'Mathura-Vrindavan', activities: ['Krishna Janmabhoomi', 'Banke Bihari', 'ISKCON'] },
          { day: 3, title: 'Varanasi', activities: ['Ganga Aarti', 'Boat ride', 'Kashi Vishwanath'] },
          { day: 4, title: 'Varanasi', activities: ['Sarnath', 'Silk weaving', 'Temple tour'] },
          { day: 5, title: 'Allahabad', activities: ['Triveni Sangam', 'Anand Bhavan', 'Allahabad Fort'] },
          { day: 6, title: 'Ayodhya', activities: ['Ram Janmabhoomi', 'Hanuman Garhi', 'Saryu River'] },
          { day: 7, title: 'Lucknow', activities: ['Bara Imambara', 'Rumi Darwaza', 'Departure'] },
        ]
      }
    ]
  },


  // NORTHEAST INDIA
  'assam': {
    name: 'Assam',
    itineraries: [
      {
        days: 1,
        title: 'Guwahati Heritage',
        highlights: ['Kamakhya Temple', 'Umananda Island', 'Brahmaputra Cruise'],
        schedule: [
          { time: '5:00 AM', activity: 'Kamakhya Temple darshan', tip: 'Reach early to avoid queues' },
          { time: '8:00 AM', activity: 'Breakfast at Paradise', tip: 'Assamese thali' },
          { time: '10:00 AM', activity: 'Umananda Island ferry', tip: 'Smallest river island' },
          { time: '12:00 PM', activity: 'Assam State Museum', tip: 'Rich cultural heritage' },
          { time: '2:00 PM', activity: 'Lunch at Khorikaa', tip: 'Traditional Assamese cuisine' },
          { time: '4:00 PM', activity: 'Pobitora Wildlife Sanctuary', tip: 'One-horned rhinos' },
          { time: '6:00 PM', activity: 'Brahmaputra sunset cruise', tip: 'Magical river experience' },
        ]
      },
      {
        days: 3,
        title: 'Assam Wildlife',
        highlights: ['Guwahati', 'Kaziranga', 'Majuli'],
        schedule: [
          { day: 1, title: 'Guwahati', activities: ['Kamakhya Temple', 'Umananda Island', 'Brahmaputra cruise'] },
          { day: 2, title: 'Kaziranga', activities: ['Elephant safari', 'Jeep safari', 'One-horned rhino spotting'] },
          { day: 3, title: 'Majuli', activities: ['World\'s largest river island', 'Satras', 'Mask making'] },
        ]
      },
      {
        days: 5,
        title: 'Assam Explorer',
        highlights: ['Guwahati', 'Kaziranga', 'Majuli', 'Jorhat', 'Sivasagar'],
        schedule: [
          { day: 1, title: 'Guwahati', activities: ['Kamakhya Temple', 'Umananda', 'Brahmaputra cruise'] },
          { day: 2, title: 'Kaziranga', activities: ['Morning elephant safari', 'Evening jeep safari'] },
          { day: 3, title: 'Kaziranga', activities: ['Central range safari', 'Bird watching'] },
          { day: 4, title: 'Majuli', activities: ['Satras visit', 'Mask making', 'Village walks'] },
          { day: 5, title: 'Sivasagar', activities: ['Ahom monuments', 'Rang Ghar', 'Talatal Ghar'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Assam',
        highlights: ['Guwahati', 'Kaziranga', 'Majuli', 'Sivasagar', 'Jorhat', 'Tezpur', 'Manas'],
        schedule: [
          { day: 1, title: 'Guwahati', activities: ['Kamakhya Temple', 'Umananda', 'Brahmaputra cruise'] },
          { day: 2, title: 'Kaziranga', activities: ['Elephant safari', 'Jeep safari', 'Rhino spotting'] },
          { day: 3, title: 'Kaziranga', activities: ['Central range', 'Bird watching', 'Orchid park'] },
          { day: 4, title: 'Majuli', activities: ['Satras', 'Mask making', 'Pottery village'] },
          { day: 5, title: 'Sivasagar', activities: ['Ahom monuments', 'Rang Ghar', 'Talatal Ghar'] },
          { day: 6, title: 'Jorhat', activities: ['Tea gardens', 'Gibbon Wildlife', 'Tea tasting'] },
          { day: 7, title: 'Tezpur', activities: ['Agnigarh Hill', 'Mahabhairab Temple', 'Departure'] },
        ]
      }
    ]
  },

  'meghalaya': {
    name: 'Meghalaya',
    itineraries: [
      {
        days: 1,
        title: 'Shillong Day Trip',
        highlights: ['Elephant Falls', 'Shillong Peak', 'Ward\'s Lake'],
        schedule: [
          { time: '6:00 AM', activity: 'Shillong Peak sunrise', tip: 'Highest point in Shillong' },
          { time: '8:00 AM', activity: 'Breakfast at Dylan\'s Cafe', tip: 'Best coffee in town' },
          { time: '10:00 AM', activity: 'Elephant Falls', tip: 'Three-tiered waterfall' },
          { time: '12:00 PM', activity: 'Don Bosco Museum', tip: 'Northeast culture showcase' },
          { time: '2:00 PM', activity: 'Lunch at Trattoria', tip: 'Italian with local twist' },
          { time: '4:00 PM', activity: 'Ward\'s Lake & Lady Hydari Park', tip: 'Colonial-era gardens' },
          { time: '6:00 PM', activity: 'Police Bazaar shopping', tip: 'Local handicrafts' },
        ]
      },
      {
        days: 3,
        title: 'Meghalaya Waterfalls',
        highlights: ['Shillong', 'Cherrapunji', 'Dawki'],
        schedule: [
          { day: 1, title: 'Shillong', activities: ['Shillong Peak', 'Elephant Falls', 'Don Bosco Museum'] },
          { day: 2, title: 'Cherrapunji', activities: ['Nohkalikai Falls', 'Seven Sisters Falls', 'Mawsmai Cave'] },
          { day: 3, title: 'Dawki', activities: ['Crystal clear Umngot River', 'Boating', 'Bangladesh border'] },
        ]
      },
      {
        days: 5,
        title: 'Meghalaya Explorer',
        highlights: ['Shillong', 'Cherrapunji', 'Dawki', 'Mawlynnong', 'Nongriat'],
        schedule: [
          { day: 1, title: 'Shillong', activities: ['Shillong Peak', 'Elephant Falls', 'Don Bosco Museum'] },
          { day: 2, title: 'Cherrapunji', activities: ['Nohkalikai Falls', 'Seven Sisters Falls', 'Mawsmai Cave'] },
          { day: 3, title: 'Nongriat', activities: ['Double Decker Living Root Bridge trek', 'Rainbow Falls'] },
          { day: 4, title: 'Dawki', activities: ['Umngot River boating', 'Mawlynnong (cleanest village)'] },
          { day: 5, title: 'Shillong', activities: ['Police Bazaar', 'Local food tour', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Meghalaya',
        highlights: ['Shillong', 'Cherrapunji', 'Dawki', 'Mawlynnong', 'Nongriat', 'Jowai', 'Tura'],
        schedule: [
          { day: 1, title: 'Shillong', activities: ['Shillong Peak', 'Elephant Falls', 'Don Bosco Museum'] },
          { day: 2, title: 'Cherrapunji', activities: ['Nohkalikai Falls', 'Seven Sisters Falls', 'Caves'] },
          { day: 3, title: 'Nongriat', activities: ['Living Root Bridge trek', 'Rainbow Falls', 'Village stay'] },
          { day: 4, title: 'Dawki', activities: ['Umngot River', 'Mawlynnong', 'Bangladesh border'] },
          { day: 5, title: 'Jowai', activities: ['Krang Suri Falls', 'Thadlaskein Lake', 'Nartiang monoliths'] },
          { day: 6, title: 'Tura', activities: ['Nokrek Peak', 'Siju Caves', 'Garo Hills'] },
          { day: 7, title: 'Shillong', activities: ['Shopping', 'Local cuisine', 'Departure'] },
        ]
      }
    ]
  },

  'arunachal-pradesh': {
    name: 'Arunachal Pradesh',
    itineraries: [
      {
        days: 1,
        title: 'Itanagar Heritage',
        highlights: ['Ita Fort', 'Ganga Lake', 'Jawaharlal Nehru Museum'],
        schedule: [
          { time: '6:00 AM', activity: 'Sunrise at Ganga Lake', tip: 'Peaceful morning' },
          { time: '8:00 AM', activity: 'Breakfast at local restaurant', tip: 'Try Thukpa' },
          { time: '10:00 AM', activity: 'Ita Fort ruins', tip: '14th century brick fort' },
          { time: '12:00 PM', activity: 'Jawaharlal Nehru Museum', tip: 'Tribal artifacts' },
          { time: '2:00 PM', activity: 'Lunch at Hotel Donn', tip: 'Local cuisine' },
          { time: '4:00 PM', activity: 'Gompa Buddhist Temple', tip: 'Yellow-roofed monastery' },
          { time: '6:00 PM', activity: 'Local market walk', tip: 'Tribal handicrafts' },
        ]
      },
      {
        days: 3,
        title: 'Tawang Monastery',
        highlights: ['Bomdila', 'Dirang', 'Tawang'],
        schedule: [
          { day: 1, title: 'Guwahati to Bomdila', activities: ['Scenic drive', 'Bomdila Monastery', 'Apple orchards'] },
          { day: 2, title: 'Bomdila to Tawang', activities: ['Sela Pass', 'Jaswant Garh', 'Tawang Monastery'] },
          { day: 3, title: 'Tawang', activities: ['Tawang Monastery', 'War Memorial', 'Madhuri Lake'] },
        ]
      },
      {
        days: 5,
        title: 'Arunachal Explorer',
        highlights: ['Bomdila', 'Dirang', 'Tawang', 'Ziro Valley'],
        schedule: [
          { day: 1, title: 'Guwahati to Bomdila', activities: ['Scenic drive', 'Bomdila Monastery'] },
          { day: 2, title: 'Bomdila to Tawang', activities: ['Sela Pass', 'Jaswant Garh', 'Tawang arrival'] },
          { day: 3, title: 'Tawang', activities: ['Tawang Monastery', 'War Memorial', 'Madhuri Lake'] },
          { day: 4, title: 'Dirang', activities: ['Hot springs', 'Sangti Valley', 'Kiwi orchards'] },
          { day: 5, title: 'Ziro Valley', activities: ['Apatani tribe', 'Rice fields', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Arunachal',
        highlights: ['Bomdila', 'Tawang', 'Ziro', 'Namdapha', 'Pasighat'],
        schedule: [
          { day: 1, title: 'Guwahati to Bomdila', activities: ['Scenic drive', 'Bomdila Monastery'] },
          { day: 2, title: 'Bomdila to Tawang', activities: ['Sela Pass', 'Jaswant Garh'] },
          { day: 3, title: 'Tawang', activities: ['Tawang Monastery', 'War Memorial', 'Madhuri Lake'] },
          { day: 4, title: 'Tawang to Dirang', activities: ['Hot springs', 'Sangti Valley'] },
          { day: 5, title: 'Ziro Valley', activities: ['Apatani tribe', 'Rice terraces', 'Village walks'] },
          { day: 6, title: 'Namdapha', activities: ['Tiger Reserve', 'Biodiversity hotspot'] },
          { day: 7, title: 'Pasighat', activities: ['Siang River', 'Daying Ering Wildlife', 'Departure'] },
        ]
      }
    ]
  },


  'sikkim': {
    name: 'Sikkim',
    itineraries: [
      {
        days: 1,
        title: 'Gangtok Day Tour',
        highlights: ['MG Marg', 'Rumtek Monastery', 'Tashi Viewpoint'],
        schedule: [
          { time: '5:00 AM', activity: 'Tashi Viewpoint sunrise', tip: 'Kanchenjunga views' },
          { time: '8:00 AM', activity: 'Breakfast at Baker\'s Cafe', tip: 'Best bakery in town' },
          { time: '10:00 AM', activity: 'Rumtek Monastery', tip: 'Largest monastery in Sikkim' },
          { time: '12:00 PM', activity: 'Do Drul Chorten', tip: 'Important Buddhist stupa' },
          { time: '2:00 PM', activity: 'Lunch at Taste of Tibet', tip: 'Authentic Tibetan food' },
          { time: '4:00 PM', activity: 'Namgyal Institute of Tibetology', tip: 'Buddhist research center' },
          { time: '6:00 PM', activity: 'MG Marg evening walk', tip: 'Shopping & street food' },
        ]
      },
      {
        days: 3,
        title: 'Sikkim Highlights',
        highlights: ['Gangtok', 'Tsomgo Lake', 'Nathula Pass'],
        schedule: [
          { day: 1, title: 'Gangtok', activities: ['Rumtek Monastery', 'Do Drul Chorten', 'MG Marg'] },
          { day: 2, title: 'Tsomgo & Nathula', activities: ['Tsomgo Lake', 'Nathula Pass (Indo-China border)', 'Baba Mandir'] },
          { day: 3, title: 'Gangtok', activities: ['Tashi Viewpoint', 'Hanuman Tok', 'Ganesh Tok', 'Departure'] },
        ]
      },
      {
        days: 5,
        title: 'Sikkim Explorer',
        highlights: ['Gangtok', 'Tsomgo', 'Nathula', 'Pelling', 'Ravangla'],
        schedule: [
          { day: 1, title: 'Gangtok', activities: ['Rumtek Monastery', 'Do Drul Chorten', 'MG Marg'] },
          { day: 2, title: 'Tsomgo & Nathula', activities: ['Tsomgo Lake', 'Nathula Pass', 'Baba Mandir'] },
          { day: 3, title: 'Pelling', activities: ['Pemayangtse Monastery', 'Rabdentse Ruins', 'Kanchenjunga Falls'] },
          { day: 4, title: 'Pelling', activities: ['Skywalk', 'Khecheopalri Lake', 'Singshore Bridge'] },
          { day: 5, title: 'Ravangla', activities: ['Buddha Park', 'Temi Tea Garden', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Sikkim',
        highlights: ['Gangtok', 'Tsomgo', 'Nathula', 'Pelling', 'Ravangla', 'Lachung', 'Yumthang'],
        schedule: [
          { day: 1, title: 'Gangtok', activities: ['Rumtek Monastery', 'Do Drul Chorten', 'MG Marg'] },
          { day: 2, title: 'Tsomgo & Nathula', activities: ['Tsomgo Lake', 'Nathula Pass', 'Baba Mandir'] },
          { day: 3, title: 'Lachung', activities: ['Scenic drive', 'Seven Sisters Waterfall', 'Lachung village'] },
          { day: 4, title: 'Yumthang', activities: ['Valley of Flowers', 'Zero Point', 'Hot springs'] },
          { day: 5, title: 'Pelling', activities: ['Pemayangtse Monastery', 'Rabdentse Ruins', 'Skywalk'] },
          { day: 6, title: 'Pelling', activities: ['Khecheopalri Lake', 'Kanchenjunga Falls', 'Singshore Bridge'] },
          { day: 7, title: 'Ravangla', activities: ['Buddha Park', 'Temi Tea Garden', 'Departure'] },
        ]
      }
    ]
  },

  'nagaland': {
    name: 'Nagaland',
    itineraries: [
      {
        days: 1,
        title: 'Kohima Heritage',
        highlights: ['War Cemetery', 'Kohima Village', 'State Museum'],
        schedule: [
          { time: '6:00 AM', activity: 'Sunrise at Japfu Peak viewpoint', tip: 'Mountain views' },
          { time: '8:00 AM', activity: 'Breakfast at local cafe', tip: 'Try smoked pork' },
          { time: '10:00 AM', activity: 'Kohima War Cemetery', tip: 'WWII memorial' },
          { time: '12:00 PM', activity: 'Kohima Village (Bara Basti)', tip: 'Largest Angami village' },
          { time: '2:00 PM', activity: 'Lunch at Dream Cafe', tip: 'Naga cuisine' },
          { time: '4:00 PM', activity: 'State Museum', tip: 'Tribal artifacts' },
          { time: '6:00 PM', activity: 'Local market walk', tip: 'Naga handicrafts' },
        ]
      },
      {
        days: 3,
        title: 'Nagaland Explorer',
        highlights: ['Kohima', 'Dimapur', 'Dzukou Valley'],
        schedule: [
          { day: 1, title: 'Kohima', activities: ['War Cemetery', 'Kohima Village', 'State Museum'] },
          { day: 2, title: 'Dzukou Valley', activities: ['Trek to valley', 'Lily flowers', 'Camping'] },
          { day: 3, title: 'Dimapur', activities: ['Kachari Ruins', 'Rangapahar Reserve', 'Departure'] },
        ]
      },
      {
        days: 5,
        title: 'Nagaland Culture',
        highlights: ['Kohima', 'Dzukou', 'Dimapur', 'Mokokchung', 'Tuophema'],
        schedule: [
          { day: 1, title: 'Kohima', activities: ['War Cemetery', 'Kohima Village', 'State Museum'] },
          { day: 2, title: 'Dzukou Valley', activities: ['Trek', 'Valley exploration', 'Camping'] },
          { day: 3, title: 'Tuophema', activities: ['Tourist village', 'Tribal homestay', 'Cultural show'] },
          { day: 4, title: 'Mokokchung', activities: ['Ao tribe villages', 'Longkhum', 'Ungma village'] },
          { day: 5, title: 'Dimapur', activities: ['Kachari Ruins', 'Shopping', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Nagaland',
        highlights: ['Kohima', 'Dzukou', 'Mokokchung', 'Mon', 'Tuophema', 'Dimapur'],
        schedule: [
          { day: 1, title: 'Kohima', activities: ['War Cemetery', 'Kohima Village', 'State Museum'] },
          { day: 2, title: 'Dzukou Valley', activities: ['Trek', 'Valley exploration', 'Camping'] },
          { day: 3, title: 'Tuophema', activities: ['Tourist village', 'Tribal homestay'] },
          { day: 4, title: 'Mokokchung', activities: ['Ao tribe', 'Longkhum village', 'Ungma'] },
          { day: 5, title: 'Mon', activities: ['Konyak tribe', 'Headhunter village', 'Tattooed faces'] },
          { day: 6, title: 'Mon', activities: ['Village walks', 'Tribal culture', 'Handicrafts'] },
          { day: 7, title: 'Dimapur', activities: ['Kachari Ruins', 'Shopping', 'Departure'] },
        ]
      }
    ]
  },

  'manipur': {
    name: 'Manipur',
    itineraries: [
      {
        days: 1,
        title: 'Imphal Heritage',
        highlights: ['Kangla Fort', 'Ima Keithel', 'War Cemetery'],
        schedule: [
          { time: '6:00 AM', activity: 'Sunrise at Sendra Island', tip: 'Loktak Lake views' },
          { time: '8:00 AM', activity: 'Breakfast at local restaurant', tip: 'Try Eromba' },
          { time: '10:00 AM', activity: 'Kangla Fort', tip: 'Ancient royal palace' },
          { time: '12:00 PM', activity: 'Ima Keithel (Women\'s Market)', tip: 'All-women market' },
          { time: '2:00 PM', activity: 'Lunch at Classic Hotel', tip: 'Manipuri cuisine' },
          { time: '4:00 PM', activity: 'War Cemetery', tip: 'WWII memorial' },
          { time: '6:00 PM', activity: 'Manipur State Museum', tip: 'Cultural artifacts' },
        ]
      },
      {
        days: 3,
        title: 'Manipur Explorer',
        highlights: ['Imphal', 'Loktak Lake', 'Moirang'],
        schedule: [
          { day: 1, title: 'Imphal', activities: ['Kangla Fort', 'Ima Keithel', 'War Cemetery'] },
          { day: 2, title: 'Loktak Lake', activities: ['Sendra Island', 'Keibul Lamjao (floating park)', 'Sangai deer'] },
          { day: 3, title: 'Moirang', activities: ['INA Memorial', 'Moirang Thangjing Temple', 'Departure'] },
        ]
      },
      {
        days: 5,
        title: 'Manipur Heritage',
        highlights: ['Imphal', 'Loktak', 'Moirang', 'Ukhrul', 'Moreh'],
        schedule: [
          { day: 1, title: 'Imphal', activities: ['Kangla Fort', 'Ima Keithel', 'War Cemetery'] },
          { day: 2, title: 'Loktak Lake', activities: ['Sendra Island', 'Keibul Lamjao', 'Sangai deer'] },
          { day: 3, title: 'Moirang', activities: ['INA Memorial', 'Thangjing Temple'] },
          { day: 4, title: 'Ukhrul', activities: ['Shirui Kashong Peak', 'Shirui Lily', 'Tangkhul tribe'] },
          { day: 5, title: 'Moreh', activities: ['Indo-Myanmar border', 'Border market', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Manipur',
        highlights: ['Imphal', 'Loktak', 'Moirang', 'Ukhrul', 'Moreh', 'Tamenglong', 'Senapati'],
        schedule: [
          { day: 1, title: 'Imphal', activities: ['Kangla Fort', 'Ima Keithel', 'War Cemetery'] },
          { day: 2, title: 'Imphal', activities: ['Manipur State Museum', 'Shree Govindajee Temple'] },
          { day: 3, title: 'Loktak Lake', activities: ['Sendra Island', 'Keibul Lamjao', 'Sangai deer'] },
          { day: 4, title: 'Moirang', activities: ['INA Memorial', 'Thangjing Temple'] },
          { day: 5, title: 'Ukhrul', activities: ['Shirui Peak', 'Shirui Lily', 'Tangkhul villages'] },
          { day: 6, title: 'Tamenglong', activities: ['Zeilad Lake', 'Barak Waterfall', 'Tribal culture'] },
          { day: 7, title: 'Senapati', activities: ['Mao Gate', 'Dzukou Valley entry', 'Departure'] },
        ]
      }
    ]
  },

  'mizoram': {
    name: 'Mizoram',
    itineraries: [
      {
        days: 1,
        title: 'Aizawl City Tour',
        highlights: ['Solomon\'s Temple', 'Durtlang Hills', 'Bara Bazaar'],
        schedule: [
          { time: '5:00 AM', activity: 'Sunrise at Durtlang Hills', tip: 'Panoramic city views' },
          { time: '8:00 AM', activity: 'Breakfast at local cafe', tip: 'Try Mizo breakfast' },
          { time: '10:00 AM', activity: 'Solomon\'s Temple', tip: 'Unique church architecture' },
          { time: '12:00 PM', activity: 'Mizoram State Museum', tip: 'Tribal heritage' },
          { time: '2:00 PM', activity: 'Lunch at David\'s Kitchen', tip: 'Mizo cuisine' },
          { time: '4:00 PM', activity: 'Bara Bazaar', tip: 'Local market experience' },
          { time: '6:00 PM', activity: 'Reiek Heritage Village', tip: 'Traditional Mizo village' },
        ]
      },
      {
        days: 3,
        title: 'Mizoram Explorer',
        highlights: ['Aizawl', 'Reiek', 'Champhai'],
        schedule: [
          { day: 1, title: 'Aizawl', activities: ['Solomon\'s Temple', 'Durtlang Hills', 'State Museum'] },
          { day: 2, title: 'Reiek', activities: ['Heritage Village', 'Reiek Peak trek', 'Mizo culture'] },
          { day: 3, title: 'Champhai', activities: ['Rih Dil Lake', 'Myanmar border views', 'Departure'] },
        ]
      },
      {
        days: 5,
        title: 'Mizoram Heritage',
        highlights: ['Aizawl', 'Reiek', 'Champhai', 'Phawngpui', 'Tam Dil'],
        schedule: [
          { day: 1, title: 'Aizawl', activities: ['Solomon\'s Temple', 'Durtlang Hills', 'State Museum'] },
          { day: 2, title: 'Reiek', activities: ['Heritage Village', 'Reiek Peak', 'Traditional dance'] },
          { day: 3, title: 'Champhai', activities: ['Rih Dil Lake', 'Myanmar border', 'Kung Nawl'] },
          { day: 4, title: 'Phawngpui', activities: ['Blue Mountain', 'Highest peak in Mizoram'] },
          { day: 5, title: 'Tam Dil', activities: ['Lake boating', 'Fishing', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Mizoram',
        highlights: ['Aizawl', 'Reiek', 'Champhai', 'Phawngpui', 'Tam Dil', 'Lunglei', 'Saiha'],
        schedule: [
          { day: 1, title: 'Aizawl', activities: ['Solomon\'s Temple', 'Durtlang Hills', 'State Museum'] },
          { day: 2, title: 'Reiek', activities: ['Heritage Village', 'Reiek Peak', 'Mizo culture'] },
          { day: 3, title: 'Champhai', activities: ['Rih Dil Lake', 'Myanmar border', 'Kung Nawl'] },
          { day: 4, title: 'Phawngpui', activities: ['Blue Mountain trek', 'Orchids', 'Wildlife'] },
          { day: 5, title: 'Lunglei', activities: ['Saikuti Hall', 'Thorangtlang Wildlife', 'Zobawk'] },
          { day: 6, title: 'Saiha', activities: ['Palak Lake', 'Mara tribe', 'Border views'] },
          { day: 7, title: 'Tam Dil', activities: ['Lake activities', 'Fishing', 'Departure'] },
        ]
      }
    ]
  },

  'tripura': {
    name: 'Tripura',
    itineraries: [
      {
        days: 1,
        title: 'Agartala Heritage',
        highlights: ['Ujjayanta Palace', 'Neermahal', 'Tripura Sundari Temple'],
        schedule: [
          { time: '6:00 AM', activity: 'Tripura Sundari Temple darshan', tip: 'One of 51 Shakti Peethas' },
          { time: '9:00 AM', activity: 'Breakfast at local restaurant', tip: 'Try Mui Borok cuisine' },
          { time: '10:00 AM', activity: 'Ujjayanta Palace', tip: 'State Museum inside' },
          { time: '1:00 PM', activity: 'Lunch at Apsara', tip: 'Bengali cuisine' },
          { time: '3:00 PM', activity: 'Neermahal (Lake Palace)', tip: 'India\'s largest water palace' },
          { time: '6:00 PM', activity: 'Jagannath Temple', tip: 'Evening aarti' },
        ]
      },
      {
        days: 3,
        title: 'Tripura Explorer',
        highlights: ['Agartala', 'Unakoti', 'Neermahal'],
        schedule: [
          { day: 1, title: 'Agartala', activities: ['Ujjayanta Palace', 'Tripura Sundari Temple', 'Jagannath Temple'] },
          { day: 2, title: 'Unakoti', activities: ['Rock carvings', 'Shiva sculptures', 'Waterfalls'] },
          { day: 3, title: 'Neermahal', activities: ['Lake Palace', 'Boating', 'Sepahijala Wildlife'] },
        ]
      },
      {
        days: 5,
        title: 'Tripura Heritage',
        highlights: ['Agartala', 'Unakoti', 'Neermahal', 'Sepahijala', 'Jampui Hills'],
        schedule: [
          { day: 1, title: 'Agartala', activities: ['Ujjayanta Palace', 'Tripura Sundari Temple'] },
          { day: 2, title: 'Unakoti', activities: ['Rock carvings', 'Shiva sculptures', 'Waterfalls'] },
          { day: 3, title: 'Neermahal', activities: ['Lake Palace', 'Boating', 'Sunset views'] },
          { day: 4, title: 'Sepahijala', activities: ['Wildlife Sanctuary', 'Primates', 'Botanical garden'] },
          { day: 5, title: 'Jampui Hills', activities: ['Orange festival', 'Tribal villages', 'Departure'] },
        ]
      },
      {
        days: 7,
        title: 'Complete Tripura',
        highlights: ['Agartala', 'Unakoti', 'Neermahal', 'Sepahijala', 'Jampui', 'Pilak', 'Udaipur'],
        schedule: [
          { day: 1, title: 'Agartala', activities: ['Ujjayanta Palace', 'Tripura Sundari Temple'] },
          { day: 2, title: 'Agartala', activities: ['Jagannath Temple', 'Heritage walk', 'Local markets'] },
          { day: 3, title: 'Unakoti', activities: ['Rock carvings', 'Shiva sculptures', 'Waterfalls'] },
          { day: 4, title: 'Neermahal', activities: ['Lake Palace', 'Boating', 'Sunset'] },
          { day: 5, title: 'Udaipur', activities: ['Tripura Sundari Temple', 'Tepania Eco Park'] },
          { day: 6, title: 'Pilak', activities: ['Buddhist ruins', 'Archaeological site', 'Sculptures'] },
          { day: 7, title: 'Jampui Hills', activities: ['Orange orchards', 'Tribal culture', 'Departure'] },
        ]
      }
    ]
  }
}

export const getItineraryByState = (stateId) => itineraries[stateId]
export const getAllItineraries = () => Object.entries(itineraries).map(([id, data]) => ({ id, ...data }))
