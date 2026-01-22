import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
    {
        id: 1,
        name: "John Smith 1",
        position: "Marketing Director at XYZ Corp",
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    },
    {
        id: 2,
        name: "John Smith 2",
        position: "Marketing Director at XYZ Corp",
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    },
    {
        id: 3,
        name: "John Smith 3",
        position: "Marketing Director at XYZ Corp",
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    },
    {
        id: 4,
        name: "John Smith 4",
        position: "Marketing Director at XYZ Corp",
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    },
    {
        id: 5,
        name: "John Smith 5",
        position: "Marketing Director at XYZ Corp",
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    }
];

export const Slider = () => {
    const startSlide = 2;
    const [currentSlide, setCurrentSlide] = useState<number>(startSlide);
    const [slideWidth, setSlideWidth] = useState<number>(0)
    const [isTransition, setIsTransition] = useState<boolean>(true);
  
    const slidesContainerRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

    const calculateSlideWidth = useCallback(() => {
        if (slideRefs.current[0]) {
            const slide = slideRefs.current[0];
            const slideStyle = window.getComputedStyle(slide);
            const width = slide.offsetWidth;
            const marginLeft = parseFloat(slideStyle.marginLeft) || 0;
            const marginRight = parseFloat(slideStyle.marginRight) || 0;
            return width + marginLeft + marginRight;
        }
        return 0;
    }, []);

    useEffect(() => {
        const updateDimensions = () => {
            setSlideWidth(calculateSlideWidth());
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [calculateSlideWidth]);


    useEffect(() => {
        if (slidesContainerRef.current && slideWidth > 0) {
            const offset = (startSlide - currentSlide) * slideWidth;
            slidesContainerRef.current.style.transition = isTransition ? 'transform 0.5s ease-in-out' : 'none';
            slidesContainerRef.current.style.transform = `translateX(${offset}px)`;
        }
    }, [currentSlide, slideWidth, isTransition]);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(prev => prev + 1);
            setIsTransition(true);
        } else {
            setIsTransition(true);
            setCurrentSlide(0);
        
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
            setIsTransition(true);
        } else {
            setIsTransition(true);
            setCurrentSlide(slides.length - 1);
        }
    };

    const goToSlide = (index: number) => {
        if (index >= 0 && index < slides.length) {
            setCurrentSlide(index);
            setIsTransition(true);
        }
    };

    const setSlideRef = (index: number) => (el: HTMLDivElement | null) => {
        slideRefs.current[index] = el;
    };


    return (
        <div className="testimonials" id="slider">
            <div 
                className="slides" 
                ref={slidesContainerRef}
            >
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        ref={setSlideRef(index)}
                    >
                        <div className="bubble">
                            <p>{slide.text}</p>
                        </div>
                        <div className="who-said">
                            <h4 className="color-B9FF66">{slide.name}</h4>
                            <span className="color-FFFFFF">{slide.position}</span>
                        </div>
                    </div>
                ))}
            </div>
        
        <div className="slider-btn prev" onClick={prevSlide} role="button" tabIndex={0}>❮</div>
        <div className="slider-btn next" onClick={nextSlide} role="button" tabIndex={0}>❯</div>
        
        <div className="slider-dots" role="tablist">
            {slides.map((_, index) => (
                <button 
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Перейти к слайду ${index + 1}`}
                    type="button"
                />
            ))}
        </div>
      </div>
    );
}