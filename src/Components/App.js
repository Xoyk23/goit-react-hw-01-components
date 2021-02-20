import React from "react";

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransationHistory from "./TransactionHistory/TransactionHistory";

import user from "../data/user.json";
import stats from "../data/statistical-data.json";
import friends from "../data/friends.json";
import items from "../data/transactions.json";

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransationHistory items={items} />
    </>
  );
};

export default App;

console.log(user);
