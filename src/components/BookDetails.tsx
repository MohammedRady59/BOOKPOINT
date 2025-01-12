"use client";
import { IBook, IBookCart } from "@/Interface";
import { useGetBookQuery } from "@/redux/features/book/book";
import { Box, Button, Rating, Typography } from "@mui/material";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import Addreview from "./Addreview";
import Recommendations from "./Recommendations";
import DialogCart from "./DialogCart";
import { useAllCartQuery } from "@/redux/features/cart/cart";
import DialogFav from "./DialogFav";
import { useAllFavQuery } from "@/redux/features/favorite/favorite";
import Reviews from "./Reviews";

interface IProps {
  id: string;
}

function BookDetails({ id }: IProps) {
  const { data, isLoading } = useGetBookQuery(id);
  const { book, recommendations }: { book: IBook; recommendations: IBook[] } =
    data?.payload || {
      book: null,
    };

  const { data: cartData } = useAllCartQuery("");
  const { data: favData } = useAllFavQuery("");

  const { books }: { books: IBookCart[] } = cartData?.payload || { books: [] };
  const { books: allFav }: { books: IBookCart[] } = favData?.payload || {
    books: [],
  };

  const isBookInCart = books.some((cartItem) => cartItem.book.id === book?.id);
  const isBookInFav = allFav.some((FavItem) => FavItem.book.id === book?.id);
  if (isLoading) {
    return (
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
    );
  }

  function formatFileSize(sizeInBytes: number) {
    if (sizeInBytes < 1048576) {
      return `${(sizeInBytes / 1048576).toFixed(2)} MB`;
    } else {
      return `${(sizeInBytes / 1073741824).toFixed(2)} GB`;
    }
  }

  return (
    <div className="">
      <Box sx={{ bgcolor: "white", borderRadius: "10px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
            gap: "20px",
            padding: "10px",
          }}
        >
          <Box>
            <Image
              src={book?.coverUrl}
              width={220}
              height={500}
              alt={book?.title}
            />
          </Box>
          <Box>
            <Typography
              component="h1"
              sx={{
                fontWeight: "bold",
                fontSize: "1.25rem",
                color: "#115e59",
                mb: 3,
              }}
            >
              {book?.title}
            </Typography>
            <Rating
              name="read-only"
              value={book.totalReviewsRate}
              readOnly
              sx={{ mb: 3 }}
            />
            <Box>
              <ul style={{ padding: 0, margin: 0 }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "120px",
                      fontSize: "16px",
                      fontWeight: "medium",
                      textTransform: "capitalize",
                    }}
                  >
                    Price
                  </Typography>
                  <Typography
                    sx={{
                      color: "#0d9488",
                      fontWeight: "bold",
                      fontSize: "1.125rem",
                    }}
                  >
                    : {book?.price ? book.price : "Free"}
                  </Typography>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "120px",
                      fontSize: "16px",
                      fontWeight: "medium",
                      textTransform: "capitalize",
                    }}
                  >
                    Author
                  </Typography>
                  <Typography
                    sx={{
                      color: "#0d9488",
                      fontWeight: "bold",
                      fontSize: "1.125rem",
                    }}
                  >
                    : {book?.author?.authorName}
                  </Typography>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "120px",
                      fontSize: "16px",
                      fontWeight: "medium",
                      textTransform: "capitalize",
                    }}
                  >
                    Category
                  </Typography>
                  <Typography
                    sx={{
                      color: "#0d9488",
                      fontWeight: "bold",
                      fontSize: "1.125rem",
                    }}
                  >
                    : {book?.category?.categoryName}
                  </Typography>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "120px",
                      fontSize: "16px",
                      fontWeight: "medium",
                      textTransform: "capitalize",
                    }}
                  >
                    Publisher
                  </Typography>
                  <Typography
                    sx={{
                      color: "#0d9488",
                      fontWeight: "bold",
                      fontSize: "1.125rem",
                    }}
                  >
                    : {book?.publisher?.publisherName || "Unknown"}
                  </Typography>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "120px",
                      fontSize: "16px",
                      fontWeight: "medium",
                      textTransform: "capitalize",
                    }}
                  >
                    Pages
                  </Typography>
                  <Typography
                    sx={{
                      color: "#0d9488",
                      fontWeight: "bold",
                      fontSize: "1.125rem",
                    }}
                  >
                    : {book?.pages}
                  </Typography>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "120px",
                      fontSize: "16px",
                      fontWeight: "medium",
                      textTransform: "capitalize",
                    }}
                  >
                    Type
                  </Typography>
                  <Typography
                    sx={{
                      color: "#0d9488",
                      fontWeight: "bold",
                      fontSize: "1.125rem",
                    }}
                  >
                    : {book?.format}
                  </Typography>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "120px",
                      fontSize: "16px",
                      fontWeight: "medium",
                      textTransform: "capitalize",
                    }}
                  >
                    Size
                  </Typography>
                  <Typography
                    sx={{
                      color: "#0d9488",
                      fontWeight: "bold",
                      fontSize: "1.125rem",
                    }}
                  >
                    : {formatFileSize(book?.size)}
                  </Typography>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#0d9488",
                      fontWeight: "bold",
                      fontSize: "0.875rem",
                      textDecoration: "underline",
                    }}
                  >
                    <a href="#recommend">More books like this book</a>
                  </Typography>
                </li>
              </ul>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexGrow: "1",
              gap: "5px",
              justifyContent: "end",
              cursor: "pointer",
            }}
          >
            <DialogCart bookId={book.id} isInCart={isBookInCart} />
            <DialogFav bookId={book.id} isInFav={isBookInFav} />
          </Box>
        </Box>

        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <Button
            sx={{
              borderTop: "1px solid gray",
              borderRight: "1px solid gray",
              flex: 1,
              backgroundColor: "white",
              color: "#0d9488",
              fontSize: "1.125rem",
              fontWeight: "bold",
              textTransform: "capitalize",
              borderRadius: 0,
            }}
          >
            Read
          </Button>
          <Button
            sx={{
              borderTop: "1px solid gray",
              flex: 1,
              backgroundColor: "white",
              color: "#0d9488",
              fontSize: "1.125rem",
              fontWeight: "bold",
              textTransform: "capitalize",
              borderRadius: 0,
            }}
          >
            Download
          </Button>
        </Box>
      </Box>

      <Box sx={{ marginBlock: "2.3rem" }}>
        <Addreview idReview={id} />
      </Box>
      <Box sx={{ marginBlock: "2.3rem" }}>
        <Reviews idReview={id} />
      </Box>

      <Box sx={{ marginBlock: "2.3rem" }}>
        <Recommendations data={recommendations} />
      </Box>
    </div>
  );
}

export default BookDetails;
