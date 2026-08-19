/* ============================================================
   TrackPath — main.js
   ============================================================ */

/* ============ I18N ============ */
const i18n = {
  en: {
    nav_features: "Features", nav_platform: "Platform", nav_pricing: "Pricing", nav_faq: "FAQ", nav_cta: "Get started",
    hero_badge: "🔗 Built for performance marketers",
    hero_headline_1: "Shorten. Track.", hero_headline_2: "Scale.",
    hero_sub: "TrackPath turns every link into a tracked conversion. Pixel, server-to-server postback, or Smart Tag — real-time analytics and affiliate tracking, all in one platform.",
    hero_cta_primary: "Start free trial", hero_cta_secondary: "See plans →",
    hero_trust: "Trusted by marketers and affiliates",
    trust_secure: "🔒 Secure", trust_speed: "⚡ <50ms", trust_realtime: "📊 Real-time", trust_postback: "📡 S2S Postback",
    stat_links: "Links shortened", stat_uptime: "Uptime SLA", stat_speed: "Redirect speed", stat_plans: "For every team size",
    section_delivery_label: "// TRACKING FORMATS",
    section_delivery_title: "Track conversions the way your operation needs",
    section_delivery_sub: "Every conversion event can be delivered in three different formats — same URL, same tracking, adapted to however your advertiser can integrate.",
    delivery_pixel_title: "Image Pixel",
    delivery_pixel_desc: "The classic. One <img> tag on the thank-you page and you're set. Installs in seconds, no developer required.",
    delivery_s2s_title: "S2S Postback (server-to-server)",
    delivery_s2s_desc: "Direct server-to-server tracking, no browser involved. Immune to ad blockers, third-party cookies, and closed tabs. The most reliable method for high-value conversions.",
    delivery_smarttag_title: "Smart Tag",
    delivery_smarttag_desc: "One tag on the advertiser's site delivers every partner script. Manage it all from the dashboard — the site never needs to change again.",
    section_features_label: "// PLATFORM FEATURES",
    section_features_title: "Everything you need to track smarter",
    feat_1_title: "Secure by default",
    feat_1_desc: "Every link served over HTTPS with end-to-end encryption. Your data and your audience's are always protected.",
    feat_2_title: "7-day free trial",
    feat_2_desc: "Try the full platform free for 7 days. No credit card required. Cancel anytime.",
    feat_3_title: "Real-time analytics",
    feat_3_desc: "Clicks, countries, cities, and devices — live. Turn data into campaign decisions instantly.",
    feat_4_title: "Millisecond redirects",
    feat_4_desc: "Redirects happen in under 5ms. Zero latency means zero lost conversions.",
    feat_5_title: "Works everywhere",
    feat_5_desc: "Fully responsive. Manage all your links from mobile, tablet, or desktop.",
    feat_6_title: "Full link control",
    feat_6_desc: "Set passwords, expiration dates, and monitor every access. You decide who gets in and when.",
    feat_mascot_tooltip: "We track so you don't have to.",
    section_platform_label: "// BUILT FOR AFFILIATES & MARKETERS",
    section_platform_title: "More than a shortener. A full affiliate platform.",
    section_platform_sub: "TrackPath Premium gives performance marketers campaigns, channels, deeplinks, and conversion tracking — all connected.",
    pc_campaigns_title: "Campaigns", pc_campaigns_desc: "Create, manage, and track affiliate marketing campaigns with real-time click data.",
    pc_channels_title: "Channels", pc_channels_desc: "Organize your traffic sources and know exactly where your affiliate link clicks come from.",
    pc_deeplinks_title: "Deeplinks", pc_deeplinks_desc: "Send users to the right destination with trackable deeplinks for every campaign.",
    pc_conversions_title: "Conversions", pc_conversions_desc: "Track revenue, ROI, and payout per affiliate campaign. Know your real numbers.",
    pc_multiuser_title: "Multi-user", pc_multiuser_desc: "Invite your team and manage all tracked links from one place.",
    pc_whitelabel_title: "White-label", pc_whitelabel_desc: "Your brand, your custom domain. Full white-label link shortener.",
    pc_ga_title: "Google Analytics", pc_ga_desc: "Full GA4 integration. Connect your affiliate tracking to your analytics stack.",
    pc_qr_title: "Custom QR Codes", pc_qr_desc: "Generate branded, trackable QR codes for any shortened link, instantly.",
    section_niches_label: "// NICHES WE SERVE",
    section_niches_title: "Built for performance — even the most demanding niches",
    niche_bets_title: "Bets & iGaming",
    niche_bets_desc: "Brazil's fastest-growing affiliate niche is also the one that demands the most tracking precision. TrackPath delivers FTD and deposit tracking via server-to-server postback, fixed or percentage-based CPA commissioning, an approval flow with status (pending → approved → paid), and automatic postback on every status change. Multi-currency per campaign to operate in more than one market.",
    niche_also_label: "Also used in:",
    niche_chip_ecommerce: "🛒 E-commerce & marketplaces",
    niche_chip_infoproducts: "📚 Infoproducts",
    niche_chip_finance: "💳 Finance & credit",
    niche_chip_apps: "📱 Apps & subscriptions",
    niche_chip_leadgen: "🎯 Lead generation",
    niche_note: "CPA, CPL, CPC, or CPM campaigns, with a configurable cookie window per campaign.",
    section_pricing_label: "// PRICING",
    section_pricing_title: "Choose the plan that fits your growth",
    section_pricing_sub: "Every plan includes a 7-day free trial, no credit card required. No hidden fees, cancel anytime.",
    plan_basic: "Basic", plan_advanced: "Advanced", plan_custom: "Custom",
    pf_users_5: "5 users", pf_campaigns_10: "10 campaigns", pf_channels_20: "20 channels",
    pf_users_10: "10 users", pf_campaigns_30: "30 campaigns", pf_channels_50: "50 channels",
    pf_users_unlimited: "Unlimited users", pf_campaigns_unlimited: "Unlimited campaigns", pf_channels_unlimited: "Unlimited channels",
    pf_reports_export: "Report export",
    pf_support_priority: "Priority support", pf_support_247: "24/7 support",
    pf_pixels_unlimited: "Unlimited pixels per campaign",
    pf_link_automation: "Link automation",
    pf_custom_subdomain: "Custom subdomain",
    pf_utm_dynamic: "Dynamic UTMs",
    pf_gtm_support: "GTM implementation support",
    pf_whatsapp_group: "Exclusive WhatsApp group",
    pf_dedicated_manager: "Dedicated account manager",
    pf_auto_backup: "Automatic backup",
    pricing_popular: "Most Popular",
    pricing_cta: "Get started →", pricing_cta_custom: "Talk to us →",
    section_faq_label: "// FAQ",
    section_faq_title: "Frequently Asked Questions",
    faq_5_q: "How does the free trial work?",
    faq_5_a: "You get 7 days of full platform access, no credit card required. At the end of the period, you choose the plan that fits your volume.",
    faq_1_q: "Can I switch plans later?",
    faq_1_a: "Yes. Upgrade or downgrade at any time. Changes take effect immediately and billing is calculated proportionally.",
    faq_2_q: "Is there a click limit?",
    faq_2_a: "It depends on the plan. Basic: 5,000/mo, Advanced: 20,000/mo, Custom: unlimited. When the limit is reached, links keep working but metrics pause until the next billing cycle.",
    faq_3_q: "How does support work?",
    faq_3_a: "Basic: email within 48h. Advanced: priority within 12h. Custom: 24/7 chat and email.",
    faq_4_q: "Can I cancel at any time?",
    faq_4_a: "Yes. No lock-in, no cancellation fee. You retain access until the end of the paid period.",
    cta_title: "Ready to track smarter?",
    cta_sub: "Join the platform built for performance marketers. 7 days free, no credit card required.",
    cta_btn: "Start free trial →",
    footer_tagline: "The link tracking platform for performance marketers.",
    footer_product: "Product", footer_legal: "Legal",
    footer_features: "Features", footer_platform: "Platform", footer_pricing: "Pricing", footer_faq: "FAQ",
    footer_terms: "Terms of Service", footer_about: "About us",
    footer_copy: "© 2025 TrackPath. All rights reserved.",
    footer_made: "Tracked by TrackPath",
    modal_title: "Let's get you started",
    modal_sub: "Tell us about yourself and we'll reach out with the right plan.",
    modal_name: "Name", modal_email: "Email", modal_phone: "Phone",
    modal_company_size: "Company size", modal_company_placeholder: "Select...",
    modal_size_solo: "Just me", modal_size_2_10: "2–10 employees", modal_size_11_30: "11–30 employees",
    modal_size_31_100: "31–100 employees", modal_size_100plus: "100+ employees",
    modal_role_label: "I am a...",
    modal_role_advertiser: "Advertiser", modal_role_affiliate: "Affiliate",
    modal_role_influencer: "Influencer", modal_role_agency: "Agency", modal_role_other: "Other",
    modal_message: "What do you need?",
    modal_message_placeholder: "Tell us about your use case, goals, or any questions...",
    modal_submit: "Send my request →",
    modal_privacy: "🔒 Your information is secure and will never be shared.",
    modal_success_title: "Thanks! We'll reach out soon.",
    modal_close: "Close",
  },
  pt: {
    nav_features: "Funcionalidades", nav_platform: "Plataforma", nav_pricing: "Preços", nav_faq: "FAQ", nav_cta: "Começar",
    hero_badge: "🔗 Feito para performance marketers",
    hero_headline_1: "Encurte. Rastreie.", hero_headline_2: "Escale.",
    hero_sub: "O TrackPath transforma cada link em uma conversão rastreada. Pixel, postback server-to-server ou Smart Tag — analytics em tempo real e rastreamento de afiliados, tudo em uma plataforma.",
    hero_cta_primary: "Começar teste grátis", hero_cta_secondary: "Ver planos →",
    hero_trust: "Confiado por marketers e afiliados",
    trust_secure: "🔒 Seguro", trust_speed: "⚡ <50ms", trust_realtime: "📊 Tempo real", trust_postback: "📡 Postback S2S",
    stat_links: "Links encurtados", stat_uptime: "SLA de Uptime", stat_speed: "Velocidade de redirecionamento", stat_plans: "Para todo tamanho de equipe",
    section_delivery_label: "// FORMATOS DE RASTREAMENTO",
    section_delivery_title: "Rastreie conversões do jeito que sua operação exige",
    section_delivery_sub: "Cada evento de conversão pode ser entregue em três formatos diferentes — a mesma URL, o mesmo rastreamento, adaptado a como o seu anunciante consegue integrar.",
    delivery_pixel_title: "Pixel de Imagem",
    delivery_pixel_desc: "O clássico. Uma tag <img> na página de obrigado e pronto. Instalação em segundos, sem depender de desenvolvedor.",
    delivery_s2s_title: "Postback S2S (server-to-server)",
    delivery_s2s_desc: "Rastreamento direto entre servidores, sem depender do navegador. Imune a bloqueador de anúncios, cookies de terceiros e fechamento de aba. O método mais confiável para conversões de alto valor.",
    delivery_smarttag_title: "Smart Tag",
    delivery_smarttag_desc: "Uma única tag no site do anunciante entrega todos os scripts dos seus parceiros. Você gerencia tudo pelo painel — o site nunca precisa ser alterado de novo.",
    section_features_label: "// FUNCIONALIDADES DA PLATAFORMA",
    section_features_title: "Tudo que você precisa para rastrear de forma inteligente",
    feat_1_title: "Seguro por padrão",
    feat_1_desc: "Todos os links servidos via HTTPS com criptografia de ponta a ponta. Seus dados e os do seu público sempre protegidos.",
    feat_2_title: "7 dias grátis",
    feat_2_desc: "Teste a plataforma completa por 7 dias, sem cartão de crédito. Sem compromisso, cancele quando quiser.",
    feat_3_title: "Analytics em tempo real",
    feat_3_desc: "Cliques, países, cidades e dispositivos — ao vivo. Transforme dados em decisões de campanha na hora.",
    feat_4_title: "Redirecionamentos em milissegundos",
    feat_4_desc: "Redirecionamentos em menos de 5ms. Zero latência significa zero conversões perdidas.",
    feat_5_title: "Funciona em todo lugar",
    feat_5_desc: "Totalmente responsivo. Gerencie todos os seus links pelo celular, tablet ou computador.",
    feat_6_title: "Controle total do link",
    feat_6_desc: "Defina senhas, datas de expiração e monitore cada acesso. Você decide quem entra e quando.",
    feat_mascot_tooltip: "A gente rastreia pra você não precisar.",
    section_platform_label: "// FEITO PARA AFILIADOS & MARKETERS",
    section_platform_title: "Mais do que um encurtador. Uma plataforma completa de afiliados.",
    section_platform_sub: "O TrackPath Premium oferece campanhas, canais, deeplinks e rastreamento de conversões — tudo conectado.",
    pc_campaigns_title: "Campanhas", pc_campaigns_desc: "Crie, gerencie e rastreie campanhas de marketing de afiliados com dados de cliques em tempo real.",
    pc_channels_title: "Canais", pc_channels_desc: "Organize suas fontes de tráfego e saiba exatamente de onde vêm os cliques nos seus links de afiliado.",
    pc_deeplinks_title: "Deeplinks", pc_deeplinks_desc: "Direcione usuários ao destino certo com deeplinks rastreáveis para cada campanha.",
    pc_conversions_title: "Conversões", pc_conversions_desc: "Rastreie receita, ROI e comissões por campanha de afiliados. Conheça seus números reais.",
    pc_multiuser_title: "Multi-usuário", pc_multiuser_desc: "Convide sua equipe e gerencie todos os links rastreáveis em um só lugar.",
    pc_whitelabel_title: "White-label", pc_whitelabel_desc: "Sua marca, seu domínio personalizado. Encurtador de links 100% white-label.",
    pc_ga_title: "Google Analytics", pc_ga_desc: "Integração completa com GA4. Conecte seu rastreamento de afiliados ao seu stack de analytics.",
    pc_qr_title: "QR Codes", pc_qr_desc: "Gere QR Codes personalizados e rastreáveis para qualquer link encurtado, na hora.",
    section_niches_label: "// NICHOS ATENDIDOS",
    section_niches_title: "Feito para performance — inclusive para os nichos mais exigentes",
    niche_bets_title: "Bets & iGaming",
    niche_bets_desc: "O nicho que mais cresce no Brasil também é o que mais exige precisão de rastreamento. O TrackPath entrega rastreamento de FTD e depósitos via postback server-to-server, comissionamento por CPA fixo ou percentual, fluxo de aprovação com status (pendente → aprovada → paga) e postback automático para o afiliado a cada mudança. Multi-moeda por campanha para operar em mais de um mercado.",
    niche_also_label: "Também usado em:",
    niche_chip_ecommerce: "🛒 E-commerce & marketplaces",
    niche_chip_infoproducts: "📚 Infoprodutos",
    niche_chip_finance: "💳 Finanças & crédito",
    niche_chip_apps: "📱 Apps & assinaturas",
    niche_chip_leadgen: "🎯 Geração de leads",
    niche_note: "Campanhas em CPA, CPL, CPC ou CPM, com janela de cookie configurável por campanha.",
    section_pricing_label: "// PREÇOS",
    section_pricing_title: "Escolha o plano que combina com seu crescimento",
    section_pricing_sub: "Todos os planos incluem 7 dias de teste grátis, sem cartão de crédito. Sem taxas escondidas, cancele quando quiser.",
    plan_basic: "Básico", plan_advanced: "Avançado", plan_custom: "Personalizado",
    pf_users_5: "5 usuários", pf_campaigns_10: "10 campanhas", pf_channels_20: "20 canais",
    pf_users_10: "10 usuários", pf_campaigns_30: "30 campanhas", pf_channels_50: "50 canais",
    pf_users_unlimited: "Usuários ilimitados", pf_campaigns_unlimited: "Campanhas ilimitadas", pf_channels_unlimited: "Canais ilimitados",
    pf_reports_export: "Extração de relatórios",
    pf_support_priority: "Suporte prioritário", pf_support_247: "Suporte 24h/7",
    pf_pixels_unlimited: "Pixels ilimitados por campanha",
    pf_link_automation: "Automatização de links",
    pf_custom_subdomain: "Subdomínio personalizado",
    pf_utm_dynamic: "UTM dinâmicas",
    pf_gtm_support: "Suporte à implementação GTM",
    pf_whatsapp_group: "Grupo exclusivo no WhatsApp",
    pf_dedicated_manager: "Gerente de conta dedicado",
    pf_auto_backup: "Backup automático",
    pricing_popular: "Mais Popular",
    pricing_cta: "Começar →", pricing_cta_custom: "Fale conosco →",
    section_faq_label: "// FAQ",
    section_faq_title: "Perguntas Frequentes",
    faq_5_q: "Como funciona o teste grátis?",
    faq_5_a: "São 7 dias com acesso completo à plataforma, sem precisar cadastrar cartão de crédito. Ao fim do período você escolhe o plano que faz sentido para o seu volume.",
    faq_1_q: "Posso trocar de plano depois?",
    faq_1_a: "Sim. Faça upgrade ou downgrade a qualquer momento. As mudanças entram em vigor imediatamente e a cobrança é calculada proporcionalmente.",
    faq_2_q: "Existe limite de cliques?",
    faq_2_a: "Depende do plano. Básico: 5.000/mês, Avançado: 20.000/mês, Personalizado: ilimitado. Quando o limite é atingido, os links continuam funcionando mas as métricas pausam até o próximo ciclo.",
    faq_3_q: "Como funciona o suporte?",
    faq_3_a: "Básico: e-mail em 48h. Avançado: prioritário em 12h. Personalizado: chat e e-mail 24/7.",
    faq_4_q: "Posso cancelar a qualquer momento?",
    faq_4_a: "Sim. Sem fidelidade, sem taxa de cancelamento. Você mantém o acesso até o fim do período pago.",
    cta_title: "Pronto para rastrear de forma inteligente?",
    cta_sub: "Entre na plataforma feita para performance marketers. 7 dias grátis, sem cartão de crédito.",
    cta_btn: "Começar teste grátis →",
    footer_tagline: "A plataforma de rastreamento de links para performance marketers.",
    footer_product: "Produto", footer_legal: "Legal",
    footer_features: "Funcionalidades", footer_platform: "Plataforma", footer_pricing: "Preços", footer_faq: "FAQ",
    footer_terms: "Termos de Serviço", footer_about: "Sobre nós",
    footer_copy: "© 2025 TrackPath. Todos os direitos reservados.",
    footer_made: "Rastreado pelo TrackPath",
    modal_title: "Vamos começar",
    modal_sub: "Conte-nos sobre você e entraremos em contato com o plano certo.",
    modal_name: "Nome", modal_email: "E-mail", modal_phone: "Telefone",
    modal_company_size: "Tamanho da empresa", modal_company_placeholder: "Selecionar...",
    modal_size_solo: "Só eu", modal_size_2_10: "2–10 funcionários", modal_size_11_30: "11–30 funcionários",
    modal_size_31_100: "31–100 funcionários", modal_size_100plus: "100+ funcionários",
    modal_role_label: "Eu sou...",
    modal_role_advertiser: "Anunciante", modal_role_affiliate: "Afiliado",
    modal_role_influencer: "Influenciador", modal_role_agency: "Agência", modal_role_other: "Outro",
    modal_message: "O que você precisa?",
    modal_message_placeholder: "Conte sobre seu caso de uso, objetivos ou qualquer dúvida...",
    modal_submit: "Enviar minha solicitação →",
    modal_privacy: "🔒 Suas informações são seguras e nunca serão compartilhadas.",
    modal_success_title: "Obrigado! Entraremos em contato em breve.",
    modal_close: "Fechar",
  }
};

/* ============ GTM / DATALAYER ============ */
window.dataLayer = window.dataLayer || [];
function pushEvent(event, params) {
  window.dataLayer.push(Object.assign({ event }, params || {}));
}

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (dict[k] != null) el.textContent = dict[k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (dict[k] != null) el.placeholder = dict[k];
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.documentElement.setAttribute('data-lang', lang);
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = lang === 'pt' ? 'PT' : 'EN';
  try { localStorage.setItem('tp-lang', lang); } catch(e){}
}

/* ============ THEME ============ */
function applyTheme(theme) {
  if (theme === 'light') document.documentElement.classList.remove('dark');
  else document.documentElement.classList.add('dark');
  try { localStorage.setItem('tp-theme', theme); } catch(e){}
}

document.getElementById('themeBtn').addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
});

document.getElementById('langBtn').addEventListener('click', () => {
  const curr = document.documentElement.getAttribute('data-lang') || 'en';
  applyLang(curr === 'pt' ? 'en' : 'pt');
});

/* initial lang */
(function(){
  let l = null;
  try { l = localStorage.getItem('tp-lang'); } catch(e){}
  if (!l) l = (navigator.language || 'en').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  applyLang(l);
})();

/* ============ NAV SCROLL ============ */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) navEl.classList.add('scrolled');
  else navEl.classList.remove('scrolled');
}, { passive: true });

/* ============ REVEAL ============ */
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

/* ============ COUNTERS ============ */
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const dur = 1500;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = target * eased;
      el.textContent = prefix + v.toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.4 });
document.querySelectorAll('[data-counter]').forEach(el => countIO.observe(el));

/* ============ FAQ ============ */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      pushEvent('faq_open', { question: btn.querySelector('[data-i18n]')?.textContent?.trim() || '' });
    }
  });
});

/* ============ MODAL ============ */
const modal = document.getElementById('modal');
const modalCard = modal.querySelector('.modal-card');
let lastFocused = null;

function openModal(trigger) {
  lastFocused = trigger || document.activeElement;
  modalCard.classList.remove('success-state');
  document.getElementById('leadForm').reset();
  document.querySelectorAll('#leadForm .error').forEach(e => e.classList.remove('error'));
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => { modal.querySelector('input, select, textarea, button')?.focus(); }, 100);

  const params = { cta_location: trigger?.dataset.ctaLocation || 'unknown' };
  if (trigger?.dataset.plan) params.plan = trigger.dataset.plan;
  pushEvent('modal_open', params);
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}
document.querySelectorAll('[data-open-modal]').forEach(b => b.addEventListener('click', (e) => openModal(e.currentTarget)));
document.querySelectorAll('[data-close-modal]').forEach(b => b.addEventListener('click', closeModal));
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

/* ============ NAV LINK CLICKS ============ */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    pushEvent('nav_click', { section: (link.getAttribute('href') || '').replace('#', '') });
  });
});

/* ============ SECTION VISIBILITY ============ */
const sectionIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    pushEvent('section_view', { section_id: e.target.id });
    sectionIO.unobserve(e.target);
  });
}, { threshold: 0.3 });
['delivery', 'features', 'platform', 'niches', 'pricing', 'faq'].forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionIO.observe(el);
});

/* ============ LEAD FORM ============ */
const LEADS_ENDPOINT = 'https://api.tkph.com.br/leads';

document.getElementById('leadForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const submitBtn = form.querySelector('button[type="submit"]');
  const fields = ['f-name', 'f-email', 'f-phone'];
  let ok = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove('error');
    if (!el.value.trim() || !el.checkValidity()) {
      el.classList.add('error');
      ok = false;
    }
  });
  if (!ok) return;

  const sizeRaw = document.getElementById('f-size').value;
  const sizeMap = { 'solo': '1', '2-10': '2-10', '11-30': '11-30', '31-100': '31-100', '100+': '100+' };
  const company_size = sizeMap[sizeRaw] || sizeRaw || undefined;

  const roleEl = form.querySelector('input[name="role"]:checked');
  const role = roleEl ? roleEl.value : undefined;

  const payload = {
    name: document.getElementById('f-name').value.trim(),
    email: document.getElementById('f-email').value.trim(),
    phone: document.getElementById('f-phone').value.trim() || undefined,
    company_size,
    role,
    message: document.getElementById('f-msg').value.trim() || undefined,
  };
  Object.keys(payload).forEach(k => payload[k] === undefined && delete payload[k]);

  pushEvent('form_lead_submit', { role, company_size });

  const originalLabel = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.75';
  submitBtn.style.cursor = 'wait';
  submitBtn.textContent = (document.documentElement.getAttribute('data-lang') === 'pt')
    ? 'Enviando...'
    : 'Sending...';

  const prevErr = form.querySelector('.form-error');
  if (prevErr) prevErr.remove();

  try {
    const res = await fetch(LEADS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      let detail = '';
      try { detail = (await res.json()).detail || ''; } catch(_) {}
      throw new Error(detail || ('HTTP ' + res.status));
    }
    modalCard.classList.add('success-state');
    pushEvent('form_lead_success', { role, company_size });
  } catch (err) {
    pushEvent('form_lead_error', { error: err.message });
    const isPt = document.documentElement.getAttribute('data-lang') === 'pt';
    const msg = document.createElement('p');
    msg.className = 'form-error';
    msg.style.cssText = 'margin:8px 0 0;color:var(--error);font-size:13px;text-align:center;';
    msg.textContent = isPt
      ? 'Não foi possível enviar agora. Tente novamente em instantes.'
      : 'We couldn\'t send your request. Please try again in a moment.';
    submitBtn.insertAdjacentElement('afterend', msg);
  } finally {
    submitBtn.disabled = false;
    submitBtn.style.opacity = '';
    submitBtn.style.cursor = '';
    submitBtn.textContent = originalLabel;
  }
});
