import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Users, Briefcase, TrendingUp } from "lucide-react"

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Join Our Team</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join Our Team and Build Your Future with Health Berry Lifesciences
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Why Join Health Berry?</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    By joining Health Berry you join an emerging specialty pharma company aiming at becoming a leader in
                    different therapeutic segment.
                  </p>
                  <p>
                    Qualified and enthusiastic people have clearly been the basis of our success thus far. To foster this
                    basis, we endeavor to provide a working climate that encourages personal and professional development.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-1">50+</h3>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-1">Multiple</h3>
                    <p className="text-sm text-muted-foreground">Opportunities</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-accent mb-1">Career</h3>
                    <p className="text-sm text-muted-foreground">Growth</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-1">Open</h3>
                    <p className="text-sm text-muted-foreground">Communication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Apply?</h2>
                <p className="text-lg text-muted-foreground">
                  Send us your application and take the first step towards an exciting career
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-border">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  If you wish to apply, please send us your curriculum vitae and an accompanying letter supporting your
                  application to:
                </p>
                <div className="text-center">
                  <a
                    href="mailto:hrd@healthberrylifesciences.com"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg text-lg"
                  >
                    <Mail size={24} />
                    hrd@healthberrylifesciences.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Be Part of Our Success Story
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join a team that's transforming healthcare and making a difference in millions of lives
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
