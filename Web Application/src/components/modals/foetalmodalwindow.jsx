import useClickOutside from '../../hooks/useClickOutside';
import PropTypes from 'prop-types';
import MyResponsiveLine from '../line_graph';
import { useState } from 'react';
import { createPortal } from 'react-dom';



const Modalwindow = ({ onClose, choice }) => {
    const findDataById = (id) => {
        return data.find(item => item.id.toLowerCase() === id.toLowerCase());
    };

    const [data, setData] = useState([
        {
            id: 'head circumference',
            color: 'hsl(210, 100%, 15%)', // Dark blue color
            data: [
                { x: 'W12', y: 5 },
                { x: 'W16', y: 10 },
                { x: 'W20', y: 17 },
                { x: 'W24', y: 25 },
                { x: 'W28', y: 32 },
                { x: 'W32', y: 37 },
                { x: 'W36', y: 38 },
                { x: 'W40', y: 40 },
            ],
        },
        {
            id: 'abdominal circumference',
            color: 'hsl(120, 100%, 30%)', // Green color
            data: [
                { x: 'W12', y: 3 },
                { x: 'W16', y: 8 },
                { x: 'W20', y: 15 },
                { x: 'W24', y: 22 },
                { x: 'W28', y: 27 },
                { x: 'W32', y: 32 },
                { x: 'W36', y: 35 },
                { x: 'W40', y: 38 },
            ],
        },
        {
            id: 'femur length',
            color: 'hsl(60, 100%, 70%)', // Yellow color (adjusted lightness)
            data: [
                { x: 'W12', y: 2 },
                { x: 'W16', y: 6 },
                { x: 'W20', y: 12 },
                { x: 'W24', y: 18 },
                { x: 'W28', y: 24 },
                { x: 'W32', y: 30 },
                { x: 'W36', y: 34 },
                { x: 'W40', y: 36 },
            ],
        },
        {
            id: 'biparietal diameter',
            color: 'hsl(0, 0%, 0%)', // Black color
            data: [
                { x: 'W12', y: 1 },
                { x: 'W16', y: 4 },
                { x: 'W20', y: 9 },
                { x: 'W24', y: 14 },
                { x: 'W28', y: 19 },
                { x: 'W32', y: 25 },
                { x: 'W36', y: 28 },
                { x: 'W40', y: 30 },
            ],
        },
    ]);


    const domNode = useClickOutside(onClose);
    return (
        createPortal(
            <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50" />
                <div ref={domNode} className="bg-white p-8 rounded shadow-md relative z-50">
                    <button onClick={onClose} className="absolute top-2 right-2">X</button>
                    {
                        choice == "all" ?
                            <div className="grid grid-cols-2 gap-4">
                                <MyResponsiveLine data={[data[0]]} style="autumn" />
                                <MyResponsiveLine data={[data[1]]} style="dark2" />
                                <MyResponsiveLine data={[data[2]]} style="category10" />
                                <MyResponsiveLine data={[data[3]]} style="brown_blueGreen" />
                            </div>
                            :
                            <MyResponsiveLine data={[findDataById(choice)]} style="dark2" />
                    }
                </div>
            </div>
            ,
            document.getElementById("portal")
        )


    )
}

Modalwindow.propTypes = {
    onClose: PropTypes.func.isRequired,
    choice: PropTypes.string.isRequired,
};

export default Modalwindow