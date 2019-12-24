import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loader = () => (
  <ContentLoader
    height={56}
    width={240}
    speed={2}
    primaryColor="#fff"
    secondaryColor="#fafafa"
  >
    <circle cx="25" cy="25" r="25" />
    <rect x="64" y="16" rx="3" ry="3" width="145" height="16" />
  </ContentLoader>
)
