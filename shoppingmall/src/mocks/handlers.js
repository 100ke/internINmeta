// v2 방식
import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/api/products', ()=>{
        return HttpResponse.json([
            {id:1, name:'nike', price:15900},
            {id:2, name:'adidas', price:14900},
            {id:3, name:'newbalance', price:11900},
        ])
    }),
]

// v1 방식으로 수정
// import { rest } from 'msw';

// export const handlers = [
//   rest.get('/api/products', (req, res, ctx) => {
//     console.log('Intercepted /api/products request');
//     return res(
//       ctx.status(200),
//       ctx.json([
//         { id: 1, name: 'nike', price: 15900 },
//         { id: 2, name: 'adidas', price: 14900 },
//         { id: 3, name: 'newbalance', price: 11900 },
//       ])
//     );
//   }),
// ];