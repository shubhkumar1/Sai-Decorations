import { ServiceItem, PackageItem, GalleryItem, TestimonialItem, LocalityItem, BlogPost, SiteSettings, OfferSettings } from '@/types';

export const SITE_SETTINGS: SiteSettings = {
  businessName: 'Sai Decorations',
  phonePrimary: '+91 XXXXX XXXXX',
  phoneSecondary: '+91 XXXXX XXXXX',
  whatsappNumber: '91XXXXXXXXXX',
  email: 'contact@saidecorations.in',
  address: 'Kali Mandir Rd, Bhawanipur, Doranda, Ranchi, Jharkhand 834002',
  city: 'Ranchi',
  state: 'Jharkhand',
  pincode: '834002',
  serviceAreas: [
    'Ranchi (Lalpur, Kanke, Morabadi, Harmu, Doranda, Bariatu, Hinoo, Ratu Road, Namkum, Chutia)',
    'Ramgarh',
    'Khunti',
    'Hazaribagh',
    'Purulia'
  ],
  yearsExperience: 18,
  eventsCompleted: 2500,
  googleSheetWebhookUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK || '',
  instagramUrl: 'https://instagram.com/saidecorations_ranchi',
  facebookUrl: 'https://facebook.com/saidecorationsranchi',
  youtubeUrl: 'https://youtube.com/@saidecorationsranchi'
};

export const INITIAL_OFFER: OfferSettings = {
  offerId: 'wedding-season-2026',
  enabled: true,
  title: '🎉 Royal Wedding Season Special 2026',
  message: 'Book your wedding or reception tent & decor package today and receive up to 15% instant discount plus complimentary stage floral decor worth ₹15,000!',
  imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  buttonText: 'Claim Special Offer Now',
  buttonLink: '/quote-builder',
  discountBadge: '15% OFF',
  startDate: '2026-01-01',
  endDate: '2026-12-31'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding-arrangements',
    slug: 'wedding-arrangements',
    title: 'Wedding Arrangements & Royal Mandaps',
    titleHi: 'विवाह आयोजन एवं शाही मंडप',
    shortDescription: 'Complete end-to-end wedding planning, royal mandap design, entrance arch, and bridal stage setups tailored for grand Ranchi celebrations.',
    shortDescriptionHi: 'रांची के भव्य विवाहों के लिए संपूर्ण शादी की तैयारी, शाही मंडप डिजाइन और जयमाला स्टेज व्यवस्था।',
    fullDescription: 'Sai Decorations is Ranchi’s premier wedding organizer. We craft breathtaking, personalized wedding themes ranging from classic traditional Rajwada and South Indian floral mandaps to modern crystal glass and lotus-themed installations. Our comprehensive arrangements handle entryway welcoming gates, Vidhi Mandap, VIP lounges, photobooths, and bride/groom grand entries.',
    fullDescriptionHi: 'साईं डेकोरेशन्स रांची की अग्रणी मैरिज इवेंट कंपनी है। हम राजवाड़ा लुक से लेकर आधुनिक फ्लोरल थीम मंडप तक हर तरह की भव्य शादी का आयोजन करते हैं।',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Royal Rajwada Mandaps', 'Custom Varmala Stages', 'Grand Entrance Arches', 'VVIP Guest Lounges'],
    featuresHi: ['शाही रजवाड़ा मंडप', 'जयमाला स्टेज', 'भव्य प्रवेश द्वार', 'वीआईपी लाउंज'],
    whatsIncluded: [
      'Custom Mandap Structure with fresh flowers & drapes',
      'Elevated Bridal & Groom Jaymala Stage with HD LED background',
      '100 ft Carpeted Entrance Corridor with Floral Pillars',
      'Designer Sofa and Seating for Bride & Groom families',
      'Dedicated Event Supervisor & On-site Crew'
    ],
    whatsIncludedHi: [
      'ताजे फूलों एवं पर्दों से सजा कस्टम मंडप',
      'एलईडी बैकग्राउंड युक्त जयमाला स्टेज',
      '100 फीट कारपेट एवं फ्लोरल पिलर प्रवेश द्वार',
      'वर-वधू पक्ष हेतु प्रीमियम सोफा एवं सीटिंग'
    ],
    startingPrice: '₹75,000',
    targetKeywords: ['wedding decorator in Ranchi', 'wedding arrangements Ranchi', 'royal mandap decoration Ranchi', 'best marriage decorator Ranchi'],
    faqs: [
      {
        question: 'What is the cost of wedding mandap decoration in Ranchi?',
        questionHi: 'रांची में शादी के मंडप सजावट का खर्च कितना आता है?',
        answer: 'Wedding mandap decoration in Ranchi starts at ₹35,000 for standard floral setups, while premium royal Rajwada or crystal glass mandaps range between ₹75,000 to ₹2,500,000+ depending on venue size and fresh flower volume.',
        answerHi: 'रांची में शादी का मंडप ₹35,000 से शुरू होकर ₹2.5 लाख तक जाता है।'
      },
      {
        question: 'Do you cover outdoor venues and banquet halls across Ranchi?',
        questionHi: 'क्या आप पूरे रांची के बैंक्वेट हॉल और खुले मैदानों में सेवा देते हैं?',
        answer: 'Yes, Sai Decorations covers all major venues in Ranchi including Morabadi Ground, Kanke Road resorts, Lalpur banquets, and private farmhouses, as well as nearby districts.',
        answerHi: 'हाँ, हम मोरहाबादी, कांके रोड, लालपुर सहित पूरे रांची और आसपास के जिलों में सेवाएं प्रदान करते हैं।'
      }
    ]
  },
  {
    id: 'tent-house',
    slug: 'tent-house',
    title: 'Tent House & Waterproof Pandals',
    titleHi: 'टेंट हाउस एवं वाटरप्रूफ पंडाल',
    shortDescription: 'Heavy-duty German hanger tents, waterproof rainproof pandals, VIP dining shades, and luxury seating for 100 to 10,000 guests.',
    shortDescriptionHi: '100 से 10,000 मेहमानों के लिए जर्मन हैंगर टेंट, वाटरप्रूफ पंडाल और लक्जरी सीटिंग व्यवस्था।',
    fullDescription: 'Recognized for the finest tent house in Ranchi, we supply heavy-steel structural framing, double-layered rain-proof canvas, German super-span hangers, and heat-insulated roofing. Whether you are hosting a monsoon wedding, political rally, or cultural fest, our sturdy pandals guarantee 100% safety and weather protection.',
    fullDescriptionHi: 'साईं टेंट हाउस रांची में हर मौसम के अनुकूल वाटरप्रूफ टेंट, जर्मन हैंगर और लग्जरी शेड उपलब्ध कराता है।',
    heroImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['German Hanger Tents', '100% Waterproof Fabric', 'AC VIP Lounges', 'Cushioned Banquet Chairs & Tables'],
    featuresHi: ['जर्मन हैंगर टेंट', '100% वाटरप्रूफ फैब्रिक', 'एसी वीआईपी लाउंज', 'कुशन वाली कुर्सियां'],
    whatsIncluded: [
      'Weather-sealed heavy duty iron trussing & waterproof canopy',
      'Wooden raised platform flooring with synthetic carpeting',
      'Banquet chairs with satin covers & bow ties',
      'Round dining tables with crisp linen covers',
      'High-velocity mist fans or portable AC units'
    ],
    whatsIncludedHi: [
      'वाटरप्रूफ कैनोपी व मजबूत आयरन ट्रस',
      'वुडन प्लेटफॉर्म और रेड कारपेट फ्लोरिंग',
      'कवर व बॉ के साथ बैंक्वेट कुर्सियां',
      'राउंड डाइनिंग टेबल'
    ],
    startingPrice: '₹25,000',
    targetKeywords: ['tent house in Ranchi', 'waterproof pandal Ranchi', 'tent and decoration in Ranchi', 'Sai Decorations tent house'],
    faqs: [
      {
        question: 'How far in advance should we book Sai Decorations tent house in Ranchi?',
        questionHi: 'साईं टेंट हाउस को कितने दिन पहले बुक करना चाहिए?',
        answer: 'We recommend booking 30 to 45 days in advance during peak wedding season (November to May) to reserve heavy German hangers and choice draping materials.',
        answerHi: 'शादियों के सीजन में 30 से 45 दिन पहले बुकिंग कराने की सलाह दी जाती है।'
      }
    ]
  },
  {
    id: 'trust-pandal',
    slug: 'trust-pandal',
    title: 'Trust Pandal & Cultural Events',
    titleHi: 'ट्रस्ट पंडाल एवं धार्मिक/सांस्कृतिक आयोजन',
    shortDescription: 'Grand religious pandals for Durga Puja, Chhath Puja, Jagannath Rath Yatra, Satsang, and corporate expos with zero-compromise structural safety.',
    shortDescriptionHi: 'दुर्गा पूजा, छठ पूजा, सत्संग एवं बड़े सम्मेलनों के लिए विशाल एवं सुरक्षित ट्रस्ट पंडाल।',
    fullDescription: 'Sai Decorations specializes in large-scale Trust Pandals designed according to strict architectural safety standards. We construct theme-based artistic pandals for major religious trusts, social clubs, and public exhibitions in Ranchi.',
    fullDescriptionHi: 'धार्मिक ट्रस्टों, पूजा समितियों और बड़े सार्वजनिक सम्मेलनों के लिए भव्य कलात्मक पंडाल निर्माण।',
    heroImage: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Architect-Certified Truss Systems', 'Artistic Theme Facades', 'Mass Audience Seating', 'Emergency Fire Retardant Drapes'],
    featuresHi: ['प्रमाणित ट्रस संरचना', 'कलात्मक थीम मुख्य द्वार', 'विशाल दर्शक दीर्घा', 'अग्नि-सुरक्षित कपड़े'],
    whatsIncluded: [
      'Custom architectural design mockup & engineer approval',
      'Fire-retardant structural canvas draping',
      'Integrated stage for discourses/puja rituals',
      'Security barricading & queue management gates'
    ],
    whatsIncludedHi: [
      'कस्टम आर्किटेक्चरल डिजाइन',
      'फायर-रिटार्डेंट स्ट्रक्चरल कैनवास',
      'विशाल पूजा व कथा मंच',
      'बैरीकेडिंग व क्राउड मैनेजमेंट'
    ],
    startingPrice: '₹50,000',
    targetKeywords: ['trust pandal in Ranchi', 'durga puja pandal decorator Ranchi', 'large event tent Ranchi'],
    faqs: [
      {
        question: 'Do you provide structural safety certification for public trust pandals?',
        questionHi: 'क्या आप सार्वजनिक पंडालों के लिए सुरक्षा प्रमाण पत्र प्रदान करते हैं?',
        answer: 'Yes, all our trust pandals use certified heavy-gauge iron trusses and fire-retardant fabrics with engineer safety sign-offs required by Ranchi district authorities.',
        answerHi: 'जी हाँ, हमारे सभी ट्रस्ट पंडाल इंजीनियर सुरक्षा मानकों का पूर्ण पालन करते हैं।'
      }
    ]
  },
  {
    id: 'flower-decoration',
    slug: 'flower-decoration',
    title: 'Exotic & Fresh Flower Decoration',
    titleHi: 'ताजे फूलों की आकर्षक सजावट',
    shortDescription: 'Imported orchids, Thai roses, lilies, carnations, and traditional marigold floral styling for stages, cars, mandaps, and home haldi/mehendi.',
    shortDescriptionHi: 'स्टेज, कार, मंडप, हल्दी और मेहंदी के लिए ताजे गुलाब, आर्किड और गेंदे के फूलों से विशेष सजावट।',
    fullDescription: 'Transform your venue into a fragrant paradise. Sai Decorations sources daily-fresh flowers straight from Bangalore, Kolkata, and Thailand. We design floral backdrops, haldi swing arrangements, floral jewelry themes, car decoration, and pathway floral carpets.',
    fullDescriptionHi: 'बैंगलोर और कोलकाता से मंगाए गए ताजे ऑर्किड, गुलाब और लिली से हर अवसर को सुगंधित और हसीन बनाएं।',
    heroImage: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Bangalore & Thai Flower Sourcing', 'Haldi/Mehendi Canopy Themes', 'Luxury Groom Car Floral Wraps', 'Gajra & Floral Jewelry'],
    featuresHi: ['ताजे फूलों की व्यवस्था', 'हल्दी-मेहंदी सजावट', 'दूल्हे की कार सजावट', 'फ्लोरल ज्वैलरी'],
    whatsIncluded: [
      '100% fresh, non-wilted seasonal and exotic blooms',
      'Custom color-palette matching for bridal attire',
      'Haldi Jhula (Swing) floral frame & backdrop',
      'Wedding Doli / Groom Car fresh flower styling'
    ],
    whatsIncludedHi: [
      '100% ताजे देशी व विदेशी फूल',
      'दुल्हन के जोड़े के अनुसार कलर थीम',
      'हल्दी झूला व फोटो बूथ',
      'सजी हुई दुलहन डोली व कार'
    ],
    startingPrice: '₹15,000',
    targetKeywords: ['flower decoration in Ranchi', 'haldi decoration Ranchi', 'wedding car decoration Ranchi', 'fresh flower decorator Ranchi'],
    faqs: [
      {
        question: 'Are the flowers guaranteed fresh for full-day events?',
        questionHi: 'क्या फूल पूरे दिन ताजा रहते हैं?',
        answer: 'Yes, we use humidity-controlled storage and flower tubes so all floral installations remain fresh and vibrant throughout the day and night ceremony.',
        answerHi: 'जी हाँ, हम वाटर ट्यूब्स और कूलिंग तकनीक का प्रयोग करते हैं जिससे फूल तरोताजा रहते हैं।'
      }
    ]
  },
  {
    id: 'balloon-decoration',
    slug: 'balloon-decoration',
    title: 'Balloon Decoration & Theme Parties',
    titleHi: 'गुब्बारा सजावट एवं बर्थडे थीम',
    shortDescription: 'Organic balloon arches, helium ceiling balloons, LED glowing balloons, superhero/princess birthday themes, and anniversary surprise setups.',
    shortDescriptionHi: 'जन्मदिन, सगाई और सालगिरह के लिए गुब्बारा मेहराब, हीलियम बलून और स्पेशल थीम सजावट।',
    fullDescription: 'Add joy and fun to your celebrations with Ranchi’s best balloon decorators. From pastel chrome birthday rings to grand balloon drop explosions, baby shower welcome gates, and anniversary surprises, we deliver stunning visual aesthetics.',
    fullDescriptionHi: 'बच्चों के जन्मदिन, बेबी शॉवर और एनिवर्सरी के लिए आकर्षक बलून रिंग, पेस्टल क्रोम थीम और बलून आर्क।',
    heroImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Pastel & Chrome Organic Arches', 'Character Birthday Mockups', 'Helium Floating Balloons', 'Ring Stand & LED Backdrop'],
    featuresHi: ['पेस्टल एवं क्रोम बलून आर्क', 'बर्थडे थीम कटआउट', 'हीलियम गुब्बारे', 'एलईडी रिंग स्टैंड'],
    whatsIncluded: [
      'High-grade non-toxic latex & foil balloons',
      'Customized acrylic name cutout & neon light sign',
      'Theme table decoration with cake stand accessories',
      'On-site inflation team with professional equipment'
    ],
    whatsIncludedHi: [
      'उच्च गुणवत्ता नॉन-टॉक्सिक बलून',
      'नाम का एक्रिलिक कटआउट व नियॉन साइन',
      'केक टेबल सजावट',
      'ऑन-साइट त्वरित व्यवस्था'
    ],
    startingPrice: '₹3,500',
    targetKeywords: ['balloon decoration in Ranchi', 'birthday decorator Ranchi', 'baby shower decoration Ranchi'],
    faqs: [
      {
        question: 'What is the starting price for birthday balloon decoration in Ranchi?',
        questionHi: 'रांची में बर्थडे बलून डेकोरेशन का शुरुआती खर्च क्या है?',
        answer: 'Basic home birthday balloon decor starts at ₹3,500, while premium backdrop ring setups with neon signs range from ₹6,500 to ₹15,000.',
        answerHi: 'होम बर्थडे डेकोरेशन ₹3,500 से शुरू होती है।'
      }
    ]
  },
  {
    id: 'event-management',
    slug: 'event-management',
    title: 'End-to-End Event Management',
    titleHi: 'संपूर्ण इवेंट मैनेजमेंट',
    shortDescription: 'Turnkey event execution for corporate seminars, product launches, VIP inaugurations, family celebrations, and grand receptions in Ranchi.',
    shortDescriptionHi: 'कॉरपोरेट सेमिनार, प्रोडक्ट लॉन्च, उद्घाटन एवं पारिवारिक सम्मेलनों के लिए संपूर्ण इवेंट मैनेजमेंट।',
    fullDescription: 'Sai Decorations – Tent House & Event Services in Ranchi handles every minute detail so you can enjoy your event stress-free. Our event directors supervise venue selection, guest hospitality, stage choreography, artist booking, anchor arrangement, catering, security, and AV logistics.',
    fullDescriptionHi: 'स्थल चयन से लेकर एंकर, आर्टिस्ट, कैटरिंग और सिक्योरिटी तक, साईं इवेंट मैनेजमेंट हर जिम्मेदारी संभालता है।',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Dedicated Event Manager', 'Celebrity & Artist Booking', 'Guest Hospitality & Transport', 'Corporate AV & Stage Production'],
    featuresHi: ['समर्पित इवेंट मैनेजर', 'कलाकार व एंकर बुकिंग', 'अतिथि स्वागत व लॉजिस्टिक्स', 'साउंड व स्टेज प्रोडक्शन'],
    whatsIncluded: [
      'Comprehensive master plan & minute-by-minute timeline',
      'Dedicated single-point coordinator on site',
      'Professional host/emcee & live musical performers',
      'Complete safety, bouncer security & guest ushering'
    ],
    whatsIncludedHi: [
      'पूरा टाइमलाइन मास्टर प्लान',
      'ऑन-साइट समर्पित कोऑर्डिनेटर',
      'प्रोफेशनल एंकर व लाइव सिंगर',
      'सुरक्षा गार्ड व गेस्ट स्वागत टीम'
    ],
    startingPrice: '₹50,000',
    targetKeywords: ['event management in Ranchi', 'event organizer Ranchi', 'best event planners Ranchi'],
    faqs: [
      {
        question: 'Why choose Sai Decorations for tent and decoration in Ranchi?',
        questionHi: 'रांची में साईं इवेंट मैनेजमेंट क्यों चुनें?',
        answer: 'With 18+ years of local experience and over 2,500 successful events executed in Jharkhand, we provide turnkey accountability, competitive vendor pricing, and flawless execution.',
        answerHi: '18 से अधिक वर्षों के अनुभव और 2500+ सफल आयोजनों के साथ हम बेस्ट सर्विस देते हैं।'
      }
    ]
  },
  {
    id: 'specialized-catering',
    slug: 'specialized-catering',
    title: 'Specialized Catering & Live Stalls',
    titleHi: 'विशेष खान-पान (कैटरिंग) एवं लाइव स्टॉल',
    shortDescription: 'Authentic Pure Veg & Non-Veg multi-cuisine catering featuring North Indian, Mughlai, South Indian, Continental, Chinese, and live street-food counters.',
    shortDescriptionHi: 'शुद्ध शाकाहारी एवं मांसाहारी स्वादिष्ट पकवान, लाइव डोसा, चाट, इटालियन एवं मॉकटेल काउंटर।',
    fullDescription: 'Treat your guests to a royal feast prepared by master chefs. Sai Catering offers hygienic, delicious multi-cuisine buffet spreads with exquisite presentation, brass/silver chafing dishes, uniform-clad waiters, live counter chat, wood-fired pizza, live mocktail bar, and traditional sweets.',
    fullDescriptionHi: 'मास्टर शेफ द्वारा निर्मित शुद्ध एवं स्वादिष्ट व्यंजन, लाइव चाट स्टॉल, इटालियन और पारंपरिक मिठाइयाँ।',
    heroImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Pure Veg & Non-Veg Menus', 'Live Chaat & Dosa Stalls', 'Luxury Presentation & Brass Cutlery', 'Uniformed Trained Servers'],
    featuresHi: ['शुद्ध शाकाहारी व मांसाहारी मेनू', 'लाइव चाट व डोसा काउंटर', 'ब्रास कटलरी व प्रेजेंटेशन', 'यूनिफॉर्म वाले वेटर'],
    whatsIncluded: [
      'Customized menu consultation with free tasting session',
      'Heavy stainless steel & copper chafing dishes setup',
      'Fruit carving display & live ice-cream / dessert counters',
      'Strict hygiene standards with RO water & fresh ingredients'
    ],
    whatsIncludedHi: [
      'कस्टम मेनू व फ्री टेस्टिंग',
      'कॉपर व स्टील शेफिंग डिश',
      'फ्रूट काविंग व लाइव डेजर्ट',
      'आरओ वाटर एवं हाइजीन गारंटी'
    ],
    startingPrice: '₹450 per plate',
    targetKeywords: ['wedding catering in Ranchi', 'catering services Ranchi', 'best caterers in Ranchi', 'sai catering ranchi'],
    faqs: [
      {
        question: 'What is the per plate cost for wedding catering in Ranchi?',
        questionHi: 'रांची में शादी की कैटरिंग प्रति प्लेट कितनी होती है?',
        answer: 'Our catering packages range from ₹450 to ₹1,200 per plate for Pure Veg menus and ₹650 to ₹1,600 per plate for Non-Veg menus, including live stalls and dessert counters.',
        answerHi: 'शाकाहारी मेनू ₹450-₹1200 और मांसाहारी ₹650-₹1600 प्रति प्लेट उपलब्ध है।'
      }
    ]
  },
  {
    id: 'dj-light-sound',
    slug: 'dj-light-sound',
    title: 'DJ Light, Sound & Sharp Beam Effects',
    titleHi: 'डीजे, लाइट, साउंड एवं बीम इफेक्ट्स',
    shortDescription: 'High-power JBL line array sound systems, intelligent Moving Sharp Beams, LED Wall screens, smoke machines, and top Bollywood/Bhojpuri DJs.',
    shortDescriptionHi: 'जेबीएल साउंड, इंटेलिजेंट शार्पी बीम लाइट, एलईडी वॉल, स्मोक मशीन और टॉप डीजे आर्टिस्ट।',
    fullDescription: 'Electrify your sangeet night and reception party with Sai DJ Light & Sound Ranchi. We supply concert-grade JBL & RCF sound setups, cold pyro sparklers, CO2 jet cannons, hydraulic truss lights, and P3 indoor/outdoor LED video screens.',
    fullDescriptionHi: 'अपनी संगीत नाइट और शादी की पार्टी को जेबीएल साउंड, शार्पी लाइट, कोल्ड पायरो और एलईडी वॉल के साथ यादगार बनाएं।',
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Concert Line-Array Speakers', 'Intelligent Sharpy 15R Beams', 'P3 High-Res LED Video Wall', 'Cold Pyro & Fog Blast'],
    featuresHi: ['जेबीएल साउंड', 'इंटेलीजेंट शार्पी लाइट', 'पी3 हाई-रेज एलईडी स्क्रीन', 'कोल्ड पायरो आतिशबाजी'],
    whatsIncluded: [
      'Dual 18" Subwoofers & 4 Line Array Cabinets',
      'Professional DJ Console & Experienced Party DJ',
      'Heavy Light Trussing with 8+ Sharpy Beams & LED Wash',
      'Low-fog smoke generator for first-dance Cloud Effect'
    ],
    whatsIncludedHi: [
      'सब-वूफर व लाइन एरे साउंड',
      'अनुभवी डीजे मास्टर',
      'लाइट ट्रस व 8+ शार्पी बीम',
      'क्लाउड स्मोक मशीन'
    ],
    startingPrice: '₹18,000',
    targetKeywords: ['DJ sound and light in Ranchi', 'best DJ in Ranchi', 'sangeet DJ setup Ranchi'],
    faqs: [
      {
        question: 'Do you provide sound permissions and operators?',
        questionHi: 'क्या आप साउंड ऑपरेटर और लाइसेंस में मदद करते हैं?',
        answer: 'Yes, our sound technicians monitor sound decibel levels to comply with local Ranchi noise norms while keeping the dance floor high-energy.',
        answerHi: 'जी हाँ, हमारे साउंड तकनीशियन स्थानीय नियमों का ध्यान रखते हैं।'
      }
    ]
  },
  {
    id: 'video-photography',
    slug: 'video-photography',
    title: 'Cinematic Video & Photography',
    titleHi: 'सिनेमैटिक वीडियो एवं फोटोग्राफी',
    shortDescription: 'Cinematic wedding films, 4K Drone aerial shots, candid photography, live YouTube streaming, and luxury printed wedding albums.',
    shortDescriptionHi: 'सिनेमैटिक वेडिंग फिल्म, 4K ड्रोन शॉट्स, कैंडिडेट फोटोग्राफी एवं लाइव यूट्यूब स्ट्रीमिंग।',
    fullDescription: 'Capture your precious moments forever. Sai Photography brings award-winning cinematographers and candid photographers equipped with Sony FX6/A7SIII cameras, 4K drones, gimbal stabilizers, and studio lighting setups.',
    fullDescriptionHi: 'शादी के हसीन पलों को 4K ड्रोन, कैंडिडेट फोटोग्राफी और लक्जरी कैनवेरा फोटो एलबम में कैद करें।',
    heroImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['4K Drone Aerial Shoots', 'Candid Bridal Photography', 'Teaser Trailer & Traditional Film', 'Live Screen & Online Streaming'],
    featuresHi: ['4K ड्रोन शूट', 'कैंडिड ब्राइडल फोटोग्राफी', 'वेडिंग टीजर फिल्म', 'लाइव स्क्रीन स्ट्रीमिंग'],
    whatsIncluded: [
      '2 Candid Photographers + 2 Traditional Video Cameramen',
      'Licensed 4K Drone coverage of venue & Baraat procession',
      '3-Minute Instagram cinematic teaser + 45-minute full film',
      'Flush-mount premium Canvera Italian leather cover album'
    ],
    whatsIncludedHi: [
      'कैंडिड व ट्रेडिशनल फोटोग्राफर टीम',
      '4K ड्रोन कवरेज',
      'सिनेमैटिक टीजर व फुल फिल्म',
      'कैनवेरा इटैलियन लेदर फोटो एल्बम'
    ],
    startingPrice: '₹40,000',
    targetKeywords: ['wedding photographer in Ranchi', 'cinematic wedding video Ranchi', 'candid photography Ranchi'],
    faqs: [
      {
        question: 'How long does it take to deliver the final wedding album and video?',
        questionHi: 'फाइनल फोटो एल्बम और वीडियो मिलने में कितना समय लगता है?',
        answer: 'We deliver raw photos within 48 hours, digital edited previews within 10 days, and the complete printed album and 4K film within 3 to 4 weeks.',
        answerHi: 'रॉ फोटो 48 घंटे में और प्रिंटेड एल्बम 3-4 सप्ताह में डिलीवर किया जाता है।'
      }
    ]
  },
  {
    id: 'soundless-generator',
    slug: 'soundless-generator',
    title: 'Soundless Silent Generator (DG Sets)',
    titleHi: 'साइलेंट साउंडलेस जनरेटर (DG सेट्स)',
    shortDescription: 'Heavy-capacity eco-silent diesel generator sets (15 kVA to 500 kVA) ensuring uninterrupted 100% power backup for weddings and events.',
    shortDescriptionHi: '15 से 500 kVA तक की क्षमता वाले साउंडलेस जनरेटर सेट, शादी व आयोजनों हेतु 24x7 पावर बैकअप।',
    fullDescription: 'Never let a power outage spoil your grand celebration. Sai Generator Services provides super-silent acoustic CPCB-compliant DG sets with full diesel fuel supply and on-site electrician operators.',
    fullDescriptionHi: 'शादी और इवेंट में बिना किसी बाधा के 24 घंटे बिजली आपूर्ति हेतु सुपर साइलेंट डीजी सेट्स।',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    ],
    features: ['15 kVA to 500 kVA Capacities', 'Super Silent Acoustic Enclosure', 'Full Fuel & On-site Operator', 'Instant Automatic Transfer'],
    featuresHi: ['15 से 500 kVA क्षमता', 'सुपर साइलेंट साउंड प्रूफ', 'ईंधन व ऑपरेटर की व्यवस्था', 'ऑटो ट्रांसफर फैसिलिटी'],
    whatsIncluded: [
      'CPCB-approved low emission silent diesel generator',
      'Heavy-duty insulated copper connecting cables',
      'Dedicated licensed technician on duty throughout event',
      'Backup fuel tank provisioning'
    ],
    whatsIncludedHi: [
      'साउंडप्रूफ डीजी जनरेटर सेट',
      'कॉपर केबल नेटवर्क',
      '24 घंटे ड्यूटी पर ऑपरेटर'
    ],
    startingPrice: '₹6,000 / day',
    targetKeywords: ['soundless generator in Ranchi', 'DG set rental Ranchi', 'silent generator for wedding Ranchi'],
    faqs: [
      {
        question: 'What size generator do I need for a 500-guest wedding in Ranchi?',
        questionHi: '500 मेहमानों की शादी के लिए कितने kVA जनरेटर की जरूरत होती है?',
        answer: 'For a venue with heavy ACs, LED screens, and DJ lights, we usually supply a 62.5 kVA or 125 kVA soundless DG set for smooth uninterrupted supply.',
        answerHi: '500 मेहमानों और हैवी एसी/लाइटिंग हेतु 62.5 kVA या 125 kVA बेस्ट रहता है।'
      }
    ]
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'silver-wedding-package',
    name: 'Silver Celebration Package',
    nameHi: 'सिल्वर सेलिब्रेशन पैकेज',
    subtitle: 'Ideal for intimate weddings, ring ceremonies & sangeet functions (up to 300 guests).',
    startingPrice: '₹1,25,000',
    badge: 'Popular for Sangeet',
    recommendedFor: 'Home / Banquet hall functions up to 300 guests',
    features: [
      'Standard Floral Stage & Backdrop (20x10 ft)',
      'Carpeted Entrance Gate with 4 Flower Pillars',
      'Tent House Setup for 200 Seating (Chairs & Cover)',
      'Basic DJ Sound & 4 Sharpy Lights Setup',
      'Generators 30 kVA with diesel & operator',
      'Standard Haldi/Mehendi Canopy Decor'
    ],
    includedServices: ['wedding-arrangements', 'tent-house', 'flower-decoration', 'dj-light-sound', 'soundless-generator']
  },
  {
    id: 'gold-royal-package',
    name: 'Gold Royal Wedding Package',
    nameHi: 'गोल्ड रॉयल वेडिंग पैकेज',
    subtitle: 'Our most sought-after grand wedding package for 500 to 1000 guests in Ranchi.',
    startingPrice: '₹2,85,000',
    badge: '★ Best Value Choice',
    isPopular: true,
    recommendedFor: 'Grand Weddings & Receptions (500 - 1000 guests)',
    features: [
      'Royal Rajwada/Crystal Mandap with fresh flower styling',
      'Grand 3D Entrance Tunnel Arch (50 ft)',
      'Elevated Varmala Stage with LED Video Screen (12x8 ft)',
      'German Waterproof Pandal & Dining Shed setup',
      'JBL Concert Sound System + 8 Sharpy Beams & CO2 Blast',
      '62.5 kVA Silent DG Set Backup',
      'Complimentary Groom Car Floral Wrapping & VVIP Lounge'
    ],
    includedServices: ['wedding-arrangements', 'tent-house', 'flower-decoration', 'dj-light-sound', 'video-photography', 'soundless-generator']
  },
  {
    id: 'diamond-emperor-package',
    name: 'Imperial Diamond Package',
    nameHi: 'इंपीरियल डायमंड पैकेज',
    subtitle: 'Luxury bespoke wedding experience with high-end designer themes and 4K media coverage.',
    startingPrice: '₹5,50,000',
    badge: 'Ultra Luxury',
    recommendedFor: 'Mega Weddings & High Profile Events (1000+ guests)',
    features: [
      'Custom Designer Theme Mandap with imported orchids & lilies',
      '100 ft Grand Entryway with Cold Pyro Sparks',
      'Full German Hanger Air-Conditioned Structure setup',
      'Catering coordination with Silver Chafing presentation',
      'Cinematic 4K Drone + Candid Photography + Album',
      'Live Orchestra & Bollywood DJ line-array sound',
      '125 kVA Dual Silent DG Sets for 100% redundancy'
    ],
    includedServices: ['wedding-arrangements', 'tent-house', 'trust-pandal', 'flower-decoration', 'specialized-catering', 'dj-light-sound', 'video-photography', 'soundless-generator']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Rajwada Wedding Stage at Kanke Resort',
    category: 'wedding',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    caption: 'Custom Rajwada theme with over 5,000 fresh marigold & Thai orchid blooms.',
    featured: true
  },
  {
    id: 'gal-2',
    title: 'Waterproof German Hanger Pandal at Morabadi',
    category: 'pandal',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
    caption: '15,000 sq ft weatherproof structure with luxury red carpeting.',
    featured: true
  },
  {
    id: 'gal-3',
    title: 'Fresh Orchid & Lily Mandap Floral Arrangement',
    category: 'decoration',
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80',
    caption: 'Handcrafted floral dome structure for auspicious Vidhi Mandap.',
    featured: true
  },
  {
    id: 'gal-4',
    title: 'Royal Multi-Catering Buffet Setup at Lalpur Banquet',
    category: 'catering',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    caption: 'Hygienic brass chafing dishes & live chaat counters.',
    featured: true
  },
  {
    id: 'gal-5',
    title: 'Sangeet DJ Night Sharpy Beam Light Production',
    category: 'lighting',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80',
    caption: 'Concert grade JBL line array with 12 intelligent Sharpy lights.',
    featured: true
  },
  {
    id: 'gal-6',
    title: 'Haldi Swing Floral Canopy Setup at Harmu',
    category: 'decoration',
    imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80',
    caption: 'Vibrant yellow & orange marigold theme with wooden jhula.',
    featured: false
  },
  {
    id: 'gal-7',
    title: 'Pastel Chrome Balloon Ring Birthday Setup',
    category: 'decoration',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Modern ring arc with customized neon birthday sign.',
    featured: false
  },
  {
    id: 'gal-8',
    title: 'Cinematic Bridal Stage Entry with Cold Pyros',
    category: 'wedding',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
    caption: 'Sparkler fountains and low-fog clouds for grand entry.',
    featured: true
  },
  {
    id: 'gal-9',
    title: 'Luxury Velvet VIP Lounge Pandal & Dining Area',
    category: 'pandal',
    imageUrl: 'https://images.unsplash.com/photo-1545232979-fbfd430d47d6?auto=format&fit=crop&w=1000&q=80',
    caption: 'Air-conditioned luxury lounge with crystal chandeliers for VIP guests.',
    featured: true
  },
  {
    id: 'gal-10',
    title: 'Traditional South Indian & North Indian Live Food Counters',
    category: 'catering',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
    caption: 'Multi-cuisine live kitchen stalls managed by expert chefs.',
    featured: false
  },
  {
    id: 'gal-11',
    title: 'Grand Rajwada Entrance Arch Gate with Flower Pillars',
    category: 'wedding',
    imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
    caption: '30-foot welcoming royal entrance gate with fresh carnations & golden pillars.',
    featured: true
  },
  {
    id: 'gal-12',
    title: 'CPCB-Compliant Silent Generator & Heavy Power Setup',
    category: 'lighting',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    caption: '125 KVA silent diesel generator backup for uninterrupted wedding lighting.',
    featured: false
  },
  {
    id: 'gal-13',
    title: 'Exotic Flower Mandap Canopy & Jhumar Ceiling',
    category: 'decoration',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    caption: 'Bangalore imported fresh orchids, lilies, and rose petals ceiling canopy.',
    featured: true
  },
  {
    id: 'gal-14',
    title: 'Religious Jagran & Katha Waterproof Pandal',
    category: 'pandal',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
    caption: 'Large capacity waterproof pandal setup with sound amplification system.',
    featured: false
  },
  {
    id: 'gal-15',
    title: 'Designer Mocktail & Dessert Bar Counter',
    category: 'catering',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    caption: 'Extensive ice-carved mocktail bar and gourmet sweet counters.',
    featured: false
  },
  {
    id: 'gal-16',
    title: '3D Laser & Truss Stage Lighting for Sangeet Night',
    category: 'lighting',
    imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80',
    caption: 'Heavy aluminum square truss with smoke machines and moving beam heads.',
    featured: true
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Rajesh & Sunita Verma',
    role: 'Bride Parents',
    location: 'Kanke Road, Ranchi',
    rating: 5,
    comment: 'Sai Decorations turned our daughter’s wedding at Kanke Resort into an absolute royal dream! The tent house structural quality and fresh flower mandap were praised by every single guest. Truly the best tent house in Ranchi!',
    eventDate: 'February 2026',
    eventType: 'Royal Wedding (800 Guests)'
  },
  {
    id: 'test-2',
    name: 'Anand Kumar Singh',
    role: 'Event Organizer',
    location: 'Morabadi, Ranchi',
    rating: 5,
    comment: 'We hired Sai Decorations for a 3-day corporate and cultural exhibition at Morabadi Ground. Their waterproof German hanger withstands heavy rains effortlessly. 100% reliable sound, generator, and seating delivery.',
    eventDate: 'January 2026',
    eventType: 'Corporate Expo & Trust Pandal'
  },
  {
    id: 'test-3',
    name: 'Priyanka & Vikash Roy',
    role: 'Newlyweds',
    location: 'Lalpur, Ranchi',
    rating: 5,
    comment: 'From our Haldi decoration to DJ sangeet lighting and catering, Sai Decorations handled everything flawlessly! The quote builder tool gave an accurate estimate, and they delivered way beyond our expectations.',
    eventDate: 'November 2025',
    eventType: '3-Day Wedding Celebration'
  },
  {
    id: 'test-4',
    name: 'Dr. Alok Nath Tripathy',
    role: 'Trust Secretary',
    location: 'Doranda, Ranchi',
    rating: 5,
    comment: 'Sai Decorations tent house has been managing our annual Satsang and Puja Trust Pandal for 8 consecutive years. Their safety commitment and polite staff make them Ranchi’s most trusted event partner.',
    eventDate: 'October 2025',
    eventType: 'Annual Puja Pandal'
  }
];

export const LOCALITIES: LocalityItem[] = [
  {
    slug: 'lalpur',
    name: 'Lalpur',
    title: 'Best Tent House & Wedding Decorator in Lalpur, Ranchi',
    description: 'Looking for premium wedding decoration, catering, or tent house services in Lalpur, Ranchi? Sai Decorations provides top-rated event planning, fresh flower mandaps, and DJ sound near Circular Road, Peace Road, and Nucleus Mall area.',
    popularVenues: ['GEL Church Complex Banquets', 'Circular Road Marriage Halls', 'H B Road Party Lawns'],
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    faqs: [
      {
        question: 'Do you offer home haldi & mehendi decoration in Lalpur Ranchi?',
        answer: 'Yes, we provide quick 3-hour setup for home haldi, mehendi, and birthday balloon decor anywhere in Lalpur.'
      }
    ]
  },
  {
    slug: 'kanke',
    name: 'Kanke Road',
    title: 'Luxury Event & Wedding Management in Kanke Road, Ranchi',
    description: 'Kanke Road is home to Ranchi’s grandest wedding lawns and resorts. Sai Decorations specializes in large outdoor German hangers, royal mandaps, 4K video photography, and luxury catering across Kanke Road.',
    popularVenues: ['Kanke Resort Lawns', 'Rock Garden Function Venues', 'Kanke Dam Farmhouses'],
    heroImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    faqs: [
      {
        question: 'Can Sai Decorations build heavy waterproof pandals in Kanke resort lawns?',
        answer: 'Absolutely. We regularly erect 10,000+ sq ft German hangers and rainproof pandals in Kanke resorts.'
      }
    ]
  },
  {
    slug: 'morabadi',
    name: 'Morabadi',
    title: 'Tent House, Trust Pandal & Event Organizer in Morabadi, Ranchi',
    description: 'Morabadi is the heart of cultural rallies, expos, and grand receptions in Ranchi. Sai Decorations delivers certified heavy truss trust pandals, soundless generators, and stage lighting across Morabadi.',
    popularVenues: ['Morabadi Ground Expo Area', 'Tagore Hill Nearby Banquets', 'Oxygen Park Surrounds'],
    heroImage: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&w=1200&q=80',
    faqs: [
      {
        question: 'What sizes of trust pandal can you install at Morabadi Ground?',
        answer: 'We supply custom span pandals from 2,000 sq ft up to 50,000 sq ft with full engineer safety sign-offs.'
      }
    ]
  },
  {
    slug: 'harmu',
    name: 'Harmu',
    title: 'Wedding Planner & Catering Services in Harmu, Ranchi',
    description: 'Providing reliable tent house, floral stages, DJ sound, and specialized catering in Harmu Housing Board, Argora Bypass, and Sahjanand Chowk areas.',
    popularVenues: ['Harmu Community Hall', 'Argora Bypass Marriage Gardens', 'Sahjanand Chowk Banquet Grounds'],
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    faqs: [
      {
        question: 'How fast can Sai Decorations deploy generators in Harmu?',
        answer: 'We dispatch silent DG sets within 90 minutes anywhere in Harmu and Argora.'
      }
    ]
  },
  {
    slug: 'doranda',
    name: 'Doranda',
    title: 'Marriage Decorator & Catering in Doranda & Hinoo, Ranchi',
    description: 'Top-quality wedding arrangements, balloon decoration, sound systems, and catering services in Doranda, Hinoo, Airport Road, and Moti Nagar.',
    popularVenues: ['Doranda Club Lawns', 'Hinoo Main Road Banquets', 'Airport Road Farmhouses'],
    heroImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    faqs: [
      {
        question: 'Do you cater both veg and non-veg menus in Doranda?',
        answer: 'Yes, we have separate dedicated chef teams and equipment for pure veg and non-veg gourmet catering.'
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'tent-house-cost-guide-ranchi-2026',
    title: 'Complete Tent House & Pandal Cost Guide in Ranchi (2026 Rates)',
    excerpt: 'Planning a wedding or event in Ranchi? Learn the current 2026 pricing for standard tents, waterproof German hangers, floral mandaps, and lighting.',
    date: 'February 12, 2026',
    author: 'Sai Decorations Team',
    readTime: '6 min read',
    category: 'Cost Guide',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    keywords: ['tent house in Ranchi cost', 'pandal price Ranchi', 'wedding tent cost Ranchi'],
    content: `
When planning a grand event or wedding in Ranchi, Jharkhand, one of the most critical budget items is the **tent house and pandal arrangement**. 

### 1. Standard Fabric Tent vs. Waterproof German Hangers
* **Standard Fabric Tents:** Range from ₹15 to ₹25 per sq. ft. Ideal for dry winter months (November to February).
* **100% Waterproof German Hangers:** Range from ₹35 to ₹60 per sq. ft. Impervious to sudden monsoons and high winds, making them the gold standard for Morabadi and Kanke Road outdoor venues.

### 2. Mandatory Add-ons to Consider
* **Flooring & Carpeting:** Red synthetic carpet or wooden raised platform (₹8 - ₹18/sq. ft).
* **Generators (DG Sets):** Silent 62.5 kVA backup starting at ₹6,000/day.
* **Ambient Lighting & Sharpy Beams:** Packages from ₹12,000 to ₹45,000.

### Why Choose Sai Decorations Tent House?
With 18+ years serving Ranchi, **Sai Decorations – Tent House & Event Services in Ranchi** provides transparent itemized quotes with no hidden charges. Contact us today for a free on-site survey!
`
  },
  {
    slug: 'top-10-wedding-venues-in-ranchi-and-decor-tips',
    title: 'Top 10 Wedding Venues in Ranchi & How to Decorate Them Beautifully',
    excerpt: 'Discover Ranchi’s finest marriage lawns and banquet halls, along with expert floral decor and lighting tips from Sai Decorations event experts.',
    date: 'January 28, 2026',
    author: 'Chief Designer, Sai Decorations',
    readTime: '8 min read',
    category: 'Wedding Tips',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    keywords: ['best wedding venues Ranchi', 'marriage garden Ranchi decor', 'wedding planners in Ranchi'],
    content: `
Ranchi offers a wonderful mix of lush green farmhouses along Kanke Road and spacious banquet halls in Lalpur and Main Road. Here is how to maximize your venue’s beauty:

1. **Kanke Road Lawns:** Highlight the natural greenery with warm fairy-light tunnels and pastel floral mandaps.
2. **Morabadi Open Grounds:** Perfect for heavy German hanger structures with 50-foot grand entrance arches.
3. **Lalpur & Main Road Banquets:** Utilize elevated LED backdrop stages and crystal chandeliers for compact indoors.

### Professional Decor Tip:
Always align your mandap flowers with the bride’s lehenga color palette for breathtaking candid wedding photographs!
`
  }
];

export const HOME_FAQS = [
  {
    question: 'Why is Sai Decorations considered the best tent house and wedding decorator in Ranchi?',
    answer: 'Sai Decorations – Tent House & Event Services in Ranchi brings over 18 years of experience, having executed 2,500+ successful events across Ranchi. We provide full end-to-end solutions under one roof—including waterproof German hangers, fresh floral mandaps, gourmet catering, DJ sound, 4K video photography, and silent generators.'
  },
  {
    question: 'What areas in Ranchi and Jharkhand do you serve?',
    answer: 'We serve all localities in Ranchi including Lalpur, Kanke Road, Morabadi, Harmu, Doranda, Bariatu, Hinoo, Ratu Road, Namkum, and Chutia, as well as nearby districts such as Ramgarh, Khunti, Hazaribagh, and Purulia.'
  },
  {
    question: 'How can I get an instant cost estimate for my event?',
    answer: 'You can use our online Quote Builder tool on this website. Simply select your event type, guest count, and required services to view an estimated price range, and submit it directly to receive a personalized quote on WhatsApp within 15 minutes.'
  },
  {
    question: 'Do you offer customized packages within specific client budgets?',
    answer: 'Yes! We customize every event plan to fit your specific budget without compromising on structural safety or decorative elegance.'
  }
];
