const $ = (selector) => document.querySelector(selector);
const textNodeSource = new WeakMap();
let currentLanguage = "en";

const languageLabels = {
  en: "English",
  hi: "Hindi",
  ka: "Georgian",
  de: "German",
};

const languageIntro = {
  en: "English",
  hi: "हिन्दी",
  ka: "ქართული",
  de: "Deutsch",
};

const whatsappMessages = {
  en: "Hello Edu Pedia Overseas, I want direct admission support and have a question.",
  hi: "नमस्ते Edu Pedia Overseas, मुझे सीधे प्रवेश में सहायता चाहिए और मेरा एक प्रश्न है।",
  ka: "გამარჯობა Edu Pedia Overseas, მსურს პირდაპირი მიღების მხარდაჭერა და მაქვს კითხვა.",
  de: "Hallo Edu Pedia Overseas, ich moechte Unterstuetzung fuer die direkte Zulassung und habe eine Frage.",
};

const translations = {
  hi: {
    "About Us": "हमारे बारे में",
    Universities: "विश्वविद्यालय",
    "MBBS Fees": "MBBS फीस",
    Process: "प्रक्रिया",
    Contact: "संपर्क",
    "Book Free Counselling": "मुफ्त काउंसलिंग बुक करें",
    "Trusted admission guidance": "विश्वसनीय प्रवेश मार्गदर्शन",
    "Turn every MBBS dream into a guided admission journey.": "हर MBBS सपने को सही मार्गदर्शन वाली प्रवेश यात्रा बनाएं।",
    "Your dream. Our guidance. A successful future. Edu Pedia Overseas helps students get admission in trusted medical universities around the world.": "आपका सपना। हमारा मार्गदर्शन। एक सफल भविष्य। Edu Pedia Overseas छात्रों को दुनिया भर के भरोसेमंद मेडिकल विश्वविद्यालयों में प्रवेश पाने में मदद करता है।",
    "Explore Universities": "विश्वविद्यालय देखें",
    "Loved by students everywhere.": "हर जगह छात्रों द्वारा पसंद किया गया।",
    "Direct WhatsApp support": "सीधा WhatsApp समर्थन",
    "Visa guidance": "वीजा मार्गदर्शन",
    "Post-arrival help": "आगमन के बाद सहायता",
    "Students guided": "मार्गदर्शन पाए छात्र",
    "Years experience": "वर्षों का अनुभव",
    "Student support": "छात्र सहायता",
    "University network": "विश्वविद्यालय नेटवर्क",
    Global: "वैश्विक",
    "About Edu Pedia": "Edu Pedia के बारे में",
    "Admissions support that feels organized, modern, and human.": "प्रवेश सहायता जो संगठित, आधुनिक और मानवीय लगे।",
    "Students should not feel lost while applying abroad. Edu Pedia gives clear university information, direct WhatsApp counselling, and practical support from the first question to arrival abroad.": "विदेश में आवेदन करते समय छात्रों को उलझन महसूस नहीं होनी चाहिए। Edu Pedia स्पष्ट विश्वविद्यालय जानकारी, सीधी WhatsApp काउंसलिंग, और पहले सवाल से विदेश पहुंचने तक व्यावहारिक सहायता देता है।",
    "Expert counselling": "विशेषज्ञ काउंसलिंग",
    "Get step-by-step help choosing the right MBBS path.": "सही MBBS मार्ग चुनने में चरण-दर-चरण सहायता पाएं।",
    "Document and visa support": "दस्तावेज़ और वीजा सहायता",
    "Understand what to prepare before university admission.": "विश्वविद्यालय प्रवेश से पहले क्या तैयार करना है, यह समझें।",
    "Direct admission contact": "सीधा प्रवेश संपर्क",
    "Message on WhatsApp for admission support, questions, and quick guidance.": "प्रवेश सहायता, सवालों और तेज मार्गदर्शन के लिए WhatsApp पर संदेश भेजें।",
    "Top partner universities": "शीर्ष साझेदार विश्वविद्यालय",
    "Explore trusted medical university options.": "भरोसेमंद मेडिकल विश्वविद्यालय विकल्प देखें।",
    Georgia: "जॉर्जिया",
    Uzbekistan: "उज़्बेकिस्तान",
    "View University": "विश्वविद्यालय देखें",
    "Why choose Edu Pedia?": "Edu Pedia क्यों चुनें?",
    "Everything students expect before flying abroad.": "विदेश जाने से पहले छात्रों को जो भी चाहिए।",
    "Clear counselling": "स्पष्ट काउंसलिंग",
    "Understand your options before choosing a country or university.": "देश या विश्वविद्यालय चुनने से पहले अपने विकल्प समझें।",
    "University guidance": "विश्वविद्यालय मार्गदर्शन",
    "Compare trusted universities with a practical admission plan.": "व्यावहारिक प्रवेश योजना के साथ भरोसेमंद विश्वविद्यालयों की तुलना करें।",
    "Fee clarity": "फीस की स्पष्टता",
    "Get a simple cost breakdown before making important decisions.": "महत्वपूर्ण निर्णयों से पहले सरल लागत विवरण पाएं।",
    "Visa direction": "वीजा दिशा-निर्देश",
    "Know what documents and steps are needed for processing.": "प्रक्रिया के लिए जरूरी दस्तावेज़ और चरण जानें।",
    "Travel planning": "यात्रा योजना",
    "Prepare for flights, arrival, and the first days abroad.": "उड़ान, आगमन और विदेश में शुरुआती दिनों की तैयारी करें।",
    "After-arrival help": "आगमन के बाद सहायता",
    "Stay supported when settling into university life.": "विश्वविद्यालय जीवन में बसते समय सहायता पाएं।",
    "Admission process": "प्रवेश प्रक्रिया",
    "Simple steps from first call to flying abroad.": "पहली बातचीत से विदेश उड़ान तक आसान चरण।",
    "Message Edu Pedia": "Edu Pedia को संदेश भेजें",
    "Start with a direct WhatsApp conversation about your goal.": "अपने लक्ष्य के बारे में सीधे WhatsApp बातचीत से शुरू करें।",
    "Choose your route": "अपना मार्ग चुनें",
    "Review country, university, admission, and fee options.": "देश, विश्वविद्यालय, प्रवेश और फीस विकल्प देखें।",
    "Prepare documents": "दस्तावेज़ तैयार करें",
    "Get guidance on the documents needed for admission.": "प्रवेश के लिए जरूरी दस्तावेज़ों पर मार्गदर्शन पाएं।",
    "Visa and travel": "वीजा और यात्रा",
    "Move through visa processing and travel planning.": "वीजा प्रक्रिया और यात्रा योजना में आगे बढ़ें।",
    "Fly abroad": "विदेश उड़ान भरें",
    "Arrive ready with support for your first steps.": "अपने पहले कदमों के लिए सहायता के साथ तैयार होकर पहुंचें।",
    "Direct admission support": "सीधी प्रवेश सहायता",
    "Message Edu Pedia on WhatsApp.": "WhatsApp पर Edu Pedia को संदेश भेजें।",
    "Contact for direct admission and queries": "सीधे प्रवेश और सवालों के लिए संपर्क करें",
    "Tap the button to open WhatsApp with a ready message. Ask about admission, university selection, fees, visa steps, or travel support.": "तैयार संदेश के साथ WhatsApp खोलने के लिए बटन दबाएं। प्रवेश, विश्वविद्यालय चयन, फीस, वीजा चरण या यात्रा सहायता के बारे में पूछें।",
    "Message on WhatsApp": "WhatsApp पर संदेश भेजें",
    "Ask your question": "अपना सवाल पूछें",
    "Get admission guidance": "प्रवेश मार्गदर्शन पाएं",
    "Plan your next step": "अपना अगला कदम तय करें",
    "Student success stories": "छात्र सफलता कहानियां",
    "Real outcomes, cleaner presentation.": "वास्तविक परिणाम, साफ प्रस्तुति।",
    "Edu Pedia helped me understand every step before starting my MBBS journey.": "Edu Pedia ने मेरी MBBS यात्रा शुरू करने से पहले हर चरण समझने में मदद की।",
    "The process felt clear from university selection to visa guidance.": "विश्वविद्यालय चयन से वीजा मार्गदर्शन तक प्रक्रिया स्पष्ट लगी।",
    "From admission to travel support, everything was explained calmly.": "प्रवेश से यात्रा सहायता तक, सब कुछ शांत तरीके से समझाया गया।",
    "Ready to start your journey?": "अपनी यात्रा शुरू करने के लिए तैयार हैं?",
    "Message Edu Pedia for direct admission support.": "सीधी प्रवेश सहायता के लिए Edu Pedia को संदेश भेजें।",
    "WhatsApp Now": "अभी WhatsApp करें",
    "Your trusted partner for MBBS abroad admission.": "विदेश में MBBS प्रवेश के लिए आपका भरोसेमंद साथी।",
    "Quick Links": "त्वरित लिंक",
    Home: "होम",
    "Our Services": "हमारी सेवाएं",
    "Direct Admission": "सीधा प्रवेश",
    "Visa Assistance": "वीजा सहायता",
    "Travel Assistance": "यात्रा सहायता",
    "Post Arrival Support": "आगमन के बाद सहायता",
    "Follow Us": "हमें फॉलो करें",
    "AI Helper": "AI सहायक",
    "Website help": "वेबसाइट सहायता",
    Close: "बंद करें",
    "Hi, I can help with WhatsApp contact, universities, admission steps, and social links.": "नमस्ते, मैं WhatsApp संपर्क, विश्वविद्यालयों, प्रवेश चरणों और सोशल लिंक में मदद कर सकता हूं।",
    Send: "भेजें",
  },
  ka: {
    "About Us": "ჩვენ შესახებ",
    Universities: "უნივერსიტეტები",
    "MBBS Fees": "MBBS საფასური",
    Process: "პროცესი",
    Contact: "კონტაქტი",
    "Book Free Counselling": "დაჯავშნეთ უფასო კონსულტაცია",
    "Trusted admission guidance": "სანდო მიღების კონსულტაცია",
    "Turn every MBBS dream into a guided admission journey.": "აქციეთ ყოველი MBBS ოცნება სწორად დაგეგმილ მიღების გზად.",
    "Your dream. Our guidance. A successful future. Edu Pedia Overseas helps students get admission in trusted medical universities around the world.": "თქვენი ოცნება. ჩვენი გზამკვლევობა. წარმატებული მომავალი. Edu Pedia Overseas ეხმარება სტუდენტებს სანდო სამედიცინო უნივერსიტეტებში ჩარიცხვაში მთელ მსოფლიოში.",
    "Explore Universities": "იხილეთ უნივერსიტეტები",
    "Loved by students everywhere.": "სტუდენტებისთვის საყვარელი ყველგან.",
    "Direct WhatsApp support": "პირდაპირი WhatsApp მხარდაჭერა",
    "Visa guidance": "ვიზის კონსულტაცია",
    "Post-arrival help": "დახმარება ჩასვლის შემდეგ",
    "Students guided": "მართული სტუდენტები",
    "Years experience": "წლიანი გამოცდილება",
    "Student support": "სტუდენტური მხარდაჭერა",
    "University network": "უნივერსიტეტების ქსელი",
    Global: "გლობალური",
    "About Edu Pedia": "Edu Pedia-ს შესახებ",
    "Admissions support that feels organized, modern, and human.": "მიღების მხარდაჭერა, რომელიც ორგანიზებული, თანამედროვე და ადამიანურია.",
    "Students should not feel lost while applying abroad. Edu Pedia gives clear university information, direct WhatsApp counselling, and practical support from the first question to arrival abroad.": "სტუდენტები არ უნდა დაიბნენ საზღვარგარეთ განაცხადის დროს. Edu Pedia გაძლევთ მკაფიო ინფორმაციას უნივერსიტეტებზე, პირდაპირ WhatsApp კონსულტაციას და პრაქტიკულ მხარდაჭერას პირველი კითხვიდან ჩასვლამდე.",
    "Expert counselling": "ექსპერტული კონსულტაცია",
    "Get step-by-step help choosing the right MBBS path.": "მიიღეთ ეტაპობრივი დახმარება სწორი MBBS გზის არჩევაში.",
    "Document and visa support": "დოკუმენტებისა და ვიზის მხარდაჭერა",
    "Understand what to prepare before university admission.": "გაიგეთ, რა უნდა მოამზადოთ უნივერსიტეტში მიღებამდე.",
    "Direct admission contact": "პირდაპირი მიღების კონტაქტი",
    "Message on WhatsApp for admission support, questions, and quick guidance.": "მოგვწერეთ WhatsApp-ზე მიღების მხარდაჭერისთვის, კითხვებისთვის და სწრაფი კონსულტაციისთვის.",
    "Top partner universities": "ტოპ პარტნიორი უნივერსიტეტები",
    "Explore trusted medical university options.": "იხილეთ სანდო სამედიცინო უნივერსიტეტების ვარიანტები.",
    Georgia: "საქართველო",
    Uzbekistan: "უზბეკეთი",
    "View University": "უნივერსიტეტის ნახვა",
    "Why choose Edu Pedia?": "რატომ Edu Pedia?",
    "Everything students expect before flying abroad.": "ყველაფერი, რაც სტუდენტს საზღვარგარეთ გამგზავრებამდე სჭირდება.",
    "Clear counselling": "მკაფიო კონსულტაცია",
    "Understand your options before choosing a country or university.": "ქვეყნის ან უნივერსიტეტის არჩევამდე გაიგეთ თქვენი ვარიანტები.",
    "University guidance": "უნივერსიტეტის შერჩევის მხარდაჭერა",
    "Compare trusted universities with a practical admission plan.": "შეადარეთ სანდო უნივერსიტეტები პრაქტიკული მიღების გეგმით.",
    "Fee clarity": "საფასურის სიცხადე",
    "Get a simple cost breakdown before making important decisions.": "მნიშვნელოვანი გადაწყვეტილებების წინ მიიღეთ ხარჯების მარტივი აღწერა.",
    "Visa direction": "ვიზის მიმართულება",
    "Know what documents and steps are needed for processing.": "გაიგეთ, რა დოკუმენტები და ნაბიჯებია საჭირო პროცესისთვის.",
    "Travel planning": "მგზავრობის დაგეგმვა",
    "Prepare for flights, arrival, and the first days abroad.": "მოემზადეთ ფრენისთვის, ჩასვლისთვის და საზღვარგარეთ პირველი დღეებისთვის.",
    "After-arrival help": "დახმარება ჩასვლის შემდეგ",
    "Stay supported when settling into university life.": "მიიღეთ მხარდაჭერა უნივერსიტეტურ ცხოვრებაში ადაპტაციისას.",
    "Admission process": "მიღების პროცესი",
    "Simple steps from first call to flying abroad.": "მარტივი ნაბიჯები პირველი კონტაქტიდან საზღვარგარეთ გაფრენამდე.",
    "Message Edu Pedia": "მიწერეთ Edu Pedia-ს",
    "Start with a direct WhatsApp conversation about your goal.": "დაიწყეთ პირდაპირი WhatsApp საუბრით თქვენს მიზანზე.",
    "Choose your route": "აირჩიეთ თქვენი გზა",
    "Review country, university, admission, and fee options.": "განიხილეთ ქვეყანა, უნივერსიტეტი, მიღება და საფასურის ვარიანტები.",
    "Prepare documents": "მოამზადეთ დოკუმენტები",
    "Get guidance on the documents needed for admission.": "მიიღეთ კონსულტაცია მიღებისთვის საჭირო დოკუმენტებზე.",
    "Visa and travel": "ვიზა და მგზავრობა",
    "Move through visa processing and travel planning.": "გაიარეთ ვიზის პროცესი და მგზავრობის დაგეგმვა.",
    "Fly abroad": "გაემგზავრეთ საზღვარგარეთ",
    "Arrive ready with support for your first steps.": "ჩადით მომზადებული და მიიღეთ მხარდაჭერა პირველ ნაბიჯებში.",
    "Direct admission support": "პირდაპირი მიღების მხარდაჭერა",
    "Message Edu Pedia on WhatsApp.": "მიწერეთ Edu Pedia-ს WhatsApp-ზე.",
    "Contact for direct admission and queries": "კონტაქტი პირდაპირი მიღებისა და კითხვებისთვის",
    "Tap the button to open WhatsApp with a ready message. Ask about admission, university selection, fees, visa steps, or travel support.": "დააჭირეთ ღილაკს WhatsApp-ის გასახსნელად მზა შეტყობინებით. იკითხეთ მიღებაზე, უნივერსიტეტის არჩევაზე, საფასურზე, ვიზაზე ან მგზავრობის მხარდაჭერაზე.",
    "Message on WhatsApp": "მოგვწერეთ WhatsApp-ზე",
    "Ask your question": "დასვით კითხვა",
    "Get admission guidance": "მიიღეთ მიღების კონსულტაცია",
    "Plan your next step": "დაგეგმეთ შემდეგი ნაბიჯი",
    "Student success stories": "სტუდენტების წარმატების ისტორიები",
    "Real outcomes, cleaner presentation.": "რეალური შედეგები, ნათელი წარმოდგენა.",
    "Edu Pedia helped me understand every step before starting my MBBS journey.": "Edu Pedia დამეხმარა MBBS გზის დაწყებამდე ყველა ნაბიჯის გაგებაში.",
    "The process felt clear from university selection to visa guidance.": "პროცესი მკაფიო იყო უნივერსიტეტის არჩევიდან ვიზის კონსულტაციამდე.",
    "From admission to travel support, everything was explained calmly.": "მიღებიდან მგზავრობის მხარდაჭერამდე, ყველაფერი მშვიდად აიხსნა.",
    "Ready to start your journey?": "მზად ხართ დაიწყოთ თქვენი გზა?",
    "Message Edu Pedia for direct admission support.": "მიწერეთ Edu Pedia-ს პირდაპირი მიღების მხარდაჭერისთვის.",
    "WhatsApp Now": "WhatsApp ახლა",
    "Your trusted partner for MBBS abroad admission.": "თქვენი სანდო პარტნიორი საზღვარგარეთ MBBS მიღებისთვის.",
    "Quick Links": "სწრაფი ბმულები",
    Home: "მთავარი",
    "Our Services": "ჩვენი სერვისები",
    "Direct Admission": "პირდაპირი მიღება",
    "Visa Assistance": "ვიზის დახმარება",
    "Travel Assistance": "მგზავრობის დახმარება",
    "Post Arrival Support": "ჩასვლის შემდგომი მხარდაჭერა",
    "Follow Us": "გამოგვყევით",
    "AI Helper": "AI დამხმარე",
    "Website help": "ვებსაიტის დახმარება",
    Close: "დახურვა",
    "Hi, I can help with WhatsApp contact, universities, admission steps, and social links.": "გამარჯობა, შემიძლია დაგეხმაროთ WhatsApp კონტაქტში, უნივერსიტეტებში, მიღების ნაბიჯებსა და სოციალურ ბმულებში.",
    Send: "გაგზავნა",
  },
  de: {
    "About Us": "Über uns",
    Universities: "Universitäten",
    "MBBS Fees": "MBBS-Gebühren",
    Process: "Ablauf",
    Contact: "Kontakt",
    "Book Free Counselling": "Kostenlose Beratung buchen",
    "Trusted admission guidance": "Verlässliche Zulassungsberatung",
    "Turn every MBBS dream into a guided admission journey.": "Mache jeden MBBS-Traum zu einem geführten Zulassungsweg.",
    "Your dream. Our guidance. A successful future. Edu Pedia Overseas helps students get admission in trusted medical universities around the world.": "Dein Traum. Unsere Beratung. Eine erfolgreiche Zukunft. Edu Pedia Overseas hilft Studierenden bei der Zulassung an vertrauenswürdigen medizinischen Universitäten weltweit.",
    "Explore Universities": "Universitäten ansehen",
    "Loved by students everywhere.": "Von Studierenden überall geschätzt.",
    "Direct WhatsApp support": "Direkte WhatsApp-Unterstützung",
    "Visa guidance": "Visa-Beratung",
    "Post-arrival help": "Hilfe nach der Ankunft",
    "Students guided": "Betreute Studierende",
    "Years experience": "Jahre Erfahrung",
    "Student support": "Studierendenbetreuung",
    "University network": "Universitätsnetzwerk",
    Global: "Global",
    "About Edu Pedia": "Über Edu Pedia",
    "Admissions support that feels organized, modern, and human.": "Zulassungsunterstützung, die organisiert, modern und menschlich wirkt.",
    "Students should not feel lost while applying abroad. Edu Pedia gives clear university information, direct WhatsApp counselling, and practical support from the first question to arrival abroad.": "Studierende sollten sich bei einer Bewerbung im Ausland nicht verloren fühlen. Edu Pedia bietet klare Universitätsinformationen, direkte WhatsApp-Beratung und praktische Unterstützung von der ersten Frage bis zur Ankunft im Ausland.",
    "Expert counselling": "Expertenberatung",
    "Get step-by-step help choosing the right MBBS path.": "Erhalte Schritt-für-Schritt-Hilfe bei der Wahl des richtigen MBBS-Wegs.",
    "Document and visa support": "Dokumenten- und Visa-Unterstützung",
    "Understand what to prepare before university admission.": "Verstehe, was vor der Universitätszulassung vorbereitet werden muss.",
    "Direct admission contact": "Direkter Zulassungskontakt",
    "Message on WhatsApp for admission support, questions, and quick guidance.": "Schreibe auf WhatsApp für Zulassungsunterstützung, Fragen und schnelle Beratung.",
    "Top partner universities": "Top-Partneruniversitäten",
    "Explore trusted medical university options.": "Entdecke vertrauenswürdige medizinische Universitäten.",
    Georgia: "Georgien",
    Uzbekistan: "Usbekistan",
    "View University": "Universität ansehen",
    "Why choose Edu Pedia?": "Warum Edu Pedia?",
    "Everything students expect before flying abroad.": "Alles, was Studierende vor dem Auslandsstart erwarten.",
    "Clear counselling": "Klare Beratung",
    "Understand your options before choosing a country or university.": "Verstehe deine Optionen, bevor du ein Land oder eine Universität auswählst.",
    "University guidance": "Universitätsberatung",
    "Compare trusted universities with a practical admission plan.": "Vergleiche vertrauenswürdige Universitäten mit einem praktischen Zulassungsplan.",
    "Fee clarity": "Klare Gebühren",
    "Get a simple cost breakdown before making important decisions.": "Erhalte eine einfache Kostenübersicht vor wichtigen Entscheidungen.",
    "Visa direction": "Visa-Orientierung",
    "Know what documents and steps are needed for processing.": "Erfahre, welche Dokumente und Schritte für die Bearbeitung nötig sind.",
    "Travel planning": "Reiseplanung",
    "Prepare for flights, arrival, and the first days abroad.": "Bereite dich auf Flüge, Ankunft und die ersten Tage im Ausland vor.",
    "After-arrival help": "Hilfe nach der Ankunft",
    "Stay supported when settling into university life.": "Bleibe unterstützt, während du dich ins Universitätsleben einfindest.",
    "Admission process": "Zulassungsprozess",
    "Simple steps from first call to flying abroad.": "Einfache Schritte vom ersten Kontakt bis zum Flug ins Ausland.",
    "Message Edu Pedia": "Edu Pedia schreiben",
    "Start with a direct WhatsApp conversation about your goal.": "Beginne mit einem direkten WhatsApp-Gespräch über dein Ziel.",
    "Choose your route": "Wähle deinen Weg",
    "Review country, university, admission, and fee options.": "Prüfe Land, Universität, Zulassung und Gebührenoptionen.",
    "Prepare documents": "Dokumente vorbereiten",
    "Get guidance on the documents needed for admission.": "Erhalte Beratung zu den Dokumenten, die für die Zulassung benötigt werden.",
    "Visa and travel": "Visa und Reise",
    "Move through visa processing and travel planning.": "Gehe durch Visa-Bearbeitung und Reiseplanung.",
    "Fly abroad": "Ins Ausland fliegen",
    "Arrive ready with support for your first steps.": "Komme vorbereitet an und erhalte Unterstützung für die ersten Schritte.",
    "Direct admission support": "Direkte Zulassungsunterstützung",
    "Message Edu Pedia on WhatsApp.": "Schreibe Edu Pedia auf WhatsApp.",
    "Contact for direct admission and queries": "Kontakt für direkte Zulassung und Fragen",
    "Tap the button to open WhatsApp with a ready message. Ask about admission, university selection, fees, visa steps, or travel support.": "Tippe auf den Button, um WhatsApp mit einer fertigen Nachricht zu öffnen. Frage nach Zulassung, Universitätswahl, Gebühren, Visa-Schritten oder Reiseunterstützung.",
    "Message on WhatsApp": "Auf WhatsApp schreiben",
    "Ask your question": "Stelle deine Frage",
    "Get admission guidance": "Zulassungsberatung erhalten",
    "Plan your next step": "Plane deinen nächsten Schritt",
    "Student success stories": "Erfolgsgeschichten von Studierenden",
    "Real outcomes, cleaner presentation.": "Echte Ergebnisse, klare Darstellung.",
    "Edu Pedia helped me understand every step before starting my MBBS journey.": "Edu Pedia half mir, jeden Schritt vor Beginn meiner MBBS-Reise zu verstehen.",
    "The process felt clear from university selection to visa guidance.": "Der Ablauf war klar, von der Universitätswahl bis zur Visa-Beratung.",
    "From admission to travel support, everything was explained calmly.": "Von der Zulassung bis zur Reiseunterstützung wurde alles ruhig erklärt.",
    "Ready to start your journey?": "Bereit, deine Reise zu starten?",
    "Message Edu Pedia for direct admission support.": "Schreibe Edu Pedia für direkte Zulassungsunterstützung.",
    "WhatsApp Now": "Jetzt WhatsApp",
    "Your trusted partner for MBBS abroad admission.": "Dein verlässlicher Partner für MBBS-Zulassung im Ausland.",
    "Quick Links": "Schnelllinks",
    Home: "Startseite",
    "Our Services": "Unsere Services",
    "Direct Admission": "Direkte Zulassung",
    "Visa Assistance": "Visa-Hilfe",
    "Travel Assistance": "Reisehilfe",
    "Post Arrival Support": "Unterstützung nach Ankunft",
    "Follow Us": "Folge uns",
    "AI Helper": "AI-Helfer",
    "Website help": "Website-Hilfe",
    Close: "Schließen",
    "Hi, I can help with WhatsApp contact, universities, admission steps, and social links.": "Hallo, ich kann bei WhatsApp-Kontakt, Universitäten, Zulassungsschritten und Social Links helfen.",
    Send: "Senden",
  },
};

Object.assign(translations.hi, {
  "Ask about the website...": "वेबसाइट के बारे में पूछें...",
  "5 stars. Loved by students everywhere.": "5 सितारे। हर जगह छात्रों द्वारा पसंद किया गया।",
  "Open AI helper": "AI सहायक खोलें",
  "AI website helper": "AI वेबसाइट सहायक",
  X: "X",
});

Object.assign(translations.ka, {
  "Ask about the website...": "იკითხეთ ვებსაიტის შესახებ...",
  "5 stars. Loved by students everywhere.": "5 ვარსკვლავი. სტუდენტებისთვის საყვარელი ყველგან.",
  "Open AI helper": "AI დამხმარის გახსნა",
  "AI website helper": "AI ვებსაიტის დამხმარე",
  X: "X",
});

Object.assign(translations.de, {
  "Ask about the website...": "Frage zur Website stellen...",
  "5 stars. Loved by students everywhere.": "5 Sterne. Von Studierenden überall geschätzt.",
  "Open AI helper": "AI-Helfer öffnen",
  "AI website helper": "AI-Website-Helfer",
  X: "X",
});

function openChat() {
  $("#chatbox").hidden = false;
  $("#chatInput").focus();
}

function toggleChat() {
  const chatbox = $("#chatbox");
  chatbox.hidden = !chatbox.hidden;
  if (!chatbox.hidden) $("#chatInput").focus();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createLanguageOverlay() {
  const overlay = document.createElement("div");
  overlay.className = "language-transition";
  overlay.innerHTML = `
    <div class="language-transition-card">
      <span>Switching language</span>
      <strong></strong>
    </div>
  `;
  document.body.appendChild(overlay);
  return overlay;
}

const languageOverlay = createLanguageOverlay();

function translatedText(source, lang) {
  if (lang === "en") return source;
  return translations[lang]?.[source] || source;
}

function translateTextNodes(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    if (!textNodeSource.has(node)) {
      textNodeSource.set(node, node.nodeValue.trim());
    }
    const source = textNodeSource.get(node);
    const translated = translatedText(source, lang);
    const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  });
}

function translateAttributes(lang) {
  document.querySelectorAll("[placeholder]").forEach((element) => {
    if (!element.dataset.sourcePlaceholder) {
      element.dataset.sourcePlaceholder = element.getAttribute("placeholder");
    }
    element.setAttribute("placeholder", translatedText(element.dataset.sourcePlaceholder, lang));
  });

  document.querySelectorAll("[aria-label]").forEach((element) => {
    if (!element.dataset.sourceAriaLabel) {
      element.dataset.sourceAriaLabel = element.getAttribute("aria-label");
    }
    element.setAttribute("aria-label", translatedText(element.dataset.sourceAriaLabel, lang));
  });
}

function updateWhatsAppLinks(lang) {
  const message = encodeURIComponent(whatsappMessages[lang] || whatsappMessages.en);
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    link.href = `https://wa.me/995579263930?text=${message}`;
  });
}

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.title = lang === "en" ? "Edu Pedia Overseas" : translatedText("Edu Pedia Overseas", lang);
  translateTextNodes(lang);
  translateAttributes(lang);
  updateWhatsAppLinks(lang);
}

function playLanguageIntro(lang) {
  languageOverlay.querySelector("strong").textContent = languageIntro[lang] || languageLabels[lang];
  languageOverlay.classList.add("show");
  window.setTimeout(() => languageOverlay.classList.remove("show"), 1050);
}

function answerQuestion(question) {
  const text = question.toLowerCase();
  const answers = {
    en: {
      admission: "For direct admission support, tap the WhatsApp button and message Edu Pedia at +995 579 263 930.",
      contact: "Use the WhatsApp contact section. It opens a ready message to +995 579 263 930 for admission and questions.",
      university: "The Universities section shows BAU International University Batumi, KMI Medical Institute, and European University.",
      process: "The admission process goes from WhatsApp contact to university choice, documents, visa and travel, then flying abroad.",
      social: "The social links are in the footer: YouTube, X, Instagram, and Facebook.",
      fallback: "I can help with WhatsApp contact, universities, admission steps, visa support, travel guidance, and social links.",
    },
    hi: {
      admission: "सीधी प्रवेश सहायता के लिए WhatsApp बटन दबाएं और Edu Pedia को +995 579 263 930 पर संदेश भेजें।",
      contact: "WhatsApp संपर्क सेक्शन का उपयोग करें। यह प्रवेश और सवालों के लिए +995 579 263 930 पर तैयार संदेश खोलता है।",
      university: "विश्वविद्यालय सेक्शन में BAU International University Batumi, KMI Medical Institute और European University हैं।",
      process: "प्रवेश प्रक्रिया WhatsApp संपर्क से शुरू होकर विश्वविद्यालय चयन, दस्तावेज़, वीजा और यात्रा तक जाती है।",
      social: "सोशल लिंक footer में हैं: YouTube, X, Instagram और Facebook।",
      fallback: "मैं WhatsApp संपर्क, विश्वविद्यालयों, प्रवेश चरणों, वीजा सहायता, यात्रा मार्गदर्शन और सोशल लिंक में मदद कर सकता हूं।",
    },
    ka: {
      admission: "პირდაპირი მიღების მხარდაჭერისთვის დააჭირეთ WhatsApp ღილაკს და მიწერეთ Edu Pedia-ს ნომერზე +995 579 263 930.",
      contact: "გამოიყენეთ WhatsApp კონტაქტის სექცია. ის გახსნის მზა შეტყობინებას ნომერზე +995 579 263 930.",
      university: "უნივერსიტეტების სექციაში არის BAU International University Batumi, KMI Medical Institute და European University.",
      process: "მიღების პროცესი იწყება WhatsApp კონტაქტით და გრძელდება უნივერსიტეტის არჩევით, დოკუმენტებით, ვიზითა და მგზავრობით.",
      social: "სოციალური ბმულები footer-შია: YouTube, X, Instagram და Facebook.",
      fallback: "შემიძლია დაგეხმაროთ WhatsApp კონტაქტში, უნივერსიტეტებში, მიღების ნაბიჯებში, ვიზაში, მგზავრობასა და სოციალურ ბმულებში.",
    },
    de: {
      admission: "Für direkte Zulassungsunterstützung tippe auf den WhatsApp-Button und schreibe Edu Pedia unter +995 579 263 930.",
      contact: "Nutze den WhatsApp-Kontaktbereich. Er öffnet eine fertige Nachricht an +995 579 263 930 für Zulassung und Fragen.",
      university: "Im Universitätsbereich findest du BAU International University Batumi, KMI Medical Institute und European University.",
      process: "Der Zulassungsprozess führt vom WhatsApp-Kontakt zur Universitätswahl, Dokumenten, Visa und Reise.",
      social: "Die Social Links stehen im Footer: YouTube, X, Instagram und Facebook.",
      fallback: "Ich kann bei WhatsApp-Kontakt, Universitäten, Zulassungsschritten, Visa, Reiseberatung und Social Links helfen.",
    },
  };
  const copy = answers[currentLanguage] || answers.en;
  if (text.includes("apply") || text.includes("application") || text.includes("admission")) {
    return copy.admission;
  }
  if (text.includes("whatsapp") || text.includes("phone") || text.includes("contact")) {
    return copy.contact;
  }
  if (text.includes("university") || text.includes("universities")) {
    return copy.university;
  }
  if (text.includes("visa") || text.includes("travel") || text.includes("process")) {
    return copy.process;
  }
  if (text.includes("social") || text.includes("instagram") || text.includes("youtube") || text.includes("facebook")) {
    return copy.social;
  }
  return copy.fallback;
}

$("#exploreUniversities").addEventListener("click", () => {
  document.querySelector("#universities").scrollIntoView({ behavior: "smooth" });
});

const languageMenu = $(".language-menu");
const languageTrigger = $(".language-trigger");

languageTrigger.addEventListener("click", () => {
  const isOpen = languageMenu.classList.toggle("open");
  languageTrigger.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".language-options button").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang || "en";
    document.querySelectorAll(".language-options button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    languageTrigger.querySelector("span:last-child").textContent = languageLabels[lang];
    languageMenu.classList.remove("open");
    languageTrigger.setAttribute("aria-expanded", "false");
    playLanguageIntro(lang);
    window.setTimeout(() => setLanguage(lang), 260);
  });
});

const universityGrid = $(".university-grid");

document.querySelectorAll(".university-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    universityGrid.classList.add("hover-active");
    card.classList.add("is-hovered");
  });

  card.addEventListener("mouseleave", () => {
    universityGrid.classList.remove("hover-active");
    card.classList.remove("is-hovered");
  });

  card.addEventListener("click", () => {
    const wasActive = card.classList.contains("is-active");
    document.querySelectorAll(".university-card").forEach((item) => item.classList.remove("is-active"));
    universityGrid.classList.toggle("has-active", !wasActive);
    if (!wasActive) card.classList.add("is-active");
  });
});

document.addEventListener("click", (event) => {
  if (!universityGrid.contains(event.target)) {
    universityGrid.classList.remove("has-active");
    document.querySelectorAll(".university-card").forEach((item) => item.classList.remove("is-active"));
  }
});

document.addEventListener("click", (event) => {
  if (!languageMenu.contains(event.target)) {
    languageMenu.classList.remove("open");
    languageTrigger.setAttribute("aria-expanded", "false");
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.requestAnimationFrame(() => {
          entry.target.classList.add("in-view");
          if (entry.target.classList.contains("reveal-universities")) {
            window.setTimeout(() => entry.target.classList.add("reveal-finished"), 950);
          }
        });
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
);

document.querySelectorAll(".reveal-process, .reveal-stories, .reveal-universities").forEach((section) => {
  section.classList.remove("in-view", "reveal-finished");
  revealObserver.observe(section);
});

$("#chatToggle").addEventListener("click", toggleChat);
$("#closeChat").addEventListener("click", () => {
  $("#chatbox").hidden = true;
});

$("#chatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#chatInput");
  const question = input.value.trim();
  if (!question) return;

  const messages = $("#chatMessages");
  messages.insertAdjacentHTML("beforeend", `<p class="user-message">${escapeHtml(question)}</p>`);
  messages.insertAdjacentHTML("beforeend", `<p class="bot-message">${escapeHtml(answerQuestion(question))}</p>`);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
});

const dot = $(".cursor-dot");
const ring = $(".cursor-ring");

window.addEventListener("mousemove", (event) => {
  const position = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  dot.style.transform = position;
  ring.style.transform = position;
}, { passive: true });

document.querySelectorAll("a, button, input, textarea").forEach((element) => {
  element.addEventListener("mouseenter", () => ring.classList.add("active"));
  element.addEventListener("mouseleave", () => ring.classList.remove("active"));
});
