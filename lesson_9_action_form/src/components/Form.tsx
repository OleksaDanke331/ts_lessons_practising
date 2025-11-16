import React from "react";

const Form = () => {
  //Ця функція є обробником даних форми.
  //formData: any: У цьому контексті formData — це об'єкт FormData, який автоматично створюється браузером (і доступний у React/Next.js). Він містить усі дані, зібрані з <input>-полів, які мають атрибут name.
  const formAction = (formData: any) => {
    //const userData = { ... }: Створюється звичайний об'єкт JavaScript з вилученими даними.
    const userData = {
      //formData.get("name"): Це метод об'єкта FormData, який використовується для вилучення значення поля за його атрибутом name.
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(userData);
  };

  return (
    //<form action={formAction}>: Це ключовий рядок. Замість використання стандартного React-механізму onSubmit, тут використовується властивість action.
    <form action={formAction}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <br />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <br />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <br />

      {/* <button type="submit">: Ця кнопка ініціює відправку форми і, відповідно, викликає функцію, прив'язану до action. */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
