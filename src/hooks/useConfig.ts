export function useConfig() {
  return {
    assets: {
      headerLogoPath: process.env.NEXT_PUBLIC_HEADER_LOGO_PATH || "/dolphin.png",
    },
  }
}
