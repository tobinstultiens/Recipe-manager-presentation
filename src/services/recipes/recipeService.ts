import http from "../httpcommon";

class RecipeService {
    getAll() {
        return http.get("/recipe");
    }
    get(id: string) {
        return http.get("/recipe/" + id);
    }
}