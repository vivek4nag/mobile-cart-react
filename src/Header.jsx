/* eslint-disable react/prop-types */

const Header = ({ mobCount }) => {
    return (
        <div className="flex items-center justify-between w-full bg-blue-600 text-white py-4 px-6 shadow-md">
            <h1 className="text-2xl font-bold">Your Jhola</h1>
            <div className="flex items-center space-x-2">
                <span className="text-lg font-medium">Items:</span>
                <span className="text-lg font-bold bg-lime-200 text-black px-3 py-1 rounded-full">
                    {mobCount}
                </span>
            </div>
        </div>
    )
}

export default Header