import React from "react";

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item)=> sum+item.price,0)

    const checkOutHandle = ()=>{
        setCarts([])
    }

    const removeBtn = (item)=>{
        const filterCart = carts.filter(cart=> cart.id!== item.id)

        setCarts(filterCart)
    }

    
  return (
    <div className=" bg-base-100 shadow-2xl  container mx-auto rounded-2xl p-10  mt-10 space-y-2.5 ">
      <h2 className="text-2xl font-bold">Your Cart</h2>

     <div className="  space-y-2.5">
    {
        carts.length===0? <p className='text-center text-2xl font-bold'>Cart empty</p>:

        <>

             {carts.map((item) => (
      
          <div key={item.id} className="bg-base-200 p-3 rounded-xl ">
         
             <div className="flex items-center justify-between ">
            <div className="flex gap-2.5 items-center">
              <img className="h-18.5 rounded-full" src={item.icon} alt="" />
              <div>
                <h3 className="text-[20px] font-bold">{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </div>
            <button onClick={()=>removeBtn(item) } className="btn btn-soft btn-error">Remove</button>

          </div>
         
        </div>

        
     


      ))}

      <div className="flex justify-between items-center">
        <p className="text-[#627382]">Total</p>
        <p className="text-xl font-bold">${totalPrice}</p>
      </div>

      <button onClick={checkOutHandle} className="btn btn-accent w-full font-bold text-white">Proceed to Checkout</button>
        </>
    }
     </div>
    </div>
  );
};

export default Cart;
