// src/components/CartIcon/CartIcon.tsx
import './CartIcon.css'; // Importa el archivo de estilos

interface CartIconProps {
  itemCount: number;
  onToggleView: () => void;
}

export const CartIcon = ({ itemCount, onToggleView }: CartIconProps) => {
  return (
    <div className="cart-icon-container">
      <button className="cart-icon-button" onClick={onToggleView}>
        🛒
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
      </button>
    </div>
  );
};