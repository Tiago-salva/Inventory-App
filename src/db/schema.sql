CREATE TABLE IF NOT EXISTS type_clothes (
  id SERIAL PRIMARY KEY,
  type_name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS brands (
  id SERIAL PRIMARY KEY,
  brand_name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  type_clothes_id INTEGER REFERENCES type_clothes(id),
  brand_id INTEGER REFERENCES brands(id),
  product_name VARCHAR(100) UNIQUE NOT NULL,
  product_description TEXT,
  price NUMERIC(10,2),
  image_url VARCHAR,
  cantity INTEGER DEFAULT 0
);