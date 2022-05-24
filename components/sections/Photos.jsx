import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Image from 'next/image'

function Photos() {
  return (
    <PageSection>
      <InnerWrapper>
        <div className='grid h-full grid-cols-2 gap-2 md:grid-cols-4'>
          <div className='relative w-full col-span-1 aspect-w-3 aspect-h-5'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/christmas.jpg'}
              src={'/img/christmas.jpg'}
              alt={'Carlos and Seanna at a work christmas party'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full col-span-1 aspect-w-3 aspect-h-5'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/backlit.jpg'}
              src={'/img/backlit.jpg'}
              alt={'Carlos and Seanna posing for a photo with lights behind them'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full col-span-1 aspect-w-3 aspect-h-5'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/christmas-2.jpg'}
              src={'/img/christmas-2.jpg'}
              alt={'Carlos and Seanna at a work christmas party'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full col-span-1 aspect-w-3 aspect-h-5'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/first-photo.jpg'}
              src={'/img/first-photo.jpg'}
              alt={'Seanna and Carlos first photo.'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Photos
