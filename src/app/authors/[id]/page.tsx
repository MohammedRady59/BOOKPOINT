import BookofAuthor from "@/components/BookofAuthor";

interface IProps {
  params: {
    id: string;
  };
}
function AuthorDetails({ params }: IProps) {
  const { id } = params;

  return (
    <div className="mt-7">
      <BookofAuthor id={id} />
    </div>
  );
}

export default AuthorDetails;
