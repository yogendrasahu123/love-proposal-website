import { motion, useMotionValue, useTransform } from 'framer-motion'
import { MapPin, Plane, Heart, Star } from 'lucide-react'

const DreamDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      country: 'France',
      description: 'The city of love - Eiffel Tower at sunset, romantic walks along the Seine',
      emoji: '🗼',
      why: 'Because every love story deserves a Paris chapter',
      color: 'from-rose-400 to-pink-400'
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      country: 'Greece',
      description: 'White buildings, blue domes, and breathtaking sunsets over the Aegean Sea',
      emoji: '🏛️',
      why: 'To watch the world\'s most beautiful sunsets together',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 3,
      name: 'Maldives',
      country: 'Maldives',
      description: 'Crystal clear waters, overwater bungalows, and pure paradise',
      emoji: '🏝️',
      why: 'Our private island escape',
      color: 'from-teal-400 to-emerald-400'
    },
    {
      id: 4,
      name: 'Kyoto, Japan',
      country: 'Japan',
      description: 'Ancient temples, cherry blossoms, and serene gardens',
      emoji: '🌸',
      why: 'To experience spring magic together',
      color: 'from-pink-300 to-rose-300'
    },
    {
      id: 5,
      name: 'Northern Lights, Iceland',
      country: 'Iceland',
      description: 'Dancing auroras, hot springs, and ice caves',
      emoji: '🌌',
      why: 'Nature\'s most spectacular light show',
      color: 'from-purple-400 to-indigo-400'
    },
    {
      id: 6,
      name: 'Bora Bora',
      country: 'French Polynesia',
      description: 'Turquoise lagoons, coral reefs, and luxury overwater villas',
      emoji: '🐚',
      why: 'The ultimate romantic getaway',
      color: 'from-cyan-400 to-blue-400'
    },
    {
      id: 7,
      name: 'Amalfi Coast, Italy',
      country: 'Italy',
      description: 'Cliffside villages, lemon groves, and Mediterranean charm',
      emoji: '🍋',
      why: 'La dolce vita with my favorite person',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      id: 8,
      name: 'Swiss Alps',
      country: 'Switzerland',
      description: 'Snow-capped peaks, cozy chalets, and pristine skiing',
      emoji: '🏔️',
      why: 'Winter wonderland adventures',
      color: 'from-slate-400 to-blue-400'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 perspective-2000">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-60"></div>
            <Plane className="w-20 h-20 text-rose-500 relative z-10 depth-2" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight">
            Dream Destinations
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Places we dream of exploring together - one adventure at a time
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 parallax-3d">
          {destinations.map((dest, index) => (
            <DestinationCard key={dest.id} dest={dest} index={index} />
          ))}
        </div>

        {/* Travel Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-3d rounded-3xl p-12 text-center holographic"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
            <Star className="w-20 h-20 text-rose-400 relative z-10 depth-2" fill="#fb7185" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">The World Awaits Us</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-6">
            "Together, we'll explore every corner of this beautiful world. From the northern lights to tropical beaches, 
            from ancient cities to hidden gems - every journey will be perfect because I'll be with you."
          </p>
          <div className="flex justify-center gap-4">
            {['✈️', '🌍', '🗺️', '💕'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 20, -20, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="text-4xl"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const DestinationCard = ({ dest, index }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [12, -12])
  const rotateY = useTransform(x, [-100, 100], [-12, 12])

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 80, rotateX: 40 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      whileHover={{ 
        scale: 1.1,
        z: 50
      }}
      className="glass-3d rounded-3xl overflow-hidden preserve-3d cursor-pointer"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - rect.left - rect.width / 2)
        y.set(e.clientY - rect.top - rect.height / 2)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <div className={`bg-gradient-to-br ${dest.color} p-8 text-center depth-1`}>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
          className="text-6xl mb-4 depth-2"
        >
          {dest.emoji}
        </motion.div>
        <h3 className="text-xl font-bold mb-2 text-white depth-2">{dest.name}</h3>
        <div className="flex items-center justify-center gap-1 text-white/80 text-sm mb-4 depth-1">
          <MapPin className="w-4 h-4" />
          <span>{dest.country}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4">{dest.description}</p>
        <div className="flex items-start gap-2">
          <Heart className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-gray-500 italic">{dest.why}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default DreamDestinations
