import { Fragment, useState, useEffect, useRef } from "react";
import styles from "../historylayout/history.module.scss";
import "bootstrap";

interface HistoryInfo {
    subTitle: string,
    bannerImg: string,
    info: Array<{
        id: string,
        title?: string,
        image?: string,
        label?: string,
        subtitle?: string,
        flag_one?: string,
        caption_one?: string,
        flag_two?: string,
        caption_two?: string,
        description: string
    }>
}

function HistoryLayout({ data }: { data: HistoryInfo }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>("");
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Track active section on scroll
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: "0px 0px -60% 0px", threshold: 0 }
        );

        data.info.forEach(item => {
            const el = document.getElementById(item.id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [data.info]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setDrawerOpen(false);
    };

    const tocLinks = (
        <>
            {data.info.map((dataInfo) => (
                <ul className="nav flex-column" key={dataInfo.id}>
                    <li className="nav-item">
                        {dataInfo.title && (
                            <a
                                className={`nav-link text-decoration-none ${activeId === dataInfo.id ? styles.active : ""}`}
                                href={`#${dataInfo.id}`}
                                onClick={(e) => handleNavClick(e, dataInfo.id)}
                            >
                                {dataInfo.title}
                            </a>
                        )}
                        {dataInfo.caption_one && (
                            <a
                                className={`nav-link text-decoration-none ${activeId === dataInfo.id ? styles.active : ""}`}
                                href={`#${dataInfo.id}`}
                                onClick={(e) => handleNavClick(e, dataInfo.id)}
                            >
                                {dataInfo.caption_one}
                            </a>
                        )}
                        {dataInfo.caption_two && (
                            <a
                                className={`nav-link text-decoration-none ${activeId === dataInfo.id ? styles.active : ""}`}
                                href={`#${dataInfo.id}`}
                                onClick={(e) => handleNavClick(e, dataInfo.id)}
                            >
                                {dataInfo.caption_two}
                            </a>
                        )}
                    </li>
                </ul>
            ))}
        </>
    );

    return (
        <Fragment>
            {/* Mobile drawer */}
            <aside className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}>
                <div className={styles.drawerInner}>
                    <h5>Table of Contents</h5>
                    {tocLinks}
                </div>
                <button
                    className={styles.drawerTab}
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    aria-label="Toggle Table of Contents"
                >
                    <span className={styles.drawerTabIcon}>{drawerOpen ? "✕" : "☰"}</span>
                    <span className={styles.drawerTabText}>Contents</span>
                </button>
            </aside>

            {/* Banner */}
            <section className={`${styles.banner} d-flex flex-column py-5 align-items-center justify-content-center`}>
                <h5>Middle Eastern Studies</h5>
                <h1 className="py-2">{data.subTitle}</h1>
                <div className={styles.bannerImgWrapper}>
                    <img src={data.bannerImg} alt={data.subTitle} className={styles.bannerImg} />
                </div>
            </section>

            {/* Articles */}
            <section className={styles.article}>
                <div className="container-fluid px-5 mx-auto">
                    <div className="row">

                        {/* DESKTOP sidebar */}
                        <div className="col-md-3 d-none d-md-block">
                            <nav className={`${styles.sidebar} p-3`} style={{ position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
                                <h5>Table of Contents</h5>
                                {tocLinks}
                            </nav>
                        </div>

                        {/* Main reading area */}
                        <div className="col-md-9 col-12">
                            {data.info.map((articleInfo) => (
                                <div className={`${styles.content} p-3`} key={articleInfo.id}>
                                    <p className={`${styles.title} mb-4 pt-3`} id={articleInfo.id}>
                                        {articleInfo.title}
                                    </p>
                                    <p className={`${styles.subTitle} text-center`}>
                                        {articleInfo.subtitle}
                                    </p>
                                    {articleInfo.flag_one && (
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <img className={styles.flagImg} src={articleInfo.flag_one} alt={articleInfo.caption_one} />
                                            <span className={styles.subheading}>{articleInfo.caption_one}</span>
                                        </div>
                                    )}
                                    {articleInfo.id === "modernNations" && (
                                        <p className={`${styles.para} text-center`}>
                                            Click for a{' '}
                                            <a
                                                className="text-decoration-none"
                                                href="../pages/palestineHistory.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                detailed history.
                                            </a>
                                        </p>
                                    )}
                                    {articleInfo.flag_two && articleInfo.caption_two && (
                                        <div className="d-flex flex-column justify-content-center align-items-center py-5">
                                            <img className={styles.flagImg} src={articleInfo.flag_two} alt={articleInfo.caption_two} />
                                            <span className={styles.subheading}>{articleInfo.caption_two}</span>
                                        </div>
                                    )}
                                    <p className={styles.para} dangerouslySetInnerHTML={{ __html: articleInfo.description }} />
                                    <div id={styles.images}>
                                        {articleInfo.image && (
                                            <>
                                                <img className="my-2" src={articleInfo.image} alt={articleInfo.title} />
                                                <span>{articleInfo.label}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default HistoryLayout;