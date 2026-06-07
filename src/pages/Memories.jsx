import { Heart, Video, MessageSquare, Coffee, Moon, Phone, Clock, Globe, Plus, Sparkles, MessageCircle, Trash2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const colorClasses = {
  rose: 'from-rose-100 to-pink-100 border-rose-200',
  pink: 'from-pink-100 to-purple-100 border-pink-200',
  purple: 'from-purple-100 to-indigo-100 border-purple-200'
}

const Memories = () => {
  const [personalMemories, setPersonalMemories] = useState([])
  const [newMemory, setNewMemory] = useState('')
  const [newDate, setNewDate] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchPersonalMemories()
  }, [])

  const fetchPersonalMemories = async () => {
    try {
      const res = await fetch('/api/memories')
      const data = await res.json()
      setPersonalMemories(data)
    } catch (err) {
      console.error('Failed to fetch memories', err)
    } finally {
      setLoading(false)
    }
  }

  const addMemory = async () => {
    if (!newMemory.trim()) return
    setSaving(true)
    const colors = ['rose', 'pink', 'purple']
    const color = colors[Math.floor(Math.random() * colors.length)]
    const dateStr = newDate
      ? new Date(newDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    try {
      const res = await fetch('/api/memories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newMemory.trim(), date: dateStr, color }),
      })
      const saved = await res.json()
      setPersonalMemories(prev => [saved, ...prev])
      setNewMemory('')
      setNewDate('')
      setShowAddForm(false)
    } catch (err) {
      console.error('Failed to save memory', err)
    } finally {
      setSaving(false)
    }
  }

  const memoryCards = [
    {
      icon: <Video className="w-10 h-10" />,
      title: "First Video Call",
      description: "Seeing your face for the first time made my heart race. That video call changed everything - the miles between us disappeared in an instant.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Late Night Texts",
      description: "Those conversations that lasted until dawn, sharing dreams and secrets through screens. Every message from you became the highlight of my day.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <Coffee className="w-10 h-10" />,
      title: "Virtual Coffee Dates",
      description: "Morning coffee together through video calls, starting our days across time zones. Simple moments that made the distance feel smaller.",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: "Voice Notes",
      description: "Your voice messages became my favorite thing to wake up to. Hearing you say 'good morning' made every day better, no matter the distance.",
      color: "from-rose-400 to-red-400"
    },
    {
      icon: <Moon className="w-10 h-10" />,
      title: "Movie Nights Together",
      description: "Watching the same movies simultaneously, texting our reactions. Being apart physically but together in spirit, sharing every moment.",
      color: "from-indigo-400 to-purple-400"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Counting Down",
      description: "Every day spent counting down until our next meeting. The anticipation made each reunion sweeter and every moment together more precious.",
      color: "from-violet-400 to-indigo-400"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Love Across Miles",
      description: "Proving that distance is just a number. Our love grew stronger with every mile between us, showing that true connection knows no boundaries.",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Every 'I Love You'",
      description: "The first time you said it through a message, and every time since. Each one feels like the first, each one means more than words can express.",
      color: "from-red-500 to-pink-500"
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
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-60"></div>
            <Heart className="w-16 h-16 text-rose-500 mx-auto relative z-10 depth-2" fill="#f43f5e" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Precious Memories
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Every moment with you is a treasure I keep safe in my heart. 
            These are the memories that make our love story extraordinary.
          </p>
        </motion.div>

        {/* Memories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 parallax-3d">
          {memoryCards.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              whileHover={{ scale: 1.08, rotateY: 10, rotateX: 5, boxShadow: "0 30px 60px -12px rgba(244, 63, 94, 0.3)" }}
              className="glass-3d rounded-2xl p-6 transform-style-3d group"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${memory.color} text-white mb-4 depth-1`}
              >
                {memory.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 depth-2">{memory.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{memory.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-3d rounded-3xl p-12 text-white text-center mb-16 holographic"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
            <Heart className="w-16 h-16 mx-auto relative z-10 depth-2" fill="white" />
          </motion.div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-6 italic">
            "The best thing to hold onto in life is each other."
          </blockquote>
          <p className="text-lg opacity-90">— Audrey Hepburn</p>
        </motion.div>

        {/* Special Moments Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-3d rounded-3xl p-12 parallax-3d"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Moments That Changed Everything
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The Day We Met Online",
                text: "Across the digital world, our paths crossed. A simple message turned into hours of conversation, and I knew my life was about to change forever. Distance didn't matter - the connection was instant."
              },
              {
                title: "When I Knew",
                text: "It wasn't grand gestures or dramatic moments. It was the quiet realization through late night calls and endless messages that I couldn't imagine a future without you. That's when I knew you were the one."
              },
              {
                title: "Our First 'I Love You'",
                text: "Three words that changed everything, sent through a screen but felt in my heart. Said with such sincerity, heard with such joy. Those words became the foundation of everything we've built together across the miles."
              },
              {
                title: "Choosing Us Every Day",
                text: "Love isn't just one choice - it's choosing each other every single day across time zones and distance. Through good times and challenging ones, my choice has always been and will always be you."
              }
            ].map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, rotateY: 5, rotateX: 3 }}
                className="border-l-4 border-rose-400 pl-6 py-2 glass-3d rounded-r-2xl transform-style-3d"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{moment.title}</h3>
                <p className="text-gray-600 leading-relaxed">{moment.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Memories Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative inline-block mb-5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
              <Sparkles className="w-14 h-14 text-pink-500 relative z-10" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Personal Memories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every moment we share is a gem worth keeping. Write it down so we never forget.
            </p>
          </div>

          {/* Add Memory Button */}
          <div className="text-center mb-10">
            <motion.button
              whileHover={{ scale: 1.06, rotateY: 6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddForm(!showAddForm)}
              className="btn-gradient text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-3 modern-shadow"
            >
              <Plus className="w-6 h-6" />
              {showAddForm ? 'Cancel' : 'Add a Memory'}
            </motion.button>
          </div>

          {/* Add Memory Form */}
          <AnimatePresence>
            {showAddForm && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-3d rounded-3xl p-8 mb-12 max-w-2xl mx-auto holographic"
              >
                <textarea
                  value={newMemory}
                  onChange={(e) => setNewMemory(e.target.value)}
                  placeholder="Write a special memory..."
                  className="w-full p-4 rounded-2xl border-2 border-rose-200 focus:border-rose-400 focus:outline-none resize-none h-32 text-gray-700 mb-4"
                  rows={4}
                />
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full p-3 rounded-2xl border-2 border-rose-200 focus:border-rose-400 focus:outline-none text-gray-700 mb-4"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={addMemory}
                  disabled={saving || !newMemory.trim()}
                  className="btn-gradient text-white px-8 py-3 rounded-2xl font-bold inline-flex items-center gap-2 disabled:opacity-50"
                >
                  <Heart className="w-5 h-5" />
                  {saving ? 'Saving...' : 'Save Memory'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading */}
          {loading && (
            <div className="text-center py-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="inline-block"
              >
                <Sparkles className="w-10 h-10 text-rose-400" />
              </motion.div>
              <p className="text-gray-500 mt-3">Loading memories...</p>
            </div>
          )}

          {/* Personal Memory Cards */}
          {!loading && personalMemories.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalMemories.map((memory, index) => (
                <motion.div
                  key={memory.id}
                  initial={{ opacity: 0, y: 50, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, rotateY: 7, boxShadow: "0 25px 50px -10px rgba(244, 63, 94, 0.25)" }}
                  className={`glass-3d rounded-3xl p-6 transform-style-3d bg-gradient-to-br ${colorClasses[memory.color] || colorClasses.rose} border-2`}
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
          )}

          {!loading && personalMemories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 glass-3d rounded-3xl"
            >
              <Heart className="w-12 h-12 text-rose-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No memories yet — add your first one!</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Memories
