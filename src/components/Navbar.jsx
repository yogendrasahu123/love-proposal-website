import { Link } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Memories', path: '/memories' },
    { name: 'Photo Gallery', path: '/photo-gallery' },
    { name: 'Bucket List', path: '/bucket-list' },
    { name: 'Future Plans', path: '/future-plans' },
    { name: 'Dream Destinations', path: '/dream-destinations' },
    { name: 'Song Dedications', path: '/song-dedications' },
    { name: 'Anniversary Tracker', path: '/anniversary-tracker' },
    { name: 'Memory Jar', path: '/memory-jar' },
    { name: 'Wish Tree', path: '/wish-tree' },
    { name: 'Love Letters', path: '/love-letters' },
    { name: 'Milestones', path: '/milestones' },
    { name: 'Love Messages', path: '/love-messages' },
    { name: 'Love Game', path: '/love-game' },
    { name: 'The Proposal', path: '/proposal' },
  ]

  return (
    <nav className="glass-3d sticky top-0 z-50 border-b border-white/20 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 15, rotateX: 10 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Heart className="w-10 h-10 text-rose-500 relative z-10 depth-2" fill="#f43f5e" />
            </motion.div>
            <span className="text-2xl font-bold text-gradient tracking-tight">Forever Yours</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 parallax-3d">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-rose-600 px-4 py-2 rounded-lg hover:bg-rose-50/50 transition-all duration-300 font-medium text-sm tracking-wide block preserve-3d"
                >
                  <motion.span
                    whileHover={{ 
                      scale: 1.05,
                      rotateX: 10,
                      rotateY: 5,
                      z: 20
                    }}
                    className="block depth-1"
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1, rotateZ: 90 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-3 rounded-xl hover:bg-rose-50/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -15 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-6 pt-2"
            >
              <div className="glass-3d rounded-2xl p-4 parallax-3d">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <Link
                      to={item.path}
                      className="block py-3 px-4 text-gray-700 hover:text-rose-600 hover:bg-rose-50/50 rounded-xl transition-all duration-300 font-medium preserve-3d"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        whileHover={{ 
                          scale: 1.05,
                          rotateX: 8,
                          rotateY: 5,
                          z: 15
                        }}
                        className="block depth-1"
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
