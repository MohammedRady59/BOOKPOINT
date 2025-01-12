import BookDetails from "@/components/BookDetails";

interface IProps {
  params: {
    id: string;
  };
}
function Book({ params }: IProps) {
  const { id } = params;
  return (
    <div className="mt-7 ">
      <BookDetails id={id} />
    </div>
  );
}

export default Book;
