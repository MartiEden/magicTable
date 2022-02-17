import {GridView} from "./GridView.js";

const data = [
    {
        company: 'EPAM',
        founder: '<b>Arkadiy Dobkin</b>',
        country: 'USA'
    },
    {
        company: 'Luxoft',
        founder: '<b>Dmitry Loschinin</b>',
        country: 'Switzerland'
    },
    {
        company: 'Microsoft',
        founder: '<b>Bill Gates</b>',
        country: 'USA'
    },
    {
        company: 'Apple',
        founder: '<b>Steve Jobs</b>',
        country: 'USA'
    }
]

let gridView = new GridView();
gridView.header = 'Hello';
gridView.headerClass = ['header', 'test'];
gridView.attribute = {
    'company': {
        'label': 'Company',
    },
    'founder': {
        'label': 'Founder',
        'src': 'html',
    },
    'country': {
        'label': 'Country',
        'value': (data) => {
            if (data['country'] === 'Germany') {
                return data['country'] + ' map'
            }
            return data['country'];
        }
    }
};
gridView.data = data;
console.log(gridView);
gridView.render();