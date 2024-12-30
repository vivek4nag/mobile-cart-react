/* eslint-disable react/prop-types */

const MobileCard = ({ name, price, img, count, index, dataArr, setDataArr, cartCount, setCartCount, totalPrice, setTotalPrice }) => {

    const increaseCount = (index) => {
        const newDataArr = [...dataArr]
        setCartCount(cartCount + 1)
        newDataArr[index].count++;
        const newTotalPrice = parseFloat((totalPrice + newDataArr[index].price).toFixed(2))
        setTotalPrice(newTotalPrice)
        setDataArr(newDataArr)
    };

    const decreaseCount = (index) => {
        const newDataArr = [...dataArr]

        if (newDataArr[index].count === 1) {

            const newTotalPrice = parseFloat((totalPrice - newDataArr[index].price).toFixed(2))
            setTotalPrice(newTotalPrice)
            setDataArr(newDataArr)
            removeItem(index)
            return
        }
        setCartCount(cartCount - 1)
        newDataArr[index].count--;
        const newTotalPrice = parseFloat((totalPrice - newDataArr[index].price).toFixed(2))
        setTotalPrice(newTotalPrice)
        setDataArr(newDataArr)

    }

    const removeItem = (index) => {
        setCartCount(cartCount - 1)
        const newDataArr = dataArr.filter((_ , idx) => idx != index)
        const newTotalPrice = parseFloat((totalPrice - dataArr[index].price * dataArr[index].count).toFixed(2))
        setTotalPrice(newTotalPrice);
        setDataArr(newDataArr);
    }

    return (
        <div className="card flex justify-between px-8 items-center bg-gray-200 p-4 rounded-lg shadow-lg ">
            <div>
                <img
                    src={img}
                    alt="ghanta"
                    className="h-24 w-24 object-cover rounded-lg mr-4"
                />
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-700">Price: ${price}</p>
                    <p className="text-gray-700">Count:<span className="text-blue-700 font-bold"> {count}</span></p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex space-x-2 mb-2">
                    <button
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        onClick={() => increaseCount(index)}
                    >
                        +
                    </button>
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => decreaseCount(index)}
                    >
                        -
                    </button>
                </div>
                <button className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900"
                    onClick={() => removeItem(index)}>
                    remove
                </button>
            </div>
        </div>
    );
};

export default MobileCard;
