import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Settings,
  CheckCircle,
  Users,
  Award,
  Zap,
  Sparkles,
  Target,
  Globe
} from 'lucide-react';

const Homepage = () => {
  const services = [
    {
      icon: Building2,
      title: 'BIM IT Project',
      description: 'Complete BIM solutions from concept to construction, including 3D modeling, visualization, and documentation.',
      features: ['ESQ, APS, APD, EXE Studies', '3D Modeling & Visualization', 'BOQ & Permits', 'VR/AR Integration']
    },
    {
      icon: GraduationCap,
      title: 'BIM IT Training',
      description: 'Professional training programs from beginner to advanced levels with Autodesk certifications.',
      features: ['Revit Training', 'Navisworks & Dynamo', 'BIM Coordination', 'Autodesk Certifications']
    },
    {
      icon: Settings,
      title: 'BIM IT Management',
      description: 'BIM implementation strategies, standards development, and workflow optimization services.',
      features: ['BIM Implementation', 'Standards & Templates', 'Object Libraries', 'Workflow Optimization']
    }
  ];

  const projects = [
    {
      title: 'LIDL Supermarket',
      location: 'France',
      year: '2020',
      type: 'Commercial',
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'General Hospital',
      location: 'Algiers',
      year: '2022',
      type: 'Healthcare',
      image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Modern Villa',
      location: 'Algiers',
      year: '2024',
      type: 'Residential',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Projects Completed' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Zap, value: '100+', label: 'Professionals Trained' },
    { icon: CheckCircle, value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNE0yOCA0NGMyIDAgNC0yIDQtNHMtMi00LTQtNHMtNCAyLTQgNCAyIDQgNCA0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full font-medium mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2" />
                Transforming Construction with BIM Excellence
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                BIM IT
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We are a multidisciplinary team of architects & engineers specializing in BIM,
                delivering innovative, cost-effective, and collaborative design solutions that
                transform the construction industry.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Us
                  <Target className="w-5 h-5 ml-2" />
                </Link>
              </div>

              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 rounded-full font-medium text-lg">
                <Globe className="w-5 h-5 mr-2" />
                Serving Algeria & Africa with World-Class BIM Solutions
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                  <Award className="w-12 h-12 text-white" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                        <Icon className="w-8 h-8 text-white mx-auto mb-2" />
                        <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive BIM solutions designed to streamline your projects and enhance collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest BIM implementations across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Projects?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how BIM IT can reduce your project costs, improve collaboration, and deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Explore Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;