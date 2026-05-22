import { useState } from "react";

export default function DataEngineerPortfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const skills = [
    'Python',
    'SQL',
    'Apache Spark',
    'Kafka',
    'AWS',
    'Azure',
    'Snowflake',
    'Databricks',
    'Docker',
    'Kubernetes',
    'ETL Pipelines',
    'Data Warehousing'
  ];

  const projects = [
    {
      title: 'Real-Time Retail Streaming Pipeline',
      description:
        'Built a real-time streaming ETL pipeline using Kafka, PySpark Structured Streaming and MySQL with checkpointing, validation, Deployed in both local (WSL/Docker) and Databricks (Delta Lake) environments.',
      tech: 'Kafka, PySpark, Spark Streaming, Databricks, Delta Lake, MySQL, SQL, Docker, WSL, Streaming ETL, Real-time Pipelines, Event-driven Architecture, Data Ingestion, Data Transformation, Checkpointing, UPSERT, Power BI, Cloud Data Engineering',
      image: '/images/real_time.png',
      details: [
        'Built a real-time retail analytics pipeline using Kafka, PySpark Structured Streaming, MySQL, and Databricks for streaming order processing and ETL workflows.',
        'Implemented validation, aggregation, bad-record quarantine handling, window-based aggregations, and checkpointing for fault-tolerant near real-time analytics.',
        'Handled duplicate records using MySQL UPSERT and Spark update mode to achieve exactly-once-like processing behavior.',
        'Developed Power BI dashboards for live revenue tracking, city-wise sales insights, and streaming KPI visualization.',
        'Built Kafka producer-consumer workflows with Docker, WSL, Spark Structured Streaming, Delta Lake, and Databricks to simulate enterprise-scale streaming architectures.'
      ]
    },
    {
      title: 'Healthcare Analytics Dashboard – Power BI', 
      description:
        'Built an interactive healthcare analytics dashboard in Power BI to analyze patient data, diagnosis trends, and operational performance for better decision-making.',
      tech: 'Power BI, Power Query (M language), DAX, SQL (data source queries), Data Modeling, Star Schema, Fact & Dimension Tables, ETL (data transformation), Data Cleaning, Data Integration, Data Refresh, Incremental Refresh, Data Pipelines, KPI Metrics, Performance Optimization',
      image: '/images/Healthcare_Dashboard.png',
      details: [
        'Developed interactive Power BI dashboards using DAX measures and Power Query for healthcare analytics',
        'Performed ETL-style data transformation and cleansing on structured Excel-based healthcare datasets',
        'Implemented KPI calculations for patient demographics, diagnosis trends, and operational metrics',
        'Designed drill-down and slice-based reports for dynamic and granular data exploration.',
        'Optimized data models and relationships to improve dashboard performance and accuracy.'
      ]
    },
    {
      title: 'Campus Recycling Management System',
      description:
        'Developed a data-driven recycling management system using ASP.NET Core MVC and SQL Server to capture, process, and report recycling activities',
      tech: 'ASP.NET Core MVC, C#, Microsoft SQL Server, T-SQL, SSRS (SQL Server Reporting Services), ETL Data Pipelines, Data Modeling, Normalized Database Design, Stored Procedures, GitHub, Agile Methodology',
      image: '/images/Campus_Recycling.png',
      details: [
        'Designed and developed ASP.NET Core MVC application integrated with Microsoft SQL Server for recycling data management',
        'Implemented ETL-style data workflows for ingestion, validation, and structured storage of recycling activity data.',
        'Built SSRS reports for operational monitoring, trend analysis, and performance tracking.',
        'Designed normalized database schema to ensure data integrity and efficient querying.',
        'Used GitHub for version control and followed Agile methodology for iterative development and collaboration'
      ]
    }
  ];

  const experiences = [
    {
      role: 'Data Engineer | Walmart, United States',
      duration: 'Feb 2025 - Present',
      summary:
        'Worked on a real-time retail data platform at Walmart processing high-volume order, transaction, and customer event data using Kafka and Spark, building scalable batch and streaming pipelines to deliver analytics-ready data for sales reporting, dashboards, and business insights',
      responsibilities: [
        'Developed scalable ETL and ELT pipelines for enterprise systems.',
        'Built Kafka-based real-time streaming architectures.',
        'Optimized Spark jobs for high-volume data processing.',
        'Implemented CI/CD pipelines using Jenkins and Docker.',
        'Worked with cross-functional teams for cloud migration initiatives.',
        'Designed monitoring and alerting systems for data pipelines.'
      ]
    },
    {
      role: 'Teaching Assistant – Database Systems | Northwest Missouri State University | Maryville, MO',
      duration: 'Aug 2024 – Dec 2024',
      summary:
        'Assisted in teaching core database systems concepts with focus on SQL, relational modeling, and query optimization',
      responsibilities: [
        'Conducted hands-on sessions on SQL, database design, normalization (1NF–3NF), and relational database fundamentals.',
        'Mentored students on MySQL-based projects involving schema design, data modeling, and query optimization techniques.',
        'Evaluated assignments and guided students in writing efficient SQL queries and understanding RDBMS concepts.',
        'Supported practical learning on joins, indexing concepts, and relational data structures.'
      ]
    },
    {
      role: 'Graduate Assistant – Project Management | Northwest Missouri State University | Maryville, MO',
      duration: 'Jun 2024 – Jul 2024',
      summary:
        'Supported academic project execution through Agile-based planning, coordination, and workflow tracking',
      responsibilities: [
        'Managed project coordination, task tracking, and progress monitoring across multiple academic initiatives.',
        'Applied Agile methodologies using Trello and Microsoft Project for sprint planning and task execution.',
        'Assisted faculty and students in organizing deliverables and maintaining project timelines.',
        'Coordinated documentation and reporting for ongoing academic project workflows.'
      ]
    },
    {
      role: 'Cloud Data Engineer | Microsoft, India',
      duration: 'Aug 2022 – Jul 2023',
      summary:
        'Designed and implemented scalable cloud-based data engineering solutions for batch and real-time analytics using Azure ecosystem and big data technologies',
      responsibilities: [
        'Developed end-to-end ETL/ELT pipelines using Azure Data Factory, Databricks, Spark, Kafka, and PySpark for batch and streaming workloads.',
        'Built scalable data ingestion and transformation workflows for structured and semi-structured datasets.',
        'Designed and implemented data lake and warehouse solutions using Azure Data Lake Storage, Snowflake, and Cosmos DB.',
        'Created dimensional data models and data marts to support BI dashboards and enterprise reporting systems.',
        'Developed PySpark frameworks for large-scale distributed data processing and transformation.',
        'Implemented orchestration workflows with incremental data loads, SLA monitoring, and alerting mechanisms.',
        'Established data governance practices including metadata management, lineage tracking, and data quality validation.',
        'Automated CI/CD pipeline deployments using Jenkins, Docker, and Kubernetes for scalable production releases.'
      ]
    },
    {
      role: 'Software Engineer – Data Engineering | Capgemini, India',
      duration: 'May 2021 – Jun 2022',
      summary:
        'Worked on enterprise data integration systems, backend development, and ETL pipelines supporting analytics and reporting platforms.',
      responsibilities: [
        'Developed backend services and ETL pipelines using Java, Spring Boot, REST APIs, SQL, and data integration frameworks.',
        'Designed and maintained data ingestion pipelines integrating Oracle, MySQL, MongoDB, and Cassandra databases.',
        'Optimized SQL/PLSQL queries, stored procedures, and indexing strategies, improving database performance by 25%.',
        'Contributed to data modeling activities including schema design, relational mapping, and reporting structures.',
        'Supported migration of on-premise systems to cloud-based data platforms ensuring minimal downtime.',
        'Implemented CI/CD pipelines using Git, Jenkins, and Docker for automated build, testing, and deployment.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800 sticky top-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black/90 backdrop-blur z-50">
        <h1 className="text-xl font-bold tracking-wide">Data Engineer</h1>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* <p className="text-cyan-400 text-lg mb-3">Hello, I am</p> */}
          <h2 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
            Muralikrishna Pamidi
          </h2>

          <p className="text-slate-300 text-lg leading-6 mb-8 max-w-xl">
            Passionate Data Engineer specializing in building scalable ETL pipelines,
            real-time streaming systems, cloud-native data platforms and analytics
            solutions.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="/Murali_Data Engineer.pdf" download>
              <button className="bg-cyan-100 hover:bg-cyan-500 text-black px-5 py-2 rounded-2xl font-semibold transition shadow-lg">
                Download Resume
              </button>
            </a>

            <a href="#projects">
              <button className="border border-slate-700 hover:border-cyan-400 px-5 py-2 rounded-2xl transition">
                View Projects
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-7xl font-bold">
              MP
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10">About Me</h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-slate-300 leading-7 tracking-normal max-w-3xl">
                Data Engineer with 4 years of experience building scalable batch and real-time data pipelines, 
                ETL/ELT workflows, and cloud-based data platforms.Strong expertise in Apache Spark, Kafka, 
                Python (PySpark), and SQL across AWS and Azure. Experienced in designing data lakes/warehouses, 
                optimizing distributed processing, and implementing data quality and governance frameworks. 
                Skilled in data modeling, orchestration and delivering reliable, performance-optimized data solutions for analytics and business reporting.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h4 className="text-3xl font-bold text-cyan-400 mb-2">4</h4>
                <p className="text-slate-300">Years Experience</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h4 className="text-3xl font-bold text-cyan-400 mb-2">20+</h4>
                <p className="text-slate-300">Projects Completed</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h4 className="text-3xl font-bold text-cyan-400 mb-2">AWS</h4>
                <p className="text-slate-300">Cloud Expertise</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
                <h4 className="text-3xl font-bold text-cyan-400 mb-2">24/7</h4>
                <p className="text-slate-300">Data Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Technical Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 hover:-translate-y-1 transition duration-300 shadow-lg"
              >
                <p className="text-lg font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Featured Projects</h3>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:border-cyan-400 hover:-translate-y-1 transition duration-300 shadow-lg shadow-cyan-500/5"
              >
                <div className="h-40 rounded-2xl mb-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-xl font-bold mb-4">{project.title}</h4>

                <p className="text-slate-300 leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.split(",").slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-400/20"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-cyan-100 hover:bg-cyan-500 text-black py-2 rounded-2xl font-semibold transition"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Experience</h3>

          <div className="space-y-3">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:border-cyan-400 hover:-translate-y-1 transition duration-300 shadow-lg shadow-cyan-500/5"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h4 className="text-xl font-bold">{experience.role}</h4>
                  <span className="text-cyan-400">{experience.duration}</span>
                </div>

                <p className="text-slate-300 leading-7 tracking-normal max-w-3xl">
                  {experience.summary}
                </p>

                <button
                  onClick={() => setSelectedExperience(experience)}
                  className="bg-cyan-100 hover:bg-cyan-500 text-black px-5 py-2 rounded-2xl font-semibold transition"
                >
                  Responsibilities
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>

          <p className="text-slate-300 text-lg mb-10 leading-6">
            Looking for a Data Engineer to build scalable data solutions,
            automate ETL pipelines, or optimize cloud data platforms? Let’s connect.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-slate-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-2">Email</h4>
              <a
                href="mailto:krishnamv.work2025@gmail.com"
                className="text-cyan-400 hover:underline break-all"
              >
                krishnamv.work2025@gmail.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-slate-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-2">LinkedIn</h4>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline break-all"
              >
                linkedin.com/in/yourprofile
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-slate-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-2">GitHub</h4>
              <a
                href="https://github.com/KrishnaMurali2023"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                https://github.com/krishna
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        <p>© 2026 Muralikrishna Pamidi | Data Engineer Portfolio</p>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50 overflow-y-auto">
          <div className="bg-slate-900 p-5 rounded-2xl max-w-2xl w-full border border-cyan-500 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">
              {selectedProject.title}
            </h2>

            <p className="text-slate-300 leading-7 tracking-normal max-w-3xl">
              {selectedProject.description}
            </p>

            <h3 className="text-xl font-bold mb-4">Project Responsibilities</h3>

            <ul className="space-y-3 mb-6">
              {selectedProject.details.map((detail, index) => (
                <li key={index} className="text-slate-300 flex gap-3">
                  <span className="text-cyan-400">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <p className="text-cyan-400 mb-8">
              Tech Stack: {selectedProject.tech}
            </p>

            <button
              onClick={() => setSelectedProject(null)}
              className="bg-red-500 hover:bg-red-400 px-5 py-2 rounded-2xl font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {selectedExperience && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50 overflow-y-auto">
          <div className="bg-slate-900 p-5 rounded-2xl max-w-2xl w-full border border-cyan-500 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">
              {selectedExperience.role}
            </h2>

            <p className="text-slate-300 mb-6">
              {selectedExperience.duration}
            </p>

            <h3 className="text-xl font-bold mb-4">Work Responsibilities</h3>

            <ul className="space-y-3 mb-8">
              {selectedExperience.responsibilities.map((item, index) => (
                <li key={index} className="text-slate-300 flex gap-3">
                  <span className="text-cyan-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedExperience(null)}
              className="bg-red-500 hover:bg-red-400 px-5 py-2 rounded-2xl font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
