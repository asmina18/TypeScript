// Funktionen tager to tal og en operation som streng og returnerer resultatet
// Функция принимает два числа и операцию в виде строки, затем возвращает результат

function Calculation(num1: number, num2: number, operation: "add" | "subtract" | "multiply" | "divide"): number {
    // Используется тернарный оператор для выбора нужной операции на основе значения 'operation'
    // Если 'operation' равно "add", выполняется сложение (num1 + num2)
    // Если 'operation' равно "subtract", выполняется вычитание (num1 - num2)
    // Если 'operation' равно "multiply", выполняется умножение (num1 * num2)
    // Если 'operation' равно "divide" и num2 не равно 0, выполняется деление (num1 / num2), в противном случае возвращается NaN
    return operation === "add" ? num1 + num2 :
        operation === "subtract" ? num1 - num2 :
            operation === "multiply" ? num1 * num2 :
                operation === "divide" && num2 !== 0 ? num1 / num2 : NaN;
}

// Eksempel på brug af funktionen
console.log("Addition: " + Calculation(10, 5, "add"));
console.log("Subtraktion: " + Calculation(10, 5, "subtract"));
console.log("Multiplikation: " + Calculation(10, 5, "multiply"));
console.log("Division: " + Calculation(10, 5, "divide"));
