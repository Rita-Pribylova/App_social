import { instance } from "./api";

type GetCaptchaUrlResposeType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResposeType>(`security/get-captcha-url`).then(res => res.data);
    }
}