import { redirect } from "next/navigation"
export const metadata = {
  title: 'About APPIT Software - IT Services & Business Solutions – 2025',
  description: 'Discover APPIT Software\'s comprehensive IT services and solutions, from AI and Oracle implementations to eCommerce platforms and digital transformation.',
  keywords: [
    'IT services and solutions',
    'enterprise software services',
    'business technology solutions',
    'Oracle implementation services',
    'AI consulting services',
    'eCommerce development services',
    'digital transformation solutions',
    'managed IT services'
  ]
};

const Page = () => {
    redirect("/services/oracle-ai")
}

export default Page