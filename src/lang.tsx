import { Langs, LangProps } from './types';

const lang: Record<Langs, LangProps> = {
  en: {
    selectedTitle: 'selected time OOK',
    am: 'AM',
    pm: 'PM',
  },

  fr: {
    selectedTitle: 'Horaire choisi',
    am: '',
    pm: '',
  },

  ar: {
    selectedTitle: 'الوقت المحدد',
    am: 'صباحا',
    pm: 'مساء',
  },
};

export default lang;
