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

