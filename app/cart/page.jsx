'use client';
import { LuPlus} from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="flex justify-center p-4 h-screen">
      <div className="flex flex-col mt-12 justify-center w-[80vw] p-5 bg-gray-200">
        <div className="overflow-x-auto">
          {!cartItems.length ? (
            <p className="text-center">سبد خرید شما خالی است.</p>
          ) : (
            <table className="table border-collapse w-full font-bold border-black box-border">
              <thead>
                <tr>
                  <th className="text-center border border-black p-3">نام محصول</th>
                  <th className="text-center border border-black p-3">قیمت</th>
                  <th className="text-center border border-black p-3">تعداد</th>
                  <th className="text-center border border-black p-3">مجموع</th>
                  <th className="text-center border border-black p-3">حذف کلی محصول</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className=" text-center border p-2 gap-2 border-black">
                      <div className="flex items-center gap-3">
                      <Image src={item.image} width={25} height={25} className="justify-self-start"></Image>
                      <p className="justify-self-center">{item.title}</p>
                      </div>
                    </td>
                    <td className="text-center border p-2 border-black ">{item.price} تومان</td>
                    <td className="border border-black p-2 text-center align-middle">
                      <div className="flex items-center justify-center gap-2 h-full">
                      <button 
                       onClick={() => dispatch(cartActions.reduceFromCart(item.id))}
                       className="text-red-500 hover:text-red-700 p-1"
                      >
                      <LuMinus size={18} />
                      </button>
                      <span className="min-w-[24px] text-center">
                          {item.quantity}
                      </span>
                      <button 
                        onClick={() => dispatch(cartActions.addToCart(item))}
                        className="text-green-500 hover:text-green-700 p-1"
                        >
                      <LuPlus size={18} />
                      </button>
                      </div>
                    </td>
                    <td className="text-center border border-black">{(item.price * item.quantity)} تومان</td>
                    <td className="text-center border border-black">
                      <button
                        onClick={() =>
                          dispatch(cartActions.removeFromCart(item.id))
                        }
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="flex flex-col gap-5 items-center">
          <h6 className="mt-5">سفارشات شما</h6>
          <div>مجموع: {total} تومان</div>
          <button className="bg-blue-300 px-3 py-2 rounded">تسویه حساب </button>
          <div>
          <Link href="/products" className="text-center bg-productCard p-4 font-bold rounded ">ادامه ی خرید</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
