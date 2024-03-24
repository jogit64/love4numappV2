import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Pour les icônes dans les boutons
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
      <Text style={styles.badgeTitle}>Crédits & Informations</Text>

      <Text style={styles.text}>Merci d'utiliser Love4Num !</Text>
      <Text style={styles.text}>
        Nous travaillons constamment pour améliorer votre expérience.
      </Text>

      {/* Boutons organisés par catégorie avec badges comme titres de section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Légal</Text>
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
      </View>
      <View style={styles.bannerAd}>
        <BannerAd
          unitId={adMobConfig.creditBannerId}
          size={BannerAdSize.LARGE_BANNER}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Laissez un avis</Text>
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
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Découvrez Plus</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openURL("https://love4num.com/")}
        >
          <MaterialIcons name="web" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Visiter le site love4num.com</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openURL("mailto:contact@johannr.fr")}
        >
          <MaterialIcons name="email" size={24} color="#FFF" />
          <Text style={styles.buttonText}>contact@johannr.fr</Text>
        </TouchableOpacity>
      </View>

      {/* <Text style={styles.footerText}>
        © 2024 johannr.fr. Tous droits réservés.
      </Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#0F052C",
    paddingTop: 60,
  },
  badgeTitle: {
    backgroundColor: "#673AB7",
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 15,
    marginHorizontal: 20,
    lineHeight: 25,
  },
  section: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor: "#ff48c4",
    backgroundColor: "#0f042c",
    padding: 12,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "85%", // Assure une largeur uniforme pour tous les boutons
  },
  buttonText: {
    //color: "#FFF",
    color: "#e0b0ff",
    fontSize: 16,
    marginLeft: 10,
  },
  bannerAd: {
    width: "100%", // Utilisez la largeur totale pour le placement de la publicité
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    color: "#CCC",
    textAlign: "center",
    marginTop: 25,
    paddingHorizontal: 20, // Ajoute un peu d'espace sur les côtés pour le texte de pied de page
    lineHeight: 25,
  },
});

export default CreditsScreen;
