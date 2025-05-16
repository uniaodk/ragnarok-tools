window.onload = function () {
  const ul_features = document.getElementById("ul-features");
  ul_features.innerHTML = feature_service.build_li_feature();
};