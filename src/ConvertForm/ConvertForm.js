import React from 'react';
import styles from './ConvertForm.module.css';

export const ConvertForm = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.head}>Мини-приложение для склонения слов по падежам</h1>
            <form>
                <label htmlFor="noun">Поле ввода существительного в именительном падеже:</label>
                <input id="noun" type="text" autoFocus placeholder="Введите существительное..."/>
                <div className={styles.radio_group}>
                    <label>
                        <input id="rCase" type="radio" value="rCase"/>
                        Родительный падеж
                    </label>
                    <label>
                        <input id="dCase" type="radio" value="dCase"/>
                        Дательный падеж
                    </label>
                    <label>
                        <input id="vCase" type="radio" value="vCase"/>
                        Винительный падеж
                    </label>
                    <label>
                        <input id="tCase" type="radio" value="tCase"/>
                        Творительный падеж
                    </label>
                    <label>
                        <input id="pCase" type="radio" value="pCase"/>
                        Предложный падеж
                    </label>
                </div>
                <button>Преобразовать</button>
            </form>
        </div>
    );
}