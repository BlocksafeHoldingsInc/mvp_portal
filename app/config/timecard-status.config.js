"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timecardStatuses = [
    {
        id: 1,
        status: 'Unsubmitted',
        statusIcon: 'timelapse',
        statusAction: '',
        statusActionIcon: '',
        cssClass: 'unsubmitted'
    },
    {
        id: 2,
        status: 'Submitted',
        statusIcon: 'check_circle',
        statusAction: 'download',
        statusActionIcon: 'file_download',
        cssClass: 'submitted'
    },
    {
        id: 3,
        status: 'Processed',
        statusIcon: 'monetization_on',
        statusAction: 'download',
        statusActionIcon: 'file_download',
        cssClass: 'processed'
    },
    {
        id: 5,
        status: 'Pending Tier 1 Approval',
        statusIcon: 'hourglass_full',
        statusAction: 'download',
        statusActionIcon: 'file_download',
        cssClass: 'pending'
    },
    {
        id: 6,
        status: 'Pending Tier 2 Approval',
        statusIcon: 'lock',
        statusAction: 'download',
        statusActionIcon: 'file_download',
        cssClass: 'pending'
    },
    {
        id: 7,
        status: 'Approved',
        statusIcon: 'check_circle',
        statusAction: 'download',
        statusActionIcon: 'file_download',
        cssClass: 'approved'
    },
    {
        id: 8,
        status: 'Rejected Tier 1',
        statusIcon: 'cancel',
        statusAction: '',
        statusActionIcon: '',
        cssClass: 'rejected'
    },
    {
        id: 9,
        status: 'Rejected Tier 2',
        statusIcon: 'cancel',
        statusAction: '',
        statusActionIcon: '',
        cssClass: 'rejected'
    }
];
//# sourceMappingURL=timecard-status.config.js.map