import { Profile } from "./user/profile";
import { Statistics } from "./statistics/statistics";
import { FriendsList } from "./friends/friendsList";
import { Transactions } from "./transactions/transactions";

import user from '../user.json';
import friends from '../friends.json';
import data from '../data.json';
import transactions from "../transactions"





export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </div>
    
  );
};
