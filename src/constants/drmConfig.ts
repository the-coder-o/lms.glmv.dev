import { MICROSOFT_PLAYREADY, WIDEVINE_ALPHA } from './env'

export const DRMConfig = {
  servers: {
    'com.widevine.alpha': WIDEVINE_ALPHA,
    'com.microsoft.playready': MICROSOFT_PLAYREADY,
  },
}
