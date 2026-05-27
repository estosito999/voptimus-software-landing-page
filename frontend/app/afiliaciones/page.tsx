import Navbar from '@/components/Navbar'
import PromoterAffiliates from '@/components/PromoterAffiliates'
import OpportunityContactForm from '@/components/OpportunityContactForm'
import Footer from '@/components/Footer'

export default function AffiliationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PromoterAffiliates />
        <OpportunityContactForm type="promoter" />
      </main>
      <Footer />
    </>
  )
}
