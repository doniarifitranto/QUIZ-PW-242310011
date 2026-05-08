import Button from '../ui/button'

export default function HeroSection() {
  return (
    <section className="py-5" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="section-badge mb-3">
              <i className="bi bi-stars"></i> Innovative Solutions for a Digital Future
            </span>
            <h1 className="display-4 fw-bold lh-sm mb-3">
              Technology by Strategy.<br />
              <span className="text-secondary fw-light">Innovation by Design.</span>
            </h1>
            <p className="text-secondary mb-4">
              We build scalable digital products and technology solutions tailored
              to your business needs — from strategy, design, to development.
            </p>
            <div className="d-flex gap-3 align-items-center flex-wrap">
              <Button href="" size="lg">
                <i className="bi bi-rocket-takeoff"></i> Start Your Project
              </Button>
              <Button variant="ghost">
                <i className="bi bi-grid-1x2"></i> Explore Our Services
              </Button>
            </div>
            <div className="mt-4 d-flex align-items-center gap-2 text-secondary small">
              <i className="bi bi-people-fill text-primary"></i>
              Trusted by startups and growing enterprises
            </div>
          </div>

          <div className="col-lg-6 position-relative">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600"
              alt="Building"
              className="img-fluid rounded-4 shadow"
            />
            <div className="position-absolute top-0 start-0 bg-white shadow rounded-3 p-2 px-3 m-3 small">
              <i className="bi bi-palette text-primary"></i> <strong>UI/UX Systems</strong><br />
              <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Consistent & scalable</span>
            </div>
            <div className="position-absolute bottom-0 end-0 bg-white shadow rounded-3 p-2 px-3 m-3 small">
              <i className="bi bi-bar-chart-line text-primary"></i> <strong>Product Strategy</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}