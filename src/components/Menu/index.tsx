interface MenuProps extends React.ComponentProps<'div'> {
  isOpen: boolean
}

export const Menu = (props: MenuProps) => {
  return (
    <div
      {...props}
      data-menu={props.isOpen}
      className='absolute top-0 right-0 z-10 w-screen  h-screen transition-all translate-x-full bg-royal data-[menu=true]:translate-x-0'
    >
      <h1>Menu</h1>
    </div>
  )
}
