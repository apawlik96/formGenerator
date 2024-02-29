export class formStylesOneStep  {
    private firstColor: string;
    private secondColor: string;
    private thirdColor: string;

    constructor() {
        this.firstColor = '#3498db';
        this.secondColor = '#56d8e4';
        this.thirdColor = '#2980b9';
        this.generateStyles();
        this.addStyles();
    }

    private generateStyles(): string {
        return`
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
            background: linear-gradient(115deg, ${this.secondColor} 10%, ${this.thirdColor} 90%);
        }

        .container {
            min-height: 550px;
            max-width: 1000px;
            background: #fff;
            width: 1000px;
            padding: 25px 40px 10px 40px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        
        .container .text {
            text-align: center;
            font-size: 41px;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
            background: -webkit-linear-gradient(right, ${this.secondColor}, #9f01ea, ${this.secondColor}, #9f01ea);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .container form {
            padding: 30px 0 0 0;
        }

        .container form .input-data {
            margin: 32px 0;
        }

        .personal-data-form{
            min-height: 400px;
        }

        form .input-data {
            width: 100%;
            height: 40px;
            margin-bottom: 32px;
            position: relative;
        }
        
        .input-data-gender {
            display: inline-flex;
            align-items: center;
            margin-left: 20px;
        }

        .gender-label {
            margin-right: 10px;
            font-size: 16px;
            color: #333;
            transition: color 0.3s ease;
        }

        .input-data-gender input[type="radio"] {
            margin-right: 5px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid ${this.firstColor};
            outline: none;
            cursor: pointer;
            position: relative;
            transition: background-color 0.3s ease;
        }
        
        .input-data-gender input[type="radio"]:checked {
            background-color: ${this.firstColor};
        }
        
        .input-data-gender input[type="radio"]::before {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none;
        }
        
        .input-data-gender input[type="radio"]:checked::before {
            display: block;
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
            border-bottom: 2px solid ${this.firstColor};
        }

        .input-data input:focus~label,
        .input-data input:not(:placeholder-shown)~label {
            transform: translateY(-20px);
            font-size: 14px;
            color: ${this.firstColor};
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
                linear-gradient(45deg, transparent 50%, ${this.secondColor} 50%),
                linear-gradient(135deg, ${this.secondColor} 50%, transparent 50%),
                linear-gradient(to right, #ccc, #ccc);
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
                linear-gradient(45deg, ${this.secondColor} 50%, transparent 50%),
                linear-gradient(135deg, transparent 50%, ${this.secondColor} 50%),
                linear-gradient(to right, #ccc, #ccc);
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
            box-shadow: 0 0 5px ${this.firstColor};
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
            border: 2px solid ${this.firstColor};
            outline: none;
            cursor: pointer;
            position: relative;
        }

        .input-data-pass input[type="checkbox"]:checked {
            background-color: ${this.firstColor};
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
            background-color: ${this.firstColor};
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
            background-color: ${this.thirdColor};
        }

        h2{
            text-align: center;
            font-size: 35px;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
            background: -webkit-linear-gradient(right, ${this.secondColor}, ${this.thirdColor}, ${this.secondColor}, ${this.thirdColor});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .step-indicator-container-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .step-indicator-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
        }

        .step-indicator {
            width: 30px;
            height: 30px;
            border: 2px solid #fff;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.12);
            color: #fff;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .step-indicator.green-indicator {
            background-color: ${this.firstColor};
        }

        .step-indicator-line {
            flex: 1;
            height: 2px;
            background-color: rgba(0, 0, 0, 0.12);
            margin: 0 5px;
        }

        .step-indicator-line.green-line {
            background-color: ${this.firstColor};
            transition: background-color 2s ease;
        }

        .step-title {
            font-size: 14px;
            color: #333;
        }

        .current-step {
            background-color: ${this.firstColor};
            width: 35px;
            height: 35px; 
            font-size: 16px;
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
            color: ${this.firstColor};
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
