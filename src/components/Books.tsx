"use client";
import photo from "../Images/new_books1-Ct4cS6DC.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CoverBook from "./CoverBook";
import { useBooksQuery } from "@/redux/features/book/book";
import { IBook } from "@/Interface";
import { ThreeDots } from "react-loader-spinner";

function Books() {
  const { data } = useBooksQuery("");
  const { books }: { books: IBook[] } = data?.payload || {
    books: [],
  };

  return (
    <div className="mt-[400px] lg:ml-80">
      <Box
        sx={{
          bgcolor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Image
            src={photo}
            width={100}
            height={100}
            alt="Picture of the author"
            className=" w-[60px]"
          />
          <Typography className="font-semibold text-md text-[#0d9488]">
            Recently Uploaded
          </Typography>
        </Box>
      </Box>
      {books.length == 0 ? (
        <ThreeDots
          visible={true}
          height="40"
          width="40"
          color="#115e59"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {books.map((el) => (
            <CoverBook key={el.id} details={el} />
          ))}
        </div>
      )}{" "}
    </div>
  );
}

export default Books;
