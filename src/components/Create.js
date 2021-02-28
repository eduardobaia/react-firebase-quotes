import React, { useState, useContext } from 'react';
import firebase from './../utils/firebaeConfig';
import { UidContext } from './UidContext';


const Create = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    //aqui pega a uid que agora ta geral.
    const uid = useContext(UidContext);

    const createQuote = () => {
        const quotesDb = firebase.database().ref("quotesDB");
        const quote = {
            author,
            text,
            uid
        };

        quotesDb.push(quote);

        setAuthor('');
        setText('');
    }

    return (
        <div className="create">
            <h4>Create a citation</h4>
            <div className="form">
                <input type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <textarea
                    className="button"
                    placeholder="Citation"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                <button onClick={createQuote}>Create</button>
            </div>
        </div>
    );
};

export default Create;