package com.assignment;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.provider.CallLog;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

public class CallModule extends ReactContextBaseJavaModule {

    private static final String MODULE_NAME = "CallModule";

    private static ReactApplicationContext reactContext;

    public CallModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void call() {
        final Activity activity = getCurrentActivity();
        if (activity == null) {
            return;
        }

        Intent intent = new Intent(Intent.ACTION_DIAL);
        activity.startActivity(intent);
    }

    @ReactMethod
    public void getCalls(Promise promise) {
        if (promise == null) {
            return;
        }

        final Activity activity = getCurrentActivity();
        if (activity == null) {
            promise.reject("1", "No Activity Found");
            return;
        }

        promise.resolve(queryCalls(activity));
    }

    private WritableArray queryCalls(Activity activity) {
        final Uri uri = CallLog.Calls.CONTENT_URI;
        final String[] projection = new String[] {
          CallLog.Calls._ID,
          CallLog.Calls.DURATION,
          CallLog.Calls.NUMBER,
          CallLog.Calls.TYPE
        };

        Cursor cursor = activity.getApplicationContext().getContentResolver().query(
                uri,
                projection,
                null,
                null,
                CallLog.Calls.DATE + " DESC"
        );

        WritableArray array = Arguments.createArray();
        while (cursor != null && cursor.moveToNext()) {
            final int externalId = cursor.getInt(cursor.getColumnIndex(CallLog.Calls._ID));
            final int duration = cursor.getInt(cursor.getColumnIndex(CallLog.Calls.DURATION));
            final String number = cursor.getString(cursor.getColumnIndex(CallLog.Calls.NUMBER));
            final int type = cursor.getInt(cursor.getColumnIndex(CallLog.Calls.TYPE));

            final boolean inbound = CallLog.Calls.INCOMING_TYPE == type || CallLog.Calls.MISSED_TYPE == type || 5 == type;
            final boolean answered = inbound && type == 5 ? false : duration > 0;

            WritableMap map = Arguments.createMap();
            map.putBoolean("answered", answered);
            map.putString("externalId", String.valueOf(externalId));
            map.putInt("duration", duration);
            map.putBoolean("inbound", inbound);
            map.putString("number", number);

            array.pushMap(map);
        }

        if (cursor != null && !cursor.isClosed()) {
            cursor.close();
        }

        return array;
    }
}
