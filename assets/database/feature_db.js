const feature_db = {};

feature_db.DAYS_TO_CONSIDER_NEW = 7;

feature_db.DAILY_QUEST = { id: "DAILY_QUEST", created_at: '2025-05-14', name: "Quest Diária", href: "assets/view/daily_quest.html" };
feature_db.SIMULATOR_ITEM_QUEST = { id: "SIMULATOR_ITEM_QUEST", created_at: '2025-05-14', name: "Simulador - Item Quest", href: "https://uniaodk.github.io/ragnarok-item-quest-simulator" };
feature_db.MVP_TIMER = { id: "MVP_TIMER", created_at: "2025-05-14", name: "Timer MVP", href: "https://www.ragnarokmvptimer.com" }

feature_db.all = [
  feature_db.MVP_TIMER,
  feature_db.DAILY_QUEST,
  feature_db.SIMULATOR_ITEM_QUEST
]