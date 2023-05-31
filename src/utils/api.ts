export function getApiUrl() {
  const url = process.env.NEXT_PUBLIC_MERU_API_URL;
  return `${url}/`;
}