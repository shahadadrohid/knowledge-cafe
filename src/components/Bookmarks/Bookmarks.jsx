import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks, reading}) => {
    console.log(bookmarks);
    return (
        <div className="w-1/3 ml-2 bg-slate-300 my-10 rounded-xl">
            <h2 className='px-4 py-4 font-bold text-2xl text-purple-500 bg-purple-200 rounded-xl border-2 border-purple-500 text-center'>Reading Time: {reading}</h2>
            <h2 className='px-4 py-3 text-2xl font-bold'>Bookmarks: {bookmarks?.length}</h2>
            {
                bookmarks.map(bookmark =>
                    <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>

    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    reading: PropTypes.number.isRequired
}

export default Bookmarks;