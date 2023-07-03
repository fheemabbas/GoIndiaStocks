import { Avatar, IconButton } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useRecoilState } from "recoil";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { modalState, modalTypeState } from "../atoms/modalAtom";
import TimeAgo from "timeago-react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

function Post({ post, modalPost }) {
  const [showInput, setShowInput] = useState(false);
  const [liked, setLiked] = useState(false);
  function abbreviateNumber(number) {
    if (number >= 1000 && number < 1000000) {
      return (number / 1000).toFixed(1) + "k";
    } else if (number >= 1000000 && number < 1000000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + "B";
    }

    return number.toString();
  }
  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "...see more" : string;

  return (
    <div
      className={`bg-white dark:bg-[#1D2226] ${modalPost ? "rounded-r-lg" : "rounded-lg"
        } space-y-2 py-2.5 border border-gray-300 dark:border-none mb-3`}
    >
      <div className="flex items-center px-2.5 cursor-pointer">
        <div className="flex flex-col w-full">
          <div className="flex justify-end my-5 ">
            <TimeAgo
              datetime={post.createdAt}
              className="text-xs dark:text-white/75 opacity-80"
            />
          </div>
          {post?.photoUrl && <div className="mb-5">
            {post?.photoUrl && !modalPost && (
              <img
                src={post.photoUrl}
                alt=""
                className="m-auto"
              />
            )}
          </div>}
          <div>
            <div className="flex flex-row ">
              <Avatar src={post.userImg} className="!h-10 !w-10 cursor-pointer" />
              <div className="flex flex-row  leading-none">
                <h6 className="mr-auto ml-2 font-medium hover:text-blue-500 hover:underline flex items-center">
                  {post.username}
                </h6>
                <div className={`ml-3 text-yellow-50 ${post.section == "Section 1" ? "bg-red-500" : post.section == "Section 2" ? "bg-blue-500" : "bg-green-500"} border text-xs rounded-full flex justify-center items-center px-2 `}>
                  {post.section}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        post.input && (
          <div className={`${modalPost ? "px-2.5" : "px-16"} break-all md:break-normal`}>
            {modalPost || showInput ? (
              <p onClick={() => setShowInput(false)}>{post.input}</p>
            ) : (
              <p onClick={() => setShowInput(true)}>
                {truncate(post.input, 150)}
              </p>
            )}
          </div>
        )
      }
      <div className="flex justify-evenly items-center dark:border-t border-gray-600/80 mx-2.5 pt-2 text-black/60 dark:text-white/75">

        <button
          className={`postButton ${liked && "text-red-500"}`}
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}

          <h4>{abbreviateNumber(post.like)}</h4>
        </button>
        <button className="postButton ">
          <RemoveRedEyeOutlinedIcon className="-scale-x-100" />
          <h4>{abbreviateNumber(post.view)}</h4>
        </button>
        <button className="postButton ">
          <ChatBubbleOutlineOutlinedIcon className="" />
          <h4>{abbreviateNumber(post.comments)}</h4>
        </button>
        <button className="postButton ">
          <ReplyRoundedIcon className="-scale-x-100" />
          <h4>{abbreviateNumber(post.share)}</h4>
        </button>
      </div>
    </div >
  );
}

export default Post;
