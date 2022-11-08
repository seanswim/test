
export const SideMenu = ({ children }) => {

  console.log(process)

  return (
    <div style={{width: '100%', border: '3px solid blue'}}>
      {children}
    </div>
  )
}

export default SideMenu;