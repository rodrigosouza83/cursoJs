-- 1. Apaga as tabelas antigas (limpeza)
DROP TABLE IF EXISTS Diretores;
DROP TABLE IF EXISTS Filmes;

-- 2. Cria a tabela Filmes novamente
CREATE TABLE Filmes (
    Id INT PRIMARY KEY,
    Nome VARCHAR(100),
    Genero VARCHAR(50),
    AnoLancamento INT,
    GanhouOscar BIT
);

-- 3. Cria a tabela Diretores ATUALIZADA (com AnoNascimento)
CREATE TABLE Diretores (
    Id INT PRIMARY KEY,
    NomeDiretor VARCHAR(100),
    AnoNascimento INT, -- Agora a coluna vai existir!
    FilmeId INT FOREIGN KEY REFERENCES Filmes(Id)
);

-- 1. Limpeza
DROP TABLE IF EXISTS Diretores;
DROP TABLE IF EXISTS Filmes;

-- 2. Tabela de Filmes
CREATE TABLE Filmes (
    Id INT PRIMARY KEY,
    Nome VARCHAR(100),
    Genero VARCHAR(50),
    AnoLancamento INT,
    GanhouOscar BIT
);

-- 3. Tabela de Diretores (agora com Ano de Nascimento)
CREATE TABLE Diretores (
    Id INT PRIMARY KEY,
    NomeDiretor VARCHAR(100),
    AnoNascimento INT,
    FilmeId INT FOREIGN KEY REFERENCES Filmes(Id)
);

-- 4. Inserindo 20 Filmes
INSERT INTO Filmes (Id, Nome, Genero, AnoLancamento, GanhouOscar) VALUES
(1, 'O Poderoso Chefão', 'Policial', 1972, 1),
(2, 'Pulp Fiction', 'Crime', 1994, 0),
(3, 'Interestelar', 'Ficção Científica', 2014, 0),
(4, 'Parasita', 'Suspense', 2019, 1),
(5, 'Cidade de Deus', 'Drama', 2002, 0),
(6, 'Matrix', 'Ficção Científica', 1999, 0),
(7, 'O Senhor dos Anéis: Retorno do Rei', 'Fantasia', 2003, 1),
(8, 'Bastardos Inglórios', 'Guerra', 2009, 0),
(9, 'Moonlight', 'Drama', 2016, 1),
(10, 'Mad Max: Estrada da Fúria', 'Ação', 2015, 0),
(11, 'A Lista de Schindler', 'Drama', 1993, 1),
(12, 'Taxi Driver', 'Crime', 1976, 0),
(13, 'Barbie', 'Comédia', 2023, 0),
(14, 'Corra!', 'Terror', 2017, 0),
(15, 'Clube da Luta', 'Drama', 1999, 0),
(16, 'O Iluminado', 'Terror', 1980, 0),
(17, 'Psicose', 'Suspense', 1960, 0),
(18, 'Gladiador', 'Ação', 2000, 1),
(19, 'Titanic', 'Romance', 1997, 1),
(20, 'Oppenheimer', 'Biografia', 2023, 1);

-- 5. Inserindo Diretores (com datas de nascimento reais)
INSERT INTO Diretores (Id, NomeDiretor, AnoNascimento, FilmeId) VALUES
(1, 'Francis Ford Coppola', 1939, 1),
(2, 'Quentin Tarantino', 1963, 2),
(3, 'Christopher Nolan', 1970, 3),
(4, 'Bong Joon-ho', 1969, 4),
(5, 'Fernando Meirelles', 1955, 5),
(6, 'Lana e Lilly Wachowski', 1965, 6), -- Ano da Lana
(7, 'Peter Jackson', 1961, 7),
(8, 'Quentin Tarantino', 1963, 8),
(9, 'Barry Jenkins', 1979, 9),
(10, 'George Miller', 1945, 10),
(11, 'Steven Spielberg', 1946, 11),
(12, 'Martin Scorsese', 1942, 12),
(13, 'Greta Gerwig', 1983, 13),
(14, 'Jordan Peele', 1979, 14),
(15, 'David Fincher', 1962, 15),
(16, 'Stanley Kubrick', 1928, 16),
(17, 'Alfred Hitchcock', 1899, 17),
(18, 'Ridley Scott', 1937, 18),
(19, 'James Cameron', 1954, 19),
(20, 'Christopher Nolan', 1970, 20);

SELECT  
Filmes.Id, Nome AS Filme, 
GanhouOscar AS Vencedor_Oscar, 
NomeDiretor AS Diretor, 
AnoLancamento AS Lançamento, 
AnoNascimento AS Nascimento
FROM Filmes 
INNER JOIN Diretores
ON Filmes.Id = Diretores.Id
WHERE GanhouOscar = 1;

SELECT Filmes.Id, Nome AS Filme, 
NomeDiretor AS Diretor,
AnoLancamento AS Lançamento, 
AnoNascimento AS Nascimento
FROM Filmes
INNER JOIN Diretores
ON Filmes.Id = Diretores.Id
WHERE AnoLancamento >= '1960' AND AnoNascimento >= '1930' AND GanhouOscar = 0

SELECT * FROM Diretores