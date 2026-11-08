// scripts/batch2_questions_1.js
// Batch 2 - Part 1: 50 Questions (25 Quran & 25 Hadith)
// Verified according to the Holy Quran and Sahih Sunnah

const batch1 = [
  // ==========================================
  // 1. القرآن الكريم وعلومه (25 سؤالاً: 301 - 325)
  // ==========================================
  {
    id: "quran_0301",
    numericId: 301,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "easy",
    question: "ما هي أطول آية في القرآن الكريم، وفي أي سورة تقع؟",
    options: ["آية الكرسي في سورة البقرة", "آية الدين في سورة البقرة", "آية الميراث في سورة النساء", "آية الوضوء في سورة المائدة"],
    choices: ["آية الكرسي في سورة البقرة", "آية الدين في سورة البقرة", "آية الميراث في سورة النساء", "آية الوضوء في سورة المائدة"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "أطول آية في القرآن الكريم هي آية الدَّين (الآية 282 من سورة البقرة)، وتتناول أحكام توثيق المعاملات المالية والديون وكتابتها والإشهاد عليها.",
    source: {
      type: "quran",
      reference: "سورة البقرة، الآية 282",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: "تسمى أيضاً آية المداينة"
  },
  {
    id: "quran_0302",
    numericId: 302,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "easy",
    question: "ما هي السورة التي تعدل قراءتها ثلث القرآن الكريم كما ثبت في الحديث الصحيح؟",
    options: ["سورة الإخلاص", "سورة الفاتحة", "سورة يس", "سورة الملك"],
    choices: ["سورة الإخلاص", "سورة الفاتحة", "سورة يس", "سورة الملك"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "قال النبي ﷺ: «قل هو الله أحد تعدل ثلث القرآن»؛ وذلك لاشتمالها الصرف على صفات الله تعالى والتوحيد الخالص.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب فضائل القرآن، حديث رقم 5015",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0303",
    numericId: 303,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "تفسير القرآن الكريم",
    difficulty: "medium",
    question: "ما هي السورة التي تسمى «عروس القرآن» كما اشتُهر عند المفسرين؟",
    options: ["سورة الرحمن", "سورة يوسف", "سورة مريم", "سورة الواقعة"],
    choices: ["سورة الرحمن", "سورة يوسف", "سورة مريم", "سورة الواقعة"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "اشتهرت سورة الرحمن بلقب «عروس القرآن» لجمال أسلوبها وتناسق فواصلها، وتكرار قوله تعالى: {فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ}.",
    source: {
      type: "tafsir",
      reference: "تفسير ابن كثير، مقدمة سورة الرحمن؛ ومصنف ابن أبي شيبة",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0304",
    numericId: 304,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "easy",
    question: "كم عدد سجدات التلاوة المجمع عليها في القرآن الكريم؟",
    options: ["10 سجدات", "12 سجدة", "15 سجدة", "7 سجدات"],
    choices: ["10 سجدات", "12 سجدة", "15 سجدة", "7 سجدات"],
    correctAnswerIndex: 2,
    correct: 2,
    explanation: "يحتوي المصحف الشريف على 15 موضعاً لسجود التلاوة على الراجح من أقوال أهل العلم، منها سجدتان في سورة الحج.",
    source: {
      type: "quran_sciences",
      reference: "الإتقان في علوم القرآن للسيوطي، نوع سجدات القرآن",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0305",
    numericId: 305,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "تفسير القرآن الكريم",
    difficulty: "medium",
    question: "ما المعنى المعتمد في تفسير قوله تعالى: {وَالصُّبْحِ إِذَا تَنَفَّسَ} في سورة التكوير؟",
    options: ["إذا هبت رياحه", "إذا انشق ضوؤه وأقبل بنوره", "إذا زاد حره", "إذا غابت نجومه"],
    choices: ["إذا هبت رياحه", "إذا انشق ضوؤه وأقبل بنوره", "إذا زاد حره", "إذا غابت نجومه"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "معنى {تَنَفَّسَ} عند أئمة التفسير: أي انشق ضوء الفجر وامتد وأقبل بالنور وذهب الظلام.",
    source: {
      type: "tafsir",
      reference: "جامع البيان للطبري، وتفسير ابن كثير، سورة التكوير: 18",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0306",
    numericId: 306,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "hard",
    question: "ما هي السورة التي تنتهي جميع آياتها بحرف السين؟",
    options: ["سورة الناس", "سورة يونس", "سورة عبس", "سورة الشمس"],
    choices: ["سورة الناس", "سورة يونس", "سورة عبس", "سورة الشمس"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "سورة الناس تتكون من 6 آيات، وجميع فواصلها تنتهي بحرف السين: (النَّاسِ، النَّاسِ، النَّاسِ، الْخَنَّاسِ، النَّاسِ، وَالنَّاسِ).",
    source: {
      type: "quran",
      reference: "المصحف الشريف، سورة الناس (114)",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0307",
    numericId: 307,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "medium",
    question: "ما هما السورتان اللتان تِسميان بـ «الزهراوين» كما ورد في الحديث النبوي؟",
    options: ["الفاتحة والإخلاص", "البقرة وآل عمران", "الأنعام والأعراف", "الضحى والشرح"],
    choices: ["الفاتحة والإخلاص", "البقرة وآل عمران", "الأنعام والأعراف", "الضحى والشرح"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "قال رسول الله ﷺ: «اقْرَءُوا الزَّهْرَاوَيْنِ: الْبَقَرَةَ، وَسُورَةَ آلِ عِمْرَانَ، فَإِنَّهُمَا تَأْتِيَانِ يَوْمَ الْقِيَامَةِ كَأَنَّهُمَا غَمَامَتَانِ...».",
    source: {
      type: "hadith",
      reference: "صحيح مسلم، كتاب صلاة المسافرين وقصرها، حديث رقم 804",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0308",
    numericId: 308,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "تفسير القرآن الكريم",
    difficulty: "medium",
    question: "ما المقصود بـ «الرَّقِيمِ» في قوله تعالى: {أَمْ حَسِبْتَ أَنَّ أَصْحَابَ الْكَهْفِ وَالرَّقِيمِ كَانُوا مِنْ آيَاتِنَا عَجَبًا}؟",
    options: ["اسم كلبهم", "الكتاب أو اللوح المرقوم الذي كُتبت فيه أسماؤهم وقصتهم", "اسم الجبل الذي فيه الكهف", "اسم الوادي"],
    choices: ["اسم كلبهم", "الكتاب أو اللوح المرقوم الذي كُتبت فيه أسماؤهم وقصتهم", "اسم الجبل الذي فيه الكهف", "اسم الوادي"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "قال ابن عباس ومجاهد وقتادة: الرقيم هو الكتاب أو اللوح المرقوم (أي المكتوب) الذي كُتبت فيه أسماؤهم وخبرهم ونُصب على باب الكهف.",
    source: {
      type: "tafsir",
      reference: "تفسير الطبري وابن كثير، سورة الكهف: 9",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0309",
    numericId: 309,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "hard",
    question: "كم حزباً في القرآن الكريم وفق التقسيم الاصطلاحي المعتمد في المصاحف؟",
    options: ["30 حزباً", "60 حزباً", "114 حزباً", "120 حزباً"],
    choices: ["30 حزباً", "60 حزباً", "114 حزباً", "120 حزباً"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "يقسم القرآن الكريم إلى 30 جزءاً، وكل جزء يشتمل على حزبين، فيكون مجموع أحزاب القرآن الكريم 60 حزباً كاملاً.",
    source: {
      type: "quran_sciences",
      reference: "التبيان في آداب حملة القرآن للنووي، فصل في تجزئة القرآن وأحزابه",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0310",
    numericId: 310,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "easy",
    question: "ما هي أقصر سورة في القرآن الكريم من حيث عدد الآيات والكلمات؟",
    options: ["سورة النصر", "سورة العصر", "سورة الكوثر", "سورة الإخلاص"],
    choices: ["سورة النصر", "سورة العصر", "سورة الكوثر", "سورة الإخلاص"],
    correctAnswerIndex: 2,
    correct: 2,
    explanation: "سورة الكوثر هي أقصر سور القرآن الكريم، وتتألف من 3 آيات و10 كلمات فقط.",
    source: {
      type: "quran",
      reference: "المصحف الشريف، سورة الكوثر (108)",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0311",
    numericId: 311,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "تفسير القرآن الكريم",
    difficulty: "medium",
    question: "في قوله تعالى: {فَلَا أُقْسِمُ بِالْخُنَّسِ * الْجَوَارِ الْكُنَّسِ}، ما المراد بـ «الْخُنَّسِ»؟",
    options: ["النجوم والكواكب التي تغيب وتختفي بالنهار", "الملائكة الكرام", "رياح الشتاء", "أمواج البحر"],
    choices: ["النجوم والكواكب التي تغيب وتختفي بالنهار", "الملائكة الكرام", "رياح الشتاء", "أمواج البحر"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "الخُنَّس هي النجوم التي تخنس وتستتر في النهار عند طلوع الشمس، والجوار الكنس هي التي تجري في فلكها ثم تكنس أي تختفي في مغاربها.",
    source: {
      type: "tafsir",
      reference: "تفسير ابن كثير، سورة التكوير: 15-16؛ ومعجم مقاييس اللغة لابن فارس",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0312",
    numericId: 312,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "hard",
    question: "كم عدد السور التي تبدأ بالحروف المقطعة (الحواميم السبعة) في القرآن الكريم؟",
    options: ["5 سور", "7 سور تبدأ بـ (حم)", "9 سور", "4 سور"],
    choices: ["5 سور", "7 سور تبدأ بـ (حم)", "9 سور", "4 سور"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "الحواميم سبع سور متتالية تبدأ بالحرفين المقطعين (حم): غافر، فصلت، الشورى، الزخرف، الدخان، الجاثية، الأحقاف.",
    source: {
      type: "quran_sciences",
      reference: "البرهان في علوم القرآن للزركشي، فصل فواتح السور",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0313",
    numericId: 313,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "easy",
    question: "ما هي السورة الوحيدة في القرآن الكريم التي لا تبتدئ بالبسملة؟",
    options: ["سورة الأنفال", "سورة التوبة (براءة)", "سورة الفاتحة", "سورة يونس"],
    choices: ["سورة الأنفال", "سورة التوبة (براءة)", "سورة الفاتحة", "سورة يونس"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "سورة التوبة هي السورة الوحيدة التي لا تبدأ بـ «بسم الله الرحمن الرحيم»، لأنها نزلت في البراءة من المشركين والعهد وإعلان الجهاد.",
    source: {
      type: "quran_sciences",
      reference: "الإتقان في علوم القرآن للسيوطي، وجامع الترمذي حديث رقم 3086",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0314",
    numericId: 314,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "تفسير القرآن الكريم",
    difficulty: "medium",
    question: "ما معنى كلمة «الصَّمَدُ» في قوله تعالى: {اللَّهُ الصَّمَدُ}؟",
    options: ["القوي الشديد", "السيد الذي يُصمد إليه وتُقصد حوائج الخلائق كلها عنده", "الأول والآخر", "العالم بالغيب"],
    choices: ["القوي الشديد", "السيد الذي يُصمد إليه وتُقصد حوائج الخلائق كلها عنده", "الأول والآخر", "العالم بالغيب"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "الصمد عند جمهور المفسرين واللغويين هو السيد الكامل في سيادته الذي تصمد إليه الخلائق في حوائجها ورغائبها ولا يُستغنى عنه بحال.",
    source: {
      type: "tafsir",
      reference: "تفسير الطبري وتفسير ابن كثير، سورة الإخلاص: 2",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0315",
    numericId: 315,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "hard",
    question: "ما هي السورة التي ذكرت فيها البسملة مرتين اثنتين؟",
    options: ["سورة النمل", "سورة سبأ", "سورة القصص", "سورة النحل"],
    choices: ["سورة النمل", "سورة سبأ", "سورة القصص", "سورة النحل"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "سورة النمل ذُكرت فيها البسملة في مطلعها كعادة السور، وذُكرت ثانية في ثناياها في الآية 30 في كتاب سليمان عليه السلام: {إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ}.",
    source: {
      type: "quran",
      reference: "سورة النمل، الآية 30",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0316",
    numericId: 316,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "تفسير القرآن الكريم",
    difficulty: "medium",
    question: "ما المراد بـ «الكوثر» الذي أعطاه الله لنبيه في قوله: {إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ}؟",
    options: ["القرآن العظيم", "نهر عظيم في الجنة حافتاه قباب اللؤلؤ المجوف والخير الكثير", "النصر والتمكين", "الصحابة الكرام"],
    choices: ["القرآن العظيم", "نهر عظيم في الجنة حافتاه قباب اللؤلؤ المجوف والخير الكثير", "النصر والتمكين", "الصحابة الكرام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "فسر النبي ﷺ الكوثر بأنه نهر وعده إياه ربه في الجنة، ماؤه أبيض من اللبن وأحلى من العسل، وهو من الخير الكثير الممنوح له ﷺ.",
    source: {
      type: "hadith",
      reference: "صحيح مسلم، كتاب الصلاة، حديث رقم 400",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0317",
    numericId: 317,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "expert",
    question: "من هو الصحابي الجليل الوحيد الذي ذُكر اسمه صريحاً في آيات القرآن الكريم؟",
    options: ["أبو بكر الصديق", "زيد بن حارثة", "عمر بن الخطاب", "علي بن أبي طالب"],
    choices: ["أبو بكر الصديق", "زيد بن حارثة", "عمر بن الخطاب", "علي بن أبي طالب"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "زيد بن حارثة رضي الله عنه هو الصحابي الوحيد المذكور باسمه صراحة في القرآن الكريم في قوله تعالى: {فَلَمَّا قَضَىٰ زَيْدٌ مِّنْهَا وَطَرًا زَوَّجْنَاكَهَا}.",
    source: {
      type: "quran",
      reference: "سورة الأحزاب، الآية 37",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0318",
    numericId: 318,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "medium",
    question: "ما هي أعظم سورة في القرآن الكريم بنص الحديث النبوي الشريف؟",
    options: ["سورة البقرة", "سورة الفاتحة (أم الكتاب)", "سورة يس", "سورة الإخلاص"],
    choices: ["سورة البقرة", "سورة الفاتحة (أم الكتاب)", "سورة يس", "سورة الإخلاص"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "قال النبي ﷺ لأبي سعيد بن المعلى: «لأعلمنك سورة هي أعظم سورة في القرآن... هي: {الحمد لله رب العالمين}، السبع المثاني، والقرآن العظيم».",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب التفسير، حديث رقم 4474",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0319",
    numericId: 319,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "تفسير القرآن الكريم",
    difficulty: "medium",
    question: "في سورة النحل، ما المقصود بـ «الأنعام» المذكورة في قوله: {وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً}؟",
    options: ["الخيول والبغال والحمير", "الإبل والبقر والغنم (الضأن والمعز)", "جميع الحيوانات البرية", "الطيور"],
    choices: ["الخيول والبغال والحمير", "الإبل والبقر والغنم (الضأن والمعز)", "جميع الحيوانات البرية", "الطيور"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "الأنعام في لغة القرآن واصطلاح الشريعة هي الأزواج الثمانية: الإبل، والبقر، والضأن، والمعز، ذكوراً وإناثاً.",
    source: {
      type: "tafsir",
      reference: "سورة الأنعام: 143-144؛ وتفسير القرطبي لسورة النحل: 66",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0320",
    numericId: 320,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "easy",
    question: "في أي شهر أنزل القرآن الكريم جملة واحدة إلى بيت العزة في السماء الدنيا؟",
    options: ["شهر رمضان المبارك", "شهر رجب", "شهر ذي الحجة", "شهر شعبان"],
    choices: ["شهر رمضان المبارك", "شهر رجب", "شهر ذي الحجة", "شهر شعبان"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "أنزل القرآن الكريم في ليلة القدر المباركة من شهر رمضان، قال تعالى: {شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ}.",
    source: {
      type: "quran",
      reference: "سورة البقرة، الآية 185؛ وسورة القدر: 1",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0321",
    numericId: 321,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "hard",
    question: "من هو الصحابي الذي أمره الخليفة أبو بكر الصديق بجمع القرآن الكريم في مصحف واحد؟",
    options: ["زيد بن ثابت رضي الله عنه", "علي بن أبي طالب رضي الله عنه", "أبي بن كعب رضي الله عنه", "عبد الله بن مسعود رضي الله عنه"],
    choices: ["زيد بن ثابت رضي الله عنه", "علي بن أبي طالب رضي الله عنه", "أبي بن كعب رضي الله عنه", "عبد الله بن مسعود رضي الله عنه"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "اختار أبو بكر وعمر رضي الله عنهما زيد بن ثابت لكتابة وجمع القرآن لأنه كان شاباً عدلاً حافظاً لكتاب الله وكان يكتب الوحي لرسول الله ﷺ.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب فضائل القرآن، حديث رقم 4986",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0322",
    numericId: 322,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "تفسير القرآن الكريم",
    difficulty: "medium",
    question: "ما معنى «الأَبْتَرُ» في قوله تعالى مسلياً لنبيه: {إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ}؟",
    options: ["الفقير المحتاج", "المقطوع ذكره وأثره من كل خير", "الضال عن السبيل", "الكاذب المفترى"],
    choices: ["الفقير المحتاج", "المقطوع ذكره وأثره من كل خير", "الضال عن السبيل", "الكاذب المفترى"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "الأبتر في لغة العرب هو المقطوع، والمعنى: إن مبغضك يا محمد هو المقطوع أثره وذكره من كل خير، بينما ذكرك مرفوع إلى يوم الدين.",
    source: {
      type: "tafsir",
      reference: "تفسير الطبري وابن كثير، سورة الكوثر: 3",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0323",
    numericId: 323,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "expert",
    question: "كم عدد السور المكية وكم عدد السور المدنية في المصحف الشريف وفق المشهور؟",
    options: ["86 مكية و28 مدنية", "70 مكية و44 مدنية", "90 مكية و24 مدنية", "60 مكية و54 مدنية"],
    choices: ["86 مكية و28 مدنية", "70 مكية و44 مدنية", "90 مكية و24 مدنية", "60 مكية و54 مدنية"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "المشهور عند علماء علوم القرآن أن السور المكية (ما نزل قبل الهجرة) 86 سورة، والمدنية (ما نزل بعد الهجرة) 28 سورة، ومجموعها 114 سورة.",
    source: {
      type: "quran_sciences",
      reference: "الإتقان في علوم القرآن للسيوطي، النوع الأول: المكي والمدني",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0324",
    numericId: 324,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "تفسير القرآن الكريم",
    difficulty: "easy",
    question: "ما اسم الجبل الذي استوت عليه سفينة نوح عليه السلام كما نص القرآن الكريم؟",
    options: ["جبل الطور", "جبل الجودي", "جبل أحد", "جبل حراء"],
    choices: ["جبل الطور", "جبل الجودي", "جبل أحد", "جبل حراء"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "قال الله تعالى في سورة هود: {وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ وَيَا سَمَاءُ أَقْلِعِي وَغِيضَ الْمَاءُ وَقُضِيَ الْأَمْرُ وَاسْتَوَتْ عَلَى الْجُودِيِّ}.",
    source: {
      type: "quran",
      reference: "سورة هود، الآية 44",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "quran_0325",
    numericId: 325,
    category: "القرآن الكريم",
    categoryId: "quran",
    targetCategory: "القرآن الكريم وعلومه",
    difficulty: "medium",
    question: "ما هي السورة التي تسمى سورة «المنافقين والفاضحة» لأنها كشفت أسرارهم وأفعالهم؟",
    options: ["سورة التوبة", "سورة النساء", "سورة المنافقون", "سورة الأحزاب"],
    choices: ["سورة التوبة", "سورة النساء", "سورة المنافقون", "سورة الأحزاب"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "قال ابن عباس رضي الله عنهما: سورة التوبة هي «الفاضحة»، ما زالت تنزل: (ومنهم.. ومنهم..) حتى خافوا ألا يبقى أحد إلا ذُكر فيها.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب التفسير، حديث رقم 4882",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },

  // ==========================================
  // 2. الحديث الشريف وعلوم الحديث (25 سؤالاً: 326 - 350)
  // ==========================================
  {
    id: "hadith_0326",
    numericId: 326,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "easy",
    question: "ما هو أصح كتاب بعد كتاب الله عز وجل بإجماع علماء الأمة الإسلامية؟",
    options: ["سنن أبي داود", "صحيح البخاري", "موطأ الإمام مالك", "مسند الإمام أحمد"],
    choices: ["سنن أبي داود", "صحيح البخاري", "موطأ الإمام مالك", "مسند الإمام أحمد"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "أجمع علماء المسلمين على أن «الجامع المسند الصحيح» للإمام البخاري هو أصح كتاب بعد كتاب الله، يليه صحيح الإمام مسلم.",
    source: {
      type: "hadith_sciences",
      reference: "مقدمة ابن الصلاح في علوم الحديث، ومقدمة فتح الباري لابن حجر",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0327",
    numericId: 327,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "easy",
    question: "ما هو الحديث الذي صدّر به الإمام البخاري كتابه الصحيح، واعتبره العلماء ثلث العلم؟",
    options: ["حديث: «طلب العلم فريضة»", "حديث: «إنما الأعمال بالنيات»", "حديث: «الدين النصيحة»", "حديث: «بني الإسلام على خمس»"],
    choices: ["حديث: «طلب العلم فريضة»", "حديث: «إنما الأعمال بالنيات»", "حديث: «الدين النصيحة»", "حديث: «بني الإسلام على خمس»"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "افتتح البخاري صحيحه بحديث عمر بن الخطاب رضي الله عنه: «إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى...»؛ لبيان إخلاص القصد لله.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب بدء الوحي، حديث رقم 1",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0328",
    numericId: 328,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "medium",
    question: "ما تعريف الحديث «المتواتر» في مصطلح أهل الحديث؟",
    options: ["ما رواه صحابي واحد فقط", "ما رواه جمع غفير عن جمع غفير تحيل العادة تواطؤهم على الكذب من أول السند إلى منتهاه", "الحديث الذي في سنده راوٍ ضعيف", "ما رواه الإمامان البخاري ومسلم فقط"],
    choices: ["ما رواه صحابي واحد فقط", "ما رواه جمع غفير عن جمع غفير تحيل العادة تواطؤهم على الكذب من أول السند إلى منتهاه", "الحديث الذي في سنده راوٍ ضعيف", "ما رواه الإمامان البخاري ومسلم فقط"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "الحديث المتواتر هو ما نقله جمع كبير يستحيل تواطؤهم على الكذب عن مثلهم إلى منتهاه ويكون مستنده الحس، وهو يفيد العلم اليقيني القطعي.",
    source: {
      type: "hadith_sciences",
      reference: "نخبة الفكر لابن حجر العسقلاني، مبحث المتواتر والآحاد",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0329",
    numericId: 329,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "medium",
    question: "من هو الصحابي الذي روى عنه النبي ﷺ حديث الجساسة والمسيح الدجال وهو من مسلمة أهل الكتاب؟",
    options: ["تميم الداري رضي الله عنه", "سلمان الفارسي رضي الله عنه", "عبد الله بن سلام رضي الله عنه", "صهيب الرومي رضي الله عنه"],
    choices: ["تميم الداري رضي الله عنه", "سلمان الفارسي رضي الله عنه", "عبد الله بن سلام رضي الله عنه", "صهيب الرومي رضي الله عنه"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "روى تميم بن أوس الداري رضي الله عنه قصة رؤيته للجساسة والدجال في جزيرة بحرية، وحدث النبي ﷺ أصحابه بذلك على المنبر تصديقاً لما كان يخبرهم به.",
    source: {
      type: "hadith",
      reference: "صحيح مسلم، كتاب الفتن وأشراط الساعة، حديث رقم 2942",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0330",
    numericId: 330,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "hard",
    question: "ما المقصود بالحديث «المسند» عند المحدثين؟",
    options: ["كل حديث رواه الإمام أحمد في مسنده", "الحديث المتصل السند المرفوع إلى النبي ﷺ ظاهراً", "الحديث المقطوع على التابعي", "الحديث الذي لا إسناد له"],
    choices: ["كل حديث رواه الإمام أحمد في مسنده", "الحديث المتصل السند المرفوع إلى النبي ﷺ ظاهراً", "الحديث المقطوع على التابعي", "الحديث الذي لا إسناد له"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "المسند هو الحديث الذي اتصل إسناده من راويه حتى ينتهي إلى رسول الله ﷺ بسماع كل راوٍ ممن فوقه دون انقطاع.",
    source: {
      type: "hadith_sciences",
      reference: "علوم الحديث لابن الصلاح، وتدريب الراوي للسيوطي",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0331",
    numericId: 331,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "easy",
    question: "ماذا يقال للحديث الذي يرويه النبي ﷺ عن ربه تبارك وتعالى بلفظه ومعناه المنسوب لله دون أن يكون قرآناً؟",
    options: ["الحديث المعلق", "الحديث القدسي (أو الإلهي)", "الحديث المرسل", "الحديث الموقوف"],
    choices: ["الحديث المعلق", "الحديث القدسي (أو الإلهي)", "الحديث المرسل", "الحديث الموقوف"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "الحديث القدسي هو ما رواه النبي ﷺ مضافاً إلى الله عز وجل كقوله: «قال الله تعالى»، والفرق بينه وبين القرآن أن القرآن متعبد بتلاوته ومعجز ومنقول بالتواتر القطعي.",
    source: {
      type: "hadith_sciences",
      reference: "قواعد التحديث للقاسمي، وفقه السنة للغزالي",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0332",
    numericId: 332,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "medium",
    question: "في حديث أركان الإسلام الخمسة المشهور، من هو الصحابي راوي الحديث؟",
    options: ["عبد الله بن عمر بن الخطاب رضي الله عنهما", "أنس بن مالك رضي الله عنه", "أبو سعيد الخدري رضي الله عنه", "جابر بن عبد الله رضي الله عنه"],
    choices: ["عبد الله بن عمر بن الخطاب رضي الله عنهما", "أنس بن مالك رضي الله عنه", "أبو سعيد الخدري رضي الله عنه", "جابر بن عبد الله رضي الله عنه"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "روى عبد الله بن عمر بن الخطاب رضي الله عنهما قال: سمعت رسول الله ﷺ يقول: «بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّداً رَسُولُ اللَّهِ...».",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب الإيمان، حديث رقم 8؛ وصحيح مسلم، حديث رقم 16",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0333",
    numericId: 333,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "hard",
    question: "ماذا يسمى الحديث الذي سقط من إسناده راوٍ أو أكثر على التوالي من أي موضع كان في السند؟",
    options: ["الحديث المعضل", "الحديث المتروك", "الحديث المدرج", "الحديث المصحف"],
    choices: ["الحديث المعضل", "الحديث المتروك", "الحديث المدرج", "الحديث المصحف"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "المعضل في اصطلاح المحدثين هو الحديث الذي سقط من إسناده راويان متتاليان فأكثر، وهو قسم من أقسام الحديث الضعيف لشدة الانقطاع.",
    source: {
      type: "hadith_sciences",
      reference: "البيقونية في مصطلح الحديث، وتيسير مصطلح الحديث لمحمود الطحان",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0334",
    numericId: 334,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "easy",
    question: "قال رسول الله ﷺ: «مَنْ سَلَكَ طَرِيقاً يَلْتَمِسُ فِيهِ عِلْماً...»، فما تتمة هذا الوعد النبوي؟",
    options: ["«رزقه الله مالاً وفيراً»", "«سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقاً إِلَى الجَنَّةِ»", "«عاش في أمان وسلام»", "«أحبه جميع الناس»"],
    choices: ["«رزقه الله مالاً وفيراً»", "«سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقاً إِلَى الجَنَّةِ»", "«عاش في أمان وسلام»", "«أحبه جميع الناس»"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "عن أبي هريرة رضي الله عنه أن رسول الله ﷺ قال: «وَمَنْ سَلَكَ طَرِيقاً يَلْتَمِسُ فِيهِ عِلْماً سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقاً إِلَى الجَنَّةِ».",
    source: {
      type: "hadith",
      reference: "صحيح مسلم، كتاب الذكر والدعاء والتوبة، حديث رقم 2699",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0335",
    numericId: 335,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "medium",
    question: "ما هو اسم الإمام مسلم مؤلف كتاب الصحيح كاملاً؟",
    options: ["مسلم بن الحجاج النيسابوري", "مسلم بن عقبة المري", "مسلم بن يسار البصري", "مسلم بن خالد الزنجي"],
    choices: ["مسلم بن الحجاج النيسابوري", "مسلم بن عقبة المري", "مسلم بن يسار البصري", "مسلم بن خالد الزنجي"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "هو الإمام الحافظ الحجة أبو الحسين مسلم بن الحجاج القشيري النيسابوري (204 - 261 هـ)، صاحب المسند الصحيح.",
    source: {
      type: "biography",
      reference: "سير أعلام النبلاء للذهبي، ترجمة الإمام مسلم",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0336",
    numericId: 336,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "hard",
    question: "ما الفرق الأساسي بين الحديث «الموقوف» والحديث «المرفوع»؟",
    options: ["الموقوف ما أضيف إلى الصحابي، والمرفوع ما أضيف إلى النبي ﷺ", "الموقوف ما رواه التابعي، والمرفوع ما رواه الصحابي", "الموقوف ضعيف والمرفوع صحيح دائماً", "لا فرق بينهما"],
    choices: ["الموقوف ما أضيف إلى الصحابي، والمرفوع ما أضيف إلى النبي ﷺ", "الموقوف ما رواه التابعي، والمرفوع ما رواه الصحابي", "الموقوف ضعيف والمرفوع صحيح دائماً", "لا فرق بينهما"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "الحديث المرفوع هو ما أُضيف إلى النبي ﷺ من قول أو فعل أو تقرير، أما الموقوف فهو ما أُضيف إلى الصحابي من قوله أو فعله ولم يُرفع للنبي ﷺ.",
    source: {
      type: "hadith_sciences",
      reference: "المنظومة البيقونية؛ ونزهة النظر لابن حجر العسقلاني",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0337",
    numericId: 337,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "medium",
    question: "قال النبي ﷺ: «كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي المِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ» فما هما؟",
    options: ["لا حول ولا قوة إلا بالله", "سبحان الله وبحمده، سبحان الله العظيم", "أستغفر الله وأتوب إليه", "الحمد لله حمداً كثيراً"],
    choices: ["لا حول ولا قوة إلا بالله", "سبحان الله وبحمده، سبحان الله العظيم", "أستغفر الله وأتوب إليه", "الحمد لله حمداً كثيراً"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "عن أبي هريرة رضي الله عنه قال: قال النبي ﷺ: «كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم».",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، آخر حديث في صحيحه، رقم 7563",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0338",
    numericId: 338,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "expert",
    question: "من هو واضع علم «الجرح والتعديل» ورائد أئمة نقد الرجال المشهور بـ «أمير المؤمنين في الحديث» في زمانه؟",
    options: ["شعبة بن الحجاج", "سفيان الثوري", "يحيى بن معين", "علي بن المديني"],
    choices: ["شعبة بن الحجاج", "سفيان الثوري", "يحيى بن معين", "علي بن المديني"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "الإمام شعبة بن الحجاج (ت 160 هـ) هو أول من فتش عن أمر المحدثين بالعراق وأرسى قواعد الجرح والتعديل ونقد الأسانيد وتبعه يحيى القطان وابن مهدي.",
    source: {
      type: "hadith_sciences",
      reference: "الجرح والتعديل لابن أبي حاتم؛ وتاريخ بغداد للخطيب البغدادي",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0339",
    numericId: 339,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "easy",
    question: "قال النبي ﷺ: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ...»؟",
    options: ["فقره ودينه", "لِسَانِهِ وَيَدِهِ", "غضبه وعقابه", "حسده وظلمه"],
    choices: ["فقره ودينه", "لِسَانِهِ وَيَدِهِ", "غضبه وعقابه", "حسده وظلمه"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "عن عبد الله بن عمرو رضي الله عنهما عن النبي ﷺ قال: «المسلم من سلم المسلمون من لسانه ويده، والمهاجر من هجر ما نهى الله عنه».",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب الإيمان، حديث رقم 10",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0340",
    numericId: 340,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "medium",
    question: "ماذا يسمى الحديث الذي اتصل سنده برواية العدل الضابط عن مثله إلى منتهاه من غير شذوذ ولا علة؟",
    options: ["الحديث الحسن", "الحديث الصحيح لذاته", "الحديث المتواتر", "الحديث المشهور"],
    choices: ["الحديث الحسن", "الحديث الصحيح لذاته", "الحديث المتواتر", "الحديث المشهور"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "هذا هو التعريف الدقيق للحديث الصحيح لذاته، باجتماع شروطه الخمسة: اتصال السند، عدالة الرواة، تمام الضبط، انتفاء الشذوذ، وانتفاء العلة القادحة.",
    source: {
      type: "hadith_sciences",
      reference: "مقدمة ابن الصلاح، الباب الأول في الحديث الصحيح",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0341",
    numericId: 341,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "hard",
    question: "كم عدد أحاديث كتاب «الأربعين النووية» التي جمعها الإمام النووي رحمه الله؟",
    options: ["40 حديثاً بالضبط", "42 حديثاً", "50 حديثاً", "30 حديثاً"],
    choices: ["40 حديثاً بالضبط", "42 حديثاً", "50 حديثاً", "30 حديثاً"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "أحاديث الأربعين النووية هي 42 حديثاً من جوامع كلم النبي ﷺ، وسُميت بالأربعين تغليباً وإتباعاً للعادة العربية في جبر الكسور.",
    source: {
      type: "hadith",
      reference: "مقدمة الأربعين النووية للإمام محيي الدين يحيى بن شرف النووي",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0342",
    numericId: 342,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "easy",
    question: "في حديث جبريل عليه السلام الشهير، ما هو تعريف «الإحسان»؟",
    options: ["إعطاء الصدقة للمساكين", "أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ", "بر الوالدين وصلة الأرحام", "حفظ الأمانة وقول الصدق"],
    choices: ["إعطاء الصدقة للمساكين", "أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ", "بر الوالدين وصلة الأرحام", "حفظ الأمانة وقول الصدق"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "في حديث جبريل الطويل سأل جبريل النبي ﷺ: فأخبرني عن الإحسان؟ قال: «أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك».",
    source: {
      type: "hadith",
      reference: "صحيح مسلم، كتاب الإيمان، حديث رقم 8",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0343",
    numericId: 343,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "medium",
    question: "ماذا يقصد بالحديث «المدرج» في علوم الحديث؟",
    options: ["ما زِيدَ في متنه أو إسناده كلام ليس منه دون فصل وبيان", "الحديث الموضوع المكذوب", "الحديث الذي نسيت روايته", "الحديث الذي يرويه الصغير عن الكبير"],
    choices: ["ما زِيدَ في متنه أو إسناده كلام ليس منه دون فصل وبيان", "الحديث الموضوع المكذوب", "الحديث الذي نسيت روايته", "الحديث الذي يرويه الصغير عن الكبير"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "الإدراج هو أن يُدخل أحد الرواة كلاماً من عنده (كتفسير كلمة أو حكم) في متن الحديث النبوي أو في سنده دون تمييز، فيظن السامع أنه من كلام النبي ﷺ.",
    source: {
      type: "hadith_sciences",
      reference: "نزهة النظر في توضيح نخبة الفكر لابن حجر العسقلاني",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0344",
    numericId: 344,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "hard",
    question: "من هو الإمام صاحب كتاب «السنن» المشهور الذي ركّز فيه على أحاديث الأحكام الفقهية وتوفي سنة 275 هـ؟",
    options: ["الإمام أبو داود السجستاني", "الإمام الدارقطني", "الإمام البيهقي", "الإمام الحاكم"],
    choices: ["الإمام أبو داود السجستاني", "الإمام الدارقطني", "الإمام البيهقي", "الإمام الحاكم"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "هو الإمام الحافظ سليمان بن الأشعث السجستاني، صاحب «سنن أبي داود» وهو من أصول كتب السنن الأربعة المعتمدة عند أهل السنة.",
    source: {
      type: "biography",
      reference: "سير أعلام النبلاء للذهبي، ترجمة أبي داود السجستاني",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0345",
    numericId: 345,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "easy",
    question: "قال رسول الله ﷺ: «لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ...»؟",
    options: ["مَا يُحِبُّ لِنَفْسِهِ", "المال الكثير", "العزة والمنعة", "أن يكون رفيقه"],
    choices: ["مَا يُحِبُّ لِنَفْسِهِ", "المال الكثير", "العزة والمنعة", "أن يكون رفيقه"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "عن أنس رضي الله عنه عن النبي ﷺ قال: «لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه»، وهو من جوامع الآداب الإسلامية وكمال الإيمان.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب الإيمان، حديث رقم 13",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0346",
    numericId: 346,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "expert",
    question: "ماذا يسمى الحديث الذي يرويه التابعي مباشرة عن النبي ﷺ دون أن يذكر الصحابي الواسطة؟",
    options: ["الحديث المرسل", "الحديث المعضل", "الحديث المنقطع", "الحديث الشاذ"],
    choices: ["الحديث المرسل", "الحديث المعضل", "الحديث المنقطع", "الحديث الشاذ"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "الحديث المرسل هو ما رفعه التابعي (كبيراً كان أو صغيراً) إلى رسول الله ﷺ كأن يقول: قال رسول الله ﷺ كذا، وهو نوع من الضعيف لجهالة الساقط.",
    source: {
      type: "hadith_sciences",
      reference: "مقدمة ابن الصلاح في علوم الحديث، نوع المرسل",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0347",
    numericId: 347,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "medium",
    question: "ما معنى قوله ﷺ: «الدِّينُ النَّصِيحَةُ»، قلنا: لمن؟ قال: ...؟",
    options: ["«لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم»", "«للحاكم والوزراء»", "«للعلماء والمتعلمين فقط»", "«للأهل والأقارب»"],
    choices: ["«لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم»", "«للحاكم والوزراء»", "«للعلماء والمتعلمين فقط»", "«للأهل والأقارب»"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "عن تميم الداري رضي الله عنه أن النبي ﷺ قال: «الدين النصيحة»، قلنا: لمن؟ قال: «لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم».",
    source: {
      type: "hadith",
      reference: "صحيح مسلم، كتاب الإيمان، حديث رقم 55",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0348",
    numericId: 348,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "hard",
    question: "من هي الصحابية الجليلة الملقبة بـ «حبيبة رسول الله ﷺ» والتي كانت من أكثر النساء رواية للحديث النبوي؟",
    options: ["أم المؤمنين عائشة بنت أبي بكر رضي الله عنهما", "أم المؤمنين خديجة بنت خويلد رضي الله عنها", "فاطمة الزهراء رضي الله عنها", "أم سلمة هند بنت أبي أمية رضي الله عنها"],
    choices: ["أم المؤمنين عائشة بنت أبي بكر رضي الله عنهما", "أم المؤمنين خديجة بنت خويلد رضي الله عنها", "فاطمة الزهراء رضي الله عنها", "أم سلمة هند بنت أبي أمية رضي الله عنها"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "أم المؤمنين عائشة رضي الله عنها روت 2210 أحاديث عن رسول الله ﷺ وكانت فقيهة الأمة وملاذ الصحابة في الفتوى والمعضلات.",
    source: {
      type: "biography",
      reference: "سير أعلام النبلاء للذهبي، ترجمة أم المؤمنين عائشة",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0349",
    numericId: 349,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "easy",
    question: "قال النبي ﷺ: «مَنْ صَلَّى عَلَيَّ صَلاةً وَاحِدَةً، صَلَّى اللَّهُ عَلَيْهِ بِهَا...»؟",
    options: ["عَشْراً", "مائة", "سبعين", "ألفاً"],
    choices: ["عَشْراً", "مائة", "سبعين", "ألفاً"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "عن أبي هريرة رضي الله عنه أن رسول الله ﷺ قال: «من صلى علي واحدة صلى الله عليه عشراً». وصلاة الله على عبده هي ثناؤه عليه في الملأ الأعلى ورحمته به.",
    source: {
      type: "hadith",
      reference: "صحيح مسلم، كتاب الصلاة، حديث رقم 408",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "hadith_0350",
    numericId: 350,
    category: "الحديث الشريف",
    categoryId: "hadith",
    targetCategory: "الحديث الشريف وعلوم الحديث",
    difficulty: "expert",
    question: "ما هو لقب الإمام النسائي صاحب «السنن الكبرى والصغرى»، وما اسمه؟",
    options: ["أحمد بن شعيب النسائي", "محمد بن إسماعيل النسائي", "يحيى بن يحيى النسائي", "الحسن بن علي النسائي"],
    choices: ["أحمد بن شعيب النسائي", "محمد بن إسماعيل النسائي", "يحيى بن يحيى النسائي", "الحسن بن علي النسائي"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "هو الإمام الحافظ الناقد أحمد بن شعيب بن علي بن سنان النسائي (215 - 303 هـ)، صاحب السنن المجتبى الصغرى والكبرى وكتاب خصائص علي.",
    source: {
      type: "biography",
      reference: "تذكرة الحفاظ للذهبي، ترجمة الإمام النسائي",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  }
];

module.exports = batch1;
