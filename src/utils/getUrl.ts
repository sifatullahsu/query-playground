export const getUrl = (text: string, version: string): string => {
  const url = `${import.meta.env.VITE_SERVER_DOMAIN}/api/${version}`
  return text.replace('https://api.example.com/v1', url)
}
