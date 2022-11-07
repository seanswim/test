import { useState, useEffect } from 'react';
import Head from 'next/head'
import Test from 'src/contents/Test.json';
import { IpynbRenderer } from "react-ipynb-renderer";
import dynamic from 'next/dynamic';

export default function Home() {
  
  const ipynb = Test;
  let ipynbCells = Test.cells;
  const [cells, setCells] = useState([]);
  const PlotGraph = dynamic(import('src/components/PlotGraph'),{ssr: false});

  console.log(ipynbCells)

  const categorizeTypes = () => {
    let arr = [];
    ipynbCells.forEach((el, i) => {
      if (el.outputs && el.outputs[0] && el.outputs[0].data && el.outputs[0].data["application/vnd.plotly.v1+json"]) {
        // arr.push({type: 'cell', data: eliminateOutputs(el)});
        arr.push({type: 'plotly', data: el});
      } else {
        arr.push({type: 'cell', data: el});
      }
    })
    setCells(arr);
  };

  const eliminateOutputs = (obj) => {
    obj.outputs = [];
    return obj;
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
            console.log('plotly', el)
            return (
              <>
              ejfialwfj
                <PlotGraph
                  data={el.data.outputs[0].data["application/vnd.plotly.v1+json"].data}
                  layout={el.data.outputs[0].data["application/vnd.plotly.v1+json"].layout}
                  // frames={this.state.frames}
                  // config={this.state.config}
                  // onInitialized={(figure) => this.setState(figure)}
                  // onUpdate={(figure) => this.setState(figure)}
                />
              </>
            )
          }
        })}
      </main>

      <footer>
       footer
      </footer>
    </div>
  )
}
