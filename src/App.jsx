import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ProductModal from "./components/ProductModal.jsx";
import Cart from "./components/Cart.jsx";
import { categories, products } from "./data/products.js";

export default function App() {
  const [category, setCategory] = useState("All"); const [query, setQuery] = useState(""); const [cart, setCart] = useState([]); const [cartOpen, setCartOpen] = useState(false); const [selected, setSelected] = useState(null); const [complete, setComplete] = useState(false);
  const visibleProducts = useMemo(() => products.filter(product => (category === "All" || product.category === category) && `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query.trim().toLowerCase())), [category, query]);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const add = product => { setComplete(false); setCart(current => { const existing = current.find(item => item.id === product.id); return existing ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }]; }); };
  const change = (id, amount) => setCart(current => current.map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter(item => item.quantity > 0));
  return <><Header count={count} onCart={() => setCartOpen(true)} /><Hero /><Categories categories={categories} onSelect={setCategory} /><section id="products" className="section products-section"><div className="products-head"><div><p className="eyebrow">CLOUDCART COLLECTION</p><h2>Find your next essential</h2></div><label className="search"><Search size={20} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products" /></label></div><div className="filters">{categories.map(item => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="product-grid">{visibleProducts.map(product => <ProductCard key={product.id} product={product} onAdd={add} onView={setSelected} />)}</div>{visibleProducts.length === 0 && <p className="no-results">No matching products found.</p>}</section><footer><strong>CloudCart</strong><span>Portfolio demonstration marketplace</span></footer><ProductModal product={selected} onClose={() => setSelected(null)} onAdd={product => { add(product); setSelected(null); setCartOpen(true); }} /><Cart open={cartOpen} items={cart} complete={complete} onClose={() => setCartOpen(false)} onChange={change} onRemove={id => setCart(current => current.filter(item => item.id !== id))} onCheckout={() => { setCart([]); setComplete(true); }} /></>;
}
