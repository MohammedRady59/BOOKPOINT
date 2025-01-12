import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideRex from "./SlideRex";
import { useAllRevQuery } from "@/redux/features/review/review";
import { ThreeDots } from "react-loader-spinner";
import { Review } from "@/Interface";

interface IProps {
  idReview: string;
}
function Reviews({ idReview }: IProps) {
  const { data, isLoading } = useAllRevQuery(idReview);

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const { reviews }: { reviews: Review[] } = data?.payload;

  console.log(reviews);
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "10px",
        padding: "10px",
        width: "40rem",
        marginInline: "auto",
      }}
    >
      <div className="slider-container">
        <div>
          {reviews.length === 0 ? (
            <Typography>No Reviews Yet</Typography>
          ) : (
            <Slider {...settings}>
              {reviews.map((el) => (
                <SlideRex key={el.id} details={el} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </Box>
  );
}

export default Reviews;
