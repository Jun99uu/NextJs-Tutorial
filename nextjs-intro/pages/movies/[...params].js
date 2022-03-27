import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = new useRouter();
  const [title, id] = params || []; //시크릿모드에서 에러. 서버에서 아직 배열이 아닌 상태이기 때문. 그래서 뒤에 붙여줌
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
