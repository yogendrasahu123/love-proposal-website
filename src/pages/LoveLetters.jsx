import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Heart, Calendar, Sparkles } from 'lucide-react'

const LoveLetters = () => {
  const letters = [
    {
      id: 1,
      title: 'The First Letter',
      date: 'March 15, 2023',
      excerpt: 'Dear [Name], I never thought I\'d find someone who understands me the way you do...',
      fullText: 'Dear [Name],\n\nI never thought I\'d find someone who understands me the way you do. From our first conversation, I felt a connection that I can\'t explain. You make me want to be better, to do better, to love better.\n\nEvery message from you brightens my day. Every call with you is the highlight of my week. I find myself smiling at my phone like a fool, and I don\'t even care.\n\nThank you for coming into my life and making it beautiful.\n\nForever yours,\n[Your Name]',
      emoji: '💌'
    },
    {
      id: 2,
      title: 'Longing Letter',
      date: 'June 20, 2023',
      excerpt: 'Miles between us feel like mountains today. I miss you more than words can say...',
      fullText: 'My Dearest,\n\nMiles between us feel like mountains today. I miss you more than words can say. Every moment without you feels incomplete, yet every thought of you makes my heart full.\n\nI catch myself looking at the same moon, wondering if you\'re looking too. Distance is hard, but what we have is worth every lonely moment.\n\nI\'d cross oceans for you. I\'d wait lifetimes for you. Because you\'re worth it all.\n\nWith all my love,\n[Your Name]',
      emoji: '💕'
    },
    {
      id: 3,
      title: 'Gratitude Letter',
      date: 'September 10, 2023',
      excerpt: 'Today I want to thank you for everything. For your patience, your love, your belief in us...',
      fullText: 'My Love,\n\nToday I want to thank you for everything. For your patience when I\'m difficult. For your love when I\'m unlovable. For your belief in us when I have doubts.\n\nYou\'ve taught me what true love means - it\'s not just the good times, it\'s choosing each other through everything. It\'s the late night talks, the silent support, the understanding without words.\n\nThank you for being my person.\n\nEternally grateful,\n[Your Name]',
      emoji: '🙏'
    },
    {
      id: 4,
      title: 'Promise Letter',
      date: 'December 25, 2023',
      excerpt: 'I promise to love you through all of life\'s seasons. To hold your hand through every storm...',
      fullText: 'My Forever,\n\nI promise to love you through all of life\'s seasons. To hold your hand through every storm. To celebrate every victory with you. To be your safe place when the world gets too loud.\n\nI promise to choose you every single day. To grow with you, not away from you. To learn with you, not just from you. To build a life that\'s ours, not just mine or yours.\n\nYou\'re my today and all of my tomorrows.\n\nWith all my heart,\n[Your Name]',
      emoji: '💍'
    },
    {
      id: 5,
      title: 'Dream Letter',
      date: 'February 14, 2024',
      excerpt: 'I dream of our future together. Of mornings waking up next to you. Of building a home...',
      fullText: 'My Dream,\n\nI dream of our future together. Of mornings waking up next to you. Of building a home filled with love and laughter. Of growing old together, still holding hands.\n\nI dream of travels we\'ll take, adventures we\'ll share, and quiet moments we\'ll treasure. I dream of a family that knows unconditional love because that\'s what we\'ll teach them.\n\nMost of all, I dream of every tomorrow with you in it.\n\nYours always,\n[Your Name]',
      emoji: '✨'
    },
    {
      id: 6,
      title: 'Strength Letter',
      date: 'April 8, 2024',
      excerpt: 'You are my strength when I am weak. You are my light when I am in darkness...',
      fullText: 'My Strength,\n\nYou are my strength when I am weak. You are my light when I am in darkness. You are my calm when I am chaotic. You are everything I need, even when I don\'t know I need it.\n\nWhen the world gets too heavy, you carry the weight with me. When I can\'t find the words, you understand me anyway. When I\'m ready to give up, you remind me why I started.\n\nThank you for being my rock, my anchor, my everything.\n\nLove always,\n[Your Name]',
      emoji: '💪'
    },
    {
      id: 7,
      title: 'Memory Letter',
      date: 'May 20, 2024',
      excerpt: 'I remember the first time we spoke. The way your voice made my heart skip a beat...',
      fullText: 'My Dearest Memory,\n\nI remember the first time we spoke. The way your voice made my heart skip a beat. The butterflies in my stomach that never went away. The feeling that I had found someone special.\n\nI remember our first video call, seeing your smile for the first time. The way time seemed to stop. The realization that this was something real, something worth fighting for.\n\nEvery memory with you is my favorite. Every moment with you is precious. I can\'t wait to make a million more memories with you.\n\nForever yours,\n[Your Name]',
      emoji: '📸'
    },
    {
      id: 8,
      title: 'Hope Letter',
      date: 'July 15, 2024',
      excerpt: 'In a world that sometimes feels hopeless, you are my hope. You are my reason to believe...',
      fullText: 'My Hope,\n\nIn a world that sometimes feels hopeless, you are my hope. You are my reason to believe in tomorrow, in love, in forever.\n\nWhen I\'m drowning in doubt, you throw me a lifeline. When I\'m lost in darkness, you become my light. When I\'m ready to give up on everything, you remind me why I started.\n\nYou are my daily reminder that good things still exist, that love is real, that happily ever after is possible.\n\nWith eternal hope,\n[Your Name]',
      emoji: '🌟'
    },
    {
      id: 9,
      title: 'Comfort Letter',
      date: 'August 30, 2024',
      excerpt: 'When the world gets too loud, I find peace in your voice. When life gets too hard...',
      fullText: 'My Peace,\n\nWhen the world gets too loud, I find peace in your voice. When life gets too hard, I find comfort in your words. When everything feels wrong, you make it right.\n\nYou are my safe space, my sanctuary, my home. With you, I can be vulnerable, I can be weak, I can be me - and that\'s enough.\n\nThank you for loving me through my storms, for holding me when I fall, for being the calm in my chaos.\n\nYours in peace,\n[Your Name]',
      emoji: '🕊️'
    }
  ]

  const [selectedLetter, setSelectedLetter] = useState(null)

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
            <Mail className="w-20 h-20 text-rose-500 relative z-10" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight px-4">
            Love Letters Archive
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-light px-4">
            Words from my heart, preserved forever - letters that tell our love story
          </p>
        </motion.div>

        {/* Letters Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 60, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 8,
                boxShadow: "0 30px 60px -12px rgba(244, 63, 94, 0.3)"
              }}
              onClick={() => setSelectedLetter(letter)}
              className="glass-card rounded-3xl p-4 sm:p-6 md:p-8 cursor-pointer transform-style-3d"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                className="text-4xl sm:text-5xl mb-4 text-center"
              >
                {letter.emoji}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">{letter.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{letter.date}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 italic line-clamp-3">{letter.excerpt}</p>
              <div className="mt-4 text-rose-600 font-medium text-sm flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Read full letter
              </div>
            </motion.div>
          ))}
        </div>

        {/* Letter Modal */}
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.9, rotateX: 15 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0.9, rotateX: 15 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl sm:text-5xl md:text-6xl mb-4"
                >
                  {selectedLetter.emoji}
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-2">{selectedLetter.title}</h2>
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedLetter.date}</span>
                </div>
              </div>
              <div className="bg-white/50 rounded-2xl p-4 sm:p-6 md:p-8 mb-6">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line font-light text-base sm:text-lg">
                  {selectedLetter.fullText}
                </p>
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLetter(null)}
                  className="btn-gradient text-white px-6 sm:px-8 py-3 rounded-2xl font-bold text-sm sm:text-base"
                >
                  Close Letter
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Archive Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-3d rounded-3xl p-6 sm:p-8 md:p-12 text-center gradient-border"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
            <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-rose-400 relative z-10" fill="#fb7185" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gradient px-4">Words That Last Forever</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light px-4">
            "These letters are more than just words on a page. They\'re pieces of my heart, 
            frozen in time, telling the story of how I fell in love with you - and how I keep falling, 
            every single day."
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default LoveLetters
