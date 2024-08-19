import useClickOutside from '../../hooks/useClickOutside';
import PropTypes from 'prop-types';
import MyResponsiveLine from '../line_graph';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const SelfMonitoringModal = ({ onClose, choice }) => {
    // Fabricated data for a pregnant woman's self-monitoring parameters
    
    const [data, setData] = useState([
        {
            id: 'weight',
            color: 'hsl(210, 100%, 15%)', // Dark blue color
            data: [
                { x: 'W12', y: 65 },
                { x: 'W16', y: 68 },
                { x: 'W20', y: 70 },
                { x: 'W24', y: 72 },
                { x: 'W28', y: 74 },
                { x: 'W32', y: 76 },
                { x: 'W36', y: 78 },
                { x: 'W40', y: 80 },
            ],
        },
        {
            id: 'blood sugar',
            color: 'hsl(120, 100%, 30%)', // Green color
            data: [
                { x: 'W12', y: 80 },
                { x: 'W16', y: 85 },
                { x: 'W20', y: 90 },
                { x: 'W24', y: 95 },
                { x: 'W28', y: 100 },
                { x: 'W32', y: 105 },
                { x: 'W36', y: 110 },
                { x: 'W40', y: 115 },
            ],
        },
        {
            id: 'temperature',
            color: 'hsl(60, 100%, 70%)', // Yellow color (adjusted lightness)
            data: [
                { x: 'W12', y: 98.0 },
                { x: 'W16', y: 98.2 },
                { x: 'W20', y: 98.4 },
                { x: 'W24', y: 98.6 },
                { x: 'W28', y: 98.8 },
                { x: 'W32', y: 99.0 },
                { x: 'W36', y: 99.2 },
                { x: 'W40', y: 99.4 },
            ],
        },
    ]);

    const findDataById = (id) => {
        return data.find(item => item.id.toLowerCase() === id.toLowerCase());
    };

    const domNode = useClickOutside(onClose);

    return (
        createPortal(
            <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50" />
            <div ref={domNode} className="bg-white p-8 rounded shadow-md relative z-50">
                <button onClick={onClose} className="absolute top-2 right-2">X</button>
                <MyResponsiveLine data={[findDataById(choice)]} />
            </div>
        </div>
        ,
        document.getElementById("portal")
        )
        
    );
};

SelfMonitoringModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    choice: PropTypes.string.isRequired,
};

export default SelfMonitoringModal;
