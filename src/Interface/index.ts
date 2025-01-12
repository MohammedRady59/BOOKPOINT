export interface IFormSignup {
  id: "fullname" | "email" | "password" | "phoneNum";
  label: string;
  type: string;
}

export interface ISignup {
  fullname: string;
  email: string;
  phoneNum: string;
  password: string;
  gender: string;
}

export interface ISignInForm {
  id: keyof IFormInputSignIn;
  label: string;
  type: string;
}
export interface IFormInputSignIn {
  email: string;
  password: string;
}

export interface ICategory {
  id: number;
  categoryName: string;
}
export interface IAuthor {
  id: number;
  authorAvatarUrl: string;
  authorName: string;
  bio: string | null;
  birthDate: string;
  deathDate: string | null;
  numOfBooks: number;
}

export interface IBook {
  id: number;
  title: string;
  subTitle: string;
  desc: string;
  coverUrl: string;
  pages: number;
  views: number;
  lang: string;
  releaseDate: string;
  format: string;
  size: number;
  copyright: boolean;
  toBuy: boolean;
  bookUrl: string;
  price: number | null;
  createdAt: string;
  updatedAt: string;
  authorId: number;
  uploaderId: number;
  publisherId: number;
  categoryId: number;
  author: Authorbook;
  publisher: Publisher;
  user: UserBook;
  category: ICategory;
  reviews: Review[];
  totalReviewsRate: number | null;
  recommendations: IBook[];
}

interface Authorbook {
  authorName: string;
  id: number;
}

interface Publisher {
  publisherName: string;
  id: number;
}

interface UserBook {
  fullname: string;
  id: number;
}

export interface Review {
  rate: number;
  comment: string;
  id: number;
  user: IReviewUser;
}

interface IReviewUser {
  id: number;
  fullname: string;
  avatarUrl: string;
}

export interface IBookCart {
  bookId: number;
  userId: number;
  book: IBook;
  totalReviewsRate: number;
}
