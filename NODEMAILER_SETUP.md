# Configurare Nodemailer pentru Formularul de Contact

## 📧 Configurare Completă pentru Trimiterea Email-urilor

### 1. Variabile de Mediu Necesare

Creați fișierul `.env.local` în directorul rădăcină al proiectului:

```bash
# Configurare SMTP
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_SECURE=true

# Credențiale email pentru trimitere
EMAIL_USER=adresa-ta@gmail.com
EMAIL_PASS=parola-app-password

# Email destinatar (unde vor ajunge mesajele)
EMAIL_TO=rhaloor@icloud.com
```

### 2. Configurare Gmail (Recomandat)

#### Pasul 1: Activează 2-Factor Authentication
- Accesează [Google Account Security](https://myaccount.google.com/security)
- Activează "2-Step Verification"

#### Pasul 2: Generează App Password
- Accesează [App Passwords](https://myaccount.google.com/apppasswords)
- Selectează "Mail" și "Other (Custom name)"
- Introdu numele: "SimplifyWeb Contact Form"
- Copiază parola generată (16 caractere)

#### Pasul 3: Configurează .env.local
```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=adresa-ta@gmail.com
EMAIL_PASS=parola-generata-de-google
EMAIL_TO=rhaloor@icloud.com
```

### 3. Configurare pentru Alte Provideri

#### Outlook/Hotmail:
```bash
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

#### Yahoo:
```bash
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

#### Custom SMTP:
```bash
EMAIL_HOST=smtp.provider.com
EMAIL_PORT=587  # sau 465 pentru SSL
EMAIL_SECURE=true  # true pentru SSL, false pentru STARTTLS
```

### 4. Testare Configurare

#### Pasul 1: Pornește aplicația
```bash
npm run dev
```

#### Pasul 2: Testează formularul
- Accesează http://localhost:3000
- Navighează la secțiunea Contact
- Completează formularul cu date de test
- Trimite mesajul

#### Pasul 3: Verifică email-ul
- Verifică inbox-ul la rhaloor@icloud.com
- Email-ul ar trebui să conțină:
  - Subiect: "[SimplifyWeb Contact] [Subiectul tău]"
  - Conținut HTML stilizat cu paleta urban-modern
  - Toate detaliile completate în formular

### 5. Structura Email-ului Trimis

Email-ul va conține:

#### Header:
- **Subiect:** `[SimplifyWeb Contact] [Subiectul completat]`
- **De la:** `"[Numele completat]" <EMAIL_USER>`
- **Către:** `rhaloor@icloud.com`
- **Reply-To:** `[Email-ul completat]` (permite răspuns direct)

#### Conținut HTML:
- **Design urban-modern** cu paleta SimplifyWeb
- **Detalii expeditor:** Nume, Email, Subiect (dacă completat)
- **Mesaj:** Conținutul completat în textarea
- **Footer:** "Acest mesaj a fost trimis automat de pe site-ul SimplifyWeb"

#### Conținut Text:
- Versiune simplă pentru clienții care nu suportă HTML

### 6. Securitate și Best Practices

#### ✅ Securitate Implementată:
- **Validare server-side** a tuturor câmpurilor
- **Sanitizare** a conținutului HTML
- **Rate limiting** prin Next.js API routes
- **Credențiale** stocate în variabile de mediu
- **Validare email** cu regex

#### ✅ Funcționalități:
- **Validare completă** în timp real
- **Feedback vizual** pentru toate stările
- **Micro-interacțiuni** elegante
- **Responsive design** pentru toate dispozitivele
- **Accesibilitate** completă

### 7. Debugging

#### Probleme Comune:

**1. "Invalid login"**
- Verifică că EMAIL_USER și EMAIL_PASS sunt corecte
- Pentru Gmail, folosește App Password, nu parola contului

**2. "Connection timeout"**
- Verifică EMAIL_HOST și EMAIL_PORT
- Verifică că firewall-ul permite conexiunile SMTP

**3. "Email not received"**
- Verifică spam/junk folder
- Verifică că EMAIL_TO este corect
- Verifică logs în console pentru erori

#### Logs pentru Debug:
```bash
# Verifică logs în terminal când trimiți formularul
# Erorile vor apărea în console
```

### 8. Producție

#### Pentru deployment:
1. **Configurați variabilele de mediu** pe platforma de hosting
2. **Testați** configurarea înainte de lansare
3. **Monitorizați** logs pentru erori
4. **Backup** configurația pentru siguranță

---

## 🎯 Rezultat Final

Formularul de contact este complet funcțional și trimite email-uri către **rhaloor@icloud.com** cu:

- ✅ **Design urban-modern** cu paleta SimplifyWeb
- ✅ **Validare completă** și feedback vizual
- ✅ **Micro-interacțiuni** elegante
- ✅ **Securitate** implementată
- ✅ **Responsive** pentru toate dispozitivele
- ✅ **Ready for production** 🚀
