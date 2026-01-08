// Official Company Logos Component
export const MicrosoftLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022"/>
    <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7FBA00"/>
    <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
    <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
  </svg>
);

export const AWSLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 154" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M160.5 153.7L128.1 77.1L95.7 153.7H160.5Z" fill="#232F3E"/>
    <path d="M128.1 0L0 153.7H48.1L128.1 38.5L208.1 153.7H256L128.1 0Z" fill="#FF9900"/>
    <path d="M128.1 38.5L95.7 115L160.5 115L128.1 38.5Z" fill="#232F3E"/>
  </svg>
);

export const DatabricksLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 0L0 64V128L128 192L256 128V64L128 0Z" fill="#FF3621"/>
    <path d="M128 32L32 80V128L128 176L224 128V80L128 32Z" fill="#FF3621"/>
    <path d="M128 64L64 96V128L128 160L192 128V96L128 64Z" fill="#FF3621"/>
  </svg>
);

// GCP Logo
export const GCPLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M200.6 98.5L200.2 97.8L160.5 58.1L145.7 58.4C148.1 63.2 149.3 68.7 149.1 74.2C149.1 85.1 145 95.5 137.4 103.1L137.7 103.4L137.4 103.7C139.8 106.1 141.8 109 143.4 112.2L182.3 151.1C184.6 150.2 186.9 149.5 189.2 149.1C195.9 148.3 202.3 150.5 207.2 154.9L200.6 98.5Z" fill="#EA4335"/>
    <path d="M74.2 149.1C74.2 144.7 74.8 140.4 76 136.3L55.4 115.7C52.2 121.3 50.4 127.8 50.4 134.7C50.4 148.1 56.5 160.1 66.2 168.2L81.2 153.2C77.1 151.3 74.2 147.4 74.2 149.1Z" fill="#FBBC04"/>
    <path d="M137.4 103.7L82.4 158.7C78.3 154.6 74.2 147.4 74.2 149.1C74.2 161.8 84.4 172 97.1 172C99.7 172 102.1 171.5 104.4 170.6L143.4 131.6C142.5 133.9 142 136.3 142 138.9C142 151.6 152.2 161.8 164.9 161.8C177.6 161.8 187.8 151.6 187.8 138.9C187.8 126.2 177.6 116 164.9 116C162.3 116 159.9 116.5 157.6 117.4L154.1 113.9L137.4 103.7Z" fill="#4285F4"/>
    <path d="M200.2 97.8L189.2 86.8C183.2 81.9 175.5 79.1 167.3 79.1C151.9 79.1 139.2 91.8 139.2 107.2C139.2 109.8 139.5 112.3 140.1 114.7L143.4 112.2L182.3 151.1C185.5 150.3 188.6 149.1 191.5 147.5L207.3 131.7L200.6 98.5L200.2 97.8Z" fill="#34A853"/>
    <path d="M74.2 149.1C74.2 144.7 74.8 140.4 76 136.3L55.4 115.7C47.8 126.5 44 139.6 44 153.4C44 167.2 47.8 180.3 55.4 191.1L76 170.5C74.8 166.4 74.2 162.1 74.2 157.7C74.2 147.4 74.2 149.1 74.2 149.1Z" fill="#C5221F"/>
  </svg>
);

// Apache Spark Logo
export const ApacheSparkLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 32L32 80V128L128 176L224 128V80L128 32Z" fill="#E25A1C"/>
    <path d="M128 56L56 92V128L128 164L200 128V92L128 56Z" fill="#DC3D24"/>
    <circle cx="128" cy="110" r="20" fill="#FFFFFF"/>
    <path d="M128 90L90 110L128 130L166 110L128 90Z" fill="#E25A1C"/>
  </svg>
);

// Apache Airflow Logo
export const ApacheAirflowLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 32L64 64V128L128 192L192 128V64L128 32Z" fill="#007A88"/>
    <path d="M128 48L80 72V128L128 176L176 128V72L128 48Z" fill="#00A5B5"/>
    <path d="M128 64L96 80V128L128 160L160 128V80L128 64Z" fill="#FFFFFF"/>
    <circle cx="128" cy="110" r="8" fill="#007A88"/>
    <path d="M128 96L108 108L128 120L148 108L128 96Z" fill="#007A88"/>
  </svg>
);

// TensorFlow Logo
export const TensorFlowLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 32L64 64L64 128L128 160L192 128L192 64L128 32Z" fill="#FF6F00"/>
    <path d="M128 48L96 64L96 128L128 144L160 128L160 64L128 48Z" fill="#FF8F00"/>
    <path d="M128 64L112 72L112 128L128 136L144 128L144 72L128 64Z" fill="#FFB300"/>
    <path d="M128 80L120 84L120 128L128 132L136 128L136 84L128 80Z" fill="#FFD54F"/>
    <path d="M128 96L124 98L124 128L128 130L132 128L132 98L128 96Z" fill="#FFF9C4"/>
  </svg>
);

// Snowflake Logo
export const SnowflakeLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 32L96 48L128 64L160 48L128 32Z" fill="#29B5E8"/>
    <path d="M128 64L96 80L128 96L160 80L128 64Z" fill="#29B5E8"/>
    <path d="M128 96L96 112L128 128L160 112L128 96Z" fill="#29B5E8"/>
    <path d="M128 128L96 144L128 160L160 144L128 128Z" fill="#29B5E8"/>
    <path d="M128 160L96 176L128 192L160 176L128 160Z" fill="#29B5E8"/>
    <path d="M128 192L96 208L128 224L160 208L128 192Z" fill="#29B5E8"/>
    <path d="M128 128L88 112L128 96L168 112L128 128Z" fill="#29B5E8"/>
    <path d="M128 96L88 80L128 64L168 80L128 96Z" fill="#29B5E8"/>
    <path d="M128 160L88 144L128 128L168 144L128 160Z" fill="#29B5E8"/>
    <circle cx="128" cy="128" r="12" fill="#FFFFFF"/>
  </svg>
);

// Performance/Speed Logo (Apache Kafka inspired)
export const PerformanceLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 48L64 80L64 128L128 160L192 128L192 80L128 48Z" fill="#231F20"/>
    <path d="M128 64L80 88L80 128L128 152L176 128L176 88L128 64Z" fill="#000000"/>
    <path d="M128 80L96 96L96 128L128 144L160 128L160 96L128 80Z" fill="#FFFFFF"/>
    <path d="M112 112L128 120L144 112V128L128 136L112 128V112Z" fill="#231F20"/>
  </svg>
);

// Cloud Solutions Logo (Combined Azure, GCP, AWS)
export const CloudSolutionsLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Azure */}
    <path d="M64 48L32 64L32 96L64 112L96 96L96 64L64 48Z" fill="#0078D4"/>
    {/* AWS */}
    <path d="M160 48L128 64L128 96L160 112L192 96L192 64L160 48Z" fill="#FF9900"/>
    {/* GCP */}
    <path d="M112 128L80 144L80 176L112 192L144 176L144 144L112 128Z" fill="#4285F4"/>
    {/* Cloud shape */}
    <path d="M128 80L96 96L96 144L128 160L160 144L160 96L128 80Z" fill="#E8E8E8" fillOpacity="0.3"/>
  </svg>
);

