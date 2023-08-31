interface HamburgerProps {
  onClick: () => void
}

export const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <label className='relative w-8 h-6 bg-transparent cursor-pointer block z-20'>
      <input type='checkbox' className='hidden peer' onClick={onClick} />
      <span className='span-hamburger top-0 origin-left-center peer-checked:rotate-45 peer-checked:top-0 peer-checked:left-[0.313rem]'></span>
      <span className='span-hamburger top-1/2 -translate-y-1/2 origin-left-center peer-checked:w-0 peer-checked:opacity-0'></span>
      <span className='span-hamburger top-full origin-left-center -translate-y-full peer-checked:-rotate-45 peer-checked:top-[1.688rem] peer-checked:left-[0.313rem]'></span>
    </label>
  )
}
