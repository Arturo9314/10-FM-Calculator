import { evaluate, round } from 'mathjs'

const isOperator = (key)=>{
    return /[*/+-]/.test(key)
}

const isNumber = (key)=>{
    return /^[0-9]$/.test(key);
}

const thereIsADot = (str)=>{ 
    const lastOperator = str.match(/[-+*/](?!.*[-+*/])/); // find last operator
    if (lastOperator) {
        const index = str.lastIndexOf(lastOperator[0]); // index of lastOperator
        const afterOperator = str.substring(index + 1); 
        const includesDot = afterOperator.includes("."); 
        return includesDot
    }else
        return str.includes('.')
}

const lastItem = (str,key)=>{
    return str[str.length-1] === key
}


const updateOutput = (output, key, evaluated)=>{
    const emptyOutput = output === ''
    let outputValue = ''
    let evaluatedValue = evaluated;
    
    if(key==='RESET'){
        outputValue = ''
        evaluatedValue = false
    }else if(key==='DEL'){
       if(!evaluated){
            outputValue = output.slice(0, -1);
       }else{
            outputValue = output
       }
    }else if(isNumber(key)){
        if(emptyOutput && key ==='0')
            outputValue = ''
        else if(evaluated){
            outputValue = key
            evaluatedValue = false
        }
        else{
            outputValue = output + key
        }
    }else if(key==='.'){
       if(emptyOutput){
        outputValue = '0.'
       }else if (evaluated){
        outputValue = key
        evaluatedValue = false
       }else if(thereIsADot(output)){
        outputValue = output
       }else{
        outputValue = output+key
       }
    }else if(isOperator(key)){
        if(lastItem(output, key)){
            outputValue = output
        }else if(evaluated){
            outputValue = output + key
            evaluatedValue = false
        }else{
            outputValue = output + key
        }
    }else if(key==='='){
        if(emptyOutput){
            outputValue = ''
        }else if(!evaluated){
            const filtered = output.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');
            const result = round(evaluate(filtered), 6)
            outputValue = result
            evaluatedValue = true
        }else{
            outputValue = output
        }
    }
    return {outputValue, evaluatedValue}
}

export default updateOutput;