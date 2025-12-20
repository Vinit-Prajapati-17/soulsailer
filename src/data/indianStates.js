const BASE_URL = import.meta.env.BASE_URL;

export const indianStates = [
  // North India
  { 
    id: 'jammu-kashmir', 
    name: 'Jammu & Kashmir', 
    region: 'North', 
    capital: 'Srinagar', 
    bestTime: 'March to October', 
    image: '/soulsailer/Famous Places/J&K/Shrinagar.jpg',
    bannerImage: `${BASE_URL}Banner/Jammu.png`,
    description: 'Paradise on Earth with stunning valleys, lakes, and snow-capped mountains.',
    attractions: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Leh', 'Sonamarg'],
    gallery: [
      '/soulsailer/Famous Places/J&K/Shrinagar.jpg',
      '/soulsailer/Famous Places/J&K/Gulmarg.jpg',
      '/soulsailer/Famous Places/J&K/Pahalgam.jpg',
      '/soulsailer/Famous Places/J&K/Leh.jpg',
      '/soulsailer/Famous Places/J&K/sonamrg.jpg'
    ]
  },
  { 
    id: 'himachal-pradesh', 
    name: 'Himachal Pradesh', 
    region: 'North', 
    capital: 'Shimla', 
    bestTime: 'March to June', 
    image: '/soulsailer/Famous Places/Himachal/Shimla.jpg',
    bannerImage: `${BASE_URL}Banner/himachal.jpg`,
    description: 'Land of gods with beautiful hill stations and adventure sports.',
    attractions: ['Shimla', 'Manali', 'Dharamshala', 'Kasol', 'Spiti Valley'],
    gallery: [
      '/soulsailer/Famous Places/Himachal/Shimla.jpg',
      '/soulsailer/Famous Places/Himachal/Manali.jpg',
      '/soulsailer/Famous Places/Himachal/Dharamshala.jpg',
      '/soulsailer/Famous Places/Himachal/Kasol.jpg',
      '/soulsailer/Famous Places/Himachal/Spiti.jpg'
    ]
  },
  { 
    id: 'punjab', 
    name: 'Punjab', 
    region: 'North', 
    capital: 'Chandigarh', 
    bestTime: 'October to March', 
    image: '/soulsailer/Famous Places/Punjab/amritsar.jpg',
    bannerImage: `${BASE_URL}Banner/punjab.jpg`,
    description: 'Land of five rivers, rich culture, and the Golden Temple.',
    attractions: ['Amritsar', 'Chandigarh', 'Ludhiana', 'Patiala', 'Anandpur Sahib'],
    gallery: [
      '/soulsailer/Famous Places/Punjab/amritsar.jpg',
      '/soulsailer/Famous Places/Punjab/Chandigarh.jpg',
      '/soulsailer/Famous Places/Punjab/ludhiana.jpg',
      '/soulsailer/Famous Places/Punjab/patiala.jpg',
      '/soulsailer/Famous Places/Punjab/Anandpur sahib.jpg'
    ]
  },
  { 
    id: 'uttarakhand', 
    name: 'Uttarakhand', 
    region: 'North', 
    capital: 'Dehradun', 
    bestTime: 'March to June', 
    image: '/soulsailer/Famous Places/UK/Rishikesh.jpg',
    bannerImage: `${BASE_URL}Banner/Uttrakhand.jpg`,
    description: 'Dev Bhoomi - Land of Gods with spiritual sites and Himalayan beauty.',
    attractions: ['Rishikesh', 'Haridwar', 'Nainital', 'Mussoorie', 'Valley of Flowers'],
    gallery: [
      '/soulsailer/Famous Places/UK/Rishikesh.jpg',
      '/soulsailer/Famous Places/UK/haridwar.jpg',
      '/soulsailer/Famous Places/UK/nainital.jpg',
      '/soulsailer/Famous Places/UK/Mussoorie.jpg',
      '/soulsailer/Famous Places/UK/valley of flower.jpg'
    ]
  },
  { 
    id: 'haryana', 
    name: 'Haryana', 
    region: 'North', 
    capital: 'Chandigarh', 
    bestTime: 'October to March', 
    image: '/soulsailer/Famous Places/haryana/kurukshetra.jpg',
    bannerImage: `${BASE_URL}Banner/Haryana.jpg`,
    description: 'Historical land of Mahabharata with rich cultural heritage.',
    attractions: ['Kurukshetra', 'Panchkula', 'Faridabad', 'Gurgaon', 'Sultanpur Bird Sanctuary'],
    gallery: [
      '/soulsailer/Famous Places/haryana/kurukshetra.jpg',
      '/soulsailer/Famous Places/haryana/panchkula.jpg',
      '/soulsailer/Famous Places/haryana/faridabad.jpg',
      '/soulsailer/Famous Places/haryana/gurgaon.jpg',
      '/soulsailer/Famous Places/haryana/Sultanpur.JPG'
    ]
  },
  { 
    id: 'delhi', 
    name: 'Delhi', 
    region: 'North', 
    capital: 'New Delhi', 
    bestTime: 'October to March', 
    image: '/soulsailer/Famous Places/delhi/Red fort.jpg',
    bannerImage: `${BASE_URL}Banner/Delhi.png`,
    description: 'Capital city blending ancient history with modern vibrancy.',
    attractions: ['Red Fort', 'Qutub Minar', 'India Gate', 'Lotus Temple', 'Chandni Chowk'],
    gallery: [
      '/soulsailer/Famous Places/delhi/Red fort.jpg',
      '/soulsailer/Famous Places/delhi/qutub minar.jpg',
      '/soulsailer/Famous Places/delhi/india gate.jpg',
      '/soulsailer/Famous Places/delhi/lotus temple.jpg',
      '/soulsailer/Famous Places/delhi/chandani chowk.jpg'
    ]
  },
  
  // South India
  { 
    id: 'kerala', 
    name: 'Kerala', 
    region: 'South', 
    capital: 'Thiruvananthapuram', 
    bestTime: 'September to March', 
    image: '/soulsailer/Famous Places/Kerala/alleppey.jpeg',
    bannerImage: `${BASE_URL}Banner/Kerala.jpg`,
    description: 'God\'s Own Country with backwaters, beaches, and Ayurveda.',
    attractions: ['Alleppey', 'Munnar', 'Kochi', 'Thekkady', 'Kovalam'],
    gallery: [
      '/soulsailer/Famous Places/Kerala/alleppey.jpeg',
      '/soulsailer/Famous Places/Kerala/Munnar.jpg',
      '/soulsailer/Famous Places/Kerala/kochi.jpg',
      '/soulsailer/Famous Places/Kerala/thekkady.jpg',
      '/soulsailer/Famous Places/Kerala/kovalam.jpg'
    ]
  },
  { 
    id: 'tamil-nadu', 
    name: 'Tamil Nadu', 
    region: 'South', 
    capital: 'Chennai', 
    bestTime: 'November to February', 
    image: '/soulsailer/Famous Places/tamilnadu/madurai.jpg',
    bannerImage: `${BASE_URL}Banner/Tamil.jpg`,
    description: 'Land of temples, classical arts, and rich Dravidian culture.',
    attractions: ['Kanyakumari', 'Madurai', 'Ooty', 'Mahabalipuram', 'Rameswaram'],
    gallery: [
      '/soulsailer/Famous Places/tamilnadu/kanyakumari.jpg',
      '/soulsailer/Famous Places/tamilnadu/madurai.jpg',
      '/soulsailer/Famous Places/tamilnadu/ooty.jpg',
      '/soulsailer/Famous Places/tamilnadu/mahabalipuram.jpg',
      '/soulsailer/Famous Places/tamilnadu/rameswaram.jpg'
    ]
  },
  { 
    id: 'karnataka', 
    name: 'Karnataka', 
    region: 'South', 
    capital: 'Bengaluru', 
    bestTime: 'October to February', 
    image: '/soulsailer/Famous Places/KARNATAKA/mysore.jpg',
    bannerImage: `${BASE_URL}Banner/Karnataka.jpg`,
    description: 'Silicon Valley of India with heritage sites and natural beauty.',
    attractions: ['Bengaluru', 'Mysore', 'Hampi', 'Coorg', 'Gokarna'],
    gallery: [
      '/soulsailer/Famous Places/KARNATAKA/benglurur.jpg',
      '/soulsailer/Famous Places/KARNATAKA/mysore.jpg',
      '/soulsailer/Famous Places/KARNATAKA/Hampi.jpg',
      '/soulsailer/Famous Places/KARNATAKA/coorg.jpg',
      '/soulsailer/Famous Places/KARNATAKA/gokarna.jpg'
    ]
  },
  { 
    id: 'andhra-pradesh', 
    name: 'Andhra Pradesh', 
    region: 'South', 
    capital: 'Amaravati', 
    bestTime: 'October to February', 
    image: '/soulsailer/Famous Places/Andhra pradesh/tirupati.jpg',
    bannerImage: `${BASE_URL}Banner/Andhra.jpg`,
    description: 'Land of Tirupati and beautiful coastal regions.',
    attractions: ['Tirupati', 'Visakhapatnam', 'Vijayawada', 'Lepakshi', 'Araku Valley'],
    gallery: [
      '/soulsailer/Famous Places/Andhra pradesh/tirupati.jpg',
      '/soulsailer/Famous Places/Andhra pradesh/vishakhapattanam.jpg',
      '/soulsailer/Famous Places/Andhra pradesh/vijayawada.jpg',
      '/soulsailer/Famous Places/Andhra pradesh/lepakshi.jpg',
      '/soulsailer/Famous Places/Andhra pradesh/araku-valley.jpg'
    ]
  },
  { 
    id: 'telangana', 
    name: 'Telangana', 
    region: 'South', 
    capital: 'Hyderabad', 
    bestTime: 'October to February', 
    image: '/soulsailer/Famous Places/telangana/charminar.jpg',
    bannerImage: `${BASE_URL}Banner/Telangana.png`,
    description: 'City of Pearls with Charminar and rich Nizami heritage.',
    attractions: ['Hyderabad', 'Charminar', 'Golconda Fort', 'Ramoji Film City', 'Warangal'],
    gallery: [
      '/soulsailer/Famous Places/telangana/hyderabad.jpg',
      '/soulsailer/Famous Places/telangana/charminar.jpg',
      '/soulsailer/Famous Places/telangana/golconda fort.jpg',
      '/soulsailer/Famous Places/telangana/ramoji film city.jpg',
      '/soulsailer/Famous Places/telangana/warangal.jpg'
    ]
  },
  
  // West India
  { 
    id: 'rajasthan', 
    name: 'Rajasthan', 
    region: 'West', 
    capital: 'Jaipur', 
    bestTime: 'October to March', 
    image: '/soulsailer/Famous Places/rajasthan/jaipur.jpg',
    bannerImage: `${BASE_URL}Banner/Raj.jpg`,
    description: 'Land of Kings with majestic forts, palaces, and desert landscapes.',
    attractions: ['Jaipur', 'Udaipur', 'Jaisalmer', 'Jodhpur', 'Chittorgarh'],
    gallery: [
      '/soulsailer/Famous Places/rajasthan/jaipur.jpg',
      '/soulsailer/Famous Places/rajasthan/udaipur.jpg',
      '/soulsailer/Famous Places/rajasthan/jaisalmer.jpg',
      '/soulsailer/Famous Places/rajasthan/jodhpur.jpg',
      '/soulsailer/Famous Places/rajasthan/Chittorgarh.JPG'
    ]
  },
  { 
    id: 'gujarat', 
    name: 'Gujarat', 
    region: 'West', 
    capital: 'Gandhinagar', 
    bestTime: 'October to February', 
    image: '/soulsailer/Famous Places/gujarat/statue of unity.jpg',
    bannerImage: `${BASE_URL}Banner/Gujrat.jpg`,
    description: 'Land of legends with Gir lions and vibrant culture.',
    attractions: ['Rann of Kutch', 'Gir National Park', 'Somnath Temple', 'Dwarka', 'Statue of Unity', 'Ahmedabad'],
    gallery: [
      '/soulsailer/Famous Places/gujarat/rann of katch.jpg',
      '/soulsailer/Famous Places/gujarat/gir national.jpg',
      '/soulsailer/Famous Places/gujarat/somnath.jpg',
      '/soulsailer/Famous Places/gujarat/dwarka.jpg',
      '/soulsailer/Famous Places/gujarat/statue of unity.jpg',
      '/soulsailer/Famous Places/gujarat/ahmedabad.jpg'
    ]
  },
  { 
    id: 'maharashtra', 
    name: 'Maharashtra', 
    region: 'West', 
    capital: 'Mumbai', 
    bestTime: 'October to February', 
    image: '/soulsailer/Famous Places/maharastra/mumbai.jpg',
    bannerImage: `${BASE_URL}Banner/Maharashtra.jpg`,
    description: 'Financial capital with beaches, caves, and hill stations.',
    attractions: ['Mumbai', 'Pune', 'Ajanta Caves', 'Harihar Fort', 'Lonavala'],
    gallery: [
      '/soulsailer/Famous Places/maharastra/mumbai.jpg',
      '/soulsailer/Famous Places/maharastra/pune.jpg',
      '/soulsailer/Famous Places/maharastra/ajanta caves.jpg',
      '/soulsailer/Famous Places/maharastra/harihar fort.jpg',
      '/soulsailer/Famous Places/maharastra/lonavala.jpeg'
    ]
  },
  { 
    id: 'goa', 
    name: 'Goa', 
    region: 'West', 
    capital: 'Panaji', 
    bestTime: 'November to February', 
    image: '/soulsailer/Famous Places/goa/baga beach.jpg',
    bannerImage: `${BASE_URL}Banner/goa.jpg`,
    description: 'Beach paradise with Portuguese heritage and vibrant nightlife.',
    attractions: ['Baga Beach', 'Old Goa', 'Dudhsagar Falls', 'Anjuna Beach', 'Palolem Beach'],
    gallery: [
      '/soulsailer/Famous Places/goa/baga beach.jpg',
      '/soulsailer/Famous Places/goa/old goa.jpg',
      '/soulsailer/Famous Places/goa/dudhsagar fall.jpg',
      '/soulsailer/Famous Places/goa/anjuna beach.jpg',
      '/soulsailer/Famous Places/goa/palolem beach.jpg'
    ]
  },

  // East India
  { 
    id: 'west-bengal', 
    name: 'West Bengal', 
    region: 'East', 
    capital: 'Kolkata', 
    bestTime: 'October to March', 
    image: '/soulsailer/Famous Places/WB/kolkata.jpg',
    bannerImage: `${BASE_URL}Banner/West.jpg`,
    description: 'Cultural capital with Durga Puja, Darjeeling, and Sundarbans.',
    attractions: ['Kolkata', 'Darjeeling', 'Sundarbans', 'Shantiniketan', 'Digha'],
    gallery: [
      '/soulsailer/Famous Places/WB/kolkata.jpg',
      '/soulsailer/Famous Places/WB/darjileeng.jpg',
      '/soulsailer/Famous Places/WB/sundarbans.jpg',
      '/soulsailer/Famous Places/WB/shantiniketan.jpg',
      '/soulsailer/Famous Places/WB/digha.jpg'
    ]
  },
  { 
    id: 'odisha', 
    name: 'Odisha', 
    region: 'East', 
    capital: 'Bhubaneswar', 
    bestTime: 'October to February', 
    image: '/soulsailer/Famous Places/odisha/konark.jpg',
    bannerImage: `${BASE_URL}Banner/Or.jpg`,
    description: 'Land of temples with Konark Sun Temple and pristine beaches.',
    attractions: ['Puri', 'Konark', 'Bhubaneswar', 'Chilika Lake', 'Cuttack'],
    gallery: [
      '/soulsailer/Famous Places/odisha/puri.jpg',
      '/soulsailer/Famous Places/odisha/konark.jpg',
      '/soulsailer/Famous Places/odisha/bhuvneswar.jpg',
      '/soulsailer/Famous Places/odisha/chilika lake.jpg',
      '/soulsailer/Famous Places/odisha/cuttak.jpg'
    ]
  },
  { 
    id: 'bihar', 
    name: 'Bihar', 
    region: 'East', 
    capital: 'Patna', 
    bestTime: 'October to March', 
    image: '/soulsailer/Famous Places/BIHAR/BODH GAYA.jpg',
    bannerImage: `${BASE_URL}Banner/Bihar.jpg`,
    description: 'Birthplace of Buddhism with Bodh Gaya and Nalanda.',
    attractions: ['Bodh Gaya', 'Nalanda', 'Patna', 'Rajgir'],
    gallery: [
      '/soulsailer/Famous Places/BIHAR/BODH GAYA.jpg',
      '/soulsailer/Famous Places/BIHAR/NALANDA.jpg',
      '/soulsailer/Famous Places/BIHAR/PATNA.JPG',
      '/soulsailer/Famous Places/BIHAR/RAJGIR.jpg'
    ]
  },
  { 
    id: 'jharkhand', 
    name: 'Jharkhand', 
    region: 'East', 
    capital: 'Ranchi', 
    bestTime: 'October to March', 
    image: '/soulsailer/Famous Places/JHARKHAND/HUNDRUFALLS.jpg',
    bannerImage: `${BASE_URL}Banner/Jarkhand.jpg`,
    description: 'Land of forests with waterfalls and tribal culture.',
    attractions: ['Ranchi', 'Jamshedpur', 'Deoghar', 'Netarhat', 'Hundru Falls'],
    gallery: [
      '/soulsailer/Famous Places/JHARKHAND/RANCHI.jpg',
      '/soulsailer/Famous Places/JHARKHAND/JAMSHEDPUR.jpg',
      '/soulsailer/Famous Places/JHARKHAND/DEOGHAR.jpg',
      '/soulsailer/Famous Places/JHARKHAND/NETARHAT.jpg',
      '/soulsailer/Famous Places/JHARKHAND/HUNDRUFALLS.jpg'
    ]
  },
  
  // Central India
  { 
    id: 'madhya-pradesh', 
    name: 'Madhya Pradesh', 
    region: 'Central', 
    capital: 'Bhopal', 
    bestTime: 'October to March', 
    image: '/soulsailer/Famous Places/MP/KHAJURAHO.jpg',
    bannerImage: `${BASE_URL}Banner/MP.jpg`,
    description: 'Heart of India with Khajuraho, wildlife, and heritage sites.',
    attractions: ['Khajuraho', 'Sanchi', 'Bhopal', 'Orchha', 'Bandhavgarh'],
    gallery: [
      '/soulsailer/Famous Places/MP/KHAJURAHO.jpg',
      '/soulsailer/Famous Places/MP/SANCHI.jpg',
      '/soulsailer/Famous Places/MP/BHOPAL.jpg',
      '/soulsailer/Famous Places/MP/ORACHHA.jpg',
      '/soulsailer/Famous Places/MP/BANDHAVGARH.jpg'
    ]
  },
  { 
    id: 'chhattisgarh', 
    name: 'Chhattisgarh', 
    region: 'Central', 
    capital: 'Raipur', 
    bestTime: 'October to February', 
    image: '/soulsailer/Famous Places/CHHATISGARH/CHITRAKOTE FALLS.jpg',
    bannerImage: `${BASE_URL}Banner/Chhattisgarh.jpg`,
    description: 'Unexplored gem with waterfalls, caves, and tribal heritage.',
    attractions: ['Raipur', 'Chitrakote Falls', 'Bastar', 'Sirpur'],
    gallery: [
      '/soulsailer/Famous Places/CHHATISGARH/RAIPUR.jpg',
      '/soulsailer/Famous Places/CHHATISGARH/CHITRAKOTE FALLS.jpg',
      '/soulsailer/Famous Places/CHHATISGARH/BASTAR.jpg',
      '/soulsailer/Famous Places/CHHATISGARH/Sirpur.jpg'
    ]
  },
  { 
    id: 'uttar-pradesh', 
    name: 'Uttar Pradesh', 
    region: 'Central', 
    capital: 'Lucknow', 
    bestTime: 'October to March', 
    image: '/soulsailer/Famous Places/UP/AGRA.jpg',
    bannerImage: `${BASE_URL}Banner/UP.jpg`,
    description: 'Land of Taj Mahal, Varanasi, and spiritual heritage.',
    attractions: ['Agra', 'Varanasi', 'Lucknow', 'Mathura', 'Vrindavan'],
    gallery: [
      '/soulsailer/Famous Places/UP/AGRA.jpg',
      '/soulsailer/Famous Places/UP/VARANASI.jpg',
      '/soulsailer/Famous Places/UP/LUCKNOW.jpg',
      '/soulsailer/Famous Places/UP/MATHURA.jpg',
      '/soulsailer/Famous Places/UP/VRINDAVAN.jpg'
    ]
  },
  
  // Northeast India
  { 
    id: 'assam', 
    name: 'Assam', 
    region: 'Northeast', 
    capital: 'Dispur', 
    bestTime: 'October to April', 
    image: '/soulsailer/Famous Places/ASSAM/KAZIRANGA.jpg',
    bannerImage: `${BASE_URL}Banner/Assam.jpg`,
    description: 'Land of tea gardens, one-horned rhinos, and Brahmaputra.',
    attractions: ['Guwahati', 'Kaziranga', 'Majuli', 'Jorhat', 'Sivasagar'],
    gallery: [
      '/soulsailer/Famous Places/ASSAM/GUWAHATI.jpg',
      '/soulsailer/Famous Places/ASSAM/KAZIRANGA.jpg',
      '/soulsailer/Famous Places/ASSAM/Majuli.jpg',
      '/soulsailer/Famous Places/ASSAM/JORHAT.jpg',
      '/soulsailer/Famous Places/ASSAM/SIVASAGAR.JPG'
    ]
  },
  { 
    id: 'meghalaya', 
    name: 'Meghalaya', 
    region: 'Northeast', 
    capital: 'Shillong', 
    bestTime: 'October to May', 
    image: '/soulsailer/Famous Places/MEGHALAYA/CHERAPUNJI.jpg',
    bannerImage: `${BASE_URL}Banner/Meghalaya.jpg`,
    description: 'Abode of clouds with living root bridges and waterfalls.',
    attractions: ['Shillong', 'Cherrapunji', 'Dawki', 'Mawlynnong', 'Nongriat'],
    gallery: [
      '/soulsailer/Famous Places/MEGHALAYA/SHILONG.jpg',
      '/soulsailer/Famous Places/MEGHALAYA/CHERAPUNJI.jpg',
      '/soulsailer/Famous Places/MEGHALAYA/DAWKI.jpg',
      '/soulsailer/Famous Places/MEGHALAYA/MAWLYNNONG.jpg',
      '/soulsailer/Famous Places/MEGHALAYA/NONGRIAT.jpeg'
    ]
  },
  { 
    id: 'arunachal-pradesh', 
    name: 'Arunachal Pradesh', 
    region: 'Northeast', 
    capital: 'Itanagar', 
    bestTime: 'March to October', 
    image: '/soulsailer/Famous Places/ARUNACHAL/TAWANG.jpg',
    bannerImage: `${BASE_URL}Banner/Arunachal-2.jpg`,
    description: 'Land of rising sun with monasteries and pristine nature.',
    attractions: ['Tawang', 'Ziro Valley', 'Bomdila', 'Namdapha', 'Itanagar'],
    gallery: [
      '/soulsailer/Famous Places/ARUNACHAL/TAWANG.jpg',
      '/soulsailer/Famous Places/ARUNACHAL/ZIRO VALLEY.jpg',
      '/soulsailer/Famous Places/ARUNACHAL/BOMDILA.jpg',
      '/soulsailer/Famous Places/ARUNACHAL/NAMDAPHA.jpg',
      '/soulsailer/Famous Places/ARUNACHAL/ITANAGAR.jpg'
    ]
  },
  { 
    id: 'sikkim', 
    name: 'Sikkim', 
    region: 'Northeast', 
    capital: 'Gangtok', 
    bestTime: 'March to May', 
    image: '/soulsailer/Famous Places/SIKKIM/GANGTOK.jpg',
    bannerImage: `${BASE_URL}Banner/Sikkim.jpg`,
    description: 'Himalayan paradise with monasteries and Kanchenjunga views.',
    attractions: ['Gangtok', 'Pelling', 'Tsomgo Lake', 'Nathula Pass', 'Ravangla'],
    gallery: [
      '/soulsailer/Famous Places/SIKKIM/GANGTOK.jpg',
      '/soulsailer/Famous Places/SIKKIM/PELLING.jpg',
      '/soulsailer/Famous Places/SIKKIM/TSOMGO LAKE.jpg',
      '/soulsailer/Famous Places/SIKKIM/NATHULA PASS.jpg',
      '/soulsailer/Famous Places/SIKKIM/RAVANGLA.jpg'
    ]
  },
  { 
    id: 'nagaland', 
    name: 'Nagaland', 
    region: 'Northeast', 
    capital: 'Kohima', 
    bestTime: 'October to May', 
    image: '/soulsailer/Famous Places/NAGALAND/Hornbill-Festival.jpg',
    bannerImage: `${BASE_URL}Banner/Nagaland.jpg`,
    description: 'Land of festivals with Hornbill Festival and tribal culture.',
    attractions: ['Kohima', 'Dimapur', 'Mokokchung', 'Dzukou Valley', 'Hornbill Festival'],
    gallery: [
      '/soulsailer/Famous Places/NAGALAND/KOHIMA.jpg',
      '/soulsailer/Famous Places/NAGALAND/DIMAPUR.jpg',
      '/soulsailer/Famous Places/NAGALAND/MOKOKCHUNG.jpg',
      '/soulsailer/Famous Places/NAGALAND/DZUKOU VALLEY.jpg',
      '/soulsailer/Famous Places/NAGALAND/Hornbill-Festival.jpg'
    ]
  },
  { 
    id: 'manipur', 
    name: 'Manipur', 
    region: 'Northeast', 
    capital: 'Imphal', 
    bestTime: 'October to February', 
    image: '/soulsailer/Famous Places/MANIPUR/LOKTAK LAKE.jpg',
    bannerImage: `${BASE_URL}Banner/manipur.jpg`,
    description: 'Jewel of India with Loktak Lake and rich dance traditions.',
    attractions: ['Imphal', 'Loktak Lake', 'Keibul Lamjao', 'Kangla Fort', 'Ukhrul'],
    gallery: [
      '/soulsailer/Famous Places/MANIPUR/IMPHAL.jpg',
      '/soulsailer/Famous Places/MANIPUR/LOKTAK LAKE.jpg',
      '/soulsailer/Famous Places/MANIPUR/Keibul Lamjao.jpg',
      '/soulsailer/Famous Places/MANIPUR/kangla-fort.jpeg',
      '/soulsailer/Famous Places/MANIPUR/UKHRUL.jpg'
    ]
  },
  { 
    id: 'mizoram', 
    name: 'Mizoram', 
    region: 'Northeast', 
    capital: 'Aizawl', 
    bestTime: 'October to March', 
    image: '/soulsailer/Famous Places/MIZORAM/AIZWAL.jpg',
    bannerImage: `${BASE_URL}Banner/Mizoram.jpg`,
    description: 'Land of blue mountains with scenic beauty and culture.',
    attractions: ['Aizawl', 'Champhai', 'Reiek', 'Phawngpui Peak', 'Tam Dil Lake'],
    gallery: [
      '/soulsailer/Famous Places/MIZORAM/AIZWAL.jpg',
      '/soulsailer/Famous Places/MIZORAM/CHAMPHAI.jpg',
      '/soulsailer/Famous Places/MIZORAM/REIEK.jpg',
      '/soulsailer/Famous Places/MIZORAM/PHAWANGPUI PEAK.jpg',
      '/soulsailer/Famous Places/MIZORAM/TAM DIL.jpg'
    ]
  },
  { 
    id: 'tripura', 
    name: 'Tripura', 
    region: 'Northeast', 
    capital: 'Agartala', 
    bestTime: 'September to February', 
    image: '/soulsailer/Famous Places/TRIPURA/NEERMAHAL.jpg',
    bannerImage: `${BASE_URL}Banner/Tripura.jpg`,
    description: 'Land of palaces with Ujjayanta Palace and rock carvings.',
    attractions: ['Agartala', 'Ujjayanta Palace', 'Neermahal', 'Unakoti', 'Sepahijala'],
    gallery: [
      '/soulsailer/Famous Places/TRIPURA/AGARTALA.jpg',
      '/soulsailer/Famous Places/TRIPURA/UJJAYANTA PLACE.jpg',
      '/soulsailer/Famous Places/TRIPURA/NEERMAHAL.jpg',
      '/soulsailer/Famous Places/TRIPURA/UNAKOTI.jpg',
      '/soulsailer/Famous Places/TRIPURA/SEPAHIJALA.jpg'
    ]
  },
]

export const getStateById = (id) => indianStates.find(state => state.id === id)
