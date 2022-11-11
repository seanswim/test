import Link from 'next/link';
import { useRouter } from 'next/router';

export const SideMenu = ({ children, fileStructure }) => {

  const router = useRouter();
  
  const renderFileStructure = (node) => {
    if (node.length === 0) return;
    
    if (node.type === 'file') {
      const fileName = node.name.split('.')[0];
      const link = node.link.split('/').slice(2).join('/');

      return (
        <Link href={`/post/${link}`} style={{fontWeight: router.asPath === `/post/${link}` ? 'bold' : ''}}>
          {fileName}
        </Link>
      )
    } else if (node.type === 'folder') {
      return (
        <div>
          {node.name}
          <div style={{marginLeft: '20px'}}>
            {node.dir.map((childnode, i) => (
              <div key={i}>{renderFileStructure(childnode)}</div>
            ))}
          </div>
        </div>
      )
    }
  }

  return (
    <div style={{width: '100%', border: '3px solid blue'}}>
      <div>
        {children}
      </div>
      <div>
        {fileStructure.map((node, i) => (
          <div key={i}>{renderFileStructure(node)}</div>
        ))}
      </div>
    </div>
  )
}

export default SideMenu;