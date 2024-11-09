import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        <div className='md:w-1/3 bg-slate-200 text-center m-2'>
            <div>
                <h2 className="text-3xl">Reading Time: {readingTime} </h2>
            </div>
            <h2 className='text-3xl'>Bookmarked blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark ={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;