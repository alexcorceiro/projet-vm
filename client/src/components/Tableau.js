import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField, MenuItem, Button, Menu } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./css/tableau.css"

// const users = [
//   { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', role: 'Admin' },
//   { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', role: 'User' },
//   { id: 3, firstName: 'Bob', lastName: 'Smith', email: 'bob.smith@example.com', role: 'User' },
//   { id: 4, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', role: 'Admin' },
//   { id: 5, firstName: 'Tom', lastName: 'Jones', email: 'tom.jones@example.com', role: 'User' },
//   { id: 6, firstName: 'Sara', lastName: 'Lee', email: 'sara.lee@example.com', role: 'User' },
//   { id: 7, firstName: 'Mike', lastName: 'Smith', email: 'mike.smith@example.com', role: 'User' },
//   { id: 8, firstName: 'Emily', lastName: 'Davis', email: 'emily.davis@example.com', role: 'Admin' },
//   { id: 9, firstName: 'David', lastName: 'Brown', email: 'david.brown@example.com', role: 'User' },
//   { id: 10, firstName: 'Karen', lastName: 'Wilson', email: 'karen.wilson@example.com', role: 'User' },
// ];

const styles = {
  paper: {
  height: "330px",
  width: '97%',
  bgcolor: '#f3f6f4',
  overflowY: 'scroll',
  padding: 20,
  maxHeight: "340px"
  },
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const initialState = {
    nom: '',
    prenom: '',
    email: '',
  };

export default function Tableau() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState('');
  const [formData, setFormData] = useState(initialState);
  const [userData, setUserData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = React.useState(false);
  const opens = Boolean(anchorEl);

  
 
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    setPage(0);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInputChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Envoi la requête pour mettre à jour la personne
      const response = await axios.patch(`http://localhost:5400/api/updateUser/${formData._id}`, formData);
      // Met à jour la liste des personnes
      const updatedUsers = userData.map(user => {
        if (user._id === formData._id) {
          return response.data;
        } else {
          return user;
        }
      });
      setUserData(updatedUsers);
      // Réinitialise le formulaire
      setFormData(initialState);
      // Ferme le modal
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleEdit = (id) => {
    // Affiche le modal pour la modification
    setOpen(true);
    // Récupère les informations de la personne à modifier
    const user = userData.find((user) => user._id === id);
    setFormData({
      _id: user._id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
    });
  }

  useEffect(() => {
    axios.get('http://localhost:5400/api/getUsers')
      .then(response => setUserData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5400/api/deleteUser/${id}`)
      .then(() => setUserData(userData.filter(user => user._id !== id)))
      .catch(error => console.log(error));
  };

  const displayedUsers = userData.filter((user) => {
    const searchRegex = new RegExp(searchText, 'i');
    return searchRegex.test(user.prenom) || searchRegex.test(user.nom) || searchRegex.test(user.email) || searchRegex.test(user.role);
  }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
     <div>
     <TextField
        sx={{ marginBottom: 16}}
        label="Rechercher"
        variant="outlined"
        size="small"
        value={searchText}
        onChange={handleSearchTextChange}
        style={{ margin: '8px' , marginLeft: '80%', marginTop: '2%'}}
      />
     </div>
     <div>
    <TableContainer component={Paper} style={styles.paper}>
      <Table sx={{minWidth: 650, maxHeight: 500}} aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell>Prénom</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Rôle</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedUsers.map(user => (
            <TableRow key={user._id}>
              <TableCell>{user.prenom}</TableCell>
              <TableCell>{user.nom}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>client</TableCell>
              <TableCell>
              <Button
        id="basic-button"
        aria-controls={opens ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={opens ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon sx={{color: 'grey'}} onClick={()=>handleClose(user._id)}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={opens}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleEdit(user._id)}><EditIcon/>{" "}modifier</MenuItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <form className='modal-form' onSubmit={handleUpdate}>
          <h2 className='modal-form-title'>mettre a jour</h2>
          <label className='modal-form-label'>prenom</label>
          <input className='modal-form-input' type="text" required
          id="prenom" name="prenom" value={formData.prenom || ""} onChange={handleInputChange}/>
          <label className='modal-form-label'>nom</label>
          <input className='modal-form-input' type="text" required
          id="nom" name="nom" value={formData.nom || ""} onChange={handleInputChange}/>
          <label className='modal-form-label'>email</label>
          <input className='modal-form-input' type="text" required
           id="email" name="email" value={formData.email || ""} onChange={handleInputChange}/>
          <button type="submit" className='modal-form-btn'>enregister</button>
         </form>
        </Box>
      </Modal>
        <MenuItem onClick={() => handleDelete(user._id)}><DeleteIcon/>{" "}supprimer</MenuItem>
      </Menu> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    <div>
    <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={userData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
    </div>
    </div>
  );
}
