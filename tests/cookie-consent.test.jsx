import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import CookieBanner from '../src/components/CookieBanner.jsx'
import Footer from '../src/components/Footer.jsx'

describe('cookie banner', () => {
  beforeEach(() => window.localStorage.clear())

  it('shows when no choice has been made', () => {
    render(<CookieBanner />)
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
  })

  it('stores the choice and hides', () => {
    render(<CookieBanner />)
    fireEvent.click(screen.getByRole('button', { name: 'Reject' }))
    expect(window.localStorage.getItem('fmc-cookie-consent')).toBe('denied')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('stays hidden when a choice is stored, and reopens from the footer', () => {
    window.localStorage.setItem('fmc-cookie-consent', 'granted')
    render(
      <>
        <Footer />
        <CookieBanner />
      </>,
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Cookie settings' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
