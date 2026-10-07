import { Cloud, ShoppingCart } from "lucide-react";
export default function Header({ count, onCart }) {
  return <header className="header"><a className="brand" href="#home"><span className="logo"><Cloud /></span><span><strong>CloudCart</strong><small>BUILD. LEARN. CREATE.</small></span></a><nav><a href="#home">Home</a><a href="#categories">Categories</a><a href="#products">Products</a></nav><button className="cart-button" onClick={onCart}><ShoppingCart size={18} />Cart{count > 0 && <span>{count}</span>}</button></header>;
}
