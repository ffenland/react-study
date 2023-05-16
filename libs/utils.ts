export const searchMoviesNaver = async (search: string) => {
  if (!process.env.NAVER_CLIENT_ID || !process.env.NAVER_CLIENT_SECRET) return;
  if (search.length < 2) return;
  const response = await (
    await fetch("https://openapi.naver.com/v1/search/movie.json", {
      method: "GET",
      headers: {
        "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
      },
    })
  ).json();
  console.log(response);
};
