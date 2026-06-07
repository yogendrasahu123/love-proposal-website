import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, Circle, Infinity, Mail, Phone } from 'lucide-react'

const Proposal = () => {
  const [showResponse, setShowResponse] = useState(false)
  const [response, setResponse] = useState(null)

  const handleResponse = (answer) => {
    setResponse(answer)
    setShowResponse(true)
  }

  return (
    <div className="min-h-screen py-20 px-4 perspective-1000">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!showResponse ? (
            <motion.div
              key="proposal"
              initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateX: -10 }}
              transition={{ duration: 0.8 }}
            >
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: -50, rotateZ: -10 }}
                  animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                  transition={{ duration: 1 }}
                  className="mb-8"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -30, 0],
                      scale: [1, 1.1, 1],
                      rotate: [0, 15, -15, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Circle className="w-24 h-24 text-rose-500 mx-auto" />
                  </motion.div>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
                >
                  I Have a Question...
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
                >
                  Before you read further, know that every word on this page comes from 
                  the deepest part of my heart. This is the most important question I'll ever ask.
                </motion.p>
              </div>

              {/* The Love Letter */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white rounded-3xl p-10 md:p-16 card-shadow mb-12 transform-style-3d"
              >
                <div className="prose prose-lg max-w-none">
                  <motion.p 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl text-gray-700 leading-relaxed mb-6"
                  >
                    My Dearest Love,
                  </motion.p>
                  
                  {[
                    "From the moment we met online, my life changed in ways I never thought possible. Across the digital world, through screens and time zones, you brought colors to my gray days, music to my silent moments, and warmth to my cold nights. You became my reason to smile, my motivation to be better, and my safe place in this chaotic world.",
                    "I love the way your voice sounds through the phone, how your smile lights up even through a video call. I love how we've built something beautiful despite the miles between us. I love your laugh, your kindness, your strength, and even your imperfections - because they make you perfectly you, no matter the distance.",
                    "With you, I've learned what true love means. It's not just being physically close - it's the late night calls, the morning texts, the video dates, and choosing each other every single day across time zones. It's building a life together, dream by dream, message by message, proving that love knows no boundaries.",
                    "I can't promise you a perfect life, but I can promise you this: I will love you with all my heart, I will stand by your side through every storm, I will celebrate your victories as if they were my own, and I will spend every day working to close the distance between us until we're finally together.",
                    "So here I am, putting my heart in your hands across the miles, asking the question that has been on my mind since the day I realized I couldn't imagine my life without you..."
                  ].map((text, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                      className="text-gray-600 leading-relaxed mb-6"
                    >
                      {text}
                    </motion.p>
                  ))}

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6" fill="#f43f5e" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
                      Will You Marry Me?
                    </h2>
                  </motion.div>
                </div>
              </motion.div>

              {/* Response Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  onClick={() => handleResponse('yes')}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gradient text-white px-12 py-6 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
                >
                  <Heart className="w-6 h-6" fill="white" />
                  <span>Yes, Forever!</span>
                  <Heart className="w-6 h-6" fill="white" />
                </motion.button>
                
                <motion.button
                  onClick={() => handleResponse('think')}
                  whileHover={{ scale: 1.1, rotateY: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-rose-600 px-12 py-6 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-rose-300"
                >
                  Let Me Think About It
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            /* Response Screen */
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {response === 'yes' ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-2xl"
                    >
                      <Heart className="w-16 h-16 text-white" fill="white" />
                    </motion.div>
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
                  >
                    You Said Yes!
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
                  >
                    My heart is overflowing with joy! I promise to spend every day 
                    making you glad you did. This is just the beginning of our forever.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center gap-4 mb-12"
                  >
                    {[Sparkles, Infinity, Heart].map((Icon, index) => (
                      <motion.div
                        key={index}
                        animate={{ 
                          y: [0, -20, 0],
                          rotate: [0, 15, -15, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-rose-500" fill={index === 2 ? "#f43f5e" : undefined} />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotateX: 15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="bg-white rounded-2xl p-8 card-shadow max-w-md mx-auto transform-style-3d"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Next?</h3>
                    <p className="text-gray-600 mb-6">
                      Let's start planning our future together. I can't wait to spend 
                      the rest of my life with you!
                    </p>
                    <div className="flex flex-col gap-4">
                      <motion.a 
                        href="tel:+1234567890" 
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center justify-center gap-2 text-rose-600 hover:text-rose-700 font-medium"
                      >
                        <Phone className="w-5 h-5" />
                        Call Me
                      </motion.a>
                      <motion.a 
                        href="mailto:love@example.com" 
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center justify-center gap-2 text-rose-600 hover:text-rose-700 font-medium"
                      >
                        <Mail className="w-5 h-5" />
                        Send Me a Message
                      </motion.a>
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                  >
                    <Heart className="w-24 h-24 text-rose-400 mx-auto" />
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl font-bold mb-6 text-gradient"
                  >
                    Take Your Time
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
                  >
                    I understand this is a big decision. Whatever you decide, know that 
                    my love for you remains unchanged. I'll be here, waiting, hoping, 
                    and loving you from afar or close by - whatever you need.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotateX: 15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="bg-white rounded-2xl p-8 card-shadow max-w-md mx-auto transform-style-3d"
                  >
                    <p className="text-gray-600 mb-6">
                      When you're ready, I'll be here. No pressure, no expectations - 
                      just love, pure and simple.
                    </p>
                    <motion.button
                      onClick={() => setShowResponse(false)}
                      whileHover={{ scale: 1.05, rotateZ: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-gradient text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      Read the Proposal Again
                    </motion.button>
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Proposal
