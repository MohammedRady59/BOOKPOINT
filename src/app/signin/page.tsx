import SignInForm from "@/components/SignInForm";
import { Box, Stack, Typography } from "@mui/material";

function Page() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: { xs: "100%", sm: "80%" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#115e59",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: 4,
          }}
        >
          NETH-BOOKPOINT
        </Typography>

        <SignInForm />

        <Typography sx={{ fontSize: "1rem", color: "text.secondary" }}>
          Unlock a world of knowledge by registering with us today!
        </Typography>
      </Stack>
    </Box>
  );
}

export default Page;
