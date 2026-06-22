import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Building2,
  GraduationCap,
  Settings,
  CheckCircle,
  FileText,
  Eye,
  Layers,
  Smartphone,
  Users,
  BookOpen,
  Award,
  Monitor,
  Database,
  Workflow,
  Target,
  Sparkles,
  Zap,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get tab from URL params, default to 'project'
  const getActiveTabFromURL = () => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    return tab && ['project', 'training', 'management'].includes(tab) ? tab : 'project';
  };
  
  const [activeTab, setActiveTab] = useState(getActiveTabFromURL);
  
  // Update tab when URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    setActiveTab(
      tab && ['project', 'training', 'management'].includes(tab) ? tab : 'project'
    );
  }, [location.search]);
  
  // Update URL when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/services?tab=${tab}`, { replace: true });
  };

  const serviceCategories = {
    project: {
      icon: Building2,
      title: 'BIM IT Project',
      subtitle: 'Complete BIM Solutions from Concept to Construction',
      services: [
        {
          icon: FileText,
          title: 'Project Studies',
          description: 'Comprehensive studies covering ESQ, APS, APD, and EXE phases',
          features: ['Esquisse (ESQ) Studies', 'Avant-Projet Sommaire (APS)', 'Avant-Projet Détaillé (APD)', 'Projet d\'Exécution (EXE)']
        },
        {
          icon: Eye,
          title: '3D Modeling & Visualization',
          description: 'Advanced 3D modeling and photorealistic visualization services',
          features: ['Parametric BIM Models', 'Photorealistic Renderings', 'Animation & Walkthroughs', 'Real-time Visualization']
        },
        {
          icon: Layers,
          title: 'Documentation & BOQ',
          description: 'Complete project documentation and quantity surveying',
          features: ['Technical Drawings', 'Bill of Quantities', 'Specifications', 'Construction Documents']
        },
        {
          icon: Smartphone,
          title: 'VR/AR Integration',
          description: 'Immersive virtual and augmented reality experiences',
          features: ['Virtual Reality Tours', 'Augmented Reality Models', 'Client Presentations', 'Design Reviews']
        }
      ]
    },
    training: {
      icon: GraduationCap,
      title: 'BIM IT Training',
      subtitle: 'Professional Training Programs with Autodesk Certification',
      services: [
        {
          icon: BookOpen,
          title: 'Revit Training',
          description: 'Comprehensive Autodesk Revit training from initiation to advanced levels',
          features: ['Revit Architecture', 'Revit Structure', 'Revit MEP', 'Family Creation']
        },
        {
          icon: Monitor,
          title: 'Specialized Software',
          description: 'Training on industry-leading BIM and coordination tools',
          features: ['Navisworks Manage', 'Dynamo Visual Programming', 'BIM 360 Coordination', 'Advanced Workflows']
        },
        {
          icon: Users,
          title: 'BIM Coordination',
          description: 'Learn collaborative BIM processes and project coordination',
          features: ['Multi-disciplinary Coordination', 'Clash Detection', 'Model Federation', 'BIM Execution Planning']
        },
        {
          icon: Award,
          title: 'Autodesk Certification',
          description: 'Official Autodesk certification programs and exam preparation',
          features: ['Certified User Programs', 'Professional Certification', 'Exam Preparation', 'Continuing Education']
        }
      ]
    },
    management: {
      icon: Settings,
      title: 'BIM IT Management',
      subtitle: 'BIM Implementation and Workflow Optimization',
      services: [
        {
          icon: Target,
          title: 'BIM Implementation',
          description: 'Strategic BIM adoption and implementation planning',
          features: ['BIM Assessment', 'Implementation Roadmap', 'Change Management', 'ROI Analysis']
        },
        {
          icon: FileText,
          title: 'Standards & Templates',
          description: 'Development of BIM standards and project templates',
          features: ['BIM Standards Development', 'Template Creation', 'Graphic Standards', 'Naming Conventions']
        },
        {
          icon: Database,
          title: 'Object Libraries',
          description: 'Custom BIM object libraries and content development',
          features: ['Family Libraries', 'Content Standards', 'Parametric Objects', 'Library Management']
        },
        {
          icon: Workflow,
          title: 'Workflow Optimization',
          description: 'Process improvement and workflow automation',
          features: ['Process Analysis', 'Workflow Automation', 'Quality Control', 'Performance Metrics']
        }
      ]
    }
  };

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
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full font-medium mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2" />
                Complete BIM Solutions for Every Need
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Our Services
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Comprehensive BIM solutions designed to transform your projects, enhance collaboration,
                and deliver exceptional results across all phases of construction.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Services
                  <Target className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Get Consultation
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                  <Zap className="w-12 h-12 text-white" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">Full Project Management</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">Professional Training Programs</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">BIM Implementation & Management</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">Workflow Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section id="services" className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <nav className="flex space-x-8">
              {Object.entries(serviceCategories).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => handleTabChange(key)}
                    className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
                      activeTab === key
                        ? 'bg-blue-50 text-blue-600 border-2 border-blue-200'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-8 h-8 mb-2" />
                    <span className="font-medium text-sm">{category.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      {/* Active Service Category */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(serviceCategories).map(([key, category]) => {
            if (key !== activeTab) return null;
            
            const CategoryIcon = category.icon;
            
            return (
              <div key={key} className="space-y-16">
                {/* Category Header */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <CategoryIcon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {category.subtitle}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, index) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="flex items-start space-x-4 mb-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                            <ServiceIcon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                          </div>
                        </div>
                        
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures your projects benefit from the latest BIM technologies and industry best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">International Standards</h3>
              <p className="text-gray-600">All our services comply with international BIM standards and industry best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Our multidisciplinary team brings years of experience in BIM implementation and training</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Results-Driven</h3>
              <p className="text-gray-600">We focus on delivering measurable results that reduce costs and improve project efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss which services best fit your project needs and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Request Consultation
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;