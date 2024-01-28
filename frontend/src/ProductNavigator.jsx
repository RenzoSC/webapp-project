import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function ProductNavigator(){
    const [openSkin, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!openSkin);
    };

    const [openMaq, setOpenMaq] = React.useState(false);

    const handleClickMaq =()=>{
        setOpenMaq(!openMaq);
    }

    const [openHer, setOpenHer] = React.useState(false);

    const handleClickHer = ()=>{
        setOpenHer(!openHer);
    }
    return (
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Productos:
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClickHer}>
            <ListItemText primary="Herramientas y brochas" />
            {openHer? <ExpandLess/>: <ExpandMore/>}
          </ListItemButton>
          <Collapse in={openHer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Esponjas" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Brochas" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Limpiadores" />
                </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClickMaq}>
            <ListItemText primary="Maquillaje" />
            {openMaq? <ExpandLess/>: <ExpandMore/>}
          </ListItemButton>
          <Collapse in={openMaq} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Rostro" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Labios" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Ojos" />
                </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Skincare" />
            {openSkin ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSkin} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Hidratantes" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Limpiadores" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      );
}

export default ProductNavigator