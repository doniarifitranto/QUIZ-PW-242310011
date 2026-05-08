import Button from '../ui/button'

const features = [
  {
    icon: 'bi-lightbulb',
    title: 'Product Strategy',
    desc: 'Turning ideas into scalable digital products aligned with your business goals.',
  },
  {
    icon: 'bi-pen',
    title: 'UI/UX & Design Systems',
    desc: 'Designing consistent, user-focused interfaces across platforms.',
  },
  {
    icon: 'bi-code-slash',
    title: 'Dev-Ready Delivery',
    desc: 'Solutions built for efficient and sustainable development.',
  },
]

export default function Features() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-2">Why Companies Choose TechNova</h2>
        <p className="text-secondary mb-5">
          We deliver technology solutions designed to scale with your business goals.
        </p>
        <div className="row g-4 justify-content-center mb-5">
          {features.map((f) => (
            <div className="col-md-4" key={f.title}>
              <div className="p-4 rounded-4 h-100" style={{ background: '#F8FAFC' }}>
                <div className="mb-3">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-3 bg-primary bg-opacity-10"
                    style={{ width: 52, height: 52 }}>
                    <i className={`bi ${f.icon} text-primary fs-4`}></i>
                  </span>
                </div>
                <h5 className="fw-semibold">{f.title}</h5>
                <p className="text-secondary small mb-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Button href="" variant="outline" size="lg">
          <i className="bi bi-arrow-right-circle"></i> View All Services
        </Button>
      </div>
    </section>
  )
}