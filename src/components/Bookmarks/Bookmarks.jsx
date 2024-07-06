import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readingTime}) => {
    const {title} = bookmarks;
    return (
        <div>
            <h3>Reding Time : {readingTime}</h3>
            <div className="w-full bg-gray-500 p-5">
                <p className="text-xl bg-slate-400 rounded-xl p-3">{title}</p>
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks : PropTypes.array.isRequired,
    readingTime : PropTypes.number.isRequired
}

export default Bookmarks;