import { Link } from 'react-router-dom';


const Footer = () => {
return (
<footer className="border-t border-white/10 bg-gray-950 px-6 py-8 text-gray-400">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
<div>
<Link to="/" className="text-lg font-bold text-white">
🍣 Sushi House
</Link>
      <p className="mt-2 text-sm">
        Tradição japonesa em cada detalhe.
      </p>
    </div>
    <div className="flex gap-5 text-sm">
      <Link to="/" className="transition hover:text-white">
        Início
      </Link>
      <Link to="/cardapio" className="transition hover:text-white">
        Cardápio
      </Link>
    </div>
    <p className="text-xs">
      © {new Date().getFullYear()} Sushi House. Projeto acadêmico.
    </p>
  </div>
</footer>
);
};
export default Footer;