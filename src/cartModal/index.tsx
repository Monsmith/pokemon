import React from 'react';
import Modal from 'react-modal';
import './cartModal.css';

interface CartModalProps {
    cartItems: CardType[];
    cartModalIsOpen: boolean;
    onCloseModal: React.Dispatch<React.SetStateAction<any>>;
    setCartItems: React.Dispatch<React.SetStateAction<any>>;
}

interface CardType {
    id: number;
    name: string;
    rarity: string;
    cardmarket: CardMarket;
    images: Image;
    set: Set;
    quantity?: number
}

interface Image {
    small: string;
    large: string;
}

interface Set {
    total: number;
}

interface CardMarket {
    prices: Prices;
}

interface Prices {
    averageSellPrice: number;
}

function CartModal(props: CartModalProps) {
    const { cartItems, onCloseModal, cartModalIsOpen, setCartItems  } = props

    const onDecrease = (id: number) => {
        if (cartItems.find((item: CardType) => item.id === id)) {
            const newCartItems = cartItems.map((item: CardType) => {
                if (item.id === id) {
                    if (item.quantity === 1) {
                        return null;
                    }

                    return {
                        ...item,
                        quantity: item.quantity && item.quantity - 1
                    }
                }


                return item;
            })
            setCartItems(newCartItems.filter(item => item !== null));
            return;
        }
    }

    const onIncrease = (id: number) => {
        if (cartItems.find((item: CardType) => item.id === id)) {
            const newCartItems = cartItems.map((item: CardType) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity && item.quantity + 1
                    }
                }

                return item;
            })
            setCartItems(newCartItems);
            return;
        }
    }

    const onClearItems = () => {
        setCartItems([])
    }

    return (
        <Modal
            isOpen={cartModalIsOpen}
            onRequestClose={() => (onCloseModal(!cartModalIsOpen))}
            className="custom-modal bg-backgroundPrimary"
            overlayClassName="custom-modal-overlay"
        >
            <div className='header p-5'>
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight">
                    Cart
                </h1>
                <div onClick={() => {onClearItems()}}>
                    clear all
                </div>
            </div>

            <div className="modal-content">
                {
                    cartItems.length > 0 ? <table className="table-fixed w-full">
                        <thead>
                        <tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cartItems.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>
                                                <img className='w-11 h-14'src={item.images.small}/>
                                            </td>
                                            <td>
                                                { item.name }
                                            </td>
                                            <td>
                                                { item.cardmarket.prices.averageSellPrice }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td onClick={() => onDecrease(item.id)}>decrese</td>
                                            <td>{item.quantity}</td>
                                            <td onClick={() => onIncrease(item.id)}>increase</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                        </tbody>
                    </table> : <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight">Cart is empty</h1>
                }
            </div>
        </Modal>
    );
}

export default CartModal;
