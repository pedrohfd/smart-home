import { Hamburger } from '../Hamburger'

export const Header = () => {
  return (
    <header className='w-full pt-7 px-6 bg-royal absolute tracking-wider flex items-center justify-between'>
      <h1 className='text-zinc-50 text-[2rem] font-bold'>smartHome</h1>

      <Hamburger />
    </header>
  )
}
