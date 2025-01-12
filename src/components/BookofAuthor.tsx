"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import photo from "../Images/new_books1-Ct4cS6DC.svg";
import { useBooksAuthorQuery } from "@/redux/features/Author/author";
import { IAuthor, IBook } from "@/Interface";
import { ThreeDots } from "react-loader-spinner";
import CoverBook from "./CoverBook";

interface IProps {
  id: string;
}

function BookofAuthor({ id }: IProps) {
  const { data } = useBooksAuthorQuery(id);

  const { books, author }: { books: IBook[]; author: IAuthor } =
    data?.payload || { books: [] };

  return (
    <div>
      {books.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            bgcolor: "white",
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
            borderRadius: "5px",
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Box>
            <Image
              alt="author-avatar"
              src={author.authorAvatarUrl}
              width={100}
              height={100}
              style={{ borderRadius: "50%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              alignContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.25rem",
                color: "text.primary",
              }}
            >
              {author.authorName}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.125rem",
                color: "text.secondary",
              }}
            >
              ({books.length}) books
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.125rem",
                color: "text.secondary",
              }}
            >
              {author.bio ? author.bio : "No Bio"}
            </Typography>
          </Box>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          marginTop: "10px",
          bgcolor: "white",
        }}
      >
        <Image
          src={photo}
          width={100}
          height={100}
          alt="Books of author"
          style={{ width: "60px" }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#0d9488",
          }}
        >
          Books of author
        </Typography>
      </Box>

      {books.length === 0 ? (
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
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            },
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {books.map((el) => (
            <CoverBook key={el.id} details={el} />
          ))}
        </Box>
      )}
    </div>
  );
}

export default BookofAuthor;
