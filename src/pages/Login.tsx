import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react'
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../firebaseConfig2';
import { toast } from '../toast';

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    async function login() {
        const res = await loginUser(username, password);
        if(!res) {
          toast('Error logging in with your credentials')
        } else {
          toast('You have logged in!');
          history.push('/account');
        }
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput 
            placeholder="Username" 
            onIonChange={(e: any) => setUsername(e.detail.value)}/>
        <IonInput 
            type='password'
            placeholder="Password" 
            onIonChange={(e: any) => setPassword(e.detail.value)}/>
        <IonButton onClick={login}>Login</IonButton>
        <p>Don't have an Account? <Link to="/register">Register</Link></p>

      </IonContent>
    </IonPage>
  );
};

export default Login;
