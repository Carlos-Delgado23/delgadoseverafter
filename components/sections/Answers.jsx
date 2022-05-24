import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import QuestionCard from '@parts/QuestionCard'
import Image from 'next/image'
function Registry({ num }) {
  return (
    <PageSection color={'cream-light'} id='answers'>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Answers
        </H2>

        <div className='grid grid-cols-1 gap-4 xl:w-1/2'>
          <QuestionCard
            question='What to wear?'
            answer='Formal/Cocktail attire'
            tip='** Please do not wear white **'
          />
          <QuestionCard
            question='Outdoor or Indoor?'
            answer='The ceremony will take place outside and the receoption will follow afterwards indoors'
          />
          <QuestionCard
            question='Parking?'
            answer='All parking will be at the location'
          />
          <QuestionCard
            question='Kids?'
            answer='We prefer, if you are able, to leave children with a sitter for the evening'
            tip='If you are bringing small children we ask that you please sit towards the back of the ceremony near the reception hall'
            children={
              <div className='p-4 mt-4 rounded-md bg-cream-light'>
                <p className='mt-0 mb-2 text-2xl font-semibold font-cormorant'>Babysitting service: </p>
                <div className='flex gap-8'>
                  <div className='flex items-center gap-2 px-2 bg-black border rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cream-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <p className='my-0 font-cormorant'>
                      <a
                        href="https://www.northsidesittersclub.com/contact-us--0a0955d6-ba00-4527-a9a7-de60bb0bd9fb"
                        target={'_blank'}
                        rel='noreferrer'
                        className='font-semibold text-cream-light hover:text-opacity-75'>
                        Northside Sitters
                      </a>
                    </p>
                  </div>
                  <div className='flex items-center gap-2 px-2 bg-black border rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cream-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                    <p className='my-0 font-semibold text-cream-light font-cormorant hover:text-opacity-75'>
                      <a href="tel:210-710-7940">210-710-7940</a>
                    </p>
                  </div>
                </div>
              </div>
            }
          />
          <QuestionCard
            question='Cell Phones?'
            answer='We ask all guests to please put their cellphones & cameras away during the ceremony'
          />
          <QuestionCard
            question='Photographer?'
            children={
              <div className='flex items-center gap-2 px-2 border rounded-md w-44 bg-cream-light'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
                <p className='m-0 font-semibold font-cormorant'>
                  <a
                    href='https://www.instagram.com/chaseandkree/?hl=en'
                    target={'_blank'}
                    rel='noreferrer'
                    className='text-black hover:text-opacity-75'
                  >
                    @ChaseAndKree
                  </a>
                </p>
              </div>
            }
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
