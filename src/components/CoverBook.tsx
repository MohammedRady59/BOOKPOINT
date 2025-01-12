import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
import { IBook } from "@/Interface";
import Link from "next/link";

interface IProps {
  details: IBook;
}

function CoverBook({ details }: IProps) {
  return (
    <Link href={`/book/${details.id}`} passHref>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          bgcolor: "white",
          padding: "0.5rem 0.25rem",
          border: "2px solid white",
          borderRadius: "0.375rem",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            cursor: "pointer",
          },
        }}
      >
        <Rating name="read-only" value={details.totalReviewsRate} readOnly />

        {details.coverUrl?.startsWith("https://") ? (
          <Image
            src={details.coverUrl}
            width={500}
            height={500}
            alt={details.title}
            className="w-3/4"
          />
        ) : (
          <Typography variant="body2" align="center">
            Invalid image URL. Please ensure the image URL starts with
          </Typography>
        )}

        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: "bold",
            fontSize: "1.125rem",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {details.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            color: "#0d9488",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {details?.author?.authorName}
        </Typography>
      </Box>
    </Link>
  );
}

export default CoverBook;
