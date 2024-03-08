export class formStylesMultiStep  {
    private lighterGreenColor : string;
    private darkerGreenColor: string;

    constructor() {
        this.lighterGreenColor  = '#04AA6D';
        this.darkerGreenColor = '#0b6e5b';
        this.generateStyles();
        this.addStyles();
    }

    private generateStyles(): string {
        return `
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

        * {
            margin: 0;
            padding: 0;
            outline: none;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 10px;
            font-family: 'Poppins', sans-serif;
            background: #f4f4f4;
        }

        .container {
            min-height: 550px;
            max-width: 1200px;
            background: #fff;
            width: 1200px;
            padding: 25px 40px 10px 40px;
            border: 2px solid #1abc9c;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3), skew(20deg, 10deg);
            border-radius: 8px;
        }

        .container form {
            padding: 30px 0 0 0;
        }

        .form-container, .step-indicator-container-top {
            display: inline-block;
            vertical-align: middle;
        }

        .container form .input-data {
            margin: 32px 0;
        }

        .form-container {
            width: 70%;
            padding-left: 40px;
        }

        .personal-data-form {
            min-height: 400px;
        }

        form .input-data {
            width: 100%;
            height: 40px;
            margin-bottom: 32px;
            position: relative;
        }

        .input-data input {
            display: block;
            width: 100%;
            height: 100%;
            border: none;
            font-size: 17px;
            border-bottom: 2px solid rgba(0, 0, 0, 0.12);
            transition: border-bottom 0.3s ease;
        }

        .input-data input:not(:focus):not(:placeholder-shown) {
            border-bottom: 2px solid rgba(0, 0, 0, 0.12);
        }

        .input-data input:focus,
        .input-data input:not(:placeholder-shown) {
            border-bottom: 2px solid ${this.lighterGreenColor};
        }

        .input-data input:focus~label,
        .input-data input:not(:placeholder-shown)~label {
            transform: translateY(-20px);
            font-size: 14px;
            color: ${this.lighterGreenColor};
        }

        .input-data input:placeholder-shown~label {
            font-size: 16px;
            color: #000;
        }

        .input-data input::placeholder {
            color: transparent;
        }
        
        .input-data input::placeholder {
            color: transparent;
        }

        .input-data label {
            position: absolute;
            pointer-events: none;
            bottom: 10px;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        .input-data-phone .input-group {
            display: flex;
            align-items: center;
        }
        
        .input-data-phone select,
        .input-data-phone input {
            height: 40px;
            width: 100%;
            box-sizing: border-box;
            margin-right: 5%;
        }

        .input-data-phone select {
            width: 40%;
            height: 50px;
        }

        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            background-image:
                linear-gradient(45deg, transparent 50%, ${this.lighterGreenColor} 50%),
                linear-gradient(135deg, ${this.lighterGreenColor} 50%, transparent 50%);
            background-position:
                calc(100% - 20px) calc(1em + 2px),
                calc(100% - 15px) calc(1em + 2px),
                calc(100% - 2.5em) 0.5em;
            background-size:
                5px 5px,
                5px 5px,
                1px 1.5em;
            background-repeat: no-repeat;
            padding: 12px;
            border: none;
            border: 2px solid rgba(0, 0, 0, 0.12);
            font-size: 17px;
        }

        select:focus {
            background-image:
                linear-gradient(45deg, ${this.lighterGreenColor} 50%, transparent 50%),
                linear-gradient(135deg, transparent 50%, ${this.lighterGreenColor} 50%);
            background-position:
                calc(100% - 15px) 1em,
                calc(100% - 20px) 1em,
                calc(100% - 2.5em) 0.5em;
            background-size:
                5px 5px,
                5px 5px,
                1px 1.5em;
            background-repeat: no-repeat;
            outline: 0;
            box-shadow: 0 0 5px ${this.lighterGreenColor};
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
            border: 2px solid ${this.lighterGreenColor};
            outline: none;
            cursor: pointer;
            position: relative;
        }

        .input-data-pass input[type="checkbox"]:checked {
            background-color: ${this.lighterGreenColor};
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

        @media (max-width: 700px) {
            .container .text {
                font-size: 30px;
            }

            .container form {
                padding: 10px 0 0 0;
            }

            .container form{
                display: block;
            }

            .container form .input-data {
                margin: 35px 0!important;
            }
        
            button .input-data {
                width: 40%!important;
            }
        }

        .button-container {
            text-align: center;
            overflow: auto;
        }

        #previous-button {
            float: left;
        }

        #next-button {
            float: right;
        }

        button {
            background-color: ${this.lighterGreenColor};
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
            background-color: ${this.darkerGreenColor};
        }

        h2 {
            font-size: 50px;
            line-height: 1.1;
            background: linear-gradient(
                to right, 
                #1abc9c,
                ${this.darkerGreenColor}
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: center;
            font-weight: 400;
        }

        .step-indicator-container-top {
            height: 450px;
            width: 30%;
            border-right: 2px solid ${this.lighterGreenColor};
            padding-top: 50px;
        }
        
        .step-indicator-wrapper {
            display: flex;
            align-items: center;
            position: relative;
            margin-bottom: 20px;
            margin-top: 10px;
        }
        
        .step-indicator {
            font-weight: 400;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.12);
            color: #ffffff;
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        
        .step-indicator-line {
            height: 70px;
            width: 5px;
            background-color: rgba(0, 0, 0, 0.12);
            margin: 20px;
            animation: greenLineAnimation 10s linear infinite;
        }
        
        .current-step {
            background-color: ${this.lighterGreenColor};
        }
        
        .step-indicator.green-indicator {
            background-color: ${this.darkerGreenColor};
        }

        .green-line {
            background-color: ${this.darkerGreenColor};
        }

        .step-title {
            margin-top: 8px;
            font-size: 20px;
            color: #333;
            margin-left: 10px;
        }
        
        .empty-effect {
            animation: shake 0.5s ease-in-out;
        }
        
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }

        p {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 5px; 
        }

        .required {
            color: #e74c3c; 
            font-size: 12px;
            margin-top: 35px;
            text-align: right;
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
            color: ${this.lighterGreenColor};
            font-size: 30px;
            margin-bottom: 15px;
            font-weight: bold;
        }

        `;
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
