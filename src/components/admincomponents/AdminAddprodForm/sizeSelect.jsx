import React from 'react'

export const SizeSelect = ({setFormData}) => {
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    const handleSizeChange = (e) => {

        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            sizes: checked
                ? [...prev.sizes, value]
                : prev.sizes.filter((size) => size !== value),
        }));
    };

    return (
        <div className="flex gap-4">
            {sizes.map((size) => (
                <label key={size} className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        value={size}
                        onChange={handleSizeChange}
                        className="w-4 h-4"
                    />
                    {size}
                </label>
            ))}
        </div>)
}
