window.onload = function () {
  const body_daily_quest = document.getElementById("body-daily-quest");
  const header_daily_quest = document.getElementById("header-daily-quest");
  const daily_quest_id = route.get_param("daily_quest_id");
  if (daily_quest_id) {
    body_daily_quest.innerHTML = daily_quest_service.build_quest_page(daily_quest_db[daily_quest_id]);
    return;
  }
  header_daily_quest.innerHTML = daily_quest_service.build_header_daily_quest();
  body_daily_quest.innerHTML = daily_quest_service.build_ul_template();
}

function on_change_search(event) {
  const body_daily_quest = document.getElementById("body-daily-quest");
  body_daily_quest.innerHTML = daily_quest_service.build_ul_template(event.target.value);
}