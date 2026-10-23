<div align="center">

**[🍥🍣 Acessar Projeto](https://restaurante-japones-eight.vercel.app/)**
</div>

# 🍣 Restaurante Japonês

Projeto desenvolvido para o Checkpoint de Front-End da FIAP, com o objetivo de criar um site responsivo para um restaurante japonês, apresentando seus pratos e permitindo que os usuários explorem o cardápio por categorias.

O projeto utiliza React para a construção da interface, Vite para o ambiente de desenvolvimento e Tailwind CSS para a estilização dos componentes.

## 📌 Sobre o Projeto

O **Restaurante Japonês** é uma aplicação web que apresenta uma experiência visual inspirada na culinária japonesa. O site permite conhecer os pratos disponíveis, visualizar suas descrições e preços e navegar entre a página inicial e o cardápio completo.

A interface foi desenvolvida com foco em organização, usabilidade, responsividade e reutilização de componentes.

## 🎯 Objetivos

- Desenvolver uma aplicação utilizando React.
- Criar páginas com navegação entre rotas.
- Construir componentes reutilizáveis.
- Apresentar pratos com imagens, descrições e preços.
- Implementar filtros de cardápio por categoria.
- Aplicar estilização com Tailwind CSS.
- Trabalhar com Git e GitHub utilizando branches e Pull Requests.
- Organizar o código seguindo uma estrutura de pastas clara.

## ✨ Funcionalidades

### Página inicial
- Apresentação do restaurante.
- Banner principal com imagem de destaque.
- Botões de navegação para o cardápio.
- Seção de pratos em destaque.
- Apresentação dos diferenciais do restaurante.
- Cabeçalho e rodapé reutilizáveis.

### Cardápio
- Exibição dos pratos disponíveis.
- Cards com imagem, nome, descrição e preço.
- Filtro por categoria.
- Categorias disponíveis:
  - Todos
  - Sushi
  - Sashimi
  - Temaki
  - Hot Roll
  - Combos
- Atualização dos pratos exibidos conforme a categoria selecionada.

### Interface
- Layout desenvolvido com Tailwind CSS.
- Organização visual com cores e tipografia consistentes.
- Grade de pratos adaptável a diferentes tamanhos de tela.
- Componentes reutilizáveis para facilitar a manutenção.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** estrutura semântica da aplicação.
- **CSS3:** recursos de estilização utilizados em conjunto com Tailwind CSS.
- **JavaScript:** lógica, dados dos pratos e funcionamento dos filtros.
- **React:** construção da interface por componentes.
- **React Router DOM:** navegação entre as páginas.
- **Tailwind CSS:** estilização e criação de layouts responsivos.
- **Vite:** servidor de desenvolvimento e ferramenta de build.
- **Git:** controle de versão.
- **GitHub:** hospedagem do repositório e colaboração da equipe.

## 📂 Estrutura do Projeto

```text
Restaurante-japones/
├── public/
├── src/
│   ├── assets/
│   │   ├── prato1.jpeg
│   │   ├── prato2.jpeg
│   │   └── prato3.jpeg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Card.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Cardapio.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── integrantes.txt
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

> A estrutura acima representa a organização prevista para o projeto. Mantenha no README apenas os arquivos e diretórios que realmente existirem no repositório.

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/)
- npm, incluído na instalação do Node.js
- [Git](https://git-scm.com/)
- Um editor de código, como o Visual Studio Code

### 1. Clonar o repositório

```bash
git clone https://github.com/moocadevs/Restaurante-japones.git
```

### 2. Entrar na pasta do projeto

```bash
cd Restaurante-japones
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Acessar a aplicação

Após iniciar o servidor, o terminal exibirá o endereço local. Normalmente, o Vite disponibiliza a aplicação em:

```text
http://localhost:5173
```

Abra o endereço no navegador para visualizar o projeto.

## 🧭 Navegação

A aplicação possui as seguintes rotas:

| Rota | Página |
|---|---|
| `/` | Página inicial |
| `/cardapio` | Cardápio completo |

A navegação entre as páginas é realizada por meio do React Router DOM.

## 🧩 Componentes

### Navbar.jsx
Componente responsável pelo cabeçalho e pela navegação entre as páginas.

### Footer.jsx
Componente responsável pelo rodapé da aplicação.

### Card.jsx
Componente reutilizável para apresentar os pratos, suas imagens, descrições e preços.

### Home.jsx
Página inicial do restaurante, com banner, apresentação e pratos em destaque.

### Cardapio.jsx
Página que exibe os pratos e permite filtrar os resultados por categoria.

### App.jsx
Componente principal responsável pela configuração das rotas da aplicação.

## 🌿 Organização do Git

O projeto utiliza branches para organizar o desenvolvimento e facilitar a colaboração entre os integrantes.

- **main:** versão principal e final do projeto.
- **dev:** branch de integração das funcionalidades desenvolvidas pela equipe.
- **feature/nome-da-funcionalidade:** branches utilizadas para desenvolver alterações específicas.

### Fluxo de desenvolvimento

1. Criar ou atualizar a branch de trabalho.
2. Desenvolver a funcionalidade atribuída.
3. Registrar alterações com commits semânticos.
4. Enviar a branch para o GitHub.
5. Abrir um Pull Request para a branch `dev`.
6. Revisar e integrar as alterações.
7. Validar a aplicação integrada antes de atualizar a branch `main`.

### Exemplos de commits semânticos

```text
feat: criar pagina inicial
feat: implementar filtros do cardapio
feat: adicionar componente de pratos
style: ajustar responsividade do layout
fix: corrigir exibicao das imagens
docs: atualizar README do projeto
```

## 👥 Integrantes

| Integrante | RM |
|---|---|
| Eduardo Guzeli | 571143 |
| Lucas dos Santos | 571718 |
| Diego Caio | 572190 |

## 🔗 Repositório

GitHub: [Restaurante Japonês](https://github.com/moocadevs/Restaurante-japones)

## 🎓 Contexto Acadêmico

Projeto acadêmico desenvolvido em equipe para a FIAP, como atividade de Front-End, com foco na aplicação prática de React, componentes reutilizáveis, navegação entre páginas, estilização responsiva e controle de versão colaborativo.

---

Desenvolvido por Eduardo Guzeli, Lucas dos Santos e Diego Caio.
