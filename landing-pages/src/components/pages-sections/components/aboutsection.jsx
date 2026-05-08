import Button from '../ui/button'

const stats = [
  { icon: 'bi-folder2-open', number: '50+', label: 'Projects Delivered' },
  { icon: 'bi-emoji-smile',  number: '30+', label: 'Happy Clients' },
  { icon: 'bi-calendar2',    number: '6+',  label: 'Years Experience' },
]

export default function AboutSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400"
                  alt="Team working"
                  className="img-fluid rounded-4 shadow-sm w-100"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-6 mt-4">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400"
                  alt="Modern building"
                  className="img-fluid rounded-4 shadow-sm w-100"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold display-6 lh-sm mb-4">
              Where Strategy Meets{' '}
              <span className="text-secondary fw-light">Technology.</span>
            </h2>
            <p className="text-secondary mb-4">
              Founded in <span className="text-primary fw-semibold">2018</span>,
              TechNova partners with growing companies to build scalable digital solutions.
              We combine strategic thinking, thoughtful design, and robust engineering
              to solve real business challenges.
            </p>
            <div className="row g-3 mb-4">
              {stats.map((s) => (
                <div className="col-4" key={s.label}>
                  <div className="p-3 rounded-4 text-center" style={{ background: '#F8FAFC' }}>
                    <i className={`bi ${s.icon} text-primary fs-5 mb-1 d-block`}></i>
                    <div className="fw-bold fs-5 text-primary">{s.number}</div>
                    <div className="text-secondary" style={{ fontSize: '0.72rem' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button href="" size="lg">
              <i className="bi bi-rocket-takeoff"></i> Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}