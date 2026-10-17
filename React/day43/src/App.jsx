
import { useState } from "react";

function App() {
  const [follow, setFollow] = useState(false);
  const [cart, setCart] = useState(0);

  const device = [
    {name: "Headphones", price: 999, rating: 4.5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
    },
    {name: "Watch", price: 1499, rating: 4.2, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
    }
  ];

  return (
    <div className="p-5">
      <nav className="flex flex-wrap justify-between gap-3 bg-blue-900 p-4 text-white">
        <h1>My Store</h1>
        <div className="flex flex-wrap gap-3">
          <a href="#home">Home</a>
          <a href="#profile">About</a>
          <a href="#products">Services</a>
          <a href="#contact">Contact</a>
          <button>Login</button>
        </div>
      </nav>

      <h2 id="home">Welcome to My Store</h2>

      <section id="profile" className="my-5">
        <h2>Profile Card</h2>
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
          alt="Profile"
          width="100"
        />
        <h3>Vijay</h3>
        <p>React Developer</p>
        <p>I am learning React and Tailwind CSS.</p>
        <button onClick={() => setFollow(!follow)}>
          {follow ? "Following" : "Follow"}
        </button>
      </section>

      <section id="products">
        <h2>Products</h2>
        <p>Cart Items: {cart}</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded bg-gray-100 p-3">
            <img
              src={device[0].image}
              alt={device[0].name}
              className="h-40 w-full object-cover"
            />
            <h3>{device[0].name}</h3>
            <p>Price: ₹{device[0].price}</p>
            <p>Rating: ★ {device[0].rating}</p>
            <button onClick={() => setCart(cart + 1)}>
              Add to Cart
            </button>
          </div>

          <div className="rounded bg-gray-100 p-3">
            <img
              src={device[1].image}
              alt={device[1].name}
              className="h-40 w-full object-cover"
            />
            <h3>{device[1].name}</h3>
            <p>Price: ₹{device[1].price}</p>
            <p>Rating: ★ {device[1].rating}</p>
            <button onClick={() => setCart(cart + 1)}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
