// Personal Information
export const personalInfo = {
  name: 'Dilruksha Rajapaksha',
  title: 'Data Engineering Consultant',
  email: 'dilruksha.rajapaksha@example.com',
  phone: '+94 77 123 4567',
  linkedin: 'www.linkedin.com/in/dilruksha-rajapaksha',
  summary: 'Experienced Data Engineering Consultant with 6+ years of expertise in architecting scalable data solutions, optimizing data pipelines, and enabling data-driven decision making across cloud platforms. Specialized in transforming complex data challenges into strategic business value through innovative engineering solutions.',
};

// Education
export const education = [
  {
    id: 1,
    degree: 'MSc in Data Science & Artificial Intelligence',
    institution: 'University of Moratuwa',
    period: '2022 - Present',
    gpa: '3.8',
    grade: 'First Class',
    status: 'Reading',
    logo: '',
    highlights: [
      'Specialized in Machine Learning and Deep Learning',
      'Advanced coursework in Big Data Analytics',
      'Research focus on Data Pipeline Optimization',
    ],
  },
  {
    id: 2,
    degree: 'BSc in Statistics & Operations Research',
    institution: 'University of Colombo',
    period: '2016 - 2020',
    gpa: '3.7',
    grade: 'First Class',
    status: 'Completed',
    logo: '',
    highlights: [
      'Graduated with First Class Honors',
      'Specialized in Statistical Modeling',
      'Completed thesis on Predictive Analytics',
    ],
  },
];

// Skills
export const skills = {
  'Programming Languages': [
    'Python',
    'SQL',
    'Scala',
    'Java',
    'R',
    'JavaScript',
    'TypeScript',
  ],
  'Cloud Technologies': [
    'Microsoft Azure',
    'AWS',
    'Google Cloud Platform',
    'Azure Data Factory',
    'Azure Databricks',
    'Azure Synapse Analytics',
    'AWS Glue',
    'AWS Redshift',
  ],
  'Database Systems': [
    'SQL Server',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Cosmos DB',
    'Azure SQL Database',
    'Snowflake',
    'Delta Lake',
  ],
  'Data Visualization': [
    'Power BI',
    'Tableau',
    'Azure Data Studio',
    'Jupyter Notebooks',
  ],
  'Web Development': [
    'React',
    'Node.js',
    'Express',
    'RESTful APIs',
  ],
  'Machine Learning & AI': [
    'Scikit-learn',
    'TensorFlow',
    'PyTorch',
    'MLflow',
    'Azure ML',
    'Feature Engineering',
  ],
  'DevOps & Tools': [
    'Git',
    'Docker',
    'CI/CD',
    'Azure DevOps',
    'Apache Airflow',
    'dbt',
    'Terraform',
  ],
};

// Certifications
export const certifications = [
  'Microsoft Certified: Azure Data Engineer Associate',
  'AWS Certified Solutions Architect - Associate',
  'Databricks Certified Associate Developer for Apache Spark',
];

// Professional Experience
export const experiences = [
  {
    id: 1,
    title: 'Senior Data Engineering Consultant',
    company: 'Tech Solutions Inc.',
    location: 'Colombo, Sri Lanka',
    period: '2021 - Present',
    duration: '3+ years',
    type: 'Full-time',
    domain: 'Data Engineering',
    responsibilities: [
      'Architected and implemented scalable data pipelines processing 100M+ records daily',
      'Led migration of legacy data systems to cloud-based solutions, reducing costs by 40%',
      'Designed and deployed real-time data streaming solutions using Azure Databricks',
      'Collaborated with cross-functional teams to deliver data-driven insights',
      'Optimized ETL processes reducing processing time by 60%',
    ],
    technologies: [
      'Azure Data Factory',
      'Azure Databricks',
      'Python',
      'SQL',
      'Delta Lake',
      'Power BI',
      'Azure Synapse',
      'Spark',
    ],
  },
  {
    id: 2,
    title: 'Data Engineer',
    company: 'Data Analytics Corp',
    location: 'Colombo, Sri Lanka',
    period: '2019 - 2021',
    duration: '2 years',
    type: 'Full-time',
    domain: 'Data Engineering',
    responsibilities: [
      'Developed and maintained ETL pipelines for business intelligence',
      'Implemented data quality frameworks and monitoring systems',
      'Created data models and optimized database performance',
      'Worked with stakeholders to understand data requirements',
    ],
    technologies: [
      'SQL Server',
      'Python',
      'SSIS',
      'Power BI',
      'Azure',
      'ETL',
    ],
  },
  {
    id: 3,
    title: 'Junior Data Analyst',
    company: 'Analytics Solutions Ltd',
    location: 'Colombo, Sri Lanka',
    period: '2018 - 2019',
    duration: '1 year',
    type: 'Full-time',
    domain: 'Data Analytics',
    responsibilities: [
      'Performed data analysis and created reports',
      'Assisted in data pipeline development',
      'Maintained data quality standards',
      'Supported business intelligence initiatives',
    ],
    technologies: [
      'SQL',
      'Excel',
      'Power BI',
      'Python',
      'R',
    ],
  },
];

// Projects
export const projects = [
  {
    id: 1,
    title: 'Real-time Data Streaming Platform',
    description: 'Built a scalable real-time data streaming platform using Azure Databricks and Event Hubs, processing millions of events per second with sub-second latency.',
    domain: 'Data Engineering',
    technologies: [
      'Azure Databricks',
      'Azure Event Hubs',
      'Python',
      'Spark Streaming',
      'Delta Lake',
      'Kafka',
    ],
    highlights: [
      'Processed 50M+ events daily',
      'Achieved <100ms latency',
      'Reduced infrastructure costs by 35%',
    ],
  },
  {
    id: 2,
    title: 'Cloud Data Warehouse Migration',
    description: 'Led migration of on-premise data warehouse to Azure Synapse Analytics, improving query performance and enabling advanced analytics capabilities.',
    domain: 'Cloud Migration',
    technologies: [
      'Azure Synapse',
      'Azure Data Factory',
      'SQL',
      'Power BI',
      'T-SQL',
      'ETL',
    ],
    highlights: [
      'Migrated 500+ tables successfully',
      'Improved query performance by 70%',
      'Enabled real-time analytics',
    ],
  },
  {
    id: 3,
    title: 'ML-Powered Predictive Analytics System',
    description: 'Developed an end-to-end machine learning pipeline for predictive analytics, from data ingestion to model deployment using Azure ML.',
    domain: 'Machine Learning',
    technologies: [
      'Azure ML',
      'Python',
      'Scikit-learn',
      'MLflow',
      'Azure Databricks',
      'REST APIs',
    ],
    highlights: [
      'Achieved 92% prediction accuracy',
      'Automated model retraining pipeline',
      'Deployed models to production',
    ],
  },
  {
    id: 4,
    title: 'Data Lake Architecture Implementation',
    description: 'Designed and implemented a modern data lake architecture using Azure Data Lake Storage Gen2 and Databricks, enabling data scientists to access raw and processed data.',
    domain: 'Data Architecture',
    technologies: [
      'Azure Data Lake',
      'Azure Databricks',
      'Delta Lake',
      'Python',
      'Spark',
      'Parquet',
    ],
    highlights: [
      'Stored 10TB+ of data',
      'Enabled self-service analytics',
      'Improved data accessibility',
    ],
  },
  {
    id: 5,
    title: 'ETL Pipeline Optimization',
    description: 'Optimized legacy ETL pipelines by refactoring code, implementing parallel processing, and leveraging cloud resources, reducing processing time significantly.',
    domain: 'Data Engineering',
    technologies: [
      'Python',
      'Azure Data Factory',
      'SQL',
      'Spark',
      'Optimization',
    ],
    highlights: [
      'Reduced processing time by 60%',
      'Improved data quality',
      'Lowered operational costs',
    ],
  },
  {
    id: 6,
    title: 'Business Intelligence Dashboard Suite',
    description: 'Created comprehensive Power BI dashboards providing real-time insights into business metrics, enabling data-driven decision making.',
    domain: 'Business Intelligence',
    technologies: [
      'Power BI',
      'SQL',
      'DAX',
      'Azure SQL Database',
      'Data Modeling',
    ],
    highlights: [
      'Created 20+ interactive dashboards',
      'Real-time data refresh',
      'Improved reporting efficiency',
    ],
  },
];

