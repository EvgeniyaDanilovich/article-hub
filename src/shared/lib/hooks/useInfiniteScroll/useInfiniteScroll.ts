import { MutableRefObject, useEffect } from 'react';

interface useInfiniteScrollProps {
    callBack?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({ wrapperRef, triggerRef, callBack }: useInfiniteScrollProps) => {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        let observer: IntersectionObserver | null = null;

        if (callBack) {
            const options = {
                root: wrapperElement,
                rootMargin: '20px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callBack();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                observer.unobserve(triggerElement);
            }
        };
    }, [callBack, triggerRef, wrapperRef]);
};
