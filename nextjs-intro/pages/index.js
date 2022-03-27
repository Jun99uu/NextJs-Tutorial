import Seo from "../components/Seo";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  //pageProps!
  const router = useRouter();
  const onClick = (id, title) => {
    router.push({
      pathname: `/movies/${title}/${id}`,
    });
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>{movie.original_title}</a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  //여기서 작성하는 코드는 무슨 일이 있어도 Server에서만 돌아감. Client에서 돌아가지 않음!!!!!!!!
  //클라이언트에게 보여지지 않기때문에 여기서 API_KEY를 사용해도됨!!
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json(); //주소는 절대경로로. Server에서 작동하기 때문
  return {
    //object 리턴
    props: {
      results,
    },
  };
}
