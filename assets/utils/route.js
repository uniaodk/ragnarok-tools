const route = {};

route.get_param = (param_name) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(param_name);
}