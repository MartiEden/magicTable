import { GridView } from "./GridView.js";
import { data } from "../data/data.js";


let gridView = new GridView();

const renderData = {
    header: 'Test Magic Table',
    headerClass: ['header', 'site-header'],
    attribute: {
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
    },
    data: data
}

gridView.render(renderData);