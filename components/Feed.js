import Post from "./Post";
import FilterSection from "./filterSection";

function Feed({ posts }) {
  return (
    <div className="space-y-2 md:max-w-2xl max-w-lg">
      <div className='flex text-lg text-bold uppercase text-blue-500 max-sm:hidden max-md:block'>
        Disscussion Fourm
      </div>
      <FilterSection />
      <div className="overflow-y-scroll max-h-[450px]">
        {posts.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
}

export default Feed;
