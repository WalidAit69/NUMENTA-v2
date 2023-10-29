
const Landinglayout = ({children} : {children:React.ReactNode}) => {
  return (
    <div className="h-full bg-[#dfdfe0] overflow-auto">
        <div className="mx-auto lg:max-w-screen-2xl md:max-w-screen-md max-w-screen-sm h-full w-full">
            {children}
        </div>
    </div>
  )
}

export default Landinglayout