import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Binary, Cpu } from 'lucide-react';
import RefractionCard from './RefractionCard';

const skillCategories = [
  {
    id: '01',
    title: 'Visual Synthesis',
    subtitle: '視覺合成與動態美學',
    desc: '13 年電影級 Flame 特效合成背景，擅長光學折射、流體動力學與三維幾何在二維螢幕上的完美重組。',
    stats: [
      { name: 'Flame / VFX Compositing', value: 98, code: 'FLAME_RENDER_ENGINE' },
      { name: '3D Sequence Crafting', value: 92, code: 'POLY_SEQUENCE_V3' },
      { name: 'Color Grading & Specularity', value: 95, code: 'HDR_OPTICAL_CORE' },
    ],
    meta: 'CORE.MODULE: ACTIVE // PORT.ALLOC: 7001'
  },
  {
    id: '02',
    title: 'UX Architecture',
    subtitle: '體驗架構與系統邏輯',
    desc: '注重形式與功能的絕對統一。利用資訊架構（IA）解構用戶痛點，建立高效率、低認知負荷的微互動。',
    stats: [
      { name: 'Information Architecture', value: 90, code: 'INFO_NODE_ROUTING' },
      { name: 'Interactive Prototyping', value: 94, code: 'UX_LOGIC_PROTO_BETA' },
      { name: 'Design Token Systems', value: 88, code: 'CORE_TOKEN_REGISTRY' },
    ],
    meta: 'UX.MODULE: COMPILING // PORT.ALLOC: 7002'
  },
  {
    id: '03',
    title: 'Creative Front-End',
    subtitle: '創意前端與互動特效',
    desc: '拒絕平庸的靜態網頁。使用 React / Vite / Framer Motion 等技術，將高端視覺理念完美還原在瀏覽器中。',
    stats: [
      { name: 'React / Next.js Ecosystem', value: 91, code: 'REACT_DOM_VIRTUAL' },
      { name: 'Vite / Fast Compilation', value: 95, code: 'VITE_COMPILER_READY' },
      { name: 'Framer Motion / Micro-interactions', value: 96, code: 'MOTION_SPRING_ENGINE' },
    ],
    meta: 'DEV.MODULE: ACTIVE // PORT.ALLOC: 7003'
  }
];

export default function SkillsDashboard() {
  const [activeTab, setActiveTab] = useState('01');
  const activeCategory = skillCategories.find(cat => cat.id === activeTab);

  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-t border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Section 標頭 */}
        <div className="mb-16">
          <div className="mono text-xs text-aurora-blue mb-4 uppercase tracking-[0.4em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-aurora-blue animate-pulse" />
            01 // HUD SYSTEM CONSOLE
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white-or-black">
            SKILLS <span className="text-zinc-600">DASHBOARD</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* 左邊：控制台 Tab 按鈕 */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2 border-b border-border pb-2">
              // SELECT_MODULE
            </div>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-left p-6 rounded-sm transition-all duration-300 relative overflow-hidden border ${
                  activeTab === cat.id
                    ? 'bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white/60 border-aurora-blue shadow-[0_0_20px_rgba(212,175,55,0.08)]'
                    : 'bg-transparent border-border hover:border-zinc-700'
                }`}
              >
                {/* 選取狀態指示燈 */}
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-aurora-blue"
                  />
                )}
                
                <div className="flex justify-between items-start mb-2">
                  <span className="mono text-[10px] text-zinc-500">{cat.id} // SYS.MOD</span>
                  {activeTab === cat.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-aurora-blue animate-ping" />
                  )}
                </div>
                
                <div className="text-xl font-bold text-white-or-black tracking-tight uppercase">
                  {cat.title}
                </div>
                <div className="text-[11px] text-zinc-500 mono mt-1">
                  {cat.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* 右邊：發光 HUD 數據面板 */}
          <div className="lg:col-span-8">
            <RefractionCard className="h-full bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-white/40 backdrop-blur-md border border-border rounded-sm p-8 md:p-10 flex flex-col justify-between min-h-[420px]">
              {/* 面板頂部資訊 */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border pb-6 mb-8 gap-4">
                  <div>
                    <span className="mono text-[10px] text-aurora-blue uppercase tracking-widest block mb-1">
                      {activeCategory.meta}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white-or-black uppercase tracking-tight">
                      {activeCategory.title}
                    </h3>
                  </div>
                  <div className="mono text-[10px] text-zinc-500 px-3 py-1.5 border border-border bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 rounded-sm flex items-center gap-2">
                    <Cpu size={12} className="text-aurora-blue" />
                    ALLOC.STATUS: OPTIMAL
                  </div>
                </div>

                {/* 詳細描述 */}
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-8 max-w-2xl">
                  {activeCategory.desc}
                </p>

                {/* 技能長條圖 (HUD Progress Bars) */}
                <div className="space-y-6">
                  {activeCategory.stats.map((stat, i) => (
                    <div key={stat.name} className="space-y-2">
                      <div className="flex justify-between items-end text-xs">
                        <span className="font-bold text-zinc-400 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                          <Binary size={12} className="text-aurora-blue" />
                          {stat.name}
                        </span>
                        <span className="mono font-bold text-aurora-blue">{stat.value}%</span>
                      </div>
                      
                      {/* 進度條外框與背景 */}
                      <div className="h-2 w-full bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-200/80 border border-border rounded-full overflow-hidden p-[1px]">
                        {/* 動態進度條本體 */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.value}%` }}
                          transition={{ duration: 1, ease: 'easeOut', delay: i * 0.1 }}
                          className="h-full rounded-full bg-aurora-blue shadow-[0_0_8px_var(--color-aurora-blue)]"
                        />
                      </div>
                      
                      <div className="mono text-[9px] text-zinc-500">
                        ADDR: 0x8A2C // REG: {stat.code}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 面板底部裝飾 */}
              <div className="border-t border-border pt-6 mt-8 flex justify-between items-center mono text-[9px] text-zinc-500">
                <span>SYS_TEMP: 38.2°C // VOLT: 1.2V</span>
                <span className="flex items-center gap-1.5">
                  <Terminal size={10} className="text-aurora-blue animate-pulse" />
                  SHELL: ZSH // AGENT: ACTIVE
                </span>
              </div>
            </RefractionCard>
          </div>
        </div>
      </div>
    </section>
  );
}
