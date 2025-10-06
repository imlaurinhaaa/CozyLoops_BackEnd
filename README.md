# 🧶 Cozy Loops

O **Cozy Loops** é uma plataforma web dedicada aos amantes do crochê – desde iniciantes que desejam aprender até artesãos que querem transformar sua paixão em fonte de renda.

Nosso objetivo é criar um espaço acolhedor e inspirador para aprender, praticar e empreender com crochê.

---

## 🌟 Sobre o Projeto

O **Cozy Loops** reúne em um só lugar tudo o que você precisa para seu mundo do crochê:

- **📚 Aprendizado:** Vídeos tutoriais passo a passo, desde pontos básicos até técnicas avançadas
- **✨ Inspiração:** Perfis de artesãos talentosos do Instagram para motivar e trazer novas ideias  
- **🛍️ Recursos:** Indicações de produtos e materiais para confeccionar peças de qualidade
- **💼 Empreendedorismo:** Orientações para transformar o crochê em renda extra

---

## ⚙️ Funcionalidades

- 📺 **Tutoriais em Vídeo:** Conteúdo organizado por nível de dificuldade
- 📸 **Galeria de Inspirações:** Artesãos do Instagram para seguir e se inspirar
- � **Produtos Recomendados:** Materiais e ferramentas essenciais para crochê
- 💡 **Dicas de Vendas:** Estratégias para monetizar suas criações

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.5.2** - Framework React para desenvolvimento web moderno
- **React 19.1.0** - Biblioteca para criação de interfaces de usuário
- **React DOM 19.1.0** - Renderização de componentes React no navegador
- **Lucide React 0.544.0** - Biblioteca de ícones modernos e personalizáveis
- **Axios 1.11.0** - Cliente HTTP para integração com APIs

### Backend
- **Node.js** - Ambiente de execução JavaScript no servidor
- **Express 5.1.0** - Framework web para criação de APIs REST
- **CORS 2.8.5** - Middleware para controle de acesso entre domínios
- **Dotenv 17.2.2** - Gerenciamento de variáveis de ambiente
- **Multer 2.0.2** - Middleware para upload de arquivos
- **Nodemon 3.1.10** - Reinicialização automática durante desenvolvimento
- **PostgreSQL (pg 8.16.3)** - Banco de dados relacional

---

## � Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Git

### 1. Clonar os Repositórios

**Frontend:**
```bash
git clone https://github.com/imlaurinhaaa/CozyLoops_FrontEnd.git
cd CozyLoops_FrontEnd
```

**Backend (em outro diretório):**
```bash
git clone https://github.com/imlaurinhaaa/CozyLoops_BackEnd.git
cd CozyLoops_BackEnd
```

### 2. Instalar Dependências

Em ambos os projetos, execute:
```bash
npm install
```

### 3. Executar o Projeto

**Primeiro, inicie o Backend:**
```bash
cd CozyLoops_BackEnd
npm run dev
```
> O backend será executado na porta 3000

**Em seguida, inicie o Frontend:**
```bash
cd CozyLoops_FrontEnd
npm run dev
```
> O frontend será executado na porta 3001

### 4. Acessar a Aplicação

Abra seu navegador e acesse: `http://localhost:3001`

---

## 📁 Estrutura do Projeto

```
CozyLoops_FrontEnd/
├── public/                    # Arquivos estáticos
│   ├── icons/
│   │   └── favicon.ico     
│   ├── images/
│   │   ├── banner.png        
│   │   ├── laura.png         
│   │   └── log-semfundo.png  
│   └── videos/               # Vídeos dos criadores de conteúdo
│       ├── annaOpusckevicz.mp4
│       ├── blogdocroche.mp4
│       ├── croche.ro.mp4
│       ├── encantadacrochetaria.mp4
│       ├── franAluap.mp4
│       ├── gabrielLacerda.mp4
│       ├── juSanches.mp4
│       ├── luanajaworski.mp4
│       ├── mariecastrodiy.mp4
│       ├── porsimonecarvalho.mp4
│       └── tainaMacedo.mp4
├── src/
│   ├── middleware.js        
│   ├── app/                  # Páginas da aplicação (App Router)
│   │   ├── globals.css       
│   │   ├── layout.js         
│   │   ├── not-found.jsx     
│   │   ├── not-found.module.css
│   │   ├── home/
│   │   │   ├── page.jsx      # Página inicial
│   │   │   └── Home.module.css
│   │   ├── inspiracoes/
│   │   │   ├── page.jsx      # Página de inspirações
│   │   │   └── Inspiracoes.module.css
│   │   ├── produtos/
│   │   │   ├── page.jsx      # Página de produtos
│   │   │   ├── Produtos.module.css
│   │   │   └── [id]/         # Rota dinâmica para produto específico
│   │   │       ├── page.jsx
│   │   │       └── [id].module.css
│   │   └── sobre/
│   │       ├── page.jsx      # Página sobre
│   │       └── Sobre.module.css
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Card.jsx      
│   │   ├── CardSocial.jsx   
│   │   ├── Header.jsx       
│   │   ├── Inspiracao.jsx   
│   │   └── Video.jsx       
│   ├── data/                # Dados estáticos da aplicação
│   │   ├── inspirations.js  
│   │   └── videos.js        
│   └── styles/              # Estilos CSS módulos dos componentes
│       ├── Card.module.css
│       ├── CardSocial.module.css
│       ├── Header.module.css
│       ├── Inspiracao.module.css
│       └── Video.module.css
├── eslint.config.mjs      
├── jsconfig.json          
├── next.config.mjs        
├── package.json           
└── README.md            
```

---

## 👥 Autora

- **Laura** - [imlaurinhaaa](https://github.com/imlaurinhaaa)

---

**✨ Transforme sua paixão pelo crochê em uma jornada inspiradora com o Cozy Loops!**
