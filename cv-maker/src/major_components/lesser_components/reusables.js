/** @format */

// This file is made to store reusable modules.

const ObjectToUnorderedList = ({ array, title }) => {
    // This component is used to transform a string into an array, then into an unordered list

    return (
        <div>
            <p className='font-bold'>{title}</p>
            <ul className='list-disc'>
                {array.map((item) => (
                    <li className='font-semibold'>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export { ObjectToUnorderedList };
