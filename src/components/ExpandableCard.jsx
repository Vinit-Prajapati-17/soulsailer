import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { attractionDetails } from "../data/attractionDetails";

// Attraction data with images and USPs
const attractionData = {
   // Thailand
  "Bangkok": { image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400", usp: "Vibrant capital with ornate temples & legendary street food" },
  "Phuket": { image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400", usp: "Thailand's largest island with stunning beaches & nightlife" },
  "Chiang Mai": { image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400", usp: "Mountain city with 300+ temples & elephant sanctuaries" },
  "Krabi": { image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400", usp: "Limestone cliffs, emerald waters & island hopping paradise" },
  "Pattaya": { image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400", usp: "Beach resort city with water sports & entertainment" },
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
  "Dubai Mall": { image: "/soulsailer/international/dubai/abu dhabi.jpg", usp: "Futuristic city with world's tallest buildings & luxury malls" },
  "Abu Dhabi": { image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400", usp: "Capital with Sheikh Zayed Mosque & Louvre museum" },
  "Burj Khalifa": { image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400", usp: "World's tallest building at 828m with stunning views" },
  "Palm Jumeirah": { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400", usp: "Man-made island with luxury resorts & Atlantis" },
  "Desert Safari": { image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400", usp: "Dune bashing, camel rides & Bedouin camp experience" },
  
   //Bali
  "Bali": { image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400", usp: "Island of Gods with temples, rice terraces & beaches" },
  "Ubud": { image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400", usp: "Cultural heart with art galleries, yoga & rice paddies" },
  "Seminyak": { image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400", usp: "Trendy beach area with boutiques & beach clubs" },
  "Uluwatu": { image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400", usp: "Clifftop temple with stunning sunset & Kecak dance" },
  "Nusa Penida": { image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400", usp: "Dramatic cliffs, crystal waters & manta rays" },
  
  //Maldives
  "Malé": { image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400", usp: "Colorful capital with fish market & Grand Friday Mosque" },
  "Overwater Villas": { image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400", usp: "Iconic luxury stays with glass floor & ocean views" },
  "Coral Reefs": { image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", usp: "World-class snorkeling & diving with marine life" },
  "Sandbanks": { image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400", usp: "Private picnics on pristine white sand islands" },
  "Sunset Cruises": { image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400", usp: "Dolphin watching & romantic dhoni boat rides" },
  
  //Andaman & Nicobar
  "Havelock Island": { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", usp: "Radhanagar Beach - Asia's best beach with pristine waters" },
  "Neil Island": { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", usp: "Natural rock formations & peaceful beaches" },
  "Port Blair": { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", usp: "Cellular Jail & Corbyn's Cove Beach" },
  "Ross Island": { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", usp: "British colonial ruins & deer spotting" },
  "Baratang Island": { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400", usp: "Limestone caves & mangrove creeks" },
  
  //Lakshadweep
  "Agatti Island": { image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400", usp: "Gateway island with stunning lagoon & water sports" },
  "Bangaram Island": { image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400", usp: "Uninhabited paradise with crystal clear waters" },
  "Kavaratti": { image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400", usp: "Capital island with marine aquarium & mosques" },
  "Minicoy Island": { image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400", usp: "Southernmost island with lighthouse & tuna fishing" },
  "Kadmat Island": { image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400", usp: "Scuba diving paradise with coral reefs" },

  // INDIAN STATES ATTRACTIONS
  // Gujarat
  "Rann of Kutch": { image: "/soulsailer/Famous Places/gujarat/rann of katch.jpg", usp: "World's largest salt desert with stunning white landscape & Rann Utsav festival" },
  "Gir National Park": { image: "/soulsailer/Famous Places/gujarat/gir national.jpg", usp: "Only home of Asiatic lions in the world & premier wildlife sanctuary" },
  "Somnath Temple": { image: "/soulsailer/Famous Places/gujarat/somnath.jpg", usp: "First of 12 Jyotirlingas & ancient pilgrimage site rebuilt 17 times" },
  "Dwarka": { image: "/soulsailer/Famous Places/gujarat/dwarka.jpg", usp: "Sacred city of Lord Krishna & one of four Char Dham pilgrimage sites" },
  "Statue of Unity": { image: "/soulsailer/Famous Places/gujarat/statue of unity.jpg", usp: "World's tallest statue at 182m honoring Sardar Vallabhbhai Patel" },
  "Ahmedabad": { image: "/soulsailer/Famous Places/gujarat/ahmedabad.jpg", usp: "UNESCO World Heritage City with Sabarmati Ashram & vibrant old town" },
  
  // Rajasthan
  "Jaipur": { image: "/soulsailer/Famous Places/rajasthan/jaipur.jpg", usp: "Pink City with Hawa Mahal, Amber Fort & royal palaces" },
  "Udaipur": { image: "/soulsailer/Famous Places/rajasthan/udaipur.jpg", usp: "City of Lakes with romantic palaces & Rajput heritage" },
  "Jaisalmer": { image: "/soulsailer/Famous Places/rajasthan/jaisalmer.jpg", usp: "Golden City with living fort & Thar Desert adventures" },
  "Jodhpur": { image: "/soulsailer/Famous Places/rajasthan/jodhpur.jpg", usp: "Blue City with majestic Mehrangarh Fort & spice markets" },
  "Chittorgarh": { image: "/soulsailer/Famous Places/rajasthan/Chittorgarh.JPG", usp: "Largest fort in India with tales of Rajput valor & sacrifice" },
  
  // Kerala
  "Alleppey": { image: "/soulsailer/Famous Places/Kerala/alleppey.jpeg", usp: "Venice of the East with serene backwater houseboat cruises" },
  "Munnar": { image: "/soulsailer/Famous Places/Kerala/Munnar.jpg", usp: "Hill station paradise with endless tea plantations & misty mountains" },
  "Kochi": { image: "/soulsailer/Famous Places/Kerala/kochi.jpg", usp: "Queen of Arabian Sea with Chinese fishing nets & colonial heritage" },
  "Thekkady": { image: "/soulsailer/Famous Places/Kerala/thekkady.jpg", usp: "Periyar Wildlife Sanctuary with elephants & spice plantations" },
  "Kovalam": { image: "/soulsailer/Famous Places/Kerala/kovalam.jpg", usp: "Crescent beach paradise with lighthouse & Ayurvedic retreats" },
  
  // Tamil Nadu
  "Kanyakumari": { image: "/soulsailer/Famous Places/tamilnadu/kanyakumari.jpg", usp: "Gateway to South India with Marina Beach & ancient temples" },
  "Madurai": { image: "/soulsailer/Famous Places/tamilnadu/madurai.jpg", usp: "Temple city with magnificent Meenakshi Amman Temple" },
  "Ooty": { image: "/soulsailer/Famous Places/tamilnadu/ooty.jpg", usp: "Queen of Hill Stations with toy train & botanical gardens" },
  "Mahabalipuram": { image: "/soulsailer/Famous Places/tamilnadu/mahabalipuram.jpg", usp: "UNESCO site with ancient rock-cut temples & Shore Temple" },
  "Rameswaram": { image: "/soulsailer/Famous Places/tamilnadu/rameswaram.jpg", usp: "Sacred island with Ramanathaswamy Temple & Pamban Bridge" },
  
  // Karnataka
  "Bengaluru": { image: "/soulsailer/Famous Places/karnataka/bengluru.jpg", usp: "Silicon Valley of India with gardens, pubs & tech culture" },
  "Mysore": { image: "/soulsailer/Famous Places/karnataka/mysore.jpg", usp: "City of Palaces with illuminated Mysore Palace & Dasara festival" },
  "Hampi": { image: "/soulsailer/Famous Places/karnataka/Hampi.jpg", usp: "UNESCO ruins of Vijayanagara Empire with boulder-strewn landscape" },
  "Coorg": { image: "/soulsailer/Famous Places/karnataka/coorg.jpg", usp: "Scotland of India with coffee plantations & misty hills" },
  "Gokarna": { image: "/soulsailer/Famous Places/karnataka/gokarna.jpg", usp: "Pristine beaches & sacred Mahabaleshwar Temple" },
  
  // Maharashtra  
  "Mumbai": { image: "/soulsailer/Famous Places/maharastra/mumbai.jpg", usp: "City of Dreams with Gateway of India, Bollywood & Marine Drive" },
  "Pune": { image: "/soulsailer/Famous Places/maharastra/pune.jpg", usp: "Oxford of the East with Shaniwar Wada & vibrant culture" },
  "Ajanta Caves": { image: "/soulsailer/Famous Places/maharastra/ajanta caves.jpg", usp: "UNESCO Buddhist cave paintings dating back to 2nd century BCE" },
  "Harihar Fort": { image: "/soulsailer/Famous Places/maharastra/harihar fort.jpg", usp: "Thrilling rock-cut steps carved into vertical cliff face" },
  "Lonavala": { image: "/soulsailer/Famous Places/maharastra/lonavala.jpeg", usp: "Hill station getaway with waterfalls & ancient Karla Caves" },
  
  // Goa
  "Baga Beach": { image: "/soulsailer/Famous Places/goa/baga beach.jpg", usp: "Vibrant beach with water sports, shacks & legendary nightlife" },
  "Old Goa": { image: "/soulsailer/Famous Places/goa/old goa.jpg", usp: "UNESCO churches including Basilica of Bom Jesus with St. Francis Xavier" },
  "Dudhsagar Falls": { image: "/soulsailer/Famous Places/goa/dudhsagar fall.jpg", usp: "India's 5th tallest waterfall cascading through lush Western Ghats" },
  "Anjuna Beach": { image: "/soulsailer/Famous Places/goa/anjuna beach.jpg", usp: "Hippie heritage beach with famous flea market & trance parties" },
  "Palolem Beach": { image: "/soulsailer/Famous Places/goa/palolem beach.jpg", usp: "Crescent-shaped paradise with silent discos & dolphin spotting" },
  
  // Himachal Pradesh
  "Shimla": { image: "/soulsailer/Famous Places/Himachal/Shimla.jpg", usp: "Queen of Hills with colonial charm, Mall Road & toy train" },
  "Manali": { image: "/soulsailer/Famous Places/Himachal/Manali.jpg", usp: "Adventure capital with Rohtang Pass, rafting & snow activities" },
  "Dharamshala": { image: "/soulsailer/Famous Places/Himachal/Dharamshala.jpg", usp: "Little Lhasa with Dalai Lama residence & Tibetan culture" },
  "Kasol": { image: "/soulsailer/Famous Places/Himachal/Kasol.jpg", usp: "Mini Israel with Parvati Valley treks & hippie vibes" },
  "Spiti Valley": { image: "/soulsailer/Famous Places/Himachal/Spiti.jpg", usp: "Cold desert with ancient monasteries & surreal landscapes" },
  
  // Uttarakhand
  "Rishikesh": { image: "/soulsailer/Famous Places/UK/Rishikesh.jpg", usp: "Yoga capital of world with Ganga Aarti & adventure sports" },
  "Haridwar": { image: "/soulsailer/Famous Places/UK/haridwar.jpg", usp: "Gateway to Gods with sacred Har Ki Pauri & evening Aarti" },
  "Nainital": { image: "/soulsailer/Famous Places/UK/nainital.jpg", usp: "Lake District of India with Naini Lake & scenic viewpoints" },
  "Mussoorie": { image: "/soulsailer/Famous Places/UK/Mussoorie.jpg", usp: "Queen of Hills with Kempty Falls & Gun Hill views" },
  "Valley of Flowers": { image: "/soulsailer/Famous Places/UK/valley of flower.jpg", usp: "UNESCO site with 600+ flower species in Himalayan meadows" },
  
  // Jammu & Kashmir
  "Srinagar": { image: "/soulsailer/Famous Places/J&K/Shrinagar.jpg", usp: "Venice of India with Dal Lake houseboats & Mughal gardens" },
  "Gulmarg": { image: "/soulsailer/Famous Places/J&K/Gulmarg.jpg", usp: "Meadow of Flowers with Asia's highest gondola & skiing" },
  "Pahalgam": { image: "/soulsailer/Famous Places/J&K/Pahalgam.jpg", usp: "Valley of Shepherds & base for Amarnath pilgrimage" },
  "Leh": { image: "/soulsailer/Famous Places/J&K/Leh.jpg", usp: "Land of high passes with monasteries & Pangong Lake" },
  "Sonamarg": { image: "/soulsailer/Famous Places/J&K/sonamrg.jpg", usp: "Meadow of Gold with Thajiwas Glacier & alpine beauty" },
  
  // Punjab
  "Amritsar": { image: "/soulsailer/Famous Places/Punjab/amritsar.jpg", usp: "Golden Temple, Wagah Border ceremony & legendary food" },
  "Chandigarh": { image: "/soulsailer/Famous Places/Punjab/Chandigarh.jpg", usp: "City Beautiful with Rock Garden & Le Corbusier architecture" },
  "Ludhiana": { image: "/soulsailer/Famous Places/Punjab/ludhiana.jpg", usp: "Manchester of India with textile industry & Punjabi culture" },
  "Patiala": { image: "/soulsailer/Famous Places/Punjab/patiala.jpg", usp: "Royal city with Qila Mubarak & famous Patiala peg" },
  "Anandpur Sahib": { image: "/soulsailer/Famous Places/Punjab/Anandpur sahib.jpg", usp: "Holy city where Khalsa was born & Hola Mohalla festival" },
  
  // West Bengal
  "Kolkata": { image: "/soulsailer/Famous Places/WB/kolkata.jpg", usp: "City of Joy with Victoria Memorial, Howrah Bridge & Durga Puja" },
  "Darjeeling": { image: "/soulsailer/Famous Places/WB/darjileeng.jpg", usp: "Queen of Hills with toy train, tea gardens & Kanchenjunga views" },
  "Sundarbans": { image: "/soulsailer/Famous Places/WB/sundarbans.jpg", usp: "World's largest mangrove forest & home of Royal Bengal Tigers" },
  "Shantiniketan": { image: "/soulsailer/Famous Places/WB/shantiniketan.jpg", usp: "Tagore's abode of peace with Visva-Bharati University" },
  "Digha": { image: "/soulsailer/Famous Places/WB/digha.jpg", usp: "Popular beach resort with gentle waves & seafood" },
  
  // Delhi
  "Red Fort": { image: "/soulsailer/Famous Places/delhi/Red fort.jpg", usp: "UNESCO Mughal masterpiece & symbol of India's independence" },
  "Qutub Minar": { image: "/soulsailer/Famous Places/delhi/qutub minar.jpg", usp: "UNESCO site with world's tallest brick minaret at 73m" },
  "India Gate": { image: "/soulsailer/Famous Places/delhi/india gate.jpg", usp: "War memorial & iconic landmark on Rajpath" },
  "Lotus Temple": { image: "/soulsailer/Famous Places/delhi/lotus temple.jpg", usp: "Architectural marvel of Bahá'í faith open to all religions" },
  "Chandni Chowk": { image: "/soulsailer/Famous Places/delhi/chandani chowk.jpg", usp: "Old Delhi's bustling market with street food paradise" },
  
  // Andhra Pradesh
  "Tirupati": { image: "/soulsailer/Famous Places/Andhra pradesh/tirupati.jpg", usp: "World's richest temple with 50,000+ daily pilgrims" },
  "Visakhapatnam": { image: "/soulsailer/Famous Places/Andhra pradesh/vishakhapattanam.jpg", usp: "City of Destiny with beaches, submarine museum & Araku Valley" },
  "Vijayawada": { image: "/soulsailer/Famous Places/Andhra pradesh/vijayawada.jpg", usp: "Bezawada with Kanaka Durga Temple & Krishna River" },
  "Lepakshi": { image: "/soulsailer/Famous Places/Andhra pradesh/lepakshi.jpg", usp: "Hanging pillar temple & giant Nandi bull sculpture" },
  "Araku Valley": { image: "/soulsailer/Famous Places/Andhra pradesh/araku-valley.jpg", usp: "Coffee plantations, tribal culture & Borra Caves" },
  
  // Telangana
  "Hyderabad": { image: "/soulsailer/Famous Places/telangana/hyderabad.jpg", usp: "City of Pearls with Charminar, biryani & tech hub" },
  "Charminar": { image: "/soulsailer/Famous Places/telangana/charminar.jpg", usp: "Iconic 16th century monument & bustling Laad Bazaar" },
  "Golconda Fort": { image: "/soulsailer/Famous Places/telangana/golconda fort.jpg", usp: "Acoustic marvel & former diamond trading center" },
  "Ramoji Film City": { image: "/soulsailer/Famous Places/telangana/ramoji film city.jpg", usp: "World's largest film studio complex & entertainment hub" },
  "Warangal": { image: "/soulsailer/Famous Places/telangana/warangal.jpg", usp: "Kakatiya heritage with Thousand Pillar Temple" },
  
  // Odisha
  "Puri": { image: "/soulsailer/Famous Places/odisha/puri.jpg", usp: "Jagannath Temple, Rath Yatra & golden beach" },
  "Konark": { image: "/soulsailer/Famous Places/odisha/konark.jpg", usp: "UNESCO Sun Temple shaped as giant chariot with 24 wheels" },
  "Bhubaneswar": { image: "/soulsailer/Famous Places/odisha/bhuvneswar.jpg", usp: "Temple City of India with 700+ ancient temples" },
  "Chilika Lake": { image: "/soulsailer/Famous Places/odisha/chilika lake.jpg", usp: "Asia's largest brackish water lagoon with Irrawaddy dolphins" },
  "Cuttack": { image: "/soulsailer/Famous Places/odisha/cuttak.jpg", usp: "Silver City with filigree work & Durga Puja celebrations" },
  
  // Bihar
  "Bodh Gaya": { image: "/soulsailer/Famous Places/BIHAR/BODH GAYA.jpg", usp: "Where Buddha attained enlightenment under Bodhi Tree" },
  "Nalanda": { image: "/soulsailer/Famous Places/BIHAR/NALANDA.jpg", usp: "UNESCO ruins of world's first residential university" },
  "Patna": { image: "/soulsailer/Famous Places/BIHAR/PATNA.JPG", usp: "Ancient Pataliputra with Golghar & Sikh heritage" },
  "Rajgir": { image: "/soulsailer/Famous Places/BIHAR/RAJGIR.jpg", usp: "Buddha's favorite retreat with hot springs & Vulture Peak" },
  
  // Madhya Pradesh
  "Khajuraho": { image: "/soulsailer/Famous Places/MP/KHAJURAHO.jpg", usp: "UNESCO temples with intricate erotic sculptures" },
  "Sanchi": { image: "/soulsailer/Famous Places/MP/SANCHI.jpg", usp: "UNESCO Buddhist monuments with Great Stupa" },
  "Bhopal": { image: "/soulsailer/Famous Places/MP/BHOPAL.jpg", usp: "City of Lakes with Taj-ul-Masajid & tribal museums" },
  "Orchha": { image: "/soulsailer/Famous Places/MP/ORACHHA.jpg", usp: "Medieval town frozen in time with Bundela palaces" },
  "Bandhavgarh": { image: "/soulsailer/Famous Places/MP/BANDHAVGARH.jpg", usp: "Highest density of tigers in India & ancient fort" },
  
  // Uttar Pradesh
  "Agra": { image: "/soulsailer/Famous Places/UP/AGRA.jpg", usp: "Taj Mahal, Agra Fort & Mughal architectural wonders" },
  "Varanasi": { image: "/soulsailer/Famous Places/UP/VARANASI.jpg", usp: "World's oldest living city with Ganga Aarti & ghats" },
  "Lucknow": { image: "/soulsailer/Famous Places/UP/LUCKNOW.jpg", usp: "City of Nawabs with Bara Imambara & kebab culture" },
  "Mathura": { image: "/soulsailer/Famous Places/UP/MATHURA.jpg", usp: "Birthplace of Lord Krishna & Holi celebrations" },
  "Vrindavan": { image: "/soulsailer/Famous Places/UP/VRINDAVAN.jpg", usp: "Land of Krishna's childhood with 5000+ temples" },
  
  // Assam
  "Guwahati": { image: "/soulsailer/Famous Places/ASSAM/GUWAHATI.jpg", usp: "Gateway to Northeast with Kamakhya Temple & Brahmaputra" },
  "Kaziranga": { image: "/soulsailer/Famous Places/ASSAM/KAZIRANGA.jpg", usp: "UNESCO site with 2/3 of world's one-horned rhinos" },
  "Majuli": { image: "/soulsailer/Famous Places/ASSAM/Majuli.jpg", usp: "World's largest river island with Vaishnavite monasteries" },
  "Jorhat": { image: "/soulsailer/Famous Places/ASSAM/JORHAT.jpg", usp: "Tea capital of world with heritage tea gardens" },
  "Sivasagar": { image: "/soulsailer/Famous Places/ASSAM/SIVASAGAR.JPG", usp: "Ahom kingdom capital with Rang Ghar amphitheater" },
  
  // Meghalaya
  "Shillong": { image: "/soulsailer/Famous Places/MEGHALAYA/SHILONG.jpg", usp: "Scotland of the East with waterfalls & rock music culture" },
  "Cherrapunji": { image: "/soulsailer/Famous Places/MEGHALAYA/CHERAPUNJI.jpg", usp: "Wettest place on Earth with living root bridges" },
  "Dawki": { image: "/soulsailer/Famous Places/MEGHALAYA/DAWKI.jpg", usp: "Crystal clear Umngot River & India-Bangladesh border" },
  "Mawlynnong": { image: "/soulsailer/Famous Places/MEGHALAYA/MAWLYNNONG.jpg", usp: "Asia's cleanest village with living root bridge" },
  "Nongriat": { image: "/soulsailer/Famous Places/MEGHALAYA/NONGRIAT.jpeg", usp: "Double-decker living root bridge & rainbow falls" },
  
  // Sikkim
  "Gangtok": { image: "/soulsailer/Famous Places/SIKKIM/GANGTOK.jpg", usp: "Capital with Rumtek Monastery & Kanchenjunga views" },
  "Pelling": { image: "/soulsailer/Famous Places/SIKKIM/PELLING.jpg", usp: "Closest views of Kanchenjunga & Pemayangtse Monastery" },
  "Tsomgo Lake": { image: "/soulsailer/Famous Places/SIKKIM/TSOMGO LAKE.jpg", usp: "Sacred glacial lake at 12,400 ft with yak rides" },
  "Nathula Pass": { image: "/soulsailer/Famous Places/SIKKIM/NATHULA PASS.jpg", usp: "Indo-China border at 14,140 ft with stunning views" },
  "Ravangla": { image: "/soulsailer/Famous Places/SIKKIM/RAVANGLA.jpg", usp: "Buddha Park with 130 ft statue & tea gardens" },
  
  // Arunachal Pradesh
  "Tawang": { image: "/soulsailer/Famous Places/ARUNACHAL/TAWANG.jpg", usp: "India's largest monastery & birthplace of 6th Dalai Lama" },
  "Ziro Valley": { image: "/soulsailer/Famous Places/ARUNACHAL/ZIRO VALLEY.jpg", usp: "UNESCO tentative site with Apatani tribe & music festival" },
  "Bomdila": { image: "/soulsailer/Famous Places/ARUNACHAL/BOMDILA.jpg", usp: "Gateway to Tawang with monasteries & apple orchards" },
  "Namdapha": { image: "/soulsailer/Famous Places/ARUNACHAL/NAMDAPHA.jpg", usp: "Biodiversity hotspot with 4 big cat species" },
  "Itanagar": { image: "/soulsailer/Famous Places/ARUNACHAL/ITANAGAR.jpg", usp: "Capital with Ita Fort ruins & Ganga Lake" },
  
  // Haryana
  "Kurukshetra": { image: "/soulsailer/Famous Places/haryana/kurukshetra.jpg", usp: "Sacred land of Mahabharata war & Brahma Sarovar" },
  "Panchkula": { image: "/soulsailer/Famous Places/haryana/panchkula.jpg", usp: "Planned city with Morni Hills & Pinjore Gardens" },
  "Faridabad": { image: "/soulsailer/Famous Places/haryana/faridabad.jpg", usp: "Industrial hub with Surajkund Mela & Badkhal Lake" },
  "Gurgaon": { image: "/soulsailer/Famous Places/haryana/gurgaon.jpg", usp: "Millennium City with Kingdom of Dreams & cyber hub" },
  "Sultanpur Bird Sanctuary": { image: "/soulsailer/Famous Places/haryana/Sultanpur.JPG", usp: "Migratory bird paradise with 250+ species" },
  
  // Jharkhand
  "Ranchi": { image: "/soulsailer/Famous Places/JHARKHAND/RANCHI.jpg", usp: "City of waterfalls with Hundru, Dassam & Jonha Falls" },
  "Jamshedpur": { image: "/soulsailer/Famous Places/JHARKHAND/JAMSHEDPUR.jpg", usp: "Steel City with Jubilee Park & Dalma Wildlife" },
  "Deoghar": { image: "/soulsailer/Famous Places/JHARKHAND/DEOGHAR.jpg", usp: "Baidyanath Dham - one of 12 Jyotirlingas" },
  "Netarhat": { image: "/soulsailer/Famous Places/JHARKHAND/NETARHAT.jpg", usp: "Queen of Chotanagpur with stunning sunrise views" },
  "Hundru Falls": { image: "/soulsailer/Famous Places/JHARKHAND/HUNDRUFALLS.jpg", usp: "98m waterfall on Subarnarekha River" },
  
  // Chhattisgarh
  "Chitrakote Falls": { image: "/soulsailer/Famous Places/CHHATISGARH/CHITRAKOTE FALLS.jpg", usp: "Niagara of India - widest waterfall in the country" },
  "Bastar": { image: "/soulsailer/Famous Places/CHHATISGARH/BASTAR.jpg", usp: "Tribal heartland with Dussehra & handicrafts" },
  "Sirpur": { image: "/soulsailer/Famous Places/CHHATISGARH/SIRPUR.jpg", usp: "Ancient Buddhist site with Laxman Temple" },
  "Raipur": { image: "/soulsailer/Famous Places/CHHATISGARH/RAIPUR.jpg", usp: "Capital city with Mahant Ghasidas Museum & Nandan Van Zoo" },
  
  // Nagaland
  "Kohima": { image: "/soulsailer/Famous Places/NAGALAND/KOHIMA.jpg", usp: "Capital city with WWII Cemetery & stunning mountain views" },
  "Dimapur": { image: "/soulsailer/Famous Places/NAGALAND/DIMAPUR.jpg", usp: "Gateway to Nagaland with Kachari ruins" },
  "Mokokchung": { image: "/soulsailer/Famous Places/NAGALAND/MOKOKCHUNG.jpg", usp: "Cultural capital of Ao Nagas with Longkhum village" },
  "Dzukou Valley": { image: "/soulsailer/Famous Places/NAGALAND/DZUKOU VALLEY.jpg", usp: "Valley of flowers at Indo-Manipur border" },
  "Hornbill Festival": { image: "/soulsailer/Famous Places/NAGALAND/Hornbill-Festival.jpg", usp: "Festival of festivals showcasing all Naga tribes" },
  
  // Manipur
  "Imphal": { image: "/soulsailer/Famous Places/MANIPUR/IMPHAL.jpg", usp: "Capital city with Ima Keithel women's market & rich culture" },
  "Loktak Lake": { image: "/soulsailer/Famous Places/MANIPUR/LOKTAK LAKE.jpg", usp: "Floating lake with phumdis & Keibul Lamjao" },
  "Keibul Lamjao": { image: "/soulsailer/Famous Places/MANIPUR/Keibul Lamjao.jpg", usp: "World's only floating national park with Sangai deer" },
  "Kangla Fort": { image: "/soulsailer/Famous Places/MANIPUR/kangla-fort.jpeg", usp: "Historic seat of Manipur kings for 2000 years" },
  "Ukhrul": { image: "/soulsailer/Famous Places/MANIPUR/UKHRUL.jpg", usp: "Land of Shirui Lily - world's only terrestrial lily" },
  
  // Mizoram
  "Aizawl": { image: "/soulsailer/Famous Places/MIZORAM/AIZWAL.jpg", usp: "Capital city built on ridges with stunning valley views" },
  "Champhai": { image: "/soulsailer/Famous Places/MIZORAM/CHAMPHAI.jpg", usp: "Rice bowl of Mizoram with Myanmar border views" },
  "Reiek": { image: "/soulsailer/Famous Places/MIZORAM/REIEK.jpg", usp: "Heritage village with panoramic mountain views" },
  "Phawngpui Peak": { image: "/soulsailer/Famous Places/MIZORAM/PHAWANGPUI PEAK.jpg", usp: "Blue Mountain - highest peak in Mizoram" },
  "Tam Dil Lake": { image: "/soulsailer/Famous Places/MIZORAM/TAM DIL.jpg", usp: "Mustard lake surrounded by dense forests" },
  
  // Tripura
  "Agartala": { image: "/soulsailer/Famous Places/TRIPURA/AGARTALA.jpg", usp: "Capital city with Ujjayanta Palace & vibrant markets" },
  "Ujjayanta Palace": { image: "/soulsailer/Famous Places/TRIPURA/UJJAYANTA PLACE.jpg", usp: "Former royal palace now state museum" },
  "Neermahal": { image: "/soulsailer/Famous Places/TRIPURA/NEERMAHAL.jpg", usp: "Water palace in middle of Rudrasagar Lake" },
  "Unakoti": { image: "/soulsailer/Famous Places/TRIPURA/UNAKOTI.jpg", usp: "Rock-cut sculptures with giant Shiva head" },
  "Sepahijala": { image: "/soulsailer/Famous Places/TRIPURA/SEPAHIJALA.jpg", usp: "Wildlife sanctuary with spectacled monkeys" },
  
};



const ExpandableCard = ({ attractions, stateId }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check for mobile and tablet view
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Use click behavior for both mobile and tablet
  const useClickBehavior = isMobile || isTablet;
  
  if (!attractions || attractions.length === 0) return null;

  // Get active index (hovered on desktop, expanded on mobile/tablet)
  const activeIndex = useClickBehavior ? expandedIndex : hoveredIndex;
  const activeName = activeIndex !== null ? (attractions[activeIndex]?.name || attractions[activeIndex]) : null;
  const activeData = activeName ? attractionData[activeName] : null;
  const activeDetails = activeName ? (attractionDetails[activeName] || null) : null;

  // Detail Panel Component (reusable for both desktop and mobile)
  const DetailPanel = ({ name, data, details, style }) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'linear-gradient(135deg, #1a1f2e 0%, #0d1117 100%)',
        borderRadius: '16px',
        padding: '16px',
        border: '1px solid rgba(245, 166, 35, 0.3)',
        ...style
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', marginBottom: '12px' }}>
        <img 
          src={data.image} 
          alt={name}
          style={{ 
            width: '100%', 
            height: isMobile ? '150px' : '180px', 
            objectFit: 'cover', 
            borderRadius: '12px'
          }} 
        />
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '8px',
          background: 'rgba(0,0,0,0.7)',
          padding: '4px 10px',
          borderRadius: '16px',
          fontSize: '0.7rem',
          color: '#f5a623'
        }}>
          📍 {stateId ? stateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'India'}
        </div>
      </div>

      {/* Title */}
      <h4 style={{ 
        color: '#f5a623', 
        fontSize: isMobile ? '1rem' : '1.2rem', 
        fontWeight: '600', 
        margin: '0 0 6px 0',
        WebkitTextFillColor: '#f5a623'
      }}>
        {name}
      </h4>

      {/* USP */}
      <p style={{ 
        color: '#b0b8c1', 
        fontSize: isMobile ? '0.8rem' : '0.9rem', 
        lineHeight: '1.4', 
        margin: '0 0 12px 0',
        WebkitTextFillColor: '#b0b8c1'
      }}>
        {data.usp}
      </p>

      {/* Extended Details */}
      {details && (
        <>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
            <div style={{ 
              background: 'rgba(245, 166, 35, 0.1)', 
              padding: '6px 10px', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ fontSize: '0.65rem' }}>🗓️</span>
              <span style={{ fontSize: '0.75rem', color: '#fff', fontWeight: '500' }}>{details.bestTime}</span>
            </div>
            <div style={{ 
              background: 'rgba(59, 130, 246, 0.1)', 
              padding: '6px 10px', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ fontSize: '0.65rem' }}>⏱️</span>
              <span style={{ fontSize: '0.75rem', color: '#fff', fontWeight: '500' }}>{details.duration}</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
            {details.highlights.map((h, i) => (
              <span key={i} style={{
                background: 'rgba(255,255,255,0.08)',
                padding: '3px 8px',
                borderRadius: '10px',
                fontSize: '0.7rem',
                color: '#e0e0e0'
              }}>
                {h}
              </span>
            ))}
          </div>

          <div style={{
            background: 'rgba(34, 197, 94, 0.1)',
            padding: '6px 10px',
            borderRadius: '8px',
            borderLeft: '3px solid #22c55e',
            fontSize: '0.75rem',
            color: '#b0b8c1',
            lineHeight: '1.3'
          }}>
            💡 {details.tips}
          </div>
        </>
      )}
    </motion.div>
  );

  return (
    <div style={{ display: 'flex', gap: '20px', position: 'relative' }}>
      {/* Left Side Panel - Desktop only (not on mobile/tablet) */}
      {!useClickBehavior && (
        <AnimatePresence>
          {hoveredIndex !== null && activeData && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                right: '100%',
                top: 0,
                width: '400px',
                marginRight: '20px',
                zIndex: 10
              }}
            >
              <DetailPanel 
                name={activeName} 
                data={activeData} 
                details={activeDetails}
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Main Card List */}
      <div style={{ background: '#0d1117', borderRadius: '20px', padding: isMobile ? '16px' : '24px', border: '1px solid rgba(255,255,255,0.1)', flex: 1 }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: '600', color: '#fff', margin: '0 0 16px 0', WebkitTextFillColor: '#fff' }}>
          <span style={{ color: '#f5a623', WebkitTextFillColor: '#f5a623' }}>★</span> Top Attractions
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {attractions.map((item, index) => {
            const isActive = useClickBehavior ? expandedIndex === index : hoveredIndex === index;
            const name = item?.name || item || `Attraction ${index + 1}`;
            const itemData = attractionData[name];
            const itemDetails = attractionDetails[name];

            return (
              <div key={index}>
                <div 
                  onMouseEnter={() => !useClickBehavior && setHoveredIndex(index)}
                  onMouseLeave={() => !useClickBehavior && setHoveredIndex(null)}
                  onClick={() => useClickBehavior && setExpandedIndex(expandedIndex === index ? null : index)}
                  style={{ 
                    background: isActive ? '#1c2128' : '#161b22', 
                    borderRadius: '12px', 
                    cursor: 'pointer', 
                    overflow: 'hidden', 
                    border: isActive ? '1px solid #f5a623' : '1px solid transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: isMobile ? '12px 14px' : '16px 18px' }}>
                    <div style={{ 
                      width: isMobile ? '28px' : '32px', 
                      height: isMobile ? '28px' : '32px', 
                      background: isActive ? '#f5a623' : 'linear-gradient(135deg, #1f6feb, #388bfd)', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: isActive ? '#000' : '#fff', 
                      fontSize: isMobile ? '0.75rem' : '0.85rem', 
                      fontWeight: '700', 
                      WebkitTextFillColor: isActive ? '#000' : '#fff', 
                      transition: 'all 0.3s ease',
                      flexShrink: 0
                    }}>
                      {index + 1}
                    </div>
                    <div style={{ 
                      flex: 1, 
                      color: isActive ? '#f5a623' : '#fff', 
                      fontSize: isMobile ? '0.9rem' : '1rem', 
                      fontWeight: '500', 
                      WebkitTextFillColor: isActive ? '#f5a623' : '#fff', 
                      transition: 'color 0.3s ease' 
                    }}>
                      {name}
                    </div>
                    {useClickBehavior && (
                      <div style={{ 
                        color: isActive ? '#f5a623' : '#666',
                        fontSize: '0.8rem',
                        transition: 'transform 0.3s ease',
                        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}>
                        ▼
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile/Tablet Expanded Detail - Below the item */}
                {useClickBehavior && (
                  <AnimatePresence>
                    {expandedIndex === index && itemData && (
                      <div style={{ marginTop: '8px' }}>
                        <DetailPanel 
                          name={name} 
                          data={itemData} 
                          details={itemDetails}
                          style={{}}
                        />
                      </div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
