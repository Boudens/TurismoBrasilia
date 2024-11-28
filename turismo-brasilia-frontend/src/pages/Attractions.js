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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attractions;
