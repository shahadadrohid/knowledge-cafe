import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [reading, setReading] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleRead = time => {
    const newTime = reading + time;
    setReading(newTime)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleRead={handleRead} handleBookmark={handleBookmark}></Blogs>
        <Bookmarks reading={reading} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
