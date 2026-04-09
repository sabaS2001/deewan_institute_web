import { Fragment, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styles from './publicationInfo.module.scss';
import '../../style/animation.scss';
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import {
    mainBooks,
    ammiyehCollection,
    fushaBook,
    podcastSeasons,
} from '../../../data';
import type { MainBook, CollectionBook, FushaBook, PodcastSeason } from '../../../data';

declare const Swiper: any;



interface BookDetail {
    id: string;
    image: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    author?: string;        // books have author
    hosted?: string;        // podcasts have hosted
    description?: string;
    reviews?: Array<{ reviewer: string; rating: number; comment: string }>;
    wishlistLink?: string;
    cartLink?: string;
    listenLink?: string;    // podcasts only
    type: 'book' | 'podcast';
}


// Collect all books into one searchable flat list
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
            wishlistLink: b.wishlistLink,
            cartLink: b.cartLink,
            type: 'book' as const,
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
            wishlistLink: b.wishlistLink,
            cartLink: b.cartLink,
            type: 'book' as const,
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
            wishlistLink: fushaBook.wishlistLink,
            cartLink: fushaBook.cartLink,
            type: 'book' as const,
        },
    ];

    const podcasts: BookDetail[] = podcastSeasons.map((p: PodcastSeason) => ({
        id: p.id,
        image: p.image,
        imageAlt: p.imageAlt,
        title: p.label,
        subtitle: p.subtitle,
        hosted: p.hosted,
        description: p.description,
        listenLink: p.listenLink,
        type: 'podcast' as const,
    }));

    return [...books, ...podcasts];
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className={styles.stars} aria-label={`Rating: ${rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>★</span>
            ))}
        </div>
    );
}

// Component

function PublicationInfo() {

    useScrollAnimation();

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const allBooks = getAllBooks();
    const book = allBooks.find(b => b.id === id);

    // Similar items: same type, exclude current
    const similar = allBooks
        .filter(b => b.type === book?.type && b.id !== id)
        .slice(0, 6);

    const similarSwiperRef    = useRef<HTMLDivElement>(null);
    const testimonialSwiperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof Swiper === 'undefined') return;

        const similarSwiper = new Swiper(similarSwiperRef.current, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            autoplay: { delay: 3000, disableOnInteraction: false },
            speed: 1000,
            navigation: {
                nextEl: similarSwiperRef.current?.querySelector('.swiper-button-next'),
                prevEl: similarSwiperRef.current?.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                768:  { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });

        const testimonialSwiper = new Swiper(testimonialSwiperRef.current, {
            loop: true,
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 32,
            navigation: {
                nextEl: testimonialSwiperRef.current?.querySelector('.swiper-button-next'),
                prevEl: testimonialSwiperRef.current?.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: testimonialSwiperRef.current?.querySelector('.swiper-pagination'),
                clickable: true,
            },
            breakpoints: {
                768:  { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });

        return () => {
            similarSwiper.destroy(true, true);
            testimonialSwiper.destroy(true, true);
        };
    }, [id]);

    // 404 fallback
    if (!book) {
        return (
            <div className={styles.notFound}>
                <h2>Publication not found.</h2>
                <Link to="/publications" className={styles.backLink}>← Back to Publications</Link>
            </div>
        );
    }

    return (
        <Fragment>

            {/* ── Breadcrumb ── */}
            <nav className={styles.breadcrumb} aria-label="breadcrumb">
                <ol>
                    <li>
                        <Link to="/publications">Deewan Institute Resources</Link>
                    </li>
                    <li aria-current="page">{book.title}</li>
                </ol>
            </nav>

            {/* ── Book Info ── */}
            <section className={`${styles.info} py-3 mt-2 mb-5 scroll-section`}>
                <div className="row justify-content-center">

                    {/* Image */}
                    <div className="col-md-5 d-flex flex-column align-items-end justify-content-center">
                        <img
                            className={`${styles.featuretteImage} img-fluid mx-auto`}
                            src={book.image}
                            alt={book.imageAlt}
                        />
                    </div>

                    {/* Text */}
                    <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
                        <h1 className="lh-base">{book.title}</h1>
                        {book.subtitle && <h4 className="lh-base">{book.subtitle}</h4>}

                        {book.author && <h5 className="lh-base">By: {book.author}</h5>}
                        {book.hosted && <h5 className="lh-base">Hosted By: {book.hosted}</h5>}

                        {/* Star rating from reviews */}
                        {book.reviews && book.reviews.length > 0 && (
                            <StarRating rating={book.reviews[0].rating} />
                        )}

                        {book.description && (
                            <>
                                <p className={`lead ${styles.descriptionLabel}`}>Description:</p>
                                <p className="lead">{book.description}</p>
                            </>
                        )}

                        {/* Actions */}
                        <div className={`d-flex flex-row w-100 justify-content-between align-items-center my-1 ${styles.actions}`}>
                            {book.type === 'book' ? (
                                <>
                                    <a href={book.wishlistLink ?? '#'} target="_blank" className={styles.actionBtn} rel="noreferrer">
                                        <img className="px-3" src="/assets/images/icons/heart.png" alt="wishlist icon" />
                                        Wishlist
                                    </a>
                                    <a href={book.cartLink ?? '#'} target="_blank" className={`${styles.actionBtn} ${styles.cartBtn}`} rel="noreferrer">
                                        <img className="px-3" src="/assets/images/icons/cart.png" alt="cart icon" />
                                        Add To Cart
                                    </a>
                                </>
                            ) : (
                                <a href={book.listenLink ?? '#'} target="_blank" className={styles.actionBtn} rel="noreferrer">
                                    Listen Now
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Divider ── */}
            <hr className={`${styles.divider} mx-auto my-2 scroll-section`} />

            {/* ── Reviews / Testimonials ── */}
            {book.reviews && book.reviews.length > 0 && (
                <section className={`${styles.testimonials} py-3 scroll-section`}>
                    <div className={styles.sectionTitle}>
                        <span>Reviews:</span>
                    </div>
                    <div className="container d-flex align-content-center">
                        <div ref={testimonialSwiperRef} className="swiper testimonialsSwiper w-100">
                            <div className="swiper-wrapper">
                                {book.reviews.map((review, i) => (
                                    <div key={i} className="swiper-slide my-5">
                                        <div className={styles.testimonialCard}>
                                            <StarRating rating={review.rating} />
                                            <p className={styles.testimonialQuote}>"{review.comment}"</p>
                                            <hr className={styles.testimonialDivider} />
                                            <h5 className={styles.testimonialName}>{review.reviewer}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </section>
            )}

            {/* ── Divider ── */}
            <hr className={`${styles.divider} mx-auto my-2 scroll-section`} />

            {/* ── Similar Items ── */}
            {similar.length > 0 && (
                <section className={`${styles.similar} scroll-section`}>
                    <div className={styles.sectionTitle}>
                        <span>Similar {book.type === 'podcast' ? 'Seasons' : 'Books'}:</span>
                    </div>
                    <div className="row py-5 mx-auto">
                        <div ref={similarSwiperRef} className="swiper booksCollection">
                            <div className="swiper-wrapper">
                                {similar.map((item) => (
                                    <div key={item.id} className="swiper-slide">
                                        <div
                                            className={`d-flex flex-column align-items-center ${styles.similarSlide}`}
                                            onClick={() => navigate(`/publications/${book.type === 'podcast' ? 'podcast' : 'book'}/${item.id}`)}
                                        >
                                            <img src={item.image} alt={item.imageAlt} />
                                            <h3 className={`${styles.heading} text-center mt-4`}>{item.title}</h3>
                                            {item.subtitle && <p className={`${styles.subtitle} text-center`}>{item.subtitle}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                        </div>
                    </div>
                </section>
            )}

        </Fragment>
    );
}

export default PublicationInfo;