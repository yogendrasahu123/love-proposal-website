import { motion, useMotionValue, useTransform } from 'framer-motion'
import { TreeDeciduous, Heart, Star, Plus } from 'lucide-react'
import { useState } from 'react'

const WishTree = () => {
  const [wishes, setWishes] = useState([
    { id: 1, text: 'To grow old together, still holding hands', color: 'rose', granted: false },
    { id: 2, text: 'To travel the world and see everything together', color: 'pink', granted: false },
    { id: 3, text: 'To build a home filled with love and laughter', color: 'purple', granted: false },
    { id: 4, text: 'To support each other through every challenge', color: 'rose', granted: true },
    { id: 5, text: 'To never stop learning and growing together', color: 'pink', granted: false },
    { id: 6, text: 'To have a family that knows unconditional love', color: 'purple', granted: false },
    { id: 7, text: 'To celebrate every anniversary with more joy', color: 'rose', granted: true },
    { id: 8, text: 'To always make each other laugh', color: 'pink', granted: true },
    { id: 9, text: 'To be each other\'s best friend forever', color: 'purple', granted: true },
    { id: 10, text: 'To create memories that last a lifetime', color: 'rose', granted: false },
    { id: 11, text: 'To love more deeply with each passing day', color: 'pink', granted: true },
    { id: 12, text: 'To face every sunrise together', color: 'purple', granted: false },
  ])

  const [newWish, setNewWish] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  const colorClasses = {
    rose: 'from-rose-400 to-pink-400',
    pink: 'from-pink-400 to-purple-400',
    purple: 'from-purple-400 to-indigo-400'
  }

  const addWish = () => {
    if (newWish.trim()) {
      const colors = ['rose', 'pink', 'purple']
      setWishes([
        { 
          id: Date.now(), 
          text: newWish, 
          color: colors[Math.floor(Math.random() * colors.length)],
          granted: false
        },
        ...wishes
      ])
      setNewWish('')
      setShowAddForm(false)
    }
  }

  const toggleGranted = (id) => {
    setWishes(wishes.map(wish => 
      wish.id === id ? { ...wish, granted: !wish.granted } : wish
    ))
  }

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
            <TreeDeciduous className="w-20 h-20 text-rose-500 relative z-10 depth-2" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight">
            Our Wish Tree
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Dreams and wishes hanging on our tree of love, waiting to come true
          </p>
        </motion.div>

        {/* Add Wish Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
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
            {showAddForm ? 'Cancel' : 'Hang a Wish'}
          </motion.button>
        </motion.div>

        {/* Add Wish Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-3d rounded-3xl p-8 mb-12 max-w-2xl mx-auto holographic"
          >
            <textarea
              value={newWish}
              onChange={(e) => setNewWish(e.target.value)}
              placeholder="Make a wish..."
              className="w-full p-4 rounded-2xl border-2 border-rose-200 focus:border-rose-400 focus:outline-none resize-none h-32 text-gray-700"
              rows={4}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addWish}
              className="mt-4 btn-gradient text-white px-8 py-3 rounded-2xl font-bold inline-flex items-center gap-2"
            >
              <Star className="w-5 h-5" />
              Hang on Tree
            </motion.button>
          </motion.div>
        )}

        {/* Wish Tree */}
        <div className="relative mb-16 parallax-3d">
          {/* Tree Trunk */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0, rotateX: 45 }}
            whileInView={{ opacity: 1, scaleY: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-64 bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-full preserve-3d"
          />
          
          {/* Wishes as hanging ornaments */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
            {wishes.map((wish, index) => (
              <WishOrnament key={wish.id} wish={wish} index={index} onToggle={() => toggleGranted(wish.id)} colorClasses={colorClasses} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="glass-3d rounded-3xl p-8 text-center neon-glow-3d">
            <div className="text-5xl font-bold text-gradient mb-2">{wishes.length}</div>
            <p className="text-gray-600">Total Wishes</p>
          </div>
          <div className="glass-3d rounded-3xl p-8 text-center neon-glow-3d">
            <div className="text-5xl font-bold text-gradient mb-2">{wishes.filter(w => w.granted).length}</div>
            <p className="text-gray-600">Wishes Granted</p>
          </div>
        </motion.div>

        {/* Tree Quote */}
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
            <Star className="w-20 h-20 text-rose-400 relative z-10 depth-2" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">May All Our Wishes Come True</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            "Our wish tree stands tall with dreams we've planted together. With love as our foundation, 
            every wish we hang here is a promise to make it reality - together."
          </p>
        </motion.div>
      </div>
    </div>
  )
}

const WishOrnament = ({ wish, index, onToggle, colorClasses }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.15,
        z: 60
      }}
      animate={{ 
        y: [0, -8, 0]
      }}
      transition={{
        duration: 3, 
        repeat: Infinity,
        delay: index * 0.2
      }}
      onClick={onToggle}
      className={`cursor-pointer rounded-2xl p-6 text-white shadow-xl preserve-3d bg-gradient-to-br ${colorClasses[wish.color]} ${wish.granted ? 'opacity-80 ring-4 ring-green-400' : ''}`}
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
      <div className="flex items-start gap-2 mb-2 depth-1">
        {wish.granted ? <Star className="w-5 h-5 fill-yellow-300 text-yellow-300 depth-2" /> : <Heart className="w-5 h-5 fill-white/30 depth-2" />}
      </div>
      <p className="text-sm leading-relaxed depth-2">{wish.text}</p>
      {wish.granted && (
        <p className="text-xs mt-2 font-semibold text-yellow-200 depth-1">✨ Granted!</p>
      )}
    </motion.div>
  )
}

export default WishTree
