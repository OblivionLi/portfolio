import React, {useEffect, useState} from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const scrollableHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const GOLDEN_RATIO = 0.1;

        if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <button className={`scroll-to-top-button ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
                <ArrowCircleUpIcon className="scroll-to-top-button-i" />
            </button>
        </>
    );
}

export default ScrollToTop;