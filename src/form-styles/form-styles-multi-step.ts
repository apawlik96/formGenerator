export class formStylesMultiStep  {
    constructor() {
        this.addStyles();
    }

    private addStyles(): void {
        const styles = `
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    
        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 400px;
            text-align: center;
        }
    
        p {
            font-family: 'Open Sans', sans-serif;
            margin-top: -15px;
            margin-left: 15px;
            margin-bottom: 10px;
            font-size: 10px;
            color: #FF3333;
            text-align: left;
        }
    
        input {
            color:#8a8a8a;
            display: block;
            width: 90%;
            height: 30px;
            padding: 5px 15px;
            margin: 15px auto;
            border:1px solid #ccc;
            border-radius: 20px;
            background-color: #fff;
            font-family:'HelveticaNeue','Arial', sans-serif;
        }

        #divPhone {
            display: flex;
            align-items: center;
            width: 98%;
            margin: 10px auto;
        }
        
        #phoneCountryCodeSelect {
            flex: 1;
            margin-right: 10px;
        }
        
        input[name="Phone"] {
            flex: 2;
        }
        
        select {
            color:#8a8a8a;
            display: block;
            width: 90%;
            height: 30px;
            padding: 5px 15px;
            margin: 10px auto;
            border:1px solid #ccc;
            border-radius: 20px;
            background-color: #fff;
            font-family:'HelveticaNeue','Arial', sans-serif;
        }
    
        button {
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            font-size: 15px;
            text-decoration: uppercase;
            margin: 10px;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            font-family:'HelveticaNeue','Arial', sans-serif;
        }
        
        button:hover {
            background-color: #45a049;
        }


        .invalid-field {
            border: 1px solid #FF3333;
        }

        .step-indicator-wrapper {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .step-indicator-container-top {
            display: flex;
            justify-content: space-between;
            margin: 15px;
        }

        .step-title {
            font-size: 10px;
        }

        .step-indicator {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        .step-indicator.current-step {
            background-color: #4caf50;
            color: white;
        }

        .step-indicator-line {
            flex: 1;
            height: 3px;
            background-color: #ddd;
            margin: 15px 0;
        }

        .green-line {
            color:white;
            background-color: #4caf50;
        }
        `;

        if (typeof document !== 'undefined') {
            var styleElement = document.createElement('style');
            styleElement.appendChild(document.createTextNode(styles));

            document.body.appendChild(styleElement);
        } else {
            console.error('Style element not found.')
        }
    }
}
