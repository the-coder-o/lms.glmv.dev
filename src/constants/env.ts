export const IS_PROD = process.env.NODE_ENV === 'production'
export const IS_DEV = process.env.NODE_ENV === 'development'

export const STUDENT_APP_LINK = process.env.NEXT_PUBLIC_STUDENT_APP || ''
export const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || ''
export const APP_LINK = process.env.NEXT_PUBLIC_APP_FETCH || ''
export const CDN_LINK = process.env.NEXT_PUBLIC_APP_CDN || ''
export const APP_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || ''

export const WIDEVINE_ALPHA = process.env.NEXT_PUBLIC_DRM_WIDEVINE_ALPHA || ''
export const MICROSOFT_PLAYREADY = process.env.NEXT_PUBLIC_DRM_MICROSOFT_PLAYREADY || ''
