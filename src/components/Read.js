import React, { useState, useEffect } from 'react';
import firebase from './../utils/firebaeConfig';
import UpdateDelete from './UpdateDelete';


const Read = () => {

    const [quotelist, setQuoteList] = useState([]);


    //TO stateless components
    useEffect(() => {
        const quotesDB = firebase.database().ref("quotesDB");

        quotesDB.on('value', (snapshot) => {
            let previousList = snapshot.val();
            let list = [];
            for (let id in previousList) {
                //pega os fdados somente do usuario x
                list.push({ id, ...previousList[id] })
            }

            setQuoteList(list);

        })

    }, []);

    return (
        <div className="read">
            <ul>
                {quotelist &&
                quotelist.map((item, index) => (
                    <UpdateDelete item={item} key={index} />
                ))}
                  
                
            </ul>
        </div>
    );
};

export default Read;