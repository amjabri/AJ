/**
 * CENTRAL QUESTION BANK
 * Add, edit or remove questions by modifying this file.
 * Rules:
 *  - Each question has a unique id.
 *  - correctOptionId must exactly match one option's id.
 *  - Option order here does not matter; options are shuffled at runtime.
 *  - Never rely on the position of options to identify the correct answer.
 */

import type { Question } from '../types';

export const ALL_QUESTIONS: Question[] = [

  // ───────────────────────────────────────────────────────────────────────────
  // TOPIC 1: THE LABORATORY'S ROLE IN RESEARCH
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'q1_1',
    topicId: 'topic1',
    questionEnglish: 'When should the Medical Laboratory Department be involved in a research project?',
    questionArabic: 'متى يجب إشراك إدارة المختبرات الطبية في المشروع البحثي؟',
    options: [
      {
        id: 'q1_1_A',
        textEnglish: 'Before finalizing and submitting the research protocol.',
        textArabic: 'قبل الانتهاء من إعداد بروتوكول البحث وتقديمه.',
      },
      {
        id: 'q1_1_B',
        textEnglish: 'After all specimens have already been collected.',
        textArabic: 'بعد الانتهاء من جمع جميع العينات.',
      },
      {
        id: 'q1_1_C',
        textEnglish: 'Only after the study has been published.',
        textArabic: 'فقط بعد نشر الدراسة.',
      },
    ],
    correctOptionId: 'q1_1_A',
    explanationEnglish:
      'Early laboratory involvement helps researchers select appropriate tests, specimens, methods, resources and quality requirements.',
    explanationArabic:
      'يساعد إشراك المختبر مبكراً الباحثين على اختيار الفحوصات والعينات والمنهجيات والموارد ومتطلبات الجودة المناسبة.',
  },
  {
    id: 'q1_2',
    topicId: 'topic1',
    questionEnglish: 'Why is the medical laboratory essential in many clinical research studies?',
    questionArabic: 'لماذا يُعد المختبر الطبي أساسياً في كثير من الدراسات البحثية السريرية؟',
    options: [
      {
        id: 'q1_2_A',
        textEnglish: 'Because it provides reliable scientific measurements and results.',
        textArabic: 'لأنه يوفر قياسات ونتائج علمية موثوقة.',
      },
      {
        id: 'q1_2_B',
        textEnglish: 'Because it arranges staff vacations.',
        textArabic: 'لأنه ينظم إجازات الموظفين.',
      },
      {
        id: 'q1_2_C',
        textEnglish: 'Because it manages hospital parking.',
        textArabic: 'لأنه يدير مواقف المستشفى.',
      },
    ],
    correctOptionId: 'q1_2_A',
    explanationEnglish:
      'Many clinical research conclusions depend on accurate laboratory measurements, properly collected specimens and validated testing methods.',
    explanationArabic:
      'تعتمد نتائج كثير من الأبحاث السريرية على قياسات مخبرية دقيقة وعينات جُمعت بطريقة صحيحة وطرق فحص معتمدة.',
  },
  {
    id: 'q1_3',
    topicId: 'topic1',
    questionEnglish: "Does the laboratory's research role end after performing the test?",
    questionArabic: 'هل ينتهي دور المختبر في البحث العلمي بعد إجراء الفحص؟',
    options: [
      {
        id: 'q1_3_A',
        textEnglish: 'Yes.',
        textArabic: 'نعم.',
      },
      {
        id: 'q1_3_B',
        textEnglish: 'No.',
        textArabic: 'لا.',
      },
    ],
    correctOptionId: 'q1_3_B',
    explanationEnglish:
      'Laboratory professionals may also verify results, interpret findings, explain limitations and contribute to reports, presentations and publications.',
    explanationArabic:
      'يمكن للمختصين في المختبر أيضاً التحقق من النتائج وتفسيرها وشرح محدوديتها والمشاركة في التقارير والعروض والمنشورات العلمية.',
  },
  {
    id: 'q1_4',
    topicId: 'topic1',
    questionEnglish: 'Which activity is an important laboratory contribution during research planning?',
    questionArabic: 'أي من الأنشطة التالية يُعد مساهمة مهمة للمختبر أثناء التخطيط للبحث؟',
    options: [
      {
        id: 'q1_4_A',
        textEnglish: 'Selecting the correct specimen and testing method.',
        textArabic: 'اختيار العينة وطريقة الفحص المناسبة.',
      },
      {
        id: 'q1_4_B',
        textEnglish: "Choosing the researcher's office furniture.",
        textArabic: 'اختيار أثاث مكتب الباحث.',
      },
      {
        id: 'q1_4_C',
        textEnglish: 'Selecting the hospital parking space.',
        textArabic: 'اختيار موقف السيارة في المستشفى.',
      },
    ],
    correctOptionId: 'q1_4_A',
    explanationEnglish:
      'The specimen type and testing method must match the research question to produce meaningful and reliable results.',
    explanationArabic:
      'يجب أن يتوافق نوع العينة وطريقة الفحص مع السؤال البحثي للحصول على نتائج موثوقة وذات معنى.',
  },
  {
    id: 'q1_5',
    topicId: 'topic1',
    questionEnglish: 'Who can help determine whether a proposed laboratory test is available and feasible?',
    questionArabic: 'من يستطيع المساعدة في تحديد مدى توفر الفحص المخبري المقترح وإمكانية تنفيذه؟',
    options: [
      {
        id: 'q1_5_A',
        textEnglish: 'The Medical Laboratory Department.',
        textArabic: 'إدارة المختبرات الطبية.',
      },
      {
        id: 'q1_5_B',
        textEnglish: 'Hospital security.',
        textArabic: 'أمن المستشفى.',
      },
      {
        id: 'q1_5_C',
        textEnglish: 'The hospital cafeteria.',
        textArabic: 'مطعم المستشفى.',
      },
    ],
    correctOptionId: 'q1_5_A',
    explanationEnglish:
      'The laboratory can assess test availability, validation, reagents, equipment, staffing, workload, cost and expected turnaround time.',
    explanationArabic:
      'يمكن للمختبر تقييم توفر الفحص واعتماده والكواشف والأجهزة والكوادر وحجم العمل والتكلفة والوقت المتوقع لإصدار النتائج.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  // TOPIC 2: RETROSPECTIVE RESEARCH
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'q2_1',
    topicId: 'topic2',
    questionEnglish: 'What does a retrospective research study mainly examine?',
    questionArabic: 'ما الذي تدرسه البحوث الاستعادية بشكل رئيسي؟',
    options: [
      {
        id: 'q2_1_A',
        textEnglish: 'Existing records, previous results or approved archived information.',
        textArabic: 'السجلات الموجودة أو النتائج السابقة أو المعلومات المؤرشفة المصرح باستخدامها.',
      },
      {
        id: 'q2_1_B',
        textEnglish: 'Only specimens that will be collected in the future.',
        textArabic: 'فقط العينات التي سيتم جمعها في المستقبل.',
      },
      {
        id: 'q2_1_C',
        textEnglish: 'Information created without reviewing real records.',
        textArabic: 'معلومات يتم إنشاؤها دون مراجعة سجلات حقيقية.',
      },
    ],
    correctOptionId: 'q2_1_A',
    explanationEnglish:
      'Retrospective research looks back at information that was generated before the research study began.',
    explanationArabic:
      'تنظر البحوث الاستعادية إلى المعلومات التي تم إنشاؤها قبل بدء الدراسة البحثية.',
  },
  {
    id: 'q2_2',
    topicId: 'topic2',
    questionEnglish: 'Which laboratory source may support a retrospective study?',
    questionArabic: 'أي مصدر مخبري يمكن أن يدعم دراسة استعادية؟',
    options: [
      {
        id: 'q2_2_A',
        textEnglish: 'Validated results from the Laboratory Information System.',
        textArabic: 'النتائج المعتمدة من نظام معلومات المختبر.',
      },
      {
        id: 'q2_2_B',
        textEnglish: 'A future specimen that has not been collected.',
        textArabic: 'عينة مستقبلية لم يتم جمعها بعد.',
      },
      {
        id: 'q2_2_C',
        textEnglish: 'An undocumented verbal result.',
        textArabic: 'نتيجة شفهية غير موثقة.',
      },
    ],
    correctOptionId: 'q2_2_A',
    explanationEnglish:
      'Laboratory Information System data can provide previous test results, organisms, susceptibility patterns, dates and turnaround times.',
    explanationArabic:
      'يمكن لبيانات نظام معلومات المختبر توفير نتائج الفحوصات السابقة والكائنات الدقيقة وأنماط الحساسية والتواريخ وأوقات إصدار النتائج.',
  },
  {
    id: 'q2_3',
    topicId: 'topic2',
    questionEnglish:
      'A researcher analyzes blood-culture contamination rates from the previous two years. What type of study is this?',
    questionArabic:
      'قام باحث بتحليل معدلات تلوث مزارع الدم خلال العامين السابقين. ما نوع هذه الدراسة؟',
    options: [
      {
        id: 'q2_3_A',
        textEnglish: 'Retrospective study.',
        textArabic: 'دراسة استعادية.',
      },
      {
        id: 'q2_3_B',
        textEnglish: 'Prospective study.',
        textArabic: 'دراسة مستقبلية.',
      },
      {
        id: 'q2_3_C',
        textEnglish: 'A study without data.',
        textArabic: 'دراسة من دون بيانات.',
      },
    ],
    correctOptionId: 'q2_3_A',
    explanationEnglish:
      'The researcher is examining laboratory information that was already generated during an earlier period.',
    explanationArabic:
      'يقوم الباحث بتحليل معلومات مخبرية تم إنشاؤها خلال فترة سابقة.',
  },
  {
    id: 'q2_4',
    topicId: 'topic2',
    questionEnglish: 'How can the laboratory support a retrospective study?',
    questionArabic: 'كيف يمكن للمختبر دعم الدراسة الاستعادية؟',
    options: [
      {
        id: 'q2_4_A',
        textEnglish: 'By retrieving, verifying, cleaning and interpreting historical laboratory data.',
        textArabic: 'باستخراج البيانات المخبرية السابقة والتحقق منها وتنقيحها وتفسيرها.',
      },
      {
        id: 'q2_4_B',
        textEnglish: 'By changing old patient results.',
        textArabic: 'بتغيير نتائج المرضى السابقة.',
      },
      {
        id: 'q2_4_C',
        textEnglish: 'By inventing missing laboratory values.',
        textArabic: 'بإنشاء نتائج مخبرية غير موجودة.',
      },
    ],
    correctOptionId: 'q2_4_A',
    explanationEnglish:
      'Laboratory professionals understand test names, methods, reference ranges, duplicate results, result changes and technical limitations.',
    explanationArabic:
      'يفهم المختصون في المختبر أسماء الفحوصات وطرقها والمديات المرجعية والنتائج المكررة والتغييرات التي طرأت على النتائج والمحدودية التقنية.',
  },
  {
    id: 'q2_5',
    topicId: 'topic2',
    questionEnglish: 'What is a possible limitation of retrospective research?',
    questionArabic: 'ما إحدى محدوديات البحوث الاستعادية؟',
    options: [
      {
        id: 'q2_5_A',
        textEnglish: 'Previous records may be incomplete or inconsistent.',
        textArabic: 'قد تكون السجلات السابقة غير مكتملة أو غير متسقة.',
      },
      {
        id: 'q2_5_B',
        textEnglish: 'It always requires collecting new specimens.',
        textArabic: 'تتطلب دائماً جمع عينات جديدة.',
      },
      {
        id: 'q2_5_C',
        textEnglish: 'Historical results can never be analyzed.',
        textArabic: 'لا يمكن تحليل النتائج السابقة مطلقاً.',
      },
    ],
    correctOptionId: 'q2_5_A',
    explanationEnglish:
      'The researcher has limited control over how previous information and specimens were originally collected and documented.',
    explanationArabic:
      'تكون قدرة الباحث محدودة في التحكم بطريقة جمع وتوثيق المعلومات والعينات السابقة.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  // TOPIC 3: PROSPECTIVE RESEARCH
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'q3_1',
    topicId: 'topic3',
    questionEnglish: 'What is a prospective research study?',
    questionArabic: 'ما المقصود بالدراسة البحثية المستقبلية؟',
    options: [
      {
        id: 'q3_1_A',
        textEnglish: 'A study that collects new information according to a predefined protocol.',
        textArabic: 'دراسة تجمع معلومات جديدة وفق بروتوكول محدد مسبقاً.',
      },
      {
        id: 'q3_1_B',
        textEnglish: 'A study that only reviews old records.',
        textArabic: 'دراسة تراجع السجلات القديمة فقط.',
      },
      {
        id: 'q3_1_C',
        textEnglish: 'A study that begins without a plan.',
        textArabic: 'دراسة تبدأ دون خطة.',
      },
    ],
    correctOptionId: 'q3_1_A',
    explanationEnglish:
      'Prospective studies define the research procedures before collecting new data or specimens.',
    explanationArabic:
      'تحدد الدراسات المستقبلية إجراءات البحث قبل البدء في جمع البيانات أو العينات الجديدة.',
  },
  {
    id: 'q3_2',
    topicId: 'topic3',
    questionEnglish: 'What should be defined before collecting specimens for a prospective study?',
    questionArabic: 'ما الذي يجب تحديده قبل جمع العينات في الدراسة المستقبلية؟',
    options: [
      {
        id: 'q3_2_A',
        textEnglish: 'Specimen type, volume, collection time, transport and storage conditions.',
        textArabic: 'نوع العينة وحجمها ووقت جمعها وظروف نقلها وتخزينها.',
      },
      {
        id: 'q3_2_B',
        textEnglish: 'Only the colour of the specimen label.',
        textArabic: 'لون ملصق العينة فقط.',
      },
      {
        id: 'q3_2_C',
        textEnglish: "Only the researcher's name.",
        textArabic: 'اسم الباحث فقط.',
      },
    ],
    correctOptionId: 'q3_2_A',
    explanationEnglish:
      'Standardized collection, transport, processing and storage reduce variation and improve the reliability of research findings.',
    explanationArabic:
      'يقلل توحيد جمع العينات ونقلها ومعالجتها وتخزينها من التباين ويحسن موثوقية النتائج البحثية.',
  },
  {
    id: 'q3_3',
    topicId: 'topic3',
    questionEnglish: 'What is an advantage of prospective research?',
    questionArabic: 'ما إحدى مزايا البحوث المستقبلية؟',
    options: [
      {
        id: 'q3_3_A',
        textEnglish: 'Greater control over data and specimen collection.',
        textArabic: 'تحكم أكبر في جمع البيانات والعينات.',
      },
      {
        id: 'q3_3_B',
        textEnglish: 'There is no need for quality control.',
        textArabic: 'لا تحتاج إلى ضبط الجودة.',
      },
      {
        id: 'q3_3_C',
        textEnglish: 'Ethical approval is never required.',
        textArabic: 'لا تحتاج مطلقاً إلى موافقة أخلاقية.',
      },
    ],
    correctOptionId: 'q3_3_A',
    explanationEnglish:
      'Prospective studies allow researchers to standardize collection timing, specimen handling, testing and follow-up.',
    explanationArabic:
      'تتيح الدراسات المستقبلية للباحثين توحيد توقيت الجمع والتعامل مع العينات والفحوصات والمتابعة.',
  },
  {
    id: 'q3_4',
    topicId: 'topic3',
    questionEnglish:
      'A study collects new patient specimens to evaluate a new biomarker. What type of study may this be?',
    questionArabic:
      'تجمع دراسة عينات جديدة من المرضى لتقييم مؤشر حيوي جديد. ما نوع هذه الدراسة؟',
    options: [
      {
        id: 'q3_4_A',
        textEnglish: 'Prospective study.',
        textArabic: 'دراسة مستقبلية.',
      },
      {
        id: 'q3_4_B',
        textEnglish: 'Retrospective study only.',
        textArabic: 'دراسة استعادية فقط.',
      },
      {
        id: 'q3_4_C',
        textEnglish: 'A study without specimen planning.',
        textArabic: 'دراسة دون تخطيط للعينات.',
      },
    ],
    correctOptionId: 'q3_4_A',
    explanationEnglish:
      'The study is collecting new specimens according to a planned research protocol.',
    explanationArabic:
      'تجمع الدراسة عينات جديدة وفق بروتوكول بحثي مخطط له مسبقاً.',
  },
  {
    id: 'q3_5',
    topicId: 'topic3',
    questionEnglish: 'Why must specimen storage conditions be included in the research protocol?',
    questionArabic: 'لماذا يجب تضمين ظروف تخزين العينات في بروتوكول البحث؟',
    options: [
      {
        id: 'q3_5_A',
        textEnglish: 'Incorrect storage may alter the specimen and affect the result.',
        textArabic: 'قد يؤدي التخزين غير الصحيح إلى تغير العينة والتأثير في النتيجة.',
      },
      {
        id: 'q3_5_B',
        textEnglish: 'Storage conditions never affect laboratory testing.',
        textArabic: 'لا تؤثر ظروف التخزين مطلقاً في الفحوصات المخبرية.',
      },
      {
        id: 'q3_5_C',
        textEnglish: 'Storage is required only for paper documents.',
        textArabic: 'التخزين مطلوب فقط للمستندات الورقية.',
      },
    ],
    correctOptionId: 'q3_5_A',
    explanationEnglish:
      'Temperature, storage duration, light exposure and repeated freezing and thawing may affect sample stability.',
    explanationArabic:
      'قد تؤثر درجة الحرارة ومدة التخزين والتعرض للضوء وتكرار التجميد والإذابة في ثبات العينة.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  // TOPIC 4: SPECIMENS AND PRE-ANALYTICAL QUALITY
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'q4_1',
    topicId: 'topic4',
    questionEnglish: 'What should happen when a research specimen is incorrectly labelled?',
    questionArabic: 'ما الإجراء المناسب عند وجود خطأ في تعريف عينة بحثية؟',
    options: [
      {
        id: 'q4_1_A',
        textEnglish: 'Follow the approved specimen rejection or discrepancy procedure.',
        textArabic: 'اتباع الإجراء المعتمد لرفض العينات أو معالجة حالات عدم التطابق.',
      },
      {
        id: 'q4_1_B',
        textEnglish: 'Guess the patient identity.',
        textArabic: 'تخمين هوية المريض.',
      },
      {
        id: 'q4_1_C',
        textEnglish: 'Accept the specimen without documentation.',
        textArabic: 'قبول العينة دون توثيق.',
      },
    ],
    correctOptionId: 'q4_1_A',
    explanationEnglish:
      'Accurate specimen identification is essential for patient safety, research integrity and traceability.',
    explanationArabic:
      'يُعد التعريف الصحيح للعينة ضرورياً لسلامة المريض ونزاهة البحث وإمكانية تتبع العينة.',
  },
  {
    id: 'q4_2',
    topicId: 'topic4',
    questionEnglish: 'Can delayed specimen transportation affect research results?',
    questionArabic: 'هل يمكن أن يؤثر تأخر نقل العينة في نتائج البحث؟',
    options: [
      {
        id: 'q4_2_A',
        textEnglish: 'Yes.',
        textArabic: 'نعم.',
      },
      {
        id: 'q4_2_B',
        textEnglish: 'No.',
        textArabic: 'لا.',
      },
    ],
    correctOptionId: 'q4_2_A',
    explanationEnglish:
      'Transportation delays may affect organism viability, cell integrity or the stability of the substance being measured.',
    explanationArabic:
      'قد يؤثر تأخر النقل في حيوية الكائنات الدقيقة أو سلامة الخلايا أو ثبات المادة المراد قياسها.',
  },
  {
    id: 'q4_3',
    topicId: 'topic4',
    questionEnglish: 'Which specimen is more reliable for research?',
    questionArabic: 'أي عينة أكثر موثوقية للاستخدام في البحث؟',
    options: [
      {
        id: 'q4_3_A',
        textEnglish: 'A correctly collected, labelled and transported specimen.',
        textArabic: 'عينة جُمعت وعُرّفت ونُقلت بطريقة صحيحة.',
      },
      {
        id: 'q4_3_B',
        textEnglish: 'An unlabelled specimen.',
        textArabic: 'عينة دون تعريف.',
      },
      {
        id: 'q4_3_C',
        textEnglish: 'A leaking specimen with unknown collection time.',
        textArabic: 'عينة متسربة ووقت جمعها غير معروف.',
      },
    ],
    correctOptionId: 'q4_3_A',
    explanationEnglish:
      'The quality of the research result depends strongly on the quality of the specimen before testing begins.',
    explanationArabic:
      'تعتمد جودة النتيجة البحثية بدرجة كبيرة على جودة العينة قبل بدء الفحص.',
  },
  {
    id: 'q4_4',
    topicId: 'topic4',
    questionEnglish: 'What does specimen traceability mean?',
    questionArabic: 'ما المقصود بإمكانية تتبع العينة؟',
    options: [
      {
        id: 'q4_4_A',
        textEnglish: 'Documenting the specimen from collection through transport, testing and storage.',
        textArabic: 'توثيق العينة منذ جمعها مروراً بنقلها وفحصها وتخزينها.',
      },
      {
        id: 'q4_4_B',
        textEnglish: 'Moving the specimen without recording any information.',
        textArabic: 'نقل العينة دون تسجيل أي معلومات.',
      },
      {
        id: 'q4_4_C',
        textEnglish: "Memorizing the patient's name without documentation.",
        textArabic: 'حفظ اسم المريض دون توثيق.',
      },
    ],
    correctOptionId: 'q4_4_A',
    explanationEnglish:
      'Traceability helps confirm who handled the specimen, what happened to it and when each step occurred.',
    explanationArabic:
      'تساعد إمكانية التتبع على معرفة من تعامل مع العينة وما الإجراءات التي تمت عليها ومتى حدثت كل خطوة.',
  },
  {
    id: 'q4_5',
    topicId: 'topic4',
    questionEnglish: 'Why is the correct specimen volume important in research?',
    questionArabic: 'لماذا يُعد حجم العينة الصحيح مهماً في البحث؟',
    options: [
      {
        id: 'q4_5_A',
        textEnglish: 'An insufficient or incorrect volume may prevent testing or affect accuracy.',
        textArabic: 'قد يمنع الحجم غير الكافي أو غير الصحيح إجراء الفحص أو يؤثر في دقته.',
      },
      {
        id: 'q4_5_B',
        textEnglish: 'Specimen volume has no effect on any laboratory test.',
        textArabic: 'لا يؤثر حجم العينة في أي فحص مخبري.',
      },
      {
        id: 'q4_5_C',
        textEnglish: 'A larger volume is always better for every test.',
        textArabic: 'الحجم الأكبر أفضل دائماً لجميع الفحوصات.',
      },
    ],
    correctOptionId: 'q4_5_A',
    explanationEnglish:
      'Each test has specific specimen-volume requirements based on the method, container and required repeat testing.',
    explanationArabic:
      'لكل فحص متطلبات محددة لحجم العينة تعتمد على الطريقة والوعاء والحاجة إلى إعادة الفحص.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  // TOPIC 5: LABORATORY QUALITY AND RELIABLE RESULTS
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'q5_1',
    topicId: 'topic5',
    questionEnglish: 'Why is quality control important in research laboratory testing?',
    questionArabic: 'لماذا يُعد ضبط الجودة مهماً في الفحوصات المخبرية البحثية؟',
    options: [
      {
        id: 'q5_1_A',
        textEnglish: 'It helps confirm that the testing process is performing correctly.',
        textArabic: 'يساعد على التأكد من أن عملية الفحص تعمل بشكل صحيح.',
      },
      {
        id: 'q5_1_B',
        textEnglish: 'It replaces the research protocol.',
        textArabic: 'يستبدل بروتوكول البحث.',
      },
      {
        id: 'q5_1_C',
        textEnglish: 'It is used only to make the report longer.',
        textArabic: 'يُستخدم فقط لزيادة طول التقرير.',
      },
    ],
    correctOptionId: 'q5_1_A',
    explanationEnglish:
      'Quality-control results help detect errors or performance problems before research results are interpreted.',
    explanationArabic:
      'تساعد نتائج ضبط الجودة على اكتشاف الأخطاء أو مشكلات الأداء قبل تفسير نتائج البحث.',
  },
  {
    id: 'q5_2',
    topicId: 'topic5',
    questionEnglish:
      'Should a new laboratory method be used in research without appropriate verification or validation?',
    questionArabic:
      'هل ينبغي استخدام طريقة مخبرية جديدة في البحث دون التحقق منها أو اعتمادها بالشكل المناسب؟',
    options: [
      {
        id: 'q5_2_A',
        textEnglish: 'No.',
        textArabic: 'لا.',
      },
      {
        id: 'q5_2_B',
        textEnglish: 'Yes, in every situation.',
        textArabic: 'نعم، في جميع الحالات.',
      },
    ],
    correctOptionId: 'q5_2_A',
    explanationEnglish:
      'The laboratory must demonstrate that the method performs appropriately for its intended research use.',
    explanationArabic:
      'يجب على المختبر إثبات أن الطريقة تعمل بصورة مناسبة للاستخدام البحثي المقصود.',
  },
  {
    id: 'q5_3',
    topicId: 'topic5',
    questionEnglish:
      'What can happen if different testing methods are used during one study without proper evaluation?',
    questionArabic:
      'ماذا قد يحدث عند استخدام طرق فحص مختلفة خلال دراسة واحدة دون تقييم مناسب؟',
    options: [
      {
        id: 'q5_3_A',
        textEnglish: 'The results may not be directly comparable.',
        textArabic: 'قد تصبح النتائج غير قابلة للمقارنة بشكل مباشر.',
      },
      {
        id: 'q5_3_B',
        textEnglish: 'The results will always be identical.',
        textArabic: 'ستكون النتائج متطابقة دائماً.',
      },
      {
        id: 'q5_3_C',
        textEnglish: 'The method has no effect on research data.',
        textArabic: 'لا تؤثر طريقة الفحص في بيانات البحث.',
      },
    ],
    correctOptionId: 'q5_3_A',
    explanationEnglish:
      'Changes in instruments, reagents, methods or reference ranges may introduce variation into research data.',
    explanationArabic:
      'قد تؤدي التغييرات في الأجهزة أو الكواشف أو الطرق أو المديات المرجعية إلى اختلافات في بيانات البحث.',
  },
  {
    id: 'q5_4',
    topicId: 'topic5',
    questionEnglish: 'Who should review unexpected or unusual research laboratory results?',
    questionArabic: 'من ينبغي أن يراجع النتائج المخبرية البحثية غير المتوقعة أو غير المعتادة؟',
    options: [
      {
        id: 'q5_4_A',
        textEnglish: 'A qualified laboratory professional.',
        textArabic: 'مختص مؤهل في المختبر.',
      },
      {
        id: 'q5_4_B',
        textEnglish: 'Any visitor at the booth.',
        textArabic: 'أي زائر للجناح.',
      },
      {
        id: 'q5_4_C',
        textEnglish: 'The result should never be reviewed.',
        textArabic: 'لا ينبغي مراجعة النتيجة.',
      },
    ],
    correctOptionId: 'q5_4_A',
    explanationEnglish:
      'Laboratory professionals can assess specimen quality, analytical performance, interferences and the need for repeat or confirmatory testing.',
    explanationArabic:
      'يمكن للمختصين في المختبر تقييم جودة العينة وأداء الفحص والتداخلات والحاجة إلى إعادة الفحص أو إجراء فحص تأكيدي.',
  },
  {
    id: 'q5_5',
    topicId: 'topic5',
    questionEnglish: 'Which statement best describes a reliable research result?',
    questionArabic: 'أي عبارة تصف النتيجة البحثية الموثوقة بشكل أفضل؟',
    options: [
      {
        id: 'q5_5_A',
        textEnglish:
          'It comes from a suitable specimen, validated method, quality-controlled process and correct interpretation.',
        textArabic:
          'تنتج عن عينة مناسبة وطريقة معتمدة وعملية خاضعة لضبط الجودة وتفسير صحيح.',
      },
      {
        id: 'q5_5_B',
        textEnglish: 'It is any result produced by an instrument.',
        textArabic: 'هي أي نتيجة يصدرها الجهاز.',
      },
      {
        id: 'q5_5_C',
        textEnglish: 'It does not require documentation.',
        textArabic: 'لا تحتاج إلى توثيق.',
      },
    ],
    correctOptionId: 'q5_5_A',
    explanationEnglish:
      'Research reliability depends on the full laboratory process, not only the final number shown on the report.',
    explanationArabic:
      'تعتمد موثوقية البحث على العملية المخبرية الكاملة وليس فقط على الرقم النهائي الظاهر في التقرير.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  // TOPIC 6: ETHICS AND RESEARCH COLLABORATION
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'q6_1',
    topicId: 'topic6',
    questionEnglish:
      'Should identifiable patient information be visible to everyone involved in a research project?',
    questionArabic:
      'هل ينبغي أن تكون معلومات المرضى التعريفية متاحة لجميع المشاركين في المشروع البحثي؟',
    options: [
      {
        id: 'q6_1_A',
        textEnglish: 'No. Access should be limited to authorized individuals.',
        textArabic: 'لا. يجب أن يقتصر الوصول عليها على الأشخاص المصرح لهم.',
      },
      {
        id: 'q6_1_B',
        textEnglish: 'Yes. It should be publicly displayed.',
        textArabic: 'نعم. يجب عرضها للجميع.',
      },
    ],
    correctOptionId: 'q6_1_A',
    explanationEnglish:
      'Patient confidentiality and data protection are essential requirements in responsible research.',
    explanationArabic:
      'تُعد سرية معلومات المرضى وحماية البيانات من المتطلبات الأساسية للبحث المسؤول.',
  },
  {
    id: 'q6_2',
    topicId: 'topic6',
    questionEnglish:
      'What is normally required before starting research involving patients, patient data or human specimens?',
    questionArabic:
      'ما المطلوب عادة قبل بدء بحث يشمل المرضى أو بياناتهم أو عينات بشرية؟',
    options: [
      {
        id: 'q6_2_A',
        textEnglish: 'Appropriate ethical and Institutional Review Board approval.',
        textArabic: 'الموافقة الأخلاقية وموافقة لجنة المراجعة المؤسسية المناسبة.',
      },
      {
        id: 'q6_2_B',
        textEnglish: 'Only verbal permission from a colleague.',
        textArabic: 'موافقة شفهية من أحد الزملاء فقط.',
      },
      {
        id: 'q6_2_C',
        textEnglish: 'No approval is required.',
        textArabic: 'لا يلزم الحصول على أي موافقة.',
      },
    ],
    correctOptionId: 'q6_2_A',
    explanationEnglish:
      'Ethical review helps protect research participants and ensures that the study follows approved scientific and institutional requirements.',
    explanationArabic:
      'تساعد المراجعة الأخلاقية على حماية المشاركين والتأكد من التزام الدراسة بالمتطلبات العلمية والمؤسسية المعتمدة.',
  },
  {
    id: 'q6_3',
    topicId: 'topic6',
    questionEnglish: 'Can archived laboratory specimens automatically be used for any research project?',
    questionArabic: 'هل يمكن استخدام العينات المخبرية المؤرشفة تلقائياً في أي مشروع بحثي؟',
    options: [
      {
        id: 'q6_3_A',
        textEnglish: 'No.',
        textArabic: 'لا.',
      },
      {
        id: 'q6_3_B',
        textEnglish: 'Yes, without any review.',
        textArabic: 'نعم، دون أي مراجعة.',
      },
    ],
    correctOptionId: 'q6_3_A',
    explanationEnglish:
      'The use of archived specimens must follow ethical approval, consent requirements, specimen suitability and hospital policies.',
    explanationArabic:
      'يجب أن يتوافق استخدام العينات المؤرشفة مع الموافقة الأخلاقية ومتطلبات الموافقة وملاءمة العينة وسياسات المستشفى.',
  },
  {
    id: 'q6_4',
    topicId: 'topic6',
    questionEnglish: 'Who should help prepare the laboratory testing section of a research protocol?',
    questionArabic: 'من ينبغي أن يشارك في إعداد قسم الفحوصات المخبرية في بروتوكول البحث؟',
    options: [
      {
        id: 'q6_4_A',
        textEnglish: 'A qualified medical laboratory professional.',
        textArabic: 'مختص مؤهل في المختبرات الطبية.',
      },
      {
        id: 'q6_4_B',
        textEnglish: 'An unrelated hospital visitor.',
        textArabic: 'زائر للمستشفى لا علاقة له بالدراسة.',
      },
      {
        id: 'q6_4_C',
        textEnglish: 'Nobody from the laboratory.',
        textArabic: 'لا حاجة لمشاركة أي شخص من المختبر.',
      },
    ],
    correctOptionId: 'q6_4_A',
    explanationEnglish:
      'Laboratory professionals help ensure that specimen requirements, testing methods, quality procedures and resources are scientifically appropriate.',
    explanationArabic:
      'يساعد المختصون في المختبر على التأكد من ملاءمة متطلبات العينات وطرق الفحص وإجراءات الجودة والموارد من الناحية العلمية.',
  },
  {
    id: 'q6_5',
    topicId: 'topic6',
    questionEnglish: 'What is the best approach when planning research that involves laboratory testing?',
    questionArabic: 'ما أفضل نهج عند التخطيط لبحث يتضمن فحوصات مخبرية؟',
    options: [
      {
        id: 'q6_5_A',
        textEnglish: 'Collaborate with the Medical Laboratory Department early.',
        textArabic: 'التعاون مع إدارة المختبرات الطبية في مرحلة مبكرة.',
      },
      {
        id: 'q6_5_B',
        textEnglish: 'Collect all specimens before informing the laboratory.',
        textArabic: 'جمع جميع العينات قبل إبلاغ المختبر.',
      },
      {
        id: 'q6_5_C',
        textEnglish: 'Begin testing without confirming feasibility.',
        textArabic: 'بدء الفحوصات دون التأكد من إمكانية تنفيذها.',
      },
    ],
    correctOptionId: 'q6_5_A',
    explanationEnglish:
      'Early collaboration prevents avoidable errors, delays, unsuitable specimen collection, unavailable testing and unexpected costs.',
    explanationArabic:
      'يساعد التعاون المبكر على تجنب الأخطاء والتأخير وجمع عينات غير مناسبة وعدم توفر الفحوصات والتكاليف غير المتوقعة.',
  },
];

export const getQuestionsByTopic = (topicId: string): Question[] =>
  ALL_QUESTIONS.filter((q) => q.topicId === topicId);
