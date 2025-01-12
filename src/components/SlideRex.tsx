import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Rating } from "@mui/material";
import { Review } from "@/Interface";
interface IProps {
  details: Review;
}
function SlideRex({ details }: IProps) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details.user.fullname}
            </Typography>
            <Rating
              name="read-only"
              value={details.rate}
              readOnly
              sx={{ mb: 3 }}
            />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {details.comment}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default SlideRex;
