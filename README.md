#### Requerimientos (las versiones con las que fue testeado)

* NodeJS 6 o superior instalado
* NPM 5 o superior 


#### Instalar lineas de comando
```bash
$ npm install -g yarn 
$ npm install -g create-react-native-app
$ npm install -g react-native-cli
```


#### Crear aplicación react native
```bash
$ create-react-native-app timon_calendar_ios
$ cd timon_calendar_ios
```
#### extraer configuracion para obtener librerías nativas
```bash
$ yarn run eject
```
##### adjuntar imagen que muestre las opciones  de eject


#### Instalar  como dependencia [React Native Calendar Events](https://github.com/wmcmahan/react-native-calendar-events)
```bash
$ yarn add react-native-calendar-events
```

#### Linkear dependencias nativas al proyecto  iOS y android
```bash
$ react-native link
```


## iOS

#### Intentar correr el proyecto en el simulador de iOS 
```bash
$ react-native run-ios --simulator="iPhone 6s"
```

##### linkear foto del error  (No bundle url present) https://github.com/facebook/react-native/issues/12754


#### Seguir pasos de librería react native calendar events
* Agregar event kit framework en xcode
* Agregar la propiedad NSCalendarsUsageDescription al plist.






## Android

* Descargar e instalar JDK 8 (react native no corre aun con jdk 9 que es el ultimo) http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

* Si ya tenías instalado otro JDK (por lo general se instala el 9 por defecto) debes cambiar la variable de entorno JAVA_HOME a el JDK 8

```bash
# Recomendado agregar al  .bashrc o .zshrc  para que parta ese activado cuando abres el terminal
$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_161.jdk/Contents/Home/
```

##### Nota: la url podría variar dependiendo de la version de JDK 8 que instales (_161 en este caso)

```bash
# para confirmar que esta instalado el SDK 8 y no 9 este comando debería entregar
# javac 1.8.0_161
$ javac -version 
```
#### Instalar y configurar por defecto Android Studio https://developer.android.com/studio/index.html


#### Correr proyecto en android
```bash
$ react-native run-android
```

##### Error: SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.

###### https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found

##### Error: You have not accepted the license agreements of the following SDK components https://stackoverflow.com/questions/39760172/you-have-not-accepted-the-license-agreements-of-the-following-sdk-components aceptar todas las licencias con la solucion de 195 up



#### crear avd para emular android https://developer.android.com/studio/build/building-cmdline.html#RunningOnEmulator

#### Se debe correr emulador creado  con android studio antes de ejecutar la app


#### Correr proyecto en android
```bash
$ react-native run-android
```