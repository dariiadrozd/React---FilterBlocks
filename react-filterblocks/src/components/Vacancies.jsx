import style from './style.module.scss';
import { IconMapPin } from "@tabler/icons-react";
import { Pagination } from '@mantine/core'

function Vacancies() {
    const array = [{
        id: 1,
        title: 'Менеджер-дизайнер',
        salary: 'з/п от 70000 rub',
        time: 'Полный рабочий день',
        location: 'Новый Уренгой'
    },
    {
        id: 2,
        title: 'Ведущий графический дизайнер НЕ УДАЛЕННО',
        salary: 'з/п от 80000 rub',
        time: 'Полный рабочий день',
        location: 'Москва'
    },
    {
        id: 3,
        title: 'Работник декорации, дизайнер (ТЦ Амбар)',
        salary: 'з/п 29000 rub',
        time: 'Сменный график работы',
        location: 'Самара'
    },
    {
        id: 4,
        title: 'Менеджер-дизайнер',
        salary: 'з/п 55000 - 95000 rub',
        time: 'Полный рабочий день',
        location: 'Тюмень'
    }]

    return (<div className={style.vacancies}>
        <div className={style.list}>
            <div>{array.map((el) => <div className={style.content}>
                <h1>{el.title}</h1>
                <div className={style.text}>
                    <p>{el.salary}</p>
                    <div className={style.dot}>•</div>
                    <p className={style.workTime}>{el.time}</p>
                </div>

                <div className={style.flexLocation}>
                    <IconMapPin color="grey"></IconMapPin>
                    <p>{el.location}</p>
                </div>

            </div>)}</div>
            <Pagination total={10}></Pagination>
        </div>
    </div>
    );
}

export default Vacancies;