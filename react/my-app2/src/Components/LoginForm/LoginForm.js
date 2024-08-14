import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = function LoginForm() {
  // Використовуємо react-hook-form для управління формою
  const {
    register, // Реєструємо поля вводу
    handleSubmit, // Обробник події відправки форми
    formState: { errors }, // Об'єкт з помилками валідації
  } = useForm();

  // Функція, яка виконується при відправці форми
  const onSubmit = (data) => {
    console.log(data); // Виводимо дані з форми у консоль
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h2 className="form-title">Форма входу</h2>
        <div className="form-group">
          <label className="form-label">Електронна пошта</label>
          <input
            type="email"
            {...register("email", {
              required: true, // Поле обов'язкове
              pattern: /^\S+@\S+$/i, // Перевірка на правильний формат електронної пошти
            })}
            className="form-input"
          />
          {errors.email && (
            <div className="error-message">Невірна електронна пошта</div>
          )}
        </div>
        <button type="submit" className="submit-button">
          Вхід
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
