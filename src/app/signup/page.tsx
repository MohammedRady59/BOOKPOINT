import { Box, Typography } from "@mui/material";
import SignForm from "@/components/SignForm";

function Signup() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "40%",
          padding: "10px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#115e59",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: 4,
            textAlign: "center",
          }}
        >
          NETH-BOOKPOINT
        </Typography>
        <SignForm />
      </Box>
    </Box>
  );
}

export default Signup;
