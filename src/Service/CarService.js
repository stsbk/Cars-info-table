import API from "../API";

class CarService {
    static async getAll() {
        try {
            const { data } = await API.get('');

            return data;
        } catch (e) {
            throw new Error(e);
        }
    }

    static async deleteCar(id) {
        try {
            const { car } = await API.delete(`/${id}`);

            return car;
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default CarService;
