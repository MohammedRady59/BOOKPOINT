import { IBook } from "@/Interface";
import CoverBook from "./CoverBook";
import { Typography } from "@mui/material";

interface IProps {
  data: IBook[];
}
function Recommendations({ data }: IProps) {
  return (
    <>
      <Typography
        component={"h2"}
        sx={{ color: "#0d9488", fontWeight: "bold", fontSize: "1.25rem" }}
        id="recommend"
      >
        Recommendation Book
      </Typography>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {data.length == 0 ? (
          <Typography>No recommendations</Typography>
        ) : (
          data.map((el) => <CoverBook key={el.id} details={el} />)
        )}
      </div>
    </>
  );
}

export default Recommendations;
