import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FileText, AlertCircle, Scale, ShieldCheck } from "lucide-react"

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Terms & Conditions</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Legal terms governing the use of Health Berry Lifesciences website and services
              </p>
              <p className="text-sm text-muted-foreground mt-4">Effective Date: November 14, 2025</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Agreement */}
              <div className="mb-12 bg-blue-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions ("Terms") constitute a legally binding agreement between you and Health Berry Lifesciences Pvt. Ltd. ("Company," "we," "us," or "our") concerning your access to and use of the healthberrylifesciences.com website and any related services (collectively, the "Services").
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with these Terms, you must not access or use our Services.
                </p>
              </div>

              {/* Use of Website */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Use of Website</h2>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Permitted Use</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may use our website for lawful purposes only. You agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Use the Services only for legitimate business or informational purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Provide accurate and current information</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Prohibited Activities</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree NOT to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use the Services for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Services or servers</li>
                  <li>Transmit viruses, malware, or harmful code</li>
                  <li>Impersonate any person or entity</li>
                  <li>Collect information about other users without consent</li>
                  <li>Use automated systems (bots, scrapers) without permission</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                </ul>
              </div>

              {/* Pharmaceutical Information */}
              <div className="mb-12 bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">Pharmaceutical Information Disclaimer</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Important Notice:</strong> The pharmaceutical product information provided on this website is for informational purposes only and should not be considered as medical advice.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>This information is intended for healthcare professionals and distributors</li>
                      <li>Product information does not replace professional medical consultation</li>
                      <li>Always consult qualified healthcare providers before using any medication</li>
                      <li>Do not use this information for self-diagnosis or treatment</li>
                      <li>Product availability and formulations may vary by region</li>
                      <li>All medications should be used only under medical supervision</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, software, and product information, is the property of Health Berry Lifesciences Pvt. Ltd. or its licensors and is protected by:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Indian Copyright Act, 1957</li>
                  <li>Trade Marks Act, 1999</li>
                  <li>International intellectual property treaties</li>
                  <li>Other applicable intellectual property laws</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content without our prior written permission.
                </p>
              </div>

              {/* Product Orders */}
              <div className="mb-12 bg-green-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Product Orders & Inquiries</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Product information on this website is for reference purposes. Actual product orders are subject to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Verification of credentials (for healthcare professionals and distributors)</li>
                  <li>Compliance with pharmaceutical licensing requirements</li>
                  <li>Availability and minimum order quantities</li>
                  <li>Separate purchase agreements and terms</li>
                  <li>Applicable regulatory approvals</li>
                  <li>Regional distribution restrictions</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We reserve the right to refuse or cancel any order at our discretion.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Limitation of Liability</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>The Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind</li>
                  <li>We do not warrant that the Services will be uninterrupted, secure, or error-free</li>
                  <li>We are not liable for any indirect, incidental, special, or consequential damages</li>
                  <li>Our total liability shall not exceed the amount paid by you (if any) for accessing the Services</li>
                  <li>We are not responsible for any damages arising from use or misuse of product information</li>
                  <li>We are not liable for third-party content or external links</li>
                </ul>
              </div>

              {/* Indemnification */}
              <div className="mb-12 bg-blue-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Health Berry Lifesciences Pvt. Ltd., its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Your use or misuse of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of third parties</li>
                  <li>Your violation of applicable laws or regulations</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Governing Law & Jurisdiction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Services shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.
                </p>
              </div>

              {/* Regulatory Compliance */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Regulatory Compliance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our pharmaceutical operations comply with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Drugs and Cosmetics Act, 1940</li>
                  <li>Drugs and Cosmetics Rules, 1945</li>
                  <li>Pharmacy Act, 1948</li>
                  <li>Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002</li>
                  <li>WHO Good Manufacturing Practices (GMP)</li>
                  <li>ISO 9001:2015 Quality Management Standards</li>
                </ul>
              </div>

              {/* Modifications */}
              <div className="mb-12 bg-amber-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page with an updated "Effective Date." Your continued use of the Services after changes constitutes acceptance of the modified Terms.
                </p>
              </div>

              {/* Severability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about these Terms and Conditions, please contact:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Health Berry Lifesciences Pvt. Ltd.</strong></p>
                  <p>Office No.2, S. No 40/2, Near Sinhgad College</p>
                  <p>Kondhawa Budruk, Pune, Maharashtra 411048</p>
                  <p>Email: <a href="mailto:legal@healthberrylifesciences.com" className="text-primary hover:underline">legal@healthberrylifesciences.com</a></p>
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
