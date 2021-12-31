
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

import resources from './dictionaries'

i18n.defaultLocale = 'en'
i18n.fallbacks = true
i18n.translations = resources

i18n.locale = Localization.locale;

const t = i18n.t
export default t