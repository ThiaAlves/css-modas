

INSERT INTO `categorias` (`id`, `categoria`, `created_at`, `updated_at`) VALUES
(1, 'Infantil', NULL, NULL),
(2, 'Adulto', NULL, NULL),
(3, 'Feminino', NULL, NULL),
(4, 'Masculino', NULL, NULL),
(5, 'Inverno', NULL, NULL),
(6, 'Verão', NULL, NULL);


INSERT INTO `empresas` (`id`, `empresa`, `whatsapp`, `created_at`, `updated_at`) VALUES
(1, '776', '4497623839', NULL, NULL),
(2, 'Marisa', '4498392773', NULL, NULL),
(3, 'Bela Modas', '4498040444', NULL, NULL),
(4, 'GB Outlet', '4498645356', NULL, NULL),
(5, 'Flor de Liz', '449876223', NULL, NULL),
(6, 'Lotus', '4484983473', NULL, NULL),
(7, 'Elegance Modas', '4498643456', NULL, NULL),
(8, 'New Era', '4498720923', NULL, NULL),
(9, 'Centauro', '4498320345', NULL, NULL);

INSERT INTO `produtos` (`id`, `produto`, `foto`, `descricao`, `valor`, `promo`, `categoria_id`, `empresa_id`, `created_at`, `updated_at`) VALUES
(1, 'Camiseta Branca Vans', 'vansBranca.jpg', 'Tamanho M;\r\nCor Branca;\r\nManga Curta;\r\nMarca Vans;', 79.90, 69.90, 4, 1, NULL, NULL),
(2, 'Camiseta Preta Vans', 'vansPreta.jpg', 'Tamanho G;\r\nCor Preta;\r\nManga Curta;\r\nMarca Vans;', 78.90, 69.90, 3, 1, NULL, NULL),
(3, 'Camiseta Polo Branca', 'poloBranca.png', 'Tamanho P;\r\nCor Branca;\r\nManga Curta;\r\n', 178.90, 169.90 ,2, 6, NULL, NULL),
(4, 'Camisa Social Branca', 'socialBranca.jpg', 'Tamanho M;\r\nCor Branca;\r\nManga Longa;\r\n', 378.90,  359.90, 2, 4, NULL, NULL),
(5, 'Calca Jeans', 'calcaJeansF.jpg', 'Tamanho 56;\r\n\r\n', 198.90, 189.90, 3, 3, NULL, NULL),
(6, 'Camiseta Azul', 'camisetaAzul.png', 'Tamanho M;\r\n\r\n', 98.90, 89.90, 2, 7, NULL, NULL),
(7, 'Camiseta Cinza', 'camisetaCinza.png', 'Tamanho M;\r\n\r\n', 98.90, 89.90, 2, 7, NULL, NULL),
(8, 'Camiseta Preta', 'camisetaPreta.png', 'Tamanho M;\r\n\r\n', 98.90, 89.90, 2, 7, NULL, NULL),
(9, 'Camiseta Vermelha', 'camisetaVermelha.png', 'Tamanho M;\r\n\r\n', 98.90, 89.90, 2, 7, NULL, NULL),
(10, 'Polo Preta', 'poloPreta.png', 'Tamanho M;\r\n\r\n', 98.90, 89.90, 2, 7, NULL, NULL),
(11, 'Polo Verde', 'poloVerde.png', 'Tamanho M;\r\n\r\n', 178.90, 169.90, 2, 6, NULL, NULL),
(12, 'Colete Roxo', 'coleteRoxo.png', 'Tamanho G;\r\n\r\n', 258.90, 249.90, 2, 8, NULL, NULL),
(13, 'Calca Marron Clara', 'calcaMarronClara.png', 'Tamanho 58;\r\n\r\n', 78.90, 59.90, 4, 1, NULL, NULL),
(14, 'Calca Verde Escura', 'calcaVerdeEscura.png', 'Tamanho 58;\r\n\r\n', 78.90, 59.90, 4, 1, NULL, NULL),
(15, 'Tenis Now United', 'tenisNowUnited.png', 'Tamanho 39;\r\n\r\n', 278.90, 259.90, 4, 9, NULL, NULL),
(16, 'Tenis Olympikus Rosa', 'tenisOlympikusRosa.png', 'Tamanho 40;\r\n\r\n', 378.90, 359.90, 3, 9, NULL, NULL),
(17, 'Camiseta Atletico Mineiro', 'camisetaAtleticoMineiro.png', 'Tamanho M;\r\n\r\n', 419.90, 389.90, 3, 9, NULL, NULL),
(18, 'Camiseta Atletico Paranaense', 'camisetaAtleticoParanaense.png', 'Tamanho M;\r\n\r\n', 419.90, 389.90, 4, 9, NULL, NULL),
(19, 'Camiseta Brasil', 'camisetaBrasil.png', 'Tamanho M;\r\n\r\n', 419.90, 389.90, 4, 9, NULL, NULL),
(20, 'Camiseta Bulls', 'camisetaBulls.png', 'Tamanho M;\r\n\r\n', 419.90, 389.90, 4, 9, NULL, NULL),
(21, 'Camiseta City', 'camisetaCity.png', 'Tamanho M;\r\n\r\n', 419.90, 389.90, 4, 9, NULL, NULL),
(22, 'Camiseta Corinthians', 'camisetaCorinthians.png', 'Tamanho M;\r\n\r\n', 419.90, 389.90, 4, 9, NULL, NULL),
(23, 'Camiseta Flamengo', 'camisetaFlamengo.jpg', 'Tamanho M;\r\n\r\n', 419.90, 389.90, 4, 9, NULL, NULL),
(24, 'Camiseta PSG', 'camisetaPsg.png', 'Tamanho M;\r\n\r\n', 419.90, 389.90, 4, 9, NULL, NULL),
(25, 'Camiseta Totteham', 'camisetaTotteham.png', 'Tamanho M;\r\n\r\n', 419.90, 389.90, 4, 9, NULL, NULL),
(26, 'Camiseta Palmeiras', 'camisetaPalmeiras.png', 'Tamanho M;\r\n\r\n', 419.90, 389.90, 4, 9, NULL, NULL),
(27, 'Camiseta Infantil Branca', 'camisetaInfantilBranca.png', 'Tamanho 6;\r\n\r\n', 39.90, 19.90, 1, 2, NULL, NULL),
(28, 'Moletom Adidas', 'moletomAdidas.jpg', 'Tamanho M;\r\n\r\n', 119.90, 109.90, 5, 8, NULL, NULL),
(29, 'Moletom Diamond', 'moletomDiamond.jpg', 'Tamanho M;\r\n\r\n', 119.90, 109.90, 5, 8, NULL, NULL),
(30, 'Moletom Brilhant Rosa', 'moletomRosa.jpg', 'Tamanho M;\r\n\r\n', 119.90, 109.90, 5, 8, NULL, NULL),
(31, 'Moletom Fechado Skull', 'moletomFechado.jpg', 'Tamanho M;\r\n\r\n', 119.90, 109.90, 5, 8, NULL, NULL),
(32, 'Bota Coturno Feminino', 'botaPreta.jpg', 'Tamanho 36;\r\n\r\n', 229.90, 219.90, 3, 3, NULL, NULL),
(33, 'Regata New Era Rosa', 'regataRosa.jpg', 'Tamanho P;\r\n\r\n', 99.90, 89.90, 6, 8, NULL, NULL),
(34, 'Regata New Era Cinza', 'regataCinza.jpg', 'Tamanho P;\r\n\r\n', 99.90, 89.90, 6, 8, NULL, NULL),
(35, 'Regata New Era Branca', 'regataBranca.jpg', 'Tamanho P;\r\n\r\n', 99.90, 89.90, 6, 8, NULL, NULL),
(36, 'Regata New Era Azul', 'regataAzul.jpg', 'Tamanho P;\r\n\r\n', 99.90, 89.90, 6, 8, NULL, NULL),
(37, 'Kit 3 Shorts Bermuda', 'kit3Shorts.jpg', 'Tamanho P;\r\n\r\n', 99.90, 89.90, 6, 8, NULL, NULL);



