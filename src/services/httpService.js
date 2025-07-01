import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// یک پرچم که نشون می‌ده الان در حال رفرش کردن توکن هستیم یا نه
let isRefreshing = false;

// صفی از درخواست‌هایی که باید صبر کنن تا توکن جدید گرفته بشه
let failedQueue = [];

// وقتی توکن جدید دریافت شد یا خطا داد، این تابع صف رو پردازش می‌کنه
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error)
      prom.reject(error); // اگر رفرش توکن با خطا مواجه شد، درخواست رو fail کن
    else prom.resolve(token); // اگر موفق بود، درخواست رو با توکن جدید ادامه بده
  });
  failedQueue = []; // صف رو خالی کن
};

// تعریف interceptor برای پاسخ‌های axios
app.interceptors.response.use(
  (res) => res, // اگر پاسخ موفق بود، مستقیم برش گردون
  async (err) => {
    const originalRequest = err.config; // درخواست اصلی‌ای که خطا داد رو نگه می‌داریم

    // اگر خطای 401 بود و هنوز سعی مجدد نکرده بودیم
    if (err.response?.status === 401 && !originalRequest._retry) {
      // اگر همین الان در حال رفرش کردن توکن هستیم، این درخواست باید صبر کنه
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          // این درخواست رو وارد صف انتظار کن
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          // وقتی توکن جدید اومد، این درخواست رو با اون توکن بفرست
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          return app(originalRequest); // دوباره درخواست قبلی رو بفرست
        });
      }

      // اولین درخواستیه که متوجه شده توکن منقضی شده
      originalRequest._retry = true; // علامت بزن که یک بار دیگه سعی کردیم
      isRefreshing = true; // حالا داریم توکن جدید می‌گیریم

      try {
        // درخواست برای گرفتن توکن جدید (refresh)
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true, // کوکی حاوی Refresh Token همراهش می‌ره
        });

        const newToken = data?.accessToken; // توکن جدید رو از پاسخ می‌گیریم

        if (newToken) {
          // توکن جدید رو برای درخواست‌های بعدی ذخیره کن
          app.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

          // همه درخواست‌هایی که منتظر بودن رو اجرا کن
          processQueue(null, newToken);

          // توکن جدید رو برای این درخواست هم بذار
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

          // این درخواست خاص رو دوباره ارسال کن
          return app(originalRequest);
        }
      } catch (refreshErr) {
        // اگر گرفتن توکن جدید با خطا مواجه شد، همه درخواست‌ها رو fail کن
        processQueue(refreshErr, null);
        return Promise.reject(refreshErr);
      } finally {
        // مهم نیست موفق شدیم یا نه، حتماً باید بگیم که دیگه در حال refresh نیستیم
        isRefreshing = false;
      }
    }

    // اگر خطا 401 نبود یا retry قبلاً انجام شده بود، مستقیم خطا رو برگردون
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  patch: app.patch,
  put: app.put,
};

export default http;
