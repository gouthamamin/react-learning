import withAuth from './hoc/withAuth'

const ProfilePage = () => {
  return (
    <div>
      <h1>Welcome to Profile Page!</h1>
    </div>
  )
}

const AuthenticatedhProfilePage = withAuth(ProfilePage);

export default AuthenticatedhProfilePage;


