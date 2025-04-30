import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';

const images = [
  '/images/kid.jpg',
  '/images/lady.jpg',
  '/images/tree.jpg',
  '/images/duck.jpg',
  '/images/zebras.jpg',
  '/images/car.jpg',
  '/images/camera.jpg',
];

const Gallery = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const total = images.length;
  const step = 1 / (total - 1); // One less because we’re crossfading

  return (
    <div ref={containerRef} className="w-full h-[900vh] relative">
      <div className="sticky w-full top-0 h-screen flex flex-col justify-evenly items-center-safe">
        <div className=' text-center w-[calc(100%-3rem)] text-secondary text-shadow-xs '>
          <h1><i><q>Life's a dance you learn as you go, sometimes you lead sometimes you follow, don't worry about what you don't know.</q></i></h1>
          <p><i>- John Michael Montgomery</i></p>
        </div>
        <div className='w-full flex-col flex justify-center-safe items-center-safe gap-3'>
          <h1 className='text-[#542102] font-bold text-xl tracking-tighter'>Galeri</h1>
          <div className="relative w-full h-[400px] overflow-hidden">
            {images.map((src, i) => {
              const inputRange = [
                (i - 1) * step,
                i * step,
                (i + 1) * step,
              ];
              
              const outputRange = [0, 1, 0];
              
              const opacity = useTransform(scrollYProgress, inputRange, outputRange);
              
              return (

                < motion.div 
                  key={i}
                  className=''
                  style={{ opacity }}>

                    <img
                    src={src}
                    alt={`image-${i}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    
                    />
                </motion.div>
              );
            })}
            </div>
            <h1 className='text-[#542102] font-bold text-xl tracking-tighter'>Moments throughout the years</h1>
        </div>
        <div className='text-center w-[calc(100%-2rem)] text-secondary text-shadow-xs '>
          <h1 ><i><q>Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.</q></i></h1>
          <p><i>- Maya Angelou</i></p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
