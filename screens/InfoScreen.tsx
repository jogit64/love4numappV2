import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons

import { JouerScreenNavigationProp } from "../NavigationTypes";
//import { AdMobBanner } from "react-native-google-mobile-ads";
import Constants from "expo-constants";
import {
  BannerAd,
  InterstitialAd,
  AdEventType,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";

import { adMobConfig } from "../adConfig";

// Props du composant incluant le type de navigation
type Props = {
  navigation: JouerScreenNavigationProp;
};

// interface AdError {
//   code: number;
//   message: string;
//   // Ajoutez d'autres champs observés dans l'objet d'erreur, le cas échéant
// }

const { width, height } = Dimensions.get("window");

const InfoScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Image
          source={require("../assets/love4nul_log3.png")}
          style={styles.image}
          resizeMode="cover"
        />
        {/* Début de l'effet néon intégré */}
        <View style={styles.neonContainer}>
          <Text style={[styles.neonText, styles.shadow]}>
            {" "}
            Transformez vos mots en numéros chance!
          </Text>
          <Text style={styles.neonText}>
            {" "}
            Transformez vos mots en numéros chance!
          </Text>
        </View>
        {/* Fin de l'effet néon intégré */}
        <Text style={styles.para}>
          Avec notre algorithme unique basé sur le nombre d'or, convertissez
          l'amour, l'espoir, et la positivité en numéros porte-bonheur pour des
          jeux de loteries françaises.
        </Text>

        <View style={styles.ban1}>
          <BannerAd
            unitId={adMobConfig.bannerId}
            size={BannerAdSize.BANNER}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>

        <View style={styles.para2Bloc}>
          <Text style={styles.para2r}>Tirage classique</Text>
          <Text style={styles.para2b}>5 numéros (1 - 49)</Text>
          <Text style={styles.para2b}>1 numéros complémentaire (1 - 10)</Text>
          <Text style={styles.para2b}>Lundi - Mercredi - Samedi</Text>
        </View>
        <View style={styles.para2Bloc}>
          <Text style={styles.para2r}>Tirage européen</Text>
          <Text style={styles.para2b}>5 numéros (1 - 50)</Text>
          <Text style={styles.para2b}>2 numéros complémentaires (1 - 12)</Text>
          <Text style={styles.para2b}>Mardi - Vendredi</Text>
        </View>
        <View style={styles.para2Bloc}>
          <Text style={styles.para2r}>Tirage rêves</Text>
          <Text style={styles.para2b}>6 numéros (1 - 40)</Text>
          <Text style={styles.para2b}>1 numéros complémentaires (1 - 5)</Text>
          <Text style={styles.para2b}>Lundi - Jeudi</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Jouer")}
        >
          <Ionicons name="heart" size={20} color="#FFFFFF" />
          {/* Icon inside the button */}
          <Text style={styles.buttonText}>C'est parti !</Text>
        </TouchableOpacity>

        <View style={styles.ban1}>
          <BannerAd
            unitId={adMobConfig.bannerId}
            size={BannerAdSize.BANNER}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>

        <View style={styles.para2Bloc}>
          <Text style={styles.para2r}>Vibrations Positives</Text>
          <Text style={styles.para2b}>
            Convertissez l’énergie de mots empreints d’amour, d’espoir, et de
            positivité en numéros porte-bonheur.
          </Text>
        </View>
        <View style={styles.para2Bloc}>
          <Text style={styles.para2r}>Intention Puissante</Text>
          <Text style={styles.para2b}>
            Utilisez des déclarations d’amour, noms de proches, ou tout mot
            inspirant bonheur et gratitude.
          </Text>
        </View>
        <View style={styles.para2Bloc}>
          <Text style={styles.para2r}>Algorithme Unique</Text>
          <Text style={styles.para2b}>
            Notre système utilise vos intentions, combinées à la magie du nombre
            d’or, pour créer des numéros pour le Loto, l’Euromillions, et
            Eurodreams.
          </Text>
        </View>
        <View style={styles.para2Bloc}>
          <Text style={styles.para2r}>Le Nombre d’Or</Text>
          <Text style={styles.para2b}>
            Intégré dans notre algorithme, ce ratio mathématique mythique est
            réputé pour attirer la chance et l’harmonie, ajoutant une dimension
            supplémentaire de magie à vos numéros. Facile à Utiliser : Entrez
            simplement votre phrase et choisissez votre jeu. Notre algorithme
            fait le reste, en espérant transformer positivité et amour en
            fortune.
          </Text>
        </View>
        {/* <View style={styles.para3Bloc}> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Jouer")}
        >
          <Ionicons name="heart" size={20} color="#FFFFFF" />
          {/* Icon inside the button */}
          <Text style={styles.buttonText}>C'est parti !</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#0F052C",
    //marginBottom: 40,
  },
  content: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: height,
    paddingTop: 40,
  },
  image: {
    width: width * 0.7,
    height: height * 0.2,
    marginTop: 10,
  },

  ban1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  para: {
    fontSize: 16,
    fontFamily: "robotoregular",
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
    marginHorizontal: 20,
    lineHeight: 25,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    backgroundColor: "#FF48C4",
    padding: 10,
    borderRadius: 20,
    marginBottom: 35,
  },
  buttonText: {
    marginLeft: 10,
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
  },
  para2Bloc: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 25,
  },
  para2r: {
    fontSize: 16,
    fontFamily: "robotoregular",
    color: "#FF48C4",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 5,
    marginHorizontal: 20,
    lineHeight: 25,
  },
  para3Bloc: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 95,
  },
  lienBloc: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 95,
  },
  para2b: {
    fontSize: 16,
    fontFamily: "robotoregular",
    color: "#FFF",
    textAlign: "center",
    marginHorizontal: 20,
    lineHeight: 25,
  },
  para2bn: {
    fontSize: 14,
    fontFamily: "robotoregular",
    color: "#FFF",
    textAlign: "center",
    marginHorizontal: 20,
    lineHeight: 25,
  },

  neonContainer: {},
  neonText: {
    fontSize: 35,
    fontFamily: "MadimiOneRegular",
    color: "#fff",
    lineHeight: 50,
    textAlign: "center",
    marginVertical: 10,
  },
  shadow: {
    position: "absolute",
    textShadowColor: "#FF48C4",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
});

export default InfoScreen;
