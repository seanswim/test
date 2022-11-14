import Head from 'next/head';
import Frame from 'src/components/layouts/Frame';
import fs from 'fs';
import path from 'path';
import Banner from 'src/components/Banner';
import Card from 'src/components/Card';
import { Stack, Grid, Typography, Pagination } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Home({fileStructure}) {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const contentsNperPage = 20;

  const extractPosts = () => {
    let memo = [];

    const recursive = (arr) => {
      if (arr.length === 0) return;
      arr.forEach((el, i) => {
        if (el.type === 'file') memo.push(el);
        if (el.type === 'folder') recursive(el.dir);
      })
    }

    recursive(fileStructure);
    setPosts(memo);
  }

  const handleChange = (e, value) => {
    setPage(value -1)
  }


  useEffect(() => {
    extractPosts();
  }, [])

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
              {posts.slice(contentsNperPage*page, contentsNperPage*(page+1)).map((post, i) => {
                let arr = post.link.split('contents/')[1].split('/');
                let categoryArr = arr.slice(0, -1)
                let linkArr = ['post', ...arr]
                
                const category = categoryArr.join(' / ');
                const link = linkArr.join('/');

                return (
                <Grid key={i} item md={4}>
                  <Card 
                    title={post.name.split('.')[0]}
                    category={category}
                    link={link}
                  />
                </Grid>
              )})}
            </Grid>
            <Stack direction='row' sx={{py: 10, justifyContent: 'center'}}>
              <Pagination count={Math.ceil(posts.length/contentsNperPage)} color="primary" onChange={handleChange}/>
            </Stack>
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
