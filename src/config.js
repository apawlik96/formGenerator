"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formPages = exports.config = void 0;
exports.config = {
    fields: [{
            class: 'fields',
            name: 'Username',
            type: 'text',
            placeholder: 'Enter Username'
        },
        {
            class: 'fields',
            name: 'First Name',
            type: 'text',
            placeholder: 'Enter First Name'
        },
        {
            class: 'fields',
            name: 'Last Name',
            type: 'text',
            placeholder: 'Enter Last Name'
        },
        {
            class: 'fields',
            name: 'Email',
            type: 'email',
            placeholder: 'Enter Email'
        },
        {
            class: 'fields',
            name: 'Phone',
            type: 'tel',
            placeholder: 'Enter Phone'
        },
        {
            class: 'fields',
            name: 'Password',
            type: 'password',
            placeholder: 'Enter Password'
        },
        {
            class: 'fields',
            name: 'Confirm Password',
            type: 'password',
            placeholder: 'Confirm Password'
        },
    ],
    selects: [{
            class: 'selects',
            type: 'radio',
            name: 'gender',
            for: 'Female'
        },
        {
            class: 'selects',
            type: 'radio',
            name: 'gender',
            for: 'Male'
        }
    ],
    data: [{
            class: 'data',
            type: 'date',
            name: 'depart'
        },],
    buttons: [{
            class: 'buttons',
            name: 'submit',
            type: 'submit',
            value: 'Submit'
        }
    ]
};
exports.formPages = [
    { title: 'Step 1', fields: ['Username', 'First Name', 'Last Name'] },
    { title: 'Step 2', fields: ['Email', 'Phone'] },
    { title: 'Step 3', fields: ['Password', 'Confirm Password'] },
];
