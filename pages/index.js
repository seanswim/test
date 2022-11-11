import Head from 'next/head';
import Footer from 'src/components/layouts/Footer';
import Frame from 'src/components/layouts/Frame';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import boi from 'src/image/boi.gif';

export default function Home({fileStructure}) {

  return (
    <div>
      <Head>
        <title>Fairlabs Enlight</title>
        <meta name="description" content="Fairlabs Enlight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Frame fileStructure={fileStructure}>
          <div>
            Landing page
            <Image src={boi} />
          </div>
        </Frame>
      </main>

      <footer>
        <Footer>
          Footer
        </Footer>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {

  const root = 'src/contents';

  const makeFileStructure = (treePath) => {    

    const node = fs.readdirSync(treePath);
    if (node.length === 0) return [];
    let nodeTree = [];

    node.forEach((childNode, i) => {
      const address = path.join(treePath, childNode);
      const isDirectory = fs.lstatSync(address).isDirectory();
      if (isDirectory) {
        nodeTree.push({
          name: childNode,
          type: 'folder',
          link: address,
          dir: [],
        })
        nodeTree[nodeTree.length-1].dir = makeFileStructure(address);
      } else {
        nodeTree.push({
          name: childNode,
          type: 'file',
          link: address,
        })
      }
    })

    return nodeTree;
  };

  const fileStructure = makeFileStructure(root, []);

  return {
    props: {
      fileStructure: fileStructure
    },
  };
};
