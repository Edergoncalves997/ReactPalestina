import React, { useState } from 'react';
import { buscarNoticias } from '../hooks/server';

const Noticias: React.FC = () => {
  const [termo, setTermo] = useState('');
  const [noticias, setNoticias] = useState<any[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  const pesquisar = async () => {
    setNoticias([]);
    setErro(null);
    setCarregando(true);

    try {
      const hoje = new Date().toISOString().split('T')[0];
      const resposta = await buscarNoticias(termo, hoje);
      setNoticias(resposta.articles);
    } catch (err) {
      setErro((err as Error).message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Buscar Notícias</h1>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={termo}
          onChange={e => setTermo(e.target.value)}
          placeholder="Digite um tema (ex: tecnologia)"
          style={{
            flex: 1,
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        <button
          onClick={pesquisar}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Pesquisar
        </button>
      </div>

      {carregando && <p style={{ textAlign: 'center' }}>🔄 Carregando...</p>}
      {erro && <p style={{ color: 'red', textAlign: 'center' }}>{erro}</p>}
      {noticias.length === 0 && !carregando && !erro && (
        <p style={{ textAlign: 'center' }}>Nenhuma notícia encontrada.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {noticias.map((n, i) => (
          <li
            key={i}
            style={{
              marginBottom: '2rem',
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            }}
          >
            {n.image && (
              <img
                src={n.image}
                alt={n.title}
                style={{
                  width: '100%',
                  maxHeight: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                }}
              />
            )}
            <h2 style={{ margin: '0 0 0.5rem' }}>{n.title}</h2>
            <p style={{ margin: '0 0 1rem' }}>{n.description}</p>
            <a
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007bff', textDecoration: 'none' }}
            >
              🔗 Leia mais
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Noticias;
