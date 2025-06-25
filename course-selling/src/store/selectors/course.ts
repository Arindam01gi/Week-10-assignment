import { selector } from "recoil";
import { courseState } from "../atoms/course";

export const isCourseLoading = selector({
    key: "isCourseLocading",
    get: ({get}) =>{
        const {isLoading} = get(courseState)
        return isLoading;
    }
})