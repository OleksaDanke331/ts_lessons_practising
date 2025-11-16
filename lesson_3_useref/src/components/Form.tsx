import React, { useRef, useState, type FormEvent } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  console.log("Saved Name without re-rendering: " + name);
  console.log("Saved Email without re-rendering: " + email);
  console.log("Saved Password without re-rendering: " + password);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //Отримання значень
    //name.current — це DOM-елемент
    //.value — це властивість DOM-елемента, що містить введений текст
    //Таким чином, name — це контейнер-об'єкт, 
    //а name.current — це те, що всередині контейнера.
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;
    console.log("Received name: " + nameValue);
    console.log("Received email: " + emailValue);
    console.log("Received password: " + passwordValue);

    // Оновлення стану для відображення
    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="text" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit</button>
      <section>
        <h1>Name: {submittedData.name}</h1>
        <h1>Email: {submittedData.email}</h1>
        <h1>Password: {submittedData.password}</h1>
      </section>
      ;
    </form>
  );
};

export default Form;
