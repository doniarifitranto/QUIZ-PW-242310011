import Button from '../ui/button'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2">
          <i className="bi bi-box-fill text-primary fs-4"></i> AstraTech
        </a>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-3">
            {[
              { label: 'About Us',  icon: 'bi-info-circle' },
              { label: 'Services',  icon: 'bi-grid' },
              { label: 'Blog',      icon: 'bi-journal-text' },
              { label: 'Contact',   icon: 'bi-envelope' },
            ].map((item) => (
              <li className="nav-item" key={item.label}>
                <a className="nav-link text-secondary d-flex align-items-center gap-1" href="#">
                  <i className={`bi ${item.icon}`}></i> {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#">
            <i className="bi bi-send"></i> Contact Us
          </Button>
        </div>
      </div>
    </nav>
  )
}