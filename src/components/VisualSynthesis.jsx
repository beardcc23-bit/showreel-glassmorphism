import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const categories = [
  {
    id: 'food',
    name: '食品與飲料',
    items: [
      { name: 'KIRIN', domain: 'kirin.co.jp', videoId: 's6s2p87fPdA' },
      { name: 'TOBLERONE 三角巧克力', domain: 'toblerone.com' },
      { name: 'UCC', domain: 'ucc.co.jp' },
      { name: '三得利 蜂王乳+芝麻明E', domain: 'suntory.com.tw' },
      { name: '三得利 蜜露珂娜', domain: 'suntory.com.tw' },
      { name: '可口可樂', domain: 'cocacola.com' },
      { name: '多力多滋', domain: 'doritos.com' },
      { name: '好侍咖哩', domain: 'housefoods-group.com' },
      { name: '伯朗咖啡', domain: 'mrbrown.com.tw' },
      { name: '每朝綠茶', domain: 'vitalon.com.tw' },
      { name: '金車噶瑪蘭威士忌', domain: 'kavalanwhisky.com' },
      { name: '柏克金啤酒', domain: 'buckskin.com.tw' },
      { name: '金門高粱', domain: 'kkl.com.tw' },
      { name: '旨醞鐵板燒' },
      { name: '活沛多', domain: 'watsons.com.tw' },
      { name: '格蘭利威', domain: 'theglenlivet.com', videoId: 's6s2p87fPdA' },
      { name: '桂格喝的燕麥', domain: 'quaker.com.tw' },
      { name: '桂格形象片', domain: 'quaker.com.tw', videoId: 's6s2p87fPdA' },
      { name: '桂格雙效健康奶粉', domain: 'quaker.com.tw' },
      { name: '泰山八寶粥', domain: 'taisungroup.com.tw' },
      { name: '健酪乳酸飲料', domain: 'kingcar.com.tw' },
      { name: '黑松茶花', domain: 'heysong.com.tw' },
      { name: '瑞穗鮮乳', domain: 'uni-president.com.tw' },
      { name: '義美', domain: 'imeifoods.com.tw' },
      { name: '義美生機', domain: 'imeieco.com' },
      { name: '裸雀威士忌', domain: 'nakedmalt.com' },
      { name: '維他露P', domain: 'vitalon.com.tw' },
      { name: '樂事', domain: 'lays.com' },
      { name: '灣仔碼頭水餃' }
    ]
  },
  {
    id: 'tech',
    name: '科技電信與家電',
    items: [
      { name: 'Panasonic 蒸汽電熨斗', domain: 'panasonic.com' },
      { name: 'Panasonic VIERA', domain: 'panasonic.com' },
      { name: 'Panasonic 便座', domain: 'panasonic.com' },
      { name: 'Panasonic 冷萃咖啡機', domain: 'panasonic.com' },
      { name: 'Panasonic 吸頂燈', domain: 'panasonic.com' },
      { name: 'Panasonic W音波電動牙刷', domain: 'panasonic.com' },
      { name: 'Samsung S20', domain: 'samsung.com' },
      { name: 'Samsung S21', domain: 'samsung.com' },
      { name: 'Samsung S22', domain: 'samsung.com', videoId: 's6s2p87fPdA' },
      { name: 'Samsung Z Fold2', domain: 'samsung.com' },
      { name: 'Samsung Z Fold3', domain: 'samsung.com' },
      { name: 'Samsung Z Fold4', domain: 'samsung.com', videoId: 's6s2p87fPdA' },
      { name: 'Samsung 平板', domain: 'samsung.com' },
      { name: 'Sharp', domain: 'sharpcorp.com' },
      { name: 'Sony Xperia', domain: 'sony.com' },
      { name: 'TOKUYO', domain: 'tokuyo.com.tw' },
      { name: '三菱重工空調', domain: 'mhi-mth.co.jp' },
      { name: '三菱電機', domain: 'mitsubishielectric.com' },
      { name: '中華電信', domain: 'cht.com.tw' }
    ]
  },
  {
    id: 'vehicle',
    name: '汽車與交通',
    items: [
      { name: 'Momentum', domain: 'momentum-biking.com' },
      { name: 'AUDI', domain: 'audi.com', videoId: 's6s2p87fPdA' },
      { name: 'GOGORO', domain: 'gogoro.com', videoId: 's6s2p87fPdA' },
      { name: 'Honda', domain: 'honda.com' },
      { name: 'MAZDA', domain: 'mazda.com', videoId: 's6s2p87fPdA' },
      { name: 'Skoda', domain: 'skoda-auto.com' },
      { name: '中華航空', domain: 'china-airlines.com' },
      { name: '長榮航太', domain: 'egat.com.tw' },
      { name: '長榮航空', domain: 'evaair.com' }
    ]
  },
  {
    id: 'lifestyle',
    name: '生活與百貨零售',
    items: [
      { name: 'Ariel 抗菌洗衣精', domain: 'ariel.co.jp' },
      { name: 'Foodpanda', domain: 'foodpanda.com', videoId: 's6s2p87fPdA' },
      { name: 'HOLA', domain: 'hola.com.tw' },
      { name: 'LaLaport 南港', domain: 'mitsui-shopping-park.com' },
      { name: 'UberEats', domain: 'ubereats.com', videoId: 's6s2p87fPdA' },
      { name: '東和鋼鐵', domain: 'tunghasteel.com' },
      { name: '犀牛盾', domain: 'rhinoshield.tw' },
      { name: '新光三越', domain: 'skm.com.tw' },
      { name: '楓康一滴淨', domain: 'funcom.com.tw' },
      { name: '錦鋐氣密窗', domain: 'chinhong.com.tw' },
      { name: '魔術靈', domain: 'kao.com' }
    ]
  },
  {
    id: 'health',
    name: '生醫與醫藥保健',
    items: [
      { name: 'Accu-Chek 羅氏血糖機', domain: 'accu-chek.com' },
      { name: '大本山益生菌', domain: 'yohome.com.tw' },
      { name: '加倍優' },
      { name: '台灣武田合利他命', domain: 'alinamin.com.tw', videoId: 's6s2p87fPdA' },
      { name: '克潰精顆粒a', domain: 'kowa.co.jp' }
    ]
  },
  {
    id: 'beauty',
    name: '美妝與個人護理',
    items: [
      { name: '1028 睫毛膏', domain: '1028.com.tw', videoId: 's6s2p87fPdA' },
      { name: 'Bifesta 碧菲絲特', domain: 'bifesta.jp' },
      { name: 'Calm Night Day 淨日夜', domain: 'yolu.jp' },
      { name: 'LUX 髮的補給', domain: 'lux.com', videoId: 's6s2p87fPdA' },
      { name: 'MAMA 永恆光燦系列' },
      { name: 'TKLAB', domain: 'tklab.com.tw' },
      { name: '三得利 比菲德氏菌', domain: 'suntory.com.tw' },
      { name: '三得利 蜂王乳+芝麻明E', domain: 'suntory.com.tw' },
      { name: '三得利 蜜露珂娜', domain: 'suntory.com.tw' },
      { name: '三得利 密得絲', domain: 'suntory.com.tw' },
      { name: '五月花極上系列', domain: 'yfycp.com' },
      { name: '舒潔', domain: 'kleenex.com' },
      { name: '蕾妮亞', domain: 'laurier.com' }
    ]
  },
  {
    id: 'finance',
    name: '金融與保險',
    items: [
      { name: '中國信託 點燃生命之火', domain: 'ctbcbank.com', videoId: 's6s2p87fPdA' },
      { name: '台灣 Pay', domain: 'taiwanpay.com.tw', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Taiwan_Pay_logo.svg' },
      { name: '安聯人壽', domain: 'allianz.com' },
      { name: '復華投信', domain: 'fhtrust.com.tw' },
      { name: '遠雄人壽', domain: 'fglife.com.tw' },
      { name: '渣打銀行', domain: 'sc.com' },
      { name: '磊山保經', domain: 'leishan.com.tw' }
    ]
  }
];

// 獨立的 BrandCard 子組件處理單個卡片的 Logo 與 Fallback
function BrandCard({ item, onPlayVideo }) {
  const [imgError, setImgError] = useState(false);
  const hasVideo = !!item.videoId;

  let logoUrl = '';
  if (item.logo) {
    logoUrl = item.logo;
  } else if (item.domain) {
    logoUrl = `https://logo.clearbit.com/${item.domain}`;
  }

  // 取得品牌名字的前兩個字作為縮寫
  const getAbbreviation = (name) => {
    if (!name) return '';
    if (/^[A-Za-z]/.test(name)) {
      const match = name.match(/^[A-Za-z]+/);
      return match ? match[0].substring(0, 2).toUpperCase() : name.substring(0, 2);
    }
    return name.substring(0, 2);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onClick={() => hasVideo && onPlayVideo(item.videoId)}
      className={`p-6 border rounded-sm flex flex-col justify-between transition-all duration-300 relative overflow-hidden group min-h-[140px] ${
        hasVideo
          ? 'border-zinc-200 bg-white hover:border-aurora-blue cursor-pointer hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]'
          : 'border-zinc-200 bg-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)]'
      }`}
    >
      {/* 淡淡的金色漸層 hover 底色 (僅限有影片) */}
      {hasVideo && (
        <div className="absolute inset-0 bg-gradient-to-tr from-aurora-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}

      <div>
        {/* Logo 顯示區 */}
        {logoUrl && !imgError ? (
          <img
            src={logoUrl}
            alt={`${item.name} logo`}
            onError={() => setImgError(true)}
            className="h-7 w-auto max-w-[90px] object-contain mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-black text-[10px] mb-4 mono tracking-wider border border-zinc-200">
            {getAbbreviation(item.name)}
          </div>
        )}

        <div className={`text-sm tracking-wide transition-colors duration-300 leading-snug ${
          hasVideo
            ? 'text-zinc-800 group-hover:text-black font-semibold'
            : 'text-zinc-600 font-normal'
        }`}>
          {item.name}
        </div>
      </div>

      {hasVideo ? (
        <div className="mt-4 flex items-center gap-1.5 text-[10px] text-aurora-blue font-black tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
          <Play size={10} fill="currentColor" /> Play Reel
        </div>
      ) : (
        <div className="mt-4 text-[8px] text-zinc-400 mono tracking-widest uppercase">
          // ARCHIVE
        </div>
      )}
    </motion.div>
  );
}

export default function VisualSynthesis({ onPlayVideo }) {
  const [activeTab, setActiveTab] = useState('food');

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="vfx" className="max-w-6xl mx-auto px-8 py-24 relative overflow-hidden">
      {/* 背景點綴網格 */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      {/* 區段標頭 */}
      <div className="text-center mb-16 relative z-10">
        <div className="mono text-xs text-aurora-blue mb-6 uppercase tracking-[0.3em]">
          03 // Visual Synthesis
        </div>
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8 glow-title text-white">
          The <span className="text-aurora-blue">Synthesis</span>
        </h2>
        <p className="text-zinc-500 font-light max-w-2xl mx-auto text-lg leading-relaxed">
          13 年 Flame 合成經驗，將影像處理的極限精準度，轉化為跨次元的視覺敘事力。
        </p>
      </div>

      {/* 分類切換 Tab */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12 relative z-10">
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 border rounded-sm ${
              activeTab === tab.id
                ? 'border-aurora-blue text-black bg-aurora-blue shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                : 'border-zinc-800 text-zinc-400 bg-zinc-950/20 hover:text-white hover:border-zinc-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* 品牌卡片 Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {currentCategory.items.map((item) => (
            <BrandCard key={item.name} item={item} onPlayVideo={onPlayVideo} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
