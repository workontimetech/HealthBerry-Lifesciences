import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ShieldCheck, Award, FileCheck, ClipboardCheck, Building, Globe } from "lucide-react"
import Image from "next/image"

export default function CompliancePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Regulatory Compliance</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Committed to the highest standards of pharmaceutical manufacturing and quality assurance
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Health Berry Lifesciences Pvt. Ltd., compliance is not just a regulatory requirement—it's the foundation of our commitment to delivering safe, effective, and high-quality pharmaceutical products. We adhere to stringent national and international standards to ensure that every product meets the highest benchmarks of quality and safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Certifications</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Recognized by leading regulatory bodies worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* WHO-GMP */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">WHO-GMP Certified</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Certified by the World Health Organization for Good Manufacturing Practices, ensuring international quality standards in pharmaceutical production.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Scope:</strong> Pharmaceutical Manufacturing</p>
                  <p><strong>Standard:</strong> WHO Technical Report Series</p>
                </div>
              </div>

              {/* ISO 9001:2015 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">ISO 9001:2015</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  International Organization for Standardization certification for Quality Management Systems, demonstrating our commitment to consistent quality and continuous improvement.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Scope:</strong> Quality Management</p>
                  <p><strong>Standard:</strong> ISO 9001:2015</p>
                </div>
              </div>

              {/* GMP */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">GMP Certified</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Good Manufacturing Practice certification ensuring that pharmaceutical products are consistently produced and controlled according to quality standards.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Scope:</strong> Manufacturing Operations</p>
                  <p><strong>Authority:</strong> Central Drugs Standard Control Organization (CDSCO)</p>
                </div>
              </div>

              {/* FSSAI */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">FSSAI Approved</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Food Safety and Standards Authority of India approval for nutraceutical and health supplement products, ensuring safety and quality in food-grade formulations.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Scope:</strong> Nutraceuticals & Supplements</p>
                  <p><strong>Authority:</strong> FSSAI, Government of India</p>
                </div>
              </div>

              {/* Drug License */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Drug Manufacturing License</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Licensed by the State Drug Authority for manufacturing pharmaceutical formulations under Schedule M compliance.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>License Type:</strong> Form 25 & Form 28</p>
                  <p><strong>Authority:</strong> FDA Maharashtra</p>
                </div>
              </div>

              {/* Export License */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Export Authorization</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Authorized for pharmaceutical exports to international markets, complying with destination country regulations and WHO standards.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Scope:</strong> International Trade</p>
                  <p><strong>Markets:</strong> ASEAN, MENA, Africa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Framework */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FileCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">Regulatory Framework</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Compliance with comprehensive pharmaceutical regulations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Indian Regulations */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Indian Pharmaceutical Laws</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground mb-1">Drugs and Cosmetics Act, 1940</h4>
                    <p className="text-sm text-muted-foreground">Regulation of import, manufacture, distribution, and sale of drugs and cosmetics</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground mb-1">Drugs and Cosmetics Rules, 1945</h4>
                    <p className="text-sm text-muted-foreground">Implementation guidelines and operational procedures for pharmaceutical activities</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground mb-1">Schedule M (GMP Requirements)</h4>
                    <p className="text-sm text-muted-foreground">Good manufacturing practices for pharmaceutical products</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground mb-1">Pharmacy Act, 1948</h4>
                    <p className="text-sm text-muted-foreground">Regulation of pharmaceutical practice and profession</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-foreground mb-1">Narcotic Drugs and Psychotropic Substances Act, 1985</h4>
                    <p className="text-sm text-muted-foreground">Control and regulation of controlled substances</p>
                  </div>
                </div>
              </div>

              {/* International Standards */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">International Standards</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-foreground mb-1">WHO Good Manufacturing Practices</h4>
                    <p className="text-sm text-muted-foreground">Global standards for pharmaceutical manufacturing quality</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-foreground mb-1">ISO 9001:2015 QMS</h4>
                    <p className="text-sm text-muted-foreground">Quality management system requirements and continuous improvement</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-foreground mb-1">ICH Guidelines</h4>
                    <p className="text-sm text-muted-foreground">International Council for Harmonisation of Technical Requirements</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-foreground mb-1">Pharmacopeial Standards</h4>
                    <p className="text-sm text-muted-foreground">Indian Pharmacopoeia (IP), British Pharmacopoeia (BP), United States Pharmacopeia (USP)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <ClipboardCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">Quality Assurance Practices</h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Manufacturing Controls</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Raw material testing and qualification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>In-process quality control checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Finished product testing and release</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Equipment calibration and validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Environmental monitoring and control</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Documentation & Traceability</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Batch manufacturing records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Standard Operating Procedures (SOPs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Change control management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Deviation and CAPA systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Product complaint handling</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Personnel Training</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>GMP training programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Job-specific skill development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Hygiene and safety protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Regular competency assessments</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Audits & Inspections</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Regular internal quality audits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Regulatory inspection readiness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Vendor qualification audits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Third-party certification audits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pharmacovigilance */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Pharmacovigilance & Safety Monitoring</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We maintain a robust pharmacovigilance system to monitor the safety of our products throughout their lifecycle. Our commitment includes:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-foreground mb-2">Adverse Event Reporting</h4>
                  <p className="text-sm text-muted-foreground">Systematic collection and evaluation of adverse drug reactions</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Post-Marketing Surveillance</h4>
                  <p className="text-sm text-muted-foreground">Continuous monitoring of product safety in real-world use</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Risk Management</h4>
                  <p className="text-sm text-muted-foreground">Proactive identification and mitigation of potential risks</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Regulatory Reporting</h4>
                  <p className="text-sm text-muted-foreground">Timely submission of safety data to regulatory authorities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Compliance */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">Environmental & Safety Compliance</h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Environmental Management</h3>
                  <p className="text-muted-foreground mb-3">
                    Committed to sustainable pharmaceutical manufacturing with minimal environmental impact:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Effluent treatment and waste management systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Energy conservation and resource optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Compliance with Environmental Protection Act, 1986</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Green chemistry initiatives</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Occupational Health & Safety</h3>
                  <p className="text-muted-foreground mb-3">
                    Ensuring a safe working environment for all employees:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Compliance with Factories Act, 1948</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Occupational Safety and Health Administration (OSHA) standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Personal protective equipment (PPE) protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Emergency response and fire safety systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-8 text-center">
              <ShieldCheck className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
              <p className="text-lg leading-relaxed mb-6">
                At Health Berry Lifesciences, regulatory compliance is embedded in our organizational culture. We continuously invest in infrastructure, training, and systems to maintain the highest standards of pharmaceutical manufacturing. Our goal is to not only meet but exceed regulatory expectations, ensuring that every product we manufacture is safe, effective, and of the highest quality.
              </p>
              <p className="text-sm opacity-90">
                For regulatory inquiries or compliance documentation, please contact our Regulatory Affairs Department.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Regulatory Affairs</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For questions about our regulatory compliance, certifications, or quality standards, please reach out to our Regulatory Affairs team:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Health Berry Lifesciences Pvt. Ltd.</strong></p>
                <p>Regulatory Affairs & Quality Assurance Department</p>
                <p>Office No.2, S. No 40/2, Near Sinhgad College</p>
                <p>Kondhawa Budruk, Pune, Maharashtra 411048</p>
                <p>Email: <a href="mailto:regulatory@healthberrylifesciences.com" className="text-primary hover:underline">regulatory@healthberrylifesciences.com</a></p>
                <p>Quality Assurance: <a href="mailto:qa@healthberrylifesciences.com" className="text-primary hover:underline">qa@healthberrylifesciences.com</a></p>
                <p>Phone: <a href="tel:+919960560515" className="text-primary hover:underline">+91 99605 60515</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
