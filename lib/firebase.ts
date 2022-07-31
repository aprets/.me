import {getApps, initializeApp} from 'firebase/app'

if (getApps().length < 1) {
	initializeApp({
		// cspell:disable-next-line -- disables checking till the end of the next line.
		apiKey: 'AIzaSyA5TlRAOzR-R5LlG7PabnO2sDV6oWK8JtM',
		// cspell:disable-next-line -- disables checking till the end of the next line.
		authDomain: 'aprets-me.firebaseapp.com',
		projectId: 'aprets-me',
		// cspell:disable-next-line -- disables checking till the end of the next line.
		storageBucket: 'aprets-me.appspot.com',
		messagingSenderId: '1086903271122',
		appId: '1:1086903271122:web:52d59fafea7892d0a3770b',
		// cspell:disable-next-line -- disables checking till the end of the next line.
	})
}
