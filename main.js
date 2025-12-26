function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  // التحقق من البيانات (يمكنك تغيير الأرقام هنا)
  if (u === "0000" && p === "0000") {
    // حفظ حالة تسجيل الدخول (اختياري لتحسين التجربة)
    sessionStorage.setItem("isLoggedIn", "true");
    
    // التوجيه للصفحة الرئيسية
    window.location.href = "index.html";
  } else {
    const errorMsg = document.getElementById("error");
    errorMsg.innerText = "بيانات تسجيل الدخول غير صحيحة ❌";
    errorMsg.style.animation = "shake 0.5s";
    setTimeout(() => errorMsg.style.animation = "", 500);
  }
}

// دالة تسجيل الخروج لاستخدامها في الصفحات الأخرى
function logout() {
  sessionStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

// إضافة بسيطة لتأثير الاهتزاز عند الخطأ
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(style);
