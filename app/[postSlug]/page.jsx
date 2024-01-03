import "./singlePost.css";

import Link from "next/link";

import parse from "html-react-parser";
import TOC from "/components/toc/toc";
import ViTime from "/components/common/vi_time";
import postQuery from "./postQuery";
import generatorGql from "/components/common/generatorGql";
import request from "graphql-request";

// export async function generateStaticParams() {
//   async function getSlug() {
//     const slugQuery = `query postsSlug {
//         posts(first: 3) {
//           nodes {
//             slug
//           }
//         }
//       }`;
//     const data = await request(process.env.END_POINT_API, slugQuery);
//     const slugArray = data.posts.nodes.map((node) => ({ postSlug: node.slug }));
//     return slugArray;
//   }
//   const slugArray = await getSlug();

//   return slugArray;
// }

//use generator
export async function generateStaticParams() {
  const slugQuery = `query postsSlug ($after: String!) {
    posts(first: 20, after: $after) {
      nodes {
        slug
      }
pageInfo {
        endCursor
        hasNextPage
      }
    }
  }`;
  const data = await generatorGql(slugQuery, "posts");
  const slugArray = data.map((node) => ({ postSlug: node.slug }));
  return slugArray;
}

export default async function PostDetailPage({ params }) {
    
  const slug = params.postSlug;
  const post = await postQuery(slug);

  return (
    <div className="body_content justify-items-center z-10">
      <div className="grid grid-cols-12 gap-4 max-w-5xl mx-auto px-[5vw] ">
        <div className="single__post-breadcrumb col-span-12 my-[2vh] bg-gray-100 p-[10px] rounded-md ">
          <Link href="/" aria-label="Home">
            <span className="text-prim">Home &gt;</span>
          </Link>
          {/* <span> </span> */}

          <span className="arrow-before">{post ? post?.title : ""}</span>
        </div>
        <h1 className="col-span-12 text-Tmd mt-[1vh] font-semibold ">
          {post ? post?.title : ""}
        </h1>
        <span className="post-time-create col-span-12 text-Tsm  ">
          {post ? <ViTime dateString={post.date} /> : ""}
        </span>
        <div className="post-exerp col-span-12 object-contain max-w-full mt-[4vh] ">
          {post ? parse(post?.excerpt) : ""}
        </div>
        <div className="col-span-12">{post ? <TOC /> : ""}</div>
        <br />
        <div className="post-content col-span-12 object-contain max-w-full">
          {post ? parse(post?.content) : "Đang cập nhật..."}

          <p className=" mx-[2vh] text-right">(Theo Truyền Thông VINFAST)</p>
        </div>

        <div className="post-navi col-span-12 grid grid-cols-12 gap-4 my-[50px]">
          {post?.next ? (
            <Link
              href={"/" + post.next.slug}
              aria-label={post?.next.title}
              className="col-span-6 flex gap-4"
            >
              <div className=" post-navi-icon w-[10vw] max-w-[25px] h-full ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="angle-left"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192 512"
                  className="svg-inline--fa fa-angle-left fa-w-6 fa-3x"
                >
                  <path
                    fill="currentColor"
                    d="M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"
                    className=""
                  ></path>
                </svg>
              </div>

              <div className="col-span-5 grid content-center  ">
                <p className="font-semibold">BÀI TRƯỚC </p>
                <p className="post-navi-text line-clamp-3 ">
                  {post?.next.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="blank"></div>
          )}
          {post?.previous ? (
            <Link
              href={"/" + post.previous.slug}
              aria-label={post?.previous.title}
              className="col-span-6 flex gap-4"
            >
              {" "}
              <div className="col-span-5 col-post-navi-text-right grid content-center text-right">
                <p className="post-navi-text-right font-semibold">
                  BÀI TIẾP THEO
                </p>
                <p className="post-navi-text post-navi-text-right line-clamp-3 ">
                  {post?.previous.title}
                </p>
              </div>
              <div className="box-i post-navi-icon post-navi-right w-[10vw] max-w-[25px] ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="angle-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192 512"
                  className="svg-inline--fa fa-angle-right fa-w-6 fa-3x"
                >
                  <path
                    fill="currentColor"
                    d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
                    className="p"
                  ></path>
                </svg>
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
