import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Image from 'next/image'
function Registry({ num }) {
  return (
    <PageSection color={'cream-light'} id='answers'>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Answers
        </H2>

        <ul className='grid grid-cols-1 gap-8'>
          <li>
            <p className='pt-0 pb-0 mt-0 mb-0 text-2xl font-semibold leading-none font-cormorant'>What to wear?</p>
            <p className='mt-1 mb-0 font-cormorant'>Formal/Cocktail attire</p>
            <p className='pt-0 mt-1 mb-0 capitalize font-cormorant'>**Please do not wear white**</p>
          </li>
          <li>
            <p className='pt-0 pb-0 mt-0 mb-0 text-2xl font-semibold leading-none font-cormorant '>Outdoor or Indoor?</p>
            <p className='mt-1 font-cormorant'>
              The ceremony will take place outside and the reception will follow afterwards indoors
            </p>
          </li>
          <li>
            <p className='pt-0 pb-0 mt-0 mb-0 text-2xl font-semibold leading-none font-cormorant '>Parking?</p>
            <p className='mt-1 font-cormorant'>
              All parking will be at the location
            </p>
          </li>
          <li>
            <p className='pt-0 pb-0 mt-0 mb-0 text-2xl font-semibold leading-none font-cormorant '>Kids?</p>
            <p className='mt-1 font-cormorant'>
              We prefer, if you are able, to leave children with a sitter for the evening.
            </p>
            <p className='mt-1 font-cormorant'>If you are bringing small children we ask that you please sit towards the back of the ceremony near the reception hall.</p>
            <p className='mt-2 mb-0 font-cormorant'>Babysitter recommendation service: Northside Sitters</p>
            <p className='my-0 font-cormorant'>www.northsidesittersclub.com</p>
            <p className='my-0 font-cormorant'>210-710-7940</p>
          </li>
          <li>
            <p className='pt-0 pb-0 mt-0 mb-0 text-2xl font-semibold leading-none font-cormorant '>Cell Phones?</p>
            <p className='mt-1 font-cormorant'>
              We ask all guests to please put their cellphones & cameras away during the ceremony.
            </p>
          </li>
          <li>
            <p className='pt-0 pb-0 mt-0 mb-0 text-2xl font-semibold leading-none font-cormorant'>Photographer?</p>{' '}
            <p className='mt-1 font-semibold font-cormorant'>
              <a
                href='https://www.instagram.com/chaseandkree/?hl=en'
                target={'_blank'}
                rel='noreferrer'
                className='border-b hover:text-opacity-75'
              >
                @chaseandkree
              </a>
            </p>
          </li>
        </ul>
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
