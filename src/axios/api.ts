import apiInstance from ".";
import { BaseResponse } from "../types/BaseResponse";

export default {
    get: async (url: string): Promise<BaseResponse> => {
        try {
            const response = await apiInstance.get(url);
            return {
                success: true,
                data: response
            }
        } catch (error) {
            return {
                success: false,
                error: error
            }
        }
    }
}