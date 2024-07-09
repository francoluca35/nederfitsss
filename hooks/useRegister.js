import { useState } from "react";
import { auth, db, firestore } from "../firebase/firebase.config"; // Asegúrate de importar el módulo de autenticación desde tu archivo firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, username);
      // Aquí puedes manejar el usuario registrado, redireccionar, mostrar un mensaje, etc.
      if (userCredential && userCredential.user) {
        localStorage.setItem('uid', userCredential.user.uid);
        console.log("Usuario registrado:", userCredential.user);
        // Guardar información del usuario en Firestore
        const userRef = collection(db, "users");
        await addDoc(userRef, {
          email: email,
          username: username,
          uid: userCredential.user.uid // Aquí podrías usar otro identificador único si lo prefieres
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };



  return {
    email,
    password,
    username,
    error,
    setEmail,
    setUsername,
    setPassword,
    handleRegister,
  };
};

export default useRegister;