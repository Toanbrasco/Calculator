import { useState } from 'react';
import './App.css';

function App() {
    const btnValues = [
        ["AC", "C", "/"],
        [7, 8, 9, "*"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
    ];
    const [value, setValue] = useState('0')

    const handleBtn = (btn) => {
        switch (btn) {
            case 'AC':
                setValue('0')
                break;
            case 'C':
                if (value !== '0') {
                    if (value === 'ERROR') {
                        setValue('0')
                    } else {
                        setValue(value.slice(0, -1))
                    }
                }

                break;
            case '=':
                try {
                    setValue(eval(value))

                } catch (error) {
                    setValue('ERROR')
                }
                break;
            case '.':
                if (value === '0') {
                    setValue('0' + btn.toString())
                } else {
                    setValue(value + btn)
                }
                break;
            default:
                if (value === '0') {
                    setValue(btn.toString())
                } else {
                    if (btn === '+' || btn === '-' || btn === '*' || btn === '/') {
                        if (value[value.length - 1] !== '+' && value[value.length - 1] !== '-' && value[value.length - 1] !== '*' && value[value.length - 1] !== '/') {
                            setValue(value + btn)
                        } else {
                            console.log('1')
                        }
                    } else {
                        setValue(value + btn)
                    }
                }
                break;
        }
    }

    return (
        <div className="App">
            <div className="container">
                <div className="cal__output">
                    <div className="output">
                        <span>{value}</span>
                    </div>
                </div>
                <div className="cal__bottom">
                    <div className='key__container'>
                        {
                            btnValues.flat().map((btn, index) =>
                                <div key={index} className={
                                    btn === 'AC' ? 'num equal ac' :
                                        btn === '=' ? 'num equal white' :
                                            btn === '/' || btn === 'X' || btn === '-' || btn === '+' ? 'num cal' :
                                                btn === 'C' ? 'num white' : 'num'
                                }
                                    onClick={() => handleBtn(btn)}
                                ><span>{btn}</span></div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default App;
