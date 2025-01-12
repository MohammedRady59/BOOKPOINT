"use client";
import { IBookCart } from "@/Interface";
import { Box, Typography } from "@mui/material";
import CoverBook from "./CoverBook";
import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";
import photo from "../Images/cartEmpty.png";
import { useAllFavQuery } from "@/redux/features/favorite/favorite";
function FavoriteDetails() {
  const { data, isLoading } = useAllFavQuery("");
  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
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
    );
  const { books }: { books: IBookCart[] } = data.payload;
  return (
    <div className="mt-5">
      {books.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "2rem", color: "#115e59" }}
          >
            Cart Is Empty
          </Typography>
          <Image
            src={photo}
            width={500}
            height={500}
            alt={"cart empty"}
            className="w-[300px]"
          />
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
          {books.map((el, idx) => (
            <CoverBook key={idx} details={el.book} />
          ))}
        </Box>
      )}
    </div>
  );
}

export default FavoriteDetails;
