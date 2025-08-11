
# Loja Marvel de Gibis / Comics 🛒
## 🕷️ Venha fazer parte desse universo ou melhor, multiverso:
https://site-marvel-react.vercel.app/

## 📋 Descrição

Bem-vindo à loja oficial de **gibis Marvel**!  
Este projeto é um site de compras desenvolvido em **React**, com gerenciamento global via **Redux** e estilos feitos com **styled-components**. Você pode adicionar seus quadrinhos ao carrinho.

---

## ✨ Funcionalidades

* 📚 Exibe todos os gibis e comics adicionados ao carrinho, mostrando detalhes de cada edição.  
* 💸 Exibe o preço total atualizado conforme os quadrinhos são adicionados ou removidos.  
* 🎟️ Permite aplicar cupons de desconto especiais para os fãs Marvel.  
* ❌ Fecha o carrinho com um clique para continuar navegando pelo universo Marvel.

---

## 🛠️ Tecnologias utilizadas

* ⚛️ React  
* 🛡️ Redux (Redux Toolkit)  
* 🎨 styled-components  
* 💻 JavaScript moderno (ES6+)

---

## 🚀 Como rodar o projeto

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITÓRIO>
````

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Rode a aplicação:

```bash
npm run dev
```

O site abrirá em `http://localhost:5173` para você começar a montar sua coleção Marvel!

---

<details> 
  <summary>📂 Estrutura do projeto</summary>

```
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── deadPool.gif
│   └── logo_marvel.png
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── Cart
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── Header
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── HqCard
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── ItenCart
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   └── Loading
│   │       ├── index.jsx
│   │       └── style.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── Home
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   └── HqDetails
│   │       ├── index.jsx
│   │       └── style.js
│   ├── redux
│   │   ├── cart.select.js
│   │   ├── cartSlice.js
│   │   └── store.js
│   └── services
│       └── apiMarvel.js
└── vite.config.js
```

</details>

---

## 🎟️ Cupons de desconto exclusivos Marvel

| Cupom      | Descrição |
| ---------- | --------- |
| DESCONTO10 |           |
| RARIDADE15 |           |


