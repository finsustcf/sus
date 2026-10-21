window.PLATFORM_DATA = {
  "id": "sus",
  "title": "永續金融週報",
  "brand": "永續金融週報",
  "icon": "leaf",
  "authAppName": "sustainability",
  "queue": true,
  "requiresFacts": false,
  "requiresUpgrade": false,
  "summaryLimit": 1400,
  "maxPerRun": 6,
  "defaults": {
    "dailyLimit": 8,
    "maxPerRun": 3
  },
  "collections": {
    "articles": "susArticles",
    "reports": "susWeeklyReports",
    "status": "susPublicStatus",
    "sources": "susSources",
    "settings": "susSettings",
    "runs": "susRuns",
    "quotas": null,
    "knowledge": "susKnowledge",
    "feedback": "susFeedback"
  },
  "functions": {
    "initialize": "susInitializePlatform",
    "seed": "susInitializePlatform",
    "collect": "susRefreshSources",
    "weekly": "susGenerateWeeklyReport",
    "pipeline": "susSetPipeline",
    "source": "susSaveSource",
    "ingest": "susIngestArticle",
    "edit": "susEditArticle",
    "visibility": "susSetVisibility",
    "feedback": "susSaveSource",
    "permanentDelete": "susSetVisibility",
    "compact": "susGenerateWeeklyReport"
  },
  "topics": [
    "政策與揭露",
    "氣候與自然風險",
    "永續與轉型金融",
    "銀行實務"
  ],
  "sourceTypes": [
    "主管機關",
    "同業公告",
    "相關機構",
    "新聞媒體"
  ],
  "knowledgeSeeds": [
    {
      "term": "國際永續準則理事會",
      "aliases": [
        "ISSB",
        "International Sustainability Standards Board"
      ],
      "definition": "IFRS 基金會之下制定永續揭露準則的理事會，發布 IFRS S1 與 IFRS S2 等準則。",
      "bankRelevance": "協助理解企業永續資訊揭露及銀行評估往來企業資料的共同背景。",
      "source": "IFRS 基金會",
      "url": "https://www.ifrs.org/sustainability/knowledge-hub/introduction-to-issb-and-ifrs-sustainability-disclosure-standards/",
      "topics": [
        "政策與揭露"
      ],
      "id": "be6aae03dd982c740d8b32ea8f94e07bce1f83824a5d98f5f378ddc5f392d1ee",
      "articleIds": [],
      "published": true,
      "englishTerm": "International Sustainability Standards Board",
      "abbreviation": "ISSB",
      "translation": "國際永續準則理事會"
    },
    {
      "term": "央行與監理機關綠色金融網絡",
      "aliases": [
        "NGFS",
        "Network for Greening the Financial System"
      ],
      "definition": "由央行與金融監理機關組成、以自願方式交流環境與氣候風險管理經驗及綠色金融研究的網絡。",
      "bankRelevance": "其研究可用來理解金融體系氣候風險與自然風險管理的發展。",
      "source": "NGFS",
      "url": "https://www.ngfs.net/en/about-us/origin-and-purpose",
      "topics": [
        "氣候與自然風險"
      ],
      "id": "eb853382a8710482e231de7afeaf55f3c9454295b818f5047b585e1015a7cc0c",
      "articleIds": [],
      "published": true,
      "englishTerm": "Network for Greening the Financial System",
      "abbreviation": "NGFS",
      "translation": "央行與監理機關綠色金融網絡"
    },
    {
      "term": "永續相關財務資訊揭露",
      "aliases": [
        "IFRS S1",
        "General Requirements for Disclosure of Sustainability-related Financial Information"
      ],
      "definition": "IFRS S1 規範企業揭露可影響其前景的永續相關風險與機會資訊，供一般用途財務報告的主要使用者作決策。",
      "bankRelevance": "協助理解往來企業的永續風險資訊，以及永續資訊與財務評估的關係；實際適用仍須依所在地規範判斷。",
      "source": "IFRS 基金會",
      "url": "https://www.ifrs.org/supporting-implementation/supporting-materials-for-ifrs-sustainability-disclosure-standards/ifrs-s1/",
      "topics": [
        "政策與揭露"
      ],
      "id": "44161d103fad11b129cfaa6ad761951e68547ec8c113df5a7ab0505eacf6b155",
      "articleIds": [],
      "published": true,
      "englishTerm": "General Requirements for Disclosure of Sustainability-related Financial Information",
      "abbreviation": "IFRS S1",
      "translation": "永續相關財務資訊揭露"
    },
    {
      "term": "氣候相關揭露",
      "aliases": [
        "IFRS S2",
        "Climate-related Disclosures"
      ],
      "definition": "IFRS S2 聚焦企業氣候相關風險與機會的資訊揭露，涵蓋治理、策略、風險管理，以及指標與目標。",
      "bankRelevance": "可作為理解企業氣候風險及銀行授信、投資評估所需資訊的參考。",
      "source": "IFRS 基金會",
      "url": "https://www.ifrs.org/supporting-implementation/supporting-materials-for-ifrs-sustainability-disclosure-standards/ifrs-s2/",
      "topics": [
        "政策與揭露",
        "氣候與自然風險"
      ],
      "id": "73b940af94b07cd6660897ca53ab6b4810564e87c8fb9956df4d3c67bf36f56f",
      "articleIds": [],
      "published": true,
      "englishTerm": "Climate-related Disclosures",
      "abbreviation": "IFRS S2",
      "translation": "氣候相關揭露"
    },
    {
      "term": "投融資排放",
      "aliases": [
        "Financed emissions",
        "融資排放"
      ],
      "definition": "與金融機構貸款及投資活動相關聯、歸屬於其投融資組合的溫室氣體排放；PCAF 提供金融業衡量及報告方法。",
      "bankRelevance": "用於理解授信與投資組合的排放資訊、資料品質及減碳管理，不等同銀行營運本身的直接排放。",
      "source": "碳核算金融聯盟（PCAF）",
      "url": "https://www.carbonaccountingfinancials.com/en/standard",
      "topics": [
        "氣候與自然風險",
        "永續與轉型金融"
      ],
      "id": "547b59cc66818e672d8a01740e9f2244a61959bce973dbe4ac6c1a2a6f0d2efc",
      "articleIds": [],
      "published": true,
      "englishTerm": "Financed emissions",
      "abbreviation": "",
      "translation": "投融資排放"
    }
  ]
};
