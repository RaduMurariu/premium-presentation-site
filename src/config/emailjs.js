// EmailJS Configuration
// Pentru a configura EmailJS, urmați acești pași:
// 1. Creați un cont pe https://www.emailjs.com/
// 2. Creați un serviciu de email (Gmail, Outlook, etc.)
// 3. Creați un template de email
// 4. Înlocuiți valorile de mai jos cu ID-urile reale

export const EMAILJS_CONFIG = {
  // Înlocuiți cu User ID-ul dvs. din EmailJS Dashboard
  USER_ID: 'user_simplifyweb',
  
  // Înlocuiți cu Service ID-ul dvs. din EmailJS Dashboard
  SERVICE_ID: 'service_simplifyweb',
  
  // Înlocuiți cu Template ID-ul dvs. din EmailJS Dashboard
  TEMPLATE_ID: 'template_contact',
  
  // Template variables pentru EmailJS
  TEMPLATE_PARAMS: {
    from_name: 'from_name',
    from_email: 'from_email', 
    subject: 'subject',
    message: 'message',
    to_name: 'to_name'
  }
}

// Template de email recomandat pentru EmailJS:
/*
Subiect: {{subject}} - Mesaj de pe site-ul SimplifyWeb

Salut {{to_name}},

Ai primit un mesaj nou de pe site-ul SimplifyWeb:

De la: {{from_name}}
Email: {{from_email}}
Subiect: {{subject}}

Mesaj:
{{message}}

---
Acest mesaj a fost trimis automat de pe site-ul SimplifyWeb.
*/
