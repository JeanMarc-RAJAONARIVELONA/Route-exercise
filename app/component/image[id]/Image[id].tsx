interface ImageProps {
  id: string;
}

const Image: React.FC<ImageProps> = ({ id }) => {
  const imageUrl = `https://picsum.photos/200/300?random=${id}`;

  return (
    <div>
      <h1>Blog-{id}</h1>
      <img src={imageUrl} alt={`Image du Blog-${id}`} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  return { props: { id } };
}

export default Image;
