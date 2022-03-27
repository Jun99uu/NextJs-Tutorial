/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path",
        destination: "/new-blog/:path", //만약 contact로 이동한다면, form으로 보내겠다.
        permanent: false, //permanent에 따라 브라우저나 검색엔진이 해당 정보를 기억하는지 결정된다.
      }, //여기에 더 추가할 수 있음
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
