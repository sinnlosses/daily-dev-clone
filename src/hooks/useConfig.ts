export function useConfig() {
  const config = {
    assets: {
      headerLogoPath: process.env.NEXT_PUBLIC_HEADER_LOGO_PATH || "/dolphin.png",
    },
  }
  Object.freeze(config)

  return config
}
