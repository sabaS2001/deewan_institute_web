import { Fragment } from "react/jsx-runtime";
import styles from "../historyLayout/history.module.scss";
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
    return (
        <Fragment>
            {/* Banner */}
            <section className={`${styles.banner} d-flex flex-column py-5 align-items-center justify-content-center`} id={styles.banner}>
                <h5>Middle Eastern Studies</h5>
                <h1 className="py-2">{data.subTitle}</h1>
                <img className="w-100 px-5 my-4" src={data.bannerImg} alt={data.subTitle} />
            </section>
            {/* Articles */}
            <section className={styles.article}>
                <div className="container-fluid my-5 px-5 mx-auto">
                    <div className="row">
                        {/* <!-- Sidebar Navbar (col-md-3) --> */}
                        <div className="col-md-3 col-12">
                            <nav className={`${styles.sidebar} p-3`} style={{ position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
                                {/* <!-- Sticky sidebar --> */}
                                <h5>Table of Contents</h5>
                                {
                                    data.info.map((dataInfo) => (
                                        <ul className="nav flex-column" key={dataInfo.id}>
                                            <li className="nav-item">
                                                {
                                                    dataInfo.title && (
                                                        <a className="nav-link text-decoration-none" href={`#${dataInfo.id}`}>{dataInfo.title} </a>
                                                    )
                                                }
                                                {
                                                    dataInfo.caption_one && (
                                                        <a className="nav-link text-decoration-none" href={`#${dataInfo.id}`}>{dataInfo.caption_one}</a>
                                                    )
                                                }
                                                {
                                                    dataInfo.caption_two && (
                                                        <a className="nav-link text-decoration-none" href={`#${dataInfo.id}`}>{dataInfo.caption_two}</a>
                                                    )
                                                }
                                            </li>
                                        </ul>
                                    ))
                                }
                            </nav>
                        </div>
                        {/* <!-- Main Reading Area (col-md-9) --> */}
                        <div className="col-md-9 col-12">
                            {data.info.map((articleInfo) => (
                                <div className={`${styles.content} p-3`} key={articleInfo.id}>
                                    {/* Title */}
                                    <p className={`${styles.title} mb-4 pt-3`} id={articleInfo.id}>
                                        {articleInfo.title}
                                    </p>

                                    {/* Subtitle */}
                                    <p className={`${styles.subTitle} text-center`}>
                                        {articleInfo.subtitle}
                                    </p>
                                    {/* Flag One */}
                                    {articleInfo.flag_one && (
                                        <div className="d-flex flex-column justify-content-center align-items-center"
                                            id={articleInfo.id}>
                                            <img className={styles.flagImg} src={articleInfo.flag_one} alt={articleInfo.caption_one} />
                                            <span className={styles.subheading}>{articleInfo.caption_one}</span>
                                        </div>
                                    )}
                                    {/* Article Information */}
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
                                    {/* Flag Two */}
                                    {articleInfo.flag_two && articleInfo.caption_two && (
                                        <div className="d-flex flex-column justify-content-center align-items-center py-5"
                                            id={articleInfo.id}>
                                            <img className={styles.flagImg} src={articleInfo.flag_two} alt={articleInfo.caption_two} />
                                            <span className={styles.subheading}>{articleInfo.caption_two}</span>
                                        </div>
                                    )}
                                    {/* Description */}
                                    <p className={styles.para} dangerouslySetInnerHTML={{ __html: articleInfo.description }} >
                                    </p>
                                    <div id={styles.images}>
                                        {articleInfo.image && (
                                            <>
                                                <img className="my-2" src={articleInfo.image} alt={articleInfo.title} />
                                                <span>{articleInfo.label}</span>
                                            </>
                                        )}
                                    </div>                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

    )
}

export default HistoryLayout; 