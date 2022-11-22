import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [selectColors, setSelectColors] = useState([]);

    const handleAddColor = event => {
        const colorName = event.target.innerText;
        const colors = [...selectColors, colorName];
        setSelectColors(colors);

        const element = event.target.parentNode;
        element.removeChild(element.children[0]);
    }

    return (
        <div className='container'>
            <div className='selected-color'>
                {
                    selectColors.map(color =>
                        <span
                            className={`set-margin ${color.toLowerCase()} bg-color`}>{color} x</span>)
                }
            </div>
            <div className='color-list'>
                <table>
                    <tbody>
                        <tr onClick={handleAddColor} className='purple'>
                            <td>
                                <span>Purple</span>
                            </td>
                        </tr>
                        <tr onClick={handleAddColor} className='red'>
                            <td>
                                <span>Red</span>
                            </td>
                        </tr>
                        <tr onClick={handleAddColor} className='orange'>
                            <td>
                                <span>Orange</span>
                            </td>
                        </tr>
                        <tr onClick={handleAddColor} className='green'>
                            <td>
                                <span>Green</span>
                            </td>
                        </tr>
                        <tr onClick={handleAddColor} className='slate'>
                            <td>
                                <span>Slate</span>
                            </td>
                        </tr>
                        <tr onClick={handleAddColor} className='oliver'>
                            <td>
                                <span>Oliver</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer>
                <p>&copy; 2022 - Developed by <a href="https://www.linkedin.com/in/ehsanulislamkhan/" target="_blank" rel="noopener noreferrer">Ehsan</a></p>
            </footer>
        </div>
    );
};

export default Home;