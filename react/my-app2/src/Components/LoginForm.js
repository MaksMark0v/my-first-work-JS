// Імпортуємо хук useForm з бібліотеки react-hook-form
import { useForm } from "react-hook-form";

const LoginForm = function LoginForm() {
  // Використовуємо хук useForm, щоб отримати функції для керування формою
  const {
    register, // Функція для реєстрації полів вводу з формою
    handleSubmit, // Функція для обробки відправки форми
    formState: { errors }, // Стан форми, включаючи помилки
  } = useForm();

  // Визначаємо функцію для обробки відправки форми
  const onSubmit = (data) => {
    console.log(data);
  };

  // Отримуємо компонент форми
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>Email is required and must be valid</p>}

      <label>Password</label>
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <p>Password is required</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;

