export function getApiUrl() {
    const url = process.env.NEXT_PUBLIC_FAKE_STORE_API_URL;
    return `${url}/`;
  }