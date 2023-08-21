import React, { useState, useEffect } from 'react';
import { Modal, Form, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


const MeseroList = () => {
const [meseros, setMeseros] = useState([]);
const [showModal, setShowModal] = useState(false);
const [nombre, setNombre] = useState('');
const [apellidos, setApellidos] = useState('');
const [showCannotDeleteModal, setShowCannotDeleteModal] = useState(false);
const [cannotDeleteMessage, setCannotDeleteMessage] = useState('');


  const fetchMeseros = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/meseros'); // Reemplaza 'URL_DEL_API' por la URL de tu API
      setMeseros(response.data);
    } catch (error) {
      console.error('Error al obtener los Meseros:', error);
    }
  };

  useEffect(() => {
    // Al cargar el componente, inicia el temporizador para obtener los proveedores cada 5 segundos
    const timer = setInterval(fetchMeseros, 500);

    // Al desmontar el componente, limpia el temporizador
    return () => {
      clearInterval(timer);
    };
    }, []);

    const handleAddMesero = async () => {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/meseros/', {
          nombre,
          apellidos,
        });
        if (response.status === 201) {
          fetchMeseros(); // Refresh the meseros list after adding a new one
          handleCloseModal(); // Close the modal after successful addition
        }
      } catch (error) {
        console.error('Error al agregar el Mesero:', error);
      }
    };

    const handleDelete = async (idMesero) => {
      try {
        const response = await axios.delete(`http://localhost:4000/api/v1/meseros/${idMesero}`);
        if (response.status === 200) {
          fetchMeseros();
        }
      } catch (error) {
        if (error.response && error.response.status === 500) {
          setShowCannotDeleteModal(true);
          setCannotDeleteMessage('No se puede eliminar el mesero debido a restricciones de clave externa.');
        }
      }
    };
  

    const handleCloseModal = () => {
      setShowModal(false);
      setNombre('');
      setApellidos('');
    };

  return (
    <div>
      <h2>Meseros</h2>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Agregar Mesero
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Mesero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del mesero"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="apellidos">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese los apellidos del mesero"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAddMesero}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {meseros.map((mesero) => (
            <tr key={mesero.idMesero}>
              <td>{mesero.idMesero}</td>
              <td>{mesero.nombre}</td>
              <td>{mesero.apellidos}</td>
              <td>
                <Link to={`/meseros/${mesero.idMesero}`}>Ver Detalles</Link>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDelete(mesero.idMesero);
                  }}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showCannotDeleteModal} onHide={() => setShowCannotDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>No se puede eliminar el mesero</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cannotDeleteMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCannotDeleteModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default MeseroList;