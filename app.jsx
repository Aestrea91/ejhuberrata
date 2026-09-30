import React, { useState, useMemo } from 'react';

// SVG Icons for clean single-file bundle without external dependencies
const IconRocket = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m-2.828 9.9a9 9 0 010-12.728M12 12h.01" />
  </svg>
);

const IconSWOT = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const IconUsers = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconUser = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const IconPlus = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const IconTrash = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const IconVideo = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const IconBook = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const IconTask = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const IconLightbulb = () => (
  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const IconShield = () => (
  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconSearch = () => (
  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconAward = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

// Initial Mock Data for Consultants and Onboarding Tracks
const INITIAL_CONSULTANTS = [
  {
    id: 'c1',
    name: 'Ana Clara Silva',
    role: 'Trainee de Projetos',
    department: 'Projetos',
    seniority: 'Trainee',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    initials: 'AS',
    verified: true,
    skills: ['Trello & Kanban', 'Elaboração de EAP', 'Métodos Ágeis', 'Comunicação Visual'],
    activeProjects: ['E-Commerce Moda Sustentável', 'Reestruturação Organizacional Tech'],
    swot: {
      strengths: ['Construção de EAP/WBS detalhada', 'Engajamento e pontualidade com o time', 'Domínio de ferramentas visuais'],
      weaknesses: ['Gestão de Riscos do Projeto', 'Comunicação Assertiva com Cliente sob pressão'],
      opportunities: ['Certificação Scrum Master / CAPM', 'Liderança de Squad no próximo ciclo'],
      threats: ['Acúmulo de provas na universidade', 'Escopo variável do cliente atual']
    },
    pdiRecommendations: [
      'Concluir Trilha "Gestão de Projetos & Mapeamento de Riscos"',
      'Realizar 2 simulações de Reunião de Alinhamento com Mentoria de DHO',
      'Assumir relatoria de status semanal com o cliente'
    ]
  },
  {
    id: 'c2',
    name: 'Lucas Mendes',
    role: 'Consultor Comercial',
    department: 'Comercial',
    seniority: 'Júnior',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    initials: 'LM',
    verified: true,
    skills: ['Pitch de Vendas', 'Inbound Sales', 'CRM HubSpot', 'Negociação'],
    activeProjects: ['Prospecção Outbound B2B', 'Funil de Vendas Setor Químico'],
    swot: {
      strengths: ['Prospecção ativa e frio contatos', 'Excelente oratória e carisma em diagnósticos', 'Agilidade em propostas'],
      weaknesses: ['Contorno de Objeções de Preço', 'Registro detalhado de interações no CRM'],
      opportunities: ['Treinamento avançado SPIN Selling', 'Benchmarking com EJs de Alta Performance'],
      threats: ['Aumento no ciclo de decisão de prospects', 'Agressividade de concorrência local']
    },
    pdiRecommendations: [
      'Treinamento prático: Trilha de "Negociação & Contorno de Objeções"',
      'Auditoria semanal de Leads no CRM com Líder Comercial'
    ]
  },
  {
    id: 'c3',
    name: 'Beatriz Lima',
    role: 'Diretora de DHO',
    department: 'DHO',
    seniority: 'Sênior',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    initials: 'BL',
    verified: true,
    skills: ['Gestão por Competências', 'Feedbacks 360°', 'Planejamento de Onboarding', 'Resolução de Conflitos'],
    activeProjects: ['Novo Processo Seletivo 2026.2', 'Programa de Lideranças EJ'],
    swot: {
      strengths: ['Visão empática e escuta ativa', 'Organização de rituais de cultura', 'Facilitação de dinâmicas'],
      weaknesses: ['Dificuldade em delegar tarefas operacionais', 'Gestão do tempo em reuniões longas'],
      opportunities: ['Adoção de People Analytics e Matriz SWOT Automatizada', 'Parcerias com consultorias sênior'],
      threats: ['Sobrecarga emocional do time em encerramentos de ciclo', 'Rotatividade de trainees']
    },
    pdiRecommendations: [
      'Aplicar delegação progressiva no squad de DHO',
      'Implementar OKRs trimestrais de DHO com foco em eficiência'
    ]
  },
  {
    id: 'c4',
    name: 'Marco Santos',
    role: 'Consultor de Marketing',
    department: 'Marketing',
    seniority: 'Pleno',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    initials: 'MS',
    verified: false,
    skills: ['Copywriting', 'Design Gráfico', 'Social Media', 'Tráfego Pago'],
    activeProjects: ['Campanha de Inbound MEJ 2026', 'Rebranding Institucional'],
    swot: {
      strengths: ['Criatividade visual e identidade de marca', 'Excelente escrita persuasiva'],
      weaknesses: ['Análise de Dados de Performance de Ads', 'Cumprimento rígido de prazos de entrega'],
      opportunities: ['Especialização em Marketing de Conteúdo & SEO', 'Automação de e-mails'],
      threats: ['Mudanças frequentes nos algoritmos das redes sociais', 'Demandas urgentes de última hora']
    },
    pdiRecommendations: [
      'Trilha "Marketing de Atração & Métricas de Performance"',
      'Utilizar cronograma com margem de segurança no Trello'
    ]
  }
];

const INITIAL_TRACKS = [
  {
    id: 't1',
    title: 'Gestão de Projetos & Matriz de Riscos',
    department: 'Projetos',
    description: 'Aprenda a planejar escopos sem furos, identificar riscos com antecedência e liderar reuniões de acompanhamento.',
    icon: '📊',
    relatedWeaknesses: ['Gestão de Riscos do Projeto', 'Escopo e WBS'],
    lessons: [
      { id: 'l101', title: 'Introdução ao PMBOK e Metodologia Ágil na EJ', duration: '15 min', type: 'video', completed: true },
      { id: 'l102', title: 'Como construir uma EAP/WBS sem erros', duration: '20 min', type: 'article', completed: true },
      { id: 'l103', title: 'Matriz de Probabilidade vs Impacto de Riscos', duration: '25 min', type: 'practice', completed: false },
      { id: 'l104', title: 'Plano de Mitigação e Contingência na Prática', duration: '30 min', type: 'practice', completed: false }
    ]
  },
  {
    id: 't2',
    title: 'Negociação & Contorno de Objeções',
    department: 'Comercial',
    description: 'Domine a arte de ouvir o cliente, aplicar Spin Selling e contornar objeções de preço e escopo.',
    icon: '🤝',
    relatedWeaknesses: ['Contorno de Objeções de Preço', 'Comunicação Assertiva com Cliente sob pressão'],
    lessons: [
      { id: 'l201', title: 'Metodologia SPIN Selling aplicada a Consultoria', duration: '18 min', type: 'video', completed: false },
      { id: 'l202', title: 'Táticas para contornar "Está muito caro"', duration: '15 min', type: 'article', completed: false },
      { id: 'l203', title: 'Simulação de reunião de fechamento', duration: '40 min', type: 'practice', completed: false }
    ]
  },
  {
    id: 't3',
    title: 'Cultura EJ & Mindset de Alta Performance',
    department: 'Cultura',
    description: 'Imersão no Movimento Empresa Júnior, código de ética, valores corporativos e protagonismo jovem.',
    icon: '🚀',
    relatedWeaknesses: ['Engajamento e Pontualidade', 'Alinhamento Cultural'],
    lessons: [
      { id: 'l301', title: 'História do MEJ e Propósito da nossa EJ', duration: '12 min', type: 'video', completed: true },
      { id: 'l302', title: 'Código de Conduta e Gestão do Tempo', duration: '15 min', type: 'article', completed: true },
      { id: 'l303', title: 'Trabalho em Equipe e Inteligência Emocional', duration: '20 min', type: 'video', completed: false }
    ]
  },
  {
    id: 't4',
    title: 'Marketing de Atração & Métricas de Ads',
    department: 'Marketing',
    description: 'Compreenda estratégias de Inbound, Copywriting com gatilhos mentais e análise de performance.',
    icon: '🎯',
    relatedWeaknesses: ['Análise de Dados de Performance de Ads', 'Copywriting'],
    lessons: [
      { id: 'l401', title: 'Princípios de Copywriting Persuasivo', duration: '20 min', type: 'article', completed: false },
      { id: 'l402', title: 'Configurando Campanhas e Análise de ROI', duration: '35 min', type: 'video', completed: false }
    ]
  }
];

export default function EJHubPlatform() {
  // Navigation & Role State
  const [activeTab, setActiveTab] = useState('onboarding'); // 'onboarding' | 'swot' | 'talents' | 'myprofile'
  const [userRole, setUserRole] = useState('dho'); // 'consultant' | 'dho'

  // Data State
  const [consultants, setConsultants] = useState(INITIAL_CONSULTANTS);
  const [tracks, setTracks] = useState(INITIAL_TRACKS);
  const [selectedConsultantId, setSelectedConsultantId] = useState('c1');
  const [currentUserId] = useState('c1'); // Ana Clara Silva

  // Search & Filter States
  const [talentSearch, setTalentSearch] = useState('');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('Todos');
  const [selectedSeniorityFilter, setSelectedSeniorityFilter] = useState('Todos');
  const [mediaTypeFilter, setMediaTypeFilter] = useState('todos'); // 'todos' | 'video' | 'article' | 'practice'

  // New SWOT Item Input State (for DHO mode)
  const [newSwotInput, setNewSwotInput] = useState({ category: 'strengths', text: '' });
  
  // Goals State for My Profile
  const [personalGoals, setPersonalGoals] = useState([
    { id: 'g1', title: 'Concluir Capacitação em Mapeamento de Riscos', done: false },
    { id: 'g2', title: 'Conduzir 1 reunião de status com o cliente sem auxílio sênior', done: true },
    { id: 'g3', title: 'Agendar sessão de Feedback com a Diretoria de DHO', done: false }
  ]);
  const [newGoalText, setNewGoalText] = useState('');

  // Active Consultant Object
  const currentSelectedConsultant = useMemo(() => {
    return consultants.find(c => c.id === selectedConsultantId) || consultants[0];
  }, [consultants, selectedConsultantId]);

  // Logged-in User Object
  const currentUser = useMemo(() => {
    return consultants.find(c => c.id === currentUserId) || consultants[0];
  }, [consultants, currentUserId]);

  // Smart Recommendation: Find tracks related to current user's or selected consultant's SWOT weaknesses
  const recommendedTracks = useMemo(() => {
    const userWeaknesses = currentUser.swot.weaknesses;
    return tracks.filter(track => 
      track.relatedWeaknesses.some(w => 
        userWeaknesses.some(userW => userW.toLowerCase().includes(w.toLowerCase()) || w.toLowerCase().includes(userW.toLowerCase()))
      )
    );
  }, [currentUser, tracks]);

  // Toggle lesson completion
  const handleToggleLesson = (trackId, lessonId) => {
    setTracks(prevTracks => prevTracks.map(track => {
      if (track.id === trackId) {
        return {
          ...track,
          lessons: track.lessons.map(l => l.id === lessonId ? { ...l, completed: !l.completed } : l)
        };
      }
      return track;
    }));
  };

  // Add SWOT item (DHO mode)
  const handleAddSwotItem = (category) => {
    if (!newSwotInput.text.trim()) return;
    
    setConsultants(prev => prev.map(c => {
      if (c.id === selectedConsultantId) {
        return {
          ...c,
          swot: {
            ...c.swot,
            [category]: [...c.swot[category], newSwotInput.text.trim()]
          }
        };
      }
      return c;
    }));

    setNewSwotInput({ category: 'strengths', text: '' });
  };

  // Remove SWOT item (DHO mode)
  const handleRemoveSwotItem = (category, indexToRemove) => {
    setConsultants(prev => prev.map(c => {
      if (c.id === selectedConsultantId) {
        return {
          ...c,
          swot: {
            ...c.swot,
            [category]: c.swot[category].filter((_, idx) => idx !== indexToRemove)
          }
        };
      }
      return c;
    }));
  };

  // Add personal goal
  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    setPersonalGoals(prev => [...prev, { id: Date.now().toString(), title: newGoalText.trim(), done: false }]);
    setNewGoalText('');
  };

  const handleToggleGoal = (id) => {
    setPersonalGoals(prev => prev.map(g => g.id === id ? { ...g, done: !g.done } : g));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      
      {/* HEADER TOP BAR */}
      <header className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700/80 sticky top-0 z-50 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 text-xl tracking-wider">
                EJ
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg text-white tracking-tight">EJHub Platform</h1>
                <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Empresa Júnior
                </span>
              </div>
              <p className="text-xs text-slate-400">Gestão de Pessoas, Onboarding & Matriz SWOT</p>
            </div>
          </div>

          {/* Mode Switcher & User Widget */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            
            {/* View Mode Toggle */}
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center">
              <button
                onClick={() => setUserRole('consultant')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  userRole === 'consultant'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                👤 Visão Consultor
              </button>
              <button
                onClick={() => setUserRole('dho')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  userRole === 'dho'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                🛡️️ Visão DHO / Liderança
              </button>
            </div>

            {/* Current User Quick Badge */}
            <div className="hidden sm:flex items-center gap-2.5 bg-slate-800 border border-slate-700/60 rounded-xl px-3 py-1.5">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-7 h-7 rounded-full object-cover border border-emerald-400"
              />
              <div className="text-left leading-tight">
                <div className="text-xs font-semibold text-white">{currentUser.name}</div>
                <div className="text-[10px] text-slate-400">{currentUser.role}</div>
              </div>
            </div>

          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="max-w-7xl mx-auto mt-3 border-t border-slate-700/50 pt-2 flex items-center space-x-1 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('onboarding')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'onboarding'
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/40 shadow-sm'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <IconRocket />
            <span>Trilhas de Onboarding & Capacitação</span>
          </button>

          <button
            onClick={() => setActiveTab('swot')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'swot'
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/40 shadow-sm'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <IconSWOT />
            <span>Matriz SWOT dos Consultores</span>
            {userRole === 'dho' && (
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded border border-emerald-500/30">
                Edição Ativa
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('talents')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'talents'
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/40 shadow-sm'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <IconUsers />
            <span>Banco de Talentos & Perfil</span>
          </button>

          <button
            onClick={() => setActiveTab('myprofile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'myprofile'
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/40 shadow-sm'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <IconUser />
            <span>Meu Perfil & Desenvolvimento</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER CONTENT */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8 space-y-6">

        {/* ========================================================================= */}
        {/* TAB 1: TRILHAS DE ONBOARDING & CAPACITAÇÃO */}
        {/* ========================================================================= */}
        {}
        {activeTab === 'onboarding' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Recommendation Smart Banner */}
            {recommendedTracks.length > 0 && (
              <div className="bg-gradient-to-r from-indigo-950/80 via-slate-800 to-slate-900 border border-indigo-500/30 rounded-2xl p-5 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/20">
                      <IconLightbulb />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        Recomendação Inteligente de PDI
                        <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-normal border border-amber-500/30">
                          Baseado na sua SWOT Pessoal
                        </span>
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                        Mapeamos pontos de melhoria no seu perfil (ex: <strong className="text-amber-300">{currentUser.swot.weaknesses.join(', ')}</strong>) 
                        e destacamos as trilhas ideais para acelerar o seu desenvolvimento na EJ.
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      const el = document.getElementById('recommended-tracks-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition shadow-lg shadow-indigo-600/30 whitespace-nowrap"
                  >
                    Ver Trilhas Recomendadas
                  </button>
                </div>
              </div>
            )}

            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-800/60 border border-slate-700/60 p-4 rounded-2xl">
              
              {/* Department Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <span className="text-xs font-medium text-slate-400 mr-1">Área:</span>
                {['Todos', 'Projetos', 'Comercial', 'Marketing', 'Cultura'].map(dept => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDeptFilter(dept)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                      selectedDeptFilter === dept
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-slate-900/60 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>

              {/* Media Format Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-400">Formato:</span>
                <select
                  value={mediaTypeFilter}
                  onChange={(e) => setMediaTypeFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-1.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option value="todos">Todos os Formatos</option>
                  <option value="video">🎥 Vídeo Aulas</option>
                  <option value="article">📖 Artigos & Leituras</option>
                  <option value="practice">⚡ Exercícios Práticos</option>
                </select>
              </div>

            </div>

            {/* Track Grid Section */}
            <div id="recommended-tracks-section" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tracks
                .filter(t => selectedDeptFilter === 'Todos' || t.department === selectedDeptFilter)
                .map((track) => {
                  const completedLessons = track.lessons.filter(l => l.completed).length;
                  const totalLessons = track.lessons.length;
                  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);
                  const isRecommended = recommendedTracks.some(rt => rt.id === track.id);

                  // Filter lessons inside track by media filter
                  const filteredLessons = track.lessons.filter(l => {
                    if (mediaTypeFilter === 'todos') return true;
                    return l.type === mediaTypeFilter;
                  });

                  return (
                    <div 
                      key={track.id} 
                      className={`bg-slate-800/80 border rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:border-slate-600 relative overflow-hidden ${
                        isRecommended ? 'border-indigo-500/50 shadow-lg shadow-indigo-950/40 ring-1 ring-indigo-500/20' : 'border-slate-700/70'
                      }`}
                    >
                      {isRecommended && (
                        <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow">
                          ⭐ Recomendado SWOT
                        </div>
                      )}

                      <div>
                        {/* Track Header */}
                        <div className="flex items-start gap-3.5 mb-3">
                          <div className="text-3xl p-3 bg-slate-900/80 rounded-2xl border border-slate-700/60 shadow-inner">
                            {track.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/20">
                                {track.department}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mt-1 leading-snug">{track.title}</h3>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 mb-4 leading-relaxed">{track.description}</p>

                        {/* Progress Bar */}
                        <div className="mb-5 bg-slate-900/70 p-3 rounded-xl border border-slate-800">
                          <div className="flex justify-between items-center text-xs mb-1.5">
                            <span className="text-slate-400 font-medium">Progresso do Módulo</span>
                            <span className="text-indigo-400 font-bold">{progressPercentage}% ({completedLessons}/{totalLessons} lições)</span>
                          </div>
                          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${progressPercentage}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Lessons List */}
                        <div className="space-y-2.5 mb-4">
                          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Lições & Conteúdos:</h4>
                          {filteredLessons.length === 0 ? (
                            <p className="text-xs text-slate-500 italic">Nenhuma lição encontrada para o filtro de formato selecionado.</p>
                          ) : (
                            filteredLessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                                  lesson.completed
                                    ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-300'
                                    : 'bg-slate-900/60 border-slate-800 text-slate-200 hover:border-slate-700'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={() => handleToggleLesson(track.id, lesson.id)}
                                    className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all ${
                                      lesson.completed
                                        ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                                        : 'border-slate-600 bg-slate-800 text-transparent hover:border-slate-400'
                                    }`}
                                  >
                                    <IconCheck />
                                  </button>
                                  <div>
                                    <div className={`text-xs font-medium ${lesson.completed ? 'line-through text-slate-400' : 'text-slate-100'}`}>
                                      {lesson.title}
                                    </div>
                                    <div className="flex items-center gap-2 mt-0.5">
                                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                        {lesson.type === 'video' && <IconVideo />}
                                        {lesson.type === 'article' && <IconBook />}
                                        {lesson.type === 'practice' && <IconTask />}
                                        {lesson.type === 'video' ? 'Vídeo' : lesson.type === 'article' ? 'Artigo' : 'Prática'}
                                      </span>
                                      <span className="text-[10px] text-slate-500">• {lesson.duration}</span>
                                    </div>
                                  </div>
                                </div>

                                <button
                                  onClick={() => handleToggleLesson(track.id, lesson.id)}
                                  className={`text-xs px-2.5 py-1 rounded-lg transition font-medium ${
                                    lesson.completed
                                      ? 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                      : 'bg-indigo-600/30 text-indigo-300 hover:bg-indigo-600 hover:text-white border border-indigo-500/40'
                                  }`}
                                >
                                  {lesson.completed ? 'Concluída' : 'Concluir'}
                                </button>
                              </div>
                            ))
                          )}
                        </div>
                      </div>

                      {/* Card Footer Badge */}
                      <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                        <span>Certificado EJ ao finalizar</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <IconAward /> +150 XP
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: MATRIZ SWOT DOS CONSULTORES */}
        {/* ========================================================================= */}
        {}
        {activeTab === 'swot' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Top Controls: Consultant Selector & Seniority Badge */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
                <img
                  src={currentSelectedConsultant.avatar}
                  alt={currentSelectedConsultant.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-indigo-500/60 shadow"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <label htmlFor="consultant-select" className="text-xs text-slate-400 font-medium">Selecione o Consultor:</label>
                    <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-2 py-0.5 rounded-full border border-indigo-500/30 font-semibold">
                      {currentSelectedConsultant.seniority}
                    </span>
                  </div>
                  
                  {/* Select Dropdown */}
                  <select
                    id="consultant-select"
                    value={selectedConsultantId}
                    onChange={(e) => setSelectedConsultantId(e.target.value)}
                    className="bg-slate-900 border border-slate-700 text-white font-bold text-base md:text-lg rounded-xl px-3 py-1.5 mt-1 focus:ring-2 focus:ring-indigo-500 outline-none w-full sm:w-auto cursor-pointer"
                  >
                    {consultants.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.role} - {c.department})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* DHO Status Banner */}
              <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 p-3 rounded-xl w-full md:w-auto justify-between">
                <div>
                  <div className="text-xs text-slate-400">Modo de Edição DHO:</div>
                  <div className="text-xs font-semibold text-white">
                    {userRole === 'dho' ? '🟢 Habilitado (Adicionar/Remover Itens)' : '🔒 Somente Leitura (Visão Consultor)'}
                  </div>
                </div>
                {userRole === 'consultant' && (
                  <button
                    onClick={() => setUserRole('dho')}
                    className="text-xs text-emerald-400 underline hover:text-emerald-300 whitespace-nowrap ml-2"
                  >
                    Ativar DHO
                  </button>
                )}
              </div>

            </div>

            {/* 4 QUADRANTS SWOT GRID */}
            {}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 1. FORÇAS (STRENGTHS) */}
              <div className="bg-slate-800/70 border border-emerald-500/30 rounded-2xl p-5 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">💪</span>
                      <div>
                        <h3 className="font-bold text-emerald-400 text-base">Forças (Strengths)</h3>
                        <p className="text-[11px] text-slate-400">Competências internas e diferenciais</p>
                      </div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      {currentSelectedConsultant.swot.strengths.length}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {currentSelectedConsultant.swot.strengths.map((item, index) => (
                      <li key={index} className="flex items-start justify-between bg-slate-900/60 border border-emerald-500/20 rounded-xl p-3 text-xs text-slate-200 group hover:border-emerald-500/40 transition">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                          {item}
                        </span>
                        {userRole === 'dho' && (
                          <button
                            onClick={() => handleRemoveSwotItem('strengths', index)}
                            className="text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition p-1"
                            title="Remover Item"
                          >
                            <IconTrash />
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add Input if DHO */}
                {userRole === 'dho' && (
                  <div className="mt-4 pt-3 border-t border-slate-700/50 flex gap-2">
                    <input
                      type="text"
                      placeholder="Adicionar nova força..."
                      value={newSwotInput.category === 'strengths' ? newSwotInput.text : ''}
                      onChange={(e) => setNewSwotInput({ category: 'strengths', text: e.target.value })}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddSwotItem('strengths')}
                      className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 flex-1 focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                    <button
                      onClick={() => handleAddSwotItem('strengths')}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-2 rounded-xl flex items-center gap-1 font-semibold transition"
                    >
                      <IconPlus /> Add
                    </button>
                  </div>
                )}
              </div>

              {/* 2. FRAQUEZAS (WEAKNESSES) */}
              <div className="bg-slate-800/70 border border-amber-500/30 rounded-2xl p-5 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">⚠️</span>
                      <div>
                        <h3 className="font-bold text-amber-400 text-base">Fraquezas (Weaknesses)</h3>
                        <p className="text-[11px] text-slate-400">Pontos de melhoria interna & lacunas</p>
                      </div>
                    </div>
                    <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-500/30">
                      {currentSelectedConsultant.swot.weaknesses.length}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {currentSelectedConsultant.swot.weaknesses.map((item, index) => (
                      <li key={index} className="flex items-start justify-between bg-slate-900/60 border border-amber-500/20 rounded-xl p-3 text-xs text-slate-200 group hover:border-amber-500/40 transition">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></span>
                          {item}
                        </span>
                        {userRole === 'dho' && (
                          <button
                            onClick={() => handleRemoveSwotItem('weaknesses', index)}
                            className="text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition p-1"
                            title="Remover Item"
                          >
                            <IconTrash />
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {userRole === 'dho' && (
                  <div className="mt-4 pt-3 border-t border-slate-700/50 flex gap-2">
                    <input
                      type="text"
                      placeholder="Adicionar nova fraqueza..."
                      value={newSwotInput.category === 'weaknesses' ? newSwotInput.text : ''}
                      onChange={(e) => setNewSwotInput({ category: 'weaknesses', text: e.target.value })}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddSwotItem('weaknesses')}
                      className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 flex-1 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                    <button
                      onClick={() => handleAddSwotItem('weaknesses')}
                      className="bg-amber-600 hover:bg-amber-500 text-white text-xs px-3 py-2 rounded-xl flex items-center gap-1 font-semibold transition"
                    >
                      <IconPlus /> Add
                    </button>
                  </div>
                )}
              </div>

              {/* 3. OPORTUNIDADES (OPPORTUNITIES) */}
              <div className="bg-slate-800/70 border border-indigo-500/30 rounded-2xl p-5 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">🚀</span>
                      <div>
                        <h3 className="font-bold text-indigo-400 text-base">Oportunidades (Opportunities)</h3>
                        <p className="text-[11px] text-slate-400">Possibilidades externas e crescimento</p>
                      </div>
                    </div>
                    <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-lg border border-indigo-500/30">
                      {currentSelectedConsultant.swot.opportunities.length}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {currentSelectedConsultant.swot.opportunities.map((item, index) => (
                      <li key={index} className="flex items-start justify-between bg-slate-900/60 border border-indigo-500/20 rounded-xl p-3 text-xs text-slate-200 group hover:border-indigo-500/40 transition">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                          {item}
                        </span>
                        {userRole === 'dho' && (
                          <button
                            onClick={() => handleRemoveSwotItem('opportunities', index)}
                            className="text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition p-1"
                            title="Remover Item"
                          >
                            <IconTrash />
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {userRole === 'dho' && (
                  <div className="mt-4 pt-3 border-t border-slate-700/50 flex gap-2">
                    <input
                      type="text"
                      placeholder="Adicionar nova oportunidade..."
                      value={newSwotInput.category === 'opportunities' ? newSwotInput.text : ''}
                      onChange={(e) => setNewSwotInput({ category: 'opportunities', text: e.target.value })}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddSwotItem('opportunities')}
                      className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 flex-1 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <button
                      onClick={() => handleAddSwotItem('opportunities')}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-2 rounded-xl flex items-center gap-1 font-semibold transition"
                    >
                      <IconPlus /> Add
                    </button>
                  </div>
                )}
              </div>

              {/* 4. AMEAÇAS (THREATS) */}
              <div className="bg-slate-800/70 border border-purple-500/30 rounded-2xl p-5 shadow-lg relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-purple-500/20 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">🛡️</span>
                      <div>
                        <h3 className="font-bold text-purple-400 text-base">Ameaças (Threats)</h3>
                        <p className="text-[11px] text-slate-400">Fatores de risco externos e desafios</p>
                      </div>
                    </div>
                    <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-2.5 py-1 rounded-lg border border-purple-500/30">
                      {currentSelectedConsultant.swot.threats.length}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {currentSelectedConsultant.swot.threats.map((item, index) => (
                      <li key={index} className="flex items-start justify-between bg-slate-900/60 border border-purple-500/20 rounded-xl p-3 text-xs text-slate-200 group hover:border-purple-500/40 transition">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></span>
                          {item}
                        </span>
                        {userRole === 'dho' && (
                          <button
                            onClick={() => handleRemoveSwotItem('threats', index)}
                            className="text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition p-1"
                            title="Remover Item"
                          >
                            <IconTrash />
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {userRole === 'dho' && (
                  <div className="mt-4 pt-3 border-t border-slate-700/50 flex gap-2">
                    <input
                      type="text"
                      placeholder="Adicionar nova ameaça..."
                      value={newSwotInput.category === 'threats' ? newSwotInput.text : ''}
                      onChange={(e) => setNewSwotInput({ category: 'threats', text: e.target.value })}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddSwotItem('threats')}
                      className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 flex-1 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                    <button
                      onClick={() => handleAddSwotItem('threats')}
                      className="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-2 rounded-xl flex items-center gap-1 font-semibold transition"
                    >
                      <IconPlus /> Add
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* DHO PDI RECOMMENDATIONS BOX */}
            {}
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-400">
                    <IconShield />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Plano de Desenvolvimento Individual (PDI Recomendado)</h3>
                    <p className="text-xs text-slate-400">Diretrizes automáticas de DHO derivadas do mapeamento SWOT</p>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveTab('onboarding')}
                  className="bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 text-xs px-3.5 py-2 rounded-xl font-medium transition"
                >
                  Atribuir Trilha de Capacitação →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentSelectedConsultant.pdiRecommendations.map((pdi, idx) => (
                  <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">{pdi}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: BANCO DE TALENTOS & PERFIL DOS MEMBROS */}
        {/* ========================================================================= */}
        {}
        {activeTab === 'talents' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Search and Filters Bar */}
            <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search Box */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IconSearch />
                </div>
                <input
                  type="text"
                  placeholder="Buscar consultor por nome, skill ou projeto..."
                  value={talentSearch}
                  onChange={(e) => setTalentSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 text-white text-xs rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {/* Department Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 whitespace-nowrap">Departamento:</span>
                <select
                  value={selectedDeptFilter}
                  onChange={(e) => setSelectedDeptFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option value="Todos">Todos os Deptos</option>
                  <option value="Projetos">Projetos</option>
                  <option value="Comercial">Comercial</option>
                  <option value="DHO">DHO</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>

              {/* Seniority Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 whitespace-nowrap">Senioridade:</span>
                <select
                  value={selectedSeniorityFilter}
                  onChange={(e) => setSelectedSeniorityFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option value="Todos">Todas Senioridades</option>
                  <option value="Trainee">Trainee</option>
                  <option value="Júnior">Júnior</option>
                  <option value="Pleno">Pleno</option>
                  <option value="Sênior">Sênior</option>
                </select>
              </div>

            </div>

            {/* Talent Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {consultants
                .filter(c => {
                  const matchesSearch = c.name.toLowerCase().includes(talentSearch.toLowerCase()) ||
                    c.role.toLowerCase().includes(talentSearch.toLowerCase()) ||
                    c.skills.some(s => s.toLowerCase().includes(talentSearch.toLowerCase()));
                  const matchesDept = selectedDeptFilter === 'Todos' || c.department === selectedDeptFilter;
                  const matchesSeniority = selectedSeniorityFilter === 'Todos' || c.seniority === selectedSeniorityFilter;
                  return matchesSearch && matchesDept && matchesSeniority;
                })
                .map((member) => (
                  <div key={member.id} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition shadow-lg">
                    <div>
                      {/* Top Info */}
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500/50 shadow"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-white text-base">{member.name}</h3>
                            <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-indigo-500/30">
                              {member.seniority}
                            </span>
                          </div>
                          <p className="text-xs text-indigo-400 font-medium">{member.role}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">Departamento de {member.department}</p>
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="mb-4">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">Competências Chave:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {member.skills.map((skill, idx) => (
                            <span key={idx} className="bg-slate-900 border border-slate-700 text-slate-300 text-[11px] px-2.5 py-1 rounded-lg">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Active Projects */}
                      <div className="mb-5 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Alocação Atual:</span>
                        <div className="space-y-1">
                          {member.activeProjects.map((proj, pIdx) => (
                            <div key={pIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                              {proj}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        SWOT Mapeada: <strong className="text-emerald-400">{member.swot.strengths.length} forças</strong>
                      </span>
                      <button
                        onClick={() => {
                          setSelectedConsultantId(member.id);
                          setActiveTab('swot');
                        }}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3.5 py-1.5 rounded-xl font-semibold transition flex items-center gap-1.5 shadow"
                      >
                        <IconSWOT /> Ver Diagnóstico SWOT
                      </button>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: MEU PERFIL & MEU DESENVOLVIMENTO */}
        {/* ========================================================================= */}
        {}
        {activeTab === 'myprofile' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Personal Hero Profile Card */}
            <div className="bg-gradient-to-r from-slate-800 via-indigo-950/60 to-slate-800 border border-indigo-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-24 h-24 rounded-3xl object-cover border-4 border-indigo-500/60 shadow-xl"
                  />
                  <span className="absolute bottom-0 right-0 bg-emerald-500 border-2 border-slate-900 w-5 h-5 rounded-full"></span>
                </div>

                <div className="flex-1 text-center md:text-left space-y-2">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                    <div>
                      <h2 className="text-2xl font-black text-white">{currentUser.name}</h2>
                      <p className="text-sm text-indigo-400 font-medium">{currentUser.role} • {currentUser.department}</p>
                    </div>
                    <span className="bg-gradient-to-r from-amber-500 to-indigo-600 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      Nível 2 • {currentUser.seniority}
                    </span>
                  </div>

                  {/* Level Progress */}
                  <div className="pt-2 max-w-xl">
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Evolução do Ciclo 2026.1</span>
                      <span className="font-bold text-indigo-300">650 / 1000 XP</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-700">
                      <div className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-2.5 rounded-full w-[65%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid: Achievements Badges & Personal SWOT Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Conquistas & Badges */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <IconAward /> Minhas Conquistas & Emblemas
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-center space-y-1">
                    <span className="text-3xl block">🌟</span>
                    <div className="text-xs font-bold text-white">Onboarding Trainee</div>
                    <div className="text-[10px] text-slate-400">100% Concluído</div>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-center space-y-1">
                    <span className="text-3xl block">🎯</span>
                    <div className="text-xs font-bold text-white">Mestre da WBS</div>
                    <div className="text-[10px] text-slate-400">Escopo Perfeito</div>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-center space-y-1 opacity-50 grayscale hover:grayscale-0 transition">
                    <span className="text-3xl block">🔥</span>
                    <div className="text-xs font-bold text-white">Gestor de Riscos</div>
                    <div className="text-[10px] text-slate-400">Bloqueado (Trilha T1)</div>
                  </div>
                </div>
              </div>

              {/* Personal SWOT Summary */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <IconSWOT /> Resumo da Minha SWOT
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedConsultantId(currentUser.id);
                      setActiveTab('swot');
                    }}
                    className="text-xs text-indigo-400 hover:underline font-semibold"
                  >
                    Ver Matriz Completa →
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-emerald-950/20 border border-emerald-500/30 p-2.5 rounded-xl">
                    <strong className="text-emerald-400 block mb-1">Ponto Forte Principal:</strong>
                    <p className="text-slate-300">{currentUser.swot.strengths[0]}</p>
                  </div>

                  <div className="bg-amber-950/20 border border-amber-500/30 p-2.5 rounded-xl">
                    <strong className="text-amber-400 block mb-1">Ponto de Atenção Atual:</strong>
                    <p className="text-slate-300">{currentUser.swot.weaknesses[0]}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Personal Goals Checklist */}
            {}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-lg">
              <h3 className="text-base font-bold text-white mb-1">Minhas Metas de Desenvolvimento (OKRs Pessoais)</h3>
              <p className="text-xs text-slate-400 mb-4">Acompanhe e marque suas conquistas do ciclo</p>

              {/* Add Goal Form */}
              <form onSubmit={handleAddGoal} className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Nova meta de desenvolvimento..."
                  value={newGoalText}
                  onChange={(e) => setNewGoalText(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-xs text-white rounded-xl px-4 py-2.5 flex-1 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition flex items-center gap-1 shadow"
                >
                  <IconPlus /> Criar Meta
                </button>
              </form>

              {/* Goals List */}
              <div className="space-y-2">
                {personalGoals.map((goal) => (
                  <div
                    key={goal.id}
                    onClick={() => handleToggleGoal(goal.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition ${
                      goal.done
                        ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-400 line-through'
                        : 'bg-slate-900/60 border-slate-800 text-slate-100 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                        goal.done ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600'
                      }`}>
                        {goal.done && <IconCheck />}
                      </div>
                      <span className="text-xs font-medium">{goal.title}</span>
                    </div>

                    <span className={`text-[10px] px-2 py-0.5 rounded ${goal.done ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'}`}>
                      {goal.done ? 'Concluída' : 'Em andamento'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-4 px-6 text-center text-xs text-slate-500 mt-auto">
        <p>EJHub Platform • Sistema Integrado de Gestão de Pessoas e Desenvolvimento de Empresas Juniores © 2026</p>
      </footer>

    </div>
  );
}