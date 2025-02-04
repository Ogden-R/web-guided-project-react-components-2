// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react';
import FriendsList from './FriendsList';
import Search from './Search';
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import friendsData from '../dummy-data/friends';

export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [friends, setFriends] = useState(friendsData);

  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [searchTerm, setSearchTerm] = useState('');

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa

  // Function expression
  const changeStatus = (id) => {
    // 1.) Loop over our friends array
    // 2.) Find the friend with the id that matches the passed id
    // 3.) Change that friends married status
    // 4.) Update our state array

    // for (let i = 0; i < friends.length; i++) { friend = friends[i] }
    const updatedFriends = friends.map(friend => {
      if (friend.id === id) {
        return { ...friend,  married: !friend.married };
      } else {
        return friend;
      }
    })

    setFriends(updatedFriends);
  }

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)
  const getFilteredFriends = () => {
    // loop over the friends array
    // and only return names that contain the search term
    // map, filter,       reduce
    const filteredFriends = friends.filter(friend => {
      return friend.name.toLowerCase().includes(searchTerm.toLowerCase());
    })

    return filteredFriends;
  }

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
      <Search setSearchTerm={setSearchTerm} />

      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
      <FriendsList friends={getFilteredFriends()} changeStatus={changeStatus} />
      {/* props.friends = friends */}
      {/* FriendsList(friends) */}
    </div>
  )
}
