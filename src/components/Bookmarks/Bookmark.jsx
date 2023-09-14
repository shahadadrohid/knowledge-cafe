import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div className='bg-slate-100 p-4 m-4 rounded-xl'>
            <h2 className='font-semibold'>{bookmark.title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;