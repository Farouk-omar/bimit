import {
  Users,
  Globe,
  Award,
  Target,
  CheckCircle,
  Building2,
  Lightbulb,
  Shield,
  BookOpen,
  Sparkles,
  TrendingUp,
  Heart,
  GraduationCap,
  Network,
  MapPin,
  Languages
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We leverage cutting-edge BIM technologies to deliver innovative solutions that push the boundaries of architectural and engineering design.'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'Our commitment to international standards ensures every project meets the highest quality benchmarks and exceeds client expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We foster seamless collaboration between all stakeholders, creating an integrated workflow that enhances project efficiency.'
    },
    {
      icon: Lightbulb,
      title: 'Expertise',
      description: 'Our multidisciplinary team brings deep expertise in BIM modeling, automation, and collaborative design methodologies.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Completed Projects' },
    { number: '10+', label: 'Years of Experience' },
    { number: '100+', label: 'Trained Professionals' },
    { number: '15+', label: 'Countries Served' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNE0yOCA0NGMyIDAgNC0yIDQtNHMtMi00LTQtNHMtNCAyLTQgNCAyIDQgNCA0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full font-medium mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2" />
                Building the Future of Construction
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About BIM IT
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                A multidisciplinary team of architects and engineers specializing in Building Information Modeling (BIM),
                delivering innovative, cost-effective, and collaborative design solutions that transform the construction industry.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#mission" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Our Mission
                  <Target className="w-5 h-5 ml-2" />
                </a>
                <a href="/services" className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300">
                  Our Services
                  <Building2 className="w-5 h-5 ml-2" />
                </a>
              </div>

              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 rounded-full font-medium text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Advancing BIM Education in Algeria & Across Africa
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                  <Award className="w-12 h-12 text-white" />
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">50+</div>
                    <div className="text-sm text-gray-300">Projects Delivered</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">10+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">100+</div>
                    <div className="text-sm text-gray-300">Trained Professionals</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">15+</div>
                    <div className="text-sm text-gray-300">Countries Served</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-sm">International Standards Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-sm">Comprehensive Training Programs</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-sm">Pan-African Collaboration Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Mission for Africa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium mb-6">
              <GraduationCap className="w-5 h-5 mr-2" />
              Educational Mission
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Spreading BIM Knowledge Across Africa
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At BIM IT, we believe that access to quality BIM education should not be limited by geography.
              Our mission extends beyond project delivery — we are committed to democratizing BIM knowledge across
              Algeria and the entire African continent, empowering the next generation of construction professionals
              with world-class skills and international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-200">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student Education</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide specially designed BIM courses for students and the new generation of architects and engineers.
                Making professional training accessible through flexible formats and multilingual instruction in Arabic, French, and English.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Network className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Building Communities</h3>
              <p className="text-gray-600 leading-relaxed">
                Through workshops, seminars, and networking events, we foster a vibrant pan-African BIM professional
                community where knowledge flows freely and collaboration thrives.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Elevating Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                We bridge the knowledge gap by bringing international BIM standards and best practices to Algeria and Africa,
                elevating the entire region's construction industry to global excellence.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Regional Impact</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Based in Algeria, we serve as a knowledge hub for North Africa and beyond. Our educational initiatives
                  reach professionals across multiple African nations, creating a ripple effect of expertise that transforms
                  how buildings are designed, constructed, and maintained throughout the continent.
                </p>
                <div className="flex items-center space-x-2 text-blue-300">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">Empowering Africa's Construction Future</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">5+</div>
                  <div className="text-sm text-gray-300">African Countries Reached</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">100+</div>
                  <div className="text-sm text-gray-300">Professionals Trained</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">20+</div>
                  <div className="text-sm text-gray-300">Educational Workshops</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">95%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To revolutionize the architecture and engineering industry through innovative BIM solutions
                  that reduce project downtime, minimize costs, and deliver exceptional value to our clients —
                  while democratizing access to world-class BIM education across Algeria and Africa.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Deliver projects that exceed international standards</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Provide comprehensive BIM training and certification accessible to all</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Foster innovation in construction technology across Africa</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Build a pan-African network of skilled BIM professionals</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <Building2 className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
                <ul className="space-y-3 text-blue-100">
                  <li>• Advanced BIM Modeling & Visualization</li>
                  <li>• Project Management & Coordination</li>
                  <li>• Professional Training & Certification Programs</li>
                  <li>• Educational Workshops & Community Outreach</li>
                  <li>• Workflow Automation & Optimization</li>
                  <li>• Knowledge Transfer & Mentorship</li>
                  <li>• International Standards Compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Transfer & Community Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Knowledge Transfer & Community Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond traditional training, we actively contribute to BIM knowledge dissemination through various initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multilingual Accessibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Understanding the diverse linguistic landscape of Africa, we deliver training and educational content
                    in Arabic, French, and English, ensuring that language is never a barrier to learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Student & Community Programs</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We provide specially designed BIM courses for students, emerging architects, and engineers.
                    Our workshops, webinars, and seminars at universities and technical institutes ensure the next generation
                    has access to world-class BIM knowledge.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mentorship & Career Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our experienced professionals mentor aspiring BIM specialists, providing guidance on career development,
                    project challenges, and professional growth within the African construction industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Network Building</h3>
                  <p className="text-blue-100 leading-relaxed">
                    We facilitate connections between BIM professionals across Algeria and Africa through networking events,
                    online communities, and collaborative platforms that foster knowledge exchange and partnership opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Partnerships for Regional Growth
            </h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We actively collaborate with universities, construction associations, and industry organizations
              across Algeria and Africa to integrate BIM education into academic curricula and professional development
              programs, creating a sustainable ecosystem for construction technology advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results of our commitment to excellence and knowledge dissemination across Africa
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every project we complete and every professional we train contributes to a larger vision:
              transforming Algeria into a regional BIM excellence hub and advancing construction technology
              adoption across the African continent.
            </p>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose BIM IT?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Our multidisciplinary approach combines architectural creativity with engineering precision,
                enhanced by cutting-edge BIM technology to deliver projects that set new industry standards —
                while empowering African professionals with the knowledge to drive the continent's construction industry forward.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-blue-200" />
                  <span className="text-blue-100">International standards compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-blue-200" />
                  <span className="text-blue-100">Certified professionals and expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-200" />
                  <span className="text-blue-100">Collaborative and integrated approach</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Our Commitment to Africa</h3>
              <div className="space-y-4 text-blue-100">
                <p>
                  We are committed to reducing project downtime and costs while delivering better value
                  for our clients through innovative BIM solutions and collaborative methodologies.
                </p>
                <p>
                  Beyond project delivery, we dedicate ourselves to knowledge transfer, ensuring that BIM expertise
                  takes root across Algeria and Africa. We believe that by educating professionals today, we build
                  a stronger, more capable construction industry for future generations.
                </p>
                <p>
                  Our vision is to see African professionals leading international BIM projects with confidence,
                  armed with skills and knowledge that match global standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;