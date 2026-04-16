import style from '../platform/platform.module.scss';
import 'bootstrap';

interface PlatformProps {
    color: string,
}

function Platform({ data }: { data: PlatformProps }) {
    return (
        <section className={style.platform} style={{ '--color': `${data.color}` } as React.CSSProperties}>
            <div className="container">
                <div className={`${style.subTitle} my-4 my-md-5`}>
                    <h1 className="py-2 scroll-section slide-in-right">Seamless Platforms for Every Format</h1>
                </div>
                <div className="row justify-content-center text-center mx-auto scroll-section slide-in-left g-4">
                    <div className="col-12 col-md-5 col-lg-4">
                        <div id={style.blueSquare}>
                            <h2>Remote/Online</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4">
                        <div id={style.blueSquare}>
                            <h2>In-Person</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Platform;
