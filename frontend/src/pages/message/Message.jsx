import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useState } from "react";
import "./Message.scss";
const Message = () => {
  const { id } = useParams();
  const [sendername, setSendername] = useState('');
  const [senderimg, setSenderimg] = useState('');
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages", id],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then(async (res) => {
        const messages = res.data;
        const messagesWithSenderNames = messages.map((message) => {
          if (message.userId !== currentUser._id) {
            const senderId = message.userId;
            (async () => {
              const sender = await newRequest.get(`/users/${senderId}`);
              setSendername(sender.data.username);
              setSenderimg(sender.data.img);
            })();
          }
          return { ...message, senderName: sendername, senderPic: senderimg };
        });

        return messagesWithSenderNames;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <>
          <div className="flex flex-row items-center gap-3">

            <img src={senderimg} className="w-[40px] h-[40px] rounded-full" alt="" /> 
            <p className="font-semibold">
              {sendername}
              </p>
          </div>
            <div className="messages">
              {data.map((m) => (
                <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                  <img
                    src={m.userId === currentUser._id ? currentUser.img : senderimg}
                    alt=""
                  />
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" autoFocus placeholder="write a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;


// const Message = () => {
//   const { id } = useParams();
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));

//   const queryClient = useQueryClient();

//   const { isLoading, error, data } = useQuery({
//     queryKey: ["messages",id],
//     // queryFn: () =>
//     //   newRequest.get(`/messages/${id}`).then((res) => {
//     //     return res.data;
//     //   }),
//     queryFn: () =>
//   newRequest.get(`/messages/${id}`).then(async (res) => {
//     const messages = res.data;
//     const messagesWithSenderNames = await Promise.all(
//       messages.map(async (message) => {
//         const senderId = message.userId;
//         const sender = await newRequest.get(`/users/${senderId}`);
//         console.log(sender.data.username);
//         return { ...message, senderName: sender.data.username ,senderPic: sender.data.img};
//       })
//     );
//     return messagesWithSenderNames;
//   }),
//   });

//   const mutation = useMutation({
//     mutationFn: (message) => {
//       return newRequest.post(`/messages`, message);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["messages"]);
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     mutation.mutate({
//       conversationId: id,
//       desc: e.target[0].value,
//     });
//     e.target[0].value = "";
//   };

//   return (
//     <div className="message">
//       <div className="container">
        
//         {isLoading ? (
//           "loading"
//           ) : error ? (
//             "error"
//             ) : (
//               <>
//           {currentUser.username === data[0].senderName?" ":data[0].senderName}
//           <div className="messages">
//          {data.map((m) => (
//            <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
//                 <img
//                   src={m.userId === currentUser._id ? currentUser.img : m.senderPic}
//                   alt=""
//                 />

//                 <p>{m.desc}</p>
//               </div>
//             ))}
//           </div>
//             </>
//         )}
//         <hr />
//         <form className="write" onSubmit={handleSubmit}>
//           <textarea type="text" autoFocus placeholder="write a message" />
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Message;
