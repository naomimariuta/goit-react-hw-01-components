import "./App.css";

import Profile from "../Profile/Profile";
import user from "json/user.json";

import Statistics from "../Statistics/Statistics";
import data from "json/data.json";

import FriendList from "../FriendList/FriendList";
import friends from "json/friends.json";

import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "json/transactions.json";

function App() {
	return (
	<div className="rendering">
		<Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
		<Statistics title="Upload stats" stats={data} />
		<Statistics stats={data} />
		<FriendList friends={friends} />
		<TransactionHistory items={transactions} />;
	</div>
		
	)
}

export default App;
