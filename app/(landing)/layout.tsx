
const Landinglayout = ({children} : {children:React.ReactNode}) => {
  return (
    <div className="h-full bg-black overflow-auto">
        <div className="h-full w-full">
            {children}
        </div>
    </div>
  )
}

export default Landinglayout