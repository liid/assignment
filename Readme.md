# assignment
Assignment

The assignment consists of two different screens.
The first screen is a simple screen from where you can make a call on an Android Emulator.
The second screen is designed to show your Call History from the Android Emulator.

For this assignment you need to implement two different features.

# Implement Feature to Call

Implement the Call Button on the first screen so that you can actually make a call. All the necessary code is in place inside the Android code base so you do not need to touch that. Your responsibility is to implement the bridge between React Native and Android. You may browse the code in the Android source folder to see how the bridge operates.

The Bridge is located in CallModule.java

# Implement Call History

Implement the Call History on the second screen. You can check out the example screenshot in the screenshots folder. All the necessary code for this is also ready for use inside the Android code base. As with the first feature, check how the bridge works and what kind of data the bridge returns to you.

The Bridge is located in CallModule.java

You will find some ready-made components on the React Native side for displaying the Call History information.

Make sure that this particular screen also updates when the React Native application enters on foreground and when you switch between the two tabs inside the application.
