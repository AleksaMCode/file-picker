export const isSearchParamTruthy = (param) => {
  const urlParams = new URLSearchParams(window.location.search)
  return ['True', 'true', true, '1', 1].includes(urlParams.get(param))
}
