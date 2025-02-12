import { useParams } from "react-router-dom";
import BookDetails from "../../components/bookDetails/BookDetails";
("../../components/usersImpactedList/UsersImpactedList");

export default function BookDetailsPage() {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Erreur, saississez un id valide</div>;
  }

  return (
    <div>
      <BookDetails id={id} />
    </div>
  );
}
