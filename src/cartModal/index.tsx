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

    const totalCardAmount = () => {
        let amount = 0
        cartItems.map((item: CardType) => {
            amount += (item?.quantity || 1)
        })

        return amount
    }

    const totalPrice = () => {
        let sum = 0
        cartItems.map((item: CardType) => {
            sum += item.cardmarket.prices.averageSellPrice * (item.quantity || 1)
        })
        return sum
    }

    return (
        <Modal
            isOpen={cartModalIsOpen}
            onRequestClose={() => (onCloseModal(!cartModalIsOpen))}
            className="custom-modal bg-backgroundPrimary font-poppins"
            overlayClassName="custom-modal-overlay"
        >
            <div className='header p-5 flex justify-between cursor-pointer'>
                <div>
                    <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight">
                        Cart
                    </h1>
                    <div className='cursor-pointer' onClick={() => {onClearItems()}}>
                        clear all
                    </div>
                </div>
                <div className='w-12 h-12 rounded-lg bg-btnPrimary content-center text-center fw-bold' onClick={() => (onCloseModal(!cartModalIsOpen))}>
                    X
                </div>
            </div>

            <div className="block max-h-[calc(100%-300px)] overflow-y-auto p-5">
                {
                    cartItems.length > 0 ? <table className='w-full'>
                        <thead>
                            <tr className='text-left border-b border-addToCartHoverText'>
                                <th className='font-light'>Item</th>
                                <th className='w-3/4 font-light'>Qty</th>
                                <th className='w-16 font-light'>Price</th>
                            </tr>
                        </thead>
                        <tbody className='h-96 overflow-y-auto'>
                        {
                            cartItems.map((item) => {
                                return (
                                    <>
                                        <tr >
                                            <td className='py-5'>
                                                <img className='w-11 h-14'src={item.images.small}/>
                                            </td>
                                            <td className='w-3/4 font-light'>
                                                <div>{ item.name }</div>
                                                <div className='text-disabledText'>$ { item.cardmarket.prices.averageSellPrice}</div>
                                            </td>
                                            <td className='w-16'>
                                                $ { (item.cardmarket.prices.averageSellPrice * (item.quantity || 1)).toFixed(2) }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td onClick={() => onDecrease(item.id)}>
                                                <div className='w-14 h-14 bg-grayCart cursor-pointer rounded-lg content-center text-center fw-bold text-2xl'>
                                                    -
                                                </div>
                                            </td>
                                            <td>
                                                <div className='text-center content-center bg-grayCart rounded-lg h-14 mx-3'>
                                                    {item.quantity}
                                                </div>
                                            </td>
                                            <td onClick={() => onIncrease(item.id)}>
                                                <div className='w-14 h-14 bg-grayCart cursor-pointer rounded-lg content-center text-center fw-bold text-2xl'>
                                                    +
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                        </tbody>
                    </table> : <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight">Cart is empty</h1>
                }
            </div>
            <div className='summary p-4'>
                <div className='flex justify-between mt-3'>
                    <div className='text-disabledText'>
                        Total card amount
                    </div>
                    <div>
                        {totalCardAmount()}
                    </div>
                </div>
                <div className='flex justify-between mt-3'>
                    <div className='text-disabledText'>
                        Total Price
                    </div>
                    <div>
                        $ {totalPrice().toFixed(2)}
                    </div>
                </div>

                <div className='w-full cursor-pointer h-12 mt-3 rounded-lg bg-btnPrimary content-center text-center fw-bold'>
                    Continue to Payment
                </div>
            </div>
        </Modal>
    );
}

export default CartModal;
