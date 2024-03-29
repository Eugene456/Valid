
        const validForm1 = new Validator({
            selector: '#form1',
            pattern: {
                'name': /[А-Яа-яЁё]/,
                'phone': /^\+380\d{7}$/
            },
            method: {
                'form1-name':[
                    ['notEmpty'],
                    ['pattern', 'name'],
                ],
                'form1-phone':[
                    ['notEmpty'],
                    ['pattern', 'phone'],  
                ],
                'form1-email':[
                    ['notEmpty'],
                    ['pattern', 'email'],
                ]
            }
        });

        const validForm2 = new Validator({
            selector: '#form2',
            pattern: {
                'name': /[А-Яа-яЁё]/,
                'phone': /^\+380\d{7}$/
            },
            method: {
                'form2-name':[
                    ['notEmpty'],
                    ['pattern', 'name'],
                ],
                'form2-phone':[
                    ['notEmpty'],
                    ['pattern', 'phone'],  
                ],
                'form2-email':[
                    ['notEmpty'],
                    ['pattern', 'email'],
                ]
            }
        });

        const validForm3 = new Validator({
            selector: '#form3',
            pattern: {
                'name': /[А-Яа-яЁё]/,
                'phone': /^\+380\d{7}$/
            },
            method: {
                'form3-name':[
                    ['notEmpty'],
                    ['pattern', 'name'],
                ],
                'form3-phone':[
                    ['notEmpty'],
                    ['pattern', 'phone'],  
                ],
                'form3-email':[
                    ['notEmpty'],
                    ['pattern', 'email'],
                ]
            }
        });

        validForm1.init();
        validForm2.init();
        validForm3.init();
   