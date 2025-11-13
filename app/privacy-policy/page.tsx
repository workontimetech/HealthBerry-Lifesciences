import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, Lock, Eye, Database, UserCheck, Globe } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                How Health Berry Lifesciences protects your personal information
              </p>
              <p className="text-sm text-muted-foreground mt-4">Last Updated: November 14, 2025</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Health Berry Lifesciences Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12 bg-blue-50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground m-0">Information We Collect</h2>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Personal Data</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personally identifiable information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Fill out contact forms or inquiry forms</li>
                  <li>Request product information or catalogs</li>
                  <li>Subscribe to our newsletters or communications</li>
                  <li>Engage with our customer service representatives</li>
                  <li>Apply for employment opportunities</li>
                  <li>Register for events or webinars</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This information may include: name, email address, phone number, company name, job title, mailing address, and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages viewed and time spent on pages</li>
                  <li>Referral sources and website navigation patterns</li>
                  <li>Cookie identifiers and similar tracking technologies</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">How We Use Your Information</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use the information we collect from you to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process and fulfill your product orders or requests</li>
                  <li>Send administrative information, updates, and security alerts</li>
                  <li>Provide you with marketing communications (with your consent)</li>
                  <li>Improve our website, products, and services</li>
                  <li>Analyze usage patterns and optimize user experience</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Protect against fraudulent or illegal activities</li>
                  <li>Process employment applications</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="mb-12 bg-green-50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground m-0">Data Protection & Security</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure servers with firewall protection</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection practices</li>
                  <li>Compliance with ISO 27001 information security standards</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Disclosure of Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Disclosure of Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., email service providers, analytics providers)</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Protection of Rights:</strong> To protect our rights, property, safety, or that of our users</li>
                  <li><strong>With Your Consent:</strong> When you have given explicit consent for specific disclosures</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12 bg-blue-50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground m-0">Your Privacy Rights</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Access:</strong> Request access to your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another party</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:privacy@healthberrylifesciences.com" className="text-primary hover:underline">privacy@healthberrylifesciences.com</a>
                </p>
              </div>

              {/* International Data Transfers */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">International Data Transfers</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers in compliance with applicable laws.
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="mb-12 bg-amber-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Health Berry Lifesciences Pvt. Ltd.</strong></p>
                  <p>Office No.2, S. No 40/2, Near Sinhgad College</p>
                  <p>Kondhawa Budruk, Pune, Maharashtra 411048</p>
                  <p>Email: <a href="mailto:privacy@healthberrylifesciences.com" className="text-primary hover:underline">privacy@healthberrylifesciences.com</a></p>
                  <p>Phone: <a href="tel:+919960560515" className="text-primary hover:underline">+91 99605 60515</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
