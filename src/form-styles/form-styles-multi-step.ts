export class formStylesMultiStep  {
    constructor() {
        this.generateStyles();
        this.addStyles();
    }

    private generateStyles(): string {
        return `
        body {
            font-family: Avenir, Helvetica, Tahoma;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            min-height: 550px;
            max-width: 900px;
            width: 900px;
            text-align: center;
            border: 2px solid #1abc9c;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3), skew(20deg, 10deg);
        }

        .form-container, .step-indicator-container-top {
            display: inline-block;
            vertical-align: middle;
        }

        .form-container {
            width: 600px;
        }

        h2{
            text-align: center;
            font-size: 50px;
            line-height: 1.1;
            background: linear-gradient(
                to right, 
                #1abc9c,
                #0b6e5b
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: center;
        }

        .button-container {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 40px;
        }

        button {
            background-color: #1abc9c;
            color: #fff;
            font-size: 20px;
            font-weight: 100;
            padding: 10px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 120px;
            margin: 0 10px;
            text-align: center;
        }

        button:hover {
            background-color: #0b6e5b;
        }

        .step-indicator-container-top {
            max-width: 250px;
            width: 100%;
            border-right: 2px solid #04AA6D;
        }

        .step-indicator-wrapper {
            display: flex;
            align-items: center;
            position: relative;
            margin-bottom: 80px;
            
        }

        .step-indicator {
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #787878;
            color: #ffffff;
            font-weight: bold;
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }


        .current-step {
            background-color: #1abc9c;
        }

        .step-indicator.green-line {
            background-color: #0b6e5b;
        }

        .step-title {
            width: 150px;
            margin-top: 8px;
            font-size: 20px;
            color: #333;
        }

        .input-data {
            margin: 30px 20px;
            position: relative;
        }

        .input-data input {
            padding: 20px;
            width: 100%;
            height: 45px;
            box-sizing: border-box;
            outline: none;
            border: 1px solid #04AA6D;
            border-radius: 25px;
            font-size: 16px;
        }

        .input-data label{
            position: absolute;
            top: 30%;
            left: 5%;
            font-size: 14px;
            padding: 0px 5px;
            color: #666;
            transition: 0.3s;
            pointer-events: none;
            font-size: 16px;
        }

        .input-data input:focus~label,
        .input-data input:not(:placeholder-shown)~label{
            top: -10px;
            color: #04AA6D;
            background-color: #fff;
        }

        .input-data input::placeholder {
            color: transparent;
        }

        .input-data-phone{
            width: 100%; 
        }

        .input-data-phone .input-group {
            display: flex;
            align-items: center;
            margin: 30px 20px;
        }

        .input-data-phone select,
        .input-data-phone input {
            height: 45px;
            box-sizing: border-box;
        }

        .input-data-phone input {
            width: 145%;
        }

        .input-data-phone select {
            border: 1px solid #04AA6D;
            border-radius: 25px;
            font-size: 16px;
            padding: 10px;
            width: 35%;
        }

        .input-data-phone select option {
            background-color: #ecf0f1;
            color: #2c3e50;
            font-size: 16px;
            padding: 10px;
            border-radius: 25px;
        }

        .input-data-phone select option:hover {
            background-color: #04AA6D;
        }

        .input-data-pass {
            display: flex;
            flex-direction: column;
        }

        .input-data-pass .input-data {
            margin-bottom: 20px;
        }

        .input-data-pass .showPass {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        .input-data-pass input[type="checkbox"] {
            margin-right: 5px; 
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid #04AA6D;
            outline: none;
            cursor: pointer;
            position: relative;
        }

        .input-data-pass input[type="checkbox"]:checked {
            background-color: #04AA6D;
        }

        .input-data-pass input[type="checkbox"]::before {
            content: "✓";
            color: #fff;
            font-size: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none;
        }

        .input-data-pass input[type="checkbox"]:checked::before {
            display: block;
        }

        .input-data-pass label[for="showPasswordCheckbox"] {
            font-size: 14px;
        }

        .required {
            color: #e74c3c; 
            font-size: 12px;
            margin-top: 35px;
            text-align: right;
        }

        p {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 5px; 
        }

        .popup-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            padding: 40px;
            width: 400px;
            height: 300px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        .success-message-paragraph {
            color: #04AA6D;
            font-size: 30px;
            margin-bottom: 15px;
            font-weight: bold;
        }
        `
    }

    private addStyles(): void {
        const styles = this.generateStyles();

        if (typeof document !== 'undefined') {
            var styleElement = document.createElement('style');
            styleElement.appendChild(document.createTextNode(styles));

            document.body.appendChild(styleElement);
        } else {
            console.error('Style element not found.')
        }
    }
}
