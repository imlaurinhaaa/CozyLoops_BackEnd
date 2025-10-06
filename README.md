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

## 🚀 Como Executar o Projeto

### ⚠️ ETAPAS PRIORITÁRIAS

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm
- Git
- PostgreSQL instalado
- pgAdmin (recomendado)

### 1. Clonar os Repositórios

**Backend:**
```bash
git clone https://github.com/imlaurinhaaa/CozyLoops_BackEnd.git
cd CozyLoops_BackEnd
```

**Frontend (em outro diretório):**
```bash
git clone https://github.com/imlaurinhaaa/CozyLoops_FrontEnd.git
cd CozyLoops_FrontEnd
```

### 2. **PRIORIDADE - Configurar Backend**

**Instalar dependências do backend:**
```bash
cd CozyLoops_BackEnd
npm i
```

**Criar arquivo .env na raiz do projeto backend:**
```env
PORT=3000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=cozyloops
DB_PASSWORD=Laudi213*
DB_PORT=5432
```

### 3. **PRIORIDADE - Configurar Banco de Dados**

1. **Abra o pgAdmin**
2. **Crie o banco de dados:**
   - Nome: `cozyloops`
   - Port: `5432` (usar a porta do notebook)

3. **Fazer backup/restore:**
   - Vá em pgAdmin
   - Clique com botão direito no banco `cozyloops`
   - Selecione "Restore"
   - Escolha o arquivo `backup/cozyloops.sql`

### 4. Executar o Projeto

**Primeiro, inicie o Backend:**
```bash
cd CozyLoops_BackEnd
npm run dev
```
> O backend será executado na porta 3000

**Em seguida, configure o Frontend:**
```bash
cd CozyLoops_FrontEnd
npm i
```

**Criar arquivo .env na raiz do projeto frontend:**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_UPLOADS_URL=http://localhost:3000/uploads
```

**Iniciar o Frontend:**
```bash
npm run dev
```
> O frontend será executado na porta 3001

### 5. Acessar a Aplicação

Abra seu navegador e acesse: `http://localhost:3001`

---

## 📁 Estrutura do Projeto

### Backend (CozyLoops_BackEnd)
```
CozyLoops_BackEnd/
├── .env                      # Variáveis de ambiente
├── .gitignore               # Arquivos ignorados pelo git
├── package.json             # Dependências e scripts do projeto
├── package-lock.json        # Lock file das dependências
├── server.js                # Arquivo principal do servidor
├── README.md                # Documentação do projeto
├── backup/
│   └── cozyloops.sql        # Backup do banco de dados
├── src/
│   ├── config/              # Configurações do projeto
│   │   ├── database.js      # Configuração do banco de dados
│   │   └── upload.js        # Configuração de upload de arquivos
│   ├── controllers/         # Controladores da aplicação
│   │   └── productController.js  # Controller dos produtos
│   ├── database/            # Scripts de banco de dados
│   │   └── schema.sql       # Schema das tabelas
│   ├── models/              # Modelos de dados
│   │   └── productModel.js  # Model dos produtos
│   └── routes/              # Rotas da API
│       └── productRoute.js  # Rotas dos produtos
└── uploads/                 # Arquivos de imagem dos produtos
    ├── 1757779509909-chaveiro1.jpeg
    ├── 1757879245774-chaveiro2.jpg
    ├── 1757879420421-roupa1.jpg
    ├── 1757879572357-portaLivro1.jpg
    ├── 1757879691850-portaLivro2.jpg
    ├── 1757879835560-roupa2.jpg
    ├── 1757880206234-acessorioCabelo1.jpg
    ├── 1757880335503-bolsa1.jpg
    └── ... (outras imagens de produtos)
```
---

## 👥 Autora

- **Laura** - [imlaurinhaaa](https://github.com/imlaurinhaaa)

---

**✨ Transforme sua paixão pelo crochê em uma jornada inspiradora com o Cozy Loops!**
