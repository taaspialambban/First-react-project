import PropTypes from 'prop-types';
import { PiBookmarkSimpleBold } from "react-icons/pi";

const Blog = ({blog , handleAddToBookmarks , handleMarkAsRead}) => {
    const {id, title , cover ,author , author_img , reading_time , posted_date , hashtags} = blog
    return (
        <div className='space-y-4 p-4'>
            <img className='w-[685px] h-[350px]' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-x-2.5'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className="text-2xl font-bold">{author}</h2>
                        <h2 className='text-base'>{posted_date}</h2>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddToBookmarks(blog)} className='ml-2'><PiBookmarkSimpleBold /></button>
                </div>
            </div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className='space-x-3'>{
                hashtags.map((hash , idx)=><span key={idx}><a href="">{hash}</a></span>)
                }
                </p>
                <button onClick={() =>handleMarkAsRead(reading_time , id)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    handleAddToBookmarks : PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;