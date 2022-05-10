const User = (height: number, age: number): number => {
    return 1
}

User(1, 2)


interface NASA {
    mission_name: string,
    launch_date_local: string,
    launch_site: { site_name_long: string },
    links: {
        article_link?: string,
        video_link: string
    },
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: [
                {
                    flight: number,
                    core: {
                        reuse_count: number,
                        status?: string
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: string,
                    payload_mass_kg: number,
                    payload_mass_lbs: number
                }
            ]
        }
    }
}

//
//     const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
//

type male = 'male'
type female = 'female'

interface IUser{
    name:string,
    age:number,
    gender: male|female
}

function sum(a:number,b:number):number{
    return a+b
}

function showSum(a:number,b:number):void{
    console.log(a + b);
}
function incAge(someUser:IUser, inc:number):IUser{
    someUser.age+=inc
    return someUser
}


const nUser: IUser = {age:12,gender:"male",name:'Antonio'}

console.log(nUser);

// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)