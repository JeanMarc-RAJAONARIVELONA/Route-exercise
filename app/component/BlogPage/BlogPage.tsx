import Link from "next/link";
import { useRouter } from "next/router";

interface BlogProps {
  id: string;
}

const Blog: React.FC<BlogProps> = ({ id }) => {
  return (
    <div>
      <h1>Blog-{id}</h1>
      <Link href={`/${id}/image`}>Voir l'image</Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  return { props: { id } };
}

export default Blog;
