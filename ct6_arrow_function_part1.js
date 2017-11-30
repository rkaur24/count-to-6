var inputs = process.argv.slice(2)
var result = inputs.map(output => output[0])
                    .reduce((f_output,output) => f_output + output)

console.log(`[${inputs}] becomes "${result}"`)