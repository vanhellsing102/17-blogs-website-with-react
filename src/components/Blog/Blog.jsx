import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks, handleReadingTime }) => {
    const {id, title,author, post_date, reading_time, hashtag} = blog;
    return (
        <div className="py-5 border-b-2 space-y-1">       
            <img src="../../../images/2.png" alt="" className="full"/>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src="../../../images/boy1.png" alt="" className="w-9"/>
                    <div>
                        <h1 className="text-xl font-bold">{author}</h1>
                        <p className="text-[12px]">{post_date}</p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-3">
                        <p className="text-[14px]">{reading_time} min read</p>
                        <button onClick={() => handleAddToBookmarks(blog)} className="text-xl"><CiBookmark />
                        </button>
                    </div>
                </div>
            </div>
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-gray-400 text-[13px] font-medium">{hashtag}</p>
            <a onClick={ () => handleReadingTime(reading_time, id)} href="#" className="text-blue-800 text-[14px] underline">Mark as read</a>
        </div>
    );
};
export default Blog;