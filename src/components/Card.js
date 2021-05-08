import React from "react";

// {
//   "char_id": 1,
//   "name": "Walter White",
//   "birthday": "09-07-1958",
//   "occupation": [
//       "High School Chemistry Teacher",
//       "Meth King Pin"
//   ],
//   "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
//   "status": "Presumed dead",
//   "nickname": "Heisenberg",
//   "appearance": [
//       1,
//       2,
//       3,
//       4,
//       5
//   ],
//   "portrayed": "Bryan Cranston",
//   "category": "Breaking Bad",
//   "better_call_saul_appearance": []
// },

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.img} alt="" />
      <div className="card-info">
        <h1>{item.name}</h1>
        <h3>{item.nickname}</h3>
        <p>{item.birthday}</p>
        <p>{item.status}</p>
      </div>
    </div>
  );
};

export default Card;
