import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Clock, Heart, Star, MapPin, Calendar } from 'lucide-react'

const Milestones = () => {
  const milestones = [
    {
      id: 1,
      title: 'First Message',
      date: 'March 10, 2023',
      description: 'The message that started it all - "Hey, I saw your profile and thought we\'d get along"',
      icon: '💬',
      color: 'from-rose-400 to-pink-400'
    },
    {
      id: 2,
      title: 'First Call',
      date: 'March 12, 2023',
      description: 'Our first voice call that lasted 3 hours. Time flew when we talked',
      icon: '📞',
      color: 'from-pink-400 to-purple-400'
    },
    {
      id: 3,
      title: 'First "I Love You"',
      date: 'March 20, 2023',
      description: 'The moment my heart knew - three words that changed everything',
      icon: '💕',
      color: 'from-purple-400 to-indigo-400'
    },
    {
      id: 4,
      title: 'First Video Date',
      date: 'April 5, 2023',
      description: 'Dressed up, candles lit, dinner together through screens. Perfect.',
      icon: '🎥',
      color: 'from-indigo-400 to-blue-400'
    },
    {
      id: 5,
      title: 'First In-Person Meeting',
      date: 'December 25, 2023',
      description: 'Christmas miracle - finally together. The best gift ever.',
      icon: '🎄',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 6,
      title: 'First Trip Together',
      date: 'February 14, 2024',
      description: 'Valentine\'s getaway - our first adventure as a couple in person',
      icon: '✈️',
      color: 'from-cyan-400 to-teal-400'
    },
    {
      id: 7,
      title: 'Moved In Together',
      date: 'Upcoming',
      description: 'Building our first home together - a new chapter begins',
      icon: '🏠',
      color: 'from-teal-400 to-emerald-400'
    },
    {
      id: 8,
      title: 'First Anniversary',
      date: 'March 15, 2024',
      description: '365 days of loving you, and counting. Here\'s to forever.',
      icon: '🎉',
      color: 'from-emerald-400 to-green-400'
    },
    {
      id: 9,
      title: 'Engagement',
      date: 'Future',
      description: 'The day I ask you to spend forever with me',
      icon: '💍',
      color: 'from-green-400 to-lime-400'
    },
    {
      id: 10,
      title: 'Wedding Day',
      date: 'Future',
      description: 'The beginning of our forever - I do, always and forever',
      icon: '👰',
      color: 'from-lime-400 to-yellow-400'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 perspective-2000">
      <div className="max-w-6xl mx-auto">
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
            <Clock className="w-20 h-20 text-rose-500 relative z-10 depth-2" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight">
            Our Relationship Timeline
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Every moment that brought us closer - the story of us, milestone by milestone
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative parallax-3d">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-400 via-pink-400 to-purple-400 rounded-full hidden md:block preserve-3d" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
            ))}
          </div>
        </div>

        {/* Timeline Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-3d rounded-3xl p-12 text-center holographic mt-20"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
            <Heart className="w-20 h-20 text-rose-400 relative z-10 depth-2" fill="#fb7185" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Story Continues</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            "Every milestone we've reached has led us here, and every milestone ahead will bring us closer. 
            Our timeline isn't just about the past - it's about building a future together, 
            one beautiful moment at a time."
          </p>
          <div className="flex justify-center gap-4 mt-8">
            {['💕', '✨', '🌟', '💫'].map((emoji, i) => (
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

const MilestoneCard = ({ milestone, index }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 border-4 border-white shadow-lg z-10 hidden md:block neon-glow-3d" />

      {/* Content */}
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        <motion.div
          style={{ rotateX, rotateY }}
          whileHover={{ 
            scale: 1.08,
            z: 40
          }}
          className="glass-3d rounded-3xl p-8 preserve-3d cursor-pointer"
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
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${milestone.color} text-white mb-4 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} depth-1`}>
            <span className="text-3xl depth-2">{milestone.icon}</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800 depth-2">{milestone.title}</h3>
          <div className="flex items-center gap-2 text-rose-600 font-medium mb-4 justify-center md:justify-start">
            <Calendar className="w-4 h-4" />
            <span>{milestone.date}</span>
          </div>
          <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block md:w-2/12" />
    </motion.div>
  )
}

export default Milestones
