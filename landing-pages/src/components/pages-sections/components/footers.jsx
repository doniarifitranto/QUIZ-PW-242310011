import Button from '../ui/button'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-md-4">
            <h5 className="fw-bold mb-2 d-flex align-items-center gap-2">
              <i className="bi bi-box-fill text-primary"></i> AstraTech
            </h5>
            <p className="text-secondary small mb-3">
              We build scalable digital products through strategy, design, and engineering.
            </p>
            <Button href="" variant="outline" size="sm">
              <i className="bi bi-envelope"></i> Get In Touch
            </Button>
          </div>
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Navigation</h6>
            {[
              { label: 'About Us', icon: 'bi-info-circle' },
              { label: 'Services', icon: 'bi-grid' },
              { label: 'Blog',     icon: 'bi-journal-text' },
              { label: 'Contact',  icon: 'bi-envelope' },
            ].map((item) => (
              <a href="#" key={item.label}
                className="d-flex align-items-center gap-2 text-secondary text-decoration-none mb-2 small">
                <i className={`bi ${item.icon}`}></i> {item.label}
              </a>
            ))}
          </div>
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Contact & Location</h6>
            <p className="text-secondary small mb-2">
              <i className="bi bi-envelope-fill text-primary me-2"></i> astratech@co.id
            </p>
            <p className="text-secondary small mb-2">
              <i className="bi bi-geo-alt-fill text-primary me-2"></i> Bogor, Indonesia
            </p>
            <p className="text-secondary small">
              <i className="bi bi-telephone-fill text-primary me-2"></i> +62 812 3456 7890
            </p>
          </div>
        </div>
        <hr className="border-secondary mt-4" />
        <div className="d-flex justify-content-between flex-wrap small text-secondary">
          <span><i className="bi bi-c-circle me-1"></i> 2026 Doni Arifitranto</span>
        </div>
      </div>
    </footer>
  )
}