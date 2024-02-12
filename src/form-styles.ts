export class formStylesOneStep  {
    constructor() {
        this.addStyles();
    }

    private addStyles(): void {
        const styles = `
        *{
            margin:0;
            padding:0;
            -webkit-box-sizing:border-box;
            -moz-box-sizing:border-box;
            box-sizing:border-box;
        }
        
        body{
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
        }
        
        #divPhone {
            display: flex;
            align-items: center;
            width: 90%;
            margin: 20px; 
        }
        
        #phoneCountryCodeSelect {
            flex: 1;
            margin-right: 10px;
        }
        
        input[name="Phone"] {
            flex: 2;
        }
        
        select {
            border: none;
            border-bottom: 1px solid rgba(0,0,0,.1);
            font-family: 'Open Sans', sans-serif;
            text-transform:uppercase;
            color:#858585;
            &:hover:focus{
                color:#55b1df;
                border-bottom:1px solid #55b1df;
        }
        }

        input:not([type="radio"]){
            display:block;
            height:40px;
            width:90%;
            margin:20px;
            border:none;
            &::placeholder{
                -webkit-transform:translateY(0px);
                transform:translateY(0px);
                -webkit-transition:.5s;
                transition:.5s;
            }
            &:hover,
            &:focus,
            &:active:focus{
                color:#55b1df;
                outline:none;
                border-bottom: 1px solid #55b1df;
                &::placeholder{
                color:#55b1df;
                position:relative;
                -webkit-transform:translateY(-15px);
                transform:translateY(-15px);
                }
            }
        }
        
        input:not([type="submit"]){
            position:relative;
            z-index:1;
            border-bottom:1px solid rgba(0,0,0,.1);
            padding-left:20px;
            font-family: 'Open Sans', sans-serif;
            text-transform:uppercase;
            color:#858585;
            font-weight:lighter;
            -webkit-transition:.5s;
            transition:.5s;
        }

        input[type="radio"] {
            margin-left: 20px;
        }

        label {
            padding-left: 10px;
            color: #858585;
            font-family: 'Open Sans', sans-serif;
            font-weight: lighter;
            text-transform:uppercase;
            font-size: 14px;
        }

        input[type="submit"]{
            margin: auto;
            width: 112px;
            height: 37px;
            border-radius: 19px;
            background-clip: padding-box;
            background-color: #55b1df;
            border:1px solid #55b1df;
            border:none;
            color: #fff;
            font-family: 'Open Sans', sans-serif;
            font-weight: 300;
            letter-spacing: 2px;
        }

        input[type="submit"]:hover{
            background-color: #fff; 
            border:1px solid #55b1df; 
            color:#55b1df; 
            cursor:pointer;
        }
        input[type="submit"]:focus{
            outline: none;
        }

        p {
            font-family: 'Open Sans', sans-serif;
            margin-top: -17px;
            margin-left: 20px;
            margin-bottom: 10px;
            font-size: 10px;
            color: #FF3333;
        }

        .invalid-field {
            background-color: rgba(252, 196, 196, 0.8);
        }

        `;

        const styleElement = document.createElement('style');
        styleElement.appendChild(document.createTextNode(styles));

        document.body.appendChild(styleElement);
    }
}

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
