function evalLLM(input: string, p0: string): string {
    return `Evaluated: ${input}`;
}

evalLLM("Test input",
    "Additional context"
);