import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Cookie, Settings, Info, Shield } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Cookie className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Cookie Policy</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understanding how we use cookies and similar tracking technologies on our website
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
              <div className="mb-12 bg-blue-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. This Cookie Policy explains how Health Berry Lifesciences Pvt. Ltd. uses cookies and similar technologies on healthberrylifesciences.com.
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Types of Cookies We Use</h2>
                </div>

                {/* Essential Cookies */}
                <div className="mb-8 bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">1. Essential Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    <strong>Purpose:</strong> Session management, security, load balancing
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    <strong>Duration:</strong> Session cookies (deleted when browser closes)
                  </p>
                  <p className="text-sm text-muted-foreground italic mt-2">
                    <strong>Note:</strong> These cookies cannot be disabled as they are essential for website operation.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="mb-8 bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">2. Analytics Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We use analytics cookies to understand how visitors interact with our website, helping us improve user experience.
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Provider:</strong> Google Analytics</p>
                    <p><strong>Purpose:</strong></p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Track visitor behavior and traffic sources</li>
                      <li>Measure website performance and page views</li>
                      <li>Understand user demographics and interests</li>
                      <li>Analyze navigation patterns and popular content</li>
                    </ul>
                    <p className="mt-3"><strong>Cookies Set:</strong></p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><code className="bg-white px-2 py-1 rounded">_ga</code> - Distinguishes unique users (expires: 2 years)</li>
                      <li><code className="bg-white px-2 py-1 rounded">_gid</code> - Distinguishes users (expires: 24 hours)</li>
                      <li><code className="bg-white px-2 py-1 rounded">_gat</code> - Throttles request rate (expires: 1 minute)</li>
                    </ul>
                  </div>
                </div>

                {/* Functionality Cookies */}
                <div className="mb-8 bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">3. Functionality Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Purpose:</strong> Language preferences, theme settings, form data retention
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Duration:</strong> Varies (typically 30 days to 1 year)
                  </p>
                </div>

                {/* Third-Party Cookies */}
                <div className="mb-8 bg-amber-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">4. Third-Party Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We may allow select third-party services to place cookies on your device for the following purposes:
                  </p>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold">Google Analytics</p>
                      <p className="text-sm">Web analytics and reporting</p>
                      <p className="text-sm">Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></p>
                    </div>
                    <div>
                      <p className="font-semibold">Web3Forms</p>
                      <p className="text-sm">Contact form processing and delivery</p>
                      <p className="text-sm">Privacy Policy: <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://web3forms.com/privacy</a></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Cookies */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">How We Use Cookies</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies for the following purposes:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground mb-1">Authentication & Security</h4>
                    <p className="text-muted-foreground text-sm">Verify your identity and prevent fraudulent activity</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground mb-1">User Preferences</h4>
                    <p className="text-muted-foreground text-sm">Remember your settings and choices</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground mb-1">Performance & Analytics</h4>
                    <p className="text-muted-foreground text-sm">Analyze website performance and user behavior</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground mb-1">Service Improvement</h4>
                    <p className="text-muted-foreground text-sm">Identify areas for website enhancement</p>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div className="mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Managing Your Cookie Preferences</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to accept or reject cookies. You can manage your cookie preferences through:
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Browser Settings</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Most web browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Opt-Out Options</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You can opt out of specific tracking services:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>Do Not Track (DNT):</strong> Enable DNT in your browser preferences</li>
                </ul>

                <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-muted-foreground text-sm">
                    <strong>Important Note:</strong> Disabling cookies may affect your experience on our website. Some features may not function properly if cookies are disabled.
                  </p>
                </div>
              </div>

              {/* Cookie Consent */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Cookie Consent</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using our website and not disabling cookies in your browser, you consent to our use of cookies as described in this policy. When you first visit our website:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Essential cookies are automatically enabled</li>
                  <li>Analytics and functionality cookies require your consent</li>
                  <li>You can change your preferences at any time through browser settings</li>
                  <li>Your consent is valid for 12 months or until you withdraw it</li>
                </ul>
              </div>

              {/* International Transfers */}
              <div className="mb-12 bg-blue-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some of the cookies we use (particularly third-party analytics cookies) may transfer data to servers located outside India, including the United States and European Union. These transfers are conducted in accordance with applicable data protection laws and regulations.
                </p>
              </div>

              {/* Updates to Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Updates to This Cookie Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any material changes by posting the updated policy on this page with a new "Last Updated" date.
                </p>
              </div>

              {/* More Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">More Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For more information about cookies and how they work, visit:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">All About Cookies</a></li>
                  <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about our use of cookies or this Cookie Policy, please contact:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Health Berry Lifesciences Pvt. Ltd.</strong></p>
                  <p>Data Protection Officer</p>
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
