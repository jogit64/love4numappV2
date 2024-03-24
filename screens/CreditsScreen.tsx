import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../NavigationTypes"; // Ajustez le chemin selon l'emplacement de votre fichier

import {
  BannerAd,
  InterstitialAd,
  AdEventType,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";
import { adMobConfig } from "../adConfig";

type CreditsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Crédits"
>; // Assurez-vous que 'Credits' est bien défini dans RootStackParamList

type Props = {
  navigation: CreditsScreenNavigationProp;
};

const CreditsScreen: React.FC<Props> = ({ navigation }) => {
  // ...
  // Fonction pour ouvrir des liens
  const openURL = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crédits & Informations</Text>
      <Text style={styles.text}>
        Merci d'utiliser Love4Num ! Nous travaillons constamment pour améliorer
        votre expérience.
      </Text>
      {/* Remplacez openURL par navigation.navigate pour les écrans internes */}
      <TouchableOpacity onPress={() => navigation.navigate("LegalMentions")}>
        <Text style={styles.lien}>Mentions Légales</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}>
        <Text style={styles.lien}>Politique de confidentialité</Text>
      </TouchableOpacity>

      <View style={styles.ban1}>
        <BannerAd
          unitId={adMobConfig.creditBannerId}
          size={BannerAdSize.LARGE_BANNER}
          onAdFailedToLoad={(error) => console.error(error)}
        />
      </View>

      <Text style={styles.text}>
        Pour toute question ou retour, n'hésitez pas à nous contacter :
      </Text>
      <TouchableOpacity onPress={() => openURL("mailto:contact@johannr.fr")}>
        <Text style={styles.lien}>contact@johannr.fr</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Vous aimez notre application ? Laissez-nous un avis :
      </Text>
      <TouchableOpacity
        onPress={() =>
          openURL(
            "https://play.google.com/store/apps/details?id=com.souda.love4num"
          )
        }
      >
        <Text style={styles.lien}>Évaluer sur Google Play</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Retrouvez Love4Num sur le web</Text>
      <TouchableOpacity onPress={() => openURL("https://love4num.com/")}>
        <Text style={styles.lien}>Visiter le site</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        © 2024 johannr.fr. Tous droits réservés.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F052C",
    paddingVertical: 50,
  },
  title: {
    fontSize: 22,
    fontFamily: "robotoregular",
    color: "#FFF",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: "robotoregular",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 15,
    marginHorizontal: 20,
    lineHeight: 25,
  },
  lien: {
    fontSize: 16,
    fontFamily: "robotoregular",
    color: "#E91E63",
    textAlign: "center",
    textDecorationLine: "underline",
    marginBottom: 15,
    marginTop: 5,
    marginHorizontal: 20,
    lineHeight: 25,
  },
  footerText: {
    fontSize: 14,
    fontFamily: "robotoregular",
    color: "#CCC",
    textAlign: "center",
    marginTop: 25,
    marginHorizontal: 20,
    lineHeight: 25,
  },

  ban1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 30,
  },
});

export default CreditsScreen;
