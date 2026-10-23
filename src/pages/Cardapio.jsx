
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const pratos = [
  {
    id: 1,
    categoria: 'sushi',
    titulo: 'Sushi de Salmão',
    descricao: 'Arroz japonês e salmão fresco.',
    preco: 'R$ 32,00',
    imagem: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    categoria: 'temaki',
    titulo: 'Temaki de Salmão',
    descricao: 'Salmão, arroz e alga crocante.',
    preco: 'R$ 26,00',
    imagem: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    categoria: 'sashimi',
    titulo: 'Sashimi Especial',
    descricao: 'Fatias de peixe fresco.',
    preco: 'R$ 45,00',
    imagem: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    categoria: 'combo',
    titulo: 'Combo Especial',
    descricao: 'Uma seleção variada de peças japonesas.',
    preco: 'R$ 60,00',
    imagem: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    categoria: 'hotroll',
    titulo: 'Hot Roll',
    descricao: 'Peças empanadas com recheio saboroso.',
    preco: 'R$ 36,00',
    imagem: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    categoria: 'sushi',
    titulo: 'Sushi Especial',
    descricao: 'Uma combinação de sabores tradicionais.',
    preco: 'R$ 39,00',
    imagem: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
  },
];

const categorias = [
  { valor: 'todos', nome: 'Todos' },
  { valor: 'sushi', nome: 'Sushi' },
  { valor: 'sashimi', nome: 'Sashimi' },
  { valor: 'temaki', nome: 'Temaki' },
  { valor: 'hotroll', nome: 'Hot Roll' },
  { valor: 'combo', nome: 'Combos' },
];

const Cardapio = () => {
  const [categoria, setCategoria] = useState('todos');

  const pratosFiltrados =
    categoria === 'todos'
      ? pratos
      : pratos.filter((prato) => prato.categoria === categoria);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-red-500">
            Sabores do Japão
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Nosso Cardápio
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Explore nossas opções e encontre seu próximo prato favorito.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categorias.map((cat) => (
            <button
              key={cat.valor}
              type="button"
              onClick={() => setCategoria(cat.valor)}
              className={`rounded-full px-5 py-2 font-medium transition ${
                categoria === cat.valor
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat.nome}
            </button>
          ))}
        </div>

        {pratosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pratosFiltrados.map((prato) => (
              <Card
                key={prato.id}
                imagem={prato.imagem}
                titulo={prato.titulo}
                descricao={prato.descricao}
                preco={prato.preco}
              />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-gray-400">
            Nenhum prato encontrado nessa categoria.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cardapio;