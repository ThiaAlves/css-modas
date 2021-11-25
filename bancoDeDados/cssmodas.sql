

INSERT INTO `categorias` (`id`, `categoria`, `created_at`, `updated_at`) VALUES
(1, 'Infantil', NULL, NULL),
(2, 'Adulto', NULL, NULL),
(3, 'Feminino', NULL, NULL),
(4, 'Masculino', NULL, NULL),
(5, 'Moda Praia', NULL, NULL),
(6, 'Inverno', NULL, NULL),
(7, 'Verão', NULL, NULL);


INSERT INTO `empresas` (`id`, `empresa`, `whatsapp`, `created_at`, `updated_at`) VALUES
(1, '776', '4497623839', NULL, NULL),
(2, 'Marisa', '4498392773', NULL, NULL),
(3, 'Bela Modas', '4498040444', NULL, NULL),
(4, 'GB Outlet', '4498645356', NULL, NULL),
(5, 'Flor de Liz', '449876223', NULL, NULL),
(6, 'Lótus', '4484983473', NULL, NULL),
(7, 'Elegance Modas', '4498643456', NULL, NULL),
(8, 'New Era', '4498720923', NULL, NULL);

INSERT INTO `produtos` (`id`, `produto`, `foto`, `descricao`, `valor`, `categoria_id`, `empresa_id`, `created_at`, `updated_at`) VALUES
(1, 'Camiseta Branca Vans', 'default.jpg', 'Tamanho M;\r\nCor Branca;\r\nManga Curta;\r\nMarca Vans;', 79.90, 4, 1, NULL, NULL),
(2, 'Camiseta Preta Vans', 'default.jpg', 'Tamanho G;\r\nCor Preta;\r\nManga Curta;\r\nMarca Vans;', 78.90, 3, 1, NULL, NULL),
(3, 'Camiseta Rosa Polo', 'default.jpg', 'Tamanho PP;\r\nCor Rosa;\r\nManga Curta;\r\n', 178.90, 2, 6, NULL, NULL),
(4, 'Camisa Social Branca', 'default.jpg', 'Tamanho M;\r\nCor Branca;\r\nManga Longa;\r\n', 378.90, 2, 4, NULL, NULL),
(5, 'Calça Jeans', 'default.jpg', 'Tamanho 56;\r\n\r\n', 198.90, 3, 3, NULL, NULL);


