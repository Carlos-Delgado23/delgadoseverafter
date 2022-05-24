import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H3 from '../typography/H3'
import Button_Filled from '@parts/Button_Filled'

function Details({ num }) {
  return (
    <PageSection color={'cream-light'} id='details'>
      <InnerWrapper color={''}>
        <H2 before={num} numColor='black' color='black'>
          Location & Time
        </H2>
        <div className='grid grid-cols-5 mt-8 gap-14'>
          <div className='col-span-5 pt-0 mt-0 md:col-span-4 xl:grid-cols-3'>
            <div className='pt-0 mt-0'>
              <p className='font-semibold text-black font-cormorant'>Monday, November 21st, 2022 / 5pm to 10pm</p>
              <p className='font-semibold text-black font-cormorant'>
                <span>Remi's Ridge at Hidden Falls</span>
                <br />
                2225 Bridal Veil, Spring Branch, TX 78070
              </p>
              <div>
                <Button_Filled
                  url='https://www.google.com/maps/d/u/0/edit?mid=1CvRSWlc_1E9EHdkzaEjvPvTy1rSHPbpn&usp=sharing'
                  text='Map'
                  className='border border-black'
                />
              </div>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Details
