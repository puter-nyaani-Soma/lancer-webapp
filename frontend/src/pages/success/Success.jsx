import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { Link } from "react-router-dom";


const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const data = await newRequest.put("/orders", { payment_intent });
        setOrder(data.data.order);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    makeRequest();
  }, []);

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const formattedDate = `${day}-${month}-${year}`;


  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : order ? (
        

          <div className="flex flex-col items-center max-w-md mx-auto mt-8 bg-[#303446] border-[#EFC078] border-4 rounded-lg p-5 text-white pdf-content print:text-black">
            <img src="/img/trans-logo.png" className="w-60 h-auto" />
            <hr className="mb-2" />
            <h1 className="font-bold text-2xl my-4 text-center text-white print:text-black">Invoice</h1>
            <div className="flex justify-between mb-6 print:text-black">
              <div className="text-white print:text-black">
                <div>Date: {formattedDate}</div>
                <div>Invoice No: {order._id}</div>
              </div>
            </div>
            <div className="flex flex-row justify-around gap-10 items-start w-full">
              <div className="mb-8">
                <h2 className="font-bold mb-4">Bill To:</h2>
                <div className="mb-2">{order.buyerName}</div>
              </div>
              <div className="mb-8">
                <h2 className="font-bold mb-4">On behalf of:</h2>
                <div>{order.sellerName}</div>
              </div>
            </div>
            <table className="w-full  mb-8">
              <thead>
                <tr>
                  <th className="text-left pl-12 font-bold">Description</th>
                  <th className="text-right pr-12 font-bold">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left pl-12">{order.title}</td>
                  <td className="text-right pr-12">₹{order.price}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="text-left pl-12 font-bold">Total</td>
                  <td className="text-right pr-12 font-bold">₹{order.price}</td>
                </tr>
              </tfoot>
            </table>
            <div className="mb-2 text-center">Thank you !!!!</div>
            <div className="text-sm text-center">Please take a copy of the bill in case of discrepancies</div>
          <button
  onClick={() => window.print()}
  className="mt-4 py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 cursor-pointer print:hidden"
>
  Print/Save as PDF
</button>
<Link to='/orders' className="text-sm text-center print:hidden ">Click here after saving </Link>
          </div>
        
        
      ) : (
        <div>Failed to load order data.</div>
      )}
    </div>
  );
};

export default Success;
