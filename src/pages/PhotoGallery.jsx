import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Heart, Camera, Sparkles } from 'lucide-react'

const PhotoGallery = () => {
  const memories = [
    { id: 1, title: 'First Date', date: 'March 15, 2023', description: 'Where our journey began', emoji: '💕' },
    { id: 2, title: 'Beach Sunset', date: 'June 20, 2023', description: 'Golden moments together', emoji: '🌅' },
    { id: 3, title: 'Movie Night', date: 'August 5, 2023', description: 'Cuddling through our favorite films', emoji: '🎬' },
    { id: 4, title: 'Coffee Date', date: 'October 12, 2023', description: 'Simple moments, endless love', emoji: '☕' },
    { id: 5, title: 'Holiday Magic', date: 'December 25, 2023', description: 'Christmas together at last', emoji: '🎄' },
    { id: 6, title: 'Adventure Time', date: 'February 14, 2024', description: 'Valentine\'s getaway', emoji: '✈️' },
    { id: 7, title: 'Cooking Together', date: 'April 8, 2024', description: 'Making memories in the kitchen', emoji: '👩‍🍳' },
    { id: 8, title: 'Stargazing', date: 'July 22, 2024', description: 'Under the night sky', emoji: '⭐' },
    { id: 9, title: 'Road Trip', date: 'September 10, 2024', description: 'Miles of smiles', emoji: '🚗' },
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
            <Camera className="w-20 h-20 text-rose-500 relative z-10 depth-2" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight">
            Our Photo Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Every picture tells our story - moments frozen in time that we'll cherish forever
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 parallax-3d">
          {memories.map((memory, index) => (
            <PhotoCard key={memory.id} memory={memory} index={index} />
          ))}
        </div>

        {/* Add More Section */}
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
            <h3 className="text-2xl font-bold mb-4 text-gray-800">More Memories Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              Every day with you creates new beautiful memories. Our gallery keeps growing with love!
            </p>
            <div className="flex justify-center gap-4">
              {['📸', '💝', '✨', '🎉'].map((emoji, i) => (
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
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const PhotoCard = ({ memory, index }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
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
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-8 text-center depth-1">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          className="text-6xl mb-4 depth-2"
        >
          {memory.emoji}
        </motion.div>
        <h3 className="text-2xl font-bold mb-2 text-gray-800 depth-2">{memory.title}</h3>
        <p className="text-rose-600 font-medium mb-3">{memory.date}</p>
        <p className="text-gray-600">{memory.description}</p>
      </div>
    </motion.div>
  )
}

export default PhotoGallery
