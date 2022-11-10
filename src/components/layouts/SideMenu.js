import Link from 'next/link';

export const SideMenu = ({ children, fileStructure }) => {

  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

  console.log(prefix)

  const renderFileStructure = (node) => {
    if (node.length === 0) return;

    if (node.type === 'file') {
      const fileName = node.name.split('.')[0];
      const link = node.link.split('/').slice(2).join('/');

      return (
        <Link href={`${prefix}/post/${link}`}>
          {fileName}
        </Link>
      )
    } else if (node.type === 'folder') {
      return (
        <div>
          {node.name}
          <div style={{marginLeft: '20px'}}>
            {node.dir.map((childnode, i) => (
              renderFileStructure(childnode)
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