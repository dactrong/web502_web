import instance from "./instance";

export const create = (signup: any) => {
    const url = `/signup`;
    return instance.post(url, signup)
}

export const read = (_id: number) => {
    const url = `/sigin/${_id}`
    return instance.get(url)
}
