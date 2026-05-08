import Link from 'next/link'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
}) {

  const base = 'btn rounded-pill fw-semibold d-inline-flex align-items-center gap-2'

  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline-primary',
    ghost:   'btn btn-link text-dark text-decoration-none',
  }

  const sizes = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg px-4 py-2',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}