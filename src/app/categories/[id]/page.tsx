import CategoreDetails from "@/components/CategoreDetails";

interface IProps {
  params: {
    id: string;
  };
}

function CategoryDetails({ params }: IProps) {
  const { id } = params;

  return (
    <div className="mt-8">
      <CategoreDetails id={id} />
    </div>
  );
}

export default CategoryDetails;
