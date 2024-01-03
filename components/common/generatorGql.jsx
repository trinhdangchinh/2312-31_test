import request from "graphql-request";
export default async function generatorGql(queryString = "", dataItems) {
  //queryString: object query which has endCursor and hasNextPage
  // ex: (`query postsSlug ($after: String!){
  //   posts(first: 10, after: $after) {
  //     nodes {
  //       slug
  //       modified
  //     }
  //     pageInfo {
  //       endCursor
  //       hasNextPage
  //     }
  //   }
  // }`,
  // "posts")
  let arrayData = [];

  async function* generator(cursor = "") {
    let isNext = true;
    while (isNext) {
      let data = await request(process.env.END_POINT_API, queryString, {
        after: cursor,
      });
      let arrayNodes = data[dataItems].nodes;
      cursor = data[dataItems].pageInfo.endCursor;
      isNext = data[dataItems].pageInfo.hasNextPage;
      for (let node of arrayNodes) {
        yield node;
      }
    }
  }
  //run loop generator to push data
  for await (let item of generator()) {
    arrayData.push(item);
    // setTimeout(()=>
      
    //   1000);
  }
  // console.log(arrayData);
  return arrayData;
}
