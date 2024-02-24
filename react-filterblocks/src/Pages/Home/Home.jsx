import { Input, Button } from "@mantine/core";
import style from "./style.module.scss";
import { IconSearch } from "@tabler/icons-react";
import Vacancies from "../../Components/Vacancies/Vacancies";

function Home() {
  return (
    <div className={style.wrapper}>
      <Input
        placeholder="Wprowadź nazwę stanowiska"
        rightSection={<Button variant="filled">Szukaj</Button>}
        leftSection={<IconSearch size={16} />}
        rightSectionWidth="100px"
      ></Input>
      <Vacancies></Vacancies>
    </div>
  );
}

export default Home;
