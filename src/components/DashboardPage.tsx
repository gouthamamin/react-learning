import withAuth from './hoc/withAuth'

const DashboardPage = () => {
  return (
    <div>
      <h1>Welcome to Dashboard Page!</h1>
    </div>
  )
}

const AuthenticatedhDashboardPage = withAuth(DashboardPage);

export default AuthenticatedhDashboardPage;


