import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, Sparkles, Star, Quote, Laugh } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen perspective-2000">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4 perspective-1000">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.25, 1],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-300 to-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
            animate={{
              y: [0, -45, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 8, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -60, rotateX: -25 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-10"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.25, 1],
                rotate: [0, 15, -15, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-60"></div>
                <Heart className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-rose-500 relative z-10 depth-2" fill="#f43f5e" />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40, rotateY: -20 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 text-gradient tracking-tight px-4"
          >
            A Love Letter For You
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4"
          >
            Across miles and time zones, you are my peace. In a lifetime of moments, 
            you are my favorite. This is my heart, poured into words for you, 
            proving that love knows no distance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/proposal"
                className="btn-gradient text-white px-10 py-5 rounded-2xl font-bold text-xl modern-shadow transition-all duration-300 flex items-center space-x-3"
              >
                <span>Read My Proposal</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotateY: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/our-story"
                className="glass-card text-rose-600 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 border-2 border-rose-200/50"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 perspective-1000">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-center mb-20 text-gradient tracking-tight"
          >
            Why You're Everything To Me
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-14 h-14" />,
                title: "Love Across Miles",
                description: "Your love has taught me that distance is just a number. Every video call, every message, every moment together proves our connection transcends any physical separation."
              },
              {
                icon: <Sparkles className="w-14 h-14" />,
                title: "Endless Joy",
                description: "You bring light into my darkest days through screens and time zones. Your smile, even through a video call, is my favorite sight in the world."
              },
              {
                icon: <Star className="w-14 h-14" />,
                title: "My Guiding Star",
                description: "Through every challenge of being apart, you've been my constant support. Your belief in us gives me strength to bridge the distance between us."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: 25 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 8,
                  rotateX: 5,
                  boxShadow: "0 30px 60px -12px rgba(244, 63, 94, 0.3)"
                }}
                className="glass-3d rounded-3xl p-10 transform-style-3d"
              >
                <div className="text-gradient mb-6 depth-1">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4 perspective-1000">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateZ: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-3d rounded-3xl p-16 gradient-border"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-xl opacity-50"></div>
                <Heart className="w-20 h-20 text-rose-400 relative z-10 depth-2" fill="#fb7185" />
              </div>
            </motion.div>
            <blockquote className="text-2xl md:text-4xl font-medium text-gray-700 italic mb-8 leading-relaxed">
              "I have waited for this moment my whole life. To find someone who sees me,
              truly sees me, and loves me anyway. That someone is you."
            </blockquote>
            <p className="text-gradient font-semibold text-lg">— From My Heart to Yours</p>
          </motion.div>
        </div>
      </section>

      {/* Love Messages Section */}
      <section className="py-24 px-4 perspective-1000">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <Quote className="w-16 h-16 text-gradient mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6 text-gradient tracking-tight">Words From My Heart</h2>
            <p className="text-2xl text-gray-700 max-w-2xl mx-auto font-light">
              A glimpse of my love expressed through messages and shayari
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 12,
                rotateX: 8
              }}
              className="glass-3d rounded-3xl p-8 transform-style-3d"
            >
              <p className="text-xl text-gray-800 leading-relaxed mb-6 font-medium">
                "तुम्हें देखकर दिल खुश हो जाता है, तुम्हारी याद में वक्त गुज़र जाता है। दूर होकर भी तुम मेरे पास हो, यही मेरी ज़िंदगी का सबसे हसीन अंजाम है।"
              </p>
              <p className="text-base text-gray-600 italic">Seeing you makes my heart happy, time passes in your memories. Even though you're far, you're still close to me.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: -12,
                rotateX: 8
              }}
              className="glass-card rounded-3xl p-8 transform-style-3d"
            >
              <p className="text-xl text-gray-800 leading-relaxed mb-6 font-medium">
                "In a world full of temporary things, you are a perpetual feeling. Every time I think of you, I fall in love all over again. Distance may keep us apart, but my heart beats only for you."
              </p>
              <p className="text-base text-gray-600 italic">— My heart to yours</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateZ: 8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/love-messages"
                className="btn-gradient text-white px-12 py-5 rounded-2xl font-bold text-xl modern-shadow transition-all duration-300 inline-flex items-center space-x-3"
              >
                <span>Read More Love Messages & Shayari</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Love Game Section */}
      <section className="py-24 px-4 perspective-1000">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateX: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-3xl p-12 md:p-16 modern-shadow transform-style-3d"
          >
            <div className="text-center mb-12">
              <motion.div
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
                  <Laugh className="w-20 h-20 text-rose-500 relative z-10" />
                </div>
              </motion.div>
              <h2 className="text-5xl font-bold mb-6 text-gradient tracking-tight">Fun Love Quiz! 🎮</h2>
              <p className="text-2xl text-gray-700 max-w-2xl mx-auto font-light">
                Want to test how well you know me? Take this fun quiz and see our connection score!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { emoji: "❓", text: "8 Fun Questions" },
                { emoji: "💕", text: "Test Our Connection" },
                { emoji: "🏆", text: "Get Your Score" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, rotateZ: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ 
                  scale: 1.1, 
                  rotateZ: 8,
                  rotateY: 12,
                  rotateX: 5
                }}
                className="glass-3d rounded-2xl p-6 text-center transform-style-3d"
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <p className="text-base text-gray-600 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 12, rotateX: 8 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/love-game"
                  className="btn-gradient text-white px-12 py-5 rounded-2xl font-bold text-xl modern-shadow transition-all duration-300 inline-flex items-center space-x-3"
                >
                  <Laugh className="w-6 h-6" />
                  <span>Play the Love Quiz</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 perspective-1000">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="btn-gradient rounded-3xl p-16 modern-shadow transform-style-3d"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight"
            >
              Ready to Begin Our Forever?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl mb-12 text-white/90 font-light"
            >
              Every love story is beautiful, but ours is my favorite - 
              a love that started online and grew stronger across the miles. 
              Let me tell you why I want to spend the rest of my life making you happy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.05, rotateZ: 8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/proposal"
                className="bg-white text-rose-600 px-14 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center space-x-3"
              >
                <span>See My Proposal</span>
                <Heart className="w-6 h-6 depth-2" fill="#f43f5e" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
