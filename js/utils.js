export function validator(obj) {
  if (obj.username.trim() === "") {
    return {
      target: "username",
      message: "Foydalanuvchi nomi bo'sh bo'lishi mumkin emas!",
    };
  }
  if (obj.password.trim() === "") {
    return {
      target: "password",
      message: "Foydalanuvchi paroli bosh bolishi mumkin emas!",
    };
  }
}
