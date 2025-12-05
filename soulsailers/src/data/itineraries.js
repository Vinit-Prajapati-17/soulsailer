export const itineraries = {
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
  'kerala': {
    name: 'Kerala',
    itineraries: [
      {
        days: 1,
        title: 'Kochi Heritage Walk',
        highlights: ['Fort Kochi', 'Chinese Fishing Nets', 'Jewish Synagogue'],
        schedule: [
          { time: '7:00 AM', activity: 'Chinese Fishing Nets at sunrise', tip: 'Best photography time' },
          { time: '9:00 AM', activity: 'St. Francis Church & Santa Cruz Basilica', tip: 'Vasco da Gama was buried here' },
          { time: '11:00 AM', activity: 'Mattancherry Palace & Jewish Synagogue', tip: 'Closed on Fridays & Saturdays' },
          { time: '1:00 PM', activity: 'Lunch - Kerala Sadhya', tip: 'Try at Kayees Rahmathulla' },
          { time: '4:00 PM', activity: 'Art galleries & cafes in Fort Kochi', tip: 'Kashi Art Gallery is a must' },
          { time: '7:00 PM', activity: 'Kathakali performance', tip: 'Book at Kerala Kathakali Centre' },
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
      }
    ]
  },

  'gujarat': {
    name: 'Gujarat',
    itineraries: [
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
      }
    ]
  },
  'himachal-pradesh': {
    name: 'Himachal Pradesh',
    itineraries: [
      {
        days: 7,
        title: 'Himalayan Adventure',
        highlights: ['Shimla', 'Manali', 'Kasol', 'Dharamshala'],
        schedule: [
          { day: 1, title: 'Delhi to Shimla', activities: ['Scenic drive', 'Mall Road walk', 'Christ Church'] },
          { day: 2, title: 'Shimla', activities: ['Kufri', 'Jakhu Temple', 'Toy train ride'] },
          { day: 3, title: 'Shimla to Manali', activities: ['Scenic drive via Kullu', 'Naggar Castle', 'Evening in Old Manali'] },
          { day: 4, title: 'Manali', activities: ['Solang Valley', 'Rohtang Pass', 'Adventure activities'] },
          { day: 5, title: 'Manali to Kasol', activities: ['Manikaran Gurudwara', 'Hot springs', 'Riverside camping'] },
          { day: 6, title: 'Kasol to Dharamshala', activities: ['Drive to Dharamshala', 'McLeod Ganj', 'Dalai Lama Temple'] },
          { day: 7, title: 'Dharamshala', activities: ['Triund trek', 'Bhagsu waterfall', 'Return'] },
        ]
      }
    ]
  }
}

export const getItineraryByState = (stateId) => itineraries[stateId]
export const getAllItineraries = () => Object.entries(itineraries).map(([id, data]) => ({ id, ...data }))
