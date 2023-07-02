import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import Feed from "../components/Feed";
import Header from "../components/Header";
import FeaturedCompaniesSlider from "../components/FeaturedCompaniesSlider";
import CompaniesTreadSlider from "../components/CompaniesTreadSlider";
import GridStory from "../components/GridStory";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Home({ posts, articles }) {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const [isExpanded, setIsExpanded] = useState(false);
  const [section, setSection] = useState("disscussion");

  const router = useRouter();

  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen ">
      <Head>
        <title>Go India Stocks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FeaturedCompaniesSlider />
      <CompaniesTreadSlider />
      <main className="flex">
        <Navbar setIsExpanded={(i) => setIsExpanded(i)} isExpanded={isExpanded} />
        <div className="flex max-xsm:flex-col max-xs:flex-col max-sm:flex-col md:flex-row ">
          <div className="max-xs:flex max-sm:flex md:hidden xs:flex-col sm:flex-row w-full bg-blue-900 text-white my-5 mx-2">
            <div
              onClick={() => {
                setSection("disscussion")
              }}
              className={`${section === "disscussion" ? "bg-slate-600" : ""} cursor-pointer w-1/2 border-x-1 border-x border-x-white`}>
              Disscussion forum
            </div>
            <div
              onClick={() => {
                setSection("m_stories")
              }}
              className={`${section === "m_stories" ? "bg-slate-600" : ""} cursor-pointer w-1/2`}>
              Market Stories
            </div>
          </div>
          <div className={` ${section !== "disscussion" ? "hidden" : ""}`}>
            <Feed posts={posts} />
          </div>
          <div className={` ${section !== "m_stories" ? "max-sm:hidden max-md:flex" : ""}`}>
            <GridStory isExpanded={isExpanded} />
          </div>
        </div>
      </main >
    </div >
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      articles: [
        {
          title: "What is Lorem Ipsum?",
          publishedAt: "20/12/2022",
        },
        {
          title: "Wha,t is Lorem Ipsum?",
          publishedAt: "20/12/2022",
        },
        {
          title: "Wha,t is Lorem Ipsum?",
          publishedAt: "20/12/2022",
        },
        {
          title: "Wha,t is Lorem Ipsum?",
          publishedAt: "20/12/2022",
        },
        {
          title: "Wha,t is Lorem Ipsum?",
          publishedAt: "20/12/2022",
        },
        {
          title: "Wha,t is Lorem Ipsum?",
          publishedAt: "20/12/2022",
        },
        {
          title: "Wha,t is Lorem Ipsum?",
          publishedAt: "20/12/2022",
        },
        {
          title: "Wha,t is Lorem Ipsum?",
          publishedAt: "20/12/2022",
        },
        {
          title: "Wha,t is Lorem Ipsum?",
          publishedAt: "20/12/2022",
        },
      ],
      posts: [{
        _id: 1,
        input: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
        photoUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        username: "fahim",
        email: "fheemabbas@gmail.com",
        userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        createdAt: "20/12/2022",
      },
      {
        _id: 2,
        input: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
        photoUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        username: "fahim",
        email: "fheemabbas@gmail.com",
        userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        createdAt: "20/12/2022",
      },
      {
        _id: 2,
        input: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
        photoUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        username: "fahim",
        email: "fheemabbas@gmail.com",
        userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        createdAt: "20/12/2022",
      },
      {
        _id: 2,
        input: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
        photoUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        username: "fahim",
        email: "fheemabbas@gmail.com",
        userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        createdAt: "20/12/2022",
      },
      {
        _id: 2,
        input: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
        photoUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        username: "fahim",
        email: "fheemabbas@gmail.com",
        userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        createdAt: "20/12/2022",
      },
      {
        _id: 2,
        input: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
        photoUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        username: "fahim",
        email: "fheemabbas@gmail.com",
        userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        createdAt: "20/12/2022",
      },
      {
        _id: 2,
        input: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
        photoUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        username: "fahim",
        email: "fheemabbas@gmail.com",
        userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        createdAt: "20/12/2022",
      },
      {
        _id: 2,
        input: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
        photoUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        username: "fahim",
        email: "fheemabbas@gmail.com",
        userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        createdAt: "20/12/2022",
      },
      {
        _id: 2,
        input: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind",
        photoUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        username: "fahim",
        email: "fheemabbas@gmail.com",
        userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        createdAt: "20/12/2022",
      },
      ],
    },
  };
}
