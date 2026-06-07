import { useState } from 'react'
import { Heart, Sparkles, Trophy, RotateCcw, Laugh } from 'lucide-react'
import { motion } from 'framer-motion'

const LoveGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const questions = [
    {
      question: "What was my first message to you?",
      options: ["Hey there!", "Hi, nice to meet you", "Hello beautiful", "A simple greeting"],
      correct: 0,
      explanation: "That simple 'Hey there!' started our beautiful journey together!"
    },
    {
      question: "What's my favorite thing about our video calls?",
      options: ["Seeing your smile", "Hearing your laugh", "Just being with you", "All of the above"],
      correct: 3,
      explanation: "Honestly, it's everything - your smile, your laugh, and just the fact that we're together!"
    },
    {
      question: "How do I feel about our long distance relationship?",
      options: ["It's too hard", "It's worth it because of you", "I hate the distance", "I want to give up"],
      correct: 1,
      explanation: "Every mile between us is worth it because at the end of it all, there's you!"
    },
    {
      question: "What's my favorite memory of us?",
      options: ["Our first video call", "Late night conversations", "Every moment with you", "When we said 'I love you'"],
      correct: 2,
      explanation: "Every single moment with you is my favorite - I can't choose just one!"
    },
    {
      question: "What do I want most for our future?",
      options: ["To be rich", "To travel the world", "To close the distance and be together", "To have a big house"],
      correct: 2,
      explanation: "More than anything, I want to close the distance between us and finally be together!"
    },
    {
      question: "How often do I think about you?",
      options: ["Sometimes", "Often", "All the time", "Every single second"],
      correct: 3,
      explanation: "You're in my thoughts every single second of every day!"
    },
    {
      question: "What's my love language for you?",
      options: ["Words of affirmation", "Quality time", "All of the above", "Gifts"],
      correct: 2,
      explanation: "I express my love in every way possible - words, time, and everything in between!"
    },
    {
      question: "What makes me happiest?",
      options: ["Seeing you happy", "Getting gifts", "Being alone", "Sleeping"],
      correct: 0,
      explanation: "Nothing makes me happier than seeing you happy - your joy is my joy!"
    }
  ]

  const handleAnswer = (index) => {
    setSelectedAnswer(index)
    setShowExplanation(true)
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    setShowExplanation(false)
    setSelectedAnswer(null)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) {
      return {
        title: "Perfect Match! 💕",
        message: "You know me better than I know myself! Our connection is truly magical!",
        emoji: "🏆"
      }
    } else if (percentage >= 75) {
      return {
        title: "Amazing Connection! 💖",
        message: "You know me so well! Our love is stronger than any distance!",
        emoji: "⭐"
      }
    } else if (percentage >= 50) {
      return {
        title: "Growing Together! 💗",
        message: "We're still learning about each other, and that's part of the beauty of our journey!",
        emoji: "🌱"
      }
    } else {
      return {
        title: "More to Discover! 💝",
        message: "There's always more to learn about each other - that's what makes our love exciting!",
        emoji: "🎯"
      }
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 perspective-2000">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-60"></div>
            <Laugh className="w-16 h-16 text-rose-500 mx-auto relative z-10 depth-2" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient px-4">
            How Well Do You Know Me? 💕
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            A fun little quiz to test our connection! Let's see how well you know me across the miles.
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-3d rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 transform-style-3d"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Score: {score}/{questions.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div 
                  className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-500 neon-glow-3d"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => !showExplanation && handleAnswer(index)}
                    disabled={showExplanation}
                    whileHover={!showExplanation ? { scale: 1.02, rotateY: 5, rotateX: 3 } : {}}
                    whileTap={!showExplanation ? { scale: 0.98 } : {}}
                    className={`w-full p-4 rounded-xl text-left font-medium transition-all duration-300 transform-style-3d ${
                      showExplanation
                        ? index === questions[currentQuestion].correct
                          ? 'bg-green-100 border-2 border-green-500 text-green-800'
                          : selectedAnswer === index
                          ? 'bg-red-100 border-2 border-red-500 text-red-800'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'glass-3d hover:bg-rose-50 border-2 border-rose-200 hover:border-rose-400 text-gray-800'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-rose-600">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </span>
                    </motion.button>
                ))}
              </div>
            </div>

            {/* Explanation */}
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-3d rounded-xl p-6 mb-6 border border-rose-200 transform-style-3d"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">
                    {questions[currentQuestion].explanation}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Next Button */}
            {showExplanation && (
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.05, rotateY: 8, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-gradient text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
              </motion.button>
            )}
          </motion.div>
        ) : (
          /* Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-3d rounded-3xl p-8 md:p-12 text-center transform-style-3d"
          >
            <div className="mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-8xl mb-4 depth-2"
              >
                {getResultMessage().emoji}
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
                <Trophy className="w-20 h-20 text-rose-500 mx-auto relative z-10 depth-2" />
              </motion.div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {getResultMessage().title}
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              {getResultMessage().message}
            </p>

            <div className="glass-3d rounded-2xl p-8 mb-8 transform-style-3d">
              <div className="text-6xl font-bold text-gradient mb-2 depth-2">
                {score}/{questions.length}
              </div>
              <p className="text-gray-600">Correct Answers</p>
            </div>

            <motion.button
              onClick={handleRestart}
              whileHover={{ scale: 1.05, rotateY: 8, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 inline-flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Play Again
            </motion.button>
          </motion.div>
        )}

        {/* Fun Note */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-3d rounded-2xl p-8 text-white holographic">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative inline-block mb-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
              <Heart className="w-12 h-12 mx-auto relative z-10 depth-2" fill="white" />
            </motion.div>
            <p className="text-lg leading-relaxed opacity-95">
              Remember: Whether you get all answers right or not, you've already won my heart! 
              This quiz is just for fun - the real prize is our love, and that's something you already have. 💕
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LoveGame
