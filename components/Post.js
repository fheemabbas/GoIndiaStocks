import { Avatar, IconButton } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import { useRecoilState } from "recoil";
import { handlePostState, getPostState } from "../atoms/postAtom";
import { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import TimeAgo from "timeago-react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
// import { useSession } from "next-auth/react";

function Post({ post, modalPost }) {
  // const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const [postState, setPostState] = useRecoilState(getPostState);
  const [showInput, setShowInput] = useState(false);
  const [liked, setLiked] = useState(false);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);

  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "...see more" : string;

  return (
    <div
      className={`bg-white dark:bg-[#1D2226] ${modalPost ? "rounded-r-lg" : "rounded-lg"
        } space-y-2 py-2.5 border border-gray-300 dark:border-none`}
    >
      <div className="flex items-center px-2.5 cursor-pointer">
        <div className="flex flex-col">
          <div>
            {post.photoUrl && !modalPost && (
              <img
                src={post.photoUrl}
                alt=""
                className="m-auto h-40 cursor-pointer"
                onClick={() => {
                  setModalOpen(true);
                  setModalType("gifYouUp");
                  setPostState(post);
                }}
              />
            )}
          </div>
          <div>
            <div className="flex flex-row mt-12">
              <Avatar src={post.userImg} className="!h-10 !w-10 cursor-pointer" />
              <div className="mr-auto ml-2 leading-none">
                <h6 className="font-medium hover:text-blue-500 hover:underline">
                  {post.username}
                </h6>
                <p className="text-sm dark:text-white/75 opacity-80">{post.email}</p>
                <TimeAgo
                  datetime={post.createdAt}
                  className="text-xs dark:text-white/75 opacity-80"
                />
              </div>
              {modalPost ? (
                <IconButton onClick={() => setModalOpen(false)}>
                  <CloseRoundedIcon className="dark:text-white/75 h-7 w-7" />
                </IconButton>
              ) : (
                <IconButton>
                  <MoreHorizRoundedIcon className="dark:text-white/75 h-7 w-7" />
                </IconButton>
              )}

            </div>
          </div>
        </div>
      </div>

      {post.input && (
        <div className={`${modalPost ? "px-2.5" : "px-16"} break-all md:break-normal`}>
          {modalPost || showInput ? (
            <p onClick={() => setShowInput(false)}>{post.input}</p>
          ) : (
            <p onClick={() => setShowInput(true)}>
              {truncate(post.input, 150)}
            </p>
          )}
        </div>
      )}
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

          <h4>Like</h4>
        </button>
        <button className="postButton ">
          <RemoveRedEyeOutlinedIcon className="-scale-x-100" />
          <h4>Share</h4>
        </button>
        <button className="postButton ">
          <ChatBubbleOutlineOutlinedIcon className="" />
          <h4>Share</h4>
        </button>
        <button className="postButton ">
          <ReplyRoundedIcon className="-scale-x-100" />
          <h4>Share</h4>
        </button>
      </div>
    </div>
  );
}

export default Post;
