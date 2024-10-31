import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '' 
 });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(false);
    setSuccess(false);
  };

  const isCorreoCorporativo = (correo) => {
    return correo.endsWith('@ctl.com.ar') || correo.endsWith('@activia.com.ar');
  }

  const checkForm = async () => {
    if (!formData.nombre || !formData.apellido || !formData.correo) {
        throw new Error('Por favor, completa todos los campos');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    const makePostRequest = async () => {
        try {
            await checkForm();
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': import.meta.env.VITE_API_KEY,
                },
            }
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/add`, formData, config);
            const data = response.data;
            setSuccess(true);
            setSuccessMessage('Usuario registrado correctamente');
        }
        catch (error) {
            console.error('Error:', error);
            setError(true);
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage(error.message);
            }
        }
    }
    makePostRequest();
  };

  return (
    <div className="w-full sm:w-1/2 md:max-w-md mt-4 p-6 bg-white shadow-md sm:rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6 mt-2" id='title-fiesta'>Fiesta Fin de Año</h2>
      <form onSubmit={handleSubmit} className='mb-2'>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            autoComplete='off'
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block text-gray-700 font-semibold mb-2">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            autoComplete='off'
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="correo" className="block text-gray-700 font-semibold mb-2">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            autoComplete='off'
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black21-100 text-white py-2 px-4 rounded-md hover:bg-black21-200 transition-colors duration-200 "
        >
          Enviar
        </button>
      </form>
      {error && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        {success && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
    </div>
  );
};

export default Form;
