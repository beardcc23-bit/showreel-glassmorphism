import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const categories = [
  {
    id: 'food',
    name: '食品與飲料',
    items: [
      { name: 'KIRIN', videoId: 's6s2p87fPdA' },
      { name: 'TOBLERONE 三角巧克力' },
      { name: 'Talisker 威士忌', videoId: 's6s2p87fPdA' },
      { name: 'UCC' },
      { name: 'bonaqua' },
      { name: '三得利 蜂王乳+芝麻明E' },
      { name: '三得利 蜜露珂娜' },
      { name: '可口可樂' },
      { name: '多力多滋' },
      { name: '好侍咖哩' },
      { name: '伯朗咖啡' },
      { name: '伯朗精品咖啡' },
      { name: '每朝綠茶' },
      { name: '金車噶瑪蘭威士忌' },
      { name: '金車柏克金啤酒' },
      { name: '金門高粱' },
      { name: '旨醞鐵板燒' },
      { name: '活沛多' },
      { name: '格蘭利威', videoId: 's6s2p87fPdA' },
      { name: '格蘭路思' },
      { name: '桂格喝的燕麥' },
      { name: '桂格形象片', videoId: 's6s2p87fPdA' },
      { name: '桂格雙效健康奶粉' },
      { name: '泰山八寶粥' },
      { name: '御商家' },
      { name: '健酪乳酸飲料' },
      { name: '麥卡倫', videoId: 's6s2p87fPdA' },
      { name: '黑松茶花' },
      { name: '瑞穗鮮乳' },
      { name: '義美' },
      { name: '義美生機' },
      { name: '裸雀威士忌' },
      { name: '維他露P' },
      { name: '樂事' },
      { name: '灣仔碼頭水餃' }
    ]
  },
  {
    id: 'tech',
    name: '科技電信與家電',
    items: [
      { name: 'Panasonic' },
      { name: '蒸汽電熨斗' },
      { name: 'VIERA' },
      { name: '便座' },
      { name: '冷萃咖啡機' },
      { name: '吸頂燈' },
      { name: 'W音波電動牙刷' },
      { name: 'Samsung' },
      { name: 'S22', videoId: 's6s2p87fPdA' },
      { name: 'Z Fold2' },
      { name: 'Z Fold3' },
      { name: 'Z Fold4', videoId: 's6s2p87fPdA' },
      { name: 'Samsung 平板' },
      { name: 'Sharp' },
      { name: 'Sony Xperia' },
      { name: 'TOKUYO' },
      { name: '三菱重工空調' },
      { name: '三菱電機' },
      { name: '中華電信' }
    ]
  },
  {
    id: 'vehicle',
    name: '汽車與交通',
    items: [
      { name: 'Momentum' },
      { name: 'AUDI', videoId: 's6s2p87fPdA' },
      { name: 'GOGORO', videoId: 's6s2p87fPdA' },
      { name: 'HONDA FIT' },
      { name: 'Honda HRV', videoId: 's6s2p87fPdA' },
      { name: 'MAZDA', videoId: 's6s2p87fPdA' },
      { name: 'Skoda' },
      { name: '中華航空' },
      { name: '長榮航太' },
      { name: '長榮航空' }
    ]
  },
  {
    id: 'lifestyle',
    name: '生活與百貨零售',
    items: [
      { name: 'Ariel 抗菌洗衣精' },
      { name: 'Foodpanda', videoId: 's6s2p87fPdA' },
      { name: 'HOLA' },
      { name: 'LaLaport 南港' },
      { name: 'UberEats', videoId: 's6s2p87fPdA' },
      { name: '東和鋼鐵' },
      { name: '犀牛盾' },
      { name: '新光三越' },
      { name: '楓康一滴淨' },
      { name: '錦鋐氣密窗' },
      { name: '魔術靈' }
    ]
  },
  {
    id: 'health',
    name: '生醫與醫藥保健',
    items: [
      { name: 'Accu-Chek 羅氏血糖機' },
      { name: '大本山益生菌' },
      { name: '加倍優' },
      { name: '台灣武田合利命', videoId: 's6s2p87fPdA' },
      { name: '克潰精顆粒a' }
    ]
  },
  {
    id: 'beauty',
    name: '美妝與個人護理',
    items: [
      { name: '1028 睫毛膏', videoId: 's6s2p87fPdA' },
      { name: 'Bifesta 碧菲絲特' },
      { name: 'Calm Night / Day 淨日夜' },
      { name: 'LUX 髮的補給', videoId: 's6s2p87fPdA' },
      { name: 'MAMA 永恆光燦系列' },
      { name: 'TKLAB' },
      { name: '五月花極上系列' },
      { name: '舒潔' },
      { name: '蕾妮亞' }
    ]
  },
  {
    id: 'finance',
    name: '金融與保險',
    items: [
      { name: '中國信託 點燃生命之火', videoId: 's6s2p87fPdA' },
      { name: '台灣 Pay' },
      { name: '安聯人壽' },
      { name: '復華投信' },
      { name: '遠雄人壽' },
      { name: '渣打銀行' },
      { name: '磊山保經' }
    ]
  }
];

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
          {currentCategory.items.map((item) => {
            const hasVideo = !!item.videoId;
            return (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                onClick={() => hasVideo && onPlayVideo(item.videoId)}
                className={`p-6 border rounded-sm flex flex-col justify-between transition-all duration-500 relative overflow-hidden group ${
                  hasVideo
                    ? 'border-zinc-800 bg-zinc-950/50 hover:border-aurora-blue cursor-pointer hover:shadow-[0_0_20px_rgba(212,175,55,0.12)]'
                    : 'border-zinc-900/40 bg-zinc-950/10'
                }`}
              >
                {/* 科技感微流光背景 (僅限有影片) */}
                {hasVideo && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-aurora-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                )}

                <div className={`text-sm tracking-wide transition-colors duration-300 ${
                  hasVideo 
                    ? 'text-zinc-200 group-hover:text-white font-medium' 
                    : 'text-zinc-500 font-light'
                }`}>
                  {item.name}
                </div>

                {hasVideo ? (
                  <div className="mt-6 flex items-center gap-1.5 text-[10px] text-aurora-blue font-black tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                    <Play size={10} fill="currentColor" /> Play Reel
                  </div>
                ) : (
                  <div className="mt-6 text-[8px] text-zinc-700 mono tracking-widest uppercase">
                    // ARCHIVE
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
