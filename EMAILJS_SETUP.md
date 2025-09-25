# Configurare EmailJS pentru Formularul de Contact

## Pași pentru configurarea EmailJS

### 1. Creați un cont EmailJS
- Accesați https://www.emailjs.com/
- Creați un cont gratuit
- Verificați email-ul

### 2. Creați un serviciu de email
- În Dashboard, mergeți la "Email Services"
- Faceți clic pe "Add New Service"
- Alegeți provider-ul dvs. (Gmail, Outlook, etc.)
- Urmați instrucțiunile pentru conectarea contului dvs. de email

### 3. Creați un template de email
- Mergeți la "Email Templates"
- Faceți clic pe "Create New Template"
- Folosiți următorul template:

```
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
```

### 4. Actualizați configurația
În fișierul `src/config/emailjs.js`, înlocuiți valorile:

```javascript
export const EMAILJS_CONFIG = {
  USER_ID: 'user_YOUR_USER_ID',           // Din Dashboard > Account
  SERVICE_ID: 'service_YOUR_SERVICE_ID',  // Din Email Services
  TEMPLATE_ID: 'template_YOUR_TEMPLATE_ID', // Din Email Templates
  // ...
}
```

### 5. Testați formularul
- Rulați aplicația: `npm run dev`
- Accesați pagina de contact
- Completați și trimiteți formularul
- Verificați că email-ul ajunge în inbox

## Variabile disponibile în template

- `{{from_name}}` - Numele expeditorului
- `{{from_email}}` - Email-ul expeditorului  
- `{{subject}}` - Subiectul mesajului
- `{{message}}` - Conținutul mesajului
- `{{to_name}}` - Numele destinatarului

## Limitări cont gratuit

- 200 de email-uri/lună
- 2 servicii de email
- 2 template-uri
- Suport pentru 3 domenii

## Securitate

- Nu expuneți User ID-ul în codul frontend
- Folosiți variabile de mediu pentru producție
- Configurați restricții de domeniu în EmailJS Dashboard
