import React, {useEffect, useState} from 'react';
import styles from './ConvertForm.module.css';

export const ConvertForm = () => {
    const [form, setForm] = useState({noun: '', cases: ''});

    const onChangeForm = (e) => {
        setForm({...form, [e.currentTarget.name]: e.currentTarget.value});
    }

    const testRegExp = (e) => {
        e.preventDefault();
        let reg1 = /^[а-я]+[^аяь]$/iu;
        let text = reg1.test(String(form.noun));
        console.log(text);
    }

    useEffect(() => {
        // let reg1 = /^[а-я]+[ая]{1}$/iu;
        // let text = reg1.test(String(form.noun));
        // console.log(text);
    },[form]);

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.head}>Мини-приложение для склонения слов по падежам</h1>
            <form className={styles.form}>
                <label htmlFor="noun">Поле ввода существительного в именительном падеже:</label>
                <input onChange={onChangeForm} id="noun" name="noun" type="text" autoFocus placeholder="Введите существительное..."/>
                <div className={styles.radio_group}>
                    <label>
                        <input onClick={onChangeForm} id="rCase" name="cases" type="radio" value="rCase"/>
                        Родительный падеж
                    </label>
                    <label>
                        <input onClick={onChangeForm} id="dCase" name="cases" type="radio" value="dCase"/>
                        Дательный падеж
                    </label>
                    <label>
                        <input onClick={onChangeForm} id="vCase" name="cases" type="radio" value="vCase"/>
                        Винительный падеж
                    </label>
                    <label>
                        <input onClick={onChangeForm} id="tCase" name="cases" type="radio" value="tCase"/>
                        Творительный падеж
                    </label>
                    <label>
                        <input onClick={onChangeForm} id="pCase" name="cases" type="radio" value="pCase"/>
                        Предложный падеж
                    </label>
                </div>
                <button onClick={testRegExp} className={styles.button}>Преобразовать</button>
            </form>
        </div>
    );
}