/* ============================================================
   TrackPath — main.js
   ============================================================ */

let cachedPlans = null;

/* ============ I18N ============ */
const i18n = {
  en: {
    nav_features: "Features", nav_platform: "Platform", nav_pricing: "Pricing", nav_faq: "FAQ", nav_cta: "Get started",
    hero_badge: "🔗 For affiliates, advertisers and agencies",
    hero_headline_1: "Shorten. Track.", hero_headline_2: "Scale.",
    hero_sub: "TrackPath turns every link into a tracked sale. Links per channel, conversions via pixel, S2S postback or Smart Tag, and a dashboard for each affiliate. All in one platform, from R$ 99/month.",
    hero_cta_primary: "Start free trial", hero_cta_secondary: "See plans →",
    hero_trust: "Trusted by marketers and affiliates",
    trust_secure: "🔒 Secure", trust_speed: "⚡ 13 ms", trust_realtime: "📊 Real-time", trust_postback: "📡 S2S Postback",
    stat_links: "Requests in the last 30 days", stat_uptime: "Requests on the peak day", stat_speed: "Median response", stat_plans: "Plans for every size",
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
    feat_1_desc: "Every link and the dashboard served over HTTPS. Your data and your audience's, protected.",
    feat_2_title: "7-day free trial",
    feat_2_desc: "Try the full platform free for 7 days. No credit card required. Cancel anytime.",
    feat_3_title: "Real-time analytics",
    feat_3_desc: "Clicks, countries, cities, and devices — live. Turn data into campaign decisions instantly.",
    feat_4_title: "Millisecond redirects",
    feat_4_desc: "13 ms median response, with 95% under 24 ms. People who click don't even notice the tracking.",
    feat_5_title: "Works everywhere",
    feat_5_desc: "Fully responsive. Manage all your links from mobile, tablet, or desktop.",
    feat_6_title: "Full link control",
    feat_6_desc: "Set passwords, expiration dates, and monitor every access. You decide who gets in and when.",
    feat_mascot_tooltip: "We track so you don't have to.",
    section_platform_label: "// MORE THAN A SHORTENER",
    section_platform_title: "A complete tracking and affiliate platform.",
    section_platform_sub: "Campaigns, channels, trackable links, conversions and affiliates, all connected in one dashboard.",
    pc_campaigns_title: "Campaigns", pc_campaigns_desc: "Create, manage, and track affiliate marketing campaigns with real-time click data.",
    pc_channels_title: "Channels", pc_channels_desc: "Organize your traffic sources and know exactly where your affiliate link clicks come from.",
    pc_deeplinks_title: "Trackable links", pc_deeplinks_desc: "One link per post, creative and channel, with UTMs and up to 5 custom parameters (sub1 to sub5).",
    pc_conversions_title: "Conversions", pc_conversions_desc: "Revenue, commission and margin per campaign and channel. Pending, approved, paid, with automatic postback to the affiliate.",
    pc_multiuser_title: "Multi-user", pc_multiuser_desc: "Invite your team and manage all tracked links from one place.",
    pc_whitelabel_title: "Custom subdomain", pc_whitelabel_desc: "Links on your brand's subdomain, from the Advanced plan.",
    pc_ga_title: "Affiliate logins", pc_ga_desc: "Each affiliate logs in and sees only their own channel: links, clicks and conversions. From the Advanced plan.",
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
    niche_note: "CPA, CPL, CPC or CPM campaigns, with a currency set per campaign.",
    section_pricing_label: "// PRICING",
    section_pricing_title: "Choose the plan that fits your growth",
    section_pricing_sub: "Every plan includes a 7-day free trial, no credit card required. No hidden fees, cancel anytime.",
    plan_basic: "Basic", plan_advanced: "Advanced", plan_scale: "Scale", plan_custom: "Custom",
    pf_users_1: "1 user", pf_campaigns_10: "10 campaigns", pf_channels_10: "10 channels",
    pf_users_5: "5 users", pf_campaigns_50: "50 campaigns", pf_channels_50: "50 channels",
    pf_users_20: "20 users", pf_campaigns_500: "500 campaigns", pf_channels_100: "100 channels",
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
    pf_affiliates_unlimited: "Unlimited affiliates",
    pricing_popular: "Most Popular",
    pricing_cta: "Get started →", pricing_cta_custom: "Talk to us →",
    section_faq_label: "// FAQ",
    section_faq_title: "Frequently Asked Questions",
    faq_5_q: "How does the free trial work?",
    faq_5_a: "You get 7 days of full platform access, no credit card required. At the end of the period, you choose the plan that fits your volume.",
    faq_1_q: "Can I switch plans later?",
    faq_1_a: "Yes, at any time from the dashboard. The difference is adjusted on your next invoice.",
    faq_2_q: "Is there a click or sales limit?",
    faq_2_a: "No. Plans change by the number of users, campaigns, channels and affiliates. The price doesn't change with the number of clicks or conversions.",
    faq_3_q: "How does support work?",
    faq_3_a: "On every plan you talk directly to the team that builds the platform. In the demo, we set up your first pixel or postback with you.",
    faq_4_q: "Can I cancel at any time?",
    faq_4_a: "Yes. No lock-in, no cancellation fee. You retain access until the end of the paid period.",
    cta_title: "Ready to know where every sale comes from?",
    cta_sub: "7 days free on any plan, no credit card. Cancel anytime.",
    cta_btn: "Start free trial →",
    footer_tagline: "Link, conversion and affiliate tracking. Made in Brazil.",
    footer_product: "Product", footer_legal: "Legal",
    footer_features: "Features", footer_platform: "Platform", footer_pricing: "Pricing", footer_faq: "FAQ",
    footer_terms: "Terms of Service", footer_about: "About us",
    footer_copy: "© 2026 TrackPath. All rights reserved.",
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
    hero_ac_label: "Total clicks today",
    features_pill: "⚡ Performance, control, and scale — built for people who live off traffic.",
    copy_label: "Copy",
    copy_done: "✓ Copied",
    activity_header: "LIVE ACTIVITY",
    activity_now: "now",
    activity_1_text: "New link created",
    activity_2_text: "Click via Instagram",
    activity_3_text: "Conversion recorded",
    activity_4_text: "Click via email",
    activity_5_text: "New click",
    section_hiw_label: "// HOW IT WORKS",
    section_hiw_title: "From link to revenue, in four steps",
    section_hiw_sub: "One platform, one link, the entire journey — from the first click to the paid commission.",
    hiw_pill: "🚀 From link to payout, in one flow.",
    hiw_1_title: "Create the link",
    hiw_1_desc: "Paste any URL, pick the campaign and channel and get a trackable link, with a QR code, ready to share. No developer needed.",
    hiw_2_title: "Track",
    hiw_2_desc: "Every click, conversion, and postback lands in your dashboard in real time — pixel, S2S, or Smart Tag.",
    hiw_3_title: "Manage",
    hiw_3_desc: "Organize campaigns and channels, approve conversions, and set commissions — pending, approved, paid.",
    hiw_4_title: "Scale",
    hiw_4_desc: "Multi-user, custom subdomain and per-campaign currency. Grow from one campaign to hundreds without switching platforms.",
    hiw_status_pending: "Pending",
    hiw_status_approved: "Approved",
    hiw_status_paid: "Paid",
    hiw_scale_now: "Now",
    hiw_scale_label: "Active campaigns",
    nav_site: "TrackPath website ↗",
    nav_signin: "Sign in",
    section_who_label: "// WHO IT'S FOR",
    section_who_title: "One platform, three sides.",
    section_who_sub: "It works for those who promote, those who sell and those who connect the two.",
    who_aff_title: "Affiliates",
    who_aff_desc: "One link for every post, group and channel. See which channel brings sales, not just clicks, without paying for five tools. From R$ 99/month.",
    who_adv_title: "Advertisers",
    who_adv_desc: "Your own affiliate program: track sales on your site, set the commission for each event and give every affiliate their own dashboard.",
    who_age_title: "Agencies and networks",
    who_age_desc: "Connect advertisers to affiliates, receive conversions via postback and pass them on to each partner. Revenue, commission and margin per campaign.",
    who_link: "See how it works →",
    pricing_site_link: "See prices and compare plans on the website →",
    cta_site: "Visit the TrackPath website",
    footer_site: "TrackPath",
    footer_site_home: "Official website",
    footer_site_aff: "For affiliates",
    footer_site_adv: "For advertisers",
    footer_site_age: "For agencies",
    footer_site_pricing: "Pricing",
    footer_site_guides: "Guides",
    footer_site_tools: "Free link shortener",
    footer_site_signin: "Sign in to the dashboard",
  },
  pt: {
    nav_features: "Funcionalidades", nav_platform: "Plataforma", nav_pricing: "Preços", nav_faq: "FAQ", nav_cta: "Começar",
    hero_badge: "🔗 Para afiliados, anunciantes e agências",
    hero_headline_1: "Encurte. Rastreie.", hero_headline_2: "Escale.",
    hero_sub: "O TrackPath transforma cada link em uma venda rastreada. Links por canal, conversões por pixel, postback S2S ou Smart Tag, e um painel para cada afiliado. Tudo numa plataforma só, a partir de R$ 99/mês.",
    hero_cta_primary: "Começar teste grátis", hero_cta_secondary: "Ver planos →",
    hero_trust: "Confiado por marketers e afiliados",
    trust_secure: "🔒 Seguro", trust_speed: "⚡ 13 ms", trust_realtime: "📊 Tempo real", trust_postback: "📡 Postback S2S",
    stat_links: "Requisições nos últimos 30 dias", stat_uptime: "Requisições no dia de pico", stat_speed: "Resposta mediana", stat_plans: "Planos para todo tamanho de operação",
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
    feat_1_desc: "Todos os links e o painel servidos via HTTPS. Seus dados e os do seu público protegidos.",
    feat_2_title: "7 dias grátis",
    feat_2_desc: "Teste a plataforma completa por 7 dias, sem cartão de crédito. Sem compromisso, cancele quando quiser.",
    feat_3_title: "Analytics em tempo real",
    feat_3_desc: "Cliques, países, cidades e dispositivos — ao vivo. Transforme dados em decisões de campanha na hora.",
    feat_4_title: "Redirecionamentos em milissegundos",
    feat_4_desc: "Resposta mediana de 13 ms, com 95% abaixo de 24 ms. Quem clica nem percebe o rastreamento.",
    feat_5_title: "Funciona em todo lugar",
    feat_5_desc: "Totalmente responsivo. Gerencie todos os seus links pelo celular, tablet ou computador.",
    feat_6_title: "Controle total do link",
    feat_6_desc: "Defina senhas, datas de expiração e monitore cada acesso. Você decide quem entra e quando.",
    feat_mascot_tooltip: "A gente rastreia pra você não precisar.",
    section_platform_label: "// MAIS QUE UM ENCURTADOR",
    section_platform_title: "Uma plataforma completa de rastreamento e afiliados.",
    section_platform_sub: "Campanhas, canais, links rastreáveis, conversões e afiliados, tudo conectado no mesmo painel.",
    pc_campaigns_title: "Campanhas", pc_campaigns_desc: "Crie, gerencie e rastreie campanhas de marketing de afiliados com dados de cliques em tempo real.",
    pc_channels_title: "Canais", pc_channels_desc: "Organize suas fontes de tráfego e saiba exatamente de onde vêm os cliques nos seus links de afiliado.",
    pc_deeplinks_title: "Links rastreáveis", pc_deeplinks_desc: "Um link por post, criativo e canal, com UTMs e até 5 parâmetros próprios (sub1 a sub5).",
    pc_conversions_title: "Conversões", pc_conversions_desc: "Receita, comissão e margem por campanha e canal. Pendente, aprovada, paga, com postback automático para o afiliado.",
    pc_multiuser_title: "Multi-usuário", pc_multiuser_desc: "Convide sua equipe e gerencie todos os links rastreáveis em um só lugar.",
    pc_whitelabel_title: "Subdomínio próprio", pc_whitelabel_desc: "Links com o subdomínio da sua marca, a partir do plano Avançado.",
    pc_ga_title: "Afiliados com login", pc_ga_desc: "Cada afiliado entra com login próprio e vê só o canal dele: links, cliques e conversões. A partir do plano Avançado.",
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
    niche_note: "Campanhas em CPA, CPL, CPC ou CPM, com moeda definida por campanha.",
    section_pricing_label: "// PREÇOS",
    section_pricing_title: "Escolha o plano que combina com seu crescimento",
    section_pricing_sub: "Todos os planos incluem 7 dias de teste grátis, sem cartão de crédito. Sem taxas escondidas, cancele quando quiser.",
    plan_basic: "Básico", plan_advanced: "Avançado", plan_scale: "Escala", plan_custom: "Personalizado",
    pf_users_1: "1 usuário", pf_campaigns_10: "10 campanhas", pf_channels_10: "10 canais",
    pf_users_5: "5 usuários", pf_campaigns_50: "50 campanhas", pf_channels_50: "50 canais",
    pf_users_20: "20 usuários", pf_campaigns_500: "500 campanhas", pf_channels_100: "100 canais",
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
    pf_affiliates_unlimited: "Afiliados ilimitados",
    pricing_popular: "Mais Popular",
    pricing_cta: "Começar →", pricing_cta_custom: "Fale conosco →",
    section_faq_label: "// FAQ",
    section_faq_title: "Perguntas Frequentes",
    faq_5_q: "Como funciona o teste grátis?",
    faq_5_a: "São 7 dias com acesso completo à plataforma, sem precisar cadastrar cartão de crédito. Ao fim do período você escolhe o plano que faz sentido para o seu volume.",
    faq_1_q: "Posso trocar de plano depois?",
    faq_1_a: "Sim, a qualquer momento pelo painel. A diferença é ajustada na próxima fatura.",
    faq_2_q: "Existe limite de cliques ou de vendas?",
    faq_2_a: "Não. Os planos mudam pelo número de usuários, campanhas, canais e afiliados. O preço não muda com a quantidade de cliques ou de conversões.",
    faq_3_q: "Como funciona o suporte?",
    faq_3_a: "Em todos os planos você fala direto com o time que constrói a plataforma. Na demonstração, a gente configura com você o primeiro pixel ou postback.",
    faq_4_q: "Posso cancelar a qualquer momento?",
    faq_4_a: "Sim. Sem fidelidade, sem taxa de cancelamento. Você mantém o acesso até o fim do período pago.",
    cta_title: "Pronto para saber de onde vem cada venda?",
    cta_sub: "7 dias grátis em qualquer plano, sem cartão de crédito. Cancele quando quiser.",
    cta_btn: "Começar teste grátis →",
    footer_tagline: "Rastreamento de links, conversões e afiliados. Feito no Brasil.",
    footer_product: "Produto", footer_legal: "Legal",
    footer_features: "Funcionalidades", footer_platform: "Plataforma", footer_pricing: "Preços", footer_faq: "FAQ",
    footer_terms: "Termos de Serviço", footer_about: "Sobre nós",
    footer_copy: "© 2026 TrackPath. Todos os direitos reservados.",
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
    hero_ac_label: "Cliques hoje",
    features_pill: "⚡ Performance, controle e escala — feito pra quem vive de tráfego.",
    copy_label: "Copiar",
    copy_done: "✓ Copiado",
    activity_header: "ATIVIDADE AO VIVO",
    activity_now: "agora",
    activity_1_text: "Novo link criado",
    activity_2_text: "Clique via Instagram",
    activity_3_text: "Conversão registrada",
    activity_4_text: "Clique via e-mail",
    activity_5_text: "Novo clique",
    section_hiw_label: "// COMO FUNCIONA",
    section_hiw_title: "Do link à receita, em quatro passos",
    section_hiw_sub: "Uma plataforma, um link, a jornada inteira — do primeiro clique à comissão paga.",
    hiw_pill: "🚀 Do link ao pagamento, em um fluxo só.",
    hiw_1_title: "Crie o link",
    hiw_1_desc: "Cole qualquer URL, escolha a campanha e o canal e tenha um link rastreável, com QR code, pronto pra compartilhar. Sem depender de dev.",
    hiw_2_title: "Rastreie",
    hiw_2_desc: "Cada clique, conversão e postback chega no seu painel em tempo real — pixel, S2S ou Smart Tag.",
    hiw_3_title: "Gerencie",
    hiw_3_desc: "Organize campanhas e canais, aprove conversões e defina comissões — pendente, aprovada, paga.",
    hiw_4_title: "Escale",
    hiw_4_desc: "Multiusuário, subdomínio próprio e moeda por campanha. Cresça de uma campanha pra centenas sem trocar de plataforma.",
    hiw_status_pending: "Pendente",
    hiw_status_approved: "Aprovada",
    hiw_status_paid: "Paga",
    hiw_scale_now: "Agora",
    hiw_scale_label: "Campanhas ativas",
    nav_site: "Site do TrackPath ↗",
    nav_signin: "Entrar",
    section_who_label: "// PARA QUEM É",
    section_who_title: "Uma plataforma, três lados.",
    section_who_sub: "Funciona para quem divulga, para quem vende e para quem conecta os dois.",
    who_aff_title: "Afiliados",
    who_aff_desc: "Um link para cada post, grupo e canal. Veja qual canal traz venda, não só clique, sem pagar cinco ferramentas. A partir de R$ 99/mês.",
    who_adv_title: "Anunciantes",
    who_adv_desc: "Seu próprio programa de afiliados: rastreie as vendas no seu site, defina a comissão de cada evento e dê a cada afiliado um painel só dele.",
    who_age_title: "Agências e redes",
    who_age_desc: "Conecte anunciantes a afiliados, receba conversões por postback e repasse para cada parceiro. Receita, comissão e margem por campanha.",
    who_link: "Ver como funciona →",
    pricing_site_link: "Ver preços e comparar planos no site →",
    cta_site: "Conhecer o site do TrackPath",
    footer_site: "TrackPath",
    footer_site_home: "Site oficial",
    footer_site_aff: "Para afiliados",
    footer_site_adv: "Para anunciantes",
    footer_site_age: "Para agências",
    footer_site_pricing: "Preços",
    footer_site_guides: "Guias",
    footer_site_tools: "Encurtador grátis",
    footer_site_signin: "Entrar no painel",
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
  renderPlanLimits(lang);
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
['how-it-works', 'delivery', 'features', 'platform', 'niches', 'pricing', 'faq'].forEach(id => {
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
    // Tag do lead (filtro no superadmin): "lp", ou a ?tag= de quem linkou
    // para esta página (ex.: lp.trackpath.com.br/?tag=lp-meta-bf).
    tag: new URLSearchParams(location.search).get('tag') || 'lp',
    source_url: location.href,
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

/* ============ LINKS PARA O SITE PRINCIPAL ============ */
// Quantas pessoas saem da LP para trackpath.com.br, e por onde.
document.querySelectorAll('a[data-cta-location]').forEach(a => {
  a.addEventListener('click', () => pushEvent('lp_to_site', { cta_location: a.dataset.ctaLocation }));
});

/* ============ PRICING (dynamic limits, from /plans) ============ */
// The card markup (features, checkmarks/crosses, badge, buttons) stays
// static in index.html, exactly as before. Only the three numeric limits
// per plan (users/campaigns/channels) are filled in from the API, via the
// <li data-limit-plan="..." data-limit-key="..."> placeholders there.
const PLANS_ENDPOINT = 'https://api.tkph.com.br/plans';

// Same numbers as the static markup — used until the API responds, and
// kept if it fails, so the section always shows sensible values.
const FALLBACK_PLANS = [
  { plan: 'basic', limits: { max_users: 1, max_campaigns: 10, max_channels: 10, max_affiliates: 0 } },
  { plan: 'advanced', limits: { max_users: 5, max_campaigns: 50, max_channels: 50, max_affiliates: 10 } },
  { plan: 'scale', limits: { max_users: 20, max_campaigns: 500, max_channels: 100, max_affiliates: 100 } },
  { plan: 'custom', limits: { max_users: null, max_campaigns: null, max_channels: null, max_affiliates: null } },
];

// Numeric limits vary per plan, so unlike the static text elsewhere they
// can't map to a fixed i18n key — only the "unlimited" (null) case reuses
// the existing dict entries; other values are composed here. Returning
// null tells renderPlanLimits to hide the row entirely — used for
// max_affiliates at 0, since "0 affiliates" isn't a feature, it's the
// absence of one.
function limitLabel(key, value, lang) {
  const dict = i18n[lang] || i18n.en;
  const isPt = lang === 'pt';
  switch (key) {
    case 'max_users':
      if (value == null) return dict.pf_users_unlimited;
      return isPt ? `${value} usuário${value === 1 ? '' : 's'}` : `${value} user${value === 1 ? '' : 's'}`;
    case 'max_campaigns':
      if (value == null) return dict.pf_campaigns_unlimited;
      return isPt ? `${value} campanha${value === 1 ? '' : 's'}` : `${value} campaign${value === 1 ? '' : 's'}`;
    case 'max_channels':
      if (value == null) return dict.pf_channels_unlimited;
      return isPt ? (value === 1 ? '1 canal' : `${value} canais`) : `${value} channel${value === 1 ? '' : 's'}`;
    case 'max_affiliates':
      if (value == null) return dict.pf_affiliates_unlimited;
      if (value > 0) return isPt ? `${value} afiliado${value === 1 ? '' : 's'}` : `${value} affiliate${value === 1 ? '' : 's'}`;
      return null;
    default:
      return null;
  }
}

function renderPlanLimits(lang) {
  if (!cachedPlans) return;
  document.querySelectorAll('[data-limit-plan]').forEach(li => {
    const planData = cachedPlans.find(p => p.plan === li.dataset.limitPlan);
    if (!planData) return;
    const value = planData.limits ? planData.limits[li.dataset.limitKey] : null;
    const label = limitLabel(li.dataset.limitKey, value, lang);
    li.hidden = label == null;
    if (label != null) li.textContent = label;
  });
}

async function loadPricingPlans() {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  cachedPlans = FALLBACK_PLANS;
  renderPlanLimits(lang);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(PLANS_ENDPOINT, { signal: controller.signal });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    cachedPlans = data;
    renderPlanLimits(lang);
  } catch (err) {
    // Fallback numbers are already rendered above — nothing more to do.
  } finally {
    clearTimeout(timeoutId);
  }
}

loadPricingPlans();

/* ============ HERO ANALYTICS CARD (simulated live data) ============ */
// Purely illustrative — no real data source. Ticks the headline number and
// "walks" the sparkline to the right every 2-4s, like a live dashboard.
const acValueEl = document.getElementById('acValue');
const acLineEl = document.querySelector('.ac-spark path.line');
const acFillEl = document.querySelector('.ac-spark path.fill');

let acCount = acValueEl ? parseInt(acValueEl.textContent.replace(/[^\d]/g, ''), 10) || 0 : 0;

const SPARK_WIDTH = 320, SPARK_HEIGHT = 60, SPARK_POINTS = 16;
const sparkData = [];
(function seedSpark() {
  let y = 42;
  for (let i = 0; i < SPARK_POINTS; i++) {
    y += (Math.random() - 0.65) * 6;
    y = Math.max(6, Math.min(48, y));
    sparkData.push(y);
  }
})();

function sparkPaths() {
  const step = SPARK_WIDTH / (SPARK_POINTS - 1);
  const coords = sparkData.map((y, i) => [i * step, y]);
  const line = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const fill = `M0,${SPARK_HEIGHT} ` + coords.map(([x, y]) => `L${x.toFixed(1)},${y.toFixed(1)}`).join(' ') + ` L${SPARK_WIDTH},${SPARK_HEIGHT} Z`;
  return { line, fill };
}

function tickSpark() {
  if (!acLineEl || !acFillEl) return;
  sparkData.shift();
  const last = sparkData[sparkData.length - 1];
  let next = last + (Math.random() - 0.6) * 8;
  next = Math.max(6, Math.min(48, next));
  sparkData.push(next);
  const { line, fill } = sparkPaths();
  acLineEl.setAttribute('d', line);
  acFillEl.setAttribute('d', fill);
}

function tickAcValue() {
  if (!acValueEl) return;
  acCount += 1 + Math.floor(Math.random() * 12);
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  acValueEl.textContent = acCount.toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US');
  acValueEl.classList.add('bump');
  setTimeout(() => acValueEl.classList.remove('bump'), 400);
}

function scheduleAcTick() {
  const delay = 2000 + Math.random() * 2000;
  setTimeout(() => {
    tickAcValue();
    tickSpark();
    scheduleAcTick();
  }, delay);
}
if (acValueEl) scheduleAcTick();

/* ============ EXIT-INTENT MODAL ============ */
// Opens the existing lead modal once per session when the cursor leaves
// through the top of the viewport (about to close the tab / switch away).
document.addEventListener('mouseout', (e) => {
  if (e.clientY > 0 || e.relatedTarget) return;
  let alreadyShown = true;
  try { alreadyShown = !!sessionStorage.getItem('exitModalShown'); } catch (err) {}
  if (alreadyShown || modal.classList.contains('open')) return;
  try { sessionStorage.setItem('exitModalShown', 'true'); } catch (err) {}
  openModal({ dataset: { ctaLocation: 'exit_intent' } });
});

/* ============ COPY LINK BUTTON ============ */
function copyLink(btn) {
  // data-copy-value lets a button copy a real URL instead of a mockup
  // slug shown for illustration (e.g. the "Shorten" step's example link).
  const codeEl = btn.previousElementSibling;
  const code = btn.dataset.copyValue || (codeEl ? codeEl.textContent.trim() : '');
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const dict = i18n[lang] || i18n.en;
  if (navigator.clipboard) navigator.clipboard.writeText(code).catch(() => {});
  const label = btn.querySelector('.copy-text');
  clearTimeout(btn._copyTimeout);
  label.textContent = dict.copy_done;
  btn.classList.add('copied');
  btn._copyTimeout = setTimeout(() => {
    label.textContent = dict.copy_label;
    btn.classList.remove('copied');
  }, 2000);
  pushEvent('copy_link', { code });
}
document.querySelectorAll('.copy-btn').forEach(btn => btn.addEventListener('click', () => copyLink(btn)));

/* ============ LIVE ACTIVITY FEED (simulated) ============ */
// Illustrative only — items are fixed templates cycled on a timer, not
// data from any endpoint. Each item's text/time keep data-i18n so a
// language switch updates already-rendered items for free.
const activityTemplates = [
  { icon: '🔗', key: 'activity_1_text', tag: 'black-friday' },
  { icon: '📱', key: 'activity_2_text', tag: 'stories' },
  { icon: '💰', key: 'activity_3_text', tag: 'checkout' },
  { icon: '📧', key: 'activity_4_text', tag: 'newsletter' },
  { icon: '🌎', key: 'activity_5_text', tag: 'BR · mobile' },
];
function addActivityItem() {
  const list = document.getElementById('activityList');
  if (!list) return;
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  const dict = i18n[lang] || i18n.en;
  const item = activityTemplates[Math.floor(Math.random() * activityTemplates.length)];
  const li = document.createElement('li');
  li.className = 'activity-item entering';
  li.innerHTML = `<span>${item.icon}</span> <span data-i18n="${item.key}">${dict[item.key]}</span> <code>${item.tag}</code> <time data-i18n="activity_now">${dict.activity_now}</time>`;
  list.prepend(li);
  requestAnimationFrame(() => li.classList.remove('entering'));
  if (list.children.length > 4) list.lastChild.remove();
}
if (document.getElementById('activityList')) {
  addActivityItem();
  setInterval(addActivityItem, 3500);
}

/* ============ HOW IT WORKS (step dots + center line) ============ */
// Dots reuse the same revealIO instance as the rest of the page's
// scroll-reveal — no separate observer. `.hiw-dot` styles its own
// idle/lit states off the shared `.in` class instead of `.reveal`'s
// fade, since the dot must stay visible on the line before activation.
document.querySelectorAll('.hiw-dot').forEach(el => revealIO.observe(el));

const hiwSteps = document.querySelector('.hiw-steps');
const hiwLineFill = document.getElementById('hiwLineFill');
if (hiwSteps && hiwLineFill) {
  const updateHiwLine = () => {
    const rect = hiwSteps.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height + vh;
    const scrolled = vh - rect.top;
    const progress = Math.min(1, Math.max(0, scrolled / total));
    hiwLineFill.style.height = (progress * 100) + '%';
  };
  window.addEventListener('scroll', updateHiwLine, { passive: true });
  window.addEventListener('resize', updateHiwLine);
  updateHiwLine();
}
