import style from "./style.module.scss";
import { Pagination } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import array from '../../Storage/Storage.json'
import { Link } from "react-router-dom";
import { useState } from "react";

const elementsOnThePage = 5

function Vacancies() {

  const [homePage, setHomePage] = useState(1)

  const initialIndex = (homePage - 1) * elementsOnThePage
  const finalIndex = homePage * elementsOnThePage

  const filteredVacancies = array.slice(initialIndex, finalIndex)

  const variablePage = (el) => {
    setHomePage(el)
  }

  return (
    <>
      <div className={style.vacancies}>
        <div className={style.list}>

          {filteredVacancies.map((el) => (
            <Link to={`/${el.id}`}>
              <div key={el.id} className={style.content}>
                <h1>{el.title}</h1>
                <div className={style.text}>
                  <p>{el.salary}</p>
                  <div className={style.dot}>•</div>
                  <p>{el.time}</p>
                </div>
                <div className={style.flexLocation}>
                  <IconMapPin color="grey"></IconMapPin>
                  <p>{el.location}</p>
                </div>
              </div>
            </Link >
          ))}


        </div>
        <Pagination total={Math.ceil(array.length / elementsOnThePage)} value={homePage} onChange={variablePage} />
      </div>
    </>
  );
}

export default Vacancies;