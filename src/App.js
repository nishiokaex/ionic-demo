import React, {Component} from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonTitle,
  IonSpinner,
  IonToggle,
  IonListHeader,
  IonMenuToggle,
  IonBadge,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCheckbox,
  IonFab,
  IonFabButton,
  IonRadioGroup,
  IonRange,
  IonSearchbar,
  IonFooter,
  IonRadio,
  IonToast,
} from '@ionic/react';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      isShowToast: false,
    };
  }

  render () {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuToggle>
                <IonButton>
                  <IonIcon slot="iconOnly" name="menu" />
                </IonButton>
              </IonMenuToggle>
            </IonButtons>
            <IonTitle>Ionic demo</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent padding textCenter noBounce>
          <h2>badge</h2>
          <IonItem>
            <IonIcon name="logoTwitter" slot="start" />
            followers
            <IonBadge slot="end">260k</IonBadge>
          </IonItem>

          <h2>button</h2>
          <IonButton>default</IonButton>
          <IonButton color="primary">primary</IonButton>
          <IonButton color="secondary">secondary</IonButton>
          <IonButton color="tertiary">tertiary</IonButton>
          <IonButton color="success">success</IonButton>
          <IonButton color="warning">warning</IonButton>
          <IonButton color="danger">danger</IonButton>
          <IonButton color="light">light</IonButton>
          <IonButton color="medium">medium</IonButton>
          <IonButton color="dark">dark</IonButton>

          <h2>button(outline)</h2>
          <IonButton fill="outline">default</IonButton>
          <IonButton fill="outline" color="primary">primary</IonButton>
          <IonButton fill="outline" color="secondary">secondary</IonButton>
          <IonButton fill="outline" color="tertiary">tertiary</IonButton>
          <IonButton fill="outline" color="success">success</IonButton>
          <IonButton fill="outline" color="warning">warning</IonButton>
          <IonButton fill="outline" color="danger">danger</IonButton>
          <IonButton fill="outline" color="light">light</IonButton>
          <IonButton fill="outline" color="medium">medium</IonButton>
          <IonButton fill="outline" color="dark">dark</IonButton>

          <h2>button(others)</h2>
          <IonButton expand="full">full button</IonButton>
          <IonButton expand="block">block button</IonButton>
          <IonButton round>round button</IonButton>
          <IonButton fill="clear">clear button</IonButton>
          <IonButton strong>strong button</IonButton>

          <h2>card</h2>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>card header</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              keep close to nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. wash your spirit clean.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonItem>
              <IonIcon name="pin" slot="start" />
              IonItem in a card, icon left, button right
              <IonButton fill="outline" slot="end">view</IonButton>
            </IonItem>
            <IonCardContent>
              this is content, without any paragraph or header tags,
              within an IonCardContent element.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonItem href="#" class="activated">
              <IonIcon name="wifi" slot="start" />
              card link item 1 .activated
            </IonItem>
            <IonItem href="#">
              <IonIcon name="wine" slot="start" />
              card link item 2
            </IonItem>
            <IonItem class="activated">
              <IonIcon name="warning" slot="start" />
              card button item 1 .activated
            </IonItem>
            <IonItem>
              <IonIcon name="walk" slot="start" />
              card button item 2
            </IonItem>
          </IonCard>

          <h2>checkbox</h2>
          <IonList>
            <IonItem>
              <IonLabel>default</IonLabel>
              <IonCheckbox slot="end" />
            </IonItem>
            <IonItem>
              <IonLabel>checked</IonLabel>
              <IonCheckbox slot="end" checked />
            </IonItem>
            <IonItem>
              <IonLabel>disabled</IonLabel>
              <IonCheckbox slot="end" disabled />
            </IonItem>
            <IonItem>
              <IonLabel>danger color</IonLabel>
              <IonCheckbox slot="end" color="danger" />
            </IonItem>
          </IonList>

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton mini>
              <IonIcon name="add" />
            </IonFabButton>
          </IonFab>

          <h2>radio</h2>
          <IonList>
            <IonRadioGroup>
              <IonListHeader>
                <IonLabel>name</IonLabel>
              </IonListHeader>

              <IonItem>
                <IonLabel>biff</IonLabel>
                <IonRadio slot="start" value="biff" checked />
              </IonItem>

              <IonItem>
                <IonLabel>griff</IonLabel>
                <IonRadio slot="start" value="griff" />
              </IonItem>

              <IonItem>
                <IonLabel>buford</IonLabel>
                <IonRadio slot="start" value="buford" />
              </IonItem>
            </IonRadioGroup>
          </IonList>

          <h2>range</h2>
          <IonItem>
            <IonRange pin="true" color="danger" value="20">
              <IonIcon small name="iosThermometer" slot="start" />
              <IonIcon name="iosThermometer" slot="end" />
            </IonRange>
          </IonItem>

          <h2>searchbar</h2>
          <IonSearchbar />

          <h2>spinner</h2>
          <IonList>
            <IonItem>
              <IonSpinner slot="start" />
              show default spinner
            </IonItem>
            <IonItem>
              <IonSpinner slot="start" name="lines" />
              show lines
            </IonItem>
            <IonItem>
              <IonSpinner slot="start" name="linesSmall" />
              show lines small
            </IonItem>
            <IonItem>
              <IonSpinner slot="start" name="dots" />
              show dots
            </IonItem>
            <IonItem>
              <IonSpinner slot="start" name="bubbles" />
              show bubbles
            </IonItem>
            <IonItem>
              <IonSpinner slot="start" name="circles" />
              show circles
            </IonItem>
            <IonItem>
              <IonSpinner slot="start" name="crescent" />
              show crescent
            </IonItem>
            <IonItem>
              <IonSpinner slot="start" paused />
              show paused default spinner
            </IonItem>
          </IonList>

          <h2>toggle</h2>
          <IonItem>
            <IonLabel>toggle</IonLabel>
            <IonToggle value="toggle" checked />
          </IonItem>
          <IonItem>
            <IonLabel>toggle</IonLabel>
            <IonToggle color="dark" checked />
          </IonItem>
          <IonItem>
            <IonLabel>toggle</IonLabel>
            <IonToggle color="secondary" checked />
          </IonItem>
          <IonItem>
            <IonLabel>toggle</IonLabel>
            <IonToggle color="danger" checked="false" />
          </IonItem>
          <IonItem>
            <IonLabel>toggle</IonLabel>
            <IonToggle color="light" checked="false" />
          </IonItem>

          <h2>toast</h2>
          <IonToast
            isOpen={this.state.isShowToast}
            message="Updating content"
            showCloseButton={true}
            duration={2000}
            onDidDismiss={() => this.setState ({isShowToast: false})}
          />
          <IonButton
            expand="block"
            id="showtoast"
            onclick={() => {
              this.setState ({isShowToast: true});
            }}
          >
            show toast
          </IonButton>
        </IonContent>

        <IonFooter>
          <IonToolbar>
            <IonTitle>footer</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonApp>
    );
  }
}

export default App;
