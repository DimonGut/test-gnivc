import React, {useState} from 'react';
import styles from './ConvertForm.module.css';
import {toCase} from "../services/toCase";

export const ConvertForm = () => {
    const [form, setForm] = useState({noun: '', cases: '', result: ''});

    const onChangeForm = (e) => {
        setForm({...form, [e.currentTarget.name]: e.currentTarget.value});
        console.log(form);
    }

    const convertNoun = (e) => {
        e.preventDefault();
        if(form.noun === '' || form.cases === '') {
            setForm({...form, result: 'Пожалуйста, укажите слово и падеж!'});
        } else {
            const newText = toCase(form.noun, form.cases);
            setForm({...form, result: newText});
        }
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.head}>Мини-приложение для склонения слов по падежам</h1>
            <form className={styles.form}>
                <input className={styles.input_noun} onChange={onChangeForm} id="noun" name="noun" type="text"
                       autoFocus placeholder="Введите существительное в ед. числе..."/>
                <p>Результат: <span className={styles.result}>{form.result}</span></p>
                <div className={styles.radio_group}>
                    <label>
                        <input className={styles.radio} onClick={onChangeForm} id="rCase" name="cases" type="radio"
                               value="rCase"/>
                        Родительный падеж
                    </label>
                    <label>
                        <input className={styles.radio} onClick={onChangeForm} id="dCase" name="cases" type="radio"
                               value="dCase"/>
                        Дательный падеж
                    </label>
                    <label>
                        <input className={styles.radio} onClick={onChangeForm} id="vCase" name="cases" type="radio"
                               value="vCase"/>
                        Винительный падеж
                    </label>
                    <label>
                        <input className={styles.radio} onClick={onChangeForm} id="tCase" name="cases" type="radio"
                               value="tCase"/>
                        Творительный падеж
                    </label>
                    <label>
                        <input className={styles.radio} onClick={onChangeForm} id="pCase" name="cases" type="radio"
                               value="pCase"/>
                        Предложный падеж
                    </label>
                </div>
                <button onClick={convertNoun} className={styles.button}>Склонять</button>
            </form>
        </div>
    );
}