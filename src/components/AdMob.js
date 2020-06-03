import React from "react";
import { AdMobBanner as ExpoAdMobBanner } from "expo-ads-admob";
import { AdMobileLocation, AdMobileLocationBottom } from "../styles";

const adUnitIDType = {
    prod: {
        banner: "ca-app-pub-7688282554627562/8397074314",
        interstitial: "ca-app-pub-7688282554627562/3368108917",
        rewarded: "ca-app-pub-7688282554627562/6864500791",
    },
    dev: {
        banner: "ca-app-pub-3940256099942544/6300978111",
        interstitial: "ca-app-pub-3940256099942544/1033173712",
        interstitialVideo: "ca-app-pub-3940256099942544/8691691433",
        rewarded: "ca-app-pub-3940256099942544/5224354917",
    },
};

export const adUnitID = adUnitIDType.dev;

export const AdMobBanner = () => (
    <AdMobileLocation>
        <ExpoAdMobBanner bannerSize="banner" adUnitID={adUnitID.banner} />
    </AdMobileLocation>
);

export const AdMobSmartBannerPortrait = () => (
    <AdMobileLocation>
        <ExpoAdMobBanner
            bannerSize="smartBannerPortrait"
            adUnitID={adUnitID.banner}
        />
    </AdMobileLocation>
);

export const AdMobSmartBannerPortraitBottom = () => (
    <AdMobileLocationBottom>
        <ExpoAdMobBanner
            bannerSize="smartBannerPortrait"
            adUnitID={adUnitID.banner}
        />
    </AdMobileLocationBottom>
);

export const AdMobMediumRectangle = () => (
    <AdMobileLocation>
        <ExpoAdMobBanner
            bannerSize="mediumRectangle"
            adUnitID={adUnitID.banner}
        />
    </AdMobileLocation>
);
