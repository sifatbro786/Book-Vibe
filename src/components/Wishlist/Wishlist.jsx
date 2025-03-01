import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const Wishlist = ({wish}) => {

    const {  bookId ,image, bookName, author, category, rating, totalPages, publisher, yearOfPublishing, tags } = wish || {};

    return (
        <div>
            <div className="p-6 rounded-2xl border border-neutral-900 border-opacity-20 mb-6">
                <div className='md:flex gap-6'>
                    <div className='py-7 px-[50px] bg-neutral-900 bg-opacity-5 rounded-2xl'>
                        <img className='w-[230px] h-[230px]' src={image} />
                    </div>

                    <div className="w-full flex flex-col justify-center text-center md:text-left mt-5 md:mt-0">
                        <h4 className='text-neutral-900 text-2xl font-bold font-play'>{bookName}</h4>
                        <p className="text-neutral-900 text-opacity-80 text-base font-medium py-4">By : {author}</p>

                        <div className="flex flex-col md:flex md:flex-row gap-y-4 md:gap-y-0 md:gap-4 items-center justify-center md:justify-start">
                            <p className='text-neutral-900 text-base font-bold'>Tags: </p>

                            {
                                tags.map((tag, idx) => {
                                    return (
                                        <div key={idx} className='py-[7px] px-4 bg-[#23BE0A] bg-opacity-10 rounded-[30px]'>
                                            <span className='text-[#23BE0A] text-base font-medium'>{tag}</span>
                                        </div>
                                    )
                                })
                            }

                            <div className="flex items-center gap-2">
                                <IoLocationOutline className="text-xl"/>
                                <p className="text-neutral-900 text-opacity-80 text-base font-medium">Year of Publishing: {yearOfPublishing}</p>
                            </div>
                        </div>

                        <div className="md:flex items-center gap-4  mt-5 my-7 pb-[19px] border-b border-neutral-900 border-opacity-20">
                            <div className="flex items-center gap-2 ">
                                <HiOutlineUsers className="text-xl"/>
                                <p className="text-neutral-900 text-opacity-60 text-base">Publisher: {publisher}</p>
                            </div>
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <RiPagesLine className="text-xl "/>
                                <p className="text-neutral-900 text-opacity-60 text-base">Page: {totalPages}</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center justify-center md:justify-sta8">
                            <div className='py-[8px] px-5 bg-[#328EFF] bg-opacity-20 rounded-[30px]'>
                                <span className='text-[#328EFF] text-base font-medium'>Category: {category}</span>
                            </div>
                            <div className='py-[8px] px-5 bg-[#FFAC33] bg-opacity-20 rounded-[30px]'>
                                <span className='text-[#FFAC33] text-base font-medium'>Rating: {rating}</span>
                            </div>

                            <Link to={`/book-details/${bookId}`}>
                                <button className="py-[8px] px-5 bg-[#23BE0A] rounded-[30px]    text-white text-lg font-medium">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;