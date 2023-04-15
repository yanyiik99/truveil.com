
function Container({ children}) {
    return (
      <div className="max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-2 mx-auto">
        {children}
      </div>
    )
  }
  
  export default Container;