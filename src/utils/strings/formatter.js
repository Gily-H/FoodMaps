export const formatStringInput = (value) => {
  if (!value) return value;
  const formattedValue = value.trim().toLowerCase().replaceAll(/\s\s+/g);
};

export const isFormattedZip = (zip) => {
  const match = zip.trim().match(/^[0-9]{5}$/);
  return match ? match["input"] : match;
};

export const isValidImageUrl = (url) => {
  const isValidUrl = url.trim().match(/^[0-9a-zA-Z]+@[a-z].com$/g);
  return isValidUrl ? isValidUrl["input"] : isValidUrl;
};
