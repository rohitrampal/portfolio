This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Contact Form Setup

The contact form uses your own email account (Gmail/Outlook) to send emails directly - no third-party API needed!

### For Gmail Users:

1. **Enable 2-Step Verification:**
   - Go to your [Google Account](https://myaccount.google.com/)
   - Security → 2-Step Verification → Turn it on

2. **Create an App Password:**
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Enter "Portfolio Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (you'll need this)

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-character-app-password
   CONTACT_EMAIL=your-email@gmail.com
   ```
   
   - `SMTP_USER`: Your Gmail address
   - `SMTP_PASSWORD`: The 16-character app password from step 2
   - `CONTACT_EMAIL`: Where you want to receive contact form submissions (usually same as SMTP_USER)

### For Outlook/Hotmail Users:

1. **Enable App Passwords:**
   - Go to [Microsoft Account Security](https://account.microsoft.com/security)
   - Advanced security options → App passwords
   - Create a new app password

2. **Configure Environment Variables:**
   ```env
   SMTP_HOST=smtp-mail.outlook.com
   SMTP_PORT=587
   SMTP_USER=your-email@outlook.com
   SMTP_PASSWORD=your-app-password
   CONTACT_EMAIL=your-email@outlook.com
   ```

### Test the Contact Form:
- Fill out the contact form on your portfolio
- Check your email inbox for the submission

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Important:** Don't forget to add your `SMTP_USER`, `SMTP_PASSWORD`, and `CONTACT_EMAIL` environment variables in your Vercel project settings!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
