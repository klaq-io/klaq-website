'use client'
import React from 'react'
import { BackgroundBeams } from '../components/ui/background-beams'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'

export function Beta() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md bg-neutral-950 antialiased">
      {/* <Logo className="absolute left-0 top-0 z-10 h-10 w-auto justify-center" /> */}
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="relative z-10 flex items-center  space-x-4 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text  text-center font-sans text-lg font-bold text-transparent md:text-7xl">
          Simplifiez votre quotidien d'artiste-entrepreneur !
        </h1>
        <p></p>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          Klaq est LA plateforme tout-en-un dédiée aux prestataires événementiels. Gérez au même endroit votre cycle de vente, vos factures et encore plus. 
          Notre mantra : booster votre créativité en simplifiant votre quotidien !

        </p>
        <div className="flex items-center justify-center">
          <Button
            href="https://tidycal.com/klaq/demo"
            color="white"
            className="relative z-10 mt-10 text-center"
          >
            Essayer gratuitement klaq !
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}
