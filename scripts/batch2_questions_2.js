// scripts/batch2_questions_2.js
// Batch 2 - Part 2: 50 Questions (25 Seerah & 25 Prophets)
// Verified according to primary sources: Al-Rahiq Al-Makhtum, Qasas Al-Anbiya by Ibn Kathir, Sahih Al-Bukhari & Muslim

const batch2 = [
  // ==========================================
  // 3. السيرة النبوية والغزوات (25 سؤالاً: 351 - 375)
  // ==========================================
  {
    id: "seerah_0351",
    numericId: 351,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "easy",
    question: "كم كان عمر النبي ﷺ عندما نزل عليه الوحي في غار حراء؟",
    options: ["35 سنة", "40 سنة", "45 سنة", "50 سنة"],
    choices: ["35 سنة", "40 سنة", "45 سنة", "50 سنة"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "بُعث النبي ﷺ على رأس أربعين سنة من عمره الشريف، وهو كمال الأشد وسن النبوة والرسالة لعامة الأنبياء.",
    source: {
      type: "seerah",
      reference: "الرحيق المختوم لصفي الرحمن المباركفوري، ص 54؛ وزاد المعاد لابن القيم",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0352",
    numericId: 352,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "الغزوات والفتوحات الإسلامية",
    difficulty: "easy",
    question: "في أي سنة هجرية وقعت غزوة بدر الكبرى (يوم الفرقان)؟",
    options: ["السنة الأولى للهجرة", "السنة الثانية للهجرة", "السنة الثالثة للهجرة", "السنة الخامسة للهجرة"],
    choices: ["السنة الأولى للهجرة", "السنة الثانية للهجرة", "السنة الثالثة للهجرة", "السنة الخامسة للهجرة"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "وقعت غزوة بدر الكبرى في 17 رمضان من السنة الثانية للهجرة النبوية، وانتصر فيها المسلمون نصراً مؤزراً.",
    source: {
      type: "seerah",
      reference: "سيرة ابن هشام، غزوة بدر الكبرى؛ وصحيح البخاري، كتاب المغازي",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0353",
    numericId: 353,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "medium",
    question: "من هي أول امرأة آمنت برسول الله ﷺ وبدعوته من أهل بيته؟",
    options: ["عائشة بنت أبي بكر رضي الله عنها", "خديجة بنت خويلد رضي الله عنها", "فاطمة الزهراء رضي الله عنها", "أم أيمن بركة رضي الله عنها"],
    choices: ["عائشة بنت أبي بكر رضي الله عنها", "خديجة بنت خويلد رضي الله عنها", "فاطمة الزهراء رضي الله عنها", "أم أيمن بركة رضي الله عنها"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "أم المؤمنين خديجة بنت خويلد رضي الله عنها هي أول من آمن بالنبي ﷺ مطلقاً وصدقته وثبتته ونصرته بنفسها ومالها.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب بدء الوحي، حديث رقم 3",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0354",
    numericId: 354,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "medium",
    question: "إلى أين كانت الهجرة الأولى لأصحاب رسول الله ﷺ فراراً بدينهم من بطش قريش؟",
    options: ["إلى المدينة المنورة (يثرب)", "إلى الحبشة عند الملك النجاشي", "إلى اليمن", "إلى الطائف"],
    choices: ["إلى المدينة المنورة (يثرب)", "إلى الحبشة عند الملك النجاشي", "إلى اليمن", "إلى الطائف"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "أمر النبي ﷺ أصحابه بالهجرة إلى الحبشة في السنة الخامسة من البعثة قائلاً: «إن بها ملكاً لا يُظلم عنده أحد»، وكان النجاشي أصحمة عادلاً.",
    source: {
      type: "seerah",
      reference: "الرحيق المختوم، الهجرة إلى الحبشة؛ وزاد المعاد لابن القيم",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0355",
    numericId: 355,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "hard",
    question: "ما الاسم الذي كان يُعرف به النبي ﷺ بين أهل مكة قبل البعثة لحسن خلقه وأمانته؟",
    options: ["الفارس", "الصادق الأمين", "الحكيم", "الكريم"],
    choices: ["الفارس", "الصادق الأمين", "الحكيم", "الكريم"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "لقبت قريش النبي ﷺ بـ «الصادق الأمين» لما عُرف عنه من صدق الحديث والأمانة الكاملة وعفة النفس، حتى وضعوا ودائعهم عنده.",
    source: {
      type: "seerah",
      reference: "سيرة ابن هشام، بناء الكعبة وحكم رسول الله ﷺ",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0356",
    numericId: 356,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "الغزوات والفتوحات الإسلامية",
    difficulty: "medium",
    question: "ما هو السبب المباشر لانكسار المسلمين في مرحلة من مراحل غزوة أُحد؟",
    options: ["قلة عدد الجيش", "مخالفة الرماة لأمر النبي ﷺ ومغادرتهم جبل عينين لجمع الغنائم", "نفاد الماء والسلاح", "خيانة أهل المدينة"],
    choices: ["قلة عدد الجيش", "مخالفة الرماة لأمر النبي ﷺ ومغادرتهم جبل عينين لجمع الغنائم", "نفاد الماء والسلاح", "خيانة أهل المدينة"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "نزل الرماة عن الجبل الذي أمرهم النبي ﷺ ألا يبرحوه مهما حدث، فاستغل خالد بن الوليد (قبل إسلامه) الثغرة والتف حول جيش المسلمين.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب المغازي، حديث رقم 4043",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0357",
    numericId: 357,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "الغزوات والفتوحات الإسلامية",
    difficulty: "easy",
    question: "من هو الصحابي الذي أشار على النبي ﷺ بحفر الخندق حول المدينة في غزوة الأحزاب؟",
    options: ["سلمان الفارسي رضي الله عنه", "أبو بكر الصديق رضي الله عنه", "عمر بن الخطاب رضي الله عنه", "علي بن أبي طالب رضي الله عنه"],
    choices: ["سلمان الفارسي رضي الله عنه", "أبو بكر الصديق رضي الله عنه", "عمر بن الخطاب رضي الله عنه", "علي بن أبي طالب رضي الله عنه"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "أشار سلمان الفارسي رضي الله عنه بحفر الخندق قائلاً: «يا رسول الله، إنا كنا بفارس إذا حُصرنا خندَقنا علينا»، فاستحسن النبي ﷺ خطته.",
    source: {
      type: "seerah",
      reference: "سيرة ابن هشام، غزوة الخندق؛ والرحيق المختوم ص 273",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0358",
    numericId: 358,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "medium",
    question: "في أي عام تم صلح الحديبية بين المسلمين وقريش؟",
    options: ["السنة الرابعة للهجرة", "السنة السادسة للهجرة", "السنة الثامنة للهجرة", "السنة التاسعة للهجرة"],
    choices: ["السنة الرابعة للهجرة", "السنة السادسة للهجرة", "السنة الثامنة للهجرة", "السنة التاسعة للهجرة"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "وقع صلح الحديبية في ذي القعدة من السنة السادسة للهجرة، وسماه القرآن الكريم فتحاً مبيناً في قوله تعالى: {إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا}.",
    source: {
      type: "quran",
      reference: "سورة الفتح، الآية 1؛ وصحيح البخاري كتاب الشروط حديث 2731",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0359",
    numericId: 359,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "الغزوات والفتوحات الإسلامية",
    difficulty: "easy",
    question: "في أي سنة هجرية تم فتح مكة المكرمة وتطهير الكعبة المشرفة من الأصنام؟",
    options: ["السنة السابعة للهجرة", "السنة الثامنة للهجرة", "السنة التاسعة للهجرة", "السنة العاشرة للهجرة"],
    choices: ["السنة السابعة للهجرة", "السنة الثامنة للهجرة", "السنة التاسعة للهجرة", "السنة العاشرة للهجرة"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "فُتحت مكة في 20 رمضان من السنة الثامنة للهجرة دون قتال كبير، وحطم النبي ﷺ الأصنام وقرأ: {جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ}.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب المغازي، حديث رقم 4287",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0360",
    numericId: 360,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "medium",
    question: "ما اسم الغار الذي اختبأ فيه النبي ﷺ وصاحبه أبو بكر الصديق أثناء الهجرة النبوية المباركة؟",
    options: ["غار حراء", "غار ثور", "غار المرسلات", "غار جبل أحد"],
    choices: ["غار حراء", "غار ثور", "غار المرسلات", "غار جبل أحد"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "مكث النبي ﷺ وصديقه أبو بكر في غار ثور ثلاثة أيام أثناء طريق الهجرة جنوب مكة حتى خفّ طلب قريش عنهما.",
    source: {
      type: "quran",
      reference: "سورة التوبة، الآية 40؛ وصحيح البخاري حديث رقم 3653",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0361",
    numericId: 361,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "hard",
    question: "ما هي الحجة الوحيدة التي حجّها رسول الله ﷺ بعد الهجرة النبوية المباركة؟",
    options: ["حجة الإسلام (حجة الوداع)", "حجة القضاء", "حجة الفتح", "حجة التمام"],
    choices: ["حجة الإسلام (حجة الوداع)", "حجة القضاء", "حجة الفتح", "حجة التمام"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "لم يحج النبي ﷺ بعد هجرته إلى المدينة إلا حجة واحدة في السنة العاشرة للهجرة، وعُرفت بـ «حجة الوداع» لأنه ودّع فيها الناس.",
    source: {
      type: "hadith",
      reference: "صحيح مسلم، كتاب الحج، حديث جابر الطويل رقم 1218",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0362",
    numericId: 362,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "easy",
    question: "من هي مرضعة النبي ﷺ في بادية بني سعد التي بورك لها ولأهل بيتها بسببه؟",
    options: ["ثويبة مولاة أبي لهب", "حليمة السعدية رضي الله عنها", "أم أيمن", "برة بنت عبد العزى"],
    choices: ["ثويبة مولاة أبي لهب", "حليمة السعدية رضي الله عنها", "أم أيمن", "برة بنت عبد العزى"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "أرضعته حليمة بنت أبي ذؤيب السعدية في ديار بني سعد، وظهرت بركة النبي ﷺ في لبنها وأغنامها ودوابها منذ أول ليلة.",
    source: {
      type: "seerah",
      reference: "سيرة ابن هشام، رضاع النبي ﷺ؛ والرحيق المختوم ص 41",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0363",
    numericId: 363,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "medium",
    question: "ما اسم الناقة المباركة التي كان يركبها النبي ﷺ عند دخوله المدينة المنورة مهاجراً؟",
    options: ["الشهباء", "القصواء", "العضباء", "الجدعاء"],
    choices: ["الشهباء", "القصواء", "العضباء", "الجدعاء"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "كانت ناصلة النبي ﷺ تسمى «القصواء»، ولما تسابق الأنصار لاستضافته قال: «دَعُوهَا فَإِنَّهَا مَأْمُورَةٌ» حتى بركت موضع مسجده الشريف.",
    source: {
      type: "seerah",
      reference: "الرحيق المختوم، الهجرة ودخول المدينة ص 142",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0364",
    numericId: 364,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "hard",
    question: "من هو الصحابي الذي أرسله النبي ﷺ سفيراً ومعلماً إلى يثرب (المدينة) قبل الهجرة ليعلم الناس القرآن؟",
    options: ["مصعب بن عمير رضي الله عنه", "جعفر بن أبي طالب رضي الله عنه", "عمار بن ياسر رضي الله عنه", "معاذ بن جبل رضي الله عنه"],
    choices: ["مصعب بن عمير رضي الله عنه", "جعفر بن أبي طالب رضي الله عنه", "عمار بن ياسر رضي الله عنه", "معاذ بن جبل رضي الله عنه"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "مصعب بن عمير رضي الله عنه أول سفير في الإسلام، أرسله النبي ﷺ بعد بيعة العقبة الأولى، فأسلم على يديه كبار الأنصار كسعد بن معاذ.",
    source: {
      type: "seerah",
      reference: "سيرة ابن هشام، بيعة العقبة وسفارة مصعب؛ وسير أعلام النبلاء للذهبي",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0365",
    numericId: 365,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "الغزوات والفتوحات الإسلامية",
    difficulty: "medium",
    question: "من هو الصحابي الذي نام في فراش النبي ﷺ ليلة الهجرة لرد الأمانات إلى أهلها وتضليل المشركين؟",
    options: ["علي بن أبي طالب رضي الله عنه", "زيد بن حارثة رضي الله عنه", "أبو بكر الصديق رضي الله عنه", "طلحة بن عبيد الله رضي الله عنه"],
    choices: ["علي بن أبي طالب رضي الله عنه", "زيد بن حارثة رضي الله عنه", "أبو بكر الصديق رضي الله عنه", "طلحة بن عبيد الله رضي الله عنه"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "بات علي بن أبي طالب رضي الله عنه في فراش النبي ﷺ متوشحاً ببردته الشريفة، فداءً لرسول الله وردّاً للودائع التي كانت قريش تستودعها عنده.",
    source: {
      type: "seerah",
      reference: "الرحيق المختوم، مؤامرة دار الندوة والهجرة ص 125",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0366",
    numericId: 366,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "expert",
    question: "ما اسم المعاهدة التاريخية التي حضرها النبي ﷺ في صباه في دار عبد الله بن جدعان لنصرة المظلوم؟",
    options: ["حلف المطيبين", "حلف الفضول", "حلف الأحلاف", "حلف الرباب"],
    choices: ["حلف المطيبين", "حلف الفضول", "حلف الأحلاف", "حلف الرباب"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "شهد النبي ﷺ «حلف الفضول» وقال عنه بعد البعثة: «لقد شهدت في دار عبد الله بن جدعان حلفاً ما أحب أن لي به حُمر النَّعَم، ولو دُعيت به في الإسلام لأجبت».",
    source: {
      type: "hadith",
      reference: "مسند الإمام أحمد، وسيرة ابن هشام، باب حلف الفضول",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0367",
    numericId: 367,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "الغزوات والفتوحات الإسلامية",
    difficulty: "medium",
    question: "في أي غزوة نادى النبي ﷺ بثبات: «أَنَا النَّبِيُّ لا كَذِبْ، أَنَا ابْنُ عَبْدِ الْمُطَّلِبْ» بعد أن تفرّق الناس أول الأمر؟",
    options: ["غزوة حنين", "غزوة أحد", "غزوة بدر", "غزوة خيبر"],
    choices: ["غزوة حنين", "غزوة أحد", "غزوة بدر", "غزوة خيبر"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "في غزوة حنين ثبت النبي ﷺ على بغلته البيضاء حين باغت هوازن المسلمين بالنبال، ونادى بهذه الكلمات حتى عاد الصحابة والتفوا حوله وانتصروا.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب الجهاد والسير، حديث رقم 2864",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0368",
    numericId: 368,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "hard",
    question: "ما اسم الراهب الذي رأى علامات النبوة على النبي ﷺ وهو صبي في رحلة الشام مع عمه أبي طالب؟",
    options: ["بحيرى الراهب", "نسطور الراهب", "ورقة بن نوفل", "سلمان الفارسي"],
    choices: ["بحيرى الراهب", "نسطور الراهب", "ورقة بن نوفل", "سلمان الفارسي"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "عرف الراهب بحيرى علامات النبوة وخاتم النبوة بين كتفي النبي ﷺ في بصرى الشام، ونصح عمه أبا طالب برده خوفاً عليه من الأعداء.",
    source: {
      type: "seerah",
      reference: "جامع الترمذي، كتاب المناقب، حديث رقم 3620؛ وسيرة ابن هشام",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0369",
    numericId: 369,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "easy",
    question: "ما هو أول مسجد أسسه النبي ﷺ بأيديه الشريفة بعد وصوله إلى ضواحي المدينة المنورة؟",
    options: ["المسجد النبوي الشريف", "مسجد قباء", "مسجد القبلتين", "مسجد الجمعة"],
    choices: ["المسجد النبوي الشريف", "مسجد قباء", "مسجد القبلتين", "مسجد الجمعة"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "مسجد قباء هو أول مسجد بُني في الإسلام، وفيه نزل قوله تعالى: {لَّمَسْجِدٌ أُسِّسَ عَلَى التَّقْوَىٰ مِنْ أَوَّلِ يَوْمٍ أَحَقُّ أَن تَقُومَ فِيهِ}.",
    source: {
      type: "quran",
      reference: "سورة التوبة، الآية 108؛ وصحيح البخاري حديث رقم 1193",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0370",
    numericId: 370,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "expert",
    question: "من كان دليل النبي ﷺ وأبي بكر الخبير بالطرق الوعرة أثناء الهجرة النبوية إلى يثرب؟",
    options: ["عبد الله بن أريقط الليثي", "سراقة بن مالك", "عامر بن فهيرة", "حاطب بن أبي بلتعة"],
    choices: ["عبد الله بن أريقط الليثي", "سراقة بن مالك", "عامر بن فهيرة", "حاطب بن أبي بلتعة"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "استأجر النبي ﷺ وأبو بكر عبد الله بن أريقط دليلاً خريتاً (ماهراً بالطرق) سالكاً بهما طريق الساحل الوعر تفادياً لعيون قريش.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب مناقب الأنصار، حديث رقم 3905",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0371",
    numericId: 371,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "medium",
    question: "ما هو اللقب الذي أطلق على العام العاشر من البعثة الذي توفي فيه أبو طالب وخديجة رضي الله عنها؟",
    options: ["عام الهجرة", "عام الوفود", "عام الحزن", "عام الفيل"],
    choices: ["عام الهجرة", "عام الوفود", "عام الحزن", "عام الفيل"],
    correctAnswerIndex: 2,
    correct: 2,
    explanation: "اشتهر في كتب السيرة بـ «عام الحزن» لاجتماع وفاة أبي طالب الذي كان يحميه، وأم المؤمنين خديجة التي كانت سكنه ومواسيته رضي الله عنها.",
    source: {
      type: "seerah",
      reference: "الرحيق المختوم، ص 89؛ وزاد المعاد في هدي خير العباد",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0372",
    numericId: 372,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "الغزوات والفتوحات الإسلامية",
    difficulty: "hard",
    question: "من أعطاه النبي ﷺ الراية يوم فتح حصن خيبر وقال فيه: «لأُعْطِيَنَّ الرَّايَةَ غَداً رَجُلاً يُحِبُّ اللَّهَ وَرَسُولَهُ...»؟",
    options: ["علي بن أبي طالب رضي الله عنه", "عمر بن الخطاب رضي الله عنه", "سعد بن أبي وقاص رضي الله عنه", "أبو عبيدة بن الجراح رضي الله عنه"],
    choices: ["علي بن أبي طالب رضي الله عنه", "عمر بن الخطاب رضي الله عنه", "سعد بن أبي وقاص رضي الله عنه", "أبو عبيدة بن الجراح رضي الله عنه"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "أعطى النبي ﷺ الراية لعلي بن أبي طالب رضي الله عنه بعد أن تفل في عينيه من رمد كان به فبرئ في الحال وفتح الله خيبر على يديه.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب الجهاد، حديث رقم 3009؛ وصحيح مسلم رقم 2404",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0373",
    numericId: 373,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "medium",
    question: "كم عدد أولاد النبي ﷺ جميعاً (ذكوراً وإناثاً) من كل زوجاته؟",
    options: ["5 أولاد", "7 أولاد (ثلاثة ذكور وأربع إناث)", "6 أولاد", "8 أولاد"],
    choices: ["5 أولاد", "7 أولاد (ثلاثة ذكور وأربع إناث)", "6 أولاد", "8 أولاد"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "رزق النبي ﷺ بسبعة أولاد: القاسم وعبد الله وإبراهيم، والإناث: زينب ورقية وأم كلثوم وفاطمة. وكلهم من خديجة إلا إبراهيم فمن مارية القبطية.",
    source: {
      type: "seerah",
      reference: "زاد المعاد لابن القيم، فصل في أزواجه وأولاده ﷺ",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0374",
    numericId: 374,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "easy",
    question: "إلى أي مكان أُسري بالنبي ﷺ في رحلة الإسراء المباركة قبل عروجه إلى السموات العلى؟",
    options: ["إلى المسجد الأقصى في بيت المقدس", "إلى جبل الطور بسيناء", "إلى دمشق", "إلى الكعبة المشرفة"],
    choices: ["إلى المسجد الأقصى في بيت المقدس", "إلى جبل الطور بسيناء", "إلى دمشق", "إلى الكعبة المشرفة"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "أُسري بالنبي ﷺ ليلاً من المسجد الحرام بمكة إلى المسجد الأقصى المبارك بإيلياء (القدس)، وصلى فيه بالأنبياء إماماً.",
    source: {
      type: "quran",
      reference: "سورة الإسراء، الآية 1؛ وصحيح مسلم حديث رقم 162",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "seerah_0375",
    numericId: 375,
    category: "السيرة النبوية",
    categoryId: "seerah",
    targetCategory: "السيرة النبوية",
    difficulty: "medium",
    question: "في أي دار في مكة كانت الدعوة الإسلامية تجتمع سراً في مطلع البعثة النبوية؟",
    options: ["دار الأرقم بن أبي الأرقم", "دار الندوة", "دار أبي بكر الصديق", "دار خديجة بنت خويلد"],
    choices: ["دار الأرقم بن أبي الأرقم", "دار الندوة", "دار أبي بكر الصديق", "دار خديجة بنت خويلد"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "اتخذ النبي ﷺ دار الأرقم بن أبي الأرقم المخزومي عند الصفا مقراً سرياً لتعليم الصحابة وتلاوة القرآن والدعوة حتى إسلام حمزة وعمر.",
    source: {
      type: "seerah",
      reference: "الرحيق المختوم، مرحلة الدعوة السرية ص 61",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },

  // ==========================================
  // 4. الأنبياء والرسل (25 سؤالاً: 376 - 400)
  // ==========================================
  {
    id: "prophets_0376",
    numericId: 376,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "easy",
    question: "من هو أول نبي ورسول أرسله الله تعالى للبشرية بعد وقوع الشرك في الأرض؟",
    options: ["آدم عليه السلام", "نوح عليه السلام", "إدريس عليه السلام", "إبراهيم عليه السلام"],
    choices: ["آدم عليه السلام", "نوح عليه السلام", "إدريس عليه السلام", "إبراهيم عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "نوح عليه السلام هو أول رسول بعثه الله إلى أهل الأرض بعد أن عبد قومه الأصنام (ود وسواع ويغوث ويعوق ونسر)، كما في حديث الشفاعة الصحيح.",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب التفسير، حديث الشفاعة رقم 4712",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0377",
    numericId: 377,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "easy",
    question: "من هو النبي الملقب بـ «كليم الله» لأن الله تعالى كلمه تكليماً بدون واسطة ملك؟",
    options: ["إبراهيم عليه السلام", "موسى عليه السلام", "عيسى عليه السلام", "داود عليه السلام"],
    choices: ["إبراهيم عليه السلام", "موسى عليه السلام", "عيسى عليه السلام", "داود عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "موسى بن عمران عليه السلام هو كليم الله، قال تعالى: {وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا} عند جبل الطور بالوادي المقدس طوى.",
    source: {
      type: "quran",
      reference: "سورة النساء، الآية 164؛ وسورة طه: 11-14",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0378",
    numericId: 378,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "medium",
    question: "كم سنة لبث نبي الله نوح عليه السلام يدعو قومه إلى التوحيد ليلاً ونهاراً كما في القرآن الكريم؟",
    options: ["100 سنة", "500 سنة", "950 سنة (ألف سنة إلا خمسين عاماً)", "300 سنة"],
    choices: ["100 سنة", "500 سنة", "950 سنة (ألف سنة إلا خمسين عاماً)", "300 سنة"],
    correctAnswerIndex: 2,
    correct: 2,
    explanation: "قال الله تعالى في سورة العنكبوت: {وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ}.",
    source: {
      type: "quran",
      reference: "سورة العنكبوت، الآية 14",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0379",
    numericId: 379,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "easy",
    question: "ما اسم النبي الذي ابتلعه الحوت ثم نجاه الله بفضل تسبيحه واستغفاره في الظلمات؟",
    options: ["يونس عليه السلام (ذا النون)", "أيوب عليه السلام", "إلياس عليه السلام", "يحيى عليه السلام"],
    choices: ["يونس عليه السلام (ذا النون)", "أيوب عليه السلام", "إلياس عليه السلام", "يحيى عليه السلام"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "يونس بن متى عليه السلام هو صاحب الحوت (ذو النون)، نادى في الظلمات: {لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ} فاستجاب الله له ونجاه.",
    source: {
      type: "quran",
      reference: "سورة الأنبياء، الآيتان 87-88؛ وسورة الصافات: 142",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0380",
    numericId: 380,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "medium",
    question: "من هو النبي الذي سخر الله له الريح تجري بأمره، وألان له الشياطين والجن، وعلّمه منطق الطير؟",
    options: ["داود عليه السلام", "سليمان عليه السلام", "يوسف عليه السلام", "شعيب عليه السلام"],
    choices: ["داود عليه السلام", "سليمان عليه السلام", "يوسف عليه السلام", "شعيب عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "سليمان بن داود عليهما السلام آتاه الله ملكاً لا ينبغي لأحد من بعده، فسخر له الريح عاصفة تجري بأمره والجن والطير والإنس.",
    source: {
      type: "quran",
      reference: "سورة ص، الآيات 36-38؛ وسورة النمل: 16",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0381",
    numericId: 381,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "medium",
    question: "ما هي المعجزة الكبرى التي أيد الله بها نبيه صالحاً عليه السلام لقومه ثمود؟",
    options: ["العصا التي انقلبت ثعباناً", "الناقة العظيمة وفصيلها التي خرجت من الصخرة", "إبراء الأكمه والأبرص", "الطوفان"],
    choices: ["العصا التي انقلبت ثعباناً", "الناقة العظيمة وفصيلها التي خرجت من الصخرة", "إبراء الأكمه والأبرص", "الطوفان"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "أخرج الله لقوم ثمود ناقة عظيمة آية من الصخر كطلبهم، وكان لها شِرب يوم ولهم شِرب يوم معلوم، فعقروها فأخذتهم الصيحة.",
    source: {
      type: "quran",
      reference: "سورة الشعراء: 155-156؛ وسورة هود: 64",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0382",
    numericId: 382,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "hard",
    question: "من هو النبي الذي ضرب به المثل القرآني في الصبر العظيم على البلاء والمرض وفقد الأهل والمال؟",
    options: ["يعقوب عليه السلام", "أيوب عليه السلام", "هارون عليه السلام", "زكريا عليه السلام"],
    choices: ["يعقوب عليه السلام", "أيوب عليه السلام", "هارون عليه السلام", "زكريا عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "أيوب عليه السلام ابتلي في جسده وأهله وماله سنيناً فصبر صبراً جميلاً، فنادى ربه: {أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ} فكشف الله ضره.",
    source: {
      type: "quran",
      reference: "سورة الأنبياء، الآيتان 83-84؛ وسورة ص: 41-44",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0383",
    numericId: 383,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "easy",
    question: "ما اسم النبي الذي اشتهر بتأويل الرؤى والأحلام ومكّن الله له في أرض مصر حتى صار على خزائنها؟",
    options: ["موسى عليه السلام", "يوسف عليه السلام", "إبراهيم عليه السلام", "شعيب عليه السلام"],
    choices: ["موسى عليه السلام", "يوسف عليه السلام", "إبراهيم عليه السلام", "شعيب عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "يوسف الصديق بن يعقوب عليهما السلام علمه الله تأويل الأحاديث وقال لملك مصر: {اجْعَلْنِي عَلَىٰ خَزَائِنِ الْأَرْضِ ۖ إِنِّي حَفِيظٌ عَلِيمٌ}.",
    source: {
      type: "quran",
      reference: "سورة يوسف، الآية 55",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0384",
    numericId: 384,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "hard",
    question: "ما اسم النبي الذي أرسله الله تعالى إلى أهل «مَدْيَنَ» وأصحاب الأيكة، وكان فصيحاً ناصحاً بوفاء المكيال والميزان؟",
    options: ["هود عليه السلام", "شعيب عليه السلام (خطيب الأنبياء)", "صالح عليه السلام", "لوط عليه السلام"],
    choices: ["هود عليه السلام", "شعيب عليه السلام (خطيب الأنبياء)", "صالح عليه السلام", "لوط عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "شعيب عليه السلام أرسله الله إلى مدين وكانوا يبخسون الناس أشياءهم ويفسدون في الأرض، ودعاهم لإيفاء الكيل والميزان بالعدل.",
    source: {
      type: "quran",
      reference: "سورة الأعراف: 85؛ وسورة هود: 84",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0385",
    numericId: 385,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "easy",
    question: "من هما النبيان الكريمان اللذان رفعا قواعد البيت الحرام (الكعبة المشرفة) في مكة المكرمة؟",
    options: ["نوح وابنه سام", "إبراهيم وإسماعيل عليهما السلام", "إسماعيل وإسحاق", "آدم وشيث"],
    choices: ["نوح وابنه سام", "إبراهيم وإسماعيل عليهما السلام", "إسماعيل وإسحاق", "آدم وشيث"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "قال الله تعالى: {وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ}.",
    source: {
      type: "quran",
      reference: "سورة البقرة، الآية 127",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0386",
    numericId: 386,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "medium",
    question: "ما هو الكتاب السماوي الذي آتاه الله تعالى لنبيه داود عليه السلام؟",
    options: ["التوراة", "الزبور", "الإنجيل", "الصحف"],
    choices: ["التوراة", "الزبور", "الإنجيل", "الصحف"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "قال الله تعالى في سورة الإسراء والنساء: {وَآتَيْنَا دَاوُودَ زَبُورًا}، وكان داود عليه السلام أوتي صوتاً حسناً بالترتيل والتسبيح تسبح معه الجبال والطير.",
    source: {
      type: "quran",
      reference: "سورة الإسراء، الآية 55؛ وسورة النساء: 163",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0387",
    numericId: 387,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "medium",
    question: "ما اسم النبي الذي وُلد بمعجزة إلهية من غير أب وكلم الناس في المهد صبياً؟",
    options: ["يحيى عليه السلام", "عيسى بن مريم عليه السلام", "إسحاق عليه السلام", "إبراهيم عليه السلام"],
    choices: ["يحيى عليه السلام", "عيسى بن مريم عليه السلام", "إسحاق عليه السلام", "إبراهيم عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "عيسى المسيح عليه السلام خلقه الله بكلمته ألقاها إلى مريم العذراء وروح منه، وكلم الناس صبياً مبرئاً أمه: {قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ}.",
    source: {
      type: "quran",
      reference: "سورة مريم، الآيات 29-30؛ وسورة آل عمران: 45-46",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0388",
    numericId: 388,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "expert",
    question: "من هو النبي الذي سأل موسى عليه السلام مرافقته ليتعلم مما علمه الله رُشداً وقصتهما في سورة الكهف؟",
    options: ["يوشع بن نون", "العبد الصالح (الخضر عليه السلام)", "هارون عليه السلام", "إلياس عليه السلام"],
    choices: ["يوشع بن نون", "العبد الصالح (الخضر عليه السلام)", "هارون عليه السلام", "إلياس عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "التقى موسى بالعبد الصالح الذي سماه النبي ﷺ في الحديث «الخضر»، قال تعالى: {فَوَجَدَا عَبْدًا مِّنْ عِبَادِنَا آتَيْنَاهُ رَحْمَةً مِّنْ عِندِنَا وَعَلَّمْنَاهُ مِن لَّدُنَّا عِلْمًا}.",
    source: {
      type: "quran",
      reference: "سورة الكهف، الآية 65؛ وصحيح البخاري حديث رقم 4725",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0389",
    numericId: 389,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "easy",
    question: "ما اسم النبي الذي فداه الله بذبح عظيم عندما رأى أبوه إبراهيم في المنام أنه يذبحه؟",
    options: ["إسماعيل عليه السلام", "إسحاق عليه السلام", "يعقوب عليه السلام", "يوسف عليه السلام"],
    choices: ["إسماعيل عليه السلام", "إسحاق عليه السلام", "يعقوب عليه السلام", "يوسف عليه السلام"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "الذبيح على الراجح من أقوال المفسرين والصحابة هو إسماعيل عليه السلام بكر إبراهيم، وفداه الله بكبش عظيم من الجنة: {وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ}.",
    source: {
      type: "quran",
      reference: "سورة الصافات، الآيات 102-107",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0390",
    numericId: 390,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "medium",
    question: "من هو النبي الذي بعثه الله في قوم «عَادٍ» الأولى بالأحقاف في جنوب الجزيرة العربية؟",
    options: ["صالح عليه السلام", "هود عليه السلام", "شعيب عليه السلام", "لوط عليه السلام"],
    choices: ["صالح عليه السلام", "هود عليه السلام", "شعيب عليه السلام", "لوط عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "أرسل الله هوداً عليه السلام إلى قوم عاد الذين بنوا إرم ذات العماد، فنصحهم بالتوحيد فكذبوه فأهلكهم الله بريح صرصر عاتية.",
    source: {
      type: "quran",
      reference: "سورة الأعراف: 65؛ وسورة الحاقة: 6",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0391",
    numericId: 391,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "hard",
    question: "من هو النبي الذي سأل الله أن يجعل له وزيراً وعضداً من أهله ليفصح عنه ويشد أزره؟",
    options: ["موسى عليه السلام حين سأل أخاه هارون", "إبراهيم عليه السلام حين سأل إسماعيل", "زكريا حين سأل يحيى", "داود حين سأل سليمان"],
    choices: ["موسى عليه السلام حين سأل أخاه هارون", "إبراهيم عليه السلام حين سأل إسماعيل", "زكريا حين سأل يحيى", "داود حين سأل سليمان"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "دعا موسى عليه السلام ربه: {وَاجْعَل لِّي وَزِيرًا مِّنْ أَهْلِي * هَارُونَ أَخِي * اشْدُدْ بِهِ أَزْرِي}، فاستجاب الله دعاءه وجعل هارون نبياً ورسولاً.",
    source: {
      type: "quran",
      reference: "سورة طه، الآيات 29-32",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0392",
    numericId: 392,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "medium",
    question: "ما اسم النبي الذي بشره الله بغلام اسمه يحيى بعدما كبر سنه ووهن عظمه وكانت امرأته عاقراً؟",
    options: ["زكريا عليه السلام", "عمران", "إلياس عليه السلام", "شعيب عليه السلام"],
    choices: ["زكريا عليه السلام", "عمران", "إلياس عليه السلام", "شعيب عليه السلام"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "نادى زكريا عليه السلام ربه نداءً خفياً: {رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً}، فبشرته الملائكة بيحيى مصدقاً بكلمة من الله وسيداً وحصوراً.",
    source: {
      type: "quran",
      reference: "سورة مريم: 2-7؛ وسورة آل عمران: 38-39",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0393",
    numericId: 393,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "expert",
    question: "من هو الفتى النبوي الصالح الذي كان خليفة موسى عليه السلام وقاد بني إسرائيل لفتح الأرض المقدسة وحُبست له الشمس؟",
    options: ["يوشع بن نون عليه السلام", "كالب بن يوفنا", "حزقيل عليه السلام", "صموئيل عليه السلام"],
    choices: ["يوشع بن نون عليه السلام", "كالب بن يوفنا", "حزقيل عليه السلام", "صموئيل عليه السلام"],
    correctAnswerIndex: 0,
    correct: 0,
    explanation: "يوشع بن نون هو فتى موسى، قاد فتح بيت المقدس وحبست الشمس له حتى أتم الفتح قبل غروب يوم الجمعة، كما صح في الحديث.",
    source: {
      type: "hadith",
      reference: "صحيح مسلم، كتاب الجهاد والسير، حديث رقم 1747",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0394",
    numericId: 394,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "easy",
    question: "ما هي الحرفة اليدوية التي كان نبي الله داود عليه السلام يعمل بها ويأكل من كسب يده؟",
    options: ["النجارة", "صناعة الدروع والحديد (الحدادة)", "التجارة", "الخياطة"],
    choices: ["النجارة", "صناعة الدروع والحديد (الحدادة)", "التجارة", "الخياطة"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "ألان الله لداود عليه السلام الحديد وصنع الدروع المنسوجة السابغات، وقال النبي ﷺ: «ما أكل أحد طعاماً قط خيراً من أن يأكل من عمل يده، وإن نبي الله داود كان يأكل من عمل يده».",
    source: {
      type: "hadith",
      reference: "صحيح البخاري، كتاب البيوع، حديث رقم 2072؛ وسورة سبأ: 10-11",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0395",
    numericId: 395,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "medium",
    question: "ماذا حدث للنار التي ألقى فيها نمرود وجنوده نبي الله إبراهيم عليه السلام؟",
    options: ["أطفأتها الأمطار الغزيرة", "قال الله لها: {كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ} فصارت برداً وسلاماً", "تحولت إلى ماء", "انشقت الأرض وابتلعتها"],
    choices: ["أطفأتها الأمطار الغزيرة", "قال الله لها: {كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ} فصارت برداً وسلاماً", "تحولت إلى ماء", "انشقت الأرض وابتلعتها"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "سلب الله من النار خاصية الإحراق كرامةً لخليله إبراهيم، فأمرها: {يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ} فخرج منها سالماً لم تمسسه بسوء.",
    source: {
      type: "quran",
      reference: "سورة الأنبياء، الآية 69",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0396",
    numericId: 396,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "hard",
    question: "ما اسم النبي الملقب في التوراة والقرآن بـ «إسرائيل»؟",
    options: ["إسحاق عليه السلام", "يعقوب عليه السلام", "إبراهيم عليه السلام", "يوسف عليه السلام"],
    choices: ["إسحاق عليه السلام", "يعقوب عليه السلام", "إبراهيم عليه السلام", "يوسف عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "إسرائيل هو نبي الله يعقوب بن إسحاق بن إبراهيم عليهم السلام، ومعناه في لغة العبرانيين والسريانيين: عبد الله أو صفوة الله.",
    source: {
      type: "tafsir",
      reference: "تفسير ابن كثير، سورة البقرة، الآية 40؛ وقصص الأنبياء",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0397",
    numericId: 397,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "medium",
    question: "ما اسم الملك الظالم الذي حاجّ إبراهيم عليه السلام في ربه وادعى أنه يحيي ويميت؟",
    options: ["فرعون", "النمرود بن كنعان", "قارون", "هامان"],
    choices: ["فرعون", "النمرود بن كنعان", "قارون", "هامان"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "هو النمرود بن كنعان الجبار، حاج إبراهيم في الله فقال إبراهيم: {فَإِنَّ اللَّهَ يَأْتِي بِالشَّمْسِ مِنَ الْمَشْرِقِ فَأْتِ بِهَا مِنَ الْمَغْرِبِ فَبُهِتَ الَّذِي كَفَرَ}.",
    source: {
      type: "quran",
      reference: "سورة البقرة، الآية 258",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0398",
    numericId: 398,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "easy",
    question: "من هي المرأة الصالحة التي ألهمها الله أن تضع وليدها في تابوت وتلقيه في اليم ثقة بوعد ربها؟",
    options: ["أم مريم عليها السلام", "أم موسى عليه السلام (يوكابد)", "آسية امرأة فرعون", "سارة زوجة إبراهيم"],
    choices: ["أم مريم عليها السلام", "أم موسى عليه السلام (يوكابد)", "آسية امرأة فرعون", "سارة زوجة إبراهيم"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "أوحى الله إلى أم موسى: {أَنْ أَرْضِعِيهِ ۖ فَإِذَا خِفْتِ عَلَيْهِ فَأَلْقِيهِ فِي الْيَمِّ وَلَا تَخَافِي وَلَا تَحْزَنِي ۖ إِنَّا رَادُّوهُ إِلَيْكِ وَجَاعِلُوهُ مِنَ الْمُرْسَلِينَ}.",
    source: {
      type: "quran",
      reference: "سورة القصص، الآية 7",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0399",
    numericId: 399,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "expert",
    question: "من هم الأنبياء الأربعة العرب المذكورون بأسمائهم في القرآن الكريم كما في حديث أبي ذر؟",
    options: ["إسماعيل وإسحاق ويعقوب ويوسف", "هود وصالح وشعيب ومحمد عليهم الصلاة والسلام", "نوح وإبراهيم وموسى وعيسى", "آدم وإدريس وشيث ونوح"],
    choices: ["إسماعيل وإسحاق ويعقوب ويوسف", "هود وصالح وشعيب ومحمد عليهم الصلاة والسلام", "نوح وإبراهيم وموسى وعيسى", "آدم وإدريس وشيث ونوح"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "روى ابن حبان في صحيحه عن أبي ذر رضي الله عنه أن النبي ﷺ قال: «منهم أربعة من العرب: هود وصالح وشعيب ونبيك يا أبا ذر».",
    source: {
      type: "hadith",
      reference: "صحيح ابن حبان حديث رقم 361؛ والبداية والنهاية لابن كثير",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  },
  {
    id: "prophets_0400",
    numericId: 400,
    category: "قصص الأنبياء",
    categoryId: "prophets",
    targetCategory: "الأنبياء والرسل",
    difficulty: "medium",
    question: "من هو النبي الذي اختصه الله بالحكمة وفصل الخطاب وآتاه ملكاً وقضاءً عادلاً وقصته في سورة ص؟",
    options: ["سليمان عليه السلام", "داود عليه السلام", "يوسف عليه السلام", "موسى عليه السلام"],
    choices: ["سليمان عليه السلام", "داود عليه السلام", "يوسف عليه السلام", "موسى عليه السلام"],
    correctAnswerIndex: 1,
    correct: 1,
    explanation: "قال الله تعالى في نبيه داود: {وَشَدَدْنَا مُلْكَهُ وَآتَيْنَاهُ الْحِكْمَةَ وَفَصْلَ الْخِطَابِ}، وفصل الخطاب هو القضاء البين والحكم بالحق والبيان الشافي.",
    source: {
      type: "quran",
      reference: "سورة ص، الآية 20",
      url: null
    },
    reviewStatus: "verified",
    additionalInfo: null
  }
];

module.exports = batch2;
