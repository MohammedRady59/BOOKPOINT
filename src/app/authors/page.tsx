import Image from "next/image";
import photo from "../../Images/popular_user1-DdIbVYpO.svg";
import { Box, Typography } from "@mui/material";
import AuthorsCard from "@/components/AuthorsCard";

function Authors() {
  return (
    <Box sx={{ marginTop: "1.75rem" }}>
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
            Authors
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: "1.75rem" }}>
        <AuthorsCard />
      </Box>
    </Box>
  );
}

export default Authors;
