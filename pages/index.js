import Head from 'next/head';
import Frame from 'src/components/layouts/Frame';
import fs from 'fs';
import path from 'path';
import Banner from 'src/components/Banner';
import Card from 'src/components/Card';
import { Stack, Grid, Typography } from '@mui/material';

export default function Home({fileStructure}) {

  return (
    <div>
      <Head>
        <title>Fairlabs Enlight</title>
        <meta name="description" content="Fairlabs Enlight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Frame 
          banner={<Banner />}
          fileStructure={fileStructure}
        >
          <Stack spacing={2}>
            <Typography sx={{fontSize: '32px', fontWeight: '600'}}>All</Typography>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Card 
                  title={'How to make a blog'}
                  category={'fairlabs/frontend/sean'}
                />
              </Grid>
              <Grid item md={4}>
                <Card 
                  title={'How to make a blog'}
                  category={'fairlabs/frontend/sean'}
                />
              </Grid>
              <Grid item md={4}>
                <Card 
                  title={'How to make a blog'}
                  category={'fairlabs/frontend/sean'}
                />
              </Grid>
              <Grid item md={4}>
                <Card 
                  title={'How to make a blog'}
                  category={'fairlabs/frontend/sean'}
                />
              </Grid>
              <Grid item md={4}>
                <Card 
                  title={'How to make a blog'}
                  category={'fairlabs/frontend/sean'}
                />
              </Grid>
              <Grid item md={4}>
                <Card 
                  title={'How to make a blog'}
                  category={'fairlabs/frontend/sean'}
                />
              </Grid>
              <Grid item md={4}>
                <Card 
                  title={'How to make a blog'}
                  category={'fairlabs/frontend/sean'}
                />
              </Grid>
            </Grid>
          </Stack>
        </Frame>
      </main>
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
          open: true,
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
