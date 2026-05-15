/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ChevronDown,
  Navigation,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";

const PHONE_NUMBER = "0579649426";
const WHATSAPP_URL = `https://wa.me/966${PHONE_NUMBER.substring(1)}`;

const regions = [
  {
    name: "شمال الرياض",
    neighborhoods: ["الملقا", "الصحافة", "الياسمين", "النرجس", "العقيق", "حطين", "القيروان", "العارض", "الغدير", "الندى", "النفل", "الوادي"]
  },
  {
    name: "جنوب الرياض",
    neighborhoods: ["الشفا", "بدر", "المروة", "العزيزية", "الدار البيضاء", "المنصورية", "نمي", "الحاير", "المصانع", "اليمامة", "منفوحة"]
  },
  {
    name: "شرق الرياض",
    neighborhoods: ["الروضة", "القدس", "اليرموك", "قرطبة", "غرناطة", "النهضة", "الخليج", "النسيم", "السلام", "النظيم", "المنار", "الريان"]
  },
  {
    name: "غرب الرياض",
    neighborhoods: ["طويق", "لبن", "ضهرة لبن", "العريجاء", "البديعة", "السويدي", "المهدية", "عرقة", "ظهرة نمار", "جامعة الملك سعود"]
  },
  {
    name: "وسط الرياض",
    neighborhoods: ["العليا", "السليمانية", "المربع", "البطحاء", "الملز", "الديرة", "الصالحية", "الفاخرية", "المرسلاب", "الورود"]
  }
];

const services = [
  {
    title: "سطحة هيدروليك",
    description: "نقل السيارات الفارهة والرياضية والمنخفضة بأمان تام واحترافية عالية.",
    icon: <Truck className="w-10 h-10 text-orange-500" />,
    image: "https://i.postimg.cc/SsrpCX0m/stht-hydrwlyk-fy-altryq.png",
    features: ["حماية كاملة", "نزول كامل للأرض", "تثبيت احترافي"]
  },
  {
    title: "سطحة عادي",
    description: "خدمة سريعة وموثوقة لنقل جميع أنواع السيارات المتعطلة بأسعار تنافسية.",
    icon: <Navigation className="w-10 h-10 text-orange-500" />,
    image: "https://i.postimg.cc/cHmNwKq1/stht-twjyh-syart-fy-alsharʿ.png",
    features: ["سرعة الاستجابة", "دقة المواعيد", "سائقين خبراء"]
  },
  {
    title: "تقدير حوادث",
    description: "نقل السيارات المصدومة مباشرة إلى مراكز التقدير والورش المتخصصة.",
    icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
    image: "https://i.postimg.cc/fLKhm34w/stht-m-syart-mtdrrt.png",
    features: ["تسهيل الإجراءات", "دقة في النقل", "خدمة 24 ساعة"]
  }
];

export default function App() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const toggleRegion = (name: string) => {
    setActiveRegion(activeRegion === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-orange-500 selection:text-black" dir="rtl">
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          href={`tel:${PHONE_NUMBER}`}
          className="bg-orange-500 p-4 sm:px-8 sm:py-5 rounded-full shadow-2xl flex items-center justify-center sm:justify-start gap-3 hover:bg-orange-400 transition-all font-black text-xl group"
          id="floating-call-btn"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full shrink-0">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <span className="hidden sm:block">إتصل الآن</span>
          <span className="hidden lg:block opacity-70 text-sm ml-2">{PHONE_NUMBER}</span>
        </motion.a>
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] p-4 sm:px-8 sm:py-5 rounded-full shadow-2xl flex items-center justify-center sm:justify-start gap-3 hover:bg-[#1ebd5e] transition-all font-black text-xl group"
          id="floating-whatsapp-btn"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full shrink-0">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="hidden sm:block">واتساب</span>
        </motion.a>
      </div>

      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-2xl text-black">
              <Truck className="w-6 h-6" />
            </div>
            <span className="text-xl lg:text-2xl font-extrabold tracking-tight">سطحة الرياض المتميزة</span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-semibold opacity-70">
            <a href="#services" className="hover:text-orange-500 transition-colors">خدماتنا</a>
            <a href="#coverage" className="hover:text-orange-500 transition-colors">مناطق التغطية</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">تواصل معنا</a>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="bg-orange-500 text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-400 transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20">
            <Phone className="w-4 h-4" />
            {PHONE_NUMBER}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/30 lg:bg-gradient-to-l lg:from-slate-950 lg:via-slate-950/20 lg:to-transparent z-10" />
          <img 
            src="https://i.postimg.cc/rsZXZvwm/myat-alshahnat-fy-saht-almdynt.png" 
            alt="سطحات الرياض - أسطول متكامل" 
            className="w-full h-full object-cover object-center lg:object-right brightness-110 lg:brightness-100"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full grid lg:grid-cols-2 gap-16 items-center pt-20 lg:pt-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-orange-500 rounded-full" />
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">أسرع خدمة سطحة بالرياض</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
              نصلك أينما كنت <br />
              <span className="text-orange-500">في الرياض</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-xl font-medium">
              نقل السيارات والسطحات في جميع أحياء الرياض بأسعار منافسة وجودة عالية. خدمتكم شرف لنا على مدار الساعة.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href={`tel:${PHONE_NUMBER}`} className="bg-orange-500 text-black px-10 py-5 rounded-2xl font-extrabold text-xl hover:bg-orange-400 transition-all flex items-center gap-4 shadow-xl shadow-orange-500/30">
                <Phone className="w-7 h-7" />
                اطلب السطحة الآن
              </a>
              <div className="flex flex-col justify-center border-r border-white/20 pr-6">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">الرقم المباشر</p>
                <p className="text-2xl font-black tracking-tight text-white">{PHONE_NUMBER}</p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-12 pt-10 border-t border-white/10 w-full max-w-md">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/10 p-3 rounded-xl">
                  <Clock className="w-7 h-7 text-orange-500" />
                </div>
                <div>
                  <div className="text-xl font-bold leading-none">15-20 د</div>
                  <div className="text-xs opacity-50 font-medium mt-1">سرعة الاستجابة</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-3 rounded-xl">
                  <Navigation className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <div className="text-xl font-bold leading-none">تغطية</div>
                  <div className="text-xs opacity-50 font-medium mt-1">جميع أحياء الرياض</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex flex-col gap-6">
            {services.map((s, i) => (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                key={i}
                className="bg-slate-900/80 backdrop-blur border border-white/5 p-8 rounded-2xl flex items-center gap-6 hover:border-orange-500/30 transition-colors"
              >
                {s.image ? (
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/5 shrink-0">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className={`p-4 rounded-xl shrink-0 ${i === 0 ? 'bg-orange-500/20 text-orange-500' : i === 1 ? 'bg-blue-500/20 text-blue-500' : 'bg-red-500/20 text-red-500'}`}>
                    {s.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-black tracking-tight">{s.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-1 italic">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      {/* Services Grid Section */}
      <section id="services" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-white/5 rounded-[2rem] p-10 hover:border-orange-500/50 transition-all group relative overflow-hidden"
              >
                {service.image ? (
                  <div className="mb-8 overflow-hidden rounded-2xl h-48 border border-white/5">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="mb-8 p-5 bg-slate-950 w-fit rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                )}
                <h3 className="text-2xl font-extrabold mb-5 tracking-tight group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-1 bg-orange-500 rounded-full" />
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">نغطي كافة أحياء العاصمة</span>
              </div>
              <h2 className="text-5xl font-black mb-8 tracking-tight leading-tight">
                أينما كنت في  <br /><span className="text-orange-500">الرياض.. نصلك!</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
                تتوفر سطحاتنا في جميع مخارج الدائري وعلى مدار الساعة لخدمتكم فوراً. نحن نغطي المساحة الأكبر من العاصمة الرياض.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-5 p-6 bg-slate-950 border border-white/5 rounded-2xl">
                  <div className="bg-orange-500/10 p-4 rounded-xl text-orange-500">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight">سرعة في الوصول</h4>
                    <p className="text-slate-500 text-sm mt-1">تحديد دقيق لموقعك وسرعة في تلبية الطلب</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-6 bg-slate-950 border border-white/5 rounded-2xl">
                  <div className="bg-blue-500/10 p-4 rounded-xl text-blue-500">
                    <Truck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight">أسطول متخصص</h4>
                    <p className="text-slate-500 text-sm mt-1">سطحات هيدروليك وعادية لجميع أنواع السيارات</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/5 rounded-[2.5rem] p-10 lg:p-12 border border-white/10 backdrop-blur-3xl">
              <div className="grid md:grid-cols-2 gap-10">
                {regions.map((region, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-orange-500 font-extrabold text-lg flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {region.name}
                    </h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                      {region.neighborhoods.map((n, i) => (
                        <span key={i} className="text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-default">
                          {n}{i < region.neighborhoods.length - 1 ? "،" : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-orange-500/10 rounded-2xl border border-orange-500/20 text-center">
                <p className="text-orange-200 font-bold leading-relaxed">
                  نخدمكم في جميع مخارج الدائري الشمالي والشرقي والجنوبي والغربي. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Truck className="w-[600px] h-[600px] absolute -right-20 -bottom-20 text-black rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10 text-black">
          <div className="flex justify-center mb-10">
            <div className="bg-black/10 p-6 rounded-full animate-pulse">
              <AlertTriangle className="w-16 h-16" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight leading-tight">
            هل أنت عالق في الطريق؟ <br /> نحن هنا للمساعدة
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-16 max-w-2xl mx-auto opacity-80">
            اتصل بنا الآن وسنقوم بإرسال أقرب سطحة لموقعك فوراً. خدمتنا سريعة، احترافية، وبأسعار عادلة.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="group bg-black text-white px-12 lg:px-16 py-6 lg:py-8 rounded-2xl font-black text-3xl lg:text-4xl hover:scale-105 transition-all flex items-center gap-6 shadow-2xl"
            >
              <Phone className="w-10 lg:w-12 h-10 lg:h-12" />
              {PHONE_NUMBER}
            </a>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-white text-black px-12 lg:px-16 py-6 lg:py-8 rounded-2xl font-black text-3xl lg:text-4xl hover:scale-105 transition-all flex items-center gap-6 shadow-2xl"
            >
              <MessageCircle className="w-10 lg:w-12 h-10 lg:h-12 text-[#25D366]" />
              واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-black">
                  <Truck className="w-7 h-7" />
                </div>
                <h1 className="text-3xl font-black tracking-tight">سطحة الرياض</h1>
              </div>
              <div className="flex flex-wrap gap-10">
                <div>
                  <p className="text-xs opacity-40 uppercase tracking-widest font-bold mb-1">الرقم الموحد</p>
                  <p className="text-2xl font-bold">{PHONE_NUMBER}</p>
                </div>
                <div>
                  <p className="text-xs opacity-40 uppercase tracking-widest font-bold mb-1">الاستجابة</p>
                  <p className="text-2xl font-bold">متوفر 24/7</p>
                </div>
              </div>
            </div>
            <div className="md:text-left">
              <p className="text-sm font-bold text-slate-500">
                &copy; {new Date().getFullYear()} سطحــة الرياض المتيمــزة
              </p>
              <p className="text-xs text-slate-700 mt-2 font-medium">نقل آمن | سرعة قصوى | خدمة احترافية</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
