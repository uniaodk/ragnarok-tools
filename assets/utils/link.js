const link = {};

link.map_image = (map_name) => `https://www.divine-pride.net/img/map/raw/${map_name.toLowerCase()}`;
link.mob_image = (mob_id) => `https://static.divine-pride.net/images/mobs/png/${mob_id}.png`;
link.npc_image = (npc_name) => `../img/npc/${npc_name}.gif`;
link.mob_url = (mob_id) => `https://www.divine-pride.net/database/monster/${mob_id}`;
link.map_url = (map_name) => `https://www.divine-pride.net/database/map/${map_name.toLowerCase()}`;