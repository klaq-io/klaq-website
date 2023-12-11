'use client'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import fr_trad from '@/lang/fr.json'
import { flatten } from 'flat'
import { IntlProvider } from 'react-intl'

export default function Home() {
  return (
    <>
      <IntlProvider
        locale={'fr'}
        messages={flatten(fr_trad)}
        defaultLocale="fr"
      >
        <Header />
        <main>
          <Hero />
          <Pricing />
          <Testimonials />
          <PrimaryFeatures />
          
          
          
          
          <CallToAction />
        </main>
        <Footer />
      </IntlProvider>
    </>
  )
}

// <SecondaryFeatures />
// <Faqs />