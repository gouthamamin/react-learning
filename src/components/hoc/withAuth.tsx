import React from 'react'

// HOC component which takes component as props & returns new enchanced component
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  // return enhanced authenticated component
  return function EnhancedComponent(props: P){
    const isLoggedIn = localStorage.getItem('access_token');
    if (!isLoggedIn) return <h1>Please login first!!</h1>
    return <WrappedComponent {...props} />
  }
}

export default withAuth;



