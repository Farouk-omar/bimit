import {
  BookOpen,
  Award,
  Users,
  CheckCircle,
  Monitor,
  Smartphone,
  Globe,
  TrendingUp,
  Target,
  Video,
  Sparkles,
  GraduationCap
} from 'lucide-react';

const Training = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Revit Architecture',
      level: 'Beginner to Advanced',
      duration: '40 hours',
      format: 'Online & In-Person',
      description: 'Master Autodesk Revit Architecture from basic modeling to advanced parametric design and family creation.',
      modules: [
        'Revit Fundamentals & Interface',
        'Basic & Advanced Modeling',
        'Parametric Design Concepts',
        'Family Creation & Editing',
        'Documentation & Annotation',
        'Project Collaboration'
      ],
      certification: true,
      price: 'Contact for pricing'
    },
    {
      icon: Monitor,
      title: 'Revit Structure',
      level: 'Intermediate to Advanced',
      duration: '35 hours',
      format: 'Online & In-Person',
      description: 'Comprehensive structural modeling training covering analytical models, rebar detailing, and structural documentation.',
      modules: [
        'Structural Modeling Basics',
        'Analytical Model Creation',
        'Steel & Concrete Structures',
        'Rebar Modeling & Detailing',
        'Structural Analysis Integration',
        'Construction Documentation'
      ],
      certification: true,
      price: 'Contact for pricing'
    },
    {
      icon: Smartphone,
      title: 'Revit MEP',
      level: 'Intermediate to Advanced',
      duration: '45 hours',
      format: 'Online & In-Person',
      description: 'Complete MEP systems modeling including HVAC, electrical, and plumbing with space and systems analysis.',
      modules: [
        'MEP Fundamentals',
        'HVAC Systems Design',
        'Electrical Systems Modeling',
        'Plumbing & Fire Protection',
        'Space & Zone Analysis',
        'Systems Integration'
      ],
      certification: true,
      price: 'Contact for pricing'
    },
    {
      icon: Users,
      title: 'Navisworks Manage',
      level: 'All Levels',
      duration: '25 hours',
      format: 'Online & In-Person',
      description: 'Learn project review, clash detection, and 4D simulation using Autodesk Navisworks for better coordination.',
      modules: [
        'Navisworks Interface & Navigation',
        'Model Federation & Coordination',
        'Clash Detection & Resolution',
        '4D Simulation & Scheduling',
        'Quantity Takeoff',
        'Presentation & Communication'
      ],
      certification: true,
      price: 'Contact for pricing'
    },
    {
      icon: TrendingUp,
      title: 'Dynamo Visual Programming',
      level: 'Intermediate to Advanced',
      duration: '30 hours',
      format: 'Online & In-Person',
      description: 'Automate Revit workflows and create parametric solutions using Dynamo visual programming environment.',
      modules: [
        'Dynamo Fundamentals',
        'Visual Programming Logic',
        'Geometry & Data Manipulation',
        'Revit Integration',
        'Custom Node Creation',
        'Advanced Automation'
      ],
      certification: false,
      price: 'Contact for pricing'
    },
    {
      icon: Target,
      title: 'BIM Coordination',
      level: 'All Levels',
      duration: '35 hours',
      format: 'Online & In-Person',
      description: 'Master multi-disciplinary coordination processes, clash detection, and collaborative BIM workflows.',
      modules: [
        'BIM Coordination Principles',
        'Multi-disciplinary Integration',
        'Coordination Workflows',
        'Issue Tracking & Resolution',
        'BIM Execution Planning',
        'Quality Control Processes'
      ],
      certification: false,
      price: 'Contact for pricing'
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Official Autodesk Certification',
      description: 'Earn recognized certifications that validate your BIM expertise and enhance your career prospects.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of hands-on experience in BIM implementation and training.'
    },
    {
      icon: Globe,
      title: 'Flexible Learning Options',
      description: 'Choose from online, in-person, or hybrid training formats to fit your schedule and learning preferences.'
    },
    {
      icon: Video,
      title: 'Hands-on Projects',
      description: 'Apply your skills through real-world projects and case studies that mirror industry challenges.'
    }
  ];

  const levels = [
    {
      title: 'Beginner',
      description: 'Perfect for newcomers to BIM with no prior experience',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Intermediate',
      description: 'Ideal for those with basic software knowledge seeking to expand skills',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Advanced',
      description: 'For experienced users looking to master complex workflows',
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNE0yOCA0NGMyIDAgNC0yIDQtNHMtMi00LTQtNHMtNCAyLTQgNCAyIDQgNCA0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-300 rounded-full font-medium mb-6 animate-fade-in">
                <Award className="w-4 h-4 mr-2" />
                Official Autodesk Training Partner
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                BIM Training Programs
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Professional BIM training from beginner to advanced levels, featuring hands-on learning,
                expert instruction, and official Autodesk certification programs.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#programs"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Programs
                  <Target className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Enroll Now
                </a>
              </div>

              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 rounded-full font-medium text-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Empowering African BIM Professionals
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">100+</div>
                    <div className="text-sm text-gray-300">Professionals Trained</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">95%</div>
                    <div className="text-sm text-gray-300">Pass Rate</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">15+</div>
                    <div className="text-sm text-gray-300">Programs</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">5+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Autodesk Certified Instructors</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Hands-on Project Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Flexible Online & In-Person Options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures you gain practical skills that translate directly to real-world success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Training Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer training programs for all skill levels, from complete beginners to advanced professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${level.color}`}>
                  {level.title}
                </span>
                <p className="text-gray-600">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive courses designed to build expertise in industry-leading BIM software and methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {program.level}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                          {program.duration}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
                          {program.format}
                        </span>
                        {program.certification && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            Certification
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Course Modules:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {program.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <span className="text-lg font-bold text-blue-600">{program.price}</span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Enroll Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Stats */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Professionals Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Certification Pass Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Training Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Advance Your BIM Skills?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our comprehensive training programs and become a certified BIM professional. 
            Contact us to discuss your training needs and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Start Your Training Journey
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              Request Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;