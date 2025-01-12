import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My app</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to My App</h2>
        <p>Please Login or Register to access your account.</p>
        <IonButton routerLink="/login">Login</IonButton>
        <IonButton routerLink="/register">Register</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
