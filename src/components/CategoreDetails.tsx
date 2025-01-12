"use client";
import { IBook, ICategory } from "@/Interface";
import {
  useBookByCategoreQuery,
  useCategoreNameQuery,
} from "@/redux/features/categore/Categorie";
import { Box, Typography } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";
import CoverBook from "./CoverBook";

interface IProps {
  id: string;
}

function CategoreDetails({ id }: IProps) {
  const { data } = useCategoreNameQuery(id);
  const { data: bookByCategore } = useBookByCategoreQuery(id);

  const { category }: { category: ICategory } = data?.payload || {
    category: null,
  };
  const { books }: { books: IBook[] } = bookByCategore?.payload || {
    books: [],
  };

  return (
    <div>
      <Box>
        {!category ? (
          <Box
            sx={{
              bgcolor: "white",
              borderTop: "2px solid #115e59",
              borderRadius: "12px 12px 0px 0",
              padding: "5px",
            }}
          >
            <ThreeDots
              visible={true}
              height="40"
              width="40"
              color="#115e59"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          </Box>
        ) : (
          <Box
            sx={{
              bgcolor: "white",
              borderTop: "2px solid #115e59",
              borderRadius: "12px 12px 0px 0",
              padding: "5px",
            }}
          >
            <Typography
              sx={{
                color: "#115e59",
                fontWeight: "bold",
                textTransform: "capitalize",
                fontSize: "1.25rem",
              }}
            >
              {category.categoryName}
            </Typography>
          </Box>
        )}

        {books.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {category ? (
              <Typography
                sx={{
                  color: "#115e59",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                }}
              >
                No Book
              </Typography>
            ) : (
              <ThreeDots
                visible={true}
                height="40"
                width="40"
                color="#115e59"
                radius="9"
                ariaLabel="three-dots-loading"
              />
            )}
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              },
              gap: "1.25rem",
              marginTop: "1.25rem",
            }}
          >
            {books.map((el) => (
              <CoverBook key={el.id} details={el} />
            ))}
          </Box>
        )}
      </Box>
    </div>
  );
}

export default CategoreDetails;
