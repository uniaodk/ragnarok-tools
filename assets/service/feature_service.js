const feature_service = {}

feature_service.build_li_feature = () => {
  return feature_db.all.reduce((template, feat) => {
    const is_new_feature = date.diff_days(feat.created_at) <= feature_db.DAYS_TO_CONSIDER_NEW;
    return template + `
      <li class="rt-feature ${is_new_feature ? 'tag-new' : ''}">
        <a href="${feat.href}">${feat.name}</a>
      </li>`
  }, '');
}