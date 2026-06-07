import { motion } from 'framer-motion'
import { Target, Calendar, Heart, TrendingUp } from 'lucide-react'

const FuturePlans = () => {
  const plans = [
    {
      id: 1,
      title: 'Move in Together',
      timeline: 'Next 6 months',
      description: 'Create our first home together, building a space filled with love and shared dreams',
      icon: <Target className="w-8 h-8" />,
      color: 'from-rose-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Travel Together',
      timeline: 'This Year',
      description: 'Explore at least 3 new destinations together, creating memories across the globe',
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Build Our Careers',
      timeline: 'Ongoing',
      description: 'Support each other\'s professional growth while building a stable future together',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'Start a Family',
      timeline: '3-5 Years',
      description: 'When the time is right, grow our love into a beautiful family',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 5,
      title: 'Financial Freedom',
      timeline: '5 Years',
      description: 'Build savings and investments to secure our future and dream life',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 6,
      title: 'Learn Together',
      timeline: 'Ongoing',
      description: 'Take courses, learn new skills, and grow intellectually as a couple',
      icon: <Target className="w-8 h-8" />,
      color: 'from-cyan-500 to-teal-500'
    }
  ]

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
            <Target className="w-20 h-20 text-rose-500 relative z-10" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight">
            Our Future Plans
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Building our tomorrow, today - goals and dreams we're working toward together
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 60, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 8,
                boxShadow: "0 30px 60px -12px rgba(244, 63, 94, 0.3)"
              }}
              className="glass-3d rounded-3xl p-8 transform-style-3d"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} text-white mb-6`}>
                {plan.icon}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-rose-100 text-rose-600">
                  {plan.timeline}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{plan.title}</h3>
              <p className="text-gray-600 leading-relaxed">{plan.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
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
            <Heart className="w-20 h-20 text-rose-400 relative z-10" fill="#fb7185" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Vision</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            "Together, we're building a life filled with love, adventure, and purpose. Every goal we set is a promise to each other - 
            to grow, to support, and to create a future that's as beautiful as our love story."
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default FuturePlans
