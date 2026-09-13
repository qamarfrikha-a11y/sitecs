export default function CircuitMark({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3" fill="#00B5E2" />
      <circle cx="32" cy="8" r="3" fill="#009CA6" />
      <circle cx="8" cy="32" r="3" fill="#009CA6" />
      <circle cx="32" cy="32" r="3" fill="#F5821F" />
      <circle cx="20" cy="20" r="3.5" fill="#0A2540" />
      <path d="M8 11V20H17" stroke="#00B5E2" strokeWidth="1.6" />
      <path d="M32 11V20H23" stroke="#009CA6" strokeWidth="1.6" />
      <path d="M8 29V20" stroke="#009CA6" strokeWidth="1.6" />
      <path d="M32 29V20" stroke="#F5821F" strokeWidth="1.6" />
    </svg>
  );
}
