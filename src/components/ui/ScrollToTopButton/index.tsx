"use client"

import { useState, useEffect } from 'react'
import { Button } from '@nextui-org/react'
import { IconArrowUp } from '@tabler/icons-react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full p-2 bg-purple-600 text-white shadow-lg transition-all hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <IconArrowUp />
    </Button>
  )
}