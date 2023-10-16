import authService from "./services/firebase/auth.service"

function App() {
  const handleGoogleLogin = async () => {
    try {
      const response = await authService.SignInWithGooglePopup();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      Hello World App

      <button onClick={handleGoogleLogin}>Login With Google</button>
    </div>
  )
}

export default App
