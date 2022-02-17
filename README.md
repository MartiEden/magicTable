# magicTable

To create table you have to :

1. let your_table = new GridView();
2. define all props you need, for example, below:
const renderData = {
    header: 'Test Magic Table',                      //table title
    headerClass: ['header', 'site-header'],          //classes fro title
    attribute: {                                     //generate cols count and their attributes
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
    data: data                                          //pass content for table - [{},{}...]
}

Good luck!
