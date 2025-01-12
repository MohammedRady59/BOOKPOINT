/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  useAddCartMutation,
  useDeleteCartMutation,
} from "@/redux/features/cart/cart";
import toast from "react-hot-toast";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
interface IProps {
  bookId: number;
  isInCart: boolean;
}
export default function DialogCart({ bookId, isInCart }: IProps) {
  const [addToCart, { isLoading }] = useAddCartMutation();
  const [deleteCart] = useDeleteCartMutation();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleCart() {
    try {
      if (isInCart) {
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
      if (!isInCart) {
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
        {isInCart ? (
          <ShoppingCartIcon sx={{ fontSize: "2rem", color: "#115e59" }} />
        ) : (
          <AddShoppingCartIcon sx={{ fontSize: "2rem", color: "#115e59" }} />
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
            {isLoading ? "load" : isInCart ? "Delete It" : "Add To Cart"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
