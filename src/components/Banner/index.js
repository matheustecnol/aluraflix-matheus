import styles from './Banner.module.css';
import React, { useState, useEffect } from 'react';

function Banner() {
    const imagens = ['01', '02', '03']; // Add your image identifiers here
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % imagens.length);
        }, 7000); // Change image every 7 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, [imagens.length]);

    return (
        <div className={styles.capa}>
            <div className={styles.capaCont}
                style={{ backgroundImage: `url('/imagens/banner-${imagens[currentImage]}.jpg')` }}>
            </div>
        </div>
    );
}

export default Banner;
