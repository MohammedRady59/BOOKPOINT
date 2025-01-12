import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Books from "@/components/Books";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          color: "white",
          height: "380px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#115e59",
          padding: "10px",
          position: "absolute",
          left: "0",
          right: "0",
          backgroundImage: "linear-gradient(to left, #0d9488, #115e59)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            textAlign: "center",
            width: "80%",
            maxWidth: "600px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
              },
              color: "white",
              letterSpacing: 1,
            }}
          >
            NETH-BOOKPOINT
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#d1d5db",
              fontWeight: "500",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            Explore the limitless worlds within books and ignite your
            imagination with every turn of the page. Adventure awaits!
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              mt: 3,
            }}
          >
            <Input
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: "24px",
                padding: "6px 12px",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              placeholder="Search for books..."
            />
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                borderRadius: "0 24px 24px 0",
                height: "100%",
                bgcolor: "#115e59",
                padding: "10px 20px",
                boxShadow: 3,
              }}
            >
              Search
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              marginTop: 3,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "#d1d5db",
                padding: "8px 20px",
                fontSize: "1rem",
                textTransform: "capitalize",
                fontWeight: "500",
              }}
            >
              Recently Uploaded
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "#d1d5db",
                padding: "8px 20px",
                fontSize: "1rem",
                textTransform: "capitalize",
                fontWeight: "500",
              }}
            >
              Most View
            </Button>
          </Box>
        </Box>
      </Box>
      <Books />
    </>
  );
}
