import { useAddReviewMutation } from "@/redux/features/review/review";
import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
interface IProps {
  idReview: string;
}
function Addreview({ idReview }: IProps) {
  const [rate, setRate] = useState<number | null>(0);
  const [review, setReview] = useState<string | null>("");
  const [addReview, { isLoading }] = useAddReviewMutation();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      console.log(rate, review);
      if (!review || review.length < 4) {
        return toast.error(`Add more than 4 letters`, {
          position: "bottom-center",
          duration: 1500,
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dataRes: any = await addReview({
        comment: review,
        rate,
        bookId: idReview,
      });
      console.log(dataRes);
      if (dataRes.error) {
        toast.error(`${dataRes.error.data.message}`, {
          position: "bottom-center",
          duration: 1500,
        });
      }
      if (dataRes.data) {
        toast.success(`${dataRes.data.message}`, {
          position: "bottom-center",
          duration: 1500,
        });
      }
      setRate(0);
      setReview("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box sx={{ bgcolor: "white", borderRadius: "10px", padding: "10px" }}>
      <Typography
        component="h2"
        sx={{
          color: "#0d9488",
          fontWeight: "bold",
          fontSize: "1.25rem",
          marginBottom: "15px",
        }}
      >
        Add Review
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: "20px",
            marginTop: "15px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Add Review"
            variant="outlined"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            sx={{ flex: 1 }}
          />
          <Rating
            name="simple-controlled"
            value={rate}
            onChange={(event, newValue) => setRate(newValue)}
          />
        </Box>
        <Button
          type="submit"
          disabled={isLoading}
          sx={{
            backgroundColor: "#0d9488",
            color: "white",
            marginTop: "20px",
            fontSize: "1.125rem",
            fontWeight: "bold",
            textTransform: "capitalize",
            borderRadius: "0.375rem",
            padding: "8px 15px",
            width: "100%",
            maxWidth: "100px",
          }}
        >
          {isLoading ? "load" : "Add"}
        </Button>
      </Box>
    </Box>
  );
}

export default Addreview;
