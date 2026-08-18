import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App.jsx'
import Testimonials from '../src/components/Testimonials.jsx'

describe('site sections', () => {
  it('renders every section on the page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Seamless Digital Solutions, Built for Your Business',
    )
    expect(screen.getByText('What we do')).toBeInTheDocument()
    expect(screen.getByText('Selected work')).toBeInTheDocument()
    const testimonialsBadges = screen.getAllByText('Testimonials')
    expect(testimonialsBadges.some((el) => el.classList.contains('badge-accent'))).toBe(true)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    const workBadges = screen.getAllByText('How we work')
    expect(workBadges.some((el) => el.classList.contains('badge-accent'))).toBe(true)
    const buildBadges = screen.getAllByText('What we build')
    expect(buildBadges.some((el) => el.classList.contains('badge-accent'))).toBe(true)
  })

  it('shows the four services', () => {
    render(<App />)
    for (const service of ['Mobile apps', 'Bespoke software', 'Automation', 'Integration']) {
      expect(screen.getByRole('heading', { name: service })).toBeInTheDocument()
    }
  })

  it('shows the four process steps', () => {
    render(<App />)
    for (const step of ['1 \u00b7 Discover', '2 \u00b7 Prototype', '3 \u00b7 Build', '4 \u00b7 Launch & handover']) {
      expect(screen.getByRole('heading', { name: step })).toBeInTheDocument()
    }
  })

  it('shows featured and support portfolio cards', () => {
    render(<App />)
    expect(screen.getByText('Aftermath Navigator')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Bailey & Cronin Chartered Surveyors' })).toBeInTheDocument()
    expect(screen.getByText('Hydrangea Legal')).toBeInTheDocument()
    expect(screen.getByText('Engager.app Mobile App')).toBeInTheDocument()
  })

  it('links the Bailey & Cronin card to its testimonial', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Read their testimonial' })
    expect(link).toHaveAttribute('href', '#testimonial-bailey-cronin')
  })

  it('exposes a working email CTA', () => {
    render(<App />)
    const email = screen.getByRole('link', { name: 'info@focusedmindscreative.tech' })
    expect(email).toHaveAttribute('href', 'mailto:info@focusedmindscreative.tech')
  })
})

describe('testimonials spotlight', () => {
  it('renders a single Ian Cronin testimonial with its stage anchor', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'What our clients say' })).toBeInTheDocument()
    expect(screen.getAllByText('Ian Cronin').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/I cannot recommend Ed at Focused Minds Creative highly enough/)).toBeInTheDocument()
    expect(screen.getByText('A genuine five-star service. Highly recommended.')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Testimonials' })).toHaveAttribute(
      'id',
      'testimonial-bailey-cronin',
    )
  })

  it('marks the single author button as pressed and hides the progress bar', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: /Ian Cronin/ })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  })

  it('hides inactive slides from assistive tech', () => {
    render(<Testimonials />)
    expect(screen.getByRole('article').closest('.testimonial-slide')).toHaveAttribute(
      'aria-hidden',
      'false',
    )
  })
})