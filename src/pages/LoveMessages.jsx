import { Heart, Quote, Sparkles, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const LoveMessages = () => {
  const loveMessages = [
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "My Promise to You",
      content: "In a world full of temporary things, you are a perpetual feeling. Every time I look at you, I fall in love all over again. Distance may keep us apart, but my heart beats only for you, across every mile and time zone."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "You Are My Home",
      content: "Home is not a place, it's a feeling. And that feeling is you. No matter where I am or how far apart we are, when I think of you, I'm home. You are my peace, my comfort, and my everything."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "Forever and Always",
      content: "I don't want the world. I don't want the stars. I just want you. You're my favorite notification, my best thought, and my last wish before I sleep. Loving you is the easiest thing I've ever done."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "My Safe Haven",
      content: "In a chaotic world, you are my calm. In a stormy life, you are my shelter. Every moment with you feels like coming home to a place I never want to leave. You make everything better just by being you."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "You Complete Me",
      content: "Before you, I was incomplete. I didn't know what was missing until I found you. Now I can't imagine life without you. You're the missing piece I never knew I needed, the melody my heart was waiting to hear."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "My North Star",
      content: "You guide me when I'm lost. You light up my darkest nights. You give me direction when I'm confused. You're not just my love, you're my compass, my guiding light, my reason to keep going."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "Every Moment With You",
      content: "Every second with you is precious. Every message from you makes my day brighter. Every call with you is the highlight of my week. Every thought of you brings a smile to my face. You make life beautiful."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "My Best Friend",
      content: "You're not just my love, you're my best friend. I can tell you anything without fear of judgment. You understand me like no one else does. You support me, you believe in me, you love me unconditionally."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "My Forever Person",
      content: "I've waited my whole life for someone like you. Someone who gets me, who loves me for who I am, who makes me want to be better. You're not just for now, you're for always. You're my forever person."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "Grateful for You",
      content: "Every day I wake up grateful that you're in my life. Grateful for your love, your patience, your understanding. Grateful for the distance that makes our love stronger. Grateful for you, simply and completely."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "Good Morning, My Love",
      content: "The first thing I think of every morning is you. Before the day begins, before the world wakes up, my heart already knows where it belongs — with you. Good morning is just another way of saying I love you."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "You Are My Sunshine",
      content: "On the darkest days, you are my sunshine breaking through the clouds. Your laugh is my favorite sound, your name is my favorite word, and your love is the greatest gift I've ever received."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "My Heart Only Knows You",
      content: "I have loved in words and silence both, but the way I love you has no language. It lives in the space between heartbeats, in the quiet moments, in every thought that begins and ends with your name."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "Distance Is Just a Number",
      content: "They say distance makes the heart grow fonder — with you, it makes it grow wildly, completely, endlessly. Every mile between us is just another reason I can't wait to close the gap and hold you close."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "The Luckiest Person Alive",
      content: "Out of all the people in this world, you chose to love me. Out of all the timelines, we found each other in this one. I don't take that lightly — I carry it with me every single day as the greatest blessing of my life."
    },
    {
      type: "message",
      icon: <Heart className="w-8 h-8" />,
      title: "You Made Me Believe Again",
      content: "Before you, I had lost faith in magic. Then you walked in and rearranged everything I thought I knew about love. You didn't just find me — you found every broken piece and gently put me back together."
    }
  ]

  const shayaris = [
    {
      text: "तुम्हें देखकर दिल खुश हो जाता है, तुम्हारी याद में वक्त गुज़र जाता है। दूर होकर भी तुम मेरे पास हो, यही मेरी ज़िंदगी का सबसे हसीन अंजाम है।",
      translation: "Seeing you makes my heart happy, time passes in your memories. Even though you're far, you're still close to me, this is the most beautiful result of my life."
    },
    {
      text: "मोहब्बत में हम ने सब कुछ खो दिया, पर तुम्हें पा कर सब कुछ पा लिया। दूरियाँ चाहे कितनी भी हों, दिल से दिल का रिश्ता कभी नहीं टूटता।",
      translation: "In love, I lost everything, but by finding you, I gained everything. No matter how far the distances, the heart-to-heart connection never breaks."
    },
    {
      text: "तेरी याद में गुज़रती है हर रात, तेरी बातों में बसती है हर बात। दूर होकर भी तू मेरे पास है, यही मोहब्बत की सबसे ख़ास बात।",
      translation: "Every night passes in your memories, every conversation is filled with your words. Even though you're far, you're close to me, this is the most special thing about love."
    },
    {
      text: "हज़ारों मुलाक़ातें होंगी, पर तुम्हारी जैसी कोई नहीं मिलेगी। दूरियों के बावजूद तुम मेरे दिल में बसती हो, यही मोहब्बत की सबसे बड़ी कहानी।",
      translation: "There will be thousands of meetings, but none like you. Despite the distances, you reside in my heart, this is the greatest story of love."
    },
    {
      text: "तुम्हारे बिना ये दिल अधूरा है, तुम्हारे साथ ये ज़िंदगी पूरी है। दूर होकर भी तुम मेरे करीब हो, यही मेरी मोहब्बत की तस्वीर।",
      translation: "Without you, this heart is incomplete, with you this life is complete. Even though you're far, you're close to me, this is the picture of my love."
    },
    {
      text: "मोहब्बत कोई खेल नहीं, ये दिल की बात है। तुमसे मोहब्बत है, ये रूह की आवाज़ है। दूरियाँ तो आती-जाती रहेंगी, पर हमारा प्यार हमेशा बना रहेगा।",
      translation: "Love is not a game, it's a matter of the heart. I love you, this is the voice of the soul. Distances will come and go, but our love will always remain."
    },
    {
      text: "तेरे बिना सांसें भी रुक जाती हैं, तेरे बिना दिल भी डर जाता है। तू ही मेरी ज़िंदगी है, तू ही मेरी दुनिया है, तू ही मेरी हर खुशी है।",
      translation: "Without you, even my breath stops, without you, even my heart fears. You are my life, you are my world, you are my every happiness."
    },
    {
      text: "मोहब्बत में दूरियाँ मायने नहीं रखती, दिल का रिश्ता कभी नहीं टूटता। चाहे कितनी भी मुश्किलें आएं, हम साथ निभाएंगे हमेशा।",
      translation: "Distances don't matter in love, the heart's connection never breaks. No matter how many difficulties come, we'll stay together always."
    },
    {
      text: "तेरी हर बात मुझे दीवाना कर देती है, तेरी हर मुस्कान मेरी दुनिया रोशन कर देती है। तू ही मेरी पहचान है, तू ही मेरी शान है।",
      translation: "Every word of yours drives me crazy, every smile of yours lights up my world. You are my identity, you are my pride."
    },
    {
      text: "मोहब्बत कभी खत्म नहीं होती, बस बदल जाती है रूप। हमारा प्यार भी ऐसा ही है, हर दिन नया, हर पल नूर।",
      translation: "Love never ends, it just changes form. Our love is just like that - new every day, light in every moment."
    },
    {
      text: "तेरे साथ वक्त गुज़रना अलग है, तेरे बिना वक्त कटना मुश्किल है। तू मेरी ज़िंदगी का सबसे ख़ास हिस्सा है, तू मेरी दुनिया का सबसे प्यारा राज़ है।",
      translation: "Spending time with you is different, without you, time is hard to pass. You are the most special part of my life, you are the most beloved secret of my world."
    },
    {
      text: "दिल से दिल का रिश्ता बहुत पुराना है, तुमसे मोहब्बत का ये एहसास बहुत नया है। हर पल तुम्हें चाहता हूँ, हर सांस तुम्हें पुकारती है।",
      translation: "The heart-to-heart connection is ancient, this feeling of love for you is new. Every moment I love you, every breath calls out to you."
    },
    {
      text: "तू मिला तो लगा जैसे ज़िंदगी मिल गई, तेरी मुस्कान में जन्नत की झलक मिल गई। अब कोई ख्वाहिश नहीं बाकी इस दिल में, तुझे पाकर हर खुशी मिल गई।",
      translation: "When I found you, I felt I found life itself, in your smile I found a glimpse of paradise. Now there is no wish left in this heart, by finding you I have found every happiness."
    },
    {
      text: "तुम्हारी आँखों में एक दुनिया बसती है, तुम्हारी बाँहों में सुकून की बारिश बरसती है। जहाँ भी जाऊँ, जो भी करूँ, तुम्हारी याद हमेशा मेरे साथ रहती है।",
      translation: "A whole world lives in your eyes, in your arms rains down peace and comfort. Wherever I go, whatever I do, your memory always stays with me."
    },
    {
      text: "इश्क़ में डूबा हूँ मैं, तेरी हर अदा पर मर जाता हूँ। तू जो मुस्कुरा दे एक बार, तो सारा जहाँ भूल जाता हूँ।",
      translation: "I am lost in love, I die for your every gesture. If you smile at me just once, I forget the whole world."
    },
    {
      text: "तेरे बिन अधूरी सी है ये ज़िंदगानी, तेरी यादों में बसी है मेरी हर कहानी। तू मेरी रूह में समाया हुआ है, तुझसे है मेरी हर जवानी।",
      translation: "Life feels incomplete without you, every story of mine dwells in your memories. You are absorbed in my soul, all my youth belongs to you."
    },
    {
      text: "ख्वाबों में आते हो तुम रोज़, दिल की बातें कहते हो रोज़। मैं भी इंतज़ार करता हूँ हर रात, कि तुम्हारी आवाज़ सुन सकूँ रोज़।",
      translation: "You come in my dreams every day, you speak the language of my heart every day. I also wait every night, so I can hear your voice every day."
    },
    {
      text: "मोहब्बत का एहसास बयान नहीं होता, दिल का दर्द आसान नहीं होता। पर तुझसे प्यार करना सबसे आसान है, तू मेरे बिन मुमकिन नहीं होता।",
      translation: "The feeling of love cannot be described, the pain of the heart is not easy. But loving you is the easiest thing, without you nothing is possible."
    },
    {
      text: "रात के तारे तुम हो, दिन का उजाला तुम हो। मेरी हर साँस में तुम हो, मेरी हर दुआ में तुम हो। इस दिल की ज़मीन पर, सबसे ख़ूबसूरत पेड़ तुम हो।",
      translation: "You are the stars of the night, you are the light of the day. You are in my every breath, you are in my every prayer. On the land of this heart, you are the most beautiful tree."
    },
    {
      text: "तुम्हारे बिन चैन नहीं मुझे, तुम्हारे साथ हर ग़म से राहत है। तुम्हारी एक झलक दिल सुकून पाता है, तुम्हारे होने से ही मेरी ज़िंदगी में रौनक़ है।",
      translation: "I have no peace without you, with you there is relief from every sorrow. One glimpse of you brings peace to the heart, your existence brings life to my world."
    },
    {
      text: "प्यार में डूबना है तो तुझमें डूबूँ, तेरी मोहब्बत की गहराई में जाऊँ। दुनिया की परवाह नहीं मुझे, बस तेरे दिल में जगह पाऊँ।",
      translation: "If I have to drown in love, let me drown in you, let me go into the depths of your love. I don't care about the world, I just want a place in your heart."
    }
  ]

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
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-60"></div>
            <Heart className="w-16 h-16 text-rose-500 mx-auto relative z-10 depth-2" fill="#f43f5e" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient px-4">
            Love Messages & Shayari
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Words from my heart to yours. These messages and shayaris express 
            the depth of my love, especially across the miles that separate us.
          </p>
        </motion.div>

        {/* Love Messages Section */}
        <section className="mb-20 parallax-3d">
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotateZ: 15 }}
              className="text-rose-500"
            >
              <Heart className="w-8 h-8" fill="#f43f5e" />
            </motion.div>
            <h2 className="text-4xl font-bold text-gradient">Love Messages</h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8">
            {loveMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: 25 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, rotateY: 8, rotateX: 5, boxShadow: "0 30px 60px -12px rgba(244, 63, 94, 0.3)" }}
                className="glass-3d rounded-2xl p-8 transform-style-3d"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="text-rose-500 flex-shrink-0 depth-1"
                  >
                    {message.icon}
                  </motion.div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 depth-2">{message.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{message.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Shayari Section */}
        <section className="parallax-3d">
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotateZ: 15 }}
              className="text-rose-500"
            >
              <Quote className="w-8 h-8" />
            </motion.div>
            <h2 className="text-4xl font-bold text-gradient">Love Shayari</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {shayaris.map((shayari, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: 25 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                whileHover={{ scale: 1.05, rotateY: 8, rotateX: 5, boxShadow: "0 30px 60px -12px rgba(244, 63, 94, 0.3)" }}
                className="glass-3d rounded-2xl p-4 sm:p-6 md:p-8 transform-style-3d border border-rose-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                  >
                    <Sparkles className="w-5 h-5 text-rose-500" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, -20, 20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.15 }}
                  >
                    <Star className="w-5 h-5 text-pink-500" />
                  </motion.div>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 font-medium">
                  {shayari.text}
                </p>
                <p className="text-gray-600 italic text-sm border-t border-rose-200 pt-4">
                  {shayari.translation}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Special Message Section */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-3d rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center holographic"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative inline-block mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
              <Heart className="w-16 h-16 mx-auto relative z-10 depth-2" fill="white" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 px-4">A Special Note For You</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-95 px-4">
              These words are just a small expression of what's in my heart. 
              No matter how many messages I write or how many shayaris I recite, 
              they can never fully capture the depth of my love for you. 
              You are my everything, today and always, across every mile.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default LoveMessages
