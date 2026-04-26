import { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useShop } from "../../context/shopcontext";
import {
  mainBooks,
  ammiyehCollection,
  fushaBook,
  podcastSeasons,
} from "../../../data";
import type { MainBook, CollectionBook, PodcastSeason } from "../../../data";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import PublicationInfoLayout, { type BookDetail } from "./../../layout/booksLayout/PublicationInfoLayout";
import styles from "./publicationinfo.module.scss";

function getAllBooks(): BookDetail[] {
  const books: BookDetail[] = [
    ...mainBooks.map((b: MainBook) => ({
      id: b.id,
      image: b.image,
      imageAlt: b.imageAlt,
      title: b.title,
      subtitle: b.subtitle,
      author: b.author,
      hosted: b.hosted,
      description: b.description,
      reviews: b.reviews,
      cartLink: b.cartLink,
      price: b.price,
      type: "book" as const,
      samplePdf: b.samplePdf,
      frontCover: b.frontCover,
      backCover: b.backCover,
    })),
    ...ammiyehCollection.map((b: CollectionBook) => ({
      id: b.id,
      image: b.image,
      imageAlt: b.imageAlt,
      title: b.title,
      subtitle: b.subtitle,
      author: b.author,
      hosted: b.hosted,
      description: b.description,
      reviews: b.reviews,
      cartLink: b.cartLink,
      price: b.price,
      type: "book" as const,
      samplePdf: b.samplePdf,
      frontCover: b.frontCover,
      backCover: b.backCover,
    })),
    {
      id: fushaBook.id,
      image: fushaBook.image,
      imageAlt: fushaBook.imageAlt,
      title: fushaBook.title,
      subtitle: fushaBook.subtitle,
      author: fushaBook.author,
      hosted: fushaBook.hosted,
      description: fushaBook.description,
      reviews: fushaBook.reviews,
      cartLink: fushaBook.cartLink,
      price: fushaBook.price,
      type: "book" as const,
      samplePdf: fushaBook.samplePdf,
      frontCover: fushaBook.frontCover,
      backCover: fushaBook.backCover,
    },
  ];

  const podcasts: BookDetail[] = podcastSeasons.map((p: PodcastSeason) => ({
    id: p.id,
    image: p.image,
    imageAlt: p.imageAlt,
    title: p.title,
    subtitle: p.subtitle,
    author: p.author,
    hosted: p.hosted,
    description: p.description,
    reviews: p.reviews,
    listenLink: p.listenLink,
    price: p.price,
    type: "podcast" as const,
    samplePdf: p.samplePdf,
    frontCover: p.frontCover,
    backCover: p.backCover,
  }));

  return [...books, ...podcasts];
}

function PublicationInfo() {
    useEffect(() => {
    document.title = "Deewan Institute | Publication Information";
  }, []);
  const { id } = useParams<{ id: string }>();
  const { toggleWishlist, isInWishlist, addToCart } = useShop();

  const allBooks = getAllBooks();
  const book = allBooks.find((b) => b.id === id);
  const similar = allBooks.filter((b) => b.type === book?.type && b.id !== id).slice(0, 6);

  const [mainImage, setMainImage] = useState<string | undefined>(book?.image);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (book) setMainImage(book.image);
  }, [id]);

  if (!book) {
    return (
      <div className={styles.notFound}>
        <h2>Publication not found.</h2>
        <Link to="/publications" className={styles.backLink}>
          ← Back to Publications
        </Link>
      </div>
    );
  }

  const shopItem = {
    id: book.id,
    title: book.title,
    subtitle: book.subtitle,
    image: book.image,
    imageAlt: book.imageAlt,
    type: book.type,
    cartLink: book.cartLink,
    listenLink: book.listenLink,
    price: book.price,
    samplePdf: book.samplePdf,
    frontCover: book.frontCover,
    backCover: book.backCover,
  };

  return (
    <Fragment>
      <NavBar />
      <PublicationInfoLayout
        book={book}
        similar={similar}
        mainImage={mainImage}
        isInWishlist={isInWishlist}
        onSetMainImage={setMainImage}
        onWishlistToggle={() => toggleWishlist(shopItem)}
        onAddToCart={() => addToCart(shopItem)}
      />
      <Footer />
    </Fragment>
  );
}

export default PublicationInfo;