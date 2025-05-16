const daily_quest_db = {};

daily_quest_db.THE_BATTLE_AGAINST_ORCS = {
  id: "THE_BATTLE_AGAINST_ORCS",
  name: "A Batalha Contra os Orcs",
  mob_kill: [
    { target_id: "ORC_ZOMBIE", amount: 15 },
    { target_id: "ZENORC", amount: 10 }],
  delivery: [
    { map_id: "GEF_FILD10", x: 150, y: 120, npc_id: "4_M_ROYALGUARD" }]
};

daily_quest_db.THE_LEGEND_LOST_FISHER = {
  id: "THE_LEGEND_LOST_FISHER",
  name: "A Lenda do Pescador Perdido",
  npc_sequence: [
    { map_id: "ALBERTA", x: 119, y: 63, npc_id: "4_M_SEAMAN" },
    { map_id: "PAY_FILD02", x: 126, y: 134, npc_id: "4_TOWER_01" }],
  delivery: [
    { map_id: "ALBERTA", x: 119, y: 63, npc_id: "4_M_SEAMAN" }]
};

daily_quest_db.THE_MOUNT_PATROL = {
  id: "THE_MOUNT_PATROL",
  name: "A Patrulha da Montanha",
  mob_kill: [
    { target_id: "GOBLIN_4", amount: 15 },
    { target_id: "GOBLIN_ARCHER", amount: 10 }],
  delivery: [
    { map_id: "MJOLNIR_01", x: 160, y: 120, npc_id: "4_M_CRU_SOLD" }]
};

daily_quest_db.THE_WILD_CAT_PLAGUE = {
  id: "THE_WILD_CAT_PLAGUE",
  name: "A Praga dos Gatos Selvagens",
  mob_kill: [
    { target_id: "WILD_ROSE", amount: 15 },
    { target_id: "LEAF_CAT", amount: 15 }],
  delivery: [
    { map_id: "PAYON", x: 110, y: 90, npc_id: "4_CAT_SAILOR1" }]
};

daily_quest_db.THE_SPIDER_REVOLT = {
  id: "THE_SPIDER_REVOLT",
  name: "A Revolta das Aranhas",
  mob_kill: [
    { target_id: "ARGOS", amount: 15 },
    { target_id: "ARGIOPE", amount: 10 }],
  delivery: [
    { map_id: "GEFFEN", x: 145, y: 201, npc_id: "4_M_TUFFOLD" }]
};

daily_quest_db.SLIME_REBELLION = {
  id: "SLIME_REBELLION",
  name: "A Revolta dos Slimes",
  mob_kill: [
    { target_id: "METALING", amount: 15 },
    { target_id: "MARIN", amount: 10 }],
  delivery: [
    { map_id: "GEFFEN", x: 165, y: 123, npc_id: "4_F_JP_RINNE" }]
};

daily_quest_db.ICE_THREAT = {
  id: "ICE_THREAT",
  name: "Ameaça do Gelo",
  mob_kill: [
    { target_id: "SASQUATCH", amount: 15 },
    { target_id: "MYSTCASE", amount: 10 }],
  delivery: [
    { map_id: "XMAS", x: 145, y: 45, npc_id: "4_F_05" }]
};

daily_quest_db.DOCK_THREAT = {
  id: "DOCK_THREAT",
  name: "Ameaça nas Docas",
  mob_kill: [
    { target_id: "PERMETER", amount: 15 },
    { target_id: "FREEZER", amount: 10 }],
  delivery: [
    { map_id: "ALBERTA", x: 192, y: 120, npc_id: "4_MAL_CAPTAIN" }]
};

daily_quest_db.SHADOWS_OF_PRONTERA = {
  id: "SHADOWS_OF_PRONTERA",
  name: "As Sombras de Prontera",
  npc_sequence: [
    { map_id: "PRONTERA", x: 161, y: 285, npc_id: "4_M_ALCHE_A" },
    { map_id: "PRONTERA", x: 121, y: 209, npc_id: "4_F_NFLOSTGIRL" },
    { map_id: "PRONTERA", x: 274, y: 353, npc_id: "4_ENERGY_BLACK" }],
  delivery: [
    { map_id: "PRONTERA", x: 124, y: 166, npc_id: "4_M_BARYO_OLD" }]
};

daily_quest_db.HUNT_FOR_THE_GOLDEN_EAGLE = {
  id: "HUNT_FOR_THE_GOLDEN_EAGLE",
  name: "Caça a Águia Dourada",
  mob_kill: [
    { target_id: "DRAGON_TAIL", amount: 15 },
    { target_id: "GREATEST_GENERAL", amount: 10 }],
  delivery: [
    { map_id: "PAYON", x: 220, y: 140, npc_id: "4_M_JOB_HUNTER" }]
};

daily_quest_db.SNAKE_HUNT = {
  id: "SNAKE_HUNT",
  name: "Caçada a Serpente",
  mob_kill: [
    { target_id: "GOBLIN_4", amount: 10 },
    { target_id: "ANACONDAQ", amount: 10 }],
  delivery: [
    { map_id: "MJOLNIR_02", x: 170, y: 150, npc_id: "4_M_SAKRAY" }]
};

daily_quest_db.NIGHT_HUNTERS = {
  id: "NIGHT_HUNTERS",
  name: "Caçadores Noturno",
  mob_kill: [
    { target_id: "KNIGHT_OF_ABYSS", amount: 15 },
    { target_id: "ALICE", amount: 10 }],
  delivery: [
    { map_id: "PAYON", x: 190, y: 180, npc_id: "4_M_KAGE_OLD" }]
};

daily_quest_db.THIEF_AMBUSH = {
  id: "THIEF_AMBUSH",
  name: "Emboscada dos Ladrões",
  mob_kill: [
    { target_id: "KOBOLD_3", amount: 15 },
    { target_id: "KOBOLD_ARCHER", amount: 10 }],
  delivery: [
    { map_id: "MOC_FILD16", x: 172, y: 131, npc_id: "4_DST_SOLDIER" }]
};

daily_quest_db.SWAMP_SPIRITS = {
  id: "SWAMP_SPIRITS",
  name: "Espíritos do Pântano",
  mob_kill: [
    { target_id: "STING", amount: 15 },
    { target_id: "JOKER", amount: 3 }],
  delivery: [
    { map_id: "MOROCC", x: 50, y: 141, npc_id: "SYS_MSG" }]
};

daily_quest_db.ABYSS_STALKERS = {
  id: "ABYSS_STALKERS",
  name: "Espreitadores do Abismo",
  mob_kill: [
    { target_id: "POISON_SPORE", amount: 15 },
    { target_id: "THARA_FROG", amount: 15 }],
  delivery: [
    { map_id: "GLAST_01", x: 160, y: 98, npc_id: "4_M_EIN_SOLDIER" }]
};

daily_quest_db.TREASURE_GUARDIANS = {
  id: "TREASURE_GUARDIANS",
  name: "Guardiões do Tesouro",
  mob_kill: [
    { target_id: "SUCCUBUS", amount: 10 },
    { target_id: "FAKE_ANGEL", amount: 10 }],
  delivery: [
    { map_id: "ALBERTA", x: 174, y: 84, npc_id: "4_BLACKDRAGON" }]
};

daily_quest_db.FARM_INVASION = {
  id: "FARM_INVASION",
  name: "Invasão da Fazenda",
  mob_kill: [
    { target_id: "ARGIOPE", amount: 15 },
    { target_id: "PETIT", amount: 15 }],
  delivery: [
    { map_id: "PAYON", x: 215, y: 267, npc_id: "4_M_JOB_BLACKSMITH" }]
};

daily_quest_db.ENCODED_MESSAGE = {
  id: "ENCODED_MESSAGE",
  name: "Mensagem Codificada",
  npc_start: { map_id: "PRONTERA", x: 133, y: 189, npc_id: "4_M_ROKI" },
  messages: [
    "O corvo canta ao amanhecer",
    "A lua brilha no deserto",
    "O lobo uiva na tempestade",
    "A chave está no labirinto",
    "O dragão dorme na montanha"],
  delivery: [
    { map_id: "GEFFEN_IN", x: 64, y: 144, npc_id: "4_M_MERCAT1" },
    { map_id: "PAYON_IN01", x: 21, y: 4, npc_id: "2_M_OLDBLSMITH" },
    { map_id: "MOROCC", x: 142, y: 102, npc_id: "4_M_DST_MASTER" }]
};

daily_quest_db.ORC_ALERT = {
  id: "ORC_ALERT",
  name: "O Alerta dos Orcs",
  mob_kill: [
    { target_id: "HIGH_ORC", amount: 10 },
    { target_id: "ORC_SKELETON", amount: 10 }],
  delivery: [
    { map_id: "GEF_FILD10", x: 123, y: 119, npc_id: "4_M_KNIGHT_BLACK" }]
};

daily_quest_db.WOLF_ATTACK = {
  id: "WOLF_ATTACK",
  name: "O Ataque dos Lobos",
  mob_kill: [
    { target_id: "DESERT_WOLF", amount: 15 },
    { target_id: "DESERT_WOLF_B", amount: 10 }],
  delivery: [
    { map_id: "PRT_FILD03", x: 110, y: 90, npc_id: "4_M_HEINRICH" }]
};

daily_quest_db.BAT_ATTACK = {
  id: "BAT_ATTACK",
  name: "O Ataque dos Morcegos",
  mob_kill: [
    { target_id: "DRAINLIAR", amount: 20 },
    { target_id: "GARGOYLE", amount: 5 }],
  delivery: [
    { map_id: "MOROCC", x: 74, y: 84, npc_id: "4_M_LGTGUARD" }]
};

daily_quest_db.RESTLESS_CEMETERY = {
  id: "RESTLESS_CEMETERY",
  name: "O Cemitério Agitado",
  mob_kill: [
    { target_id: "EVIL_DRUID", amount: 15 },
    { target_id: "WRAITH", amount: 15 }],
  delivery: [
    { map_id: "PAYON", x: 140, y: 228, npc_id: "4_M_PAY_SOLDIER" }]
};

daily_quest_db.DRAGON_AWAKENING = {
  id: "DRAGON_AWAKENING",
  name: "O Despertar dos Dragões",
  mob_kill: [
    { target_id: "PETIT", amount: 10 },
    { target_id: "DANCING_DRAGON", amount: 10 }],
  delivery: [
    { map_id: "GEFFEN", x: 165, y: 81, npc_id: "4_M_JOB_WIZARD" }]
};

daily_quest_db.ANT_ARMY = {
  id: "ANT_ARMY",
  name: "O Exército das Formigas",
  mob_kill: [
    { target_id: "PIERE", amount: 15 },
    { target_id: "DENIRO", amount: 15 }],
  delivery: [
    { map_id: "MOROCC", x: 187, y: 56, npc_id: "1_M_SIGN1" }]
};

daily_quest_db.LOST_HERBS_MYSTERY = {
  id: "LOST_HERBS_MYSTERY",
  name: "O Mistério das Ervas Perdidas",
  mob_kill: [
    { target_id: "WILOW", amount: 10 },
    { target_id: "RODA_FROG", amount: 10 },
    { target_id: "MANDRAGORA", amount: 10 }],
  delivery: [
    { map_id: "PAYON", x: 188, y: 134, npc_id: "4_M_TWTEAMAN" }]
};

daily_quest_db.DARK_RITUAL = {
  id: "DARK_RITUAL",
  name: "O Ritual Sombrio",
  mob_kill: [
    { target_id: "OBEAUNE", amount: 15 },
    { target_id: "MERMAN", amount: 10 }],
  delivery: [
    { map_id: "PRT_FILD05", x: 150, y: 120, npc_id: "4_M_OLDFRIAR" }]
};

daily_quest_db.SHINING_CRYSTAL_SECRET = {
  id: "SHINING_CRYSTAL_SECRET",
  name: "O Segredo dos Cristais Brilhantes",
  npc_sequence: [
    { map_id: "GEFFEN", x: 115, y: 95, npc_id: "1_M_SIZ" },
    { map_id: "GEFFEN", x: 87, y: 126, npc_id: "GEFFEN_MAGE_3_2" },
    { map_id: "GEFFEN", x: 119, y: 139, npc_id: "1_F_MARIA" },
    { map_id: "GEFFEN", x: 177, y: 168, npc_id: "JP_ARUNA" }],
  delivery: [
    { map_id: "GEFFEN", x: 115, y: 95, npc_id: "1_M_SIZ" }]
};

daily_quest_db.HAUNTED_VALLEY = {
  id: "HAUNTED_VALLEY",
  name: "O Vale Assombrado",
  mob_kill: [
    { target_id: "MIMIC", amount: 10 },
    { target_id: "GHOUL", amount: 10 }],
  delivery: [
    { map_id: "PAYON", x: 163, y: 198, npc_id: "4_M_CHNMONK" }]
};

daily_quest_db.AGONY_VALLEY = {
  id: "AGONY_VALLEY",
  name: "O Vale da Agonia",
  mob_kill: [
    { target_id: "ALLIGATOR", amount: 15 },
    { target_id: "FUR_SEAL", amount: 10 }],
  delivery: [
    { map_id: "PAY_FILD03", x: 180, y: 97, npc_id: "1_M_SIGNMONK2" }]
};

daily_quest_db.THIEF_STRIKES = {
  id: "THIEF_STRIKES",
  name: "Os Golpes dos Ladrões",
  mob_kill: [
    { target_id: "THIEF_BUG", amount: 15 },
    { target_id: "CRAMP", amount: 15 }],
  delivery: [
    { map_id: "MOROCC", x: 171, y: 112, npc_id: "4_M_DST_TOUGH" }]
};

daily_quest_db.CRYSTAL_GUARDIANS = {
  id: "CRYSTAL_GUARDIANS",
  name: "Os Guardiões de Cristal",
  mob_kill: [
    { target_id: "LIVE_PEACH_TREE", amount: 10 },
    { target_id: "MEDUSA", amount: 10 }],
  delivery: [
    { map_id: "GEFFEN", x: 184, y: 160, npc_id: "2_F_MAGICMASTER" }]
};

daily_quest_db.WINGED_INVADERS = {
  id: "WINGED_INVADERS",
  name: "Os Invasores Alados",
  mob_kill: [
    { target_id: "DEVIRUCHI", amount: 15 },
    { target_id: "HODE", amount: 10 }],
  delivery: [
    { map_id: "PRT_FILD05", x: 140, y: 180, npc_id: "4_M_KNIGHT_BLACK" }]
};

daily_quest_db.UNDERGROUND_RATS = {
  id: "UNDERGROUND_RATS",
  name: "Os Ratos do Subsolo",
  mob_kill: [
    { target_id: "CRAMP", amount: 20 },
    { target_id: "MARTIN", amount: 5 }],
  delivery: [
    { map_id: "IZLUDE", x: 120, y: 104, npc_id: "4_M_MOC_SOLDIER" }]
};

daily_quest_db.PLAINS_DANGER = {
  id: "PLAINS_DANGER",
  name: "Perigo nas Planícies",
  mob_kill: [
    { target_id: "INCREASE_SOIL", amount: 15 },
    { target_id: "MANTIS", amount: 15 }],
  delivery: [
    { map_id: "GEF_FILD06", x: 113, y: 217, npc_id: "4_M_KNIGHT_BLACK" }]
};

daily_quest_db.all = [
  daily_quest_db.THE_BATTLE_AGAINST_ORCS, daily_quest_db.THE_LEGEND_LOST_FISHER, daily_quest_db.THE_MOUNT_PATROL, daily_quest_db.THE_WILD_CAT_PLAGUE, daily_quest_db.THE_SPIDER_REVOLT, daily_quest_db.SLIME_REBELLION, daily_quest_db.ICE_THREAT, daily_quest_db.DOCK_THREAT, daily_quest_db.SHADOWS_OF_PRONTERA, daily_quest_db.HUNT_FOR_THE_GOLDEN_EAGLE, daily_quest_db.SNAKE_HUNT, daily_quest_db.NIGHT_HUNTERS, daily_quest_db.THIEF_AMBUSH, daily_quest_db.SWAMP_SPIRITS, daily_quest_db.ABYSS_STALKERS, daily_quest_db.TREASURE_GUARDIANS, daily_quest_db.FARM_INVASION, daily_quest_db.ENCODED_MESSAGE, daily_quest_db.ORC_ALERT, daily_quest_db.WOLF_ATTACK, daily_quest_db.BAT_ATTACK, daily_quest_db.RESTLESS_CEMETERY, daily_quest_db.DRAGON_AWAKENING, daily_quest_db.ANT_ARMY, daily_quest_db.LOST_HERBS_MYSTERY, daily_quest_db.DARK_RITUAL, daily_quest_db.SHINING_CRYSTAL_SECRET, daily_quest_db.HAUNTED_VALLEY, daily_quest_db.AGONY_VALLEY, daily_quest_db.THIEF_STRIKES, daily_quest_db.CRYSTAL_GUARDIANS, daily_quest_db.WINGED_INVADERS, daily_quest_db.UNDERGROUND_RATS, daily_quest_db.PLAINS_DANGER];
