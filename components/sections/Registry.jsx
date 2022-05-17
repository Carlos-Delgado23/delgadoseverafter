import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Link from 'next/link'

function Registry({ num }) {
  return (
    <PageSection color={'cream'} id='registry'>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Registry
        </H2>
        <p className='mt-1 mb-6 font-semibold font-cormorant'>
          Gifts are not expected and we are just excited to have you join us. We don’t have a formal
          registry, but you can contribute to cash funds if you’d like! These are set up via
          Zola.com and have been designated for our honeymoon.
        </p>
        <p className='mb-6 font-semibold font-cormorant'>
          Anything is greatly appreciated &#x1F496;
        </p>
        <Link href={'https://www.zola.com/registry/carlosandseanna'} data-registry-key="carlosandseanna" passHref>
          <a className='font-semibold button font-cormorant' rel='noOpener' target={'_blank'}>
            View Registry &rarr;
          </a>
        </Link>
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
