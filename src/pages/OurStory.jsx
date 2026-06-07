import { Heart, Calendar, MapPin, Wifi, Video, Moon, Plane } from 'lucide-react'
import { motion } from 'framer-motion'

const OurStory = () => {
  const timeline = [
    {
      year: "The Beginning",
      icon: <Wifi className="w-8 h-8" />,
      title: "We Met Online",
      date: "February 24, 2026",
      description: "Across the digital world, our paths crossed. A simple message turned into hours of conversation, and I knew my life was about to change forever. Distance didn't matter - the connection was instant and undeniable.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      year: "First Video Call",
      icon: <Video className="w-8 h-8" />,
      title: "Seeing Your Smile",
      date: "Where it all began",
      description: "The first time we video called, my heart raced. Seeing your smile, hearing your laugh - it made the miles between us disappear. We talked for hours, losing track of time zones. I knew then: this was something special.",
      color: "from-rose-400 to-pink-400"
    },
    {
      year: "Falling in Love",
      icon: <Heart className="w-8 h-8" />,
      title: "Love Knows No Distance",
      date: "The realization",
      description: "It wasn't a single moment, but a collection of thousands - late night texts, morning voice notes, sharing our days through screens. I woke up one day and realized I couldn't imagine my life without you, no matter how many miles separated us.",
      color: "from-red-400 to-rose-500"
    },
    {
      year: "Growing Together",
      icon: <MapPin className="w-8 h-8" />,
      title: "Bridging the Distance",
      date: "Building our story",
      description: "Every video call, every message, every moment spent together online has been precious. We've celebrated victories and supported each other through challenges, proving that love transcends physical distance. You're not just my partner; you're my best friend.",
      color: "from-purple-400 to-pink-400"
    },
    {
      year: "Today",
      icon: <Plane className="w-8 h-8" />,
      title: "Ready to Close the Distance",
      date: "The next chapter",
      description: "Looking at how far we've come, I know with certainty that I want to spend the rest of my days making you smile, supporting your dreams, and loving you more with each passing year. The distance has only made our love stronger, and I'm ready to make us no longer apart.",
      color: "from-indigo-400 to-purple-400"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 perspective-2000">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-60"></div>
            <Heart className="w-16 h-16 text-rose-500 mx-auto relative z-10 depth-2" fill="#f43f5e" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Love Story
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Every great love story has a beginning, but ours... ours has been writing itself 
            since the moment we met. Let me take you through the chapters of us.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-300 via-pink-300 to-purple-300 rounded-full preserve-3d"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 8, rotateX: 5, boxShadow: "0 30px 60px -12px rgba(244, 63, 94, 0.3)" }}
                  className="glass-3d rounded-2xl p-8 transform-style-3d"
                >
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${item.color} mb-4`}>
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-rose-600 font-medium mb-4 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              </div>

              {/* Center Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotateZ: 15 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg z-10 neon-glow-3d"
              >
                <div className="text-white">{item.icon}</div>
              </motion.div>

              {/* Empty Space for alternating layout */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Message Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 glass-3d rounded-3xl p-12 text-center holographic"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
            <Heart className="w-12 h-12 text-rose-400 relative z-10 depth-2" fill="#fb7185" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            The Best is Yet to Come
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our story so far has been beautiful, but I believe the most beautiful chapters 
            are still unwritten. With you by my side, I'm ready to write them all. 
            Every day with you is a new adventure, and I can't wait for a lifetime of them.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default OurStory
