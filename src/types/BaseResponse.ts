import { AxiosResponse } from "axios";

export type BaseResponse = {
    success: boolean;
    data?: AxiosResponse<unknown, unknown>;
    error?: unknown;
}