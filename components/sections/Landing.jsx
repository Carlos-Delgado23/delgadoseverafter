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
        {/* <div className='flex flex-col justify-end w-full h-full py-12 mt-12 font-black opacity-0 sm:hidden lg:flex fadeIn'>
          <h1 className='z-20 self-center pr-20 text-black xl:scale-125'>
            <span className='block text-8xl'>Ope.</span>
            <span className='relative block -mr-16 text-3xl text-right'>We Eloped.</span>
          </h1>
        </div> */}
          <h1 className='relative text-2xl font-semibold tracking-widest text-center text-black opacity-0 sm:text-4xl md:text-4xl fadeIn'>
            Carlos & Seanna
          </h1>
        </div>
        <div className='grid max-h-screen grid-cols-2 gap-1 mt-8 lg:grid-cols-4'>
          <div className='relative w-full opacity-0 aspect-square fadeIn'>
            <Image
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
