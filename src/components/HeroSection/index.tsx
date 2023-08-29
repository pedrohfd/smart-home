import { Ellipse } from '@/assets/svg/ellipse'
import heroImage from '@/assets/hero-image.svg'
import LineImage from '@/assets/line.svg'
import AppleImage from '@/assets/apple.svg'
import GoogleImage from '@/assets/google.svg'
import ScrollArrow from '@/assets/scroll-down-arrow.svg'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <>
      <section className='bg-royal pt-28 text-center pb-48'>
        <Ellipse className='absolute top-0 right-0' />

        <h1 className='text-zinc-50 text-6xl leading-none font-extrabold'>
          Smart Home Application
        </h1>

        <p className='text-zinc-50 text-lg leading-normal px-16 mt-8'>
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </p>

        <Image
          src={heroImage}
          alt='hero section image'
          className='w-full absolute mt-8'
        />
        <Image
          src={LineImage}
          alt='Line'
          className='h-full absolute right-0 top-100'
        />
      </section>

      <section className='flex mt-24 px-8'>
        <Image src={AppleImage} alt='Apple' className='h-10' />
        <Image src={GoogleImage} alt='Google' className='h-10' />
      </section>
    </>
  )
}
