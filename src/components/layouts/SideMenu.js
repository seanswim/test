import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  List,
  Stack,
  Typography,
} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export const SideMenu = ({ children, fileStructure }) => {

  const router = useRouter();
  const [fileStructureState, setFileStructureState] = useState(fileStructure);

  const handleOpen = (node) => {
    const result = handleOpenState(fileStructureState, node);
    setFileStructureState(result);
  }

  const handleOpenState = (tree, node) => {
    const deepCopy = JSON.parse(JSON.stringify(tree));
    deepCopy.forEach((el, i) => {
      if (el.link === node.link) {
        el.open = !el.open;
      } else if (el.dir && el.dir.length > 0) {
        deepCopy[i].dir = handleOpenState(el.dir, node);
      }
    })
    return deepCopy;
  }
  
  const renderFileStructure = (node) => {
    if (node.length === 0) return;
    
    if (node.type === 'file') {
      const fileName = node.name.split('.')[0];
      const link = node.link.split('/').slice(2).join('/');

      return (
        <Link href={`/post/${link}`}>
          <ListItemButton
            sx={{
              mb: '10px'
            }}
          >
            <ListItemIcon>
              <InsertDriveFileIcon />
            </ListItemIcon>
            <ListItemText 
              secondary={fileName} 
              sx={{
                '.MuiTypography-root': {
                  fontWeight: router.asPath === `/post/${encodeURI(link)}` ? 'bold' : '',
                  color: router.asPath === `/post/${encodeURI(link)}` ? 'black' : ''
              }}}
            />
          </ListItemButton>
        </Link>
      )
    } 
    else if (node.type === 'folder') {
      return (
        <Stack>
          <ListItemButton
            onClick={() => handleOpen(node)}
            sx={{
              border: '1px solid #0077b6',
              borderRadius: '14px',
              mb: '10px'
            }}
          >
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={node.name} />
            {node.open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Stack sx={{ml: '20px'}}>
            <Collapse in={node.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {node.dir.map((childnode, i) => (
                  <div key={i}>{renderFileStructure(childnode)}</div>
                ))}
              </List>
            </Collapse>
          </Stack>
        </Stack>
      )
    }
  }

  return (
    <Stack sx={{
      padding: '20px',
      minWidth: '350px', 
      }}
    >
      <Stack
        position={'sticky'}
        top={'80px'}
      >
        <Typography 
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            my: '20px'
          }}
        >
          Contents
        </Typography>
        <List
          sx={{ 
            maxWidth: 360, 
          }}
        >
          {fileStructureState.map((node, i) => (
            <div key={i}>
              {renderFileStructure(node)}
            </div>
          ))}
        </List>
      </Stack>
    </Stack>
  )
}

export default SideMenu;