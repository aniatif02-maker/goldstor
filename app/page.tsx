"use client";

import { useState } from "react";

// ===== 1. المنتجات (ثابتة في الكود) =====
const PRODUCTS = [
  {
    id: 1,
    name: "ساعة يد أنيقة",
    price: 299,
    description: "ساعة يد رجالية بتصميم عصري، مقاومة للماء، مع ضمان سنة كاملة.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
  {
    id: 2,
    name: "سماعات لاسلكية",
    price: 199,
    description: "سماعات بلوتوث عالية الجودة، صوت نقي، بطارية تدوم 20 ساعة.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  },
  {
    id: 3,
    name: "حقيبة ظهر عصرية",
    price: 249,
    description: "حقيبة ظهر مقاومة للماء، مناسبة للعمل والسفر، بجيوب متعددة.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
  },
];

// ===== رقم الواتساب =====
const WHATSAPP_NUMBER = "212677003609";

export default function HomePage() {
  // ===== الحالة =====
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    productId: PRODUCTS[0].id,
    quantity: 1,
  });
  const [error, setError] = useState("");

  // ===== اختيار منتج والتمرير للفورم =====
  const selectProduct = (id: number) => {
    setForm((prev) => ({ ...prev, productId: id }));
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  // ===== إرسال الطلب عبر واتساب =====
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.city.trim()) {
      setError("المرجو تعبئة جميع الحقول");
      return;
    }

    const product = PRODUCTS.find((p) => p.id === Number(form.productId));
    if (!product) {
      setError("المرجو اختيار منتج");
      return;
    }

    const total = (product.price * form.quantity).toFixed(2);

    const message =
      `🛒 *طلب جديد*\n\n` +
      `📦 *المنتج:* ${product.name}\n` +
      `💰 *الثمن:* ${product.price} د.م.\n` +
      `🔢 *الكمية:* ${form.quantity}\n` +
      `💵 *المجموع:* ${total} د.م.\n\n` +
      `👤 *الاسم:* ${form.name}\n` +
      `📞 *الهاتف:* ${form.phone}\n` +
      `🏙️ *المدينة:* ${form.city}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setForm({
      name: "",
      phone: "",
      city: "",
      productId: PRODUCTS[0].id,
      quantity: 1,
    });
  };

  // ===== حساب المجموع =====
  const selectedProduct = PRODUCTS.find((p) => p.id === Number(form.productId));
  const totalPrice = selectedProduct
    ? (selectedProduct.price * form.quantity).toFixed(2)
    : "0";

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 text-gray-800">
      {/* ===================== الهيرو الاحترافي ===================== */}
      <section className="relative overflow-hidden bg-[#0a0e27] text-white">
        {/* طبقة التدرج الأساسي */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f4e] to-[#2d1b69]" />

        {/* كرات ضوئية متوهجة (Blobs) */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px]" />

        {/* شبكة خفيفة */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />

        {/* المحتوى */}
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* النص */}
            <div className="text-center lg:text-right">
              {/* شارة علوية */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span>التوصيل لجميع مدن المغرب 🇲🇦</span>
              </div>

              {/* العنوان الرئيسي */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.15] tracking-tight">
                <span className="block text-white">اشتري الآن</span>
                <span className="block bg-gradient-to-l from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  بأفضل الأثمنة
                </span>
              </h1>

              {/* الوصف */}
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                منتجات عصرية بجودة عالية ✨
                <br />
                الدفع عند الاستلام 💵 — التوصيل سريع لجميع المدن 🚚
              </p>

              {/* الأزرار */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="#products"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-l from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:scale-105 active:scale-95"
                >
                  <span>تصفح المنتجات</span>
                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 19l-7-7 7-7M20 12H4"
                    />
                  </svg>
                </a>

                <a
                  href="#order-form"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition"
                >
                  اطلب الآن مباشرة
                </a>
              </div>

              {/* شارات الثقة */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    ✓
                  </span>
                  <span>الدفع عند الاستلام</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    🚚
                  </span>
                  <span>توصيل سريع</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    ★
                  </span>
                  <span>جودة مضمونة</span>
                </div>
              </div>
            </div>

            {/* الصورة - بطاقة عائمة */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-40 animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&q=80"
                  alt="hero"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent" />
              </div>

              {/* بطاقة عائمة: تقييم */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur text-gray-900 rounded-2xl px-5 py-3 shadow-2xl border border-white/50">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                  <span className="font-bold text-sm">4.9/5</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">+1,200 زبون راضي</p>
              </div>

              {/* بطاقة عائمة: توصيل */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur text-gray-900 rounded-2xl px-5 py-3 shadow-2xl border border-white/50">
                <p className="text-xs text-gray-500">توصيل خلال</p>
                <p className="font-extrabold text-lg">24-48 ساعة</p>
              </div>
            </div>
          </div>

          {/* شريط الإحصائيات */}
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { num: "+5000", label: "طلب تم توصيله" },
              { num: "+1200", label: "زبون سعيد" },
              { num: "24-48h", label: "مدة التوصيل" },
              { num: "100%", label: "ضمان الجودة" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition"
              >
                <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-l from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  {stat.num}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* موجة سفلية للانتقال السلس */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg
            viewBox="0 0 1440 80"
            className="w-full h-[60px] md:h-[80px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#f9fafb"
              d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,37.3C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
            />
          </svg>
        </div>
      </section>

      {/* ============ المنتجات ============ */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            ⭐ الأكثر مبيعاً
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            منتجاتنا المميزة
          </h2>
          <p className="text-gray-500">اختر منتجك المفضل واطلب الآن</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col border border-gray-100"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  -20%
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold text-blue-600">
                    {product.price} <span className="text-base">د.م.</span>
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {Math.round(product.price * 1.25)} د.م.
                  </span>
                </div>
                <button
                  onClick={() => selectProduct(product.id)}
                  className="w-full bg-gradient-to-l from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition shadow-md hover:shadow-lg"
                >
                  اطلب الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ الفورم ============ */}
      <section
        id="order-form"
        className="bg-gradient-to-l from-gray-100 to-gray-200 py-16"
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              أكمل طلبك
            </h2>
            <p className="text-center text-gray-500 mb-8">
              املأ المعلومات وسنتواصل معك عبر واتساب
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder=""
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="0612345678"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">المدينة</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder=""
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    المنتج
                  </label>
                  <select
                    value={form.productId}
                    onChange={(e) =>
                      setForm({ ...form, productId: Number(e.target.value) })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.price} د.م.
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">الكمية</label>
                  <input
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        quantity: Math.max(1, Number(e.target.value)),
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex justify-between items-center">
                <span className="font-semibold text-gray-700">
                  المجموع الإجمالي:
                </span>
                <span className="text-2xl font-extrabold text-blue-700">
                  {totalPrice} د.م.
                </span>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition text-lg shadow-md hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411zM12.05 21.785h-.004c-1.71 0-3.39-.46-4.855-1.328l-.348-.207-3.607.94.964-3.514-.228-.36a9.83 9.83 0 0 1-1.51-5.242c.003-5.44 4.43-9.867 9.884-9.867 2.64 0 5.121 1.03 6.989 2.9a9.82 9.82 0 0 1 2.896 6.985c-.003 5.44-4.43 9.693-9.88 9.693z" />
                </svg>
                إرسال الطلب عبر واتساب
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============ الفوتر ============ */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="mb-2 font-semibold">© 2025 - جميع الحقوق محفوظة</p>
        <p className="text-sm text-gray-400">
          الدفع عند الاستلام • توصيل لجميع مدن المغرب 🇲🇦
        </p>
      </footer>
    </main>
  );
}