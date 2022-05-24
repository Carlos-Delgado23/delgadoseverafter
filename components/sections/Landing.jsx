import Image from 'next/image'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

function Landing() {
  let el = useRef()
  let q = gsap.utils.selector(el)

  useEffect(() => {
    gsap.set(q('.fadeIn'), { y: 10 })
    gsap.to(q('.fadeIn'), {
      delay: 1,
      autoAlpha: 1,
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'sine.inOut',
      stagger: 0.33,
    })
    return () => { }
  })
  return (
    <section className='relative w-screen max-h-screen py-24 mt-0 bg-cream-light px-14'>
      <div className='max-w-2xl mx-auto md:max-w-xl lg:max-w-8xl' ref={el}>
        <div>
          <div className='flex justify-center w-full opacity-0 aspect-square fadeIn'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/crest.png'}
              src={'/img/crest.png'}
              alt={'Carlos Delgado & Seanna M. Libby'}
              width='150px'
              height='170px'
            />
          </div>
          <h1 className='relative text-2xl font-semibold tracking-widest text-center opacity-0 text-grey sm:text-4xl md:text-4xl fadeIn'>
            Carlos & Seanna
          </h1>
        </div>
        <div className='grid max-h-screen grid-cols-2 gap-1 mt-8 lg:grid-cols-4'>
          <div className='relative w-full opacity-0 aspect-square fadeIn'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/proposal-walk-in.jpg'}
              src={'/img/proposal-walk-in.jpg'}
              alt={'Carlos Delgado & Seanna M. Libby'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full opacity-0 aspect-w-1 aspect-h-1 fadeIn'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/proposal-kneeling.jpg'}
              src={'/img/proposal-kneeling.jpg'}
              alt={'Carlos Delgado & Seanna M. Libby'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full opacity-0 aspect-w-1 aspect-h-1 fadeIn'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/proposal-both-kneeling.jpg'}
              src={'/img/proposal-both-kneeling.jpg'}
              alt={'Carlos Delgado & Seanna M. Libby'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full opacity-0 aspect-w-1 aspect-h-1 fadeIn'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/proposal-putting-on-ring.jpg'}
              src={'/img/proposal-putting-on-ring.jpg'}
              alt={'Carlos Delgado & Seanna M. Libby'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Landing
