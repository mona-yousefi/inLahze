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
      <div className="flex flex-col mt-20 mb-10 justify-center p-5 w-[70vw] h-fit bg-gray-200 rounded-lg shadow-md">
        <div className="w-full">
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
                  <tr key={item.id} className="h-32">
                    <td className=" text-center border p-2 gap-2 border-black">
                      <div className="flex items-center gap-3">
                      <Image src={item.image} alt={item.title} width={25} height={25} className="justify-self-start"></Image>
                      <p className="justify-self-center text-lg">{item.title}</p>
                      </div>
                    </td>
                    <td className="text-center border p-2 border-black ">{item.price} تومان</td>
                    <td className="border border-black text-center align-middle">
                      <div className="flex items-center justify-center gap-2 h-full">
                      <button 
                       onClick={() => dispatch(cartActions.reduceFromCart(item.id))}
                       className="text-red-500 hover:text-red-700 p-1"
                      >
                      <LuMinus size={18} />
                      </button>
                      <span className="min-w-[10px] text-center">
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
                    <td className="text-center border border-black text-red-500">
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
              <div className="w-full flex items-center justify-between px-5  box-border">
                {/* order and total which are flex-col */}
                <div className="flex flex-col w-[30%]">
                  <h6 className="mt-5 font-bold text-lg">سفارشات شما</h6>
                  <div className="text-xl font-bold">مجموع: {total} تومان</div>
                </div>
             {/* payment method */}
                <div className="flex flex-col justify-center items-center gap-3 w-[60%]">
                  <h1 className="font-bold text-lg">انتخاب درگاه پرداخت</h1>
                  <div className="flex gap-2">
                    <button className="bg-gray-400 bg-opacity-5 focus:bg-opacity-100">
                      <Image src="Bank Logo-2-sz7xIPIp.svg" width={150} height={10} className="border border-black px-10 py-2"></Image>
                    </button>
                    <button className="bg-gray-400 bg-opacity-5 focus:bg-opacity-100 focus:transition-opacity">
                      <Image src="Bank Logo-OAi3Gfqe.svg" width={150} height={10} className="border border-black px-10 py-2"></Image>
                    </button>
                  </div>
                </div>
                {/* checkout and shopping buttons */}
                <div className="flex flex-col justify-center items-center gap-4 p-3 w-[40%]">
                  <button className="bg-blue-300 px-3 py-2 rounded font-bold mb-2 w-full text-xl">تسویه حساب </button>
                  <Link href="/products" className="text-center bg-productCard px-4 py-2 font-bold rounded w-full text-xl">ادامه ی خرید</Link>
                </div>
              </div>
         </div>
      </div>
    </div>
  );
};

export default Cart;
