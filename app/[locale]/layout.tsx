import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Features from '@/components/Features/Features';

export const metadata = {
  title: {
    template: '%s | Pro-Service',
    default: 'Pro-Service - ჰოსტინგი, ვებ დიზაინი, დომენების რეგისტრაცია .GE .COM .NET .ORG .INFO .BIZ ზონებში, ინტერნეტ რეკლამა',
  },
  description: "Pro-Service - ჰოსტინგი, ვებ დიზაინი, დომენების რეგისტრაცია .GE .COM .NET .ORG .INFO .BIZ ზონებში, ინტერნეტ რეკლამა",
  openGraph: {
    // images: '/path/to/default/image.jpg',
  },
}
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
 
export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header params={params} />
          {children}
          <Features />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
