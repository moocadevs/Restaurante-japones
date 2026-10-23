const Card = ({ imagem, titulo, descricao, preco }) => {
    
return (
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-950/20">
<div className="h-56 overflow-hidden bg-gray-800">
<img        src={imagem}        alt={titulo}        loading="lazy"        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"      />
</div>
  <div className="p-5">
    <div className="mb-3 flex items-start justify-between gap-3">
      <h3 className="text-lg font-bold text-white">
        {titulo}
      </h3>
      <span className="shrink-0 rounded-md bg-red-600/10 px-2 py-1 text-sm font-semibold text-red-400">
        {preco}
      </span>
    </div>
    <p className="text-sm leading-relaxed text-gray-400">
      {descricao}
    </p>
  </div>
</article>
);
};
export default Card;