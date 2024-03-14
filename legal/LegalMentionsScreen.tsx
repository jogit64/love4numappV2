import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

const LegalMentionsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleOne}>Conditions Générales d'Utilisation</Text>
      <Text style={styles.text}>Dernière mise à jour : 12 mars 2024</Text>
      <Text style={styles.text}>
        Veuillez lire attentivement ces conditions générales d'utilisation avant
        d'utiliser notre Service.
      </Text>

      <Text style={styles.subtitle}>Interprétation et Définitions</Text>
      <Text style={styles.text}>
        Les mots dont la lettre initiale est en majuscule ont des significations
        définies sous les conditions suivantes. Les définitions suivantes auront
        la même signification qu'elles apparaissent au singulier ou au pluriel.
      </Text>

      <Text style={styles.text}>
        Aux fins de ces Conditions Générales d'Utilisation :
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong}>Application</Text> désigne le programme
        logiciel fourni par la Société téléchargé par Vous sur tout appareil
        électronique, nommé Love4Num-app.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong}>Magasin d'Applications</Text> désigne le
        service de distribution numérique opéré et développé par Apple Inc.
        (Apple App Store) ou Google Inc. (Google Play Store) dans lequel
        l'Application a été téléchargée.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong}>Affilié</Text> désigne une entité qui
        contrôle, est contrôlée par, ou est sous contrôle commun avec une
        partie, où "contrôle" signifie la propriété de 50 % ou plus des actions,
        des parts d'intérêt ou d'autres titres ayant droit de vote pour
        l'élection des administrateurs ou autre autorité de gestion.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong}>Pays</Text> se réfère à : France.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong}>Société</Text> (dénommée soit "la Société",
        "Nous", "Notre" ou "Nos" dans cet Accord) se réfère à Love4Num-app.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong}>Dispositif</Text> désigne tout dispositif
        pouvant accéder au Service tel qu'un ordinateur, un téléphone portable
        ou une tablette numérique.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong}>Service</Text> se réfère à l'Application.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong}>Conditions Générales d'Utilisation</Text>{" "}
        (également désignées "Conditions") désignent ces Conditions Générales
        d'Utilisation qui forment l'ensemble de l'accord entre Vous et la
        Société concernant l'utilisation du Service. Cet accord de Conditions
        Générales d'Utilisation a été créé avec l'aide du{" "}
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL(
              "https://www.privacypolicies.com/terms-conditions-generator/"
            )
          }
        >
          Générateur de Conditions Générales d'Utilisation.
        </Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong}>Service tiers de Médias Sociaux</Text>{" "}
        désigne tout service ou contenu (y compris les données, informations,
        produits ou services) fourni par un tiers qui peut être affiché, inclus
        ou mis à disposition par le Service.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.strong}>Vous</Text> désigne la personne accédant ou
        utilisant le Service, ou la société, ou autre entité juridique pour le
        compte de laquelle cette personne accède ou utilise le Service, selon le
        cas.
      </Text>

      <Text style={styles.subtitle}>Reconnaissance</Text>
      <Text style={styles.text}>
        Ce sont les Conditions Générales régissant l'utilisation de ce Service
        et l'accord qui opère entre Vous et la Société. Ces Conditions Générales
        définissent les droits et obligations de tous les utilisateurs
        concernant l'utilisation du Service.
      </Text>
      <Text style={styles.text}>
        Votre accès et utilisation du Service sont conditionnés à Votre
        acceptation et conformité avec ces Conditions Générales. Ces Conditions
        Générales s'appliquent à tous les visiteurs, utilisateurs et autres qui
        accèdent ou utilisent le Service.
      </Text>
      <Text style={styles.text}>
        En accédant ou utilisant le Service, Vous acceptez d'être lié par ces
        Conditions Générales. Si Vous n'êtes pas d'accord avec une partie de ces
        Conditions Générales, alors Vous ne pouvez pas accéder au Service.
      </Text>
      <Text style={styles.text}>
        Vous déclarez avoir plus de 18 ans. La Société ne permet pas à ceux de
        moins de 18 ans d'utiliser le Service.
      </Text>
      <Text style={styles.text}>
        Votre accès et utilisation du Service sont également conditionnés à
        Votre acceptation et conformité avec la Politique de Confidentialité de
        la Société. Notre Politique de Confidentialité décrit Nos politiques et
        procédures sur la collecte, l'utilisation et la divulgation de Vos
        informations personnelles lorsque Vous utilisez l'Application ou le Site
        Web et Vous informe sur Vos droits à la vie privée et comment la loi
        Vous protège. Veuillez lire attentivement Notre Politique de
        Confidentialité avant d'utiliser Notre Service.
      </Text>

      <Text style={styles.subtitle}>Liens vers d'Autres Sites Web</Text>
      <Text style={styles.text}>
        Notre Service peut contenir des liens vers des sites Web ou services
        tiers qui ne sont pas détenus ou contrôlés par la Société.
      </Text>
      <Text style={styles.text}>
        La Société n'a aucun contrôle sur le contenu, les politiques de
        confidentialité ou les pratiques des sites Web ou services tiers et
        n'assume aucune responsabilité à cet égard. Vous reconnaissez et
        acceptez en outre que la Société ne sera pas responsable ou redevable,
        directement ou indirectement, de tout dommage ou perte causé ou présumé
        être causé par ou en relation avec l'utilisation de ou la confiance
        accordée à tout contenu, biens ou services disponibles sur ou via de
        tels sites Web ou services.
      </Text>
      <Text style={styles.text}>
        Nous Vous conseillons fortement de lire les conditions générales et les
        politiques de confidentialité de tout site Web ou service tiers que Vous
        visitez.
      </Text>
      <Text style={styles.subtitle}>Résiliation</Text>
      <Text style={styles.text}>
        Nous pouvons résilier ou suspendre Votre accès immédiatement, sans
        préavis ni responsabilité, pour quelque raison que ce soit, y compris
        sans limitation si Vous violez ces Conditions Générales.
      </Text>
      <Text style={styles.text}>
        Lors de la résiliation, Votre droit d'utiliser le Service cessera
        immédiatement.
      </Text>

      <Text style={styles.subtitle}>Limitation de Responsabilité</Text>
      <Text style={styles.text}>
        Nonobstant tous dommages que Vous pourriez subir, la responsabilité
        totale de la Société et de ses fournisseurs en vertu de toute
        disposition de ces Termes et Votre recours exclusif pour tout ce qui
        précède seront limités au montant effectivement payé par Vous par le
        biais du Service ou 100 USD si Vous n'avez rien acheté par le biais du
        Service.
      </Text>
      <Text style={styles.text}>
        Dans la mesure maximale permise par la loi applicable, en aucun cas la
        Société ou ses fournisseurs ne seront responsables de tout dommage
        spécial, incidentel, indirect ou consécutif de quelque nature que ce
        soit (y compris, mais sans s'y limiter, les dommages pour perte de
        profits, perte de données ou d'autres informations, pour interruption
        d'activité, pour préjudice corporel, perte de vie privée découlant de ou
        de toute manière liée à l'utilisation ou l'impossibilité d'utiliser le
        Service, logiciels tiers et/ou matériel tiers utilisé avec le Service,
        ou autrement en lien avec toute disposition de ces Termes), même si la
        Société ou tout fournisseur a été informé de la possibilité de tels
        dommages et même si le remède échoue à son objectif essentiel.
      </Text>
      <Text style={styles.text}>
        Certains états ne permettent pas l'exclusion des garanties implicites ou
        la limitation de responsabilité pour les dommages incidentels ou
        consécutifs, ce qui signifie que certaines des limitations ci-dessus
        peuvent ne pas s'appliquer. Dans ces états, la responsabilité de chaque
        partie sera limitée dans la plus grande mesure permise par la loi.
      </Text>
      <Text style={styles.subtitle}>
        Clause de non-responsabilité « TEL QUEL » et « DISPONIBLE »
      </Text>
      <Text style={styles.text}>
        Le Service est fourni à Vous « TEL QUEL » et « TEL QUE DISPONIBLE » et
        avec tous les défauts et erreurs sans garantie d'aucune sorte. Dans la
        mesure maximale permise par la loi applicable, la Société, en son nom
        propre et au nom de ses Affiliés et de ses concédants de licence et
        prestataires de services respectifs, exclut expressément toutes
        garanties, qu'elles soient explicites, implicites, légales ou autres,
        concernant le Service, y compris toutes les garanties implicites de
        commercialité, d'adéquation à un usage particulier, de titre et de
        non-violation, et les garanties qui peuvent découler du cours des
        transactions, du cours de l'exécution, de l'usage ou des pratiques
        commerciales. Sans limiter ce qui précède, la Société ne fournit aucune
        garantie ni engagement, et ne fait aucune déclaration de quelque nature
        que ce soit, que le Service répondra à Vos exigences, atteindra les
        résultats prévus, sera compatible ou fonctionnera avec tout autre
        logiciel, applications, systèmes ou services, fonctionnera sans
        interruption, répondra à des normes de performance ou de fiabilité ou
        sera exempt d'erreur ou que les erreurs ou défauts peuvent ou seront
        corrigés.
      </Text>
      <Text style={styles.text}>
        Sans limiter ce qui précède, ni la Société ni aucun fournisseur de la
        société ne fait aucune déclaration ou garantie de quelque nature que ce
        soit, explicite ou implicite : (i) quant au fonctionnement ou à la
        disponibilité du Service, ou aux informations, contenu et matériaux ou
        produits inclus sur celui-ci ; (ii) que le Service sera ininterrompu ou
        exempt d'erreurs ; (iii) quant à l'exactitude, la fiabilité ou
        l'actualité de toute information ou contenu fourni par le Service ; ou
        (iv) que le Service, ses serveurs, le contenu ou les e-mails envoyés de
        ou pour le compte de la Société sont exempts de virus, scripts, chevaux
        de Troie, vers, logiciels malveillants, bombes à retardement ou autres
        composants nuisibles.
      </Text>
      <Text style={styles.text}>
        Certains juridictions ne permettent pas l'exclusion de certains types de
        garanties ou les limitations sur les droits statutaires applicables d'un
        consommateur, donc tout ou partie des exclusions et limitations
        ci-dessus peuvent ne pas s'appliquer à Vous. Mais dans un tel cas, les
        exclusions et limitations énoncées dans cette section seront appliquées
        dans la plus grande mesure réalisable sous la loi applicable.
      </Text>
      <Text style={styles.subtitle}>Loi Applicable</Text>
      <Text style={styles.text}>
        Les lois du Pays, à l'exclusion de ses règles de conflits de lois,
        régiront ces Termes et Votre utilisation du Service. Votre utilisation
        de l'Application peut également être soumise à d'autres lois locales,
        étatiques, nationales ou internationales.
      </Text>

      <Text style={styles.subtitle}>Résolution des Litiges</Text>
      <Text style={styles.text}>
        Si Vous avez une préoccupation ou un litige concernant le Service, Vous
        acceptez de tenter d'abord de résoudre le litige de manière informelle
        en contactant la Société.
      </Text>

      <Text style={styles.subtitle}>
        Pour les Utilisateurs de l'Union Européenne (UE)
      </Text>
      <Text style={styles.text}>
        Si Vous êtes un consommateur de l'Union Européenne, vous bénéficierez de
        toute disposition obligatoire de la loi du pays dans lequel Vous
        résidez.
      </Text>

      <Text style={styles.subtitle}>Conformité Légale aux États-Unis</Text>
      <Text style={styles.text}>
        Vous déclarez et garantissez que (i) Vous n'êtes pas situé dans un pays
        qui fait l'objet d'un embargo du gouvernement des États-Unis, ou qui a
        été désigné par le gouvernement des États-Unis comme un pays « soutenant
        le terrorisme », et (ii) Vous n'êtes pas inscrit sur une liste du
        gouvernement des États-Unis de parties interdites ou restreintes.
      </Text>

      <Text style={styles.subtitle}>Divisibilité et Renonciation</Text>
      <Text style={styles.title}>Divisibilité</Text>
      <Text style={styles.text}>
        Si une disposition de ces Termes est jugée inapplicable ou invalide,
        cette disposition sera modifiée et interprétée pour accomplir les
        objectifs de cette disposition dans la plus grande mesure possible en
        vertu de la loi applicable et les dispositions restantes continueront à
        être pleinement en vigueur et effet.
      </Text>
      <Text style={styles.title}>Renonciation</Text>
      <Text style={styles.text}>
        Sauf comme stipulé ici, le fait de ne pas exercer un droit ou d'exiger
        l'exécution d'une obligation sous ces Termes ne saurait affecter la
        capacité d'une partie à exercer ce droit ou exiger cette performance à
        tout moment par la suite, ni la renonciation à une violation constituer
        une renonciation à toute violation subséquente.
      </Text>

      <Text style={styles.subtitle}>Interprétation des Traductions</Text>
      <Text style={styles.text}>
        Ces Conditions Générales ont pu être traduites si Nous les avons mises à
        votre disposition sur notre Service. Vous convenez que le texte anglais
        original prévaudra en cas de litige.
      </Text>

      <Text style={styles.subtitle}>
        Modifications de Ces Conditions Générales
      </Text>
      <Text style={styles.text}>
        Nous nous réservons le droit, à Notre seule discrétion, de modifier ou
        de remplacer ces Termes à tout moment. Si une révision est matérielle,
        Nous ferons des efforts raisonnables pour fournir au moins 30 jours
        d'avis avant que tout nouveau terme prenne effet. Ce qui constitue un
        changement matériel sera déterminé à Notre seule discrétion.
      </Text>
      <Text style={styles.text}>
        En continuant à accéder ou utiliser Notre Service après que ces
        révisions deviennent effectives, Vous acceptez d'être lié par les termes
        révisés. Si Vous n'acceptez pas les nouveaux termes, en tout ou en
        partie, veuillez cesser d'utiliser le site Web et le Service.
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>Nous Contacter</Text>
        <Text style={styles.text}>
          Si vous avez des questions sur ces Conditions Générales, Vous pouvez
          nous contacter :
        </Text>
        <Text style={styles.text}>• Par email : johann.renault@gmail.com</Text>
      </View>
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

export default LegalMentionsScreen;
