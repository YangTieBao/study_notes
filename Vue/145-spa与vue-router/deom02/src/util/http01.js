import axios from 'axios'

function enterHttp(){
    return axios.get('https://m.maizuo.com/gateway?cityId=430300&pageNum=1&pageSize=10&type=1&k=1051896',{
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17137669143527813122490369"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    })
}
function detailHttp(params){
    return axios.get(`https://m.maizuo.com/gateway?filmId=${params}&k=2370088`,{
        headers:{
            'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"17137669143527813122490369"}',
            'X-Host':'mall.film-ticket.film.info'
        }
    })
}

export default {
    enterHttp,
    detailHttp
}