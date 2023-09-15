import PropTypes from 'prop-types';
import { LuBookmark } from "react-icons/lu";

const Blog = ({ blog, handleBookmark, handleRead }) => {
    const { id, title, cover, author_img, author, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mt-10'>
            <img className="rounded-lg w-full" src={cover} alt="" />
            <div className='flex justify-between my-4'>
                <div className='flex gap-6'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='mr-1'>{reading_time} min read </span>
                   <button onClick={() => handleBookmark(blog)} className='text-2xl'> <LuBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-4'>{title}</h2>
            <div className='mb-4'>
                <p>
                    {
                        hashtags.map((hash, index) => <span key={index}><a href="" className='ml-1 text-gray-400'>#{hash}</a> </span>)
                    }
                </p>
            </div>
            <button onClick={() => handleRead(reading_time, id)}className='text-blue-600 underline font-bold'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleRead: PropTypes.func.isRequired
}

export default Blog;