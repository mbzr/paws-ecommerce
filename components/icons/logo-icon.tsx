export const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100" height="100" rx="15" fill="#F5EFE6" />

      <g fill="#1A4731" transform="scale(0.85) translate(8, 8)">
        <path d="M 50,85 C 40,90 30,80 30,70 C 30,55 60,55 70,70 C 70,80 60,90 50,85 Z" />
        <circle cx="30" cy="45" r="8" />
        <circle cx="45" cy="35" r="8" />
        <circle cx="60" cy="35" r="8" />
        <circle cx="75" cy="45" r="8" />
      </g>
    </svg>
  )
}
