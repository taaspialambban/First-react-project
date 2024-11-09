
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    // console.log('Bookmarks adding soon', blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time , id) =>{
    // console.log('reading mark')

    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id);
    setBookmarks(remainingBookmarks)
  }
  
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
      <Blogs
       handleAddToBookmarks={handleAddToBookmarks}
       handleMarkAsRead = {handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks = {bookmarks}
      readingTime = {readingTime}
      ></Bookmarks>
      </div>
    </>
  )
}

export default App
