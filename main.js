function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "0000" && p === "0000") {
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText =
      "بيانات تسجيل الدخول غير صحيحة";
  }
}
