import { useState } from 'react';
import {
  MapPin,
  Calendar,
  Building2,
  ExternalLink,
  Filter,
  Grid,
  List,
  Sparkles,
  Award,
  Target,
  CheckCircle
} from 'lucide-react';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const projects = [
    {
      id: 1,
      title: 'LIDL Supermarket',
      location: 'France',
      year: '2020',
      type: 'Commercial',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete BIM modeling and documentation for a modern retail facility including MEP systems and detailed construction documentation.',
      services: ['3D Modeling', 'Documentation', 'MEP Coordination', 'Construction Drawings'],
      area: '2,500 m²',
      duration: '8 months'
    },
    {
      id: 2,
      title: 'General Hospital',
      location: 'Algiers',
      year: '2022',
      type: 'Healthcare',
      category: 'healthcare',
      image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced BIM implementation for a multi-story healthcare facility with complex MEP systems and strict healthcare regulations compliance.',
      services: ['BIM Coordination', 'Clash Detection', 'MEP Systems', 'Regulatory Compliance'],
      area: '15,000 m²',
      duration: '18 months'
    },
    {
      id: 3,
      title: 'Modern Villa',
      location: 'Algiers',
      year: '2024',
      type: 'Residential',
      category: 'residential',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury residential project featuring contemporary design with comprehensive BIM modeling and visualization services.',
      services: ['3D Visualization', 'Interior Design', 'Landscape Modeling', 'VR Walkthroughs'],
      area: '450 m²',
      duration: '6 months'
    },
    {
      id: 4,
      title: 'Hotel 3 Stars',
      location: 'Boussaada',
      year: '2022',
      type: 'Hospitality',
      category: 'hospitality',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete hotel development project with detailed room layouts, common areas, and hospitality-specific MEP requirements.',
      services: ['Architectural Modeling', 'Interior Layouts', 'MEP Design', 'Cost Estimation'],
      area: '3,200 m²',
      duration: '12 months'
    },
    {
      id: 5,
      title: 'Residential Complex',
      location: 'Algiers',
      year: '2021',
      type: 'Residential',
      category: 'residential',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-unit residential development with standardized units and shared facilities, emphasizing efficiency and sustainability.',
      services: ['Master Planning', 'Standardization', 'Sustainability Analysis', 'Construction Sequencing'],
      area: '8,500 m²',
      duration: '15 months'
    },
    {
      id: 6,
      title: 'Office Tower',
      location: 'Oran',
      year: '2023',
      type: 'Commercial',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-rise office building with advanced facade systems, integrated smart building technologies, and sustainable design features.',
      services: ['High-rise Modeling', 'Facade Engineering', 'Smart Systems', 'Energy Analysis'],
      area: '12,000 m²',
      duration: '20 months'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'residential', label: 'Residential' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'hospitality', label: 'Hospitality' }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

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
                Showcasing Excellence in BIM Implementation
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Our Portfolio
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Explore our diverse range of BIM projects across various sectors, showcasing innovation,
                precision, and collaborative excellence in every build.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Projects
                  <Target className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Start Your Project
                </a>
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
                    <div className="text-4xl font-bold text-white mb-2">15+</div>
                    <div className="text-sm text-gray-300">Countries Served</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">98%</div>
                    <div className="text-sm text-gray-300">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-4xl font-bold text-white mb-2">10+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Commercial & Residential Projects</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Healthcare & Hospitality Facilities</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>International Standards Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Controls */}
      <section id="projects" className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600 mr-2" />
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedFilter(category.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedFilter === category.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {project.year}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                        {project.area}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.category === 'commercial' ? 'bg-blue-100 text-blue-600' :
                        project.category === 'residential' ? 'bg-green-100 text-green-600' :
                        project.category === 'healthcare' ? 'bg-red-100 text-red-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                      <div className="aspect-video lg:aspect-square overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="lg:w-2/3 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {project.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {project.year}
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              project.category === 'commercial' ? 'bg-blue-100 text-blue-600' :
                              project.category === 'residential' ? 'bg-green-100 text-green-600' :
                              project.category === 'healthcare' ? 'bg-red-100 text-red-600' :
                              'bg-purple-100 text-purple-600'
                            }`}>
                              {project.type}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Services Provided</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.services.map((service, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Project Details</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div>Area: {project.area}</div>
                            <div>Duration: {project.duration}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our comprehensive BIM solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;