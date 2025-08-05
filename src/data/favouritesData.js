import doc1Avatar from "../assets/images/doc1-avatar.png";
import doc2Avatar from "../assets/images/doc2-avatar.png";
import doc3Avatar from "../assets/images/doc3-avatar.png";
import doc4Avatar from "../assets/images/doc4-avatar.png";

import hospital1Avatar from "../assets/images/hospital1-avatar.png";
import hospital2Avatar from "../assets/images/hospital2-avatar.png";
import hospital3Avatar from "../assets/images/hospital3-avatar.png";

const FAVOURITES = [
  // Example favorite items, you can replace these with actual data
  {
    id: 1,
    avatar: doc1Avatar,
    bio: "Bio for Doctor 1",
    name: "Favorite Doctor 1",
    rating: 4.5,
    appointmentTime: "9:30am - 8:00pm",
  },
  {
    id: 2,
    avatar: doc2Avatar,
    bio: "Bio for Doctor 2",
    name: "Favorite Doctor 2",
    rating: 4.0,
    appointmentTime: "10:00am - 7:00pm",
  },
  {
    id: 3,
    avatar: doc3Avatar,
    bio: "Bio for Doctor 3",
    name: "Favorite Doctor 3",
    rating: 4.8,
    appointmentTime: "11:00am - 6:00pm",
  },
  {
    id: 4,
    avatar: doc4Avatar,
    bio: "Bio for Doctor 4",
    name: "Favorite Doctor 4",
    rating: 3.5,
    appointmentTime: "8:00am - 5:00pm",
    },
    {
        id: 5,
        avatar: doc1Avatar,
        bio: "Bio for Doctor 5",
        name: "Favorite Doctor 5",
        rating: 4.0,
        appointmentTime: "9:00am - 5:00pm",
    }
];

const HOSPITALS = [
  {
    id: 1,
    avatar: hospital1Avatar,
    name: "City Hospital",
    address: "123 Main St, City",
    rating: 4.2,
    appointmentTime: "9:00am - 6:00pm",
  },
  {
    id: 2,
    avatar: hospital2Avatar,
    name: "Health Center",
    address: "456 Elm St, City",
    rating: 4.0,
    appointmentTime: "10:00am - 7:00pm",
  },
  {
    id: 3,
    avatar: hospital3Avatar,
    name: "General Hospital",
    address: "789 Oak St, City",
    rating: 4.5,
    appointmentTime: "11:00am - 6:00pm",
  },
];

export { FAVOURITES, HOSPITALS };
