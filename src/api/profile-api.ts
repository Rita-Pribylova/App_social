import { PhotosType, ProfileType } from "../types/types";
import { instance, ResponseType } from "./api";

type SavePhotoResponseType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId).then(res => res.data) //запрос за статусом (получить)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, { status: status }).then(res => res.data)//новый статус , обновление
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<ResponseType<SavePhotoResponseType>>(`profile/photo`, formData).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile).then(res => res.data)
    }
}