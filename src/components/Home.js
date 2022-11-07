import React from "react";
import store from "../store/UserStore";
function Home() {
  const { userId, userName, maths, hindi } = store;
  return (
    <div>
      {userName} := {userId}
      <br></br>
      total marks are : {store.totalMarks}
    </div>
  );
}

export default Home;
