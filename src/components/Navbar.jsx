import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
return (
<header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/95 backdrop-blur">
<nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-12">
<Link to="/" className="flex items-center gap-2">
<span className="text-2xl">🍣</span>
<span className="text-xl font-bold tracking-wide">
Sush<span className="text-red-500">i</span> House
</span>
</Link>
    <div className="flex items-center gap-5 sm:gap-8">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `text-sm font-medium transition hover:text-red-400 sm:text-base ${
            isActive ? 'text-red-500' : 'text-gray-300'
          }`
        }
      >
        Início
      </NavLink>
      <NavLink
        to="/cardapio"
        className={({ isActive }) =>
          `text-sm font-medium transition hover:text-red-400 sm:text-base ${
            isActive ? 'text-red-500' : 'text-gray-300'
          }`
        }
      >
        Cardápio
      </NavLink>
      <Link
        to="/cardapio"
        className="hidden rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold transition hover:bg-red-700 sm:inline-block"
      >
        Ver pratos
      </Link>
    </div>
  </nav>
</header>
);
};
export default Navbar;