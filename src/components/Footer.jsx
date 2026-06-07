import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="glass-3d border-t border-white/20 mt-auto perspective-1000">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center parallax-3d">
        <motion.div 
          initial={{ opacity: 0, y: 20, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center space-x-3 mb-6"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotateY: 20, rotateX: 10 }}
            className="relative preserve-3d"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-md opacity-50"></div>
            <Heart className="w-8 h-8 text-rose-500 relative z-10 depth-2" fill="#f43f5e" />
          </motion.div>
          <span className="text-xl font-semibold text-gradient tracking-wide depth-1">Made with Love</span>
          <motion.div
            whileHover={{ scale: 1.2, rotateY: -20, rotateX: 10 }}
            className="relative preserve-3d"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-50"></div>
            <Heart className="w-8 h-8 text-pink-500 relative z-10 depth-2" fill="#ec4899" />
          </motion.div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg mb-4"
        >
          Every moment with you is a treasure I hold dear to my heart
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-500 text-sm"
        >
          © 2024 Forever Yours • Built with love across the miles
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
