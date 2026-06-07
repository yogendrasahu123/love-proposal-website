import { motion } from 'framer-motion'
import { Calendar, Heart, Gift, Sparkles, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

const AnniversaryTracker = () => {
  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  
  // Set your anniversary date here
  const anniversaryDate = new Date('2026-02-24')

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = now - anniversaryDate
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      setTimeTogether({ days, hours, minutes, seconds })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const milestones = [
    { id: 1, title: 'First Month', date: 'March 24, 2026', achieved: true, emoji: '🌟' },
    { id: 2, title: '3 Months Together', date: 'May 24, 2026', achieved: true, emoji: '💕' },
    { id: 3, title: '100 Days', date: 'June 4, 2026', achieved: true, emoji: '✨' },
    { id: 4, title: '6 Months Together', date: 'August 24, 2026', achieved: false, emoji: '🎉' },
    { id: 5, title: '1 Year Anniversary', date: 'February 24, 2027', achieved: false, emoji: '🎊' },
    { id: 6, title: '500 Days', date: 'July 8, 2027', achieved: false, emoji: '🌈' },
  ]

  const funFacts = [
    "We've spent approximately {days} days together!",
    "That's about {hours} hours of love!",
    "Roughly {minutes} minutes of happiness!",
    "And {seconds} seconds of pure joy!"
  ]

  return (
    <div className="min-h-screen py-20 px-4 perspective-2000">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
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
            <Calendar className="w-20 h-20 text-rose-500 relative z-10" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight">
            Anniversary Tracker
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Counting every moment of our beautiful journey together
          </p>
        </motion.div>

        {/* Time Together Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="glass-card rounded-3xl p-12 mb-16 text-center gradient-border"
        >
          <h2 className="text-3xl font-bold mb-8 text-gradient">We've Been Together For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { value: timeTogether.days, label: 'Days', icon: <Clock className="w-8 h-8" /> },
              { value: timeTogether.hours, label: 'Hours', icon: <Clock className="w-8 h-8" /> },
              { value: timeTogether.minutes, label: 'Minutes', icon: <Clock className="w-8 h-8" /> },
              { value: timeTogether.seconds, label: 'Seconds', icon: <Sparkles className="w-8 h-8" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 8 }}
                className="glass-card rounded-2xl p-6 transform-style-3d"
              >
                <div className="text-gradient mb-2 flex justify-center">{item.icon}</div>
                <motion.div
                  key={item.value}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
                >
                  {item.value}
                </motion.div>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-lg text-gray-600 italic">
            "Every second with you is a gift I treasure forever"
          </p>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Our Milestones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 60, rotateX: 25 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 8,
                  boxShadow: milestone.achieved ? "0 30px 60px -12px rgba(34, 197, 94, 0.3)" : "0 30px 60px -12px rgba(244, 63, 94, 0.3)"
                }}
                className={`glass-card rounded-3xl p-8 transform-style-3d ${milestone.achieved ? 'border-green-300' : 'border-rose-300'}`}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ y: milestone.achieved ? [0, -10, 0] : 0 }}
                    transition={{ duration: 2, repeat: milestone.achieved ? Infinity : 0, delay: index * 0.2 }}
                    className="text-5xl mb-4"
                  >
                    {milestone.emoji}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4">{milestone.date}</p>
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                    milestone.achieved 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-rose-100 text-rose-700'
                  }`}>
                    {milestone.achieved ? <Heart className="w-4 h-4" fill="currentColor" /> : <Gift className="w-4 h-4" />}
                    {milestone.achieved ? 'Achieved!' : 'Coming Soon'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card rounded-3xl p-12 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
            <Heart className="w-20 h-20 text-rose-400 relative z-10" fill="#fb7185" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Love in Numbers</h2>
          <div className="space-y-4">
            {funFacts.map((fact, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-lg text-gray-700"
              >
                {fact
                  .replace('{days}', timeTogether.days.toLocaleString())
                  .replace('{hours}', (timeTogether.days * 24 + timeTogether.hours).toLocaleString())
                  .replace('{minutes}', (timeTogether.days * 24 * 60 + timeTogether.hours * 60 + timeTogether.minutes).toLocaleString())
                  .replace('{seconds}', (timeTogether.days * 24 * 60 * 60 + timeTogether.hours * 60 * 60 + timeTogether.minutes * 60 + timeTogether.seconds).toLocaleString())
                }
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AnniversaryTracker
