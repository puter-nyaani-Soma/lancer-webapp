import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import newRequest from "../../utils/newRequest";
import Review from "../review/Review";


import "./Reviews.scss";
import { toast } from "react-toastify";
const Reviews = ({ gigId }) => {
  const [starcount,setStarcount]=useState(0)
  const stars = {
    count:5,
    color:"grey",
    activeColor: "yellow",
    isHalf:false,
    size:30,
    a11y: true,
    onChange: (newStarCount) => {
      setStarcount(newStarCount);
    }
    

  }

  const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    },
    onError: (error) => {
      if (error.response && error.response.status === 403) {
        // Handle the 403 error here (e.g., display an error message).
        toast.error("You have to buy a gig before reviewing it");
      } else {
        // Handle other errors here.
        toast.error("You cant post a review");
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = starcount;
   
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}
      <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="write your opinion" />
          <ReactStars {...stars}/>
          

    
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
