// PrivacyPolicyScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const PrivacyPolicyScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleOne}>Politique de Confidentialité</Text>
      <Text style={styles.text}>
        Dernière mise à jour : 12 mars 2024{"\n\n"}
        Cette Politique de Confidentialité décrit nos politiques et procédures
        sur la collecte, l'utilisation et la divulgation de vos informations
        lorsque vous utilisez le Service et vous informe sur vos droits de
        confidentialité et comment la loi vous protège.{"\n\n"}
        Nous utilisons vos données personnelles pour fournir et améliorer le
        Service. En utilisant le Service, vous acceptez la collecte et
        l'utilisation des informations conformément à cette Politique de
        Confidentialité. Cette Politique de Confidentialité a été créée avec
        l'aide du Générateur de Politique de Confidentialité.{"\n\n"}
      </Text>

      <Text style={styles.title}>Interprétation et Définitions</Text>
      <Text style={styles.text}>
        <Text style={styles.subtitle}>Interprétation</Text>
        Les mots dont la première lettre est en majuscule ont des significations
        définies sous les conditions suivantes. Les définitions suivantes auront
        la même signification qu'elles apparaissent au singulier ou au pluriel.
        {"\n\n"}
        <Text style={styles.subtitle}>Définitions</Text>
        Aux fins de cette Politique de Confidentialité :{"\n\n"}
        <Text style={styles.strong}>Compte</Text> désigne un compte unique créé
        pour Vous afin d'accéder à notre Service ou à des parties de notre
        Service.{"\n\n"}
        <Text style={styles.strong}>Affilié</Text> désigne une entité qui
        contrôle, est contrôlée par ou est sous contrôle commun avec une partie,
        où "contrôle" signifie la propriété de 50 % ou plus des actions, des
        intérêts en capital ou d'autres titres ayant droit de vote pour
        l'élection des administrateurs ou autre autorité de gestion.
        {"\n\n"}
        <Text style={styles.strong}>Application</Text> se réfère à Love4Num-App,
        le programme logiciel fourni par l'Entreprise.{"\n\n"}
        <Text style={styles.strong}>Entreprise</Text> (référencé soit par
        "l'Entreprise", "Nous", "Notre" ou "Nos" dans cet Accord) se réfère à
        Love4Num-App.{"\n\n"}
        <Text style={styles.strong}>Pays</Text> se réfère à : France.{"\n\n"}
        <Text style={styles.strong}>Dispositif</Text> désigne tout dispositif
        pouvant accéder au Service tel qu'un ordinateur, un téléphone portable
        ou une tablette numérique.{"\n\n"}
        <Text style={styles.strong}>Données Personnelles</Text> est toute
        information qui se rapporte à une personne identifiée ou identifiable.
        {"\n\n"}
        <Text style={styles.strong}>Service</Text> se réfère à l'Application.
        {"\n\n"}
        <Text style={styles.strong}>Prestataire de Service</Text> désigne toute
        personne physique ou morale qui traite les données pour le compte de
        l'Entreprise. Cela fait référence à des entreprises tierces ou à des
        individus employés par l'Entreprise pour faciliter le Service, fournir
        le Service au nom de l'Entreprise, effectuer des services liés au
        Service ou aider l'Entreprise à analyser comment le Service est utilisé.
        {"\n\n"}
        <Text style={styles.strong}>Données d'Utilisation</Text> fait référence
        aux données collectées automatiquement, générées par l'utilisation du
        Service ou provenant de l'infrastructure du Service elle-même (par
        exemple, la durée d'une visite de page).{"\n\n"}
        <Text style={styles.strong}>Vous</Text> désigne la personne accédant ou
        utilisant le Service, ou l'entreprise, ou autre entité juridique au nom
        de laquelle cette personne accède ou utilise le Service, selon le cas.
        {"\n\n"}
      </Text>

      <Text style={styles.title}>
        Collecte et Utilisation de Vos Données Personnelles
      </Text>
      <Text style={styles.text}>
        <Text style={styles.subtitle}>Types de Données Collectées</Text>
        <Text style={styles.subsubtitle}>Données Personnelles</Text>
        Lors de l'utilisation de Notre Service, Nous pouvons vous demander de
        nous fournir certaines informations personnellement identifiables qui
        peuvent être utilisées pour vous contacter ou vous identifier. Les
        informations personnellement identifiables peuvent inclure, mais sans
        s'y limiter :{"\n\n"}
        <Text style={styles.bullet}>• Données d'Utilisation</Text>
        {"\n\n"}
        <Text style={styles.subsubtitle}>Données d'Utilisation</Text>
        Les Données d'Utilisation sont collectées automatiquement lors de
        l'utilisation du Service.{"\n\n"}
        Les Données d'Utilisation peuvent inclure des informations telles que
        l'adresse de Protocole Internet de Votre appareil (par exemple,
        l'adresse IP), le type de navigateur, la version du navigateur, les
        pages de notre Service que Vous visitez, l'heure et la date de Votre
        visite, le temps passé sur ces pages, les identifiants uniques de
        dispositif et d'autres données diagnostiques.{"\n\n"}
        Lorsque Vous accédez au Service par ou via un dispositif mobile, Nous
        pouvons collecter certaines informations automatiquement, y compris,
        mais sans s'y limiter, le type de dispositif mobile que Vous utilisez,
        l'ID unique de Votre dispositif mobile, l'adresse IP de Votre dispositif
        mobile, Votre système d'exploitation mobile, le type de navigateur
        Internet mobile que Vous utilisez, les identifiants uniques de
        dispositif et d'autres données diagnostiques.{"\n\n"}
        Nous pouvons également collecter des informations que Votre navigateur
        envoie chaque fois que Vous visitez notre Service ou lorsque Vous
        accédez au Service par ou via un dispositif mobile.{"\n\n"}
        <Text style={styles.subtitle}>
          Utilisation de Vos Données Personnelles
        </Text>
        L'Entreprise peut utiliser les Données Personnelles aux fins suivantes :
        {"\n\n"}
        <Text style={styles.bullet}>
          • Pour fournir et maintenir notre Service, y compris pour surveiller
          l'utilisation de notre Service.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Pour gérer Votre Compte : gérer Votre inscription en tant
          qu'utilisateur du Service. Les Données Personnelles que Vous
          fournissez peuvent Vous donner accès à différentes fonctionnalités du
          Service qui sont disponibles pour Vous en tant qu'utilisateur
          enregistré.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Pour l'exécution d'un contrat : le développement, la conformité et
          l'entreprise du contrat d'achat pour les produits, articles ou
          services que Vous avez achetés ou de tout autre contrat avec Nous par
          le biais du Service.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Pour Vous contacter : Pour Vous contacter par e-mail, appels
          téléphoniques, SMS, ou autres formes équivalentes de communication
          électronique, telles que les notifications push d'une application
          mobile concernant les mises à jour ou les communications informatives
          liées aux fonctionnalités, produits ou services contractés, y compris
          les mises à jour de sécurité, lorsque cela est nécessaire ou
          raisonnable pour leur mise en œuvre.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Pour Vous fournir des nouvelles, des offres spéciales et des
          informations générales sur d'autres biens, services et événements que
          nous offrons et qui sont similaires à ceux que vous avez déjà achetés
          ou renseignés, sauf si Vous avez choisi de ne pas recevoir de telles
          informations.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Pour gérer Vos demandes : Pour assister et gérer Vos demandes à
          Nous.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Pour les transferts d'entreprise : Nous pouvons utiliser Vos
          informations pour évaluer ou réaliser une fusion, cession,
          restructuration, réorganisation, dissolution ou autre vente ou
          transfert de tout ou partie de Nos actifs, que ce soit dans le cadre
          d'une continuité d'exploitation ou dans le cadre d'une faillite,
          liquidation ou procédure similaire, dans laquelle les Données
          Personnelles détenues par Nous sur nos utilisateurs de service font
          partie des actifs transférés.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Pour d'autres finalités : Nous pouvons utiliser Vos informations
          pour d'autres finalités, telles que l'analyse de données,
          l'identification des tendances d'utilisation, la détermination de
          l'efficacité de nos campagnes promotionnelles et pour évaluer et
          améliorer notre Service, produits, services, marketing et votre
          expérience.
        </Text>
        {"\n\n"}
      </Text>
      <Text style={styles.text}>
        Nous pouvons partager vos informations personnelles dans les situations
        suivantes :{"\n\n"}
        <Text style={styles.bullet}>
          •{" "}
          <Text style={styles.strong}>Avec les Prestataires de Services :</Text>{" "}
          Nous pouvons partager Vos informations personnelles avec les
          Prestataires de Services pour surveiller et analyser l'utilisation de
          notre Service, pour vous contacter.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          •{" "}
          <Text style={styles.strong}>Pour les transferts d'entreprise :</Text>{" "}
          Nous pouvons partager ou transférer Vos informations personnelles en
          lien avec, ou pendant les négociations de, toute fusion, vente
          d'actifs de l'Entreprise, financement, ou acquisition de tout ou
          partie de Notre entreprise par une autre société.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • <Text style={styles.strong}>Avec les Affiliés :</Text> Nous pouvons
          partager Vos informations avec Nos affiliés, dans ce cas, nous
          exigerons que ces affiliés respectent cette Politique de
          Confidentialité. Les affiliés incluent Notre société mère et toutes
          autres filiales, partenaires de joint venture ou autres sociétés que
          Nous contrôlons ou qui sont sous contrôle commun avec Nous.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          •{" "}
          <Text style={styles.strong}>Avec les partenaires commerciaux :</Text>{" "}
          Nous pouvons partager Vos informations avec Nos partenaires
          commerciaux pour vous proposer certains produits, services ou
          promotions.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • <Text style={styles.strong}>Avec d'autres utilisateurs :</Text>{" "}
          lorsque Vous partagez des informations personnelles ou interagissez de
          toute autre manière dans les zones publiques avec d'autres
          utilisateurs, ces informations peuvent être vues par tous les
          utilisateurs et peuvent être distribuées publiquement à l'extérieur.
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • <Text style={styles.strong}>Avec Votre consentement :</Text> Nous
          pouvons divulguer Vos informations personnelles à toute autre fin avec
          Votre consentement.
        </Text>
      </Text>

      <Text style={styles.subtitle}>
        Conservation de Vos Données Personnelles
      </Text>
      <Text style={styles.text}>
        L'Entreprise conservera Vos Données Personnelles uniquement le temps
        nécessaire aux fins établies dans cette Politique de Confidentialité.
        Nous conserverons et utiliserons Vos Données Personnelles dans la mesure
        nécessaire pour nous conformer à nos obligations légales (par exemple,
        si nous sommes tenus de conserver vos données pour respecter les lois
        applicables), résoudre les litiges et faire appliquer nos accords et
        politiques légaux.{"\n\n"}
        L'Entreprise conservera également les Données d'Utilisation à des fins
        d'analyse interne. Les Données d'Utilisation sont généralement
        conservées pour une période plus courte, sauf lorsque ces données sont
        utilisées pour renforcer la sécurité ou pour améliorer la fonctionnalité
        de Notre Service, ou nous sommes légalement obligés de conserver ces
        données pour des périodes de temps plus longues.
      </Text>

      <Text style={styles.subtitle}>Transfert de Vos Données Personnelles</Text>
      <Text style={styles.text}>
        Vos informations, y compris les Données Personnelles, sont traitées dans
        les bureaux d'exploitation de l'Entreprise et dans tout autre lieu où se
        trouvent les parties impliquées dans le traitement. Cela signifie que
        ces informations peuvent être transférées à — et maintenues sur — des
        ordinateurs situés en dehors de votre état, province, pays ou autre
        juridiction gouvernementale où les lois sur la protection des données
        peuvent différer de celles de votre juridiction.{"\n\n"}
        Votre consentement à cette Politique de Confidentialité suivi de la
        soumission de ces informations représente votre accord à ce transfert.
        {"\n\n"}
        L'Entreprise prendra toutes les mesures raisonnablement nécessaires pour
        s'assurer que vos données sont traitées en toute sécurité et
        conformément à cette Politique de Confidentialité et aucun transfert de
        Vos Données Personnelles n'aura lieu vers une organisation ou un pays à
        moins que des contrôles adéquats ne soient en place y compris la
        sécurité de vos données et autres informations personnelles.
      </Text>

      <Text style={styles.subtitle}>
        Suppression de Vos Données Personnelles
      </Text>
      <Text style={styles.text}>
        Vous avez le droit de supprimer ou de demander que nous aidions à
        supprimer les Données Personnelles que nous avons collectées à votre
        sujet.{"\n\n"}
        Notre Service peut vous donner la capacité de supprimer certaines
        informations vous concernant depuis le Service.{"\n\n"}
        Vous pouvez mettre à jour, modifier, ou supprimer vos informations à
        tout moment en vous connectant à Votre Compte, si vous en avez un, et en
        visitant la section des paramètres de compte qui vous permet de gérer
        vos informations personnelles. Vous pouvez également nous contacter pour
        demander l'accès à, la correction, ou la suppression de toute
        information personnelle que vous nous avez fournie.{"\n\n"}
        Veuillez noter, cependant, que nous pourrions avoir besoin de conserver
        certaines informations lorsque nous avons une obligation légale ou une
        base légale de le faire.
      </Text>

      <Text style={styles.subtitle}>
        Divulgation de Vos Données Personnelles
      </Text>
      <Text style={styles.text}>
        <Text style={styles.subsubtitle}>Transactions Commerciales</Text>
        Si l'Entreprise est impliquée dans une fusion, acquisition ou vente
        d'actifs, Vos Données Personnelles peuvent être transférées. Nous vous
        fournirons un préavis avant que Vos Données Personnelles soient
        transférées et deviennent sujettes à une Politique de Confidentialité
        différente.{"\n\n"}
        <Text style={styles.subsubtitle}>Application de la Loi</Text>
        Sous certaines circonstances, l'Entreprise peut être tenue de divulguer
        Vos Données Personnelles si nécessaire pour ce faire par la loi ou en
        réponse à des demandes valides par des autorités publiques (par exemple,
        un tribunal ou une agence gouvernementale).{"\n\n"}
        <Text style={styles.subsubtitle}>Autres Exigences Légales</Text>
        L'Entreprise peut divulguer Vos Données Personnelles dans la conviction
        de bonne foi que cette action est nécessaire pour :{"\n\n"}
        <Text style={styles.bullet}>
          • Se conformer à une obligation légale
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Protéger et défendre les droits ou la propriété de l'Entreprise
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Prévenir ou enquêter sur d'éventuels actes répréhensibles en lien
          avec le Service
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Protéger la sécurité personnelle des utilisateurs du Service ou du
          public
        </Text>
        {"\n\n"}
        <Text style={styles.bullet}>
          • Se protéger contre la responsabilité juridique
        </Text>
      </Text>
      <Text style={styles.subtitle}>Sécurité de Vos Données Personnelles</Text>
      <Text style={styles.text}>
        La sécurité de Vos Données Personnelles est importante pour Nous, mais
        rappelez-vous qu'aucune méthode de transmission sur Internet ou méthode
        de stockage électronique n'est sécurisée à 100%. Tandis que Nous nous
        efforçons d'utiliser des moyens commercialement acceptables pour
        protéger Vos Données Personnelles, Nous ne pouvons pas garantir leur
        sécurité absolue.
      </Text>

      <Text style={styles.title}>Confidentialité des Enfants</Text>
      <Text style={styles.text}>
        Notre Service ne s'adresse pas à quiconque âgé de moins de 13 ans. Nous
        ne collectons pas sciemment des informations personnellement
        identifiables de personnes de moins de 13 ans. Si Vous êtes un parent ou
        un tuteur et que Vous êtes conscient que Votre enfant nous a fourni des
        Données Personnelles, veuillez Nous contacter. Si Nous prenons
        conscience que Nous avons collecté des Données Personnelles de personnes
        de moins de 13 ans sans vérification du consentement parental, Nous
        prenons des mesures pour supprimer ces informations de Nos serveurs.
      </Text>
      <Text style={styles.text}>
        Si Nous devons nous appuyer sur le consentement comme base légale pour
        traiter Votre information et que Votre pays exige le consentement d'un
        parent, Nous pourrions nécessiter le consentement de Votre parent avant
        de collecter et utiliser ces informations.
      </Text>

      <Text style={styles.title}>Liens vers d'Autres Sites Web</Text>
      <Text style={styles.text}>
        Notre Service peut contenir des liens vers d'autres sites Web qui ne
        sont pas exploités par Nous. Si Vous cliquez sur un lien tiers, Vous
        serez dirigé vers le site de ce tiers. Nous Vous conseillons fortement
        de lire la Politique de Confidentialité de chaque site que Vous visitez.
      </Text>
      <Text style={styles.text}>
        Nous n'avons aucun contrôle sur, et n'assumons aucune responsabilité
        quant au contenu, aux politiques de confidentialité ou aux pratiques des
        sites ou services tiers.
      </Text>

      <Text style={styles.title}>
        Modifications de cette Politique de Confidentialité
      </Text>
      <Text style={styles.text}>
        Nous pouvons mettre à jour Notre Politique de Confidentialité de temps à
        autre. Nous Vous notifierons de tout changement en publiant la nouvelle
        Politique de Confidentialité sur cette page.
      </Text>
      <Text style={styles.text}>
        Nous Vous informerons par e-mail et/ou un avis bien visible sur Notre
        Service, avant que le changement devienne effectif et mettrons à jour la
        date de "Dernière mise à jour" en haut de cette Politique de
        Confidentialité.
      </Text>
      <Text style={styles.text}>
        Vous êtes conseillé de revoir cette Politique de Confidentialité
        périodiquement pour tout changement. Les modifications apportées à cette
        Politique de Confidentialité sont effectives lorsqu'elles sont publiées
        sur cette page.
      </Text>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Nous Contacter</Text>
        <Text style={styles.text}>
          Si Vous avez des questions sur cette Politique de Confidentialité,
          Vous pouvez nous contacter :
        </Text>
        <Text style={styles.text}>• Par e-mail : johann.renault@gmail.com</Text>
        <Text style={styles.text}>
          • En visitant cette page sur notre site Web :{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://love4num.com/politique-de-confidentialite-app/"
              )
            }
          >
            https://love4num.com/politique-de-confidentialite-app/
          </Text>
        </Text>
      </View>

      {/* <Text style={styles.lastText}></Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 20,
    backgroundColor: "#0F052C",
    // paddingBottom: 220,
    paddingTop: 50,
  },

  titleOne: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFF",
    marginBottom: 20,
    marginTop: 10,
    lineHeight: 35,
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 20,
    marginTop: 30,
    lineHeight: 35,
  },
  text: {
    fontSize: 12,
    color: "#FFF",
    lineHeight: 24,
  },
  textContainer: {
    marginBottom: 90,
  },

  subtitle: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 10,
  },

  subsubtitle: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 5,
  },
  bullet: {
    fontSize: 12,
    color: "#FFF",
    marginLeft: 10,
  },

  strong: {
    fontWeight: "bold",
  },
  link: {
    color: "#1E90FF",
  },
});

export default PrivacyPolicyScreen;
