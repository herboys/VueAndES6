import {post} from "@/utils/request";

export const Login = () => {
    post('/sh/freeze/getAllDeviceInfo',{"caseType":"道路结冰","isCompile":"0","pageNumber":"1","pageSize":"10","uniqueId":""}).then(res=>{
        console.log(res)
    })
}