import { redirect } from "next/navigation"


export const metadata = {
  title: 'AI-Powered Products',
  description: 'Explore APPIT Software\'s suite of innovative AI-powered products designed to transform business operations, legal services, recruitment, and productivity.',
  keywords: [
    'AI-powered products',
    'APPIT Software products',
    'business software solutions',
    'enterprise productivity tools',
    'artificial intelligence products',
    'business automation software',
    'digital transformation tools',
    'AI business applications'
  ]
};

const Page = () => {
    redirect("/products/ai-lawyers")
}

export default Page