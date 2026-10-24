function sendToWhatsApp(event) {
  if (event) event.preventDefault();

  const cartype = document.getElementById("cartype").value;
  const pickupplace = document.getElementById("pickupplace").value;
  const servicetype = document.getElementById("service-type").value;

  const phoneNumber = "201208756644"; 

  const message = `أهلاً Royal Ride 👋\nحابب أستفسر عن السعر وأحجز مشوار بالبيانات دي:\n• نوع الخدمة: ${servicetype}\n• مكان الاستلام: ${pickupplace}\n• فئة السيارة: ${cartype}\n\nبرجاء إفادتي بالتكلفة والتفاصيل.`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}

// دالة تبديل اللغة (عربي / إنجليزي)
let currentLang = 'en';

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  const htmlTag = document.documentElement;
  const langButton = document.getElementById('lang-switch');

  if (currentLang === 'en') {
    currentLang = 'ar';
    htmlTag.setAttribute('dir', 'rtl');
    htmlTag.setAttribute('lang', 'ar');
    langButton.textContent = 'EN';
  } else {
    currentLang = 'en';
    htmlTag.setAttribute('dir', 'ltr');
    htmlTag.setAttribute('lang', 'en');
    langButton.textContent = 'AR';
  }

  elements.forEach(el => {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.dataset[currentLang]) {
        el.placeholder = el.dataset[currentLang];
      }
    } else {
      if (el.dataset[currentLang]) {
        el.textContent = el.dataset[currentLang];
      }
    }
  });
}