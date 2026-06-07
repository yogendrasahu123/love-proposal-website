import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Memories from './pages/Memories'
import Proposal from './pages/Proposal'
import LoveMessages from './pages/LoveMessages'
import LoveGame from './pages/LoveGame'
import PhotoGallery from './pages/PhotoGallery'
import BucketList from './pages/BucketList'
import FuturePlans from './pages/FuturePlans'
import DreamDestinations from './pages/DreamDestinations'
import SongDedications from './pages/SongDedications'
import AnniversaryTracker from './pages/AnniversaryTracker'
import MemoryJar from './pages/MemoryJar'
import WishTree from './pages/WishTree'
import LoveLetters from './pages/LoveLetters'
import Milestones from './pages/Milestones'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path="/love-messages" element={<LoveMessages />} />
            <Route path="/love-game" element={<LoveGame />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/bucket-list" element={<BucketList />} />
            <Route path="/future-plans" element={<FuturePlans />} />
            <Route path="/dream-destinations" element={<DreamDestinations />} />
            <Route path="/song-dedications" element={<SongDedications />} />
            <Route path="/anniversary-tracker" element={<AnniversaryTracker />} />
            <Route path="/memory-jar" element={<MemoryJar />} />
            <Route path="/wish-tree" element={<WishTree />} />
            <Route path="/love-letters" element={<LoveLetters />} />
            <Route path="/milestones" element={<Milestones />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
