import { motion } from 'framer-motion'
import { Users, Award, Globe, Heart, Target, Eye, MapPin, Plane } from 'lucide-react'
import './About.css'

const About = () => {
  const stats = [
    { number: '50+', label: 'Destinations', icon: <MapPin /> },
    { number: '200+', label: 'Itineraries', icon: <Globe /> },
    { number: '10K+', label: 'Happy Travelers', icon: <Users /> },
    { number: '5+', label: 'Years Experience', icon: <Award /> },
  ]

  const values = [
    { icon: <Heart />, title: 'Passion for Travel', desc: 'We live and breathe travel. Our team consists of passionate explorers who have visited the destinations we recommend.' },
    { icon: <Target />, title: 'Attention to Detail', desc: 'Every itinerary is meticulously crafted with precise timings, local tips, and insider knowledge.' },
    { icon: <Users />, title: 'Traveler First', desc: 'Your experience matters most. We design trips that create lasting memories and meaningful connections.' },
    { icon: <Eye />, title: 'Local Insights', desc: 'We partner with local experts to bring you authentic experiences beyond typical tourist attractions.' },
  ]

  const team = [
    { name: 'XYZ', role: 'Founder & CEO', image: 'https://iages.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
    { name: 'XYZ', role: 'Head of Operations', image: 'https://iages.unsplash.com/photo-1494790108377-be9c29b29330?w=300' },
    { name: 'XYZ', role: 'Travel Expert', image: 'https://imges.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300' },
    { name: 'XYZ', role: 'Content Lead', image: 'https://iages.unsplash.com/photo-1438761681033-6461ffad8d80?w=300' },
  ]

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600" alt="About Us" />
          <div className="page-hero-overlay"></div>
        </div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>About SoulSailers</h1>
          <p>Where Planning Meets Perfection</p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="story-section section">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                SoulSailers was born from a simple belief: travel planning should be as exciting 
                as the journey itself. Founded in 2019, we set out to create a platform that 
                combines expert knowledge with local insights to help travelers discover the 
                world's most incredible destinations.
              </p>
              <p>
                What started as a passion project has grown into a trusted travel companion for 
                thousands of explorers. Our team of travel enthusiasts has personally visited 
                every destination we feature, ensuring that our recommendations come from 
                real experiences, not just research.
              </p>
              <p>
                Today, SoulSailers offers comprehensive travel guides, detailed itineraries, 
                and personalized recommendations for destinations across India and around the 
                world. We believe that every journey should be transformative, and we're here 
                to help you make that happen.
              </p>
            </motion.div>
            <motion.div 
              className="story-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800" alt="Travel" />
              <div className="story-badge">
                <Plane size={30} />
                <span>Since 2019</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Values */}
      <section className="values-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">What drives us to create exceptional travel experiences</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section section alt-bg">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">The passionate travelers behind SoulSailers</p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section section">
        <div className="container">
          <motion.div 
            className="mission-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>
              To inspire and empower travelers to explore the world with confidence. 
              We believe that travel has the power to transform lives, broaden perspectives, 
              and create connections that transcend borders. Through our detailed guides, 
              curated itineraries, and personalized recommendations, we aim to make every 
              journey unforgettable.
            </p>
            <div className="mission-quote">
              <blockquote>
                "The world is a book, and those who do not travel read only one page."
              </blockquote>
              <cite>— Saint Augustine</cite>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
