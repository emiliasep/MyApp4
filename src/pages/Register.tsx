import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import { toast } from '../toast';
import { registerUser as registerUserService } from '../firebaseConfig2'

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    async function handleregister() {
      if(password !== cpassword) {
        return toast('Passwords do not match')
      }
      if(username.trim() === '' || password.trim() === '') {
        return toast('User name and password are required')
      }

      const res = await registerUserService(username, password)
    }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput 
            placeholder="Username" 
            onIonChange={(e: CustomEvent) => setUsername(e.detail.value)}/>
        <IonInput 
            type="password"
            placeholder="Password" 
            onIonChange={(e: CustomEvent) => setPassword(e.detail.value)}/>
        <IonInput 
            type="password"
            placeholder="Confirm Password" 
            onIonChange={(e: CustomEvent) => setCPassword(e.detail.value)}/>
        
        <IonButton onClick={handleregister}>Register</IonButton>

        <p>Already have an Account? <Link to="/login">Login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
