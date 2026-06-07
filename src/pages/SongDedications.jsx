import { motion } from 'framer-motion'
import { Music, Heart, Play, Pause } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const SongDedications = () => {
  const [playingId, setPlayingId] = useState(null)
  const audioRef = useRef(null)

  const songs = [
    {
      id: 1,
      title: 'Perfect',
      artist: 'Ed Sheeran',
      dedication: 'Because you\'re perfect to me in every way',
      emoji: '🎵',
      memory: 'First dance at our virtual date night',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      id: 2,
      title: 'All of Me',
      artist: 'John Legend',
      dedication: 'I give you all of me, and you give me all of you',
      emoji: '💕',
      memory: 'When I realized I loved you completely',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      id: 3,
      title: 'Thinking Out Loud',
      artist: 'Ed Sheeran',
      dedication: 'Loving you through all the seasons of life',
      emoji: '🌟',
      memory: 'Late night conversations about our future',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    },
    {
      id: 4,
      title: 'A Thousand Years',
      artist: 'Christina Perri',
      dedication: 'I would wait a thousand years for you',
      emoji: '⏳',
      memory: 'Every moment we spent apart',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    },
    {
      id: 5,
      title: 'Just the Way You Are',
      artist: 'Bruno Mars',
      dedication: 'You\'re amazing just the way you are',
      emoji: '✨',
      memory: 'When you made me feel confident and loved',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
    },
    {
      id: 6,
      title: 'Can\'t Help Falling in Love',
      artist: 'Elvis Presley',
      dedication: 'Falling for you was the easiest thing',
      emoji: '💘',
      memory: 'The moment I knew you were the one',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
    },
    {
      id: 7,
      title: 'Lover',
      artist: 'Taylor Swift',
      dedication: 'You\'re my lover, my best friend, my everything',
      emoji: '🎀',
      memory: 'Our late night calls that turned into mornings',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
    },
    {
      id: 8,
      title: 'Make You Feel My Love',
      artist: 'Adele',
      dedication: 'I want to make you feel loved every single day',
      emoji: '💌',
      memory: 'When you needed reassurance and I was there',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
    }
  ]

  const togglePlay = (id) => {
    if (playingId === id) {
      // Pause current song
      if (audioRef.current) {
        audioRef.current.pause()
      }
      setPlayingId(null)
    } else {
      // Play new song
      if (audioRef.current) {
        audioRef.current.pause()
      }
      const song = songs.find(s => s.id === id)
      audioRef.current = new Audio(song.audioUrl)
      audioRef.current.play()
      setPlayingId(id)
      
      // Handle song end
      audioRef.current.onended = () => {
        setPlayingId(null)
      }
    }
  }

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

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
            <Music className="w-20 h-20 text-rose-500 relative z-10" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient tracking-tight">
            Song Dedications
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            Every song tells our story - melodies dedicated to us
          </p>
        </motion.div>

        {/* Songs Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 60, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 8,
                boxShadow: "0 30px 60px -12px rgba(244, 63, 94, 0.3)"
              }}
              className="glass-3d rounded-3xl p-8 transform-style-3d"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                  className="text-5xl"
                >
                  {song.emoji}
                </motion.div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{song.title}</h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => togglePlay(song.id)}
                      className="p-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                    >
                      {playingId === song.id ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </motion.button>
                  </div>
                  <p className="text-rose-600 font-medium mb-3">{song.artist}</p>
                  <p className="text-gray-600 mb-4 italic">"{song.dedication}"</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Heart className="w-4 h-4 text-rose-400" />
                    <span>{song.memory}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Playlist */}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Love Playlist</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-6">
            "These songs are the soundtrack of our love story. Each one holds a special memory, 
            a feeling, or a moment that defines us. Together, they tell the story of us."
          </p>
          <div className="flex justify-center gap-4">
            {['🎧', '🎶', '💿', '🎼'].map((emoji, i) => (
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
        </motion.div>
      </div>
    </div>
  )
}

export default SongDedications
