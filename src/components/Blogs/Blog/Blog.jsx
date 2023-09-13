import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {author, author_img} = blog;
    console.log(blog)
    return (
        <div>
            <ul>
                <li>{author}</li>
                <img className="rounded-full w-16" src={author_img} alt="" />
            </ul>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;