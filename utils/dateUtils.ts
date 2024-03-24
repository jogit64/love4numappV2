export const calculateExactDrawsSinceLastOut = (
  dateString: string,
  gameType: "loto" | "euromillions" | "eurodreams"
): number => {
  // Vérifier que dateString est défini et non vide
  if (!dateString) {
    console.error(
      "calculateExactDrawsSinceLastOut: dateString is undefined or empty."
    );
    return 0;
  }

  // Convertir la date du format "jj/mm/aa" au format "aaaa-mm-jj"
  const parts = dateString.split("/");
  const convertedDateString = `20${parts[2]}-${parts[1]}-${parts[0]}`;
  const lastOutDate = new Date(convertedDateString);
  const today = new Date();
  let draws = 0;

  // Définir les jours de tirage en fonction du type de jeu
  let drawDays: number[] = [];
  switch (gameType) {
    case "loto":
      drawDays = [1, 3, 6]; // Lundi = 1, Mercredi = 3, Samedi = 6
      break;
    case "euromillions":
      drawDays = [2, 5]; // Mardi = 2, Vendredi = 5
      break;
    case "eurodreams":
      drawDays = [1, 4]; // Lundi = 1, Jeudi = 4
      break;
    default:
      console.error(
        "calculateExactDrawsSinceLastOut: Invalid gameType provided."
      );
      return 0;
  }

  for (
    let date = new Date(lastOutDate);
    date <= today;
    date.setDate(date.getDate() + 1)
  ) {
    if (drawDays.includes(date.getDay())) {
      draws++;
    }
  }

  return draws;
};
