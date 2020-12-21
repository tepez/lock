export default {
  error: {
    forgotPassword: {
      too_many_requests: 'הגעת למספר נסיונות איפוס הסיסמה המירבי. יש להמתין לפני נסיון נוסף.',
      'lock.fallback': 'אנו מתנצלים, משהו השתבש בעת בקשת שינוי הסיסמה.',
      enterprise_email:
        "Your email's domain is part of an Enterprise identity provider. To reset your password, please see your security administrator."
    },
    login: {
      blocked_user: 'המשתמש חסום.',
      invalid_user_password: 'פרטי הכניסה אינם נכונים.',
      invalid_captcha: 'לפתור את שאלת האתגר כדי לוודא שאתה לא רובוט.',
      invalid_recaptcha: 'בחר בתיבת הסימון כדי לוודא שאתה לא רובוט.',
      'lock.fallback': 'אנו מתנצלים, משהו השתבש בעת נסיון ההתחברות.',
      'lock.invalid_code': 'קוד שגוי.',
      'lock.invalid_email_password': 'כתובת דוא"ל או סיסמה שגויים.',
      'lock.invalid_username_password': 'שם משתמש או סיסמה שגויים.',
      'lock.network': 'לא הצלחנו ליצור קשר עם השרת. יש לבדוק את החיבור לרשת ולנסות שוב.',
      'lock.popup_closed': 'החלון הצץ (pop up) נסגר. יש לנסות שוב.',
      'lock.unauthorized': 'ההרשאות לא ניתנו. יש לנסות שוב.',
      'lock.mfa_registration_required':
        'Multifactor authentication is required but your device is not enrolled. Please enroll it before moving on.',
      'lock.mfa_invalid_code': 'Wrong code. Please try again.',
      password_change_required:
        'יש לשנות את הסיסמה משום שזוהי כניסתך הראשונה למערכת או משום שתוקף הסיסמה פג.',
      password_leaked:
        'זיהינו בעיית אבטחה פוטנציאלית בחשבון זה. כדי להגן על חשבונך חסמנו נסיון התחברות זה. שלחנו הודעת דוא"ל עם הוראות לביטול הנעילה על החשבון.',
      too_many_attempts: 'החשבון שלך ננעל בעקבות מספר נסיונות החברות כושלים.',
      too_many_requests: 'מתנצלים. ' +
        'יש יותר מדי בקשות למערכת ברגע זה. ' +
        'אנא טענו את העמוד מחדש ונסו שוב. ' +
        'אם הבעיה ממשיכה, אנא נסות שוב מאוחר יותר.',
      session_missing:
        'אנחנו מצטערים. יש יותר מדי בקשות כרגע. טען מחדש את הדף ונסה שוב. אם פעולה זו נמשכת, נסה שוב מאוחר יותר.',
      'hrd.not_matching_email': 'יש להשתמש בכתובת הדוא"ל התאגידית כדי להתחבר.'
    },
    passwordless: {
      'bad.email': 'כתובת הדוא"ל אינה תקינה',
      'bad.phone_number': 'מספר הטלפון אינו תקין',
      'lock.fallback': 'אנו מתנצלים, משהו השתבש'
    },
    signUp: {
      invalid_password: 'סיסמא לא תקינה.',
      'lock.fallback': 'אנו מתנצלים, משהו השתבש במהלך ניסיון ההרשמה.',
      password_dictionary_error: 'סיסמא שכיחה מדי.',
      password_no_user_info_error: 'סיסמא מבוססת על פרטי המשתמש.',
      password_strength_error: 'סיסמא חלשה מדי.',
      user_exists: 'משתמש קיים במערכת.',
      username_exists: 'שם המשתמש קיים במערכת.',
      social_signup_needs_terms_acception: 'אנא הסכים לתנאי השירות שלהלן כדי להמשיך.'  
  }
  },
  success: {
    // success messages show above the form or in a confirmation pane
    logIn: 'תודה שהתחברת.',
    forgotPassword: 'שלחנו אליך הודעת דוא"ל עם הנחיות לאיפוס הסיסמה.',
    magicLink: 'שלחנו אליך קישור להתחברות<br />אל %s.',
    signUp: 'תודה שנרשמת.'
  },
  blankErrorHint: 'לא ניתן להשאיר ריק',
  codeInputPlaceholder: 'הקוד שלך',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'או',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'או',
  emailInputPlaceholder: 'yours@example.com',
  captchaCodeInputPlaceholder: 'הזן את הקוד שמוצג למעלה',
  captchaMathInputPlaceholder: 'לפתור את הנוסחה שמוצגת למעלה',
  enterpriseLoginIntructions: 'Login with your corporate credentials.',
  enterpriseActiveLoginInstructions: 'Please enter your corporate credentials at %s.',
  failedLabel: 'נכשל!',
  forgotPasswordTitle: 'איפוס סיסמה',
  forgotPasswordAction: 'שכחת את הסיסמה שלך?',
  forgotPasswordInstructions:
    'יש להכניס את כתובת הדוא"ל שלך. אנו נשלח אליך הודעה עם הנחיות לאיפוס הסיסמה.',
  forgotPasswordSubmitLabel: 'שלח',
  invalidErrorHint: 'לא תקין',
  lastLoginInstructions: 'בפעם האחרונה התחברת עם',
  loginAtLabel: 'התחברות אל %s',
  loginLabel: 'התחברות',
  loginSubmitLabel: 'התחברות',
  loginWithLabel: 'התחבר באמצעות %s',
  notYourAccountAction: 'לא החשבון שלך?',
  passwordInputPlaceholder: 'הסיסמה שלך',
  passwordStrength: {
    containsAtLeast: 'לפחות %d מתוך %d סוגי התווים הבאים:',
    identicalChars: 'לא יותר מ-%d תווים זהים ברצף, למשל "%s" אינה סיסמה תקינה',
    nonEmpty: 'יש להכניס סיסמה',
    numbers: 'ספרות (0-9)',
    lengthAtLeast: 'באורך של לפחות %d תווים',
    lowerCase: 'אותיות לטיניות קטנות (a-z)',
    shouldContain: 'צריכה להכיל:',
    specialCharacters: 'תווים מיוחדים, למשל !@#$%^&*',
    upperCase: 'אותיות לטיניות גדולות (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'לחילויפין, יש להכניס את כתובת הדוא"ל שלך כדי להתחבר<br/>או כדי ליצור חשבון',
  passwordlessEmailCodeInstructions: 'הודעת דוא"ל עם הקוד נשלחה אל %s.',
  passwordlessEmailInstructions: 'יש להכניס את כתובת הדוא"ל שלך כדי להתחבר<br/>או כדי ליצור חשבון.',
  passwordlessSMSAlternativeInstructions:
    'לחילופין, יש להכניס את מספר הטלפון שלך כדי להתחבר<br/>או כדי ליצור חשבון.',
  passwordlessSMSCodeInstructions: 'הודעת SMS עם הקוד נשלחה<br/>אל %s.',
  passwordlessSMSInstructions: 'יש להכניס את מספר הטלפון שלך כדי להתחבר<br/>או כדי ליצור חשבון.',
  phoneNumberInputPlaceholder: 'מספר הטלפון שלך',
  resendCodeAction: 'לא קיבלת את הקוד?',
  resendLabel: 'שלח שוב',
  resendingLabel: 'שולח שוב...',
  retryLabel: 'נסה שוב',
  sentLabel: 'נשלח!',
  showPassword: 'הצג את הסיסמה',
  signUpTitle: 'הרשמה',
  signUpLabel: 'הרשמה',
  signUpSubmitLabel: 'הרשם',
  signUpTerms: 'בהרשמה למערכת, את/ה מסכים/ה לתנאי השימוש ולמדיניות הפרטיות שלנו.',
  signUpWithLabel: 'הרשם באמצעות %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Single Sign-On enabled',
  submitLabel: 'שלח',
  unrecoverableError: 'משהו השתבש.<br />יש ליצור קשר עם התמיכה הטכנית.',
  usernameFormatErrorHint:
    'יש להשתמש ב-%d עד %d אותיות לטיניות, מספרים והתווים הבאים: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'שם המשתמש שלך',
  usernameOrEmailInputPlaceholder: 'שם משתמש/דוא"ל',
  title: 'Auth0',
  welcome: 'שלום %s!',
  windowsAuthInstructions: 'You are connected from your corporate network&hellip;',
  windowsAuthLabel: 'Windows Authentication',
  mfaInputPlaceholder: 'קוד',
  mfaLoginTitle: 'אימות דו-שלבי',
  mfaLoginInstructions: 'אנא הזן את קוד האימות שנוצר על ידי האפליקציה שלך.',
  mfaSubmitLabel: 'כניסה',
  mfaCodeErrorHint: 'השתמש ב%d ספרות'
};
