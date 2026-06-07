import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ListTodo, CheckCircle2, Heart } from 'lucide-react'
import { useState } from 'react'

const BucketList = () => {
  const [checkedItems, setCheckedItems] = useState({})

  const bucketItems = [
    { id: 1, title: 'Watch sunrise together at the beach', category: 'Adventure', emoji: '🌅' },
    { id: 2, title: 'Take a hot air balloon ride', category: 'Adventure', emoji: '🎈' },
    { id: 3, title: 'Learn to cook a new cuisine together', category: 'Learning', emoji: '👩‍🍳' },
    { id: 4, title: 'Visit Paris together', category: 'Travel', emoji: '🗼' },
    { id: 5, title: 'Go stargazing in the mountains', category: 'Romance', emoji: '⭐' },
    { id: 6, title: 'Build a blanket fort and watch movies', category: 'Fun', emoji: '🏠' },
    { id: 7, title: 'Write a book together', category: 'Creative', emoji: '📚' },
    { id: 8, title: 'Take a dance class', category: 'Fun', emoji: '💃' },
    { id: 9, title: 'Have a picnic under the stars', category: 'Romance', emoji: '🧺' },
    { id: 10, title: 'Go on a road trip across the country', category: 'Adventure', emoji: '🚗' },
    { id: 11, title: 'Adopt a pet together', category: 'Family', emoji: '🐕' },
    { id: 12, title: 'Plant a garden together', category: 'Home', emoji: '🌱' },
  ]

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const categories = ['All', 'Adventure', 'Travel', 'Romance', 'Fun', 'Learning', 'Creative', 'Family', 'Home']

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
            <ListTodo className="w-20 h-20 text-rose-500 relative z-10 depth-2" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight">
            Our Bucket List
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Dreams we want to make reality together - one adventure at a time
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-3d rounded-2xl p-6 mb-12 neon-glow-3d"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-800">Progress</span>
            <span className="text-rose-600 font-bold">{Object.values(checkedItems).filter(Boolean).length} / {bucketItems.length} completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(Object.values(checkedItems).filter(Boolean).length / bucketItems.length) * 100}%` }}
              transition={{ duration: 1 }}
              className="btn-gradient h-3 rounded-full"
            />
          </div>
        </motion.div>

        {/* Bucket List Items */}
        <div className="grid md:grid-cols-2 gap-6 parallax-3d">
          {bucketItems.map((item, index) => (
            <BucketItem key={item.id} item={item} index={index} checked={checkedItems[item.id]} onToggle={() => toggleCheck(item.id)} />
          ))}
        </div>

        {/* Add New Item */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-3d rounded-3xl p-12 max-w-2xl mx-auto holographic">
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative inline-block mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-60"></div>
              <Heart className="w-16 h-16 text-rose-500 relative z-10 depth-2" fill="#f43f5e" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Keep Adding Dreams</h3>
            <p className="text-gray-600">
              Our bucket list will keep growing as we dream together. Every completed item is a memory we'll cherish forever!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const BucketItem = ({ item, index, checked, onToggle }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 60, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05,
        z: 30
      }}
      className={`glass-3d rounded-2xl p-6 cursor-pointer preserve-3d transition-all duration-300 ${checked ? 'opacity-60' : ''}`}
      onClick={onToggle}
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
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-4xl depth-2"
        >
          {item.emoji}
        </motion.div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-100 text-rose-600 depth-1">
              {item.category}
            </span>
            {checked && (
              <CheckCircle2 className="w-5 h-5 text-green-500 depth-2" />
            )}
          </div>
          <h3 className={`text-lg font-semibold depth-2 ${checked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

export default BucketList
