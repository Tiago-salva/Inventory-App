INSERT INTO brands (id, brand_name)
VALUES (1, 'Nike'), (2, 'Adidas'), (3, 'Puma');

INSERT INTO type_clothes (id, type_name)
VALUES (1, 'T-shirt'), (2, 'Pants'), (3, 'Sneackers');

INSERT INTO products (type_clothes_id, brand_id, product_name, product_description, price, image_url, cantity)
VALUES 
  (1, 2, 'T-shirt Fashion Cut Line', 'Perfect for fitness people', 20.99, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/53ba28835b44432c8706bc64e0cfaaca_9366/Remera_Trifolio_Kids_Azul_JX9003_01_laydown.jpg', 15),
  (2, 1, 'Nike Icon Pants', 'Light and breathable, ideal for basketball', 39.99, 'https://nikearprod.vtexassets.com/arquivos/ids/1111686-1200-1200?width=1200&height=1200&aspect=true', 30),
  (3, 1, 'Nike Court Vision Low', 'Inspired by the basketball''s retro sneakers', 50.99, 'https://nikearprod.vtexassets.com/arquivos/ids/1237630-1200-1200?width=1200&height=1200&aspect=true', 5);
