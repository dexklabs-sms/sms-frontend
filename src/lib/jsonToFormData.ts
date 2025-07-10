export function jsonToFormData(
  json: Record<string, any>,
  formData = new FormData(),
  parentKey?: string,
) {
  if (Array.isArray(json)) {
    if (!parentKey) {
      throw new Error("top level array is not supported in Form Data");
    }

    json.forEach((elem, index) => {
      const formDataKey = `${parentKey}[${index}]`;

      if (typeof elem === "object") {
        jsonToFormData(elem, formData, formDataKey);
      } else {
        formData.append(formDataKey, elem);
      }
    });

    return formData;
  }

  Object.keys(json).forEach((key) => {
    const formDataKey = parentKey ? `${parentKey}[${key}]` : key;

    const elem = json[key];

    if (typeof elem === "object") {
      jsonToFormData(elem, formData, formDataKey);
    } else {
      formData.append(formDataKey, elem);
    }
  });

  return formData;
}
