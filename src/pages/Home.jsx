import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import prato1 from '../assets/prato1.jpeg';
import prato4 from '../assets/prato4.jpeg';
import prato3 from '../assets/prato3.jpeg';

const Home = () => {
  const destaques = [
    {
      id: 1,
      nome: 'Sushi Salmão',
      descricao: 'Salmão fresco com arroz japonês.',
      preco: 'R$ 32,00',
      imagem: prato1,
    },
    {
      id: 2,
      nome: 'Temaki Salmão',
      descricao: 'Salmão, arroz e alga crocante.',
      preco: 'R$ 26,00',
      imagem: prato4,
    },
    {
      id: 3,
      nome: 'Sashimi',
      descricao: 'Fatias selecionadas de peixe fresco.',
      preco: 'R$ 45,00',
      imagem: prato3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-6 text-center">
        
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${prato1})`,
      }}
      />


        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-3xl py-20">
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-red-400">
            Tradição japonesa
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl">
            Uma experiência japonesa em cada detalhe
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-gray-300 sm:text-lg">
            Descubra sabores únicos, ingredientes frescos e pratos preparados
            para transformar sua refeição em um momento especial.
          </p>

          <Link
            to="/cardapio"
            className="inline-block rounded-lg bg-red-600 px-8 py-3 font-semibold transition hover:bg-red-700"
          >
            Explorar cardápio
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-2 font-semibold uppercase tracking-widest text-red-500">
              Nossos favoritos
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Pratos em destaque
            </h2>

            <p className="mt-3 text-gray-400">
              Sabores selecionados para você aproveitar o melhor da culinária japonesa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destaques.map((prato) => (
              <Card
                key={prato.id}
                imagem={prato.imagem}
                titulo={prato.nome}
                descricao={prato.descricao}
                preco={prato.preco}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/cardapio"
              className="inline-block rounded-lg border border-red-600 px-7 py-3 font-semibold text-red-400 transition hover:bg-red-600 hover:text-white"
            >
              Ver todos os pratos
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-bold">
              Ingredientes frescos
            </h3>
            <p className="text-gray-400">
              Selecionamos ingredientes para valorizar cada prato.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold">
              Tradição e sabor
            </h3>
            <p className="text-gray-400">
              Inspirados na culinária japonesa e em seus sabores marcantes.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold">
              Experiência especial
            </h3>
            <p className="text-gray-400">
              Um ambiente pensado para tornar cada refeição memorável.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;