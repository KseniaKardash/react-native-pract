package com.myapp;

import android.support.annotation.Nullable;
import android.app.Application;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.imagepicker.ImagePickerPackage;
import io.realm.react.RealmReactPackage;

import java.util.Arrays;
import java.util.List;

import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;

public class MainApplication extends NavigationApplication {

     @Override
     public boolean isDebug() {
         return BuildConfig.DEBUG;
     }

     protected List<ReactPackage> getPackages() {

         return Arrays.<ReactPackage>asList(
         new VectorIconsPackage(),
         new LinearGradientPackage(),
         new ImagePickerPackage(),
         new RealmReactPackage(),
         new RNFirebasePackage(),
         new RNFirebaseAuthPackage(),
         new RNGoogleSigninPackage()
         );
     }

     @Override
     public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();
     }
 }
