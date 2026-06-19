import { motion } from "motion/react";
import React from "react";
import { reportData } from "./data";
import { BezelCard, Eyebrow, Heading2, Metric, Tag } from "./components/ui";
import { CaretRight, ChartLineUp, ShieldWarning, Target, CheckCircle, Crosshair } from "@phosphor-icons/react";

export default function App() {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden text-white/90 selection:bg-white/20">
      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/10 blur-[150px] mix-blend-screen" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 flex flex-col gap-8 md:gap-12">
        
        {/* Navigation / Header Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="mx-auto inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-12 md:mb-24"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium tracking-wide text-white/70">DIAGNÓSTICO // 90D</span>
        </motion.div>

        {/* Hero: Editorial Split */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <Eyebrow>Visão Executiva</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl tracking-tighter leading-[1.1] mb-6">
              {reportData.header.title}<br />
              <span className="text-white/40">{reportData.header.subtitle}</span>
            </h1>
            <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-[50ch]">
              Análise operacional das campanhas <b>{reportData.header.platforms}</b> focada no proxy de {reportData.header.proxy}.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="w-full lg:w-1/2"
          >
            <BezelCard autoAnimate={false}>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-sm font-medium text-white/40 mb-3 uppercase tracking-wider">Metadados do Projeto</h3>
                  <div className="flex flex-wrap gap-2">
                    {reportData.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </div>
                </div>
                <div className="h-[1px] w-full bg-white/10" />
                <p className="text-sm leading-relaxed text-white/60">
                  {reportData.note}
                </p>
              </div>
            </BezelCard>
          </motion.div>
        </section>

        {/* Bento Grid: Executive Summary & KPIs */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
          
          <BezelCard className="md:col-span-8" delay={0.1}>
            <Eyebrow>01. Resumo Executivo</Eyebrow>
            <Heading2>Alinhamento Operacional</Heading2>
            <ul className="flex flex-col gap-4 mt-2">
              {reportData.executiveSummary.map((item, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <div className="mt-1"><Target className="w-5 h-5 text-emerald-400" weight="light" /></div>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </BezelCard>

          <BezelCard className="md:col-span-4" delay={0.2}>
             <Eyebrow>02. Diagnóstico Base</Eyebrow>
             <Heading2>Sinais do Sistema</Heading2>
             <div className="flex flex-col gap-4">
               {reportData.kpis.map((kpi, i) => (
                 <Metric key={i} label={kpi.label} value={kpi.value} note={kpi.note} />
               ))}
             </div>
          </BezelCard>

        </section>

        {/* Operational Map */}
        <section className="mb-16 md:mb-24">
          <BezelCard delay={0.3} className="w-full">
             <Eyebrow>03. Mapa Operacional do Projeto</Eyebrow>
             <Heading2>Estrutura para WhatsApp Lead</Heading2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {reportData.operationalMap.map((map, i) => (
                   <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                      <span className="text-sm font-medium text-emerald-400">{map.platform}</span>
                      <p className="text-sm text-white/60 leading-relaxed">{map.desc}</p>
                   </div>
                ))}
             </div>
          </BezelCard>
        </section>

        {/* Diagnostic Fronts: Z-Axis Style overlapping slightly visually via mapping in a grid */}
        <section className="py-8 md:py-16">
          <Eyebrow>04. Frente de Mídia</Eyebrow>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
            {reportData.diagnosticFrente.map((frente, idx) => (
              <BezelCard key={idx} delay={idx * 0.1}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                    {idx === 0 ? <ChartLineUp className="w-6 h-6 text-blue-400" /> : <Crosshair className="w-6 h-6 text-emerald-400" />}
                  </div>
                  <div>
                    <h3 className="font-display font-medium tracking-tight text-xl">{frente.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Tag variant={frente.impact === "Alto" ? "high" : "medium"}>Risco/Impacto {frente.impact}</Tag>
                      <span className="text-xs text-white/40">{frente.impactDesc}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {frente.points.map((pt, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-[1px] h-auto bg-white/10 mt-2 mb-2 ml-2" />
                      <p className="text-sm text-white/60 leading-relaxed py-2 flex-1">{pt}</p>
                    </div>
                  ))}
                </div>
              </BezelCard>
            ))}
          </div>
        </section>

        {/* Cross-Platform Lógica */}
        <section className="mb-16 md:mb-32">
          <BezelCard delay={0.2} className="w-full">
            <Eyebrow>05. Lógica Cross-Platform (Meta vs Google)</Eyebrow>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mt-6">
              <div className="flex-1 space-y-6">
                {reportData.crossPlatform.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                     <div className="w-8 h-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                       <span className="text-white/50 text-sm">{i + 1}</span>
                     </div>
                     <p className="text-white/70 leading-relaxed text-sm md:text-base pt-1">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex-1 space-y-6">
                {reportData.crossPlatform.slice(2).map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                     <div className="w-8 h-8 shrink-0 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20">
                       <ShieldWarning className="w-4 h-4" />
                     </div>
                     <p className="text-white/70 leading-relaxed text-sm md:text-base pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </BezelCard>
        </section>

        {/* Action Plan & Top Actions */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-32">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <BezelCard>
              <Eyebrow>07. Priority Map</Eyebrow>
              <Heading2>Top 5 Ações Cruzadas</Heading2>
              <div className="flex flex-col gap-4">
                {reportData.topActions.map((action, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:bg-white/5 transition-all">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <span className="text-sm font-medium text-white/90 leading-tight">
                        <span className="text-white/30 mr-2">0{i + 1}</span> {action.desc}
                      </span>
                    </div>
                    <div className="flex gap-2">
                       <Tag variant={action.priority === "Alto" ? "high" : "medium"}>{action.priority}</Tag>
                       <Tag>{action.platform}</Tag>
                    </div>
                  </div>
                ))}
              </div>
            </BezelCard>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            <Eyebrow>06. Action Plan</Eyebrow>
            <h2 className="font-display text-4xl font-medium tracking-tighter mb-8 max-w-lg">Plano de Execução Operacional</h2>
            <div className="flex flex-col gap-6 w-full">
              {reportData.actionPlan.map((plan, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  key={i} 
                  className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 border-b border-white/10 last:border-0"
                >
                  <div className="w-full md:w-1/3 shrink-0">
                    <div className="text-sm font-medium text-white/50 mb-1">{plan.level}</div>
                    <div className="text-xl font-display text-white/90 tracking-tight">{plan.title}</div>
                  </div>
                  <ul className="flex-1 flex flex-col gap-3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 border-dashed">
                    {plan.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-sm text-white/60 leading-relaxed flex gap-3 items-start">
                        <CheckCircle className="w-4 h-4 text-white/20 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center justify-center text-center pb-24 relative z-10">
           <div className="text-xs text-white/40 max-w-sm mb-4">
             Recorte aplicado: Diagnóstico Operacional (Gestão & Estratégia).
             Limitação consciente: sem “lead qualificado rastreável” nas campanhas.
           </div>
           <div className="inline-flex items-center gap-2 group cursor-pointer px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-xs font-medium text-white/60">Exportar Relatório Dashboard</span>
              <CaretRight className="w-3 h-3 text-white/40 group-hover:translate-x-1 transition-transform" />
           </div>
        </footer>

      </div>
    </div>
  );
}
