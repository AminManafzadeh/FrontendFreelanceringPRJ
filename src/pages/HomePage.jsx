import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import useLogout from "../features/authentication/useLogout";
import DarkModeToggle from "../ui/DarkModeToggle";

function HomePage() {
  const [stats] = useState({
    projects: 1250,
    freelancers: 850,
    clients: 400,
  });

  const { isAuthenticated, user } = useAuthorize();
  const { logout, isPending: isLoggingOut } = useLogout();

  const features = [
    {
      title: "پروژه‌های متنوع",
      description: "انواع مختلف پروژه‌های برنامه‌نویسی، طراحی و بازاریابی",
      icon: "💼",
    },
    {
      title: "فریلنسرهای متخصص",
      description: "دسترسی به بهترین فریلنسرهای متخصص در هر حوزه",
      icon: "👨‍💻",
    },
    {
      title: "پرداخت امن",
      description: "سیستم پرداخت کاملاً امن و قابل اعتماد",
      icon: "🔒",
    },
    {
      title: "پشتیبانی ۲۴/۷",
      description: "پشتیبانی کامل در تمام ساعات شبانه‌روز",
      icon: "📞",
    },
  ];

  return (
    <div className="bg-secondary-0 min-h-screen text-secondary-700">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="container xl:max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0">
            <div className="flex items-center gap-4">
              <div className="text-xl sm:text-2xl font-bold">فریلنسر</div>
              <DarkModeToggle />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto items-center">
              {isAuthenticated ? (
                <>
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-x-4 w-full sm:w-auto">
                    <span className="text-xs sm:text-sm text-center">
                      خوش آمدید، {user?.name || "کاربر"}
                    </span>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <Link
                        to={`/${user?.role?.toLowerCase()}`}
                        className="btn btn--outline border-white text-white hover:bg-white hover:text-primary-900 text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none text-center"
                      >
                        داشبورد
                      </Link>
                      <button
                        onClick={logout}
                        disabled={isLoggingOut}
                        className="btn bg-white text-primary-900 hover:bg-secondary-100 disabled:opacity-50 text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none"
                      >
                        {isLoggingOut ? "در حال خروج..." : "خروج"}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <Link
                      to="/auth"
                      className="btn btn--outline border-white text-white hover:bg-white hover:text-primary-900 text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none text-center"
                    >
                      ورود
                    </Link>
                    <Link
                      to="/auth"
                      className="btn bg-white text-primary-900 hover:bg-secondary-100 text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none text-center"
                    >
                      عضویت
                    </Link>
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="container xl:max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            بهترین پلتفرم فریلنسینگ ایران
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            {isAuthenticated
              ? `خوش آمدید ${user?.name || "کاربر"}! آماده شروع کار هستید؟`
              : "پروژه‌تان را منتشر کنید یا به عنوان فریلنسر شروع کنید. هزاران پروژه در انتظار شماست!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center px-4 sm:px-0">
            {isAuthenticated ? (
              <>
                <Link
                  to={`/${user?.role?.toLowerCase()}`}
                  className="btn bg-white text-primary-900 hover:bg-secondary-100 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  ورود به داشبورد
                </Link>
                <Link
                  to={
                    user?.role === "OWNER"
                      ? "/owner/projects"
                      : "/freelancer/proposals"
                  }
                  className="btn btn--outline border-white text-white hover:bg-white hover:text-primary-900 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  {user?.role === "OWNER" ? "پروژه‌های من" : "پیشنهادات من"}
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="btn bg-white text-primary-900 hover:bg-secondary-100 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  شروع کنید
                </Link>
                <Link
                  to="/auth"
                  className="btn btn--outline border-white text-white hover:bg-white hover:text-primary-900 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  مشاهده پروژه‌ها
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container xl:max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="bg-secondary-0 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary-900 mb-2">
                {stats.projects.toLocaleString("fa-IR")}+
              </div>
              <div className="text-secondary-600 text-sm sm:text-base">
                پروژه تکمیل شده
              </div>
            </div>
            <div className="bg-secondary-0 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-primary-900 mb-2">
                {stats.freelancers.toLocaleString("fa-IR")}+
              </div>
              <div className="text-secondary-600 text-sm sm:text-base">
                فریلنسر فعال
              </div>
            </div>
            <div className="bg-secondary-0 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary-900 mb-2">
                {stats.clients.toLocaleString("fa-IR")}+
              </div>
              <div className="text-secondary-600 text-sm sm:text-base">
                کارفرمای راضی
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="container xl:max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-secondary-700">
              چرا ما را انتخاب کنید؟
            </h2>
            <p className="text-secondary-600 text-base sm:text-lg lg:text-xl max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-0">
              ما بهترین خدمات را برای ارتباط میان کارفرمایان و فریلنسرها ارائه
              می‌دهیم
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-4 sm:p-0"
              >
                <div className="bg-gradient-to-r from-primary-100 to-primary-50 w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-2xl sm:text-3xl group-hover:from-primary-200 group-hover:to-primary-100 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-secondary-700">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 sm:py-20">
        <div className="container xl:max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
          {isAuthenticated ? (
            <>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                آماده شروع کار هستید؟
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-0">
                به داشبورد خود بروید و
                {user?.role === "OWNER"
                  ? "پروژه جدید ایجاد کنید"
                  : "پیشنهادات جدید مشاهده کنید"}
              </p>
              <Link
                to={`/${user?.role?.toLowerCase()}`}
                className="btn bg-white text-primary-900 hover:bg-secondary-100 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 inline-block w-full sm:w-auto max-w-xs mx-auto"
              >
                ورود به داشبورد
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                آماده شروع هستید؟
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-0">
                همین الان عضو شوید و دنیای جدیدی از فرصت‌های شغلی را کشف کنید
              </p>
              <Link
                to="/auth"
                className="btn bg-white text-primary-900 hover:bg-secondary-100 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 inline-block w-full sm:w-auto max-w-xs mx-auto"
              >
                همین حالا شروع کنید
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-100 text-secondary-600 py-8 sm:py-12">
        <div className="container xl:max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold text-secondary-700 mb-3 sm:mb-4">
                فریلنسر
              </h3>
              <p className="leading-relaxed text-sm sm:text-base">
                بهترین پلتفرم برای ارتباط میان کارفرمایان و فریلنسرها در ایران
              </p>
            </div>
            <div>
              <h4 className="font-bold text-secondary-700 mb-3 sm:mb-4 text-base sm:text-lg">
                خدمات
              </h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-secondary-700 transition-colors">
                    پروژه‌های برنامه‌نویسی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-700 transition-colors">
                    طراحی گرافیک
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-700 transition-colors">
                    بازاریابی دیجیتال
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-700 transition-colors">
                    ترجمه
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary-700 mb-3 sm:mb-4 text-base sm:text-lg">
                پشتیبانی
              </h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-secondary-700 transition-colors">
                    مرکز راهنمایی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-700 transition-colors">
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-700 transition-colors">
                    گزارش مشکل
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary-700 mb-3 sm:mb-4 text-base sm:text-lg">
                قوانین
              </h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-secondary-700 transition-colors">
                    شرایط استفاده
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-700 transition-colors">
                    حریم خصوصی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-700 transition-colors">
                    قوانین سایت
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-300 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base">
              &copy; ۱۴۰۴ فریلنسر. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
