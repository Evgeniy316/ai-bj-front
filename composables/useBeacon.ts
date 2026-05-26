export const useBeacon = () => {
  const sendBeacon = (url: string, data: Record<string, unknown>) => {
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
    return navigator.sendBeacon(url, blob)
  }

  return { sendBeacon }
}