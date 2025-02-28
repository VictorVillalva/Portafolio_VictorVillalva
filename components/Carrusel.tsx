'use client'
import Image from 'next/image';
import React, { useRef} from 'react';
import { projects } from '../public/data/data'; // Ensure that the file exists at this path or update the path accordingly

const ScrollCarousel = () => {
    const carouselRef1 = useRef<HTMLDivElement>(null!);
    const carouselRef2 = useRef<HTMLDivElement>(null!);
    const lastScroll = useRef(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            lastScroll.current = currentScroll;

            const applyScrollEffect = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
                if (ref.current) {
                    const scrollOffset = currentScroll * 0.5; // Aquí se ajusta la velocidad
                    ref.current.style.transform = direction === 'left' 
                        ? `translateX(-${scrollOffset}px)` 
                        : `translateX(${scrollOffset}px)`;
                }
            };

            applyScrollEffect(carouselRef1, 'left');
            applyScrollEffect(carouselRef2, 'right');
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className=' flex flex-col gap-10 w-full overflow-hidden'>
            <div className='flex flex-row gap-6 h-[340]'>
                <div ref={carouselRef1} className="flex gap-6 transition-transform ease-linear justify-center">
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[0].image}
                            alt={projects[0].title}
                            width={130}
                            height={290}
                            layout='cover'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[1].image}
                            alt={projects[1].title}
                            width={130}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[2].image}
                            alt={projects[2].title}
                            width={130}
                            height={290}
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[3].image}
                            alt={projects[3].title}
                            width={400}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[4].image}
                            alt={projects[4].title}
                            width={130}
                            height={290}
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[5].image}
                            alt={projects[5].title}
                            width={400}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[6].image}
                            alt={projects[6].title}
                            width={400}
                            height={290}
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[7].image}
                            alt={projects[7].title}
                            width={130}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[8].image}
                            alt={projects[8].title}
                            width={130}
                            height={290}
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[9].image}
                            alt={projects[9].title}
                            width={400}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[10].image}
                            alt={projects[10].title}
                            width={130}
                            height={290}
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[11].image}
                            alt={projects[11].title}
                            width={400}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                </div>
                
            </div>
            <div className='flex flex-row gap-6 h-[340]'>
                <div ref={carouselRef2} className="flex gap-6 transition-transform ease-linear justify-center">
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[0].image}
                            alt={projects[0].title}
                            width={130}
                            height={290}
                            layout='cover'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[1].image}
                            alt={projects[1].title}
                            width={130}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[2].image}
                            alt={projects[2].title}
                            width={130}
                            height={290}
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[3].image}
                            alt={projects[3].title}
                            width={400}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[4].image}
                            alt={projects[4].title}
                            width={130}
                            height={290}
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[5].image}
                            alt={projects[5].title}
                            width={400}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[6].image}
                            alt={projects[6].title}
                            width={400}
                            height={290}
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[7].image}
                            alt={projects[7].title}
                            width={130}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[8].image}
                            alt={projects[8].title}
                            width={130}
                            height={290}
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[9].image}
                            alt={projects[9].title}
                            width={400}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-start flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[10].image}
                            alt={projects[10].title}
                            width={130}
                            height={290}
                            layout='fixed'
                        />   
                    </div>
                    <div className='h-full flex flex-col justify-end flex-shrink-0 overflow-hidden'>
                        <Image
                            src={projects[11].image}
                            alt={projects[11].title}
                            width={400}
                            height={290} 
                            layout='fixed'
                        />   
                    </div>
                </div>
                
            </div>
        </div> 
    );
};

export default ScrollCarousel;