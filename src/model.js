import image from './assets/image.png'

export const model = [
    {type: 'title', value: 'Конструктор на чистом JS', option: {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: 'green',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: [
            '11111111111',
            '22222222222',
            '33333333333'
        ]},
    {type: 'image', value: image}
]