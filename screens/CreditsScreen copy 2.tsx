import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";

// Ajoutez les importations nécessaires pour les icônes si vous décidez d'en utiliser
import { MaterialIcons } from "@expo/vector-icons"; // Exemple d'importation d'icônes

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../NavigationTypes";

import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import { adMobConfig } from "../adConfig";

type CreditsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Crédits"
>;

type Props = {
  navigation: CreditsScreenNavigationProp;
};

const CreditsScreen: React.FC<Props> = ({ navigation }) => {
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

      {/* Exemple de bouton stylisé avec un icône */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LegalMentions")}
      >
        <MaterialIcons name="gavel" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Mentions Légales</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PrivacyPolicy")}
      >
        <MaterialIcons name="privacy-tip" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Politique de confidentialité</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => openURL("mailto:contact@johannr.fr")}
      >
        <MaterialIcons name="email" size={24} color="#FFF" />
        <Text style={styles.buttonText}>contact@johannr.fr</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Vous aimez notre application ? Laissez-nous un avis :
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          openURL(
            "https://play.google.com/store/apps/details?id=com.souda.love4num"
          )
        }
      >
        <MaterialIcons name="rate-review" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Évaluer sur Google Play</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Retrouvez Love4Num sur le web :</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => openURL("https://love4num.com/")}
      >
        <MaterialIcons name="web" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Visiter le site</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        © 2024 johannr.fr. Tous droits réservés.
      </Text>
    </ScrollView>
  );
};

// Utilisez les styles définis précédemment et ajoutez des styles pour le button et buttonText
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
    backgroundColor: "#ff48c4", // Fond rose pour correspondre à l'onglet de navigation
    color: "#FFFFFF", // Texte en blanc pour contraste
    textAlign: "center",
    paddingHorizontal: 20, // Padding horizontal pour un aspect badge
    paddingVertical: 10, // Padding vertical pour un aspect badge
    borderRadius: 20, // Bords arrondis pour l'aspect badge
    overflow: "hidden", // S'assure que le fond ne dépasse pas les bords arrondis
    marginBottom: 15,
    marginTop: 5,
    shadowColor: "#000", // Ombre pour un effet légèrement en relief
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Ombre pour Android
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
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff48c4",
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CreditsScreen;
