import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import styles from './shopcontext.module.scss'; 
export interface ShopItem {
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    imageAlt: string;
    type: 'book' | 'podcast';
    cartLink?: string;
    listenLink?: string;
    price?: number; 
}

export interface CartItem extends ShopItem {
    quantity: number;
}

interface ShopContextType {
    wishlist: ShopItem[];
    toggleWishlist: (item: ShopItem) => void;
    removeFromWishlist: (id: string) => void;
    isInWishlist: (id: string) => boolean;
    wishlistCount: number;
    
    cart: CartItem[];
    addToCart: (item: ShopItem) => void;
    updateQuantity: (id: string, delta: number) => void;
    removeFromCart: (id: string) => void;
    cartCount: number;
    totalPrice: number;

    toast: string | null; // The simple pop-up message
    setToast: (msg: string | null) => void;
}

const ShopContext = createContext<ShopContextType | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
    const [wishlist, setWishlist] = useState<ShopItem[]>(() => {
        const stored = localStorage.getItem('deewan_wishlist');
        return stored ? JSON.parse(stored) : [];
    });

    const [cart, setCart] = useState<CartItem[]>(() => {
        const stored = localStorage.getItem('deewan_cart');
        return stored ? JSON.parse(stored) : [];
    });

    const [toast, setToast] = useState<string | null>(null);

    useEffect(() => { localStorage.setItem('deewan_wishlist', JSON.stringify(wishlist)); }, [wishlist]);
    useEffect(() => { localStorage.setItem('deewan_cart', JSON.stringify(cart)); }, [cart]);

    // Helper to show the small pop-up message
    const triggerToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    };

    const toggleWishlist = (item: ShopItem) => {
        if (wishlist.some(i => i.id === item.id)) {
            setWishlist(prev => prev.filter(i => i.id !== item.id));
            triggerToast("Removed from wishlist");
        } else {
            setWishlist(prev => [...prev, item]);
            triggerToast("Added to wishlist successfully! ❤️");
        }
    };

    const addToCart = (item: ShopItem) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...item, quantity: 1, price: item.price  }];
        });
        triggerToast("Added to cart successfully! 🛒");
    };

    const updateQuantity = (id: string, delta: number) => {
        setCart(prev => prev.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(i => i.id !== id));
        triggerToast("Item removed from cart");
    };

    const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

    return (
        <ShopContext.Provider value={{
            wishlist, toggleWishlist, removeFromWishlist: (id) => setWishlist(p => p.filter(i => i.id !== id)), 
            isInWishlist: (id) => wishlist.some(i => i.id === id), wishlistCount: wishlist.length,
            cart, addToCart, updateQuantity, removeFromCart, 
            cartCount: cart.reduce((a, b) => a + b.quantity, 0), totalPrice,
            toast, setToast
        }}>
            {children}
            {toast && (
                <div className={styles.cartToast}>{toast}</div>
            )}
        </ShopContext.Provider>
    );
}

export function useShop() {
    const ctx = useContext(ShopContext);
    if (!ctx) throw new Error('useShop must be used inside ShopProvider');
    return ctx;
}
