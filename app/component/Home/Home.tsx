import Link from "next/link";

interface Blog {
  id: number;
  title: string;
}

const Home: React.FC = () => {
  const blogs: Blog[] = [
    { id: 1, title: "Blog 1" },
    { id: 2, title: "Blog 2" },
    { id: 3, title: "Blog 3" },
    { id: 4, title: "Blog 4" },
    { id: 5, title: "Blog 5" },
  ];

  return (
    <div>
      <h1>Liste des Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
