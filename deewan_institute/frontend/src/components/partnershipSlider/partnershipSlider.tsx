import styles from "./partnershipSlider.module.scss";

function PartnershipSlider() {
    const partners = [
        { name: "The Good Bookshop", url: "https://goodbookshopjo.com/", img: "../assets/images/partnership/thegoodbookshop.png" },
        { name: "Save the Children", url: "https://savethechildren.org.jo/en", img: "../assets/images/partnership/savethechildren.png" },
        { name: "Medecins Sans Frontieres", url: "https://www.msf.org/", img: "../assets/images/partnership/partnership3.png" },
        { name: "Instituto de Cultura Árabe", url: "https://incaco.org/", img: "../assets/images/partnership/partnership4.webp" },
        { name: "Università Ca' Foscari", url: "https://www.unive.it/", img: "../assets/images/partnership/partnership5.webp" },
        { name: "Darna Hostel", url: "https://darnahostel.com/", img: "../assets/images/partnership/darnahostel.png" },
    ];

    return (
        <div className={`${styles.ourclients} container my-4 my-md-5`}>
            <div className={styles.clientsWrap}>
                <div className={styles.sliderTrack}>
                    {/* First Set - Original Partners */}
                    {partners.map((partner, index) => (
                        <div className={styles.slide} key={`original-${index}`}>
                            <a href={partner.url} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                                <img 
                                    className={styles.partnerImg} 
                                    src={partner.img} 
                                    alt={partner.name} 
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    ))}
                    
                    {/* Second Set - Duplicates for Seamless Loop */}
                    {partners.map((partner, index) => (
                        <div className={styles.slide} key={`duplicate-${index}`}>
                            <a href={partner.url} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                                <img 
                                    className={styles.partnerImg} 
                                    src={partner.img} 
                                    alt={partner.name} 
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PartnershipSlider;
