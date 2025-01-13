import CategoreDetails from "@/components/CategoreDetails";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

async function CategoryDetails(props: IProps) {
  const params = await props.params;
  const { id } = params;

  return (
    <div className="mt-8">
      <CategoreDetails id={id} />
    </div>
  );
}

export default CategoryDetails;
