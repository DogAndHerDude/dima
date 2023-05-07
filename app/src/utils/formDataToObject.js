export function formDataToObject(data) {
  const obj = {};

  for (const entry of data.entries()) {
    obj[entry[0]] = entry[1];
  }

  return obj;
}
