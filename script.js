const form = document.querySelector("#loginForm");
const roleSelect = document.querySelector("#role");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const message = document.querySelector("#message");

const demoAccounts = {
  director: { username: "direktor", password: "1234", name: "Direktor" },
  teacher: { username: "oqituvchi", password: "1234", name: "O‘qituvchi" },
  student: { username: "oquvchi", password: "1234", name: "O‘quvchi" }
};

document.querySelector("#togglePassword").addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

document.querySelector("#fillDemo").addEventListener("click", () => {
  const account = demoAccounts[roleSelect.value];
  usernameInput.value = account.username;
  passwordInput.value = account.password;
  message.textContent = "Demo ma’lumotlar to‘ldirildi. Endi «Kirish»ni bosing.";
  message.className = "message success";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const role = roleSelect.value;
  const account = demoAccounts[role];
  const username = usernameInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  if (username !== account.username || password !== account.password) {
    message.textContent = "Login yoki parol noto‘g‘ri. Demo akkaunt ma’lumotlarini tekshiring.";
    message.className = "message error";
    return;
  }

  // Demo loyiha: rol va ism dashboard uchun brauzer sessiyasida saqlanadi.
  sessionStorage.setItem("novaRole", role);
  sessionStorage.setItem("novaUsername", account.username);
  sessionStorage.setItem("novaName", account.name);
  window.location.href = "../dashboard/index.html";
});
