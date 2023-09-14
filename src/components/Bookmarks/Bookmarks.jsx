import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="w-1/3 ml-2 bg-slate-300 my-10 rounded-xl">
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
}

export default Bookmarks;