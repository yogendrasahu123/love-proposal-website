import { motion } from 'framer-motion'
import { Sparkles, Heart, Plus, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const MemoryJar = () => {
  const [memories, setMemories] = useState([
    { id: 1, text: 'The first time you said "I love you" - my heart stopped', date: 'March 20, 2023', color: 'rose' },
    { id: 2, text: 'Our first video call that lasted 6 hours', date: 'April 5, 2023', color: 'pink' },
    { id: 3, text: 'When you surprised me with a midnight birthday wish', date: 'June 15, 2023', color: 'purple' },
    { id: 4, text: 'The day we watched the same movie together from different cities', date: 'August 22, 2023', color: 'rose' },
    { id: 5, text: 'Your laugh that makes everything better', date: 'September 10, 2023', color: 'pink' },
    { id: 6, text: 'When you sent me flowers across the miles', date: 'October 14, 2023', color: 'purple' },
    { id: 7, text: 'Our first in-person meeting - magical doesn\'t cover it', date: 'December 25, 2023', color: 'rose' },
    { id: 8, text: 'Every good morning text that starts my day right', date: 'Every day', color: 'pink' },
    { id: 9, text: 'The way you remember the smallest details about me', date: 'Always', color: 'purple' },
    { id: 10, text: 'Late night conversations about our future together', date: 'January 15, 2024', color: 'rose' },
    { id: 11, text: 'Your support when I needed it most', date: 'February 28, 2024', color: 'pink' },
    { id: 12, text: 'The feeling of coming home to you, even from miles away', date: 'Every moment', color: 'purple' },
  ])

  const [newMemory, setNewMemory] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  const colorClasses = {
    rose: 'from-rose-100 to-pink-100 border-rose-200',
    pink: 'from-pink-100 to-purple-100 border-pink-200',
    purple: 'from-purple-100 to-indigo-100 border-purple-200'
  }

  const addMemory = () => {
    if (newMemory.trim()) {
      const colors = ['rose', 'pink', 'purple']
      setMemories([
        { 
          id: Date.now(), 
          text: newMemory, 
          date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          color: colors[Math.floor(Math.random() * colors.length)]
        },
        ...memories
      ])
      setNewMemory('')
      setShowAddForm(false)
    }
  }

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
            <Sparkles className="w-20 h-20 text-rose-500 relative z-10" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight">
            Our Memory Jar
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Special moments and precious memories, collected in our digital jar
          </p>
        </motion.div>

        {/* Add Memory Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, rotateY: 8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn-gradient text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-3 modern-shadow"
          >
            <Plus className="w-6 h-6" />
            {showAddForm ? 'Cancel' : 'Add a Memory'}
          </motion.button>
        </motion.div>

        {/* Add Memory Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-3d rounded-3xl p-8 mb-12 max-w-2xl mx-auto holographic"
          >
            <textarea
              value={newMemory}
              onChange={(e) => setNewMemory(e.target.value)}
              placeholder="Write a special memory..."
              className="w-full p-4 rounded-2xl border-2 border-rose-200 focus:border-rose-400 focus:outline-none resize-none h-32 text-gray-700"
              rows={4}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addMemory}
              className="mt-4 btn-gradient text-white px-8 py-3 rounded-2xl font-bold inline-flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Save Memory
            </motion.button>
          </motion.div>
        )}

        {/* Memory Jar Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 60, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 8,
                boxShadow: "0 30px 60px -12px rgba(244, 63, 94, 0.3)"
              }}
              className={`glass-3d rounded-3xl p-6 transform-style-3d bg-gradient-to-br ${colorClasses[memory.color]} border-2`}
            >
              <div className="flex items-start gap-3 mb-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                >
                  <Heart className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" fill="#f43f5e" />
                </motion.div>
                <p className="text-gray-800 leading-relaxed font-medium">{memory.text}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-4 pt-4 border-t border-white/30">
                <MessageCircle className="w-4 h-4" />
                <span>{memory.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Jar Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card rounded-3xl p-12 text-center gradient-border"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
            <Sparkles className="w-20 h-20 text-rose-400 relative z-10" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Jar of Love</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            "Like a jar filled with precious gems, each memory we collect shines brighter than the last. 
            These moments, big and small, are the building blocks of our beautiful love story."
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default MemoryJar
