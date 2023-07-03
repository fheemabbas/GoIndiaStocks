import Head from "next/head";
import { useRouter } from "next/router";
import Feed from "../components/Feed";
import Header from "../components/Header";
import FeaturedCompaniesSlider from "../components/FeaturedCompaniesSlider";
import CompaniesTreadSlider from "../components/CompaniesTreadSlider";
import GridStory from "../components/GridStory";
import Navbar from "../components/Navbar";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
export default function Home({ posts, articles }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [section, setSection] = useState("disscussion");

  const router = useRouter();

  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white ">
      <Head>
        <title>Go India Stocks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CompaniesTreadSlider />
      <FeaturedCompaniesSlider />
      <main className="flex max-sm:relative ">
        <Navbar setIsExpanded={(i) => setIsExpanded(i)} isExpanded={isExpanded} />
        <div className="flex max-xsm:flex-col max-xs:flex-col max-sm:flex-col md:flex-row w-full px-3">
          <div className="max-xs:flex max-sm:flex hidden max-xs:flex-row min-sm:flex-row w-full bg-blue-900 text-white mb-5 ">
            <div
              onClick={() => {
                setSection("disscussion")
              }}
              className={`${section === "disscussion" ? "bg-slate-600" : ""} cursor-pointer w-1/2 border-x-1 border-x border-x-white py-1`}>
              Disscussion forum
            </div>
            <div
              onClick={() => {
                setSection("m_stories")
              }}
              className={`${section === "m_stories" ? "bg-slate-600" : ""} cursor-pointer w-1/2 py-1`}>
              Market Stories
            </div>
          </div>
          <div className={`p-3 ${section !== "disscussion" ? "hidden" : ""}`}>
            <Feed posts={posts} />
          </div>
          <div className={`p-3 ${section !== "m_stories" ? "max-sm:hidden flex" : ""}`}>
            <GridStory isExpanded={isExpanded} articles={articles} />
          </div>
        </div>
      </main >
      <div className="relative">
        <div className="flex justify-end absolute bg-blue-950 rounded-full text-white p-2 max-sm:bottom-[9rem] bottom-14  max-sm:left-[80%] left-[90%]">
          <AddIcon />
        </div>
      </div>
    </div >
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      articles: [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.?",
          publishedAt: "20/12/2022",
        },
        {
          id: 2,
          image: "https://images.moneycontrol.com/static-mcnews/2020/11/Sensex.jpg?impolicy=website&width=770&height=431",
          title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.?",
          publishedAt: "20/12/2022",
        },
        {
          id: 3,
          image: "https://blog.tipranks.com/wp-content/uploads/2023/05/shutterstock_2168324857-750x406.jpg",
          title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.?",
          publishedAt: "20/12/2022",
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.?",
          publishedAt: "20/12/2022",
        },
        {
          id: 5,
          image: "https://images.moneycontrol.com/static-mcnews/2020/11/Sensex.jpg?impolicy=website&width=770&height=431",
          title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.?",
          publishedAt: "20/12/2022",
        },
        {
          id: 6,
          image: "https://blog.tipranks.com/wp-content/uploads/2023/05/shutterstock_2168324857-750x406.jpg",
          title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.?",
          publishedAt: "20/12/2022",
        },
      ],
      posts: [
        {
          _id: 1,
          input: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          photoUrl: "https://images.moneycontrol.com/static-mcnews/2020/11/Sensex.jpg?impolicy=website&width=770&height=431",
          username: "Lorem Ipsum",
          section: "Section 1",
          like: "3200",
          view: "5780",
          comments: "1540",
          share: "1210",
          userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          createdAt: "07/01/2023 02:21",
        },
        {
          _id: 2,
          input: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          // photoUrl: "https://images.moneycontrol.com/static-mcnews/2020/11/Sensex.jpg?impolicy=website&width=770&height=431",
          username: "Lorem Ipsum",
          section: "Section 3",
          like: "7200",
          view: "15780",
          comments: "140",
          share: "10",
          userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          createdAt: "05/01/2023 02:21",
        },
        {
          _id: 3,
          input: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          photoUrl: "https://blog.tipranks.com/wp-content/uploads/2023/05/shutterstock_2168324857-750x406.jpg",
          username: "Lorem Ipsum",
          section: "Section 2",
          like: "8200",
          view: "4780",
          comments: "1040",
          share: "710",
          // userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          createdAt: "05/01/2022 02:21",
        },
        {
          _id: 4,
          input: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          // photoUrl: "https://images.moneycontrol.com/static-mcnews/2020/11/Sensex.jpg?impolicy=website&width=770&height=431",
          username: "Lorem Ipsum",
          section: "Section 1",
          like: "3200",
          view: "5780",
          comments: "1540",
          share: "1210",
          userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          createdAt: "05/25/2023 02:21",
        },
        {
          _id: 5,
          input: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          username: "Lorem Ipsum",
          section: "Section 1",
          like: "3200",
          view: "5780",
          comments: "1540",
          share: "1210",
          // userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          createdAt: "01/04/2023 02:21",
        },
        {
          _id: 6,
          input: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          photoUrl: "https://images.moneycontrol.com/static-mcnews/2020/11/Sensex.jpg?impolicy=website&width=770&height=431",
          username: "Lorem Ipsum",
          section: "Section 2",
          like: "3200",
          view: "5780",
          comments: "1540",
          share: "1210",
          userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          createdAt: "05/09/2023 02:21",
        },
        {
          _id: 7,
          input: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          photoUrl: "https://blog.tipranks.com/wp-content/uploads/2023/05/shutterstock_2168324857-750x406.jpg",
          username: "Lorem Ipsum",
          section: "Section 1",
          like: "3200",
          view: "5780",
          comments: "1540",
          share: "1210",
          userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          createdAt: "05/04/2023 02:21",
        },
        {
          _id: 8,
          input: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          // photoUrl: "https://images.moneycontrol.com/static-mcnews/2020/11/Sensex.jpg?impolicy=website&width=770&height=431",
          username: "Lorem Ipsum",
          section: "Section 1",
          like: "3200",
          view: "5780",
          comments: "1540",
          share: "1210",
          userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          createdAt: "04/01/2023 02:21",
        },
        {
          _id: 9,
          input: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          photoUrl: "https://images.moneycontrol.com/static-mcnews/2020/11/Sensex.jpg?impolicy=website&width=770&height=431",
          username: "Lorem Ipsum",
          section: "Section 3",
          like: "3200",
          view: "5780",
          comments: "1540",
          share: "1210",
          userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          createdAt: "05/01/2023 02:21",
        },
      ],
    },
  };
}
