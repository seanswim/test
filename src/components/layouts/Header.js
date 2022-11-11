import Logo from 'src/image/logo.svg';
import Image from 'next/image';

export const Header = ({ children }) => {
  return (
    <div style={{width: '100%', border: '3px solid red'}}>
      <Image 
        src={Logo} 
        width={150}
        onClick={() => window.location.href = 'https://www.fairlabs.io'}
        style={{cursor: 'pointer'}}
      />
      {children}
    </div>
  )
}

export default Header;