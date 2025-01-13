import BookofAuthor from "@/components/BookofAuthor";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}
async function AuthorDetails(props: IProps) {
  const params = await props.params;
  const { id } = params;

  return (
    <div className="mt-7">
      <BookofAuthor id={id} />
    </div>
  );
}

export default AuthorDetails;
