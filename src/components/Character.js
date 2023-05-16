import React from 'react';
import '../styles/character.scss';

function Character({profilePage}) {
  return (
    <div className={`error404page ${profilePage && "active"}`}>
        <div className="newcharacter404">
            <div className="chair404"></div>
            <div className="leftshoe404"></div>
            <div className="rightshoe404"></div>
            <div className="legs404"></div>
            <div className="torso404">
                <div className="body404"></div>
                <div className="leftarm404"></div>
                <div className="rightarm404"></div>
                <div className="head404">
                    <div className="eyes404"></div>
                </div>
            </div>
            <div className="laptop404"></div>
        </div>
    </div>
  )
}
export default Character;