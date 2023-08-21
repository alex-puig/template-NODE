import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProveedorList = () => {
  const [meseros, setMeseros] = useState([]);

  useEffect(() => {
    // Al cargar el componente, inicia el temporizador para obtener los proveedores cada 5 segundos
    const timer = setInterval(fetchProveedores, 500);

    // Al desmontar el componente, limpia el temporizador
    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchProveedores = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/meseros'); // Reemplaza 'URL_DEL_API' por la URL de tu API
      setMeseros(response.data);
    } catch (error) {
      console.error('Error al obtener los proveedores:', error);
    }
  };

  const handleInfoClick = (mesero) => {
    // Aquí puedes implementar la lógica para mostrar la información del proveedor con el ID específico
    window.alert(`ID del proveedor: ${mesero.idMesero}
                Nombre proveedor: ${mesero.nombre}
                Apellido proveedor: ${mesero.apellidos}`);
  };

  return (
        <div>
        <button>Agregar</button>
        <table>
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
                    <button onClick={() => handleInfoClick(mesero)}>Info</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
  );
};

export default ProveedorList;