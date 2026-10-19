/* Platform identity and backend mapping. Shared UI files are identical in both repositories. */
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
  "resumeTimes": "12:30、17:30",
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
    "quotas": "susQuotas"
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
    "retry": "susRetryQueue"
  },
  "topics": [
    "政策與揭露",
    "氣候與自然風險",
    "永續與轉型金融",
    "銀行實務"
  ],
  "sourceTypes": [
    "主管機關",
    "相關機構",
    "新聞媒體"
  ]
};
