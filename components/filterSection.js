import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function FilterSection({ post, modalPost }) {
    return (
        <>
            <div className='text-lg text-bold uppercase text-blue-700'>
                Filter
            </div>
            <div className={`bg-white dark:bg-[#1D2226] rounded-lg py-2.5 border border-gray-300 dark:border-none`}>
                <div className="flex flex-row justify-between mx-1">
                    <div className="text-yellow-50 md:mx-4 max-sm:w-[24%] bg-red-500 border rounded-full flex justify-center items-center px-2  md:px-5 ">
                        Section 1
                    </div>
                    <div className="text-yellow-50 md:mx-4 bg-blue-500 border rounded-full flex justify-center items-center px-2 md:px-5 max-sm:w-[24%]">
                        Section 2
                    </div>
                    <div className="text-yellow-50 md:mx-4 bg-green-500 border rounded-full text-sm flex justify-center items-center px-2 md:px-5 w-[24%]">
                        Section 3
                    </div>
                    <div className="flex items-center bg-[#7FFFD4] dark:md:bg-gray-700 py-1 md:py-2.5 md:mx-4 md:px-4 rounded-full  md:w-52 max-sm:w-[24%]">
                        <SearchRoundedIcon />
                        <input
                            type="text"
                            placeholder="Search"
                            className=" bg-transparent text-sm  focus:outline-none md:w-10/12 max-sm:w-full placeholder-black/70 dark:placeholder-white/75 flex-grow"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterSection;
