-- Criação do banco de dados Cozy Loops
CREATE DATABASE cozyLoops;

\c cozyLoops

-- Tabela produtos
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    image TEXT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    difficulty_level VARCHAR(50),
    time VARCHAR(50),
    price DECIMAL(10, 2) NOT NULL,
    suggestion TEXT,
    link TEXT
);

-- Inserts: Products
INSERT INTO products (category, image, name, description, difficulty_level, time, price, suggestion, link) VALUES
('Amigurumi', 'https://example.com/amigurumi1.jpg', 'Amigurumi Urso', 
    'Um adorável urso de amigurumi feito com lã macia.', 
    'Fácil', '2 horas', 29.99, 
    'Perfeito para iniciantes.', 
    'https://example.com/patterns/amigurumi-urso'),
('Crochê', 'https://example.com/croche1.jpg', 'Cachecol de Crochê', 
    'Um cachecol elegante feito com pontos simples de crochê.', 
    'Médio', '3 horas', 19.99, 
    'Ideal para dias frios.', 
    'https://example.com/patterns/cachecol-croche'),
('Tricô', 'https://example.com/trico1.jpg', 'Gorro de Tricô', 
    'Um gorro quente e confortável feito com lã grossa.', 
    'Difícil', '4 horas', 24.99, 
    'Ótimo para o inverno.', 
    'https://example.com/patterns/gorro-trico'),
('Ponto Cruz', 'https://example.com/pontocruz1.jpg', 'Quadro Ponto Cruz', 
    'Um quadro decorativo feito com técnica de ponto cruz.', 
    'Fácil', '5 horas', 34.99, 
    'Decore sua casa com arte feita à mão.', 
    'https://example.com/patterns/quadro-pontocruz'),
('Bordado', 'https://example.com/bordado1.jpg', 'Almofada Bordada', 
    'Uma almofada personalizada com bordado floral.', 
    'Médio', '6 horas', 39.99, 
    'Adicione um toque especial à sua decoração.', 
    'https://example.com/patterns/almofada-bordada'),
('Costura', 'https://example.com/costura1.jpg', 'Bolsa de Costura', 
    'Uma bolsa prática e estilosa feita com tecido resistente.', 
    'Difícil', '7 horas', 49.99, 
    'Perfeita para o dia a dia.', 
    'https://example.com/patterns/bolsa-costura'),
('Artesanato', 'https://example.com/outros1.jpg', 'Chaveiro Artesanal', 
    'Um chaveiro único feito com materiais reciclados.', 
    'Fácil', '1 hora', 9.99, 
    'Ótimo para presentear amigos.', 
    'https://example.com/patterns/chaveiro-artesanal');