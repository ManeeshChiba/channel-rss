import Image from "next/image";

interface ListItemProps {}

const ListItem = (props: any) => {
  return (
    <button className="list-item">
      <span className="image-container">
        <Image
          src="/dfb.png"
          alt="Daring fireball logo"
          width={32}
          height={32}
          priority
        />
      </span>
      <span className="text-container">Daring Fireball</span>
    </button>
  );
};

const List = () => {
  return (
    <nav>
      {/* <ul>
        <li> */}
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        {/* </li>
      </ul> */}
    </nav>
  );
};

export default List;
