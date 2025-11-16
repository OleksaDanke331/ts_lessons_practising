import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400");

  const [profileUrl, setProfileUrl] = useState("https://placehold.co/100x100");

  const handleBannerChange = (event: any) => {
    //event.target: Це сам DOM-елемент <input type="file">, який викликав подію.
    //event.target.files: Ця властивість містить об'єкт FileList — масив файлів, які вибрав користувач. Оскільки зазвичай ми очікуємо лише один файл (якщо не вказано multiple), ми беремо перший елемент цього масиву: [0].
    //const file: Змінна file тепер зберігає об'єкт File (зокрема, об'єкт зображення або іншого завантаженого медіа).
    const file = event.target.files[0];

    //if (file): Перевіряє, чи дійсно користувач вибрав файл (а не просто відкрив і закрив вікно вибору файлу).
    if (file) {
      //URL.createObjectURL(file): Це ключова частина:

      //Це метод Web API, який створює унікальний, тимчасовий рядок-URL (наприклад, blob:http://localhost:3000/a3b1c2d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6).

      //Цей URL не є постійною адресою файлу на сервері; це внутрішнє посилання, яке браузер використовує для доступу до даних файлу, що вже знаходиться в пам'яті клієнта.

      //Це дозволяє вам відобразити зображення негайно (наприклад, у тегу <img src={bannerUrl} />) до того, як файл буде фактично завантажений на сервер.
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event?.target.files[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="Change Logo"
          className="w-40 h-40 object-cover rounded-full"
        />

        <button className="absolute ml-[6rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-[4rem]">Huxn WebDev</h1>
          <p className="ml-[4rem]">1M views</p>
          <p className="mt-2 ml-[4rem]">
            This is a short description of the YouTube channel. It gives an
            overview of the and what viewers can expect.
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Profile;
