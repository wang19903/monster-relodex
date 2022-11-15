import "./card-list.styles.css";
import Card from "../card/card.component";
import { Monster } from "../../App";

type CardlistProps = {
  monsters: Monster[];
};

const Cardlist = ({ monsters }: CardlistProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default Cardlist;
