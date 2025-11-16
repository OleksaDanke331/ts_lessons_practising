import React, { useState } from "react";

//Оголошення Типу Стану
interface UserProfileState {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  //Ініціалізація Стану
  const [profile, setProfile] = useState<UserProfileState>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    // Викликаємо сеттер setProfile, передаючи функцію
    setProfile((prevProfile) => ({
      // 1. Копіюємо всі властивості попереднього стану
      ...prevProfile,
      // 2. Перезаписуємо лише поле 'name' новим значенням
      name,
    }));
  };

  const updateAge = (age: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, age: +age }));
  };

  const updateEmail = (email: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />

      <h3>Profile Sumary:</h3>

      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default UserProfile;
