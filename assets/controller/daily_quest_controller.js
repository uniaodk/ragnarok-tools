window.onload = function () {
  const section_daily_quest = document.getElementById("section-daily-quest");
  const daily_quest_id = route.get_param("daily_quest_id");
  if (daily_quest_id) {
    section_daily_quest.innerHTML = daily_quest_service.build_quest_page(daily_quest_db[daily_quest_id]);
    return;
  }
  section_daily_quest.innerHTML = daily_quest_service.build_ul_template();
}