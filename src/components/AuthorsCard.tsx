"use client";
import { IAuthor } from "@/Interface";
import { useAllAuthorQuery } from "@/redux/features/Author/author";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ThreeDots } from "react-loader-spinner";

function AuthorsCard() {
  const { data } = useAllAuthorQuery("");

  const { authors }: { authors: IAuthor[] } = data?.payload || {
    authors: [],
  };

  return (
    <div>
      {authors.length === 0 ? (
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
          {authors.map((author) => (
            <Link key={author.id} href={`/authors/${author.id}`} passHref>
              <Box
                sx={{
                  bgcolor: "white",
                  padding: "8px",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    cursor: "pointer",
                  },
                }}
              >
                <Box>
                  <Image
                    src={author.authorAvatarUrl}
                    width={100}
                    height={100}
                    alt={author.authorName}
                    style={{ borderRadius: "50%" }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    textAlign: "center",
                    textTransform: "capitalize",
                  }}
                >
                  {author.authorName}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    bgcolor: "black",
                    width: "80%",
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    textAlign: "center",
                    textTransform: "capitalize",
                    color: "#0d9488",
                  }}
                >
                  ({author.numOfBooks}) Books
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      )}
    </div>
  );
}

export default AuthorsCard;
