import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import RSVP_Form from '@parts/RSVP_Form'

function Registry({ num }) {
  return (
    <PageSection color={'cream-light'} id='rsvp'>
      <InnerWrapper>
        <H2 before={num}>
          RSVP
        </H2>
        <RSVP_Form />
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
