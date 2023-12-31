import request from "graphql-request";

export default async function postQuery(slug) {
  let metaHeadQuerry = `query metaHeadQuerry($id: ID = "") {
    post(id: $id, idType: SLUG) {
        content
        excerpt
        title
        date
        id
        next {
          slug
          title
        }
        previous {
          slug
          title
        }  
      seo {
        focusKeywords
        title
        description
        robots
        jsonLd {
          raw
        }
        openGraph {
          siteName
          updatedTime
          locale
          type
        }
      }
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
        }
      }
      id
    }
    }`;
  let varQuery = { id: slug };
  let { post } = await request(
    process.env.END_POINT_API,
    metaHeadQuerry,
    varQuery
  );
  return post;
}
