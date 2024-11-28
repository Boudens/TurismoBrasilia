import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Attractions.css';

const Attractions = () => {
  const [attractions, setAttractions] = useState([]);
  const [newAttraction, setNewAttraction] = useState({
    name: '',
    description: '',
    location: '',
    imageUrl: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [editAttraction, setEditAttraction] = useState(null); // Para editar uma atração
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se o usuário está logado
    const token = localStorage.getItem('token');
    if (!token) {
      // Se não tiver token, redireciona para a página de login
      navigate('/login');
    } else {
      // Caso tenha token, carregar as atrações
      const fetchAttractions = async () => {
        try {
          const response = await fetch('http://localhost:5187/api/attractions', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setAttractions(data); // Atualiza o estado com os dados da API
          } else {
            console.log('Erro ao obter atrações:', response.statusText);
          }
        } catch (error) {
          console.log('Erro na requisição:', error);
        }
      };

      fetchAttractions();
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAttraction((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddAttraction = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:5187/api/attractions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAttraction),
      });

      if (response.ok) {
        const addedAttraction = await response.json();
        setAttractions((prev) => [...prev, addedAttraction]); // Atualiza o estado local com a nova atração
        setNewAttraction({ name: '', description: '', location: '', imageUrl: '' }); // Limpa o formulário
      } else {
        const error = await response.text();
        setErrorMessage(error || 'Erro ao adicionar atração.');
      }
    } catch (error) {
      setErrorMessage('Erro ao conectar com o servidor.');
    }
  };

  const handleDeleteAttraction = async (id) => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`http://localhost:5187/api/attractions/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Remove a atração do estado com base no ID
        setAttractions((prev) => prev.filter((attraction) => attraction.id !== id)); 
      } else {
        setErrorMessage('Erro ao deletar a atração.');
      }
    } catch (error) {
      setErrorMessage('Erro ao conectar com o servidor.');
    }
  };

  const handleUpdateAttraction = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`http://localhost:5187/api/attractions/${editAttraction.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editAttraction), // Envia a atração editada
      });

      if (response.ok) {
        const updatedAttraction = await response.json();
        // Atualiza a atração editada no estado
        setAttractions((prev) =>
          prev.map((attraction) =>
            attraction.id === updatedAttraction.id ? updatedAttraction : attraction
          )
        );
        setEditAttraction(null); // Limpa a edição
      } else {
        const error = await response.text();
        setErrorMessage(error || 'Erro ao atualizar atração.');
      }
    } catch (error) {
      setErrorMessage('Erro ao conectar com o servidor.');
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditAttraction((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="attractions-container">
      <h1>Atrações de Brasília</h1>

      {/* Formulário para adicionar nova atração */}
      <form onSubmit={handleAddAttraction} className="add-attraction-form">
        <h2>Adicionar Nova Atração</h2>
        <div className="input-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newAttraction.name}
            onChange={handleInputChange}
            placeholder="Nome da atração"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            name="description"
            value={newAttraction.description}
            onChange={handleInputChange}
            placeholder="Descrição da atração"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="location">Localização</label>
          <input
            type="text"
            id="location"
            name="location"
            value={newAttraction.location}
            onChange={handleInputChange}
            placeholder="Localização"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="imageUrl">URL da Imagem</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={newAttraction.imageUrl}
            onChange={handleInputChange}
            placeholder="URL da imagem"
          />
        </div>
        <button type="submit" className="add-attraction-btn">
          Adicionar
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>

      {/* Exibição das atrações com opções de edição e exclusão */}
      <div className="cards-container">
        {attractions.map((attraction) => (
          <div key={attraction.id} className="card">
            <img
              src={attraction.imageUrl || 'default-image.jpg'}
              alt={attraction.name}
              className="card-image"
            />
            <div className="card-body">
              <h3 className="card-title">{attraction.name}</h3>
              <p className="card-description">{attraction.description}</p>
              <p className="card-location"><strong>Localização:</strong> {attraction.location}</p>
              <button onClick={() => handleDeleteAttraction(attraction.id)} className="delete-btn">Deletar</button>
              <button onClick={() => setEditAttraction(attraction)} className="edit-btn">Editar</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal ou formulário de edição */}
      {editAttraction && (
        <div className="edit-form">
          <h2>Editar Atração</h2>
          <form onSubmit={handleUpdateAttraction}>
            <div className="input-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={editAttraction.name}
                onChange={handleEditInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                id="description"
                name="description"
                value={editAttraction.description}
                onChange={handleEditInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="location">Localização</label>
              <input
                type="text"
                id="location"
                name="location"
                value={editAttraction.location}
                onChange={handleEditInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="imageUrl">URL da Imagem</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={editAttraction.imageUrl}
                onChange={handleEditInputChange}
              />
            </div>
            <button type="submit" className="edit-btn">
              Atualizar
            </button>
            <button
              type="button"
              onClick={() => setEditAttraction(null)}
              className="cancel-btn"
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Attractions;
