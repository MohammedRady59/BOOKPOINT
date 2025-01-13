import BookDetails from "@/components/BookDetails";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}
async function Book(props: IProps) {
  const params = await props.params;
  const { id } = params;
  return (
    <div className="mt-7 ">
      <BookDetails id={id} />
    </div>
  );
}

export default Book;
