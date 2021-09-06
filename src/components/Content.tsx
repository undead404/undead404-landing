import family from "../elements/family";
import me from "../elements/me";
import necrophag from "../elements/necrophag";
import pets from "../elements/pets";
import thanks from "../elements/thanks";
import ymh from "../elements/ymh";

export default function MyContent(): JSX.Element {
  return (
    <>
      {me}
      {ymh}
      {necrophag}
      {family}
      {pets}
      {thanks}
    </>
  );
}
