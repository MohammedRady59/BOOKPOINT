/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import toast from "react-hot-toast";
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from "@/redux/features/favorite/favorite";
interface IProps {
  bookId: number;
  isInFav: boolean;
}
function DialogFav({ bookId, isInFav }: IProps) {
  const [addToCart, { isLoading }] = useAddFavoriteMutation();
  const [deleteCart] = useDeleteFavoriteMutation();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleCart() {
    try {
      if (isInFav) {
        const res: any = await deleteCart(bookId);
        if (res.error) {
          toast.error(`${res.error.data.message}`, {
            position: "bottom-center",
            duration: 1500,
          });
        }
        if (res.data) {
          toast.success(`${res.data.message}`, {
            position: "bottom-center",
            duration: 1500,
          });
        }
      }
      if (!isInFav) {
        const res: any = await addToCart({ bookId: String(bookId) });
        if (res.error) {
          toast.error(`${res.error.data.message}`, {
            position: "bottom-center",
            duration: 1500,
          });
        }
        if (res.data) {
          toast.success(`${res.data.message}`, {
            position: "bottom-center",
            duration: 1500,
          });
        }
      }
      handleClose();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <React.Fragment>
      <Button
        sx={{ border: "none" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        {isInFav ? (
          <FavoriteIcon sx={{ fontSize: "2rem", color: "#115e59" }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: "2rem", color: "#115e59" }} />
        )}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to add this proudct?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} sx={{ bgcolor: "red", color: "white" }}>
            Exit
          </Button>
          <Button
            disabled={isLoading}
            onClick={() => handleCart()}
            sx={{ bgcolor: "#115e59", color: "white" }}
            autoFocus
          >
            {isLoading ? "load" : isInFav ? "Delete It" : "Add "}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default DialogFav;
