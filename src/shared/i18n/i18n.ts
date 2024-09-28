import i18n from 'i18next'

/* eslint-disable import/no-named-as-default-member */
i18n.init({
  fallbackLng: 'uz',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    uz: {
      translation: require('@/locales/uz/translation.json'),
    },
    en: {
      translation: require('@/locales/en/translation.json'),
    },
    ru: {
      translation: require('@/locales/ru/translation.json'),
    },
  },
})

export default i18n
