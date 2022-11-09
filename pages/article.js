import { useState, useEffect } from 'react';
import Head from 'next/head';
import Test from 'src/contents/Test.json';
import { IpynbRenderer } from "react-ipynb-renderer";
import dynamic from 'next/dynamic';
import Footer from 'src/components/layouts/Footer';
import Frame from 'src/components/layouts/Frame';
import fs from 'fs';
import path from 'path';

export default function Article({fileStructure}) {


  const ipynb = Test;
  let ipynbCells = Test.cells;
  const [cells, setCells] = useState([]);
  const PlotGraph = dynamic(import('src/components/PlotGraph'),{ssr: false});

  const categorizeTypes = () => {
    let arr = [];
    ipynbCells.forEach((el, i) => {
      if (el.outputs && el.outputs[0] && el.outputs[0].data && el.outputs[0].data["application/vnd.plotly.v1+json"]) {
        arr.push({type: 'cell', data: eliminateOutputs(el)});
        arr.push({type: 'plotly', data: el});
      } else {
        arr.push({type: 'cell', data: el});
      }
    })
    setCells(arr);
  };

  const eliminateOutputs = (obj) => {
    const deepCopiedObj = JSON.parse(JSON.stringify(obj));
    deepCopiedObj.outputs = [];
    return deepCopiedObj;
  }

  useEffect(() => {
    categorizeTypes();
  },[])

  return (
    <div>
      <Head>
        <title>Fairlabs Enlight</title>
        <meta name="description" content="Fairlabs Enlight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Frame fileStructure={fileStructure}>
          {cells.map((el, i) => {
            if(el.type === 'cell') {
              return (
                <IpynbRenderer
                key={i}
                ipynb={{cells: [el.data]}}
                syntaxTheme="xonokai"
                language="python"
                bgTransparent={true}
                />
              )
            } else if (el.type === 'plotly') {
              return (el.data.outputs.map((output, i) => {
                return (
                  <div key={i}>
                    <PlotGraph
                      data={output.data["application/vnd.plotly.v1+json"].data}
                      layout={output.data["application/vnd.plotly.v1+json"].layout}
                    />
                  </div>
                )
              }))
            }
          })}

          <div>
            Article
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
          dir: [],
        })
        nodeTree[nodeTree.length-1].dir = makeFileStructure(address);
      } else {
        nodeTree.push({
          name: childNode,
          type: 'file'
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