// useLogin.js
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { useRouter } from "next/router";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { push } = useRouter();

  const handleLogin = async () => {
    try {
      console.log("Intentando autenticar con:", email, password); // Debugging
      const isAuthenticated = await authenticate(email, password);

      if (isAuthenticated) {
        const user = auth.currentUser;
      const uid = user.uid;

        push(`/home?uid=${uid}`); // Redirige al usuario a la página de inicio
      }
    } catch (error) {
      console.log("Error al autenticar:", error); // Debugging
      setError(error.message); // Muestra el mensaje de error proporcionado por Firebase
    }
  };

  const authenticate = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.log("Error de autenticación:", error); // Debugging
      switch (error.code) {
        case "auth/user-not-found":
          throw new Error("Correo electrónico no encontrado");
        case "auth/wrong-password":
          throw new Error("Contraseña incorrecta");
        case "auth/invalid-credential":
          throw new Error("Correo Electronico o Contraseña incorrecta, verifique nuevamente.");
        default:
          throw error;
      }
    }
  };

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleLogin,
  };
};

export default useLogin;

