"use client";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ThreeDots } from "react-loader-spinner";
import SearchIcon from "@mui/icons-material/Search";
import BookIcon from "@mui/icons-material/Book";
import { useAllCategoreQuery } from "@/redux/features/categore/Categorie";
import { IAuthor, ICategory } from "@/Interface";
import { useAllAuthorQuery } from "@/redux/features/Author/author";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LoadingSpinner = () => (
  <ThreeDots
    visible={true}
    height="40"
    width="40"
    color="#115e59"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
);

function SideBar() {
  const { data } = useAllCategoreQuery("");
  const { data: dataAuthor } = useAllAuthorQuery("");

  const { categories }: { categories: ICategory[] } = data?.payload || {
    categories: [],
  };
  const { authors }: { authors: IAuthor[] } = dataAuthor?.payload || {
    authors: [],
  };

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Box
      sx={{
        position: isHomePage ? "absolute" : "relative",
        top: isHomePage ? { xs: "50%", xl: "46%" } : "10%",
        transform: "translate(0%, 5%)",
        width: "250px",
        minWidth: "250px",
        zIndex: 5,
        display: { xs: "none", md: "block" },
      }}
    >
      <div className="px-3 py-2 shadow-2xl bg-white rounded-sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            className="text-xl font-bold text-gray-900"
          >
            Categories
          </Typography>
          <SearchIcon />
        </Box>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {categories.length === 0 ? (
            <LoadingSpinner />
          ) : (
            categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.id}`}>
                <ListItem
                  sx={{ padding: "0" }}
                  disableGutters
                  secondaryAction={
                    <IconButton aria-label="book" sx={{ color: "#0D9488" }}>
                      <BookIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={category.categoryName}
                    className="hover:underline cursor-pointer"
                  />
                </ListItem>
              </Link>
            ))
          )}
        </List>
      </div>

      <div className="px-3 py-4 shadow-2xl bg-white rounded-sm mt-10">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            className="text-xl font-bold text-gray-900"
          >
            <Link href="/authors">Authors</Link>
          </Typography>
          <SearchIcon />
        </Box>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {authors.length === 0 ? (
            <LoadingSpinner />
          ) : (
            authors.map((author) => (
              <Link key={author.id} href={`/authors/${author.id}`}>
                <ListItem
                  sx={{ padding: "0" }}
                  disableGutters
                  secondaryAction={
                    <IconButton aria-label="book" sx={{ color: "#0D9488" }}>
                      <BookIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={author.authorName}
                    className="hover:underline cursor-pointer"
                  />
                </ListItem>
              </Link>
            ))
          )}
        </List>
      </div>
    </Box>
  );
}

export default SideBar;
