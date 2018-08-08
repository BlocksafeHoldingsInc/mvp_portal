"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItems = [
    {
        title: '', path: '/login', icon: ''
    },
    {
        title: 'My Aya Account', path: '/', icon: ''
    },
    {
        title: 'My Timecard', path: '/mytimecard', icon: 'access_time',
        'subItems': [
            { title: 'Current Timecard', path: '/timecard/current', icon: '' },
            { title: 'All Timecards', path: '/timecard/all', icon: '' }
        ]
    },
];
//# sourceMappingURL=menu.config.js.map