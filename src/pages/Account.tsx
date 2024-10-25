import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Account: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to My App</h2>
        <p>You have now logged in to your account.</p>

        <IonButton routerLink="/home">Log Out</IonButton>
 
      </IonContent>
    </IonPage>
  );
};

export default Account;
