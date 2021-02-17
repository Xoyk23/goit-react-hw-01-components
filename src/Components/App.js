import React from "react";

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";

import user from "../data/user.json";
import stats from "../data/statistical-data.json";

const App = () => {
  return (
    <>
      <Profile user={user} />
      {/* <Statistics stats={stats} /> */}
    </>
  );
};

export default App;

console.log(user);
