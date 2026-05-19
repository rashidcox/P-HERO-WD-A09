
export const getCars = async () => {
    try {
        const res = await fetch('http://localhost:4000/cars');
        const data = await res.json();
        return data;
    } catch (error) {
        return ['error fetching cars'];
    }
}