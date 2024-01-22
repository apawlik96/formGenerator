export class formStyles  {
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
            width: 300px;
        }
    
        .fields, .selects, .data, .buttons {
            margin-bottom: 15px;
        }
    
        div {
            margin-bottom: 5px;
        }
    
        p {
            margin-top: -17px;
            margin-bottom: 10px;
            font-size: 10px;
        }
    
        input:not([type="radio"]) {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 8px;
            margin-bottom: 20px;
        }
    
        input[type="radio"], label {
            margin: 20px 5px;
        }
    
        input[type="submit"], button {
            background-color: #4caf50;
            color: #fff;
            font-size: 16px;
            border-radius: 10px;
            padding 10px;
            width: 120px;
            margin-left: auto;
            margin-right: auto;
            cursor: pointer;
        }
    
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    
        .error {
            border: 1px solid #ff0000;
        }

        .step-indicator {
            width: 20px;
            height: 20px;
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
