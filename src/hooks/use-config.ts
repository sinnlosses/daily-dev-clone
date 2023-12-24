export type UseConfigReturnType = {
  assets: {
    headerLogoPath: string
  }
}

export function useConfig(): UseConfigReturnType {
  const config = {
    assets: {
      headerLogoPath: process.env.NEXT_PUBLIC_HEADER_LOGO_PATH || "/dolphin.png",
    },
  }
  Object.freeze(config)

  return config
}
