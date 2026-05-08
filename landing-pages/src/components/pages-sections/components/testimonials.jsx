import Button from '../ui/button'

const reviews = [
  {
    name: 'Michael T.',
    role: 'Head of Engineering',
    stars: 4,
    text: 'Working with TechNova felt like partnering with an in-house team. Their technical expertise and attention to detail were exceptional.',
  },
  {
    name: 'Sarah L.',
    role: 'Startup Founder',
    stars: 5,
    text: 'The team understood our business goals and delivered a product that was both reliable and easy to scale.',
  },
  {
    name: 'Budi W.',
    role: 'Startup Founder',
    stars: 5,
    text: 'The team understood our business goals and delivered a product that was both reliable and easy to scale.',
  },
  {
    name: 'Anto S.',
    role: 'Startup Founder',
    stars: 5,
    text: 'The team understood our business goals and delivered a product that was both reliable and easy to scale.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-5" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-2">What Our Clients Say</h2>
        <p className="text-secondary text-center mb-5">
          Real feedback from teams weve worked with.
        </p>
        <div className="row g-4 justify-content-center mb-5">
          {reviews.map((r) => (
            <div className="col-md-5" key={r.name}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <i className="bi bi-quote text-primary fs-2 d-block mb-2"></i>
                <div className="text-warning mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i key={i} className={`bi ${i < r.stars ? 'bi-star-fill' : 'bi-star'}`}></i>
                  ))}
                </div>
                <p className="text-secondary fst-italic">{r.text}</p>
                <div className="d-flex align-items-center gap-2 mt-3">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white"
                    style={{ width: 40, height: 40 }}>
                    <i className="bi bi-person-fill"></i>
                  </div>
                  <div>
                    <div className="fw-semibold small">{r.name}</div>
                    <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{r.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="" size="lg">
            <i className="bi bi-handshake"></i> Work With Us
          </Button>
        </div>
      </div>
    </section>
  )
}