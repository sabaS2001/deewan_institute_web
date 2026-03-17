import style from '../platform/platform.module.scss';
import 'bootstrap';


function Platform() {
    return (
        <section className={style.platform}>
            <div className={`${style.subTitle} my-5`}>
                <h1 className="py-2 scroll-section slide-in-right ">Seamless Platforms for Every Format</h1>
            </div>
            <div className="row justify-content-evenly text-center mx-auto scroll-section slide-in-left">
                <div className="col-4" id={style.blueSquare}>
                    <h2>Remote/Online</h2>
                </div>
                <div className="col-4" id={style.blueSquare}>
                    <h2>In-Person</h2>
                </div>
            </div>
        </section>
    )
}

export default Platform