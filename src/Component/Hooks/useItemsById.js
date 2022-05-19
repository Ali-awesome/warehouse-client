import { useEffect, useState } from "react";

const useItemsById = itemId => {
    const [itemsById, setItemsById] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItemsById(data));
    }, [itemId]);
    return [itemsById, setItemsById]
}
export default useItemsById;