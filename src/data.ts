export const reportData = {
  header: {
    title: "Diagnóstico Operacional",
    subtitle: "Gestão & Estratégia",
    client: "Excellence",
    period: "últimos 90 dias",
    platforms: "Meta Ads + Google Ads",
    metaAccount: "1094388656137395",
    googleAccount: "638-721-9325",
    objective: "WhatsApp → “vira oportunidade no CRM”",
    proxy: "volume de mensagens/conversas iniciadas"
  },
  tags: [
    "Geo: Brasil todo",
    "Idiomas: inglês + espanhol",
    "Tom do negócio: direto",
    "Serviço: traduções com validade internacional"
  ],
  note: "Como a qualificação final é retornada pelo time comercial e não é rastreável diretamente nas campanhas, este diagnóstico foca em geração de conversa e controle de variáveis de mídia que mais determinam o volume e a previsibilidade de leads.",
  executiveSummary: [
    "Meta e Google operam com o objetivo final “Lead via WhatsApp” (guiado por proxy operacional).",
    "Maior risco: misturar intenção em conjuntos amplos, gerando conversas com qualidade instável.",
    "Ponto de controle: mídia seletiva por intenção (Google) e consistente por proposta de valor (Meta).",
    "Recomendação central: separar e priorizar campanhas/estruturas por intenção e jornada.",
    "Próximo marco: implementar “base de previsibilidade” em 7–14 dias."
  ],
  kpis: [
    { label: "Métrica norte (mídia)", value: "Volume de conversas no WhatsApp", note: "Qualificação CRM é feedback manual." },
    { label: "Hipótese a validar", value: "Qualidade proxy vs intenção", note: "Conversas sobem mas opps caem = gargalo de fit." },
    { label: "Risco típico", value: "Estrutura misturada", note: "Broad + remkt + s/ rotação = custo oscila." }
  ],
  operationalMap: [
    { platform: "Meta Ads", desc: "Campanhas direcionadas para iniciar conversa, conjuntos segmentados por idioma e intenção." },
    { platform: "Google Ads", desc: "Termos de alta intenção (Search) e expansão, rotas para o WhatsApp alinhadas com o idioma." },
    { platform: "Governança", desc: "Consistência de promessa, evitando quebrar expectativa ao chegar no WhatsApp." },
    { platform: "Previsibilidade", desc: "Separação Topo/Meio/Fundo e isolamento de remarketing." }
  ],
  diagnosticFrente: [
    {
      title: "Meta Ads",
      impact: "Alto",
      impactDesc: "estabilidade e custo",
      points: [
        "Assegurar que rotas gerem conversas (Message objective).",
        "Checar correspondência de idioma EN/ES (criativo vs fluxo).",
        "Validar conjuntos amplos (qualidade) vs restritos (volume).",
        "Garantir isolamento do remarketing.",
        "Criativos: priorizar entrega, processos e validação internacional."
      ]
    },
    {
      title: "Google Ads",
      impact: "Médio",
      impactDesc: "previsibilidade e desperdício",
      points: [
        "Buscar intenção explícita conectada à dor do lead.",
        "Anúncio precisa estar em harmonia com a abertura do WhatsApp.",
        "Estratégia de lances para a meta (CPA adequado).",
        "Pesquisa vs PMax: Validar sobreposição e vazamento.",
        "Limpeza de termos: negativação de buscas não profissionais."
      ]
    }
  ],
  crossPlatform: [
    "Meta = topo/meio (demanda e descoberta), bom para volume.",
    "Google = fundo (intenção), bom para probabilidade de CRM.",
    "Risco: remarketing governar orçamento e camuflar CPA.",
    "Critério: usar CPA da conversa como base inicial de alocação."
  ],
  actionPlan: [
    {
      level: "Alta (0-14 d)",
      title: "Estrutura",
      bullets: ["Padronizar métricas.", "Mapear estrutura por intenção.", "Isolar remarketing.", "Higiene EN/ES."]
    },
    {
      level: "Media (14-30 d)",
      title: "Otimização",
      bullets: ["Teste de criativos (prova/processo).", "Refinar públicos.", "Negativas (Google).", "Auditar congruência do WhatsApp."]
    },
    {
      level: "Baixa (30-60 d)",
      title: "Escala",
      bullets: ["Testes de mensagem cruzada.", "Escala financeira em volume estável.", "Expansões laterais (B2B específico)."]
    }
  ],
  topActions: [
    { priority: "Alto", desc: "Governança do proxy de resultado e rotina de leitura", platform: "Meta + Google" },
    { priority: "Alto", desc: "Separar aquisição por intenção e isolar remarketing", platform: "Meta + Google" },
    { priority: "Alto", desc: "Ajuste de idioma e coerência criativo → WhatsApp", platform: "Meta + Google" },
    { priority: "Médio", desc: "Google: higiene de termos (negativas) e alinhamento Search", platform: "Google" },
    { priority: "Médio", desc: "Meta: roteiros de criativos com prova/clareza", platform: "Meta" }
  ],
  nextSteps: [
    "Revisão de estrutura completa.",
    "Diagnóstico numérico detalhado por campanha (quando métricas chegarem).",
    "Plano de 1 teste de mensagem, 1 bloco de negativas, 1 ajuste de remarketing.",
    "Protocolo simples de feedback qualitativo semanal com a equipe de vendas."
  ]
};
