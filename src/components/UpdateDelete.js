import React, { useState, useContext } from 'react';
import firebase from './../utils/firebaeConfig';
import { UidContext } from './UidContext';


const UpdateDelete = (props) => {

    const [update, setUpdate] = useState(false);
    const [authorUpdate, setAuthorUpdate] = useState(null);
    const [textUpdate, setTextUpdate] = useState(null);

    const uid = useContext(UidContext);

    const authorCheck = () => {
        if (props.item.uid === uid) {
            return true;
        } else {
            return false;
        }
    }

    const updateItem = () => {
        let quote = firebase.database().ref("quotesDB").child(props.item.id);

        if (authorUpdate !== null) {
            quote.update({
                author: authorUpdate
            });
        }
        if (textUpdate !== null) {
            quote.update({
                text: textUpdate
            });
        }

        setUpdate(false);

    }


    const deleteItem = () => {
        let quote = firebase.database().ref("quotesDB").child(props.item.id);

        quote.remove();


    }

    return (
        <div>
            <li>
                {update === false && (
                    <>
                        <div className="item-container">
                            <p>"{props.item.text}"</p>
                            <h6>{props.item.author}</h6>
                        </div>

                        {authorCheck() && (
                            <div className="buttons-container">
                                <button onClick={() => setUpdate(!update)}>Update</button>
                                <button onClick={deleteItem}>Delete</button>
                            </div>

                        )}


                    </>
                )
                }

                {
                    update &&
                    <div className="item-container-update">
                        <textarea
                            defaultValue={props.item.text}
                            onChange={(e) => setTextUpdate(e.target.value)}
                        />

                        <input type="text"
                            defaultValue={props.item.author}
                            onChange={(e) => setAuthorUpdate(e.target.value)}
                        />

                        <button onClick={updateItem}>save</button>
                    </div>
                }
            </li>
        </div>
    );
};

export default UpdateDelete;