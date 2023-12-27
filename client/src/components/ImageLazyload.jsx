import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ImageLazyload({ alt, height, src, width }) {
    return (
        <div className=' object-cover'>
            <LazyLoadImage
                alt={alt}
                src={src}
            // use normal <img> attributes as props
            />
        </div>
    )
}

export default ImageLazyload;