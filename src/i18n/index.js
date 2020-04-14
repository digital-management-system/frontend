import i18next from 'i18next';

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: 'en_NZ',
  resources: {
    en_NZ: {
      translation: {
        signup: { title: 'Sign Up', label: 'Sign Up', button: 'Sign Up' },
        signin: { title: 'Sign In', label: 'Sign In', button: 'Sign In' },
        signout: { title: 'Sign Out', label: 'Sign Out', button: 'Sign Out' },
        email: { label: 'Email' },
        password: { label: 'Password' },
        retypePassword: { label: 'Re-type Password' },
        dashboard: { title: 'Dashboard', label: 'Dashboard' },
      },
    },
  },
});

export default i18next;
