export const getCars = async () => {
    try {
        const res = await fetch('http://localhost:4000/cars');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        return [];
    }
}