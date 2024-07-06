
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = (time, id) =>{
    let newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaining);
  }

  return (
    <div className='max-w-6xl mx-auto'>
      <Header></Header>
      <main className='md:flex justify-between'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleReadingTime={handleReadingTime}></Blogs>
        <div>
          {
            bookmarks.map((bookmarks, idx) => <Bookmarks key={idx} bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>)
          }
        </div>
      </main>
    </div>
  )
}

export default App
