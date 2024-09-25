"use client"

import Link from 'next/link'
import { Card, CardHeader, CardBody } from '@nextui-org/react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-purple-600 text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-2xl font-bold">
            SeeYouThursday
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </CardHeader>
          <CardBody className="prose dark:prose-invert overflow-visible">
            <p className="text-sm text-gray-500">Last updated: September 25, 2024</p>
            
            <h2 className="text-2xl text-black font-semibold mt-6">1. Introduction</h2>
            <p className='text-black'>
              Welcome to SeeYouThursday's Privacy Policy. This policy describes how we collect, use, and protect your personal information.
            </p>

            <h2 className="text-2xl text-black font-semibold mt-6">2. Information We Collect</h2>
            <p className='text-black'>
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>

            <h2 className="text-2xl text-black font-semibold mt-6">3. How We Use Your Information</h2>
            <p className='text-black'>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
            </p>

            <h2 className="text-2xl text-black font-semibold mt-6">4. Information Sharing and Disclosure</h2>
            <p className='text-black'>
              We do not sell your personal information. We may share information as described in this policy, such as with service providers who perform services on our behalf.
            </p>

            <h2 className="text-2xl text-black font-semibold mt-6">5. Data Security</h2>
            <p className='text-black'>
              We implement appropriate technical and organizational measures to protect the security of your personal information.
            </p>

            <h2 className="text-2xl text-black font-semibold mt-6">6. Your Rights and Choices</h2>
            <p className='text-black'>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data.
            </p>

            <h2 className="text-2xl text-black font-semibold mt-6">7. Changes to This Policy</h2>
            <p className='text-black'>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
            <h2 className="text-2xl text-black font-semibold mt-6">8. Contact Us</h2>
            <p className='text-black'>
              If you have any questions about this privacy policy, please contact us at:{' '}
              <a 
                href="mailto:seeyouthursdaydev@gmail.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                seeyouthursdaydev@gmail.com
              </a>
              .
            </p>
          </CardBody>
        </Card>
      </main>
    </div>
  )
}