import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Attraction data with images and USPs
const attractionData = {
  // France
  "Paris": { image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400", usp: "City of Love with Eiffel Tower, Louvre & cafés" },
  "Nice": { image: "https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=400", usp: "French Riviera gem with azure waters & promenades" },
  "Lyon": { image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400", usp: "Gastronomic capital with Renaissance architecture" },
  "Provence": { image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400", usp: "Lavender fields, vineyards & charming villages" },
  "French Riviera": { image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=400", usp: "Glamorous coastline with Cannes & Monaco" },
  // Japan
  "Tokyo": { image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400", usp: "World's largest metropolitan area with neon lights & anime culture" },
  "Kyoto": { image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400", usp: "Ancient capital with 2000+ temples & traditional geisha districts" },
  "Mount Fuji": { image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400", usp: "Japan's iconic sacred mountain & UNESCO World Heritage Site" },
  "Osaka": { image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400", usp: "Japan's kitchen with street food paradise & vibrant nightlife" },
  "Hiroshima": { image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?w=400", usp: "Peace Memorial & resilient city reborn from history" },
  // Thailand
  "Bangkok": { image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400", usp: "Vibrant capital with ornate temples & legendary street food" },
  "Phuket": { image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400", usp: "Thailand's largest island with stunning beaches & nightlife" },
  "Chiang Mai": { image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400", usp: "Mountain city with 300+ temples & elephant sanctuaries" },
  "Krabi": { image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400", usp: "Limestone cliffs, emerald waters & island hopping paradise" },
  "Pattaya": { image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400", usp: "Beach resort city with water sports & entertainment" },
  // Italy
  "Rome": { image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400", usp: "Eternal City with Colosseum, Vatican & ancient ruins" },
  "Venice": { image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=400", usp: "Floating city with gondolas & romantic canals" },
  "Florence": { image: "https://images.unsplash.com/photo-1543429258-c5ca3cb3f3ca?w=400", usp: "Renaissance art capital with Duomo & Uffizi" },
  "Milan": { image: "https://images.unsplash.com/photo-1520440229-6469a149ac59?w=400", usp: "Fashion capital with Gothic cathedral & La Scala" },
  "Amalfi Coast": { image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=400", usp: "Dramatic cliffside villages & Mediterranean beauty" },
  // Spain
  "Barcelona": { image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400", usp: "Gaudí's masterpieces, beaches & vibrant nightlife" },
  "Madrid": { image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400", usp: "Royal Palace, Prado Museum & tapas culture" },
  "Seville": { image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400", usp: "Flamenco birthplace with Alcázar & Gothic cathedral" },
  "Granada": { image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=400", usp: "Alhambra palace & Moorish heritage" },
  "Ibiza": { image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400", usp: "World-famous party island & beautiful beaches" },
  // Singapore
  "Marina Bay": { image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400", usp: "Iconic skyline with Marina Bay Sands & light shows" },
  "Sentosa": { image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400", usp: "Resort island with Universal Studios & beaches" },
  "Gardens by the Bay": { image: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=400", usp: "Futuristic Supertrees & world's largest glass greenhouse" },
  "Orchard Road": { image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400", usp: "Premier shopping boulevard with luxury brands" },
  "Chinatown": { image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400", usp: "Heritage district with temples & hawker food" },
  // Vietnam
  "Ha Long Bay": { image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400", usp: "UNESCO site with 1600+ limestone islands & caves" },
  "Ho Chi Minh City": { image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400", usp: "Dynamic metropolis with French colonial architecture" },
  "Hanoi": { image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=400", usp: "Ancient capital with Old Quarter & street food culture" },
  "Hoi An": { image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400", usp: "Lantern-lit ancient town & tailor-made fashion" },
  "Da Nang": { image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400", usp: "Coastal city with marble mountains & dragon bridge" },
  // Indonesia
  "Bali": { image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400", usp: "Island of Gods with temples, rice terraces & beaches" },
  "Jakarta": { image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=400", usp: "Bustling capital with museums & vibrant nightlife" },
  "Yogyakarta": { image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=400", usp: "Cultural heart with Borobudur & Prambanan temples" },
  "Komodo Island": { image: "https://images.unsplash.com/photo-1570789210967-2cac24ba7f2b?w=400", usp: "Home of Komodo dragons & pink beaches" },
  "Raja Ampat": { image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=400", usp: "World's best diving with 75% of coral species" },
  // Malaysia
  "Kuala Lumpur": { image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400", usp: "Iconic Petronas Towers & multicultural food scene" },
  "Langkawi": { image: "https://images.unsplash.com/photo-1609946860441-a51ffcf22208?w=400", usp: "Duty-free island with sky bridge & mangroves" },
  "Penang": { image: "https://images.unsplash.com/photo-1592364395653-83e648b20cc2?w=400", usp: "UNESCO heritage with best street food in Asia" },
  "Borneo": { image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400", usp: "Ancient rainforests with orangutans & Mount Kinabalu" },
  "Cameron Highlands": { image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400", usp: "Cool hill station with tea plantations & strawberry farms" },
  // UAE
  "Dubai": { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400", usp: "Futuristic city with world's tallest buildings & luxury malls" },
  "Abu Dhabi": { image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400", usp: "Capital with Sheikh Zayed Mosque & Louvre museum" },
  "Burj Khalifa": { image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400", usp: "World's tallest building at 828m with stunning views" },
  "Palm Jumeirah": { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400", usp: "Man-made island with luxury resorts & Atlantis" },
  "Desert Safari": { image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400", usp: "Dune bashing, camel rides & Bedouin camp experience" },
  // Switzerland
  "Zurich": { image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400", usp: "Financial hub with Old Town & lake views" },
  "Geneva": { image: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=400", usp: "International city with Jet d'Eau & UN headquarters" },
  "Interlaken": { image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400", usp: "Adventure capital between two stunning lakes" },
  "Lucerne": { image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=400", usp: "Medieval charm with Chapel Bridge & Mount Pilatus" },
  "Zermatt": { image: "https://images.unsplash.com/photo-1529923986776-f5e8c8e5b8e5?w=400", usp: "Car-free village with iconic Matterhorn views" },
  // Greece
  "Athens": { image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=400", usp: "Acropolis, Parthenon & birthplace of democracy" },
  "Santorini": { image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400", usp: "Iconic blue domes, sunsets & volcanic beaches" },
  "Mykonos": { image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=400", usp: "Cosmopolitan island with windmills & beach clubs" },
  "Crete": { image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400", usp: "Largest island with Minoan ruins & gorges" },
  "Rhodes": { image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400", usp: "Medieval Old Town & ancient Colossus site" },
  // UK
  "London": { image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400", usp: "Big Ben, Buckingham Palace & world-class museums" },
  "Edinburgh": { image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=400", usp: "Historic castle, Royal Mile & festival city" },
  "Oxford": { image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=400", usp: "Prestigious university & Harry Potter filming sites" },
  "Bath": { image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400", usp: "Roman baths & Georgian architecture" },
  "Stonehenge": { image: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?w=400", usp: "Mysterious prehistoric monument & UNESCO site" },
  // USA
  "New York": { image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400", usp: "The Big Apple with Times Square, Central Park & Broadway" },
  "Los Angeles": { image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400", usp: "Hollywood, beaches & entertainment capital" },
  "Las Vegas": { image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=400", usp: "Entertainment capital with casinos & shows" },
  "San Francisco": { image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400", usp: "Golden Gate Bridge, cable cars & tech hub" },
  "Miami": { image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=400", usp: "Art Deco, beaches & Latin American vibes" },
  // Canada
  "Toronto": { image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400", usp: "CN Tower, multicultural food & vibrant arts scene" },
  "Vancouver": { image: "https://images.unsplash.com/photo-1559511260-66a68e7e7a8a?w=400", usp: "Mountains meet ocean with Stanley Park" },
  "Montreal": { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", usp: "French-Canadian culture & historic Old Montreal" },
  "Banff": { image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400", usp: "Rocky Mountain paradise with turquoise lakes" },
  "Niagara Falls": { image: "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=400", usp: "Iconic waterfalls on US-Canada border" },
  // Mexico
  "Cancun": { image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=400", usp: "Caribbean beaches & Mayan Riviera gateway" },
  "Mexico City": { image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400", usp: "Historic center, museums & incredible food" },
  "Playa del Carmen": { image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=400", usp: "Trendy beach town with 5th Avenue shopping" },
  "Tulum": { image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400", usp: "Clifftop Mayan ruins & bohemian beach vibes" },
  "Oaxaca": { image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400", usp: "Indigenous culture, mezcal & artisan crafts" },
  // Brazil
  "Rio de Janeiro": { image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400", usp: "Christ the Redeemer, Copacabana & Carnival" },
  "São Paulo": { image: "https://images.unsplash.com/photo-1554168848-228452c09d60?w=400", usp: "Largest city in South America with art & food" },
  "Amazon": { image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400", usp: "World's largest rainforest & biodiversity hotspot" },
  "Iguazu Falls": { image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400", usp: "275 waterfalls spanning Brazil-Argentina border" },
  "Salvador": { image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400", usp: "Afro-Brazilian culture & colorful Pelourinho" },
  // Australia
  "Sydney": { image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400", usp: "Opera House, Harbour Bridge & Bondi Beach" },
  "Melbourne": { image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400", usp: "Coffee culture, street art & sports capital" },
  "Great Barrier Reef": { image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400", usp: "World's largest coral reef system & marine life" },
  "Uluru": { image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=400", usp: "Sacred red rock & Aboriginal cultural site" },
  "Gold Coast": { image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400", usp: "Surf beaches, theme parks & nightlife" },
  
  // INDIAN STATES ATTRACTIONS
  // Gujarat
  "Rann of Kutch": { image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400", usp: "World's largest salt desert with stunning white landscape & Rann Utsav festival" },
  "Gir National Park": { image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=400", usp: "Only home of Asiatic lions in the world & premier wildlife sanctuary" },
  "Somnath Temple": { image: "https://images.unsplash.com/photo-1621427638996-d782d7e8c68a?w=400", usp: "First of 12 Jyotirlingas & ancient pilgrimage site rebuilt 17 times" },
  "Dwarka": { image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=400", usp: "Sacred city of Lord Krishna & one of four Char Dham pilgrimage sites" },
  "Statue of Unity": { image: "https://images.unsplash.com/photo-1609948543911-7f86e3f56c4d?w=400", usp: "World's tallest statue at 182m honoring Sardar Vallabhbhai Patel" },
  "Ahmedabad": { image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=400", usp: "UNESCO World Heritage City with Sabarmati Ashram & vibrant old town" },
  
  // Rajasthan
  "Jaipur": { image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400", usp: "Pink City with Hawa Mahal, Amber Fort & royal palaces" },
  "Udaipur": { image: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=400", usp: "City of Lakes with romantic palaces & Rajput heritage" },
  "Jaisalmer": { image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400", usp: "Golden City with living fort & Thar Desert adventures" },
  "Jodhpur": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "Blue City with majestic Mehrangarh Fort & spice markets" },
  "Pushkar": { image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=400", usp: "Sacred lake town with only Brahma temple & famous camel fair" },
  
  // Kerala
  "Alleppey": { image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400", usp: "Venice of the East with serene backwater houseboat cruises" },
  "Munnar": { image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=400", usp: "Hill station paradise with endless tea plantations & misty mountains" },
  "Kochi": { image: "https://images.unsplash.com/photo-1590766940554-634a4e5a3c9c?w=400", usp: "Queen of Arabian Sea with Chinese fishing nets & colonial heritage" },
  "Thekkady": { image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=400", usp: "Periyar Wildlife Sanctuary with elephants & spice plantations" },
  "Kovalam": { image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400", usp: "Crescent beach paradise with lighthouse & Ayurvedic retreats" },
  
  // Tamil Nadu
  "Chennai": { image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400", usp: "Gateway to South India with Marina Beach & ancient temples" },
  "Madurai": { image: "https://images.unsplash.com/photo-1621427638996-d782d7e8c68a?w=400", usp: "Temple city with magnificent Meenakshi Amman Temple" },
  "Ooty": { image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", usp: "Queen of Hill Stations with toy train & botanical gardens" },
  "Mahabalipuram": { image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400", usp: "UNESCO site with ancient rock-cut temples & Shore Temple" },
  "Rameswaram": { image: "https://images.unsplash.com/photo-1621427638996-d782d7e8c68a?w=400", usp: "Sacred island with Ramanathaswamy Temple & Pamban Bridge" },
  
  // Karnataka
  "Bengaluru": { image: "https://images.unsplash.com/photo-1600100397608-e1f6e66a6e0a?w=400", usp: "Silicon Valley of India with gardens, pubs & tech culture" },
  "Mysore": { image: "https://images.unsplash.com/photo-1600100397608-e1f6e66a6e0a?w=400", usp: "City of Palaces with illuminated Mysore Palace & Dasara festival" },
  "Hampi": { image: "https://images.unsplash.com/photo-1590766940554-634a4e5a3c9c?w=400", usp: "UNESCO ruins of Vijayanagara Empire with boulder-strewn landscape" },
  "Coorg": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Scotland of India with coffee plantations & misty hills" },
  "Gokarna": { image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400", usp: "Pristine beaches & sacred Mahabaleshwar Temple" },
  
  // Maharashtra
  "Mumbai": { image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400", usp: "City of Dreams with Gateway of India, Bollywood & Marine Drive" },
  "Pune": { image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400", usp: "Oxford of the East with Shaniwar Wada & vibrant culture" },
  "Ajanta Caves": { image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400", usp: "UNESCO Buddhist cave paintings dating back to 2nd century BCE" },
  "Ellora Caves": { image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400", usp: "UNESCO rock-cut temples of Hindu, Buddhist & Jain faiths" },
  "Lonavala": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Hill station getaway with waterfalls & ancient Karla Caves" },
  
  // Goa
  "Baga Beach": { image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400", usp: "Vibrant beach with water sports, shacks & legendary nightlife" },
  "Old Goa": { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", usp: "UNESCO churches including Basilica of Bom Jesus with St. Francis Xavier" },
  "Dudhsagar Falls": { image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400", usp: "India's 5th tallest waterfall cascading through lush Western Ghats" },
  "Anjuna Beach": { image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", usp: "Hippie heritage beach with famous flea market & trance parties" },
  "Palolem Beach": { image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400", usp: "Crescent-shaped paradise with silent discos & dolphin spotting" },
  
  // Himachal Pradesh
  "Shimla": { image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400", usp: "Queen of Hills with colonial charm, Mall Road & toy train" },
  "Manali": { image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=400", usp: "Adventure capital with Rohtang Pass, rafting & snow activities" },
  "Dharamshala": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Little Lhasa with Dalai Lama residence & Tibetan culture" },
  "Kasol": { image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400", usp: "Mini Israel with Parvati Valley treks & hippie vibes" },
  "Spiti Valley": { image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", usp: "Cold desert with ancient monasteries & surreal landscapes" },
  
  // Uttarakhand
  "Rishikesh": { image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=400", usp: "Yoga capital of world with Ganga Aarti & adventure sports" },
  "Haridwar": { image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400", usp: "Gateway to Gods with sacred Har Ki Pauri & evening Aarti" },
  "Nainital": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Lake District of India with Naini Lake & scenic viewpoints" },
  "Mussoorie": { image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", usp: "Queen of Hills with Kempty Falls & Gun Hill views" },
  "Valley of Flowers": { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", usp: "UNESCO site with 600+ flower species in Himalayan meadows" },
  
  // Jammu & Kashmir
  "Srinagar": { image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400", usp: "Venice of India with Dal Lake houseboats & Mughal gardens" },
  "Gulmarg": { image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=400", usp: "Meadow of Flowers with Asia's highest gondola & skiing" },
  "Pahalgam": { image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=400", usp: "Valley of Shepherds & base for Amarnath pilgrimage" },
  "Leh": { image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400", usp: "Land of high passes with monasteries & Pangong Lake" },
  "Sonamarg": { image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=400", usp: "Meadow of Gold with Thajiwas Glacier & alpine beauty" },
  
  // Punjab
  "Amritsar": { image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=400", usp: "Golden Temple, Wagah Border ceremony & legendary food" },
  "Chandigarh": { image: "https://images.unsplash.com/photo-1623070573483-a6f0d7c71b5e?w=400", usp: "City Beautiful with Rock Garden & Le Corbusier architecture" },
  "Ludhiana": { image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=400", usp: "Manchester of India with textile industry & Punjabi culture" },
  "Patiala": { image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400", usp: "Royal city with Qila Mubarak & famous Patiala peg" },
  "Anandpur Sahib": { image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=400", usp: "Holy city where Khalsa was born & Hola Mohalla festival" },
  
  // West Bengal
  "Kolkata": { image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=400", usp: "City of Joy with Victoria Memorial, Howrah Bridge & Durga Puja" },
  "Darjeeling": { image: "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?w=400", usp: "Queen of Hills with toy train, tea gardens & Kanchenjunga views" },
  "Sundarbans": { image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=400", usp: "World's largest mangrove forest & home of Royal Bengal Tigers" },
  "Shantiniketan": { image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=400", usp: "Tagore's abode of peace with Visva-Bharati University" },
  "Digha": { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", usp: "Popular beach resort with gentle waves & seafood" },
  
  // Delhi
  "Red Fort": { image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400", usp: "UNESCO Mughal masterpiece & symbol of India's independence" },
  "Qutub Minar": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "UNESCO site with world's tallest brick minaret at 73m" },
  "India Gate": { image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400", usp: "War memorial & iconic landmark on Rajpath" },
  "Lotus Temple": { image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400", usp: "Architectural marvel of Bahá'í faith open to all religions" },
  "Chandni Chowk": { image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400", usp: "Old Delhi's bustling market with street food paradise" },
  
  // Andhra Pradesh
  "Tirupati": { image: "https://images.unsplash.com/photo-1621427638996-d782d7e8c68a?w=400", usp: "World's richest temple with 50,000+ daily pilgrims" },
  "Visakhapatnam": { image: "https://images.unsplash.com/photo-1590766940554-634a4e5a3c9c?w=400", usp: "City of Destiny with beaches, submarine museum & Araku Valley" },
  "Vijayawada": { image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400", usp: "Bezawada with Kanaka Durga Temple & Krishna River" },
  "Lepakshi": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "Hanging pillar temple & giant Nandi bull sculpture" },
  "Araku Valley": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Coffee plantations, tribal culture & Borra Caves" },
  
  // Telangana
  "Hyderabad": { image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400", usp: "City of Pearls with Charminar, biryani & tech hub" },
  "Charminar": { image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400", usp: "Iconic 16th century monument & bustling Laad Bazaar" },
  "Golconda Fort": { image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400", usp: "Acoustic marvel & former diamond trading center" },
  "Ramoji Film City": { image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400", usp: "World's largest film studio complex & entertainment hub" },
  "Warangal": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "Kakatiya heritage with Thousand Pillar Temple" },
  
  // Odisha
  "Puri": { image: "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?w=400", usp: "Jagannath Temple, Rath Yatra & golden beach" },
  "Konark": { image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400", usp: "UNESCO Sun Temple shaped as giant chariot with 24 wheels" },
  "Bhubaneswar": { image: "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?w=400", usp: "Temple City of India with 700+ ancient temples" },
  "Chilika Lake": { image: "https://images.unsplash.com/photo-1590766940554-634a4e5a3c9c?w=400", usp: "Asia's largest brackish water lagoon with Irrawaddy dolphins" },
  "Cuttack": { image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=400", usp: "Silver City with filigree work & Durga Puja celebrations" },
  
  // Bihar
  "Bodh Gaya": { image: "https://images.unsplash.com/photo-1591018653367-7d29b4e8f5a9?w=400", usp: "Where Buddha attained enlightenment under Bodhi Tree" },
  "Nalanda": { image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400", usp: "UNESCO ruins of world's first residential university" },
  "Patna": { image: "https://images.unsplash.com/photo-1591018653367-7d29b4e8f5a9?w=400", usp: "Ancient Pataliputra with Golghar & Sikh heritage" },
  "Rajgir": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "Buddha's favorite retreat with hot springs & Vulture Peak" },
  "Vaishali": { image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400", usp: "World's first republic & important Buddhist pilgrimage site" },
  
  // Madhya Pradesh
  "Khajuraho": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "UNESCO temples with intricate erotic sculptures" },
  "Sanchi": { image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400", usp: "UNESCO Buddhist monuments with Great Stupa" },
  "Bhopal": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "City of Lakes with Taj-ul-Masajid & tribal museums" },
  "Orchha": { image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400", usp: "Medieval town frozen in time with Bundela palaces" },
  "Bandhavgarh": { image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=400", usp: "Highest density of tigers in India & ancient fort" },
  
  // Uttar Pradesh
  "Agra": { image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400", usp: "Taj Mahal, Agra Fort & Mughal architectural wonders" },
  "Varanasi": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "World's oldest living city with Ganga Aarti & ghats" },
  "Lucknow": { image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400", usp: "City of Nawabs with Bara Imambara & kebab culture" },
  "Mathura": { image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=400", usp: "Birthplace of Lord Krishna & Holi celebrations" },
  "Vrindavan": { image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=400", usp: "Land of Krishna's childhood with 5000+ temples" },
  
  // Assam
  "Guwahati": { image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", usp: "Gateway to Northeast with Kamakhya Temple & Brahmaputra" },
  "Kaziranga": { image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=400", usp: "UNESCO site with 2/3 of world's one-horned rhinos" },
  "Majuli": { image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=400", usp: "World's largest river island with Vaishnavite monasteries" },
  "Jorhat": { image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", usp: "Tea capital of world with heritage tea gardens" },
  "Sivasagar": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "Ahom kingdom capital with Rang Ghar amphitheater" },
  
  // Meghalaya
  "Shillong": { image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=400", usp: "Scotland of the East with waterfalls & rock music culture" },
  "Cherrapunji": { image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400", usp: "Wettest place on Earth with living root bridges" },
  "Dawki": { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", usp: "Crystal clear Umngot River & India-Bangladesh border" },
  "Mawlynnong": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Asia's cleanest village with living root bridge" },
  "Nongriat": { image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400", usp: "Double-decker living root bridge & rainbow falls" },
  
  // Sikkim
  "Gangtok": { image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400", usp: "Capital with Rumtek Monastery & Kanchenjunga views" },
  "Pelling": { image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", usp: "Closest views of Kanchenjunga & Pemayangtse Monastery" },
  "Tsomgo Lake": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Sacred glacial lake at 12,400 ft with yak rides" },
  "Nathula Pass": { image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400", usp: "Indo-China border at 14,140 ft with stunning views" },
  "Ravangla": { image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=400", usp: "Buddha Park with 130 ft statue & tea gardens" },
  
  // Arunachal Pradesh
  "Tawang": { image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", usp: "India's largest monastery & birthplace of 6th Dalai Lama" },
  "Ziro Valley": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "UNESCO tentative site with Apatani tribe & music festival" },
  "Bomdila": { image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400", usp: "Gateway to Tawang with monasteries & apple orchards" },
  "Namdapha": { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", usp: "Biodiversity hotspot with 4 big cat species" },
  "Itanagar": { image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", usp: "Capital with Ita Fort ruins & Ganga Lake" },
  
  // Haryana
  "Kurukshetra": { image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400", usp: "Sacred land of Mahabharata war & Brahma Sarovar" },
  "Panchkula": { image: "https://images.unsplash.com/photo-1623070573483-a6f0d7c71b5e?w=400", usp: "Planned city with Morni Hills & Pinjore Gardens" },
  "Faridabad": { image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400", usp: "Industrial hub with Surajkund Mela & Badkhal Lake" },
  "Gurgaon": { image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400", usp: "Millennium City with Kingdom of Dreams & cyber hub" },
  "Sultanpur Bird Sanctuary": { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", usp: "Migratory bird paradise with 250+ species" },
  
  // Jharkhand
  "Ranchi": { image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400", usp: "City of waterfalls with Hundru, Dassam & Jonha Falls" },
  "Jamshedpur": { image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=400", usp: "Steel City with Jubilee Park & Dalma Wildlife" },
  "Deoghar": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "Baidyanath Dham - one of 12 Jyotirlingas" },
  "Netarhat": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Queen of Chotanagpur with stunning sunrise views" },
  "Hundru Falls": { image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400", usp: "98m waterfall on Subarnarekha River" },
  
  // Chhattisgarh
  "Chitrakote Falls": { image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400", usp: "Niagara of India - widest waterfall in the country" },
  "Bastar": { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", usp: "Tribal heartland with Dussehra & handicrafts" },
  "Sirpur": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "Ancient Buddhist site with Laxman Temple" },
  "Barnawapara Wildlife": { image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=400", usp: "Wildlife sanctuary with tigers, leopards & bison" },
  
  // Nagaland
  "Dimapur": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Gateway to Nagaland with Kachari ruins" },
  "Mokokchung": { image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", usp: "Cultural capital of Ao Nagas with Longkhum village" },
  "Dzukou Valley": { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", usp: "Valley of flowers at Indo-Manipur border" },
  "Hornbill Festival": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Festival of festivals showcasing all Naga tribes" },
  
  // Manipur
  "Loktak Lake": { image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400", usp: "Floating lake with phumdis & Keibul Lamjao" },
  "Keibul Lamjao": { image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=400", usp: "World's only floating national park with Sangai deer" },
  "Kangla Fort": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "Historic seat of Manipur kings for 2000 years" },
  "Ukhrul": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Land of Shirui Lily - world's only terrestrial lily" },
  
  // Mizoram
  "Champhai": { image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400", usp: "Rice bowl of Mizoram with Myanmar border views" },
  "Reiek": { image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", usp: "Heritage village with panoramic mountain views" },
  "Phawngpui Peak": { image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400", usp: "Blue Mountain - highest peak in Mizoram" },
  "Tam Dil Lake": { image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400", usp: "Mustard lake surrounded by dense forests" },
  
  // Tripura
  "Ujjayanta Palace": { image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400", usp: "Former royal palace now state museum" },
  "Neermahal": { image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400", usp: "Water palace in middle of Rudrasagar Lake" },
  "Unakoti": { image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", usp: "Rock-cut sculptures with giant Shiva head" },
  "Sepahijala": { image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=400", usp: "Wildlife sanctuary with spectacled monkeys" },
};

const ExpandableCard = ({ attractions }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  if (!attractions || attractions.length === 0) return null;

  // Show expanded if either clicked or hovered
  const getIsExpanded = (index) => expandedIndex === index || hoveredIndex === index;

  return (
    <div style={{ background: '#0d1117', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.3rem', fontWeight: '600', color: '#fff', margin: '0 0 20px 0', WebkitTextFillColor: '#fff' }}>
        <span style={{ color: '#f5a623', WebkitTextFillColor: '#f5a623' }}>★</span> Top Attractions
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {attractions.map((item, index) => {
          const isExpanded = getIsExpanded(index);
          const name = item?.name || item || `Attraction ${index + 1}`;
          const data = attractionData[name] || {};
          const image = item?.image || data.image || "";
          const usp = item?.usp || data.usp || `Discover the amazing ${name}!`;

          return (
            <div 
              key={index} 
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ 
                background: isExpanded ? '#1c2128' : '#161b22', 
                borderRadius: '12px', 
                cursor: 'pointer', 
                overflow: 'hidden', 
                border: isExpanded ? '1px solid #f5a623' : '1px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 18px' }}>
                <div style={{ width: '32px', height: '32px', background: isExpanded ? '#f5a623' : 'linear-gradient(135deg, #1f6feb, #388bfd)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isExpanded ? '#000' : '#fff', fontSize: '0.85rem', fontWeight: '700', WebkitTextFillColor: isExpanded ? '#000' : '#fff', transition: 'all 0.3s ease' }}>{index + 1}</div>
                <div style={{ flex: 1, color: isExpanded ? '#f5a623' : '#fff', fontSize: '1rem', fontWeight: '500', WebkitTextFillColor: isExpanded ? '#f5a623' : '#fff', transition: 'color 0.3s ease' }}>{name}</div>
                <div style={{ width: '28px', height: '28px', background: isExpanded ? '#f5a623' : 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isExpanded ? '#000' : '#8b949e', fontSize: '1.2rem', WebkitTextFillColor: isExpanded ? '#000' : '#8b949e', transition: 'all 0.3s ease' }}>{isExpanded ? '−' : '+'}</div>
              </div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                    <div style={{ padding: '0 18px 18px 18px' }}>
                      {image ? <img src={image} alt={name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '14px' }} /> : <div style={{ width: '100%', height: '180px', background: 'linear-gradient(135deg, #1f6feb, #388bfd)', borderRadius: '12px', marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>📍</div>}
                      <p style={{ color: '#b0b8c1', fontSize: '0.95rem', lineHeight: '1.6', margin: 0, WebkitTextFillColor: '#b0b8c1' }}>{usp}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandableCard;
