import React from 'react'

export const GHWidget: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement('script')

    script.src =
      'https://cdn.jsdelivr.net/gh/Rapsssito/github-profile-badge@latest/src/widget.min.js'
    script.async = true
    script.defer = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return <div className="github-profile-badge" data-user="dwwr"></div>
}
