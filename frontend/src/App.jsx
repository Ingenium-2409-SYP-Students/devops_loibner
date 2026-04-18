import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Fehler beim Laden der Daten");
          }
          return response.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => setError(err.message));
  }, []);

  return (
      <main>
        <h1>Mini Shop</h1>
        <p>Produkte aus dem Backend</p>

        {error && <p role="alert">{error}</p>}

        <p>Anzahl: {products.length}</p>

        <ul>
          {products.map((product) => (
              <li key={product.id}>
                {product.name} - € {product.price.toFixed(2)}
              </li>
          ))}
        </ul>
      </main>
  );
}

export default App;