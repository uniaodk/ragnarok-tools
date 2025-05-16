const daily_quest_service = {};

const KILL_MOB = { name: 'sword', title: "Matar MOB" };
const NPC_CHAT = { name: 'chat_quest', title: "Conversar com NPC" };


daily_quest_service.get_type_quest = (daily_quest) => {
  return daily_quest.mob_kill ? KILL_MOB : NPC_CHAT;
};

daily_quest_service.build_legend_type_quest = () => {
  return [KILL_MOB, NPC_CHAT].reduce((template, type) => {
    return template + `<div class="legend">
      <img class="${type.name}" src="../icon/${type.name}.svg" alt="Type Quest ${type.name}"/>
      <small>${type.title}</small>
      </div>
    `;
  }, '<div class="rt-daily-quest___legend">') + '</div>';
}

daily_quest_service.build_header_daily_quest = function () {
  return `<h1>Daily Quests</h1>
    <input id="search-daily-quest" type="search" placeholder="Busque pelo nome da quest" onkeyup="on_change_search(event)"/>
    `
}

daily_quest_service.build_ul_template = function (criteria = null) {
  const daily_quest_filtered = daily_quest_db.all.filter(quest => criteria == null || criteria == '' || quest.name.trim().toLowerCase().includes(criteria.trim().toLowerCase()));
  if (daily_quest_filtered.length === 0) {
    return `<ul class="rt-daily-quest___list"><li>Nenhuma quest encontrada!</li></ul>`
  }
  return daily_quest_filtered.reduce((template, quest) => {
    const type_quest = daily_quest_service.get_type_quest(quest);
    return template + `
      <li class="rt-daily-quest___item">
        <a href="../view/daily_quest.html?daily_quest_id=${quest.id}">${quest.name}</a>
        <img class="${type_quest.name}" src="../icon/${type_quest.name}.svg" title="${type_quest.title}" alt="Ícone Tipo Quest"/>
      </li>`
  }, '<ul class="rt-daily-quest___list">') + `
    <br><li>${daily_quest_service.build_legend_type_quest()}</li>
  </ul>`;
}

daily_quest_service.build_quest_page = function (daily_quest) {
  const delivery_message = `Receber recompensa ${daily_quest.messages ? "em um dos seguintes NPC:" : "em:"}`;
  return `<a class="highlight" href="../view/daily_quest.html">Daily Quest</a>
  <h1>${daily_quest.name}</h1>
  ${daily_quest_service.build_mob_kill_details(daily_quest.mob_kill)}
  ${daily_quest_service.build_npc_sequence_location(daily_quest.npc_sequence)}
  ${daily_quest_service.build_quest_messages(daily_quest.npc_start, daily_quest.messages)}
  <br><br>
  <h3>${delivery_message}</h3><hr class="underline">
  ${daily_quest_service.build_npc_sequence_location(daily_quest.delivery, false)}
  `
}

daily_quest_service.build_mob_kill_details = function (mob_kill) {
  if (!mob_kill) return "";
  const header = `<h3>Matar os monstros:</h3> <hr class="underline">
  <div class="rt-daily-quest___mobs">`;
  return mob_kill.reduce((template, target) => {
    const mob = mob_db[target.target_id];
    return template + `
    <div class="rt-daily-quest___mob">
      <div class="rt-daily-quest___mob-name">
        <span>${mob.name}</span>
        <a href="${link.mob_url(mob.mob_id)}" target="_blank">#${mob.mob_id}</a>
      </div>
      <div class="rt-daily-quest___mob-details">
        <div class="rt-daily-quest___mob-target">
          <div class="rt-daily-quest___mob-kill">
            <img src="../icon/sword_cross.svg" alt="Kill Amount" />
            <span>${target.amount}</span>
          </div>
          <img class="sprite" src="${link.mob_image(mob.mob_id)}" alt="Mob Image" />
        </div>
        <div class="rt-daily-quest___location">
          <img width="100" height="100" src="${link.map_image(mob.map_spawn)}" alt="Mapa Spawn"/>
          <a href="${link.map_url(mob.map_spawn)}" target="_blank">${mob.map_spawn.toLowerCase()}</a>
        </div>
      </div>
    </div>
    `
  }, header) + '</div>';
}

daily_quest_service.build_npc_location = function (npc) {
  const map = map_db[npc.map_id];
  return `<div class="rt-daily-quest___delivery">
      <div class="rt-daily-quest___npc">
        <img class="sprite" src="${link.npc_image(npc.npc_id)}" alt="NPC Image" />
        <pre><code>/navi ${npc.map_id.toLowerCase()} ${npc.x}/${npc.y}</code></pre>
      </div>
      <div class="rt-daily-quest___location">
      <div class="map">
        <img width="150" src="${link.map_image(npc.map_id)}" alt="Mapa Delivery" />
        <div style="bottom: ${npc.y / map.scale}px; left: ${npc.x / map.scale}px" class="quest-mark"></div>
      </div>
        <a href="${link.map_url(npc.map_id)}" target="_blank">${npc.map_id.toLowerCase()}</a>
      </div>
    </div>`
}

daily_quest_service.build_quest_messages = function (npc_start, messages) {
  if (!npc_start || !messages) return "";
  return `<h3>Receber a mensagem codificada em:</h3><hr class="underline">
  <div class="rt-daily-quest___npc-sequence">
      ${daily_quest_service.build_npc_location(npc_start)}
  </div><br><br>
  <h3>Possíveis mensagens:</h3><hr class="underline">
  <div class="rt-daily-quest___npc-sequence">
    ${daily_quest_service.build_messages(messages)}
  </div>`
}

daily_quest_service.build_messages = function (messages) {
  if (!messages) return "";
  return messages.reduce((template, message) => {
    return template + `<pre><code>${message}</code></pre>`
  }, '');
}

daily_quest_service.build_npc_sequence_location = function (npc_sequence, show_header = true) {
  if (!npc_sequence) return "";
  const header = `${show_header ? '<h3>Conversar com:</h3><hr class="underline">' : ''}
    <div class="rt-daily-quest___npc-sequence">`;
  return npc_sequence.reduce((template, npc) => {
    return template + daily_quest_service.build_npc_location(npc);
  }, header) + "</div>"
}